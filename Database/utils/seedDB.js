const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee1 = await Employee.create({
		firstName: "Melissa",
		lastName: "Lynch",
		department: "Computer Science"
	});
	const dummyEmployee2 = await Employee.create({
		firstName: "Oumar",
		lastName: "Siby"
	});
	const dummyEmployee3 = await Employee.create({
		firstName: "John",
		lastName: "Doe"
	});

	const dummyTask1 = await Task.create({
		description: "create a book component",
        priorityLevel: "high",
        completionStatus: "incomplete"
	});
	const dummyTask2 = await Task.create({
		description: "create a homepage component",
        priorityLevel: "high",
        completionStatus: "incomplete"
	});
	const dummyTask3 = await Task.create({
		description: "Make homepage responsive",
        priorityLevel: "low",
        completionStatus: "incomplete"
	});

	await dummyTask1.setEmployee(dummyEmployee1);
	await dummyTask2.setEmployee(dummyEmployee2);
	await dummyTask3.setEmployee(dummyEmployee3);
	
}

module.exports = seedDB;
