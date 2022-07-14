"use strict";
exports.__esModule = true;
var path = require("path");
var servePage = function (_req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
};
exports["default"] = servePage;
