function login() {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let password = document.getElementById("password").value;
  var userList = localStorage.getItem("users");
  let allUsers = JSON.parse(userList);

  for (i = 0; i < allUsers.length; i++) {
    if (fname == allUsers[i].firstname && lname == allUsers[i].lastname && password == allUsers[i].password) {
      console.log("logged in " + allUsers[i].firstname);
      var currentUser = {
        firstname: allUsers[i].firstname,
        lastname: allUsers[i].lastname,
      };
      localStorage.setItem("currentuser", JSON.stringify(currentUser));
      window.location.href = "pages/home.html";
      return;
    }
  }
  errorMsg();
}


function errorMsg() {
  let error = document.getElementById("error-message");
  let name1 = document.getElementById("firstname").value;
  let name2 = document.getElementById("firstname").value;
  let pass = document.getElementById("password").value;
  if (name1 == " " || name2 == "") {
    error.innerHTML = "Invalid Username";
  }
  else if (pass == "") {
    error.innerHTML = "Invalid Password";
  } else {
    error.innerHTML = "Incorrect Username or Password";
  }
}

function nameDisplay() {
  if (localStorage.getItem("currentuser")) {
    var userName = JSON.parse(localStorage.getItem("currentuser")).firstname;
    document.getElementById("name-display").innerHTML = "Hi, " + userName;
  }
}

nameDisplay();

document.querySelector("#logout-button").addEventListener("click", function () {
  localStorage.removeItem("currentuser");
  window.location.href = "../index.html";
});
