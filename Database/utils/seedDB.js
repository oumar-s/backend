const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstName: "Melissa",
		lastName: "Lynch",
		department: "Computer Science"
	});
	const dummyEmployee2 = await Employee.create({
		firstName: "John",
		lastName: "Jackson"
	});

	const dummyTask = await Task.create({
		description: "create a student component",
        priorityLevel: "high",
        completionStatus: "incomplete"
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;
