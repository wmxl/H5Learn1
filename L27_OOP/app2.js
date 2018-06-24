function Person() {
	var _this = {}
	_this.sayHello = function () {
		alert("hello");
	};
	return _this;
}

function Teacher() {
	_this = Person();
	_this.sayHello = function () {
		alert("Teacher hello")
	}
	return _this;
}

var t = Teacher();
t.sayHello();