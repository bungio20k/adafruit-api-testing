import axios from 'axios'
const config = {
    headers: {
        'X-AIO-Key': 'aio_nTsq28MxeF73f31XpMARar8IoO5t'
    }
}
const origin = 'https://io.adafruit.com/api/v2/giangnam1905'

import {user, log, door, room, light} from './model.js'

const updateData = () => {
    const door = updateDoor()
    const light = updateLight()
    const gas = updateGas()
    const tempHumid = updateTempHumid()
    Promise.all([door, light, gas, tempHumid]).then().catch(error => {
        console.log(error)
    })
}

const updateDoor = async () => {
    const data = await axios.get(origin + '/feeds/bbc-door/data?limit=1').then((res) => {
        return res.data[0]
    })
    const findDoor = await door.findOne({'feed_id' : data.feed_id})
    if (!findDoor) {
        const newDoor = {
            'feed_id': data.feed_id,
            'open': data.value == 'OPEN',
            'begin_spectate': new Date().toString(),
            'end_spectate': new Date().toString(),
        }
        door.create(newDoor, (err, data) => {
            if (err) console.log(err)
        })
    }
    else {
        const findLog = await log.findOne({'ada_id': data.id})
        if (!findLog) {
            const newLog = {
                'ada_id': data.id,
                'time': data.created_at,
                'action': data.value == 'OPEN'? 'Cửa 1 mở' : 'Cửa 1 đóng'
            }
            log.create(newLog, (err, data) => {
                if (err) console.log(err)
                else {
                    findDoor.listLog.unshift(data._id)
                    findDoor.save((err, data) => {
                        if (err) console.log(err)
                        else console.log(data)
                    })
                }
            })
        }
    }
}

const updateLight = async () => {
    const led1 = await axios.get(origin + '/feeds/bbc-led/data?limit=1').then((res) => {
        return res.data[0]
    })
    const led2 = await axios.get(origin + '/feeds/bbc-led-1/data?limit=1').then((res) => {
        return res.data[0]
    })
    // console.log(led1);
    // console.log(led2);
}

const updateGas = async () => {
    const data = await axios.get(origin + '/feeds/bbc-gas/data?limit=1').then((res) => {
        return res.data[0]
    })
    // console.log(data)
}

const updateTempHumid = async () => {
    const temp = await axios.get(origin + '/feeds/bbc-temp/data?limit=1').then((res) => {
        return res.data[0]
    })
    const humid = await axios.get(origin + '/feeds/bbc-humi/data?limit=1').then((res) => {
        return res.data[0]
    })
    // console.log(temp);
    // console.log(humid);
}

export { updateData };