import { Request, Response } from 'express'
import { EditUserService } from '../services/user/EditUserService'

class EditUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body
    const user_id = req.user_id

    const editUserService = new EditUserService()
    const user = await editUserService.execute({ email, password, user_id })

    return res.json(user)
  }
}

export { EditUserController }
