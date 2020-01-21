(function () {
  function isPrime(num) {
    if (typeof num !== "number" || isNaN(num)) throw "Must provide a number";
    if (num < 2) return false;
    let prime = true;
    for (let i = 2; i < parseInt(num ** 0.5) + 1; i++) {
      if (num % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }

  const check = document.getElementById("check-prime");

  if (check) {
    const number = document.getElementById("number");
    const ol = document.getElementById("attempts");
    check.addEventListener("submit", event => {
      event.preventDefault();
      try {
        const numberValue = number.value;
        const parsedNumberValue = parseInt(numberValue);
        const prime = isPrime(parsedNumberValue);
        const li = document.createElement("li");
        if (prime) {
          li.appendChild(document.createTextNode(`${parsedNumberValue} is prime`));
          li.setAttribute("class", "is-prime");
        }
        else {
          li.appendChild(document.createTextNode(`${parsedNumberValue} is not prime`));
          li.setAttribute("class", "not-prime");
        }
        ol.appendChild(li);
        number.value = "";
      } catch (e) {
        const message = typeof e === "string" ? e : e.message;
        alert(`${message}`);
      }
    });
  }
})();