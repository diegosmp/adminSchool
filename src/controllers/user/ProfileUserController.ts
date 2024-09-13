import { Request, Response } from 'express'
import { ProfileUserService } from '../../services/user/ProfileUserService'

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id

    const profileUserService = new ProfileUserService()
    const user = await profileUserService.execute(user_id)

    return res.json(user)
  }
}

export { ProfileUserController }
