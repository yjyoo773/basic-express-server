"use strict";

// 3RD PARTY PACKAGES
const express = require("express");
const app = express();

// INTERNAL MODULES
const notFoundHandler = require('./error-handlers/404')
const errors = require('./error-handlers/500')
const logger = require('./middleware/logger')
const validator = require('./middleware/validator')
// GLOBAL MIDDLEWARE
app.use(express.json())
app.use(logger)


// ROUTES
app.get('/person',validator,(req,res)=>{
    let output = {name:req.query.name}
    res.status(200).json(output)
})

// ERROR HANDLERS
app.use('*',notFoundHandler)
app.use(errors)

// EXPORT SERVER
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`server on ${port}`);
    });
  },
};
