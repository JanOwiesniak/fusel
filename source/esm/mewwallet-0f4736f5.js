function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import MEWWallet from '@myetherwallet/mewconnect-web-client';
var mewWalletIcon = "\n<svg width=\"69\" height=\"84\" viewBox=\"0 0 69 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M50.8393 79.1764C68.2511 79.9999 70.0067 64.7764 64.9062 55.9113C59.9651 47.3231 52.5533 44.3819 40.5663 45.5101C28.5793 46.6382 40.6179 66.167 48.8417 64.7349C52.5727 64.0851 49.3351 79.1052 50.8393 79.1764Z\" fill=\"white\" stroke=\"black\" stroke-width=\"2.5\"/>\n<path d=\"M18.5716 79.1764C1.15985 79.9999 -0.595807 64.7764 4.50465 55.9113C9.44582 47.3231 16.8576 44.3819 28.8446 45.5101C40.8316 46.6382 28.793 66.167 20.5692 64.7349C16.8382 64.0851 20.0758 79.1052 18.5716 79.1764Z\" fill=\"white\" stroke=\"black\" stroke-width=\"2.5\"/>\n<path d=\"M36.8853 2C42.8371 2 46.7021 2.95655 50.0569 4.75274C53.4116 6.54894 56.0445 9.18478 57.8386 12.5434C59.6134 15.8658 60.5675 19.6882 60.5882 25.5385V29.0935C60.5882 35.0521 59.6327 38.9216 57.8386 42.2802C56.0445 45.6387 53.4116 48.2746 50.0569 50.0708C46.7021 51.867 42.8371 52.8235 36.8853 52.8235H32.5263C26.5746 52.8235 22.7095 51.867 19.3548 50.0708C16 48.2746 13.3672 45.6387 11.5731 42.2802C9.77894 38.9216 8.82349 35.0521 8.82349 29.0935V25.73C8.82349 19.7714 9.77894 15.902 11.5731 12.5434C13.3672 9.18478 16 6.54894 19.3548 4.75274C22.6735 2.97586 26.4915 2.02067 32.3351 2H36.8853Z\" fill=\"white\" stroke=\"black\" stroke-width=\"2.5\"/>\n<path d=\"M31.5546 16.5884H37.8571C41.05 16.5884 43.5238 17.1771 45.6 18.2827C47.6762 19.3883 49.3056 21.0107 50.4159 23.078C51.5263 25.1452 52.1176 27.6083 52.1176 30.7875V31.5657C52.1176 34.7449 51.5263 37.208 50.4159 39.2753C49.3056 41.3425 47.6762 42.9649 45.6 44.0705C43.5238 45.1761 41.05 45.7648 37.8571 45.7648H31.5546C28.3617 45.7648 25.8879 45.1761 23.8117 44.0705C21.7355 42.9649 20.1061 41.3425 18.9958 39.2753C17.8854 37.208 17.2941 34.7449 17.2941 31.5657V30.7875C17.2941 27.6083 17.8854 25.1452 18.9958 23.078C20.1061 21.0107 21.7355 19.3883 23.8117 18.2827C25.8879 17.1771 28.3617 16.5884 31.5546 16.5884Z\" fill=\"white\" stroke=\"black\" stroke-width=\"2.5\"/>\n<path d=\"M23.6471 35.1764C25.7262 35.1764 27.4118 33.4909 27.4118 31.4117C27.4118 29.3325 25.7262 27.647 23.6471 27.647C21.5679 27.647 19.8823 29.3325 19.8823 31.4117C19.8823 33.4909 21.5679 35.1764 23.6471 35.1764Z\" fill=\"black\"/>\n<path d=\"M45.7647 35.1764C47.8439 35.1764 49.5294 33.4909 49.5294 31.4117C49.5294 29.3325 47.8439 27.647 45.7647 27.647C43.6855 27.647 42 29.3325 42 31.4117C42 33.4909 43.6855 35.1764 45.7647 35.1764Z\" fill=\"black\"/>\n<path d=\"M30.7059 30.7058C30.7059 32.785 32.4968 34.4705 34.7059 34.4705C36.915 34.4705 38.7059 32.785 38.7059 30.7058\" stroke=\"black\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n<path d=\"M8.76134 16.657C9.88657 16.8159 10.8627 17.2232 11.6465 17.8212C12.4304 18.4192 13.0219 19.2079 13.3779 20.1298C13.734 21.0517 13.8545 22.1068 13.6964 23.2374L13.5524 24.2669C13.3942 25.3976 12.9889 26.3784 12.3938 27.1659C11.7986 27.9535 11.0136 28.5479 10.0961 28.9056C9.17862 29.2634 8.12859 29.3845 7.00336 29.2256C5.87813 29.0667 4.90201 28.6595 4.11818 28.0615C3.33435 27.4635 2.74281 26.6747 2.38677 25.7528C2.03073 24.8309 1.91018 23.7758 2.06832 22.6452L2.21232 21.6157C2.37046 20.4851 2.77577 19.5043 3.37092 18.7167C3.96607 17.9291 4.75106 17.3347 5.66857 16.977C6.58608 16.6193 7.63612 16.4981 8.76134 16.657Z\" fill=\"white\" stroke=\"black\" stroke-width=\"2.5\"/>\n<path d=\"M7.3113 20.6058L6.78593 24\" stroke=\"#D8D8D8\" stroke-width=\"3.2551\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M60.6261 16.6553C59.5042 16.8095 58.5321 17.2033 57.752 17.7817C56.9719 18.3602 56.384 19.1233 56.0304 20.0161C55.6769 20.9088 55.5578 21.9313 55.7154 23.0285L55.9161 24.4248C56.0738 25.522 56.4764 26.4727 57.0679 27.2356C57.6594 27.9985 58.4396 28.5736 59.3525 28.9193C60.2654 29.2651 61.3109 29.3816 62.4327 29.2274C63.5546 29.0732 64.5268 28.6794 65.3068 28.1009C66.0869 27.5225 66.6749 26.7594 67.0284 25.8666C67.382 24.9738 67.5011 23.9513 67.3434 22.8541L67.1428 21.4579C66.9851 20.3607 66.5824 19.4099 65.991 18.647C65.3995 17.8841 64.6192 17.3091 63.7063 16.9633C62.7935 16.6175 61.748 16.501 60.6261 16.6553Z\" fill=\"white\" stroke=\"black\" stroke-width=\"2.5\"/>\n<path d=\"M62.0948 20.6058L62.6202 24\" stroke=\"#D8D8D8\" stroke-width=\"3.2551\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M34.7059 41.0588C23.3998 41.0588 14.2353 50.2242 14.2353 61.5294C14.2353 72.8346 23.4007 82 34.7059 82C46.0111 82 55.1765 72.8346 55.1765 61.5294C55.1765 50.2242 46.0124 41.0588 34.7059 41.0588Z\" fill=\"#07A6B3\"/>\n<path d=\"M34.7059 41.0588C23.3998 41.0588 14.2353 50.2242 14.2353 61.5294C14.2353 72.8346 23.4007 82 34.7059 82C46.0111 82 55.1765 72.8346 55.1765 61.5294C55.1765 50.2242 46.0124 41.0588 34.7059 41.0588Z\" stroke=\"black\" stroke-width=\"2.5\"/>\n<path d=\"M22.6436 56.9085L28.2068 59.2747C28.1888 59.3523 28.1659 59.4541 28.1402 59.5685C27.9738 60.1104 27.8758 60.6709 27.8486 61.237C27.8366 61.3492 27.8324 61.4621 27.8361 61.5749L27.841 61.6525C27.866 63.7213 28.8297 65.6671 30.4611 66.9428C32.0926 68.2184 34.2156 68.6861 36.2331 68.2144L39.3955 73.5761C37.9066 74.1691 36.3179 74.4727 34.7149 74.4707C27.7426 74.4707 21.7647 68.8272 21.7647 61.8638C21.7647 60.2289 22.0761 58.3419 22.6436 56.9085ZM34.7162 48.5884C41.6885 48.5884 47.647 54.3364 47.647 61.2981C47.6458 63.0587 47.4325 64.8154 46.7982 66.3475L46.665 66.6498L32.5437 60.6758L41.6018 60.6363C41.2764 57.3558 37.8997 54.6891 34.7153 54.6891C33.9932 54.6885 33.2759 54.8079 32.5931 55.0426L29.459 49.7298C31.1085 48.9752 32.9019 48.5858 34.7162 48.5884Z\" fill=\"white\"/>\n<path d=\"M12.8156 74.8756L11.289 70.5934C10.1268 67.3334 11.8665 63.7609 15.1748 62.6138L15.2492 62.5885C18.6253 61.4641 22.2897 63.2236 23.4707 66.5361L24.9974 70.8184C26.1596 74.0783 24.4198 77.6509 21.1115 78.798L21.0371 78.8232C17.6611 79.9477 13.9966 78.1881 12.8156 74.8756Z\" fill=\"white\" stroke=\"black\" stroke-width=\"2.5\"/>\n<path d=\"M22.6823 66.3056L18 67.8824\" stroke=\"black\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n<path d=\"M24.4579 70.2743L19.7962 71.9126\" stroke=\"black\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n<path d=\"M56.6472 74.8756L58.1738 70.5934C59.336 67.3334 57.5963 63.7609 54.288 62.6138L54.2136 62.5885C50.8375 61.4641 47.1731 63.2236 45.9921 66.5361L44.4655 70.8184C43.3033 74.0783 45.043 77.6509 48.3513 78.798L48.4257 78.8232C51.8018 79.9477 55.4662 78.1881 56.6472 74.8756Z\" fill=\"white\" stroke=\"black\" stroke-width=\"2.5\"/>\n<path d=\"M46.7804 66.3056L51.4628 67.8824\" stroke=\"black\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n<path d=\"M45.0049 70.2743L49.6666 71.9126\" stroke=\"black\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n</svg>\n"; // eslint-disable-next-line @typescript-eslint/ban-ts-ignore

