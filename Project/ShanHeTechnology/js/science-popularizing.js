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
function blurBackground(){
  document.getElementsByClassName("bg-h1")[0].style.filter="blur(2px)";
  document.getElementsByClassName("bg-h1")[0].style.fontSize="6.5rem";
  document.getElementsByClassName("bg-p")[0].style.filter="blur(1px)";
  document.getElementsByClassName("bg-p")[0].style.fontSize="1.5rem";
}
function clearBackground(){
  document.getElementsByClassName("bg-h1")[0].style.filter="blur(0px)";
  document.getElementsByClassName("bg-h1")[0].style.fontSize="4.5rem";
  document.getElementsByClassName("bg-p")[0].style.filter="blur(0px)";
  document.getElementsByClassName("bg-p")[0].style.fontSize="1.2rem";
}
function setBackIconStyle() {
  let topDistance = document.documentElement.scrollTop;
  let bodyDistance = document.body.scrollHeight;
  if (topDistance >= bodyDistance / 8) {
    document.getElementsByClassName("back-to-top")[0].style.opacity=1;
    document.getElementsByClassName("back-to-top")[0].style.transform="scale(1)";
  }
  else{
    document.getElementsByClassName("back-to-top")[0].style.opacity=0;
    document.getElementsByClassName("back-to-top")[0].style.transform="scale(0)";
  }
}