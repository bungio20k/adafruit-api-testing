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

const roomSchema = new Schema({
    name: String,
    temperature: Number,
    humidity: Number,
    refresh: Number,
    temp_log: Boolean,
    gas_spectate_start: String,
    gas_spectate_end: String,
    gas_log: Boolean
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
const room = mongoose.model('room', roomSchema, 'rooms')
const light = mongoose.model('light', lightSchema, 'lights')

export { user, log, door, room, light }