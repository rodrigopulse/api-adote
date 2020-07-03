import { Request, Response } from 'express'
import Pet from '../schemas/Pet'

class PetController {
  // Create Pet
  public async create (req: Request, res: Response): Promise<Response> {
    try {
      const pet = await Pet.create(req.body)
      return res.status(201).json({ _id: pet._id })
    } catch (err) {
      return res.status(400).json({ mensagem: 'Pet não criado', erro: err })
    }
  }
}

export default new PetController()
