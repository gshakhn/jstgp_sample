var vows = require('vows'),
    assert = require('assert');

var maze = require('./maze');

var Engine = maze.Engine;

vows.describe('The Amazing Engine').addBatch({
    'when there is no game running': {
        topic: new(Engine),

        'should be able to start a game': function(engine) {
            assert.deepEqual(engine.getEngineState(), {state: 'notStarted'})
        }
    }
}).export(module);