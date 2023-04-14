import { client } from '../index.js';

export async function addBooking(data) {
    return await client.db('bw41').collection('roombook').insertMany([data])};


export async function CustomerStatus() {
    return await client.db('bw41').collection('roombook').aggregate([
        { $lookup: { from: "roomcreate", localField: "lf", foreignField: "roomId", as: "RoomDetails" } },
        { $project: { "RoomDetails.roomName": 1, customerName: 1, date: 1, startTime: 1, endTime: 1 } }
    ]).toArbw41
}
export async function BookingStatus() {
    return await client.db('bw41').collection('roombook').aggregate([
        { $lookup: { from: "roomcreate", localField: "lf", foreignField: "roomId", as: "RoomDetails" } },
        { $project: { "RoomDetails.roomName": 1, "RoomDetails.status": 1, customerName: 1, date: 1, startTime: 1, endTime: 1 } }
    ]).toArray();
}
export async function getbookings() {
    return await client.db('bw41').collection('roombook').find().toArray();
}
  
export async function RoomDetails(date,startTime,endTime) {
    return await client.db('bw41').collection('roombook').findOne({date:date,startTime:startTime,endTime:endTime})}