const { assert } = require('chai');
const { Types } = require('mongoose');
const { getErrors } = require('./helpers');
const Event = require('../../lib/models/Event');

describe('Event model', () => {

    const data = {
        name: 'Ladies Wine Night',
        description: 'Come have some wine with your friends',
        location: 'Winery',
        time: {
            start: new Date(2018, 6, 22, 7, 30),
            end: new Date(2018, 6, 22, 8, 30) 
        }
    };

    it('valid good model', () => {
        const event = new Event(data);
        data._id = event._id;
        assert.deepEqual(event.toJSON(), data);
        assert.isUndefined(event.validateSync());
    });

    it('event required fields', () => {
        const event = new Event({ });
        const errors = getErrors(event.validateSync(), 4);

        assert.equal(errors.name.kind, 'required');
        assert.equal(errors.description.kind, 'required');
        assert.equal(errors.location.kind, 'required');
        assert.equal(errors['time.start'].kind, 'required');
    });
});