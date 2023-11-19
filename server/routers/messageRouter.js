const { Router } = require('express');
const { Message, UserEvents } = require('../db/models');

const message = Router();

message.get('/:chatId', (req, res) => {
    const {chatId} = req.params

    console.log('chat', chatId)

    Message.findAll({where: {chatId: chatId}})
    .then((messageData) => {
        console.log('found message')
        res.status(200).send(messageData)
    })
})

message.post('/', (req, res) => {
    const {message} = req.body

    Message.create({message})
    .then(() => {
        console.log('message created')
        res.sendStatus(201)
    })
})


module.exports = message;