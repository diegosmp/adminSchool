import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import { config } from 'dotenv'
import getUserRoute from './routes/get-user-route'
import getClassRoomRoute from './routes/get-classRoom-route'
import getTeacherRoute from './routes/get-teacher-route'
import cors from 'cors'

config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())

app.use('/users', getUserRoute)
app.use('/classrooms', getClassRoomRoute)
app.use('/teachers', getTeacherRoute)

app.use((err: Error, req: Request, res: Response, nex: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message })
  }

  return res.status(500).json({ error: 'Error instance of connect server!' })
})

app.listen(PORT, () => {
  console.log(`Server open in ${PORT}`)
})
