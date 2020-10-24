import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import colors from 'colors'

dotenv.config()

// connect DB
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('running')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `server running on port ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
)
