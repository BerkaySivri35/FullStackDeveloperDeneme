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
var PhoneApp = /*#__PURE__*/function (_React$Component) {
  _inherits(PhoneApp, _React$Component);
  var _super = _createSuper(PhoneApp);
  function PhoneApp(props) {
    var _this;
    _classCallCheck(this, PhoneApp);
    _this = _super.call(this, props);
    _this.changeBlue = _this.changeBlue.bind(_assertThisInitialized(_this));
    _this.changeWhite = _this.changeWhite.bind(_assertThisInitialized(_this));
    _this.changeOrange = _this.changeOrange.bind(_assertThisInitialized(_this));
    _this.changeBlack = _this.changeBlack.bind(_assertThisInitialized(_this));
    _this.state = {
      brand: "Samsung",
      model: "A53",
      hafıza: "128GB",
      ram: "8GB RAM",
      resimSrc: ["https://productimages.hepsiburada.net/s/194/1100/110000161749625.jpg/format:webp", "https://productimages.hepsiburada.net/s/193/1100/110000160064097.jpg/format:webp", "https://productimages.hepsiburada.net/s/194/1100/110000161705148.jpg/format:webp"]
    };
    console.log(_this.state.resimSrc);
    return _this;
  }
  _createClass(PhoneApp, [{
    key: "changeBlue",
    value: function changeBlue() {
      this.setState({
        resimSrc: ["https://productimages.hepsiburada.net/s/193/1100/110000160472866.jpg/format:webp", "https://productimages.hepsiburada.net/s/193/1100/110000160063098.jpg/format:webp", "https://productimages.hepsiburada.net/s/193/1100/110000160644421.jpg/format:webp"]
      });
    }
  }, {
    key: "changeWhite",
    value: function changeWhite() {
      this.setState({
        resimSrc: ["https://productimages.hepsiburada.net/s/194/1100/110000161749627.jpg/format:webp", "https://productimages.hepsiburada.net/s/194/1100/110000161816872.jpg/format:webp", "https://productimages.hepsiburada.net/s/193/1100/110000160644424.jpg/format:webp"]
      });
    }
  }, {
    key: "changeOrange",
    value: function changeOrange() {
      this.setState({
        resimSrc: ["https://productimages.hepsiburada.net/s/194/1100/110000161816871.jpg/format:webp", "https://productimages.hepsiburada.net/s/194/1100/110000162346200.jpg/format:webp", "https://productimages.hepsiburada.net/s/193/1100/110000160644423.jpg/format:webp"]
      });
      console.log("Turuncu seçildi");
    }
  }, {
    key: "changeBlack",
    value: function changeBlack() {
      this.setState({
        resimSrc: ["https://productimages.hepsiburada.net/s/194/1100/110000161749625.jpg/format:webp", "https://productimages.hepsiburada.net/s/193/1100/110000160064097.jpg/format:webp", "https://productimages.hepsiburada.net/s/194/1100/110000161705148.jpg/format:webp"]
      });
      console.log("Siyah seçildi");
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "container pt-5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row p-3 border border-3 rounded-3 shadow-lg p-3 mb-5 bg-body rounded"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-6 "
      }, /*#__PURE__*/React.createElement("h1", {
        className: ""
      }, "Marka: ", this.state.brand), /*#__PURE__*/React.createElement("h3", {
        className: ""
      }, "Model: ", this.state.model), /*#__PURE__*/React.createElement("p", {
        className: ""
      }, "Haf\u0131za: ", /*#__PURE__*/React.createElement("b", null, this.state.hafıza)), /*#__PURE__*/React.createElement("p", {
        className: ""
      }, "Ram: ", /*#__PURE__*/React.createElement("b", null, this.state.ram)), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-primary me-2",
        onClick: this.changeBlue
      }, "Mavi"), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-light me-2",
        onClick: this.changeWhite
      }, "Beyaz"), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-warning me-2",
        onClick: this.changeOrange
      }, "Turuncu"), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-dark",
        onClick: this.changeBlack
      }, "Siyah")), /*#__PURE__*/React.createElement("div", {
        className: "col-6 d-flex justify-content-center"
      }, /*#__PURE__*/React.createElement("div", {
        id: "carouselExampleControls",
        className: "carousel slide",
        "data-bs-ride": "carousel"
      }, /*#__PURE__*/React.createElement("div", {
        className: "carousel-inner"
      }, /*#__PURE__*/React.createElement("div", {
        className: "carousel-item active"
      }, /*#__PURE__*/React.createElement("img", {
        src: this.state.resimSrc[0],
        className: "d-block w-100",
        alt: "..."
      })), /*#__PURE__*/React.createElement("div", {
        className: "carousel-item"
      }, /*#__PURE__*/React.createElement("img", {
        src: this.state.resimSrc[1],
        className: "d-block w-100",
        alt: "..."
      })), /*#__PURE__*/React.createElement("div", {
        className: "carousel-item"
      }, /*#__PURE__*/React.createElement("img", {
        src: this.state.resimSrc[2],
        className: "d-block w-100",
        alt: "..."
      }))), /*#__PURE__*/React.createElement("button", {
        className: "carousel-control-prev",
        type: "button",
        "data-bs-target": "#carouselExampleControls",
        "data-bs-slide": "prev"
      }, /*#__PURE__*/React.createElement("span", {
        className: "carousel-control-prev-icon bg-danger",
        "aria-hidden": "true"
      }), /*#__PURE__*/React.createElement("span", {
        className: "visually-hidden"
      }, "Previous")), /*#__PURE__*/React.createElement("button", {
        className: "carousel-control-next",
        type: "button",
        "data-bs-target": "#carouselExampleControls",
        "data-bs-slide": "next"
      }, /*#__PURE__*/React.createElement("span", {
        className: "carousel-control-next-icon bg-danger",
        "aria-hidden": "true"
      }), /*#__PURE__*/React.createElement("span", {
        className: "visually-hidden"
      }, "Next"))))));
    }
  }]);
  return PhoneApp;
}(React.Component);
ReactDOM.render( /*#__PURE__*/React.createElement(PhoneApp, null), root);
