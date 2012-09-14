var vows = require('vows'),
    assert = require('assert');

var maze = require('./maze');

var Grid = maze.Grid;
var CellTypes = maze.CellTypes;

vows.describe('Maze').addBatch({
    'when it is a simple 3x3':{
        topic: new Grid([2, 0], [0, 0],
            [[CellTypes.N, CellTypes.NE, CellTypes.W],
            [CellTypes.NS, CellTypes.ESW, CellTypes.NW],
            [CellTypes.ES, CellTypes.W, CellTypes.S]]),
        'it should have a victory point at 0, 0': function(maze) {
            assert.isTrue(maze.victory(0, 0));
        },
        'it should not have a victory point at 2, 0': function(maze) {
            assert.isFalse(maze.victory(2, 0));
        },
        'it should have a starting location of 2, 0': function(maze) {
            assert.isEqual(maze.getStart(), [2, 0]);
        }
    }
}).export(module);

vows.describe('CellTypes').addBatch({
    'when have walls to the north, east, and west':{
        topic: CellTypes.NEW,
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
