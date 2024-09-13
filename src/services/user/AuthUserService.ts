import { prismaCliente } from '../../prisma/prisma'
import bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest {
  email: string
  password: string
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaCliente.employed.findFirst({ where: { email } })

    if (!user) {
      throw new Error('User or password incorrectly!')
    }

    const isVerifyPassword = await bcrypt.compare(password, user.password)

    if (!isVerifyPassword) {
      throw new Error('User or password incorrectly!')
    }

    const token = sign(
      {
        email: user.email,
        fullname: user.fullname,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1d',
      },
    )

    return {
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      token,
    }
  }
}

export { AuthUserService }