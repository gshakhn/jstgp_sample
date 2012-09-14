var PlayerDirections = {};
PlayerDirections.NORTH = {};

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

var Grid = function (start, end, cells) {
    this.victory = function(x, y) {
        return end[0] === x && end[1] === y;
    };

    this.getStart = function() {
        return start;
    };
};

SampleLabyrinths = {};
SampleLabyrinths.simple = {
    cells:  [[CellTypes.N, CellTypes.NE, CellTypes.W],
        [CellTypes.NS, CellTypes.ESW, CellTypes.NW],
        [CellTypes.ES, CellTypes.W, CellTypes.S]],
    start: [2,0],
    end: [0,0]
};

Labyrinth = function(definition) {
    var grid = new Grid(definition.start, definition.end, definition.cells)
    this.getGrid = function() {
        return grid;
    }
};

Player = function(startLocation, startDirection) {

};

exports.PlayerDirections = PlayerDirections;
exports.Player = Player;
exports.CellTypes = CellTypes;
exports.Grid = Grid;
exports.SampleLabyrinths = SampleLabyrinths;
exports.Labyrinth = Labyrinth;
