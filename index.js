import express from 'express';
import mongoose  from 'mongoose';

const app = express()
mongoose.connect("mongodb+srv://dadn:123123123@cluster0.ssxqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true }).catch(err => console.error(err));

import {updateData} from './updateData.js'
export {user, log, door, room, light} from './model.js'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

updateData();
// setInterval(updateData, 5000);

app.get('/api/v1/door', async (req, res) => {
})

app.listen(3001, () => {
    console.log('Server is listening on 3001')
})