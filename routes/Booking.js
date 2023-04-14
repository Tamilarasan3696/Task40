import express from 'express'
import { getbookings, BookingStatus, CustomerStatus, addBooking, RoomDetails } from '../services/BookingDetial.js'
const router  = express.Router()

router.get("/", async function(req,res){
    const result = await getbookings()
    res.send(result)
})


router.get("/customerstatus", async function(req,res){
    const result = await CustomerStatus()
    console.log(result)
    res.send(result)
})

router.get("/status", async function(req,res){
    const result = await BookingStatus()
      console.log(result)
    res.send(result)
})


router.post("/addbooking", async function (req, res) {
    
    const {id,roomID,customerName,date,startTime,endTime} =  req.body;
    console.log(req.body)
    const roomDetails = await RoomDetails(date,startTime,endTime)
    console.log(roomDetails,"roomdetails")
    if(roomDetails){
        res.send({msg:"Already Booked"})
    }else{
        const result = await addBooking({
            id:id,
            roomID:roomID,
            customerName:customerName,
            date:date,
            startTime:startTime,
            endTime:endTime
       
        });
        
        res.send(result);
    }

  });


export default router
