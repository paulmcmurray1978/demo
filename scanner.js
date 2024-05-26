var _0x421137 = _0x3826;
(function (_0x188634, _0x233d20) {
  var _0x205791 = _0x3826,
    _0x5b20a1 = _0x188634();
  while (!![]) {
    try {
      var _0x237bad =
        parseInt(_0x205791(0x85)) / 0x1 +
        (parseInt(_0x205791(0xb9)) / 0x2) * (parseInt(_0x205791(0xe4)) / 0x3) +
        (-parseInt(_0x205791(0xb2)) / 0x4) *
          (-parseInt(_0x205791(0xda)) / 0x5) +
        (-parseInt(_0x205791(0xac)) / 0x6) * (parseInt(_0x205791(0xdf)) / 0x7) +
        (parseInt(_0x205791(0xe1)) / 0x8) * (-parseInt(_0x205791(0xa4)) / 0x9) +
        parseInt(_0x205791(0xbf)) / 0xa +
        (parseInt(_0x205791(0xb3)) / 0xb) * (parseInt(_0x205791(0x8a)) / 0xc);
      if (_0x237bad === _0x233d20) break;
      else _0x5b20a1["push"](_0x5b20a1["shift"]());
    } catch (_0x291123) {
      _0x5b20a1["push"](_0x5b20a1["shift"]());
    }
  }
})(_0x554e, 0x432af);
var barcodeDetector,
  decoding = ![],
  localStream,
  interval,
  scannerContainer = document[_0x421137(0xcd)](".scanner"),
  home = document[_0x421137(0xcd)](_0x421137(0xc1)),
  startButton = document[_0x421137(0xcd)](_0x421137(0xb4));
