import { Request, Response } from 'express'
import { CreateUserService } from '../services/user/CreateUserService'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, password, fullname } = req.body

    const createUserService = new CreateUserService()
    const user = await createUserService.execute({ email, password, fullname })

    return res.status(201).json(user)
  }
}

export { CreateUserController }
