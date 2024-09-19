import { prismaCliente } from '../../prisma/prisma'

interface UserRequest {
  email: string
  firstname: string
  secondname: string
  user_id: string
}

class EditUserService {
  async execute({ email, firstname, secondname, user_id }: UserRequest) {
    console.log(user_id)

    const user = await prismaCliente.employed.update({
      where: { id: user_id },
      data: {
        email,
        firstname,
        secondname,
      },
    })

    return user
  }
}

export { EditUserService }
