import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import { config } from 'dotenv'
import getUserRoute from './routes/get-user-route'

config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use('/users', getUserRoute)

app.use((err: Error, req: Request, res: Response, nex: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message })
  }

  return res.status(500).json({ error: 'Error instance of connect server!' })
})

app.listen(PORT, () => {
  console.log(`Server open in ${PORT}`)
})
