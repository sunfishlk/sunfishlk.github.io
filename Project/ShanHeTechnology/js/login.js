function getVerifyCode(){

}
function login(){

}
function checkPhoneNumber(){

}
function changeToMailLogin(){
  document.getElementsByClassName("phone-number-input-container")[0].style.display="none";
  document.getElementsByClassName("mail-input-container")[0].style.display="flex";
  console.log("to mail");
}
function changeToQQLogin(){
  
}
function changeToWeChatLogin(){

}
function changeToPasswordLogin(){//密码登录，需要手机号+密码，底部变成免密登录模块
  document.getElementsByClassName("login-button")[0].innerText="登录";

  document.getElementsByClassName("phone-number-input-container")[0].style.display="flex";
  document.getElementsByClassName("mail-input-container")[0].style.display="none";
  document.getElementsByClassName("phone-number-input")[0].placeholder="请输入手机号";

  document.getElementsByClassName("verify-code")[0].style.display="none";
  document.getElementsByClassName("mail-password-container")[0].style.display="block";

  document.getElementsByClassName("phone-number-login")[0].style.display="block";
  document.getElementsByClassName("password-login")[0].style.display="none";
  console.log("to password");
}
function changeToFreePasswordLogin(){//免密登录，需要手机号+验证模块，底部变成密码登录模块 //先触发
  document.getElementsByClassName("login-button")[0].innerText="登录/注册";

  document.getElementsByClassName("phone-number-input-container")[0].style.display="flex";
  document.getElementsByClassName("mail-input-container")[0].style.display="none";
  document.getElementsByClassName("phone-number-input")[0].placeholder="请输入手机号";

  document.getElementsByClassName("verify-code")[0].style.display="flex";
  document.getElementsByClassName("mail-password-container")[0].style.display="none";

  document.getElementsByClassName("phone-number-login")[0].style.display="none";
  document.getElementsByClassName("password-login")[0].style.display="block";
  console.log("to no password");
}