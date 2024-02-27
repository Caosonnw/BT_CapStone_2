function checkEmptyValue(value, idSpan) {
  let eleSpan = document.getElementById(idSpan);
  if(value == "") {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Vui lòng không bỏ trống trường này";
    return false;
  } else {
    eleSpan.style.display = "none";
    eleSpan.innerHTML = "";
    return true;
  }
};
function checkEmailValue(value, idSpan) {
  let eleSpan = document.getElementById(idSpan);
  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let isValid = regexEmail.test(value);
  if (isValid) {
    eleSpan.style.display = "none";
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    eleSpan.style.display = "block";
    document.getElementById(idSpan).innerHTML = "Email không đúng định dạng";
    return false;
  } 
};
function checkPassword(value, idSpan, min, max) {
  let eleSpan = document.getElementById(idSpan);
  const regexPassWord = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{6,10}$/;
  let isValid = regexPassWord.test(value);
  if (isValid) {
    eleSpan.style.display = "none";
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = `"Mật khẩu phải tối thiểu ${min} tối đa ${max} ký tự và có ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"`;
    return false;
  }
}
function checkGenderSelected(gender, idSpan) {
  let eleSpan = document.getElementById(idSpan);
  if (gender !== "true" && gender !== "false") {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Vui lòng chọn giới tính là Nam hoặc Nữ";
    return false;
  } else {
    eleSpan.style.display = "none";
    eleSpan.innerHTML = "";
    return true;
  }
}