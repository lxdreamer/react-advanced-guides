import { useContext, createElement, createContext } from 'react';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

//                      ^^^^^^^^^^^^^^^^^^^^

var isDev = process.env.NODE_ENV !== "production";
var NO_PROVIDER = {};

function createUseContext(context) {
  return function () {
    var value = useContext(context);

    if (isDev && value === NO_PROVIDER) {
      // eslint-disable-next-line no-console
      console.warn("Component must be wrapped with Provider.");
    }

    return value;
  };
}

function constate(useValue) {
  for (var _len = arguments.length, selectors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    selectors[_key - 1] = arguments[_key];
  }

  var contexts = [];
  var hooks = [];

  var createContext$1 = function createContext$1(displayName) {
    var context = /*#__PURE__*/createContext(NO_PROVIDER);

    if (isDev && displayName) {
      context.displayName = displayName;
    }

    contexts.push(context);
    hooks.push(createUseContext(context));
  };

  if (selectors.length) {
    selectors.forEach(function (selector) {
      return createContext$1(selector.name);
    });
  } else {
    createContext$1(useValue.name);
  }

  var Provider = function Provider(_ref) {
    var children = _ref.children,
        props = _objectWithoutPropertiesLoose(_ref, ["children"]);

    var value = useValue(props);
    var element = children;

    for (var i = 0; i < contexts.length; i += 1) {
      var context = contexts[i];

      var selector = selectors[i] || function (v) {
        return v;
      };

      element = /*#__PURE__*/createElement(context.Provider, {
        value: selector(value)
      }, element);
    }

    return element;
  };

  if (isDev && useValue.name) {
    Provider.displayName = "Constate";
  }

  return [Provider].concat(hooks);
}

export default constate;
