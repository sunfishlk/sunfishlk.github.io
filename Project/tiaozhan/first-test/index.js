function lk() {
  console.log(1);
}

function blurBackground() {
  document.getElementsByClassName("wrapper-bg")[0].style.filter = "blur(5px)";
  // document.getElementsByClassName("wrapper-bg")[0].style.transform = "scale(1.5)";
  document.getElementsByClassName("big-text")[0].style.filter = "blur(2.5px)";
}

function clearBackground() {
  document.getElementsByClassName("wrapper-bg")[0].style.filter = "blur(0px)";
  // document.getElementsByClassName("wrapper-bg")[0].style.transform = "scale(1)";
  document.getElementsByClassName("big-text")[0].style.filter = "blur(0px)";
}

function playSlide1() {
  let slides=document.getElementsByClassName("slide1");
  let currentSlide=0;
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide=(currentSlide+1)%slides.length;
    slides[currentSlide].classList.add("active");
  }, 4000);
}
function playSlide2() {
  let slides=document.getElementsByClassName("slide2");
  let currentSlide=0;
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide=(currentSlide+1)%slides.length;
    slides[currentSlide].classList.add("active");
  }, 4000);
}
function playSlide3() {
  let slides=document.getElementsByClassName("slide3");
  let currentSlide=0;
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide=(currentSlide+1)%slides.length;
    slides[currentSlide].classList.add("active");
  }, 4000);
}
window.onload=playSlide1();
window.onload=playSlide2();
window.onload=playSlide3();

let zIndex = [100, 101, 102, 103, 104];
function setZIndex1() {
  setTimeout(() => {
    if (zIndex[1] >= zIndex[0]) {
      zIndex[1]--;
    }
    if (zIndex[2] >= zIndex[0]) {
      zIndex[2]--;
    }
    if (zIndex[3] >= zIndex[0]) {
      zIndex[3]--;
    }
    if (zIndex[4] >= zIndex[0]) {
      zIndex[4]--;
    }
    zIndex[0] = 104;
    document.getElementById("three-img1").style.zIndex = zIndex[0];
    document.getElementById("three-img2").style.zIndex = zIndex[1];
    document.getElementById("three-img3").style.zIndex = zIndex[2];
    document.getElementById("three-img4").style.zIndex = zIndex[3];
    document.getElementById("three-img5").style.zIndex = zIndex[4];
    console.log(zIndex[0])
  }, 500);
}
function setZIndex2() {
  setTimeout(() => {
    if (zIndex[0] >= zIndex[1]) {
      zIndex[0]--;
    }
    if (zIndex[2] >= zIndex[1]) {
      zIndex[2]--;
    }
    if (zIndex[3] >= zIndex[1]) {
      zIndex[3]--;
    }
    if (zIndex[4] >= zIndex[1]) {
      zIndex[4]--;
    }
    zIndex[1] = 104;
    document.getElementById("three-img1").style.zIndex = zIndex[0];
    document.getElementById("three-img2").style.zIndex = zIndex[1];
    document.getElementById("three-img3").style.zIndex = zIndex[2];
    document.getElementById("three-img4").style.zIndex = zIndex[3];
    document.getElementById("three-img5").style.zIndex = zIndex[4];
    console.log(zIndex[1])
  }, 500);
}
function setZIndex3() {
  setTimeout(() => {
    if (zIndex[0] >= zIndex[2]) {
      zIndex[0]--;
    }
    if (zIndex[1] >= zIndex[2]) {
      zIndex[1]--;
    }
    if (zIndex[3] >= zIndex[2]) {
      zIndex[3]--;
    }
    if (zIndex[4] >= zIndex[2]) {
      zIndex[4]--;
    }
    zIndex[2] = 104;
    document.getElementById("three-img1").style.zIndex = zIndex[0];
    document.getElementById("three-img2").style.zIndex = zIndex[1];
    document.getElementById("three-img3").style.zIndex = zIndex[2];
    document.getElementById("three-img4").style.zIndex = zIndex[3];
    document.getElementById("three-img5").style.zIndex = zIndex[4];
    console.log(zIndex[2])
  }, 500);
}
function setZIndex4() {
  setTimeout(() => {
    if (zIndex[0] >= zIndex[3]) {
      zIndex[0]--;
    }
    if (zIndex[1] >= zIndex[3]) {
      zIndex[1]--;
    }
    if (zIndex[2] >= zIndex[3]) {
      zIndex[2]--;
    }
    if (zIndex[4] >= zIndex[3]) {
      zIndex[4]--;
    }
    zIndex[3] = 104;
    document.getElementById("three-img1").style.zIndex = zIndex[0];
    document.getElementById("three-img2").style.zIndex = zIndex[1];
    document.getElementById("three-img3").style.zIndex = zIndex[2];
    document.getElementById("three-img4").style.zIndex = zIndex[3];
    document.getElementById("three-img5").style.zIndex = zIndex[4];
    console.log(zIndex[3])
  }, 500);
}
function setZIndex5() {
  setTimeout(() => {
    if (zIndex[0] >= zIndex[4]) {
      zIndex[0]--;
    }
    if (zIndex[1] >= zIndex[4]) {
      zIndex[1]--;
    }
    if (zIndex[2] >= zIndex[4]) {
      zIndex[2]--;
    }
    if (zIndex[3] >= zIndex[4]) {
      zIndex[3]--;
    }
    zIndex[4] = 104;
    document.getElementById("three-img1").style.zIndex = zIndex[0];
    document.getElementById("three-img2").style.zIndex = zIndex[1];
    document.getElementById("three-img3").style.zIndex = zIndex[2];
    document.getElementById("three-img4").style.zIndex = zIndex[3];
    document.getElementById("three-img5").style.zIndex = zIndex[4];
    console.log(zIndex[4])
  }, 500);
}
let printText = ["There is no elevator to success,", "you have to take the stairs.", "-- Zig Ziglar", "Let us cultivate our garden.", "-- Voltaire"];
function addText(string) {
  let str = "";
  let i = 0;
  let timer = setInterval(() => {
    if (str.length < string.length) {
      //str字符串拼接
      str += string[i]
      i++;
      document.getElementsByClassName("print-text")[0].innerText = str;
    }
    else {
      clearInterval(timer);
    }
  }, 50);
}
function deleteText(string) {
  let str = string;
  let i = str.length;
  let timer = setInterval(() => {
    if (str.length > 0) {
      //str.substring()方法截取字符串的子串并返回
      str = str.substring(0, str.length - 1);
      document.getElementsByClassName("print-text")[0].innerText = str;
      i--;
    }
    else {
      clearInterval(timer);
    }
  }, 50);
}
function changeText(i) {
  if (document.getElementsByClassName("print-text")[0].innerText == "") {
    addText(printText[i]);
  }
  if (document.getElementsByClassName("print-text")[0].innerText == printText[i]) {
    deleteText(printText[i]);
  }
}
function run() {
  setTimeout(() => {
    changeText(0);
  }, 0);
  setTimeout(() => {
    changeText(0);
  }, 2000);
  setTimeout(() => {
    changeText(1);
  }, 4000);
  setTimeout(() => {
    changeText(1);
  }, 6000);
  setTimeout(() => {
    changeText(2);
  }, 7500);
  setTimeout(() => {
    changeText(2)
  }, 9000);
  setTimeout(() => {
    changeText(3)
  }, 11000);
  setTimeout(() => {
    changeText(3)
  }, 13000);
  setTimeout(() => {
    changeText(4)
  }, 14500);
  setTimeout(() => {
    changeText(4)
  }, 16000);
}
run();
setInterval(() => {
  run();
}, 18000);

