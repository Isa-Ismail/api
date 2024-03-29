import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import hotelRoute from './routes/hotels.js'
import authRoute from './routes/auth.js'
import pubRoute from './routes/publication.js'
import noticeRoute from './routes/notice.js'
import quizRoute from './routes/quiz.js'
import cors from 'cors'

//configuring app
const app = express()
dotenv.config()

//DB pipeline
try {
  mongoose.connect(process.env.MONGO).then(()=>{
    console.log('mongo connected')
  })
} catch (error) {
  console.log(error)
}

//middleware
app.use(express.json())

//CORS
app.use(cors({
  origin: '*'
}))

//All routes
app.use('/api/hotels', hotelRoute)
app.use('/api/auth', authRoute)
app.use('/api/publications', pubRoute)
app.use('/api/notice', noticeRoute)
app.use('/api/quiz', quizRoute)
//Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'something went wrong'

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})

//Server Engine starter
app.listen(8000, ()=> {
  console.log('back connected')
})