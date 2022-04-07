import express from 'express'
const doorsRouter = express.Router()

import { getAll } from '../controllers/doorsController.js'

doorsRouter.get('/', getAll)

export { doorsRouter }
