import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'
import dotenv from 'dotenv'
import User from '../schemas/User'

dotenv.config()
class UserController {
  // Get user ID
  public async id (req: Request, res: Response): Promise<Response> {
    try {
      const id: string = req.path.split('/').pop()
      const users = await User.find({ _id: id })
      return res.status(200).json(users[0])
    } catch (err) {
      return res.status(400).json({ mensagem: 'Usuário não encontrado', erro: err })
    }
  }

  // Create User
  public async create (req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body)
      return res.status(201).json({ email: user.email, _id: user._id })
    } catch (err) {
      return res.status(400).json({ mensagem: 'Usuário não criado', erro: err })
    }
  }

  // Login
  public async login (req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find({ email: req.body.email })
      if (users.length === 0) {
        return res.status(401).json({ mensagem: 'Usuário e/ou senha incorretos' })
      }
      bcrypt.compare(req.body.password, users[0].password, function (err, result) {
        if (result) {
          const payload = { id: users[0]._id }
          const token = jwt.encode(payload, process.env.SECRET_JWT)
          return res.status(200).json({ _id: users[0]._id, email: users[0].email, token: token })
        } else if (err) {
          return res.status(401).json({ mensagem: 'Ocorreu um erro' })
        } else {
          return res.status(401).json({ mensagem: 'Usuário e/ou senha incorretos' })
        }
      })
    } catch (err) {
      return res.status(401).json({ mensagem: 'Ocorreu um problema', erro: err })
    }
  }
}

export default new UserController()
