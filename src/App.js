"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ContentRetrival_1 = require("ContentRetrival");
const PORT = 5000;
const app = express();
app.get('/gimmiegimmie', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
    });
});
app.get('/sound', (req, res) => {
    ContentRetrival_1.ContentRetrival.requestSound();
    res.status(200).send({
        success: 'true',
        message: 'content here!'
    });
});
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
