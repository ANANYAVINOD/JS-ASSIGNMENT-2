var usersJson = [];
document.querySelector("#submit-button").addEventListener("click", function () {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let dob = document.getElementById("DoB").value;
  let pass = document.getElementById("password").value;
  let confirmPass = document.getElementById("confirmPassword").value;
  let checkbox = document.getElementById("tAndC").checked;

  clearMsg();
  function validate() {
    if (fname.length == 0) {
      msg = "First name field is required";
      id = "error-fname";
      errorMsg();
    } else {
      if (fname.length <= 2) {
        msg = "First name is invalid.";
        id = "error-fname";
        errorMsg();
      } else {
      }
    }

    if (lname.length == 0) {
      msg = "Last name field is required";
      id = "error-lname";
      errorMsg();
    } else {
    }

    if (!dob) {
      msg = "Select date of birth";
      id = "error-dob";
      errorMsg();
    } else {
    }

    if (pass.length == 0) {
      msg = "Password is required";
      id = "error-pass";
      errorMsg();
    } else {
      if (pass.length <= 8) {
        msg = "Password requires at least 8 characters";
        id = "error-pass";
        errorMsg();
      } else {
      }
    }

    if (confirmPass.length == 0) {
      msg = "Confirm password is required";
      id = "error-confpass";
      errorMsg();
    } else if (pass != confirmPass) {
      msg = "Does not match with password";
      id = "error-confpass";
      errorMsg();
    } else {
    }

    if (!checkbox) {
      msg = "You need to agree T&C";
      id = "error-checkbox";
      errorMsg();
    } else {
      return true;
    }
  }

  function errorMsg() {
    let error = document.getElementById(id);
    error.textContent = msg;
    error.style.color = "#ff0000";
    error.style.fontSize = "10px";
    error.style.marginBottom = "10px";
    error.style.display = "block";
  }

  function clearMsg() {
    errors = document.querySelectorAll(".error-text");
    for (i = 0; i < errors.length; i++) {
      errors[i].style.display = "none";
    }
  }

  function register() {
    var user = {
      firstname: fname,
      lastname: lname,
      password: pass,
      dob: dob
    };
    usersJson.push(user);
    var userDetails = JSON.stringify(usersJson);
    localStorage.setItem("users", userDetails);
    console.log("registered");
  }

  if (validate()) {
    register();
    window.location.replace("index.html");    
  }
});


