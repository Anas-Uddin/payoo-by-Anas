document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = document.getElementById("input-add-money").value;
    const pinNumber = document.getElementById("input-pin-number").value;
    if (pinNumber === "1209") {
      const bal = document.getElementById("balance").innerText;
      const newBal = parseFloat(bal) + parseFloat(addMoney);
      //   console.log(newBal);
      document.getElementById("balance").innerText = newBal;
    } else {
      alert("Failed to Add money");
    }
  });
