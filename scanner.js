var barcodeDetector;
var decoding = false;
var localStream;
var interval;
var scannerContainer = document.querySelector(".scanner");
var home = document.querySelector(".home");
var startButton = document.querySelector("#startButton");

startButton.onclick = function () {
  scannerContainer.style.display = "block";
  const regex =
    /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})$/;
  const postcode = document.getElementById("postcode").value;
  if (regex.test(postcode)) {
    // document.getElementById("overlay").style.display = "none";
    // home.style.display = "none";
    loadDevicesAndPlay();
  }
};
var fileInput = document.querySelector("#fileInput");
fileInput.onchange = function (event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    var img = document.getElementById("selectedImg");
    img.src = e.target.result;
    img.onload = async function () {
      var detectedCodes = await barcodeDetector.detect(img);
      var json = JSON.stringify(detectedCodes, null, 2);
      console.log("JSON rawValue", detectedCodes[0].rawValue);
      const result = await getBarcodeData(detectedCodes[0].rawValue);
      console.log(result);
      document.getElementById("selectedImg").style.display = "none";
      document.getElementById("theScanner").style.display = "block";
      const productName = result["brands"] + " " + result["product_name"];
      const image = result["image_thumb_url"];
      // console.log(productName);
      // console.log(image);
      document.getElementById("theScanner").innerHTML =
        productName + "\r\r" + "<img width='69px' src='" + image + "'/>\r";
      // console.log("IMAGE", image);

      // const postcode = "NE303TB";
      console.log(document.getElementById("postcode").value);
      // const postcode = document.getElementById("postcode").value;
      const data = await getfoodBankList(
        document.getElementById("postcode").value,
        productName
      );

      // .then((result) => {
      //   // parseData(result.data.data.data, productName);
      //   console.log("result");
      // })
      // .catch((error) => console.log("that didnt work" + error));
    };
  };

  reader.onerror = function () {
    console.warn("oops, something went wrong.");
  };

  reader.readAsDataURL(file);
};

var closeButton = document.querySelector("#closeButton");
closeButton.onclick = function () {
  stop();
  scannerContainer.style.display = "none";
  home.style.display = "";
};
document
  .getElementsByClassName("camera")[0]
  .addEventListener("loadeddata", onPlayed, false);
document.getElementById("cameraSelect").onchange = onCameraChanged;
initBarcodeDetector();

async function initBarcodeDetector() {
  var barcodeDetectorUsable = false;
  if ("BarcodeDetector" in window) {
    let formats = await window.BarcodeDetector.getSupportedFormats();
    if (formats.length > 0) {
      barcodeDetectorUsable = true;
    }
  }

  if (barcodeDetectorUsable === true) {
    console.log("Barcode Detector supported!");
  } else {
    // alert(
    //   "Barcode Detector is not supported by this browser, using the Dynamsoft Barcode Reader polyfill."
    // );

    BarcodeDetectorPolyfill.setLicense(
      // "DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ=="
      "DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAyODQxMDUwLVRYbFhaV0pRY205cSIsIm1haW5TZXJ2ZXJVUkwiOiJodHRwczovL21kbHMuZHluYW1zb2Z0b25saW5lLmNvbSIsIm9yZ2FuaXphdGlvbklEIjoiMTAyODQxMDUwIiwic3RhbmRieVNlcnZlclVSTCI6Imh0dHBzOi8vc2Rscy5keW5hbXNvZnRvbmxpbmUuY29tIiwiY2hlY2tDb2RlIjotMTQxNjAxMTczMn0"
    );
    let reader = await BarcodeDetectorPolyfill.init();
    console.log(reader); // You can modify the runtime settings of the reader instance.
    window.BarcodeDetector = BarcodeDetectorPolyfill;
  }

  barcodeDetector = new window.BarcodeDetector();

  document.getElementById("status").innerHTML = "";
}

