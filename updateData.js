import axios from 'axios'
const config = {
    headers: {
        'X-AIO-Key': 'aio_nTsq28MxeF73f31XpMARar8IoO5t'
    }
}
const origin = 'https://io.adafruit.com/api/v2/giangnam1905'

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
    console.log(data)
}

const updateLight = async () => {
    const led1 = await axios.get(origin + '/feeds/bbc-led/data?limit=1').then((res) => {
        return res.data[0]
    })
    const led2 = await axios.get(origin + '/feeds/bbc-led-1/data?limit=1').then((res) => {
        return res.data[0]
    })
    console.log(led1);
    console.log(led2);
}

const updateGas = async () => {
    const data = await axios.get(origin + '/feeds/bbc-gas/data?limit=1').then((res) => {
        return res.data[0]
    })
    console.log(data)
}

const updateTempHumid = async () => {
    const temp = await axios.get(origin + '/feeds/bbc-temp/data?limit=1').then((res) => {
        return res.data[0]
    })
    const humid = await axios.get(origin + '/feeds/bbc-humi/data?limit=1').then((res) => {
        return res.data[0]
    })
    console.log(temp);
    console.log(humid);
}

export { updateData };