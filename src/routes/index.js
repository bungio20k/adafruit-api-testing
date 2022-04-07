import { doorsRouter } from './doors.js'

const router = (app) => {
    app.use('/api/v1/doors', doorsRouter)
}

export { router }