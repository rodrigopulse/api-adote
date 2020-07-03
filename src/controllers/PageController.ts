import { Request, Response } from 'express'
import Page from '../schemas/Page'

class PageController {
  // Create Page
  public async create (req: Request, res: Response): Promise<Response> {
    try {
      const page = await Page.create(req.body)
      return res.status(201).json({ _id: page._id })
    } catch (err) {
      return res.status(400).json({ mensagem: 'Página não criada', erro: err })
    }
  }
}

export default new PageController()
