// constants for player direction
var PlayerDirections = {};
PlayerDirections.NORTH = {name: 'north'};
PlayerDirections.EAST = {name: 'east'};
PlayerDirections.WEST = {name: 'west'};
PlayerDirections.SOUTH = {name: 'south'};

// where are the walls openings in a cell
var CellType = function(canGoNorth, canGoEast, canGoSouth, canGoWest) {
    this.northOpen = canGoNorth;
    this.eastOpen = canGoEast;
    this.southOpen = canGoSouth;
    this.westOpen = canGoWest;
};

CellType.prototype.canGoNorth = function() {
    return this.northOpen;
};

CellType.prototype.canGoEast = function() {
    return this.eastOpen;
};

CellType.prototype.canGoSouth = function() {
    return this.southOpen;
};

CellType.prototype.canGoWest = function() {
    return this.westOpen;
};

// Letter indicates opening in that direction
CellTypes = {};
CellTypes.N = {};
CellTypes.E = {};
CellTypes.S = {};
CellTypes.W = {};
CellTypes.NE = {};
CellTypes.NW = {};
CellTypes.NS = {};
CellTypes.NEW = new CellType(true, true, false, true);
CellTypes.NES = {};
CellTypes.NWE = {};
CellTypes.ES = {};
CellTypes.EW = {};
CellTypes.ESW = {};
CellTypes.SW = {};

// The mapping of coordinates to cell tyeps
// Also knows the start and end coordinates
var Grid = function (start, end, cells) {
    this.victory = function(x, y) {
        return end[0] === x && end[1] === y;
    };

    this.getStart = function() {
        return start;
    };

    this.canMoveForward = function(location, direction) {
        var cellType = cells[location[0]][location[1]];
        switch (direction) {
            case PlayerDirections.NORTH:
                return cellType.canGoNorth();
            case PlayerDirections.EAST:
                return cellType.canGoEast();
            case PlayerDirections.SOUTH:
                return cellType.canGoSouth();
            case PlayerDirections.WEST:
                return cellType.canGoWest();
        }
        return false;
    };

};

// Various built in maze designs
SampleLabyrinths = {};
SampleLabyrinths.simple = {
    cells:  [[CellTypes.N, CellTypes.NE, CellTypes.W],
        [CellTypes.NS, CellTypes.ESW, CellTypes.NW],
        [CellTypes.ES, CellTypes.W, CellTypes.S]],
    start: [2,0],
    end: [0,0]
};

// Receptacle for player input
Controller = function (labyrinth) {
    this.canMoveForward = function () {
        var player = labyrinth.getPlayer();
        var location = player.getLocation();
        var direction = player.getDirection();
        var cellType = labyrinth.getGrid().getCellType(location[0], location[1]);
    };
};

// Has the grid and the player
// we may not need this
Labyrinth = function(definition) {
    var grid = new Grid(definition.start, definition.end, definition.cells);
    this.getGrid = function() {
        return grid;
    };
    var player = new Player(definition.start, PlayerDirections.NORTH);
    this.getPlayer = function() {
        return player;
    }
};

// the player
// knows its current coordinates and direction
// stateful
Player = function(startLocation, startDirection) {
    var location = startLocation;
    var direction = startDirection;
    this.getLocation = function() {
        return location;
    };
    this.getDirection = function() {
        return direction;
    };
    this.turnRight = function() {
        switch(direction) {
            case PlayerDirections.NORTH:
                direction = PlayerDirections.EAST;
                break;
            case PlayerDirections.EAST:
                direction = PlayerDirections.SOUTH;
                break;
            case PlayerDirections.SOUTH:
                direction = PlayerDirections.WEST;
                break;
            case PlayerDirections.WEST:
                direction = PlayerDirections.NORTH;
                break;
        }
    };
    this.turnLeft = function() {
        switch(direction) {
            case PlayerDirections.NORTH:
                direction = PlayerDirections.WEST;
                break;
            case PlayerDirections.WEST:
                direction = PlayerDirections.SOUTH;
                break;
            case PlayerDirections.SOUTH:
                direction = PlayerDirections.EAST;
                break;
            case PlayerDirections.EAST:
                direction = PlayerDirections.NORTH;
                break;
        }
    };
};

// Lets the above variables be used by node/vows
exports.PlayerDirections = PlayerDirections;
exports.Player = Player;
exports.CellTypes = CellTypes;
exports.Grid = Grid;
exports.SampleLabyrinths = SampleLabyrinths;
exports.Labyrinth = Labyrinth;
