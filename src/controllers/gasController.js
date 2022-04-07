import { gas } from '../models/gasModel.js'

const getData = async (req, res) => {
    gas.find({}, (err, data) => {
        if (err) console.log(err)
        else res.send(data)
    })
}

export { getData }
