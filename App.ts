import * as express from "express";
import * as request from "request";
import * as bodyParser from "body-parser";

import {ContentRetrival} from "ContentRetrival";


const main = async() =>  {
    // Listen on provided port for requests
    const PORT = 5000;
    const app = express();

    // // Setting up body parser for parsing json
    // app.use(bodyParser.urlencoded({'extended':true})); // parse application/x-www-form-urlencoded
    // app.use(bodyParser.json()); // parse application/json

    app.get('/oopsie', async (req, res) => {
        let url = await ContentRetrival.getRandomImage();
        console.log(url);
        res.status(200).send("<img src='" + url +"' />");
    });

    app.get('/test', (req, res) => {
        let url = "https://raikou1.donmai.us/55/2e/552e74406af8a2b6b8b7fd547bc2c353.jpg"
        res.status(200).send("<img src='" + url +"' />");
    });

    app.get('/sound', (req, res) => {
        request.get(
            {
                url: "https://raw.githubusercontent.com/DOT-MA/dotma-resources/master/sounds/tony/semicircle.mp3",
                headers: {
                    //g: true,
                },
            },
            (err, result, body) => {
        
            res.setHeader('Content-Type', 'audio/mpeg');
            res.status(200).send(result);
        });
    });

    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    });
};

main();