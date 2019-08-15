'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width:', ';\n    height:', ';\n    position:relative;\n    ', '\n    input{\n        width:100%;\n        padding-right:', ';\n        outline:none;\n        padding-left:10px;\n        height:100%;\n        position:relative;\n        border:', 'px solid ', ';\n        background:', ';\n        font-size:', ';\n        color:', ';\n        box-shadow:', '\n        transition:all 0.2s;\n        &:focus{\n            box-shadow:', '\n        }\n    }\n    span{\n        color:', '\n    }\n    .cha{\n        position:absolute;\n        right:4px;\n        top:50%;\n        z-index:10;\n        margin-top:-7px;\n        cursor:pointer;\n        font-size:14px;\n    }\n    .yan{\n        position: absolute;\n        font-size:18px;\n        right: 24px;\n        top: 50%;\n        z-index: 40;\n        margin-top: -9px;\n        cursor: pointer;\n    }\n    .yanclose{\n        position: absolute;\n        font-size:18px;\n        right: 24px;\n        top: 50%;\n        z-index: 40;\n        margin-top: -9px;\n        cursor: pointer;\n    }\n    .search{\n        position: absolute;\n        font-size:16px;\n        right: 2px;\n        top: 50%;\n        z-index: 40;\n        margin-top: -8px;\n        cursor: pointer;\n    }\n'], ['\n    width:', ';\n    height:', ';\n    position:relative;\n    ', '\n    input{\n        width:100%;\n        padding-right:', ';\n        outline:none;\n        padding-left:10px;\n        height:100%;\n        position:relative;\n        border:', 'px solid ', ';\n        background:', ';\n        font-size:', ';\n        color:', ';\n        box-shadow:', '\n        transition:all 0.2s;\n        &:focus{\n            box-shadow:', '\n        }\n    }\n    span{\n        color:', '\n    }\n    .cha{\n        position:absolute;\n        right:4px;\n        top:50%;\n        z-index:10;\n        margin-top:-7px;\n        cursor:pointer;\n        font-size:14px;\n    }\n    .yan{\n        position: absolute;\n        font-size:18px;\n        right: 24px;\n        top: 50%;\n        z-index: 40;\n        margin-top: -9px;\n        cursor: pointer;\n    }\n    .yanclose{\n        position: absolute;\n        font-size:18px;\n        right: 24px;\n        top: 50%;\n        z-index: 40;\n        margin-top: -9px;\n        cursor: pointer;\n    }\n    .search{\n        position: absolute;\n        font-size:16px;\n        right: 2px;\n        top: 50%;\n        z-index: 40;\n        margin-top: -8px;\n        cursor: pointer;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/font.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var outer = (0, _styledComponents.css)(_templateObject, function (props) {
    return props.allcss;
});
var Inputcss = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.width + "px";
}, function (props) {
    return props.height + "px";
}, outer, function (props) {
    if (props.issearch) {
        return "20px";
    } else if (props.type === "password") {
        if (props.haseye) {
            return "50px";
        } else {
            return "20px";
        }
    } else {
        return "20px";
    }
}, function (props) {
    return props.borderwidth;
}, function (props) {
    return props.bordercolor;
}, function (props) {
    return props.background;
}, function (props) {
    return props.fontsize + "px";
}, function (props) {
    return props.fontcolor;
}, function (props) {
    return props.boxshadow;
}, function (props) {
    return props.activeboxshadow;
}, function (props) {
    return props.iconcolor;
});

