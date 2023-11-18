function hideSide() {
  document.getElementById("aside").style.width = "0px";
  document.getElementsByClassName("aside-top")[0].style.display = "none";
  document.getElementsByClassName("aside-center")[0].style.display = "none";
  document.getElementsByClassName("aside-bottom")[0].style.display = "none";
  document.getElementsByClassName("aside-control")[0].style.display = "flex";
}
function showSide() {
  document.getElementById("aside").style.width = "250px";
  document.getElementsByClassName("aside-top")[0].style.display = "flex";
  document.getElementsByClassName("aside-center")[0].style.display = "flex";
  document.getElementsByClassName("aside-bottom")[0].style.display = "flex";
  document.getElementsByClassName("aside-control")[0].style.display = "none";
}
function publish() {
  console.log("published");
}
function comment() {
  console.log("comment");
}
function like() {
  console.log("like");
}
function star() {
  console.log("star");
}
function share() {
  console.log("share");
}
function switchToHotRank() {
  document.getElementsByClassName("menubar-item")[0].classList.remove("menubar-item-active");
  document.getElementsByClassName("menubar-item")[1].classList.add("menubar-item-active");
  document.getElementsByClassName("menubar-item")[2].classList.remove("menubar-item-active");
}
function switchToFollow() {
  document.getElementsByClassName("menubar-item")[0].classList.remove("menubar-item-active");
  document.getElementsByClassName("menubar-item")[1].classList.remove("menubar-item-active");
  document.getElementsByClassName("menubar-item")[2].classList.add("menubar-item-active");
}
function switchToRecommend() {
  document.getElementsByClassName("menubar-item")[0].classList.add("menubar-item-active");
  document.getElementsByClassName("menubar-item")[1].classList.remove("menubar-item-active");
  document.getElementsByClassName("menubar-item")[2].classList.remove("menubar-item-active");
}
function loadHomePage() {
  window.location.href = "../index.html";
}
function loadSquare() {
  window.location.href = "square.html";
}
function loadVideo() {
  window.location.href = "video.html";
}
function loadUsedBooks() {
  window.location.href = "#";
}
function loadMessage() {
  window.location.href = "message.html";
}
function loadPersonalPage() {
  window.location.href = "personal-page.html";
}
function search() {
  let searchContent = document.getElementById("search-input").value;
  let link = `https://cn.bing.com/search?q=${searchContent}`;
  window.location.href = link;
}
function scan() {
  console.log("scan");
}
//此处不通过类名而通过id去get到input时keyCode会报错，奇怪的问题
document.getElementsByClassName("search-input")[0].addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    search();
  }
})
function setMenubar() {
  let scrollHeight = document.body.scrollHeight;//body能滑动的的总滑动距离高度
  let scrollDistance = document.documentElement.scrollTop;//文档流已经滑动的距离
  let aside=document.getElementById("aside");
  if (scrollDistance >= 250) {
    document.getElementsByClassName("menubar")[0].style.backgroundColor = "#87ceeb";
    document.getElementsByClassName("menubar-item")[0].style.color = "white";
    document.getElementsByClassName("menubar-item")[1].style.color = "white";
    document.getElementsByClassName("menubar-item")[2].style.color = "white";
  }
  else {
    document.getElementsByClassName("menubar")[0].style.backgroundColor = "white";
    document.getElementsByClassName("menubar-item")[0].style.color = "black";
    document.getElementsByClassName("menubar-item")[1].style.color = "black";
    document.getElementsByClassName("menubar-item")[2].style.color = "black";
  }
}
function mouseOver(index) {
  let scrollDistance = document.documentElement.scrollTop;
  if (scrollDistance < 250) {
    document.getElementsByClassName("menubar-item")[index].style.color = "#1ba784";
  }
  else {
    document.getElementsByClassName("menubar-item")[index].style.color = "#ff66b2";
  }
}
function mouseOut(index) {
  let scrollDistance = document.documentElement.scrollTop;
  if (scrollDistance < 250) {
    document.getElementsByClassName("menubar-item")[index].style.color = "black";
  }
  else {
    document.getElementsByClassName("menubar-item")[index].style.color = "white";
  }
}
function setBackToTop(){
  let scrollDistance=document.documentElement.scrollTop;
  let scrollHeight=document.body.scrollHeight;
  if(scrollDistance<scrollHeight/3){
    // document.getElementsByClassName("back-to-top")[0].style.width="0px";
    document.getElementsByClassName("back-to-top")[0].style.transform="scale(0)";
  }
  else{
    // document.getElementsByClassName("back-to-top")[0].style.width="50px";
    document.getElementsByClassName("back-to-top")[0].style.transform="scale(1)";
  }
}
function classify(){
  console.log("classify");
}