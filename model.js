import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
})

const logSchema = new Schema({
    ada_id: String,
    time: Date,
    action: String
})

const doorSchema = new Schema({
    feed_id: String,
    name: { type: String, default: 'Cửa 1' },
    open: { type: Boolean, default: false },
    begin_spectate: String,
    end_spectate: String,
    warning_duration: { type: Number, default: 5 },
    log: { type: Boolean, default: true },
    listLog: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'log'
        }],
        default: []
    }
})

const tempSchema = new Schema({
    room: {type: String, default: 'Phòng 1'},
    value: Number,
    feed_id: String,
    log: {type: Boolean, default: true},
    listLog: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'log'
        }],
        default: []
    }
})

const humidSchema = new Schema({
    room: {type: String, default: 'Phòng 1'},
    value: Number,
    feed_id: String,
    log: {type: Boolean, default: true},
    listLog: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'log'
        }],
        default: []
    }
})

const gasSchema = new Schema({
    room: {type: String, default: 'Phòng 1'},
    value: Number,
    feed_id: String,
    log: {type: Boolean, default: true},
    listLog: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'log'
        }],
        default: []
    }
})

const lightSchema = new Schema({
    feed_id: String,
    name: String,
    is_on: Boolean,
    auto: { type: Boolean, default: false },
    interval: { type: Number, default: 0 },
    log: { type: Boolean, default: true },
    lightLogs: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'log'
        }],
        default: []
    }
})

const user = mongoose.model('user', userSchema)
const log = mongoose.model('log', logSchema, 'logs')
const door = mongoose.model('door', doorSchema, 'doors')
const light = mongoose.model('light', lightSchema, 'lights')
const temp = mongoose.model('temp', tempSchema)
const humid = mongoose.model('humid', humidSchema)
const gas = mongoose.model('gas', gasSchema)
export { user, log, door, light, temp, humid, gas}