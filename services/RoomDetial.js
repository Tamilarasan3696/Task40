import { client } from '../index.js';

export async function addRoom(data) {
    return await client.db('bw41').collection('createroom').insertMany(data);
}
export async function getRoom() {
    return await client.db('bw41').collection('createroom').find().toArray();
}
