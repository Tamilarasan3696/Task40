import  express  from "express";
import { MongoClient} from "mongodb";
import Booking from './routes/Booking.js'
import Room from './routes/Room.js'
import * as dotenv from 'dotenv';



dotenv.config();



const app = express();

const PORT=process.env.PORT;

//middleware
app.use(express.json());




const  MONGO_URL=process.env.MONGO_URL
 
 
 

async function creatConnection() {
  // Use connect method to connect to the server
  const client = new MongoClient(MONGO_URL);

  await client.connect();
  console.log('Mongo is connected successfully to server');
  return client;
}
 export const client= await creatConnection();


app.get('/', (req, res)=> {
  res.send('Hello World TAMILAARASAN');
})


app.use('/booking', Booking)
app.use('/room', Room)


app.listen(PORT, ()=>console.log("server connect successfully", PORT));