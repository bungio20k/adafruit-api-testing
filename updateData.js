import axios from 'axios'
const config = {
    headers: {
        'X-AIO-Key': 'aio_nTsq28MxeF73f31XpMARar8IoO5t'
    }
}
const origin = 'https://io.adafruit.com/api/v2/giangnam1905'

import { user, log, door, room, light } from './model.js'

const updateData = () => {
    const door = updateDoor()
    const light1 = updateLight1()
    const light2 = updateLight2()
    const gas = updateGas()
    const tempHumid = updateTempHumid()
    Promise.all([door, light1, light2, gas, tempHumid]).then().catch(error => {
        console.log(error)
    })
}

const updateDoor = async () => {
    const data = await axios.get(origin + '/feeds/bbc-door/data?limit=1').then((res) => {
        return res.data[0]
    })
    const findDoor = await door.findOne({ 'feed_id': data.feed_id })
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
        const findLog = await log.findOne({ 'ada_id': data.id })
        if (!findLog) {
            const newLog = {
                'ada_id': data.id,
                'time': data.created_at,
                'action': data.value == 'OPEN' ? 'Cửa 1 mở' : 'Cửa 1 đóng'
            }
            log.create(newLog, (err, data) => {
                if (err) console.log(err)
                else {
                    findDoor.listLog.unshift(data._id)
                    findDoor.save((err, data) => {
                        if (err) console.log(err)
                    })
                }
            })
        }
    }
}

const updateLight1 = async () => {
    const led1 = await axios.get(origin + '/feeds/bbc-led/data?limit=1').then((res) => {
        return res.data[0]
    })
    const findLight1 = await light.findOne({ 'feed_id': led1.feed_id })
    if (!findLight1) {
        const newLight = {
            'name': 'Đèn 1',
            'feed_id': led1.feed_id,
            'is_on': led1.value == '1'
        }
        light.create(newLight, (err, data) => {
            if (err) console.log(err)
        })
    }
    else {
        const findLog = await log.findOne({ 'ada_id': led1.id })
        if (!findLog) {
            const newLog = {
                'ada_id': led1.id,
                'time': led1.created_at,
                'action': led1.value == '1' ? 'Đèn 1 mở' : 'Đèn 1 tắt'
            }
            log.create(newLog, (err, data) => {
                if (err) console.log(err)
                else {
                    findLight1.lightLogs.unshift(data._id)
                    findLight1.save((err, data) => {
                        if (err) console.log(err)
                    })
                }
            })
        }
    }
}

const updateLight2 = async () => {
    const led2 = await axios.get(origin + '/feeds/bbc-led-1/data?limit=1').then((res) => {
        return res.data[0]
    })
    const findLight2 = await light.findOne({ 'feed_id': led2.feed_id })
    if (!findLight2) {
        const newLight = {
            'name': 'Đèn 2',
            'feed_id': led2.feed_id,
            'is_on': led2.value == '3',
        }
        light.create(newLight, (err, data) => {
            if (err) console.log(err)
            else console.log(data)
        })
    }
    else {
        const findLog = await log.findOne({ 'ada_id': led2.id })
        if (!findLog) {
            const newLog = {
                'ada_id': led2.id,
                'time': led2.created_at,
                'action': led2.value == '3' ? 'Đèn 2 mở' : 'Đèn 2 tắt'
            }
            log.create(newLog, (err, data) => {
                if (err) console.log(err)
                else {
                    findLight2.lightLogs.unshift(data._id)
                    findLight2.save((err, data) => {
                        if (err) console.log(err)
                        else console.log(data)
                    })
                }
            })
        }
    }
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