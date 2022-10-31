"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var root = document.getElementById("root");
var TodoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoApp, _React$Component);
  var _super = _createSuper(TodoApp);
  function TodoApp(props) {
    var _this;
    _classCallCheck(this, TodoApp);
    _this = _super.call(this, props);
    _this.state = {
      items: ["item1", "item2", "item3"] //props aracalığı ile
    };

    _this.clearItems = _this.clearItems.bind(_assertThisInitialized(_this)); //State aracılı ile
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.deleteItem = _this.deleteItem.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(TodoApp, [{
    key: "clearItems",
    value: function clearItems() {
      this.setState({
        items: []
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (!item) {
        return "Boş değer ekleyemezsin";
      } else if (this.state.items.includes(item)) {
        return "Aynı elemanı ekleyemezsiniz";
      }
      this.setState(function (prevState) {
        return {
          items: prevState.items.concat(item)
        };
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      this.setState(function (prevState) {
        var arr = prevState.items.filter(function (i) {
          return item != i;
        });
        return {
          items: arr
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Todo Application";
      var description = "Bu bir açıklamadır";
      var app = {
        title: "Todo Application BackEnd",
        description: "Lorem, ipsum 2."
      };
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
        title: app.title,
        description: app.description
      }), /*#__PURE__*/React.createElement(TodoList, {
        deleteItem: this.deleteItem,
        items: this.state.items,
        clearItems: this.clearItems
      }), /*#__PURE__*/React.createElement(Action, {
        addItem: this.addItem
      }));
    }
  }]);
  return TodoApp;
}(React.Component); //Es5 Header
/*const Header = function(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}
*/
//Es6 Header
var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);
  var _super2 = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super2.apply(this, arguments);
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        //props ile yukarıdaki title'ye eriştik.
        React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("p", null, this.props.description))
      );
    }
  }]);
  return Header;
}(React.Component);
var TodoList = /*#__PURE__*/function (_React$Component3) {
  _inherits(TodoList, _React$Component3);
  var _super3 = _createSuper(TodoList);
  function TodoList(props) {
    _classCallCheck(this, TodoList);
    return _super3.call(this, props); //this.clearItems = this.clearItems.bind(this)
  }
  _createClass(TodoList, [{
    key: "clearItems",
    value: function clearItems() {
      console.log(this.props);
      console.log(this.props.items); //iilgili props un içindeki itemlara erişmiş olduk.
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      //let obj = this.props.items;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, this.props.items.map(function (item, index) {
        return /*#__PURE__*/React.createElement(TodoItem, {
          deleteItem: _this2.props.deleteItem,
          key: index,
          item: item
        });
      })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.props.clearItems
      }, "Clear Items")));
    }
  }]);
  return TodoList;
}(React.Component);
var TodoItem = /*#__PURE__*/function (_React$Component4) {
  _inherits(TodoItem, _React$Component4);
  var _super4 = _createSuper(TodoItem);
  function TodoItem(props) {
    var _this3;
    _classCallCheck(this, TodoItem);
    _this3 = _super4.call(this, props);
    _this3.deleteItem = _this3.deleteItem.bind(_assertThisInitialized(_this3));
    return _this3;
  }
  _createClass(TodoItem, [{
    key: "deleteItem",
    value: function deleteItem() {
      console.log("tıklandı");
      this.props.deleteItem(this.props.item);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("li", null, this.props.item, /*#__PURE__*/React.createElement("button", {
        onClick: this.deleteItem
      }, "Sil"));
    }
  }]);
  return TodoItem;
}(React.Component);
var Action = /*#__PURE__*/function (_React$Component5) {
  _inherits(Action, _React$Component5);
  var _super5 = _createSuper(Action);
  function Action(props) {
    var _this4;
    _classCallCheck(this, Action);
    _this4 = _super5.call(this, props);
    _this4.onFormSubmit = _this4.onFormSubmit.bind(_assertThisInitialized(_this4));
    _this4.state = {
      err: ''
    };
    return _this4;
  }
  _createClass(Action, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      //console.log(e.target.elements.txtItem.value); //inputa girilen değeri aldı.

      var item = e.target.elements.txtItem.value.trim(); //trim ile boşluları sildik
      var errr = this.props.addItem(item);
      this.setState({
        err: errr
      });
      e.target.elements.txtItem.value = "";
      /*if(item){ //eğer item varsa.
          console.log(item);
          e.target.elements.txtItem.value = "";
      }*/
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.err && /*#__PURE__*/React.createElement("p", {
        style: {
          color: "red"
        }
      }, this.state.err), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "txtItem",
        id: "txtItem"
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, "Add Item")));
    }
  }]);
  return Action;
}(React.Component); /*const template = (
                        <div>
                            <Header/>
                            <Header/>
                            <Header/>
                            <Header/>
                            <Header/> 
                        </div>
                        
                       <div>
                            <Header/>
                            <Todo/>
                            <Action/>
                       </div>
                       
                    );*/
ReactDOM.render( /*#__PURE__*/React.createElement(TodoApp, null), root);
