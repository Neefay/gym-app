exports.setup = app => {
    const express = require('express');
    require("../../API/Server").mountAllRoutes(app, express);
}