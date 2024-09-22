document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    if (phoneNumber === "01650184648" && pinNumber === "1209") {
      console.log("you are logged in");
      window.location.href = "homepage.html";
    } else {
      alert("Wrong credentials");
    }
  });
