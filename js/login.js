function userLogin(email, password) {
  let userData = {
    email: email,
    password: password
  }
  let promise = axios({
    url: 'https://shop.cyberlearn.vn/api/Users/signin',
    method: 'POST',
    data: userData
  });
  promise.then(function(res) {
    displayNotification(res.data.message, res.status);
  }).catch(function(err) {
    displayNotification(err.response.data.message, err.response.status);
  });
};

function getValueUserLogin() {
  let user = {};
  let formFields = document.querySelectorAll('#loginForm input');
  formFields.forEach(function(field) {
    let id = field.id;
    user[id] = field.value;
  });
  let isValid = true;
  isValid &= checkEmptyValue(user.email, "tbEmail") && checkEmailValue(user.email,"tbEmail")
  isValid &= checkEmptyValue(user.password, "tbPassWord")
  if(isValid) {
    userLogin(user.email, user.password);
    resetForm();
    return;
  }
}
document.getElementById('btn_login').onclick = getValueUserLogin;

function resetForm() {
  document.getElementById('loginForm').reset();
}
function displayNotification(message, status) {
  let firstLetter = status.toString().split('');
  Toastify({
    text:  message,
    duration: 2000,
    close: false,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {     
      background: firstLetter[0] == 2 ? "green" : "red",   
      color: "white"
    },
  }).showToast();
}