import { light } from '../models/lightModel.js'

const getData = async (req, res) => {
    light.find({}, (err, data) => {
        if (err) console.log(err)
        else res.send(data)
    })
}

export { getData }
