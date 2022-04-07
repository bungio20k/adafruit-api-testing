import { temp } from '../models/tempModel.js'

const getData = async (req, res) => {
    temp.find({}, (err, data) => {
        if (err) console.log(err)
        else res.send(data)
    })
}

export { getData }
