import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import { router } from './routes';
import { connecToDB } from './config/mongo';


const PORT = process.env.PORT || 3001;
const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

connecToDB().then(()=>console.log('Database: Welcome Joseph'))

app.listen(PORT, () => 
  console.log(`Server Online on port ${PORT}`)
)