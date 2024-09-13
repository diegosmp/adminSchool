import { Request, Response } from 'express'
import { DeleteUserService } from '../../services/user/DeleteUserService'

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id as string

    console.log(user_id)

    const deleteUserService = new DeleteUserService()
    const user = await deleteUserService.execute(user_id)

    return res.json(user)
  }
}

export { DeleteUserController }