function loadDevicesAndPlay() {
  var constraints = { video: true, audio: false };
  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    localStream = stream;
    var cameraselect = document.getElementById("cameraSelect");
    cameraselect.innerHTML = "";
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
      var count = 0;
      var cameraDevices = [];
      var defaultIndex = 0;
      for (var i = 0; i < devices.length; i++) {
        var device = devices[i];
        if (device.kind == "videoinput") {
          cameraDevices.push(device);
          var label = device.label || `Camera ${count++}`;
          cameraselect.add(new Option(label, device.deviceId));
          if (label.toLowerCase().indexOf("back") != -1) {
            defaultIndex = cameraDevices.length - 1;
          }
        }
      }

      if (cameraDevices.length > 0) {
        cameraselect.selectedIndex = defaultIndex;
        play(cameraDevices[defaultIndex].deviceId);
      } else {
        alert("No camera detected.");
      }
    });
  });
}

function play(deviceId, HDUnsupported) {
  stop();
  var constraints = {};

  if (!!deviceId) {
    constraints = {
      video: { deviceId: deviceId },
      audio: false,
    };
  } else {
    constraints = {
      video: true,
      audio: false,
    };
  }

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      localStream = stream;
      var camera = document.getElementsByClassName("camera")[0];
      // Attach local stream to video element
      camera.srcObject = stream;
    })
    .catch(function (err) {
      console.error("getUserMediaError", err, err.stack);
      alert(err.message);
    });
}

function stop() {
  clearInterval(interval);
  try {
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop());
    }
  } catch (e) {
    alert(e.message);
  }
}

function onCameraChanged() {
  var cameraselect = document.getElementById("cameraSelect");
  var deviceId = cameraselect.selectedOptions[0].value;
  play(deviceId);
}

function onPlayed() {
  updateSVGViewBoxBasedOnVideoSize();
  startDecoding();
}

function updateSVGViewBoxBasedOnVideoSize() {
  var camera = document.getElementsByClassName("camera")[0];
  // var svg = document.getElementsByTagName("svg")[0];
  // svg.setAttribute(
  //   "viewBox",
  //   "0 0 " + camera.videoWidth + " " + camera.videoHeight
  // );
}

function startDecoding() {
  clearInterval(interval);
  //1000/25=40
  interval = setInterval(decode, 40);
}

async function decode() {
  if (decoding === false) {
    console.log("decoding");
    var video = document.getElementsByClassName("camera")[0];
    decoding = true;
    var barcodes = await barcodeDetector.detect(video);
    decoding = false;
    console.log(barcodes);

    drawOverlay(barcodes);
  }
}

function drawOverlay(barcodes) {
  var svg = document.getElementsByTagName("svg")[0];
  // svg.innerHTML = "";
  for (var i = 0; i < barcodes.length; i++) {
    var barcode = barcodes[i];
    console.log(barcode);
    var lr = {};
    lr.x1 = barcode.cornerPoints[0].x;
    lr.x2 = barcode.cornerPoints[1].x;
    lr.x3 = barcode.cornerPoints[2].x;
    lr.x4 = barcode.cornerPoints[3].x;
    lr.y1 = barcode.cornerPoints[0].y;
    lr.y2 = barcode.cornerPoints[1].y;
    lr.y3 = barcode.cornerPoints[2].y;
    lr.y4 = barcode.cornerPoints[3].y;
    var points = getPointsData(lr);
    var polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    polygon.setAttribute("points", points);
    polygon.setAttribute("class", "barcode-polygon");
    var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.innerHTML = barcode.rawValue;
    text.setAttribute("x", lr.x1);
    text.setAttribute("y", lr.y1);
    text.setAttribute("fill", "red");
    text.setAttribute("fontSize", "20");
    // svg.append(polygon);
    // svg.append(text);
    // svg.style.display = "none";
    document.getElementById("theScanner").innerHTML = barcode.rawValue;

    const barcodeData = getBarcodeData(barcode.rawValue).then((result) => {
      stop();
      console.log("Result", result);
      const productName = result["brands"] + " " + result["product_name"];
      const image = result["image_thumb_url"];
      console.log(productName);
      console.log(image);
      document.getElementById("theScanner").innerHTML =
        productName + "<img src='" + image + "'/>\r\r";

      const productDisplay = document.getElementById("productDisplay");
      productDisplay.innerHTML = `
        <div class="product-name">${productName}</div>
        <img src="${image}" class="product-image"/>
      `;

      // const postcode = "NE303TB";
      const postcode = document
        .getElementById("postcode")
        .value.toLowerCase()
        .replace(/[^a-z]/g, "");
      console.log(postcode);
      const data = getfoodBankList(postcode, productName);
      //   .then((result) => {
      //     parseData(result.data.data.data, productName);
      //   })
      //   .catch((error) => console.log("that didnt work" + error));
    });
  }
}

