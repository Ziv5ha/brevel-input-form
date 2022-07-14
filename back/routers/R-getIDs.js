"use strict";
exports.__esModule = true;
var express_1 = require("express");
var C_id_1 = require("../controllers/C-id");
var idRouter = (0, express_1.Router)();
idRouter.get('/biology', C_id_1.getBiologyIDs);
idRouter.get('/reactor', C_id_1.getReactorIDs);
exports["default"] = idRouter;
