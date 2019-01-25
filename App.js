"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const index_1 = require("routes/index");
const externalApi_1 = require("routes/externalApi");
const DotmaResourcesAPI_1 = require("src/DotmaResourcesAPI");
const app = express();
const dotmaResourcesAPI = new DotmaResourcesAPI_1.default();
app.use(express.static(__dirname + "/public"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use("/test", express.static(__dirname + "/public"));
app.use("/", index_1.router);
app.use("/resourceApi", dotmaResourcesAPI.getRouter());
app.use("/externalApi", externalApi_1.router);
if (process.env.NODE_ENV !== "test") {
    app.use(logger("dev"));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
});
exports.default = app;
