var vows = require('vows'),
    assert = require('assert');

var maze = require('./maze');

var Grid = maze.Grid;
var CellTypes = maze.CellTypes;
var simpleLab = maze.SampleLabyrinths.simple;
var Labyrinth = maze.Labyrinth;
var PlayerDirections = maze.PlayerDirections;

vows.describe('Labyrinth').addBatch({
   'when the game starts with a simple labyrinth':{
       topic: new Labyrinth(simpleLab),
       'it should have the player at the start location': function(lab) {
           assert.deepEqual(lab.getPlayerLocation(), lab.getGrid().getStart());
       },
       'it should have the player facing north': function(lab) {
           assert.deepEqual(lab.getPlayerDirection(), PlayerDirections.NORTH);
       }
   }
}).export(module);

vows.describe('Player').addBatch({
    'when the player is facing is north': {
        topic: new Player([0,0], PlayerDirections.NORTH),
        'it should face east when it turns to the right': function(player) {
            player.turnRight();
            assert.deepEqual(player.getDirection(), PlayerDirections.EAST);
        },
        'it should face west when it turns to the left': function(player) {
            player.turnLeft();
            assert.deepEqual(player.getDirection(), PlayerDirections.WEST);
        },
        'it should face south if the player turns right twice': function(player) {
            player.turnRight();
            player.turnRight();
            assert.deepEqual(player.getDirection(), PlayerDirections.SOUTH);
        },
        'it should face south if the player turns left twice': function(player) {
            player.turnLeft();
            player.turnLeft();
            assert.deepEqual(player.getDirection(), PlayerDirections.SOUTH);
        }
    },
    'when the player is facing is south': {
        topic: new Player([0,0], PlayerDirections.SOUTH),
        'it should face west when it turns to the right': function(player) {
            player.turnRight();
            assert.deepEqual(player.getDirection(), PlayerDirections.WEST);
        },
        'it should face east when it turns to the left': function(player) {
            player.turnLeft();
            assert.deepEqual(player.getDirection(), PlayerDirections.EAST);
        },
        'it should face north if the player turns right twice': function(player) {
            player.turnRight();
            player.turnRight();
            assert.deepEqual(player.getDirection(), PlayerDirections.NORTH);
        },
        'it should face north if the player turns left twice': function(player) {
            player.turnLeft();
            player.turnLeft();
            assert.deepEqual(player.getDirection(), PlayerDirections.NORTH);
        }
    }
});

vows.describe('Maze').addBatch({
    'when it is a simple 3x3':{
        topic: new Grid(simpleLab.start, simpleLab.end, simpleLab.cells),
        'it should have a victory point at 0, 0': function(maze) {
            assert.isTrue(maze.victory(0, 0));
        },
        'it should not have a victory point at 2, 0': function(maze) {
            assert.isFalse(maze.victory(2, 0));
        },
        'it should have a starting location of 2, 0': function(maze) {
            assert.deepEqual(maze.getStart(), [2, 0]);
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
