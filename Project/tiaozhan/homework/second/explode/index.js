function on() {
  document.getElementById("switch").innerHTML = "关灯";
  document.getElementById("switch").style.color = "#ECF5FF";
  document.getElementById("switch").style.backgroundColor = "#409EFF";
  document.getElementById("circle").style.backgroundColor = "yellow";
  document.getElementById("circle").style.boxShadow = "0px 0px 200px 50px yellow";
}
function off() {
  document.getElementById("switch").innerHTML = "开灯";
  document.getElementById("switch").style.color = "#409EFF";
  document.getElementById("switch").style.backgroundColor = "#ECF5FF";
  document.getElementById("circle").style.backgroundColor = "black";
  document.getElementById("circle").style.boxShadow = "0px 0px";
}
function trigger() {
  let content = document.getElementById("switch").innerHTML;
  if (content == "开灯") {
    on();
  }
  else {
    off();
  }
}
let colorcount = 0;
function changeColor() {
  if(document.getElementById("switch").innerHTML=="开灯"){
    return;
  }
  if (colorcount == 7) {
    colorcount = 0;
  }
  switch (colorcount) {
    case 0:
      document.getElementById("circle").style.backgroundColor = "red";
      document.getElementById("circle").style.boxShadow="0px 0px 200px 50px red";
      colorcount++;
      break;
    case 1:
      document.getElementById("circle").style.backgroundColor = "orange";
      document.getElementById("circle").style.boxShadow="0px 0px 200px 50px orange";
      colorcount++;
      break;
    case 2:
      document.getElementById("circle").style.backgroundColor = "yellow";
      document.getElementById("circle").style.boxShadow="0px 0px 200px 50px yellow";
      colorcount++;
      break;
    case 3:
      document.getElementById("circle").style.backgroundColor = "green";
      document.getElementById("circle").style.boxShadow="0px 0px 200px 50px green";
      colorcount++;
      break;
    case 4:
      document.getElementById("circle").style.backgroundColor = "cyan";
      document.getElementById("circle").style.boxShadow="0px 0px 200px 50px cyan";
      colorcount++;
      break;
    case 5:
      document.getElementById("circle").style.backgroundColor = "blue";
      document.getElementById("circle").style.boxShadow="0px 0px 200px 50px blue";
      colorcount++;
      break;
    case 6:
      document.getElementById("circle").style.backgroundColor = "purple";
      document.getElementById("circle").style.boxShadow="0px 0px 200px 50px purple";
      colorcount++;
      break;
  }
}
let luminance=0;
function changeLuminance() {
  if(document.getElementById("switch").innerHTML=="开灯"){
    return;
  }
  if(luminance==10){
    luminance=0;
  }
  switch(luminance){
    case 0:
      document.getElementById("circle").style.opacity=0.1;
      luminance++;
      break;
    case 1:
      document.getElementById("circle").style.opacity=0.2;
      luminance++;
      break;
    case 2:
      document.getElementById("circle").style.opacity=0.3;
      luminance++;
      break;
    case 3:
      document.getElementById("circle").style.opacity=0.4;
      luminance++;
      break;
    case 4:
      document.getElementById("circle").style.opacity=0.5;
      luminance++;
      break;
    case 5:
      document.getElementById("circle").style.opacity=0.6;
      luminance++;
      break;
    case 6:
      document.getElementById("circle").style.opacity=0.7;
      luminance++;
      break;
    case 7:
      document.getElementById("circle").style.opacity=0.8;
      luminance++;
      break;
    case 8:
      document.getElementById("circle").style.opacity=0.9;
      luminance++;
      break;
    case 9:
      document.getElementById("circle").style.opacity=1;
      luminance++;
      break;
  }
}
function explode(){
  document.getElementById("explode").style.display="block";
  document.getElementById("ikun").innerHTML="再也不爆炸了";
}
function noExplode(){
  document.getElementById("explode").style.display="none";
  document.getElementById("ikun").innerHTML="再多看一眼就会爆炸";
}
function basketball(){
  let content=document.getElementById("ikun").innerHTML;
  if(content=="再多看一眼就会爆炸"){
    explode();
  }
  else{
    noExplode();
  }
}