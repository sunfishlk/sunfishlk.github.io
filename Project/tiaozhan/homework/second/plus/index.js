function on() {
  document.getElementById("switch").innerText = "关灯";
  document.getElementById("switch").style.color = "#ECF5FF";
  document.getElementById("switch").style.backgroundColor = "#409EFF";
  document.getElementById("circle").style.backgroundColor = "yellow";
  document.getElementById("circle").style.boxShadow = "0px 0px 200px 50px yellow";
}
function off() {
  document.getElementById("switch").innerText = "开灯";
  document.getElementById("switch").style.color = "#409EFF";
  document.getElementById("switch").style.backgroundColor = "#ECF5FF";
  document.getElementById("circle").style.backgroundColor = "black";
  document.getElementById("circle").style.boxShadow = "0px 0px";
}
function trigger() {
  let content = document.getElementById("switch").innerText;
  if (content == "开灯") {
    on();
  }
  else {
    off();
  }
}
let colorCount = 0;
function changeColor() {
  if (document.getElementById("switch").innerText == "开灯") {
    return;
  }
  if (colorCount == 7) {
    colorCount = 0;
  }
  switch (colorCount) {
    case 0:
      document.getElementById("circle").style.backgroundColor = "red";
      document.getElementById("circle").style.boxShadow = "0px 0px 200px 50px red";
      colorCount++;
      break;
    case 1:
      document.getElementById("circle").style.backgroundColor = "orange";
      document.getElementById("circle").style.boxShadow = "0px 0px 200px 50px orange";
      colorCount++;
      break;
    case 2:
      document.getElementById("circle").style.backgroundColor = "yellow";
      document.getElementById("circle").style.boxShadow = "0px 0px 200px 50px yellow";
      colorCount++;
      break;
    case 3:
      document.getElementById("circle").style.backgroundColor = "green";
      document.getElementById("circle").style.boxShadow = "0px 0px 200px 50px green";
      colorCount++;
      break;
    case 4:
      document.getElementById("circle").style.backgroundColor = "cyan";
      document.getElementById("circle").style.boxShadow = "0px 0px 200px 50px cyan";
      colorCount++;
      break;
    case 5:
      document.getElementById("circle").style.backgroundColor = "blue";
      document.getElementById("circle").style.boxShadow = "0px 0px 200px 50px blue";
      colorCount++;
      break;
    case 6:
      document.getElementById("circle").style.backgroundColor = "purple";
      document.getElementById("circle").style.boxShadow = "0px 0px 200px 50px purple";
      colorCount++;
      break;
  }
}
let luminance = 0;
function changeLuminance() {
  if (document.getElementById("switch").innerText == "开灯") {
    return;
  }
  if (luminance == 10) {
    luminance = 0;
  }
  switch (luminance) {
    case 0:
      document.getElementById("circle").style.opacity = 0.1;
      luminance++;
      break;
    case 1:
      document.getElementById("circle").style.opacity = 0.2;
      luminance++;
      break;
    case 2:
      document.getElementById("circle").style.opacity = 0.3;
      luminance++;
      break;
    case 3:
      document.getElementById("circle").style.opacity = 0.4;
      luminance++;
      break;
    case 4:
      document.getElementById("circle").style.opacity = 0.5;
      luminance++;
      break;
    case 5:
      document.getElementById("circle").style.opacity = 0.6;
      luminance++;
      break;
    case 6:
      document.getElementById("circle").style.opacity = 0.7;
      luminance++;
      break;
    case 7:
      document.getElementById("circle").style.opacity = 0.8;
      luminance++;
      break;
    case 8:
      document.getElementById("circle").style.opacity = 0.9;
      luminance++;
      break;
    case 9:
      document.getElementById("circle").style.opacity = 1;
      luminance++;
      break;
  }
}
let index = 1;
function lk() {
  console.log(index++);
}