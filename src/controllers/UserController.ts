import { Request, Response } from 'express'

import User from '../schemas/User'

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
    const user = await User.create(req.body)

    return res.status(201).json({ email: user.email })
  }
}

export default new UserController()
