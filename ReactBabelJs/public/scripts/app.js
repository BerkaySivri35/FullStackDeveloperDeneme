"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var root = document.getElementById("root");

/* ES6 Class */
var ES6Person = /*#__PURE__*/function () {
  function ES6Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Berkay";
    var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getFullYear();
    _classCallCheck(this, ES6Person);
    this.name = name;
    this.year = year;
  }
  _createClass(ES6Person, [{
    key: "getAgeOfYear",
    value: function getAgeOfYear() {
      return new Date().getFullYear() - this.year;
    }
  }, {
    key: "greeting",
    value: function greeting(text) {
      return "".concat(text, ", Benim ad\u0131m ").concat(this.name);
    }
  }]);
  return ES6Person;
}();
var Student = /*#__PURE__*/function (_ES6Person) {
  _inherits(Student, _ES6Person);
  var _super = _createSuper(Student);
  function Student(name, year, lessons) {
    var _this;
    _classCallCheck(this, Student);
    _this = _super.call(this, name, year);
    _this.lessons = lessons;
    return _this;
  }
  _createClass(Student, [{
    key: "teaching",
    value: function teaching() {
      return "Öğreniyorum";
    }
  }, {
    key: "greeting2",
    value: function greeting2(text) {
      var str = _get(_getPrototypeOf(Student.prototype), "greeting", this).call(this, text);
      str += "Dersim: ".concat(this.lessons);
      return str;
      //Alternatif yazım
      // return `${super.greeting(text)} Dersim : ${this.lessons}`;
    }
  }]);
  return Student;
}(ES6Person);
var ES6pStudent = new Student("Berkay Sivri", "2000", "React.js");
console.log(ES6pStudent.greeting2(ES6pStudent.name));
var Teacher = /*#__PURE__*/function (_ES6Person2) {
  _inherits(Teacher, _ES6Person2);
  var _super2 = _createSuper(Teacher);
  function Teacher(name, year, department) {
    var _this2;
    _classCallCheck(this, Teacher);
    _this2 = _super2.call(this, name, year);
    _this2.department = department;
    return _this2;
  }
  _createClass(Teacher, [{
    key: "departments",
    value: function departments() {
      return 'Departmanım software';
    }
  }, {
    key: "greetingTeacher",
    value: function greetingTeacher(text) {
      return "".concat(_get(_getPrototypeOf(Teacher.prototype), "greeting", this).call(this, text), " Departman\u0131m : ").concat(this.department);
    }
  }]);
  return Teacher;
}(ES6Person);
var ES6Teacher = new Teacher("Berkay Sivri", 2000, "Web Developer");
console.log(ES6Teacher.greetingTeacher('Selam'));
