(function(){
	var n = " nnn ";
	function People(name) {
	 this.name = name;
	}
	People.prototype.say = function () {
		alert("peo say hello " + this.name + n);
	}
	window.People = People;
	
}());


(function(){
	function Student(name) {
		this.name = name;
	}
	Student.prototype = new People();
	var superSay = Student.prototype.say;
	Student.prototype.say = function(){
		superSay.call(this);
	alert("student say hello " + this.name + window.People.n);
	}
	window.Student = Student;
}())

var s = new window.Student("tonny");
s.say();

