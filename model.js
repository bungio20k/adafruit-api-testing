import mongoose  from 'mongoose';
const { Schema } = mongoose;

const doorsListSchema = new Schema({
    doors: [{
        type: Schema.Types.ObjectId,
        ref: 'door'
    }],
    logs: [{
        type: Schema.Types.ObjectId,
        ref: 'log'
    }]
})

const roomsListSchema = new Schema({
    rooms: [{
        type: Schema.Types.ObjectId,
        ref: 'room'
    }],
    logs: [{
        type: Schema.Types.ObjectId,
        ref: 'log'
    }]
})

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    doorsList: doorsListSchema,
    roomsList: roomsListSchema
})

const logSchema = new Schema({
    time: Date,
    action: String
})

const doorSchema = new Schema({
    name: String,
    open: Boolean,
    begin_spectate: String,
    end_spectate: String,
    warning_duration: Number,
    log: Boolean,
})

const roomSchema = new Schema({
    name: String,
    auto: Boolean,
    temperature: Number,
    humidity: Number,
    refresh: Number,
    temp_log: Boolean,
    lightList: [{
        type: Schema.Types.ObjectId,
        ref: 'light'
    }],
    lightLogs: [{
        type: Schema.Types.ObjectId,
        ref: 'log'
    }],
    gas_spectate_start: String,
    gas_spectate_end: String,
    gas_warning_duration: Number,
    gas_log: Boolean
})

const lightSchema = new Schema({
    name: String,
    is_on: Boolean,
    auto: Boolean,
    interval: Number,
    log: Boolean
})

const doorsList = mongoose.model('doorsList', doorsListSchema)
const roomsList = mongoose.model('roomsList', roomsListSchema)
const user = mongoose.model('user', userSchema)
const log = mongoose.model('log', logSchema, 'logs')
const door = mongoose.model('door', doorSchema, 'doors')
const room = mongoose.model('room', roomSchema, 'rooms')
const light = mongoose.model('light', lightSchema, 'lights')

export {doorsList, roomsList, user, log, door, room, light}