function mewConnect(options) {
  var rpcUrl = options.rpcUrl,
      iconSrc = options.iconSrc,
      networkId = options.networkId,
      preferred = options.preferred;
  return {
    name: 'MEW Wallet',
    svg: mewWalletIcon,
    iconSrc: iconSrc || mewWalletIcon,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var resetWalletState, getBalance, getAddress, getNetwork, mewConnect, provider;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                resetWalletState = helpers.resetWalletState, getBalance = helpers.getBalance, getAddress = helpers.getAddress, getNetwork = helpers.getNetwork;
                mewConnect = new MEWWallet.Provider({
                  windowClosedError: true,
                  chainId: networkId,
                  rpcUrl: rpcUrl
                });
                provider = mewConnect.makeWeb3Provider();

                if (mewConnect.isConnected) {
                  mewConnect.disconnect();
                  resetWalletState({
                    disconnected: true,
                    walletName: 'MEW Wallet'
                  });
                }

                mewConnect.on('popupWindowClosed', function () {
                  resetWalletState({
                    disconnected: true,
                    walletName: 'MEW Wallet'
                  });
                });
                return _context.abrupt("return", {
                  provider: provider,
                  "interface": {
                    name: 'MEW Wallet',
                    connect: function connect() {
                      return new Promise(function (resolve, reject) {
                        provider.enable().then(resolve)["catch"](function () {
                          reject({
                            message: 'This dapp needs access to your account information.'
                          });
                        });
                      });
                    },
                    address: {
                      get: function get() {
                        return getAddress(provider);
                      }
                    },
                    network: {
                      get: function get() {
                        return getNetwork(provider);
                      }
                    },
                    balance: {
                      get: function get() {
                        return getBalance(provider);
                      }
                    },
                    disconnect: function disconnect() {
                      mewConnect.disconnect();
                      resetWalletState({
                        disconnected: true,
                        walletName: 'MEW Wallet'
                      });
                    }
                  }
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'injected',
    desktop: true,
    preferred: preferred
  };
}

export default mewConnect;