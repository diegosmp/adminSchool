import { prismaCliente } from '../../prisma/prisma'

interface UserRequest {
  email: string
  fullname: string
  user_id: string
}

class EditUserService {
  async execute({ email, fullname, user_id }: UserRequest) {
    console.log(user_id)

    const user = await prismaCliente.employed.update({
      where: { id: user_id },
      data: {
        email,
        fullname,
      },
    })

    return user
  }
}

export { EditUserService }
