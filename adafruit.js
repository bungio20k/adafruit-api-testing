const express = require("express");
const axios = require("axios");

const config = {
    headers: {
        "X-AIO-Key": "aio_GUqJ508ZKhfmBOLFNyV3enViEJZv"
    }
}

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// push data to feed
// axios.post('https://io.adafruit.com/api/v2/bungio20k/feeds/light-1/data',
//     {
//         "value": "0"
//     },
//     config)
//     .then((response) => {
//         console.log(response.data)
//     })

// get all data from feed
// axios.get('https://io.adafruit.com/api/v2/bungio20k/feeds/light-1/data').then((res) => {
//     console.log(res.data)
// })

// get all feeds
// axios.get('https://io.adafruit.com/api/v2/bungio20k/feeds').then((res) => {
//     console.log(res.data)
// })

// get a specific feed
// axios.get('https://io.adafruit.com/api/v2/bungio20k/feeds/light-1').then((res) => {
//     console.log(res.data)
// })

// create a new feeds
// axios.post('https://io.adafruit.com/api/v2/bungio20k/feeds', {
//     'feed': {
//         'name': 'LIGHT_3',
//         'description': 'feed for light 3',
//         'visibility': 'public',
//     }
// }, config)
//     .then((res) => {
//         console.log(res.data)
//     })

//create a new feeds in group
// axios.post(
//     'https://io.adafruit.com/api/v2/bungio20k/groups/lights/feeds',
//     {
//         'name': 'LIGHT_3',
//         'visibility': 'public'
//     },
//     config
// ).then((res) => {
//     console.log(res.data)
// })

// delete a feed
// axios.delete('https://io.adafruit.com/api/v2/bungio20k/feeds/light-3', config).then((res) => {
//     console.log(res.data)
// })


// get all group
// axios.get('https://io.adafruit.com/api/v2/bungio20k/groups', config).then((res) => {
//     console.log(res.data)
// })

// axios.post(
//     'https://io.adafruit.com/api/v2/bungio20k/groups',
//     {
//         'name': 'Lights',
//     },
//     config
// ).then((res) => {
//     console.log(res.data)
// })

// get group feeds
// axios.get(
//     'https://io.adafruit.com/api/v2/bungio20k/groups/lights/feeds',
//     config
// ).then((res) => {
//     console.log(res.data)
// })

app.listen(3001, () => {
    console.log('Server is listening on 3001')
})