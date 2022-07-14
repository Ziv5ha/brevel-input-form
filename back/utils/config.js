"use strict";
exports.__esModule = true;
// require('dotenv').config();
// import dotenv from 'dotenv';
// dotenv.config();
require('dotenv').config();
var config = {
    HOST: process.env.HOST || 'localhost',
    PORT: parseInt(process.env.PORT || '5432'),
    USER: process.env.USER || 'username',
    PASSWORD: process.env.PASSWORD || 'password',
    DATABASE: process.env.DATABASE || '',
    CONNECTION_STRING: process.env.CONNECTION_STRING
};
exports["default"] = config;
