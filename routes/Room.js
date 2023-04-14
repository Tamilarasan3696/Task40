import express from 'express'
import { getRoom, addRoom } from '../services/RoomDetial.js'
const router  = express.Router()

router.get("/getroom", async function(req,res){
    const result = await getRoom()
    res.send(result)
})

router.post("/addroom", async function (req, res) {
    const data =  req.body;
    console.log(data)
    const result = await addRoom(data)
    res.send(result);
  });

  export default router


