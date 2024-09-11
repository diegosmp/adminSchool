import { prismaCliente } from '../../prisma/prisma'
import bcrypt from 'bcryptjs'
import isValidEmail from '../../utils/isValidateEmail'

interface UserRequest {
  fullname: string
  email: string
  password: string
}

class CreateUserService {
  async execute({ email, password, fullname }: UserRequest) {
    const isValidateEmail = isValidEmail(email)
    if (!isValidateEmail) {
      throw Error('E-mail is invalid!')
    }
    const passwordHash = await bcrypt.hash(password, 8)
    const user = await prismaCliente.employed.create({
      data: {
        fullname,
        email,
        password: passwordHash,
      },
    })
  }
}

export { CreateUserService }
