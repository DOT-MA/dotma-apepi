import * as express from "express";

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