"use strict";
exports.__esModule = true;
var express_1 = require("express");
var C_insert_1 = require("../controllers/C-insert");
var insertRouter = (0, express_1.Router)();
insertRouter.post('/', C_insert_1["default"]);
exports["default"] = insertRouter;
