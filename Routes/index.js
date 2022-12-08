const express = require('express');
const router = express.Router();

// Subrouters;
const tasksRouter = require('./tasks');
const employeeRouter = require('./employees');

// Mount our subrouters to assemble our apiRouter;
router.use('/tasks', tasksRouter);
router.use('/employees', employeeRouter);

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;