function setBackIconStyle() {
  let topDistance = document.documentElement.scrollTop;
  let bodyDistance = document.body.scrollHeight;
  if (topDistance >= bodyDistance / 12) {
    document.getElementsByClassName("back-to-top")[0].style.opacity = 1
    document.getElementsByClassName("back-to-top")[0].style.transform = "scale(1)"
  } else {
    document.getElementsByClassName("back-to-top")[0].style.opacity = 0
    document.getElementsByClassName("back-to-top")[0].style.transform = "scale(0)"
  }
}
function search() {
  let searchContent = document.getElementsByClassName("input-box")[0].value;
  //新开一个标签页
  // window.open("https://cn.bing.com/search?q="+searchContent)
  //原标签页跳转
  window.location.href = "https://cn.bing.com/search?q=" + searchContent
  //必应搜索："https://cn.bing.com/search?q="
  //百度搜索："https://www.baidu.com/s?wd="
  //B站搜索："https://search.bilibili.com/all?keyword="
  //谷歌搜索："https:///www.google.com/search?q="
}
//弃用方法：
// function keyEnterSearch() {
//   if(window.event.keyCode==13){
//     search();
//   }
// }
//给input-box增加监听键盘事件
//方法一：
document.getElementsByClassName("input-box")[0].addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    search();
  }
})
//方法二：
// document.getElementsByClassName("input-box")[0].onkeydown=function(event) {
//   if(event.keyCode==13){
//     search();
//   }
// }
function scaleBigText() {
  let top = document.documentElement.scrollTop
  let maxTop = document.getElementsByClassName("two")[0].scrollHeight;
  if (top >= 860) {
    document.getElementsByClassName("big-text")[0].innerText = "JUST GO ON"
    let tempTop = top - 860
    let ratio = tempTop / maxTop * 19
    document.getElementsByClassName("big-text")[0].style.transform = `scale(${ratio + 1})` //0 69  
    console.log(top.toFixed())
  }
  if (top > 1800) {
    document.getElementsByClassName("big-text")[0].innerText = "iTenzor"
    let ratio = (10 - top / maxTop * 8.5)
    document.getElementsByClassName("big-text")[0].style.transform = `scale(${ratio + 1})`
  }
}
function playMusic() {
  let index = 1
  let musicListUrl = ['audio/01_Theme.mp3', 'audio/05_A Tale Of Memory.mp3', 'audio/06_Happy Summer.mp3', 'audio/08_Far Memory(MusicBox version).mp3', 'audio/11_Gentle Recall.mp3', 'audio/18_LoveChoice 拣爱.mp3']
  setTimeout(() => {
    document.getElementsByClassName("audio")[0].src = musicListUrl[index]
    index++;
  }, 94000);
  setTimeout(() => {
    document.getElementsByClassName("audio")[0].src = musicListUrl[index]
    index++;
  }, 94000 + 77000);
  setTimeout(() => {
    document.getElementsByClassName("audio")[0].src = musicListUrl[index]
    index++;
  }, 94000 + 77000 + 100000);
  setTimeout(() => {
    document.getElementsByClassName("audio")[0].src = musicListUrl[index]
    index++;
  }, 94000 + 77000 + 100000 + 63000);
  setTimeout(() => {
    document.getElementsByClassName("audio")[0].src = musicListUrl[index]
    index++;
  }, 94000 + 77000 + 100000 + 63000 + 81000);
}
playMusic();
setInterval(() => {
  playMusic();
}, 94000 + 77000 + 100000 + 63000 + 81000 + 275000);

window.onload = function ensureMusicPlaying() {
  setInterval(() => {
    testMusicIfPlaying();
  }, 100);
}
function testMusicIfPlaying() {
  let music = document.getElementsByClassName("audio")[0];
  if (music.paused) {
    music.paused = false;
    music.play();
  }
}