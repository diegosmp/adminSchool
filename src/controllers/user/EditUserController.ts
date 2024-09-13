import { Request, Response } from 'express'
import { EditUserService } from '../../services/user/EditUserService'

class EditUserController {
  async handle(req: Request, res: Response) {
    const { email, fullname } = req.body
    const user_id = req.query.user_id as string

    const editUserService = new EditUserService()
    const user = await editUserService.execute({ email, fullname, user_id })

    return res.json(user)
  }
}

export { EditUserController }
