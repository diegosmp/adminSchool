import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, password, firstname, secondname } = req.body

    const createUserService = new CreateUserService()
    const user = await createUserService.execute({ email, password, firstname, secondname })

    return res.status(201).json(user)
  }
}

export { CreateUserController }
