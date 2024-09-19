import { prismaCliente } from '../../prisma/prisma'
import bcrypt from 'bcryptjs'
import isValidEmail from '../../utils/isValidateEmail'

interface UserRequest {
  firstname: string
  secondname: string
  email: string
  password: string
}

class CreateUserService {
  async execute({ email, password, firstname, secondname }: UserRequest) {
    const isValidateEmail = isValidEmail(email)
    if (!isValidateEmail) {
      throw new Error('E-mail is invalid!')
    }
    const passwordHash = await bcrypt.hash(password, 8)

    const user = await prismaCliente.employed.create({
      data: {
        firstname,
        secondname,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        firstname: true,
        secondname: true,
        email: true,
      },
    })

    return user
  }
}

export { CreateUserService }
