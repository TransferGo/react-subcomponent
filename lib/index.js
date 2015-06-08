'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = (function (_React$Component) {
    var _class = function _default(props, state) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).call(this, props, state);

        if (!props.parent) {
            throw new Error('No parent provided to a SubComponent');
        }

        this.state = props.parent.state;
    };

    _inherits(_class, _React$Component);

    _createClass(_class, [{
        key: 'setState',
        value: function setState(data, callback) {
            this.props.parent.setState(data, callback);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            _get(Object.getPrototypeOf(_class.prototype), 'setState', this).call(this, this.props.parent.state);
        }
    }]);

    return _class;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];