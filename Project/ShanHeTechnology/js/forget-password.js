function byMail(){
  document.getElementsByClassName("phone-number-input-container")[0].style.display="none";
  document.getElementsByClassName("mail-input-container")[0].style.display="flex";
  document.getElementById("mail").style.display="none";
  document.getElementById("phone").style.display="block";
  document.getElementsByClassName("detail")[0].innerText="通过邮箱验证";
}
function byPhone(){
  document.getElementsByClassName("phone-number-input-container")[0].style.display="flex";
  document.getElementsByClassName("mail-input-container")[0].style.display="none";
  document.getElementById("mail").style.display="block";
  document.getElementById("phone").style.display="none";
  document.getElementsByClassName("detail")[0].innerText="通过手机号验证";
}
function next(){
  console.log("next");
}