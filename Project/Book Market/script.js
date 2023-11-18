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
  window.location.href = "#";
}
function loadSquare() {
  window.location.href = "html/square.html";
}
function loadVideo() {
  window.location.href = "html/video.html";
}
function loadUsedBooks() {
  window.location.href = "html/used-books.html";
}
function loadMessage() {
  window.location.href = "html/message.html";
}
function loadPersonalPage() {
  window.location.href = "html/personal-page.html";
}
function search() {
  let searchContent = document.getElementById("search-input").value;
  let link = `https://cn.bing.com/search?q=${searchContent}`;
  window.location.href = link;
}
//此处不通过类名而通过id去get到input时keyCode会报错，奇怪的问题
document.getElementsByClassName("search-input")[0].addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    search();
  }
})