startButton["onclick"] = function () {
  var _0x4a1ab5 = _0x421137;
  scannerContainer[_0x4a1ab5(0xcc)][_0x4a1ab5(0xf8)] = _0x4a1ab5(0x97);
  const _0x16eacc =
      /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})$/,
    _0x4d8135 = document["getElementById"](_0x4a1ab5(0xc3))[_0x4a1ab5(0xaa)];
  localStorage[_0x4a1ab5(0x91)](
    _0x4a1ab5(0xc3),
    document[_0x4a1ab5(0x86)](_0x4a1ab5(0xc3))[_0x4a1ab5(0xaa)]
  ),
    _0x16eacc[_0x4a1ab5(0x96)](_0x4d8135) && loadDevicesAndPlay();
};
var fileInput = document[_0x421137(0xcd)]("#fileInput");
fileInput[_0x421137(0xd5)] = function (_0x4d4f6c) {
  var _0x192e4e = _0x421137,
    _0x1dcc8f = _0x4d4f6c["target"][_0x192e4e(0x8d)][0x0],
    _0x2b134c = new FileReader();
  (_0x2b134c[_0x192e4e(0x102)] = function (_0x2cf70c) {
    var _0x2dc5b7 = _0x192e4e,
      _0x476e09 = document[_0x2dc5b7(0x86)]("selectedImg");
    (_0x476e09["src"] = _0x2cf70c[_0x2dc5b7(0xb6)][_0x2dc5b7(0x89)]),
      (_0x476e09[_0x2dc5b7(0x102)] = async function () {
        var _0x4fa087 = _0x2dc5b7;
        localStorage[_0x4fa087(0x91)](
          _0x4fa087(0xc3),
          document["getElementById"]("postcode")[_0x4fa087(0xaa)]
        );
        var _0x29f7ad = await barcodeDetector[_0x4fa087(0xf9)](_0x476e09),
          _0x1cb945 = JSON["stringify"](_0x29f7ad, null, 0x2);
        console["log"](_0x4fa087(0xbc), _0x29f7ad[0x0][_0x4fa087(0x8c)]);
        const _0x5f35b4 = await getBarcodeData(_0x29f7ad[0x0][_0x4fa087(0x8c)]);
        console[_0x4fa087(0xf6)](_0x5f35b4),
          (document[_0x4fa087(0x86)]("selectedImg")[_0x4fa087(0xcc)][
            "display"
          ] = _0x4fa087(0xc2)),
          (document[_0x4fa087(0x86)](_0x4fa087(0xee))[_0x4fa087(0xcc)][
            _0x4fa087(0xf8)
          ] = _0x4fa087(0x97));
        const _0x22d79b =
            _0x5f35b4[_0x4fa087(0x90)] + "\x20" + _0x5f35b4["product_name"],
          _0x1023e6 = _0x5f35b4[_0x4fa087(0xfd)];
        (document[_0x4fa087(0x86)](_0x4fa087(0xee))[_0x4fa087(0x99)] =
          _0x4fa087(0xf5) +
          _0x22d79b +
          _0x4fa087(0x9a) +
          _0x4fa087(0xa2) +
          _0x1023e6 +
          _0x4fa087(0x95)),
          console[_0x4fa087(0xf6)](
            document[_0x4fa087(0x86)](_0x4fa087(0xc3))[_0x4fa087(0xaa)]
          );
        const _0x5f4608 = await getfoodBankList(
          document[_0x4fa087(0x86)](_0x4fa087(0xc3))[_0x4fa087(0xaa)],
          _0x22d79b
        );
      });
  }),
    (_0x2b134c[_0x192e4e(0xc6)] = function () {
      var _0x63c568 = _0x192e4e;
      console[_0x63c568(0xaf)](_0x63c568(0xde));
    }),
    _0x2b134c[_0x192e4e(0x9c)](_0x1dcc8f);
};
var closeButton = document["querySelector"](_0x421137(0xc4));
(closeButton[_0x421137(0xa0)] = function () {
  var _0x3628e5 = _0x421137;
  stop(),
    (scannerContainer[_0x3628e5(0xcc)][_0x3628e5(0xf8)] = _0x3628e5(0xc2)),
    (home[_0x3628e5(0xcc)]["display"] = "");
}),
  document[_0x421137(0xf7)](_0x421137(0xb7))[0x0]["addEventListener"](
    "loadeddata",
    onPlayed,
    ![]
  ),
  (document[_0x421137(0x86)]("cameraSelect")[_0x421137(0xd5)] =
    onCameraChanged),
  initBarcodeDetector();
