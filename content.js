const redirectURL = "https://www.elms.hokudai.ac.jp/portal/home";
// SESSION ing auth_tkt の三つをcookieから消す？
// ログイン画面に連れていく おわり
if (document.getElementById("login_button")) {
  // ログイン画面
  const btn = document.getElementById("login_button");
  const name = document.getElementById("username_input");
  const password = document.getElementById("password_input");
  btn.style["padding"] = "15px";
  btn.style["border-radius"] = "6px";
  btn.style["border"] = "1px solid grey";
  btn.style["transform"] = "translateY(16px)";
  name.style["padding"] = "5px";
  password.style["padding"] = "5px";
} else {
  console.log("timeout detected");
  location.replace(redirectURL);
}
