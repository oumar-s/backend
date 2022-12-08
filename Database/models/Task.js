const Sequelize = require("sequelize");
const db = require("../db");

const Task = db.define("task", {
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priorityLevel: {
        type: Sequelize.STRING
    },
    completionStatus: {
        type: Sequelize.STRING
    }

});

module.exports = Task;