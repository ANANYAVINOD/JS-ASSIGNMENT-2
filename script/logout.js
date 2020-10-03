
if (localStorage.getItem("currentuser")) {
    let button = document.createElement("button");
    button.setAttribute("id", "logout-button");
    addedButton = document.getElementById("logout").appendChild(button);
    addedButton.textContent = "Logout";
  
    var userName = JSON.parse(localStorage.getItem("currentuser")).firstname;
    document.getElementById("name-display").textContent = "Hi, " + userName;
  }
  
  document.querySelector("#logout-button").addEventListener("click", function () {
    localStorage.removeItem("currentuser");
    window.location.href = "/login.html";
  });
  
  
  
  