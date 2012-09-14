exports.Grid = function (start, end, cells) {
    this.victory = function(x, y) {
        return end[0] === x && end[1] === y;
    };

    this.getStart = function() {
        return start;
    };
};

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
exports.CellTypes = CellTypes;
