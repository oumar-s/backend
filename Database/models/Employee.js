const Sequelize = require("sequelize");
const db = require("../db");

const Employee = db.define("employee", {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    },
    department: {
        type: Sequelize.STRING
    }
});

module.exports = Employee;