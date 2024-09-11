import express, { Request, Response, NextFunction } from 'express'
import getUserRoute from './routes/get-user-route'

const app = express()
app.use(express.json())

app.use('/users', getUserRoute)

app.use((err: Error, req: Request, res: Response, nex: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json(err.message)
  }

  return res.status(500).json({ error: 'Error instance of connect server!' })
})

app.listen(3333)
