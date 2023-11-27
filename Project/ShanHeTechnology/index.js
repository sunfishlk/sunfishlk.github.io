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