
const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('Event E2E API', () => {

    before(() => dropCollection('events'));

    const startTime = new Date('June 30, 2019 09:00:00');
    const endTime = new Date('June 30, 2019 12:00:00');

    let wineTime = {
        name: 'Wine Event',
        description: 'Time to drink some wine!',
        location: 'Winery',
        time: {
            start: startTime.toJSON(),
            end: endTime.toJSON()
        }
    };

    it('posts an event', () => {
        return request.post('/api/events')
            .send(wineTime)
            .then(({ body }) => {
                const { _id, __v } = body;
                assert.ok(id);
                assert.equal(__v, 0);
                assert.deepEqual(body, {
                    ...wineTime,
                    _id,
                    __v
                });
            });
    });
});