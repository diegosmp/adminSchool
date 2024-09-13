import { Request, Response } from 'express'
import { ResetPasswordService } from '../services/user/ResetPasswordService'

class ResetPasswordController {
  async handle(req: Request, res: Response) {
    const { password } = req.body
    const user_id = req.query.user_id as string

    const resetPassowrdService = new ResetPasswordService()
    const user = resetPassowrdService.execute({ password, user_id })

    return res.json(user)
  }
}

export { ResetPasswordController }
