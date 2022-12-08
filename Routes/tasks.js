const express = require('express');
const router = express.Router();
const {Task, Employee} = require('../Database/models')

// helper function so we don't need to wrap our
// handler functions in try-catch blocks;
// the async handler will catch any errors and pass
// them to the error-handling middleware (defined in app.js)
const ash = require('express-async-handler');

/** GET ALL TASKS: express-async-handler (ash) */
// automatically catches any error and sends to middleware
// same as using try/catch and calling next(error)
router.get('/', ash(async(req, res) => {
    let tasks = await Task.findAll();
    res.status(200).json(tasks);
}));

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;