function getPointsData(lr) {
  var pointsData = lr.x1 + "," + lr.y1 + " ";
  pointsData = pointsData + lr.x2 + "," + lr.y2 + " ";
  pointsData = pointsData + lr.x3 + "," + lr.y3 + " ";
  pointsData = pointsData + lr.x4 + "," + lr.y4;
  return pointsData;
}

const getBarcodeData = async (barcode) => {
  const response = await fetch(
    "https://world.openfoodfacts.org/api/v0/product/" + barcode + ".json"
  );
  const data = await response.json();
  return data.product;
};

const getfoodBankList = (postcode, productName) => {
  console.log("postcode", postcode);
  let fetchRes = fetch(
    "https://q0ev9yiw2b.execute-api.eu-west-1.amazonaws.com/dev/v0/dg/postcode/" +
      postcode +
      "/foodbanks"
  );

  // FetchRes is the promise to resolve
  // it by using.then() method
  fetchRes
    .then((res) => res.json())
    .then((d) => {
      console.log("RESULT", d.data.data);
      parseData(d.data.data, productName);
    });
  // return fetch(
  //   "https://q0ev9yiw2b.execute-api.eu-west-1.amazonaws.com/dev/v0/dg/postcode/" +
  //     "ne303tb" +
  //     "/foodbanks",
  //   { mode: "no-cors" }
  // );
  // .then((response) => response.text())
  // .then((data) => console.log("DATA", data));
  // const response = await fetch({
  //   method: "get",
  //   url:
  //     "https://q0ev9yiw2b.execute-api.eu-west-1.amazonaws.com/dev/v0/dg/postcode/" +
  //     postcode +
  //     "/foodbanks",
  //   mode: "cors",
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // }).then((result) => {
  //   console.log("result", result);
  // });
  // console.log("after call", response);
  // const data = await response.json();
  // console.log("foodbank data");
  // return data;
};

const parseData = (data, productName) => {
  let items = [productName];
  console.log("i have data", data.length);

  console.log("Scanning items: " + items.join(","));
  data.forEach((row, index) => {
    // console.log(row.needs.needs);
    let needs = row.needs.needs.split("\n");
    if (index < 10 && needs.length > 1) {
      let question =
        "This is the name of a product you can buy in a supermarket " +
        items.join(", ") +
        ". This is a list of things a food bank needs, seperate by a colon.  " +
        needs.join(" : ") +
        "'.  Please tell me which item from the list the product fits into. ";
      //   console.log(needs.join(", "));
      //   console.log(question);

      // let response = askGenAiAQuestion(question)
      let response = askBedrockAQuestion(question)
        .then((result) => {
          // console.log("bedrock result", result);
          if (
            result.length > 1 &&
            row.name &&
            row.postcode &&
            !result.includes("No") &&
            !result.includes("no")
          ) {
            document.getElementById("text").innerHTML =
              document.getElementById("text").innerHTML +
              `<div class='item'>` +
              row.name +
              ` / ` +
              row.postcode +
              ` ` +
              result +
              ` \r\r` +
              `\r\r </div>`;
          }
        })
        .catch((err) => console.log(err));
    } else {
    }
  });
};

const askBedrockAQuestion = async (question) => {
  try {
    const response = await fetch(
      "https://q0ev9yiw2b.execute-api.eu-west-1.amazonaws.com/dev/v1/dg/bedrock",
      {
        method: "POST",
        headers: {},
        // body: {
        //   question: JSON.stringify(question),
        //   type: "",
        // },
        body: JSON.stringify({ question: question, type: "" }),
      }
    );
    const data = await response.json();
    return JSON.parse(data.body).Answer;
  } catch (error) {
    console.log("error", error.message);
  }
};
