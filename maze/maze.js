exports.Maze = function () {
    this.uuid = require('node-uuid');

};

exports.CellTypes = function() {
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

    this.N = {};
    this.E = {};
    this.S = {};
    this.W = {};
    this.NE = {};
    this.NW = {};
    this.NS = {};
    this.NEW = new CellType(true, true, false, true);
    this.NES = {};
    this.NWE = {};
    this.ES = {};
    this.EW = {};
    this.ESW = {};
    this.SW = {};
};
