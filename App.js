"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const request = require("request");
const ContentRetrival_1 = require("ContentRetrival");
const main = async () => {
    const PORT = 5000;
    const app = express();
    app.get('/oopsie', async (req, res) => {
        let url = await ContentRetrival_1.ContentRetrival.getRandomImage();
        console.log(url);
        res.status(200).send("<img src='" + url + "' />");
    });
    app.get('/test', (req, res) => {
        let url = "https://raikou1.donmai.us/55/2e/552e74406af8a2b6b8b7fd547bc2c353.jpg";
        res.status(200).send("<img src='" + url + "' />");
    });
    app.get('/sound', (req, res) => {
        request.get({
            url: "https://raw.githubusercontent.com/DOT-MA/dotma-resources/master/sounds/tony/semicircle.mp3",
            headers: {},
        }, (err, result, body) => {
            res.setHeader('Content-Type', 'audio/mpeg');
            res.status(200).send(result);
        });
    });
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
};
main();
