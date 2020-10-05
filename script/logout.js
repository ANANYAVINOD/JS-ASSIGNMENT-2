
if (localStorage.getItem("currentuser")) {
    var userName = JSON.parse(localStorage.getItem("currentuser")).firstname;
    document.getElementById("name-display").textContent = "Hi, " + userName;
  }
  
  document.querySelector("#logout-button").addEventListener("click", function () {
    localStorage.removeItem("currentuser");
    window.location.href = "index.html";
  });
  
  
  
  