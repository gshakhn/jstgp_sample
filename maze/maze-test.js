var vows = require('vows'),
    assert = require('assert');

var maze = require('./maze');

var CellTypes = maze.CellTypes;

vows.describe('CellTypes').addBatch({
    'when have walls to the north, east, and west':{
        topic: (new CellTypes()).NEW,
        'it should not have an opening to the south':function (location) {
            assert.isFalse(location.canGoSouth());
        },
        'it should have an opening to the north':function (location) {
            assert.isTrue(location.canGoNorth());
        },
        'it should have an opening to the east':function (location) {
            assert.isTrue(location.canGoEast());
        },
        'it should have an opening to the west':function (location) {
            assert.isTrue(location.canGoWest());
        }
    }
}).export(module);