var ReactInput = function (_Component) {
    _inherits(ReactInput, _Component);

    function ReactInput(props, context) {
        _classCallCheck(this, ReactInput);

        var _this = _possibleConstructorReturn(this, (ReactInput.__proto__ || Object.getPrototypeOf(ReactInput)).call(this, props, context));

        _this.state = {
            value: props.defaultValue || "",
            showcha: false,
            type: props.type || "text"
        };
        return _this;
    }

    _createClass(ReactInput, [{
        key: 'UNSAFE_componentWillReceiveProps',
        value: function UNSAFE_componentWillReceiveProps(props) {
            if (props.refresh) {
                this.setState({
                    value: props.defaultValue,
                    type: props.type
                });
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var value = event.target.value.replace(/(^\s*)|(\s*$)/g, "");
            if (this.props.pattern) {
                value = event.target.value.replace(this.props.pattern, "");
            }
            this.setState({
                value: value
            });
            this.props.onChange && this.props.onChange(this.props.name, value);
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.setState({
                showcha: true
            });
            this.props.onFocus && this.props.onFocus(this.props.name, "");
        }
    }, {
        key: 'clickClear',
        value: function clickClear() {
            var type = "";
            if (!this.props.issearch && this.props.type === "password") {
                type = "password";
            }
            this.setState({
                value: "",
                type: type
            }, function () {});
            this.props.onChange && this.props.onChange(this.props.name, "");
        }
    }, {
        key: 'changeType',
        value: function changeType(str) {
            this.setState({
                type: str
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Inputcss,
                this.props,
                _react2.default.createElement('input', {
                    type: this.props.issearch ? "text" : this.state.type,
                    name: this.props.name,
                    autoComplete: 'new-password',
                    readOnly: this.props.readonly,
                    placeholder: this.props.placeholder,
                    value: this.state.value,
                    maxLength: this.props.maxlength,
                    onChange: this.handleChange.bind(this),
                    onFocus: this.handleFocus.bind(this)
                }),
                !this.props.issearch && this.state.showcha && this.state.value !== "" && _react2.default.createElement('span', { className: 'cha icon-cha', onClick: this.clickClear.bind(this) }),
                !this.props.issearch && this.props.haseye && this.state.value !== "" && (this.state.type === "text" ? _react2.default.createElement('span', { className: 'yanclose icon-yanclose', onClick: this.changeType.bind(this, "password") }) : _react2.default.createElement('span', { className: 'yan icon-yan', onClick: this.changeType.bind(this, "text") })),
                this.props.issearch && _react2.default.createElement('span', { className: 'search icon-search' })
            );
        }
    }]);

    return ReactInput;
}(_react.Component);

ReactInput.defaultProps = {
    issearch: false, //是否是直接输入就搜索的框
    type: "text", //表单类型
    defaultValue: "", //默认值字符串
    theme: "blue", //blue 蓝色 purple 紫色 green 绿色
    width: 200, //数字 
    height: 30, //数字 
    borderradius: 2, //数字 单位像素
    borderwidth: 1, //数字 单位像素
    bordercolor: "#1890FF", //字符串 16进制的 或者rgb值
    boxshadow: "none", //完整的box-shadow 样式 字符串
    background: "transparent", //字符串 16进制的 或者rgb值 或者完整的background
    fontsize: 14, //数字
    allcss: "", //字符串类型的css 代码
    readonly: false, //是否可读 bool值
    placeholder: "请输入内容", //字符串
    maxlength: 200, //数字 最大长度
    name: "", //表单默认的值
    fontcolor: "#333",
    refresh: false, //是否刷新state bool值
    haseye: false,
    iconcolor: "#1890FF",
    activeboxshadow: "none",
    pattern: null //外部正则
};
ReactInput.propTypes = {
    issearch: _propTypes2.default.bool,
    type: _propTypes2.default.string,
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    theme: _propTypes2.default.string,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    borderradius: _propTypes2.default.number,
    borderwidth: _propTypes2.default.number,
    bordercolor: _propTypes2.default.string,
    boxshadow: _propTypes2.default.string,
    background: _propTypes2.default.string,
    fontsize: _propTypes2.default.number,
    allcss: _propTypes2.default.string,
    readonly: _propTypes2.default.bool,
    placeholder: _propTypes2.default.string,
    maxlength: _propTypes2.default.number,
    name: _propTypes2.default.string,
    fontcolor: _propTypes2.default.string,
    refresh: _propTypes2.default.bool,
    haseye: _propTypes2.default.bool,
    iconcolor: _propTypes2.default.string,
    pattern: _propTypes2.default.object
};
exports.default = ReactInput;