"use strict";
exports.__esModule = true;
var express_1 = require("express");
var C_test_1 = require("../controllers/C-test");
var testRouter = (0, express_1.Router)();
testRouter.get('/', C_test_1["default"]);
exports["default"] = testRouter;
