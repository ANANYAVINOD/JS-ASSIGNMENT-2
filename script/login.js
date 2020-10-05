function login() {
  let name = document.getElementById("firstname").value;
  let password = document.getElementById("password").value;
  var userList = localStorage.getItem("users");
  let allUsers = JSON.parse(userList);

  clearErrormsg();
  for (i = 0; i < allUsers.length; i++) {
    if (name == allUsers[i].firstname && password == allUsers[i].password) {
      console.log("logged in " + allUsers[i].firstname);
      var currentUser = {
        firstname: allUsers[i].firstname,
        lastname: allUsers[i].lastname,
      };
      localStorage.setItem("currentuser", JSON.stringify(currentUser));
      window.location.href = "home.html";
      return;
    }
  }
  errorMsg();
}

var error = document.getElementById("error-message");
function errorMsg() {
  error.textContent = "Incorrect Username or Password";
  error.style.color = "#ff0000";
  error.style.fontSize = "14px";
  error.style.marginBottom = "10px";
  error.style.display = "block";
}

function clearErrormsg() {
  if ((error.style.display = "none")) {
    return;
  } else {
    error.style.display = "block";
  }
}


