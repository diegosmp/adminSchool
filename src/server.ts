import express, { Request, Response, NextFunction } from 'express'

const app = express()
app.use(express.json())

app.use((err: Error, req: Request, res: Response, nex: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json(err.message)
  }

  return res.status(500).json({ error: 'Error instance of connect server!' })
})

app.listen(3333)
