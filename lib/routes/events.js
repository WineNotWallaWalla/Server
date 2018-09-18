const router = require('express').Router();
const { respond, getParam } = require('./route-helpers');
const Event = require('../models/Event');

module.exports = router

    .param('id', getParam)

    .post('/', respond(
        ({ body }) => Event.create(body)
    ))

    .get('/', respond(
        () => Event.find()
    ))

    .get('/:id', respond(
        ({ id }) => Event.findById(id).lean()
    ));