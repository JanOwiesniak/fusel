function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import 'regenerator-runtime/runtime';
import { n as networkName } from './onboard-cc1b546c.js';
import 'bignumber.js';
import 'bnc-sdk';
import 'bowser';
var torusIcon = "<svg width=\"257\" height=\"277\" viewBox=\"0 0 257 277\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"153.889\" height=\"82.0741\" fill=\"#0364FF\" />\n<rect x=\"71.8135\" width=\"82.0741\" height=\"277\" fill=\"#0364FF\" />\n<path d=\"M215.443 82.0741C238.107 82.0741 256.48 63.7012 256.48 41.037C256.48 18.3729 238.107 0 215.443 \n0C192.779 0 174.406 18.3729 174.406 41.037C174.406 63.7012 192.779 82.0741 215.443 82.0741Z\" fill=\"#0364FF\" />\n</svg>";

function torus(options) {
  var networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg,
      buttonPosition = options.buttonPosition,
      modalZIndex = options.modalZIndex,
      apiKey = options.apiKey,
      buildEnv = options.buildEnv,
      enableLogging = options.enableLogging,
      enabledVerifiers = options.enabledVerifiers,
      loginConfig = options.loginConfig,
      showTorusButton = options.showTorusButton,
      integrity = options.integrity,
      whiteLabel = options.whiteLabel,
      loginMethod = options.loginMethod,
      rpcUrl = options.rpcUrl;
  return {
    name: label || 'Torus',
    svg: svg || torusIcon,
    iconSrc: iconSrc,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(helpers) {
        var createModernProviderInterface, _yield$import, Torus, instance, provider;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                createModernProviderInterface = helpers.createModernProviderInterface;
                _context2.next = 3;
                return import('@toruslabs/torus-embed');

              case 3:
                _yield$import = _context2.sent;
                Torus = _yield$import["default"];
                instance = new Torus({
                  buttonPosition: buttonPosition,
                  modalZIndex: modalZIndex,
                  apiKey: apiKey
                });
                _context2.next = 8;
                return instance.init({
                  buildEnv: buildEnv,
                  enableLogging: enableLogging,
                  network: {
                    host: rpcUrl || networkName(networkId),
                    chainId: networkId,
                    networkName: "".concat(networkName(networkId), " Network") // default: Main Ethereum Network

                  },
                  showTorusButton: showTorusButton,
                  enabledVerifiers: enabledVerifiers,
                  loginConfig: loginConfig,
                  integrity: integrity,
                  whiteLabel: whiteLabel
                });

              case 8:
                provider = instance.provider;
                return _context2.abrupt("return", {
                  provider: provider,
                  "interface": _objectSpread(_objectSpread({}, createModernProviderInterface(provider)), {}, {
                    name: 'Torus',
                    dashboard: function dashboard() {
                      return instance.showWallet('home');
                    },
                    connect: function () {
                      var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var result;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return instance.login({
                                  verifier: loginMethod
                                });

                              case 2:
                                result = _context.sent;
                                return _context.abrupt("return", {
                                  message: result[0]
                                });

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));

                      function connect() {
                        return _connect.apply(this, arguments);
                      }

                      return connect;
                    }(),
                    disconnect: function disconnect() {
                      return instance.cleanUp();
                    }
                  }),
                  instance: instance
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'sdk',
    desktop: true,
    mobile: true,
    preferred: preferred
  };
}

export default torus;