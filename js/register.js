function userRegister(email, password, name, gender, phone) {
  let userData = {
    email: email,
    password: password,
    name: name,
    gender: gender,
    phone: phone
  };
  let promise = axios({
    url: 'https://shop.cyberlearn.vn/api/Users/signup',
    method: 'POST',
    data: userData,
  });
  promise.then(function(res) {
    displayNotification(res.data.message, res.status);
  }).catch(function(err) {
    displayNotification(err.response.data.message, err.response.status);
  });
}

function getValueUser() {
  let user = {};
  let formFields = document.querySelectorAll('#registrationForm input, #registrationForm select');
  formFields.forEach(function(field) {
    let id = field.id;
    user[id] = field.value;
  });
  let isValid = true;
  isValid &= checkEmptyValue(user.email, "tbEmail") && checkEmailValue(user.email,"tbEmail")
  isValid &= checkEmptyValue(user.password, "tbPassWord") && checkPassword(user.password, "tbPassWord", 6, 10)
  isValid &= checkEmptyValue(user.name, "tbName")
  isValid &= checkGenderSelected(user.gender, "tbGender")
  isValid &= checkEmptyValue(user.phone, "tbPhone")

  if(isValid){
    userRegister(user.email, user.password, user.name, user.gender, user.phone);
    resetForm();
    return;
  }
  
}
document.getElementById('btn_register').onclick = getValueUser;

function resetForm() {
  document.getElementById('registrationForm').reset();
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