var stu = require('./student');
var tea = require('./teacher');

function add(teaName,students) {
	tea.add(teaName);
	
	students.forEach(function (item,index) {
		stu.add(item);
	});
};

exports.add = add