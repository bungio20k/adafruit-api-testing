import {door} from '../models/doorModel.js'

const getData = async (req, res) => {
    door.find({}, (err, data) => {
        if (err) console.log(err)
        else res.send(data)
    })
}

export { getData }