function _0x3826(_0x170d26, _0x487581) {
  var _0x554e96 = _0x554e();
  return (
    (_0x3826 = function (_0x382688, _0x2ec3c6) {
      _0x382688 = _0x382688 - 0x85;
      var _0xddf461 = _0x554e96[_0x382688];
      return _0xddf461;
    }),
    _0x3826(_0x170d26, _0x487581)
  );
}
async function initBarcodeDetector() {
  var _0x14504a = _0x421137,
    _0x55bfe0 = ![];
  if (_0x14504a(0x9e) in window) {
    let _0x19b7a5 = await window[_0x14504a(0x9e)]["getSupportedFormats"]();
    _0x19b7a5["length"] > 0x0 && (_0x55bfe0 = !![]);
  }
  if (_0x55bfe0 === !![]) console[_0x14504a(0xf6)](_0x14504a(0xfb));
  else {
    BarcodeDetectorPolyfill["setLicense"](_0x14504a(0xd1));
    let _0x210082 = await BarcodeDetectorPolyfill[_0x14504a(0x98)]();
    console[_0x14504a(0xf6)](_0x210082),
      (window[_0x14504a(0x9e)] = BarcodeDetectorPolyfill);
  }
  (barcodeDetector = new window[_0x14504a(0x9e)]()),
    (document["getElementById"](_0x14504a(0xc9))[_0x14504a(0x99)] = "");
}
function loadDevicesAndPlay() {
  var _0x3131be = _0x421137,
    _0x106160 = { video: !![], audio: ![] };
  navigator["mediaDevices"]
    ["getUserMedia"](_0x106160)
    [_0x3131be(0xe9)]((_0x16d785) => {
      var _0xdcd788 = _0x3131be;
      localStream = _0x16d785;
      var _0x47a693 = document[_0xdcd788(0x86)](_0xdcd788(0xc8));
      (_0x47a693["innerHTML"] = ""),
        navigator[_0xdcd788(0x100)]
          [_0xdcd788(0xc5)]()
          [_0xdcd788(0xe9)](function (_0x20ac9c) {
            var _0x491c1f = _0xdcd788,
              _0xba6004 = 0x0,
              _0x31c5a0 = [],
              _0x477177 = 0x0;
            for (
              var _0x7740c9 = 0x0;
              _0x7740c9 < _0x20ac9c["length"];
              _0x7740c9++
            ) {
              var _0x38185d = _0x20ac9c[_0x7740c9];
              if (_0x38185d["kind"] == _0x491c1f(0xf3)) {
                _0x31c5a0[_0x491c1f(0xe0)](_0x38185d);
                var _0x14933b =
                  _0x38185d[_0x491c1f(0x87)] || _0x491c1f(0xba) + _0xba6004++;
                _0x47a693[_0x491c1f(0xb8)](
                  new Option(_0x14933b, _0x38185d[_0x491c1f(0xe7)])
                ),
                  _0x14933b[_0x491c1f(0xe5)]()[_0x491c1f(0xef)](
                    _0x491c1f(0xa5)
                  ) != -0x1 && (_0x477177 = _0x31c5a0[_0x491c1f(0xca)] - 0x1);
              }
            }
            _0x31c5a0[_0x491c1f(0xca)] > 0x0
              ? ((_0x47a693["selectedIndex"] = _0x477177),
                play(_0x31c5a0[_0x477177][_0x491c1f(0xe7)]))
              : alert(_0x491c1f(0x93));
          });
    });
}
function play(_0x236512, _0x55a2c7) {
  var _0x3017c3 = _0x421137;
  stop();
  var _0xc2fbe2 = {};
  !!_0x236512
    ? (_0xc2fbe2 = { video: { deviceId: _0x236512 }, audio: ![] })
    : (_0xc2fbe2 = { video: !![], audio: ![] }),
    navigator[_0x3017c3(0x100)]
      [_0x3017c3(0xc0)](_0xc2fbe2)
      [_0x3017c3(0xe9)](function (_0x590548) {
        var _0x301560 = _0x3017c3;
        localStream = _0x590548;
        var _0x521c90 = document[_0x301560(0xf7)]("camera")[0x0];
        _0x521c90[_0x301560(0x9b)] = _0x590548;
      })
      [_0x3017c3(0xdc)](function (_0x3a8292) {
        var _0x51bba9 = _0x3017c3;
        console["error"](
          _0x51bba9(0x88),
          _0x3a8292,
          _0x3a8292[_0x51bba9(0xe2)]
        ),
          alert(_0x3a8292[_0x51bba9(0x9f)]);
      });
}
function _0x554e() {
  var _0x5f9ab3 = [
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22product-name\x22>",
    "2292006dqIcia",
    "productDisplay",
    "setAttribute",
    "warn",
    "getItem",
    "barcode-polygon",
    "876cdImal",
    "176RgmzFM",
    "#startButton",
    "http://www.w3.org/2000/svg",
    "target",
    "camera",
    "add",
    "293914gpXePq",
    "Camera\x20",
    "json",
    "JSON\x20rawValue",
    "error",
    "<img\x20src=\x27",
    "2875430CGOjoy",
    "getUserMedia",
    ".home",
    "none",
    "postcode",
    "#closeButton",
    "enumerateDevices",
    "onerror",
    ".json",
    "cameraSelect",
    "status",
    "length",
    "forEach",
    "style",
    "querySelector",
    "yes",
    "Answer",
    "points",
    "DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAyODQxMDUwLVRYbFhaV0pRY205cSIsIm1haW5TZXJ2ZXJVUkwiOiJodHRwczovL21kbHMuZHluYW1zb2Z0b25saW5lLmNvbSIsIm9yZ2FuaXphdGlvbklEIjoiMTAyODQxMDUwIiwic3RhbmRieVNlcnZlclVSTCI6Imh0dHBzOi8vc2Rscy5keW5hbXNvZnRvbmxpbmUuY29tIiwiY2hlY2tDb2RlIjotMTQxNjAxMTczMn0",
    "In\x20each\x20of\x20these\x20lines\x20(seperated\x20by\x20a\x20/\x20)\x20of\x20things\x20a\x20foodbank\x20needs\x20",
    "data",
    "\x20/\x20",
    "onchange",
    "<h3>Matches\x20will\x20appear\x20here</h3>",
    "needed",
    "join",
    "scrollIntoView",
    "5035HqeoVP",
    "cornerPoints",
    "catch",
    "product",
    "oops,\x20something\x20went\x20wrong.",
    "7YGHfUl",
    "push",
    "70552MDrZqs",
    "stack",
    "stop",
    "3gzxfNc",
    "toLowerCase",
    "polygon",
    "deviceId",
    "name",
    "then",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "RESULT",
    "product_name",
    "createElementNS",
    "theScanner",
    "indexOf",
    "stringify",
    "class",
    "https://world.openfoodfacts.org/api/v0/product/",
    "videoinput",
    "https://q0ev9yiw2b.execute-api.eu-west-1.amazonaws.com/dev/v1/dg/bedrock",
    "<div\x20id=\x27productName\x27>",
    "log",
    "getElementsByClassName",
    "display",
    "detect",
    "food",
    "Barcode\x20Detector\x20supported!",
    "needs",
    "image_thumb_url",
    "includes",
    "\x27/>\x0d\x0d",
    "mediaDevices",
    "decoding",
    "onload",
    "\x0d\x0d\x20</div>",
    "77338MSzPvJ",
    "getElementById",
    "label",
    "getUserMediaError",
    "result",
    "267660MESpJY",
    "text",
    "rawValue",
    "files",
    "getTracks",
    "replace",
    "brands",
    "setItem",
    "\x20Does\x20this\x20product\x20name\x20fit\x20strongly\x20into\x20any\x20of\x20them,\x20and\x20if\x20it\x20does\x20tell\x20me\x20its\x20name\x20from\x20that\x20list\x20above:\x20",
    "No\x20camera\x20detected.",
    "svg",
    "\x27/>\x0d",
    "test",
    "block",
    "init",
    "innerHTML",
    "</div>",
    "srcObject",
    "readAsDataURL",
    "red",
    "BarcodeDetector",
    "message",
    "onclick",
    "val",
    "<img\x20id=\x27theImage\x27\x20width=\x2769px\x27\x20src=\x27",
    "split",
    "441bTepNR",
    "back",
    "parse",
    "https://q0ev9yiw2b.execute-api.eu-west-1.amazonaws.com/dev/v0/dg/postcode/",
    "\x22\x20class=\x22product-image\x22/>\x0a\x20\x20\x20\x20\x20\x20",
    "body",
    "value",
  ];
  _0x554e = function () {
    return _0x5f9ab3;
  };
  return _0x554e();
}
function stop() {
  var _0x2fc57e = _0x421137;
  clearInterval(interval);
  try {
    localStream &&
      localStream[_0x2fc57e(0x8e)]()[_0x2fc57e(0xcb)]((_0x4561dc) =>
        _0x4561dc[_0x2fc57e(0xe3)]()
      );
  } catch (_0x1f868a) {
    alert(_0x1f868a["message"]);
  }
}
function onCameraChanged() {
  var _0x5f5c17 = _0x421137,
    _0x4baebf = document[_0x5f5c17(0x86)](_0x5f5c17(0xc8)),
    _0x590150 = _0x4baebf["selectedOptions"][0x0][_0x5f5c17(0xaa)];
  play(_0x590150);
}
function onPlayed() {
  updateSVGViewBoxBasedOnVideoSize(), startDecoding();
}
function updateSVGViewBoxBasedOnVideoSize() {
  var _0x56cef9 = _0x421137,
    _0x1dfa20 = document["getElementsByClassName"](_0x56cef9(0xb7))[0x0];
}
function startDecoding() {
  clearInterval(interval), (interval = setInterval(decode, 0x28));
}
async function decode() {
  var _0x301bd9 = _0x421137;
  if (decoding === ![]) {
    console[_0x301bd9(0xf6)](_0x301bd9(0x101));
    var _0x34cf2f = document[_0x301bd9(0xf7)](_0x301bd9(0xb7))[0x0];
    decoding = !![];
    var _0x2ed782 = await barcodeDetector[_0x301bd9(0xf9)](_0x34cf2f);
    (decoding = ![]),
      console[_0x301bd9(0xf6)](_0x2ed782),
      drawOverlay(_0x2ed782);
  }
}
function drawOverlay(_0x2fed68) {
  var _0x171895 = _0x421137,
    _0x3ce00e = document["getElementsByTagName"](_0x171895(0x94))[0x0];
  for (
    var _0x1e8910 = 0x0;
    _0x1e8910 < _0x2fed68[_0x171895(0xca)];
    _0x1e8910++
  ) {
    var _0x9e3dc7 = _0x2fed68[_0x1e8910];
    console[_0x171895(0xf6)](_0x9e3dc7);
    var _0x5634e2 = {};
    (_0x5634e2["x1"] = _0x9e3dc7[_0x171895(0xdb)][0x0]["x"]),
      (_0x5634e2["x2"] = _0x9e3dc7[_0x171895(0xdb)][0x1]["x"]),
      (_0x5634e2["x3"] = _0x9e3dc7[_0x171895(0xdb)][0x2]["x"]),
      (_0x5634e2["x4"] = _0x9e3dc7[_0x171895(0xdb)][0x3]["x"]),
      (_0x5634e2["y1"] = _0x9e3dc7[_0x171895(0xdb)][0x0]["y"]),
      (_0x5634e2["y2"] = _0x9e3dc7[_0x171895(0xdb)][0x1]["y"]),
      (_0x5634e2["y3"] = _0x9e3dc7[_0x171895(0xdb)][0x2]["y"]),
      (_0x5634e2["y4"] = _0x9e3dc7["cornerPoints"][0x3]["y"]);
    var _0x1a5122 = getPointsData(_0x5634e2),
      _0x17b493 = document[_0x171895(0xed)](_0x171895(0xb5), _0x171895(0xe6));
    _0x17b493[_0x171895(0xae)](_0x171895(0xd0), _0x1a5122),
      _0x17b493["setAttribute"](_0x171895(0xf1), _0x171895(0xb1));
    var _0x3717ad = document[_0x171895(0xed)](_0x171895(0xb5), _0x171895(0x8b));
    (_0x3717ad["innerHTML"] = _0x9e3dc7[_0x171895(0x8c)]),
      _0x3717ad[_0x171895(0xae)]("x", _0x5634e2["x1"]),
      _0x3717ad[_0x171895(0xae)]("y", _0x5634e2["y1"]),
      _0x3717ad["setAttribute"]("fill", _0x171895(0x9d)),
      _0x3717ad[_0x171895(0xae)]("fontSize", "20"),
      (document[_0x171895(0x86)](_0x171895(0xee))[_0x171895(0x99)] =
        _0x9e3dc7[_0x171895(0x8c)]);
    const _0x267842 = getBarcodeData(_0x9e3dc7[_0x171895(0x8c)])[
      _0x171895(0xe9)
    ]((_0x85187) => {
      var _0x79d1d3 = _0x171895;
      stop(), console[_0x79d1d3(0xf6)]("Result", _0x85187);
      const _0x99b48d =
          _0x85187[_0x79d1d3(0x90)] + "\x20" + _0x85187[_0x79d1d3(0xec)],
        _0x5859be = _0x85187[_0x79d1d3(0xfd)];
      console[_0x79d1d3(0xf6)](_0x99b48d),
        console[_0x79d1d3(0xf6)](_0x5859be),
        (document[_0x79d1d3(0x86)](_0x79d1d3(0xee))["innerHTML"] =
          _0x99b48d + _0x79d1d3(0xbe) + _0x5859be + _0x79d1d3(0xff));
      const _0x28194b = document[_0x79d1d3(0x86)](_0x79d1d3(0xad));
      _0x28194b[_0x79d1d3(0x99)] =
        _0x79d1d3(0xab) +
        _0x99b48d +
        _0x79d1d3(0xea) +
        _0x5859be +
        _0x79d1d3(0xa8);
      const _0x302354 = document[_0x79d1d3(0x86)]("postcode")
        [_0x79d1d3(0xaa)]["toLowerCase"]()
        [_0x79d1d3(0x8f)](/[^a-z]/g, "");
      console[_0x79d1d3(0xf6)](_0x302354);
      const _0x48c704 = getfoodBankList(_0x302354, _0x99b48d);
    });
  }
}
function getPointsData(_0xe8d2e7) {
  var _0x3df778 = _0xe8d2e7["x1"] + "," + _0xe8d2e7["y1"] + "\x20";
  return (
    (_0x3df778 = _0x3df778 + _0xe8d2e7["x2"] + "," + _0xe8d2e7["y2"] + "\x20"),
    (_0x3df778 = _0x3df778 + _0xe8d2e7["x3"] + "," + _0xe8d2e7["y3"] + "\x20"),
    (_0x3df778 = _0x3df778 + _0xe8d2e7["x4"] + "," + _0xe8d2e7["y4"]),
    _0x3df778
  );
}
const getBarcodeData = async (_0x5d9ba2) => {
    var _0x1c76fc = _0x421137;
    const _0x33b531 = await fetch(
        _0x1c76fc(0xf2) + _0x5d9ba2 + _0x1c76fc(0xc7)
      ),
      _0x477747 = await _0x33b531[_0x1c76fc(0xbb)]();
    return _0x477747[_0x1c76fc(0xdd)];
  },
  getfoodBankList = (_0x236414, _0x1c1eed) => {
    var _0xb4b3e6 = _0x421137;
    console["log"](_0xb4b3e6(0xc3), _0x236414);
    let _0x1be71f = fetch(_0xb4b3e6(0xa7) + _0x236414 + "/foodbanks");
    _0x1be71f[_0xb4b3e6(0xe9)]((_0x3e7ae3) => _0x3e7ae3[_0xb4b3e6(0xbb)]())[
      _0xb4b3e6(0xe9)
    ]((_0xa4e294) => {
      var _0xe4db0b = _0xb4b3e6;
      console[_0xe4db0b(0xf6)](_0xe4db0b(0xeb), _0xa4e294["data"]["data"]),
        parseData(_0xa4e294[_0xe4db0b(0xd3)]["data"], _0x1c1eed);
    });
  },
  parseData = (_0x274289, _0x3401bb) => {
    var _0x2fc34e = _0x421137;
    let _0x3eeb65 = [_0x3401bb];
    (document[_0x2fc34e(0x86)](_0x2fc34e(0x8b))["innerHTML"] = _0x2fc34e(0xd6)),
      _0x274289[_0x2fc34e(0xcb)]((_0x4628d3, _0x597801) => {
        var _0xc63394 = _0x2fc34e;
        let _0x258c32 =
          _0x4628d3[_0xc63394(0xfc)]["needs"][_0xc63394(0xa3)]("\x0a");
        if (_0x597801 < 0xa && _0x258c32[_0xc63394(0xca)] > 0x1) {
          let _0x219c9a =
              _0xc63394(0xd2) +
              _0x258c32[_0xc63394(0xd8)]("\x20/\x20") +
              ".\x20" +
              _0xc63394(0x92) +
              _0x3eeb65[0x0],
            _0x5043d8 = askBedrockAQuestion(_0x219c9a)
              ["then"]((_0x404008) => {
                var _0x4df07a = _0xc63394;
                let _0x4136a4 = "no";
                localStorage[_0x4df07a(0x91)](_0x4df07a(0xd7), "no"),
                  localStorage[_0x4df07a(0x91)](_0x4df07a(0xa1), 0x0);
                if (
                  _0x404008[_0x4df07a(0xca)] > 0x1 &&
                  _0x4628d3[_0x4df07a(0xe8)] &&
                  _0x4628d3[_0x4df07a(0xc3)] &&
                  !_0x404008["includes"]("No") &&
                  !_0x404008["includes"]("no") &&
                  !_0x404008[_0x4df07a(0xe5)]()[_0x4df07a(0xfe)](
                    _0x4df07a(0xce)
                  ) &&
                  !_0x404008[_0x4df07a(0xe5)]()[_0x4df07a(0xfe)](
                    _0x4df07a(0xfa)
                  )
                ) {
                  (_0x4136a4 = _0x4df07a(0xce)),
                    localStorage[_0x4df07a(0x91)](
                      _0x4df07a(0xd7),
                      _0x4df07a(0xce)
                    );
                  let _0x411a49 =
                    localStorage[_0x4df07a(0xb0)](_0x4df07a(0xa1)) + 0x1;
                  localStorage[_0x4df07a(0x91)]("val", _0x411a49),
                    console["log"](_0x4df07a(0xd7)),
                    (document[_0x4df07a(0x86)](_0x4df07a(0x8b))["innerHTML"] =
                      document[_0x4df07a(0x86)](_0x4df07a(0x8b))[
                        _0x4df07a(0x99)
                      ] +
                      "<div\x20class=\x27item\x27\x20id=\x27item_" +
                      _0x4628d3[_0x4df07a(0xe8)] +
                      "\x27>" +
                      _0x4628d3[_0x4df07a(0xe8)] +
                      _0x4df07a(0xd4) +
                      _0x4628d3[_0x4df07a(0xc3)] +
                      "\x20" +
                      "\x20needs\x20this." +
                      "\x20\x0d\x0d" +
                      _0x4df07a(0x103));
                  const _0xdd8a0d = document[_0x4df07a(0x86)](
                    "item_" + _0x4628d3[_0x4df07a(0xe8)]
                  );
                  _0xdd8a0d[_0x4df07a(0xd9)]();
                } else {
                  if (
                    localStorage[_0x4df07a(0xb0)](_0x4df07a(0xd7)) ==
                    _0x4df07a(0xce)
                  ) {
                  } else localStorage[_0x4df07a(0x91)](_0x4df07a(0xd7), "no");
                }
              })
              [_0xc63394(0xe9)](() => {})
              ["catch"]((_0x3e6537) => console["log"](_0x3e6537));
        }
      });
  },
  askBedrockAQuestion = async (_0x4be216) => {
    var _0x2e155e = _0x421137;
    try {
      const _0x188e31 = await fetch(_0x2e155e(0xf4), {
          method: "POST",
          headers: {},
          body: JSON[_0x2e155e(0xf0)]({ question: _0x4be216, type: "" }),
        }),
        _0x46af45 = await _0x188e31[_0x2e155e(0xbb)]();
      return JSON[_0x2e155e(0xa6)](_0x46af45[_0x2e155e(0xa9)])[_0x2e155e(0xcf)];
    } catch (_0x44d5e8) {
      console[_0x2e155e(0xf6)](_0x2e155e(0xbd), _0x44d5e8["message"]);
    }
  };
