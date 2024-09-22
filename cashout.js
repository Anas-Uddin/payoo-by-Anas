document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = document.getElementById("input-cash-out").value;
    const pinNumber = document.getElementById(
      "input-cash-out-pin-number"
    ).value;
    if (pinNumber === "1209") {
      const bal = document.getElementById("balance").innerText;
      const newBalance = parseFloat(bal) - parseFloat(cashOut);
      document.getElementById("balance").innerText = newBalance;
    } else {
      alert("wrong credentials.");
    }
  });
