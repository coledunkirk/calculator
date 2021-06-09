    const clear = document.querySelector("#clear");
    const minus = document.querySelector("#subtract");
    const numbers = Array.from(document.querySelectorAll(".number"));
    const operators = Array.from(document.querySelectorAll(".operator"));
    let total = "";
    let firstNumber = "";
    let secondNumber;
    function rounded(x) {
      return parseFloat(Number.parseFloat(x).toFixed(10));
    }
    function keyFirstNumber(e) {
      const numberKey = document.querySelector(`.number[data-key="${e.key}"]`);
      const operatorKey = document.querySelector(`.operator[data-key="${e.key}"]`);
      const clearKey = document.querySelector(`.clear[data-key="${e.key}"]`);
      if (e.key === "Enter") {
        return operateKey(document.querySelector("#equals"));
      }
      if (numberKey) {
        return getFirstNumberKey(numberKey);
      }
      if (operatorKey) {
        return operateKey(operatorKey);
      }
      if (clearKey) {
        return clearCalc();
      }
      else {
        return;
      }
    }
    function keyAdd(e) {
      const numberKey = document.querySelector(`.number[data-key="${e.key}"]`);
      const operatorKey = document.querySelector(`.operator[data-key="${e.key}"]`);
      const clearKey = document.querySelector(`.clear[data-key="${e.key}"]`);
      if (numberKey) {
        return addKey(numberKey);
      }
      if (operatorKey) {
        return operateKey(operatorKey);
      }
      if (clearKey) {
        return clearCalc();
      }
      else {
        return;
      }
    }
    function keySubtract(e) {
      const numberKey = document.querySelector(`.number[data-key="${e.key}"]`);
      const operatorKey = document.querySelector(`.operator[data-key="${e.key}"]`);
      const clearKey = document.querySelector(`.clear[data-key="${e.key}"]`);
      if (numberKey) {
        return subtractKey(numberKey);
      }
      if (operatorKey) {
        return operateKey(operatorKey);
      }
      if (clearKey) {
        return clearCalc();
      }
      else {
        return;
      }
    }
    function keyMultiply(e) {
      const numberKey = document.querySelector(`.number[data-key="${e.key}"]`);
      const operatorKey = document.querySelector(`.operator[data-key="${e.key}"]`);
      const clearKey = document.querySelector(`.clear[data-key="${e.key}"]`);
      if (numberKey) {
        return multiplyKey(numberKey);
      }
      if (operatorKey) {
        return operateKey(operatorKey);
      }
      if (clearKey) {
        return clearCalc();
      }
      else {
        return;
      }
    }
    function keyDivide(e) {
      const numberKey = document.querySelector(`.number[data-key="${e.key}"]`);
      const operatorKey = document.querySelector(`.operator[data-key="${e.key}"]`);
      const clearKey = document.querySelector(`.clear[data-key="${e.key}"]`);
      if (numberKey) {
        return divideKey(numberKey);
      }
      if (operatorKey) {
        return operateKey(operatorKey);
      }
      if (clearKey) {
        return clearCalc();
      }
      else {
        return;
      }
    }
    function getFirstNumberKey(e) {
      let value = e.id;
      if (firstNumber === "") {
        total = "";
      }
      firstNumber += 1;
      if (value === "back") {
        total = total.toString().slice(0, -1);
        document.querySelector("#display").textContent = total;
        if (total === "") {
          minus.removeEventListener("click", operate);
          minus.addEventListener("click", getFirstNumber);
          minus.classList.remove("operator");
          minus.classList.add("number");
        }
        return;
      }
      if (value === "decimal" && total.toString().includes(".")) return;
      switch (value) {
        case "zero":
         total += "0";
         break;
        case "one":
         total += "1";
         break;
        case "two":
         total += "2";
         break;
        case "three":
         total += "3";
         break;
        case "four":
         total += "4";
         break;
        case "five":
         total += "5";
         break;
        case "six":
         total += "6";
         break;
        case "seven":
         total += "7";
         break;
        case "eight":
         total += "8";
         break;
        case "nine":
         total += "9";
         break;
        case "decimal":
          total += ".";
          break;
        case "subtract":
          total += "-";
          break;
      }
      document.querySelector("#display").textContent = total;
      minus.removeEventListener("click", getFirstNumber);
      minus.addEventListener("click", operate);
      minus.classList.remove("number");
      minus.classList.add("operator");
    }

    function addKey(e) {
      let value = e.id;
      if (value === "back") {
        if (secondNumber === "") {
          total = rounded(firstNumber);
          numbers.forEach(number => {
              number.removeEventListener("click", add);
              number.addEventListener("click", getFirstNumber);
            });  
          document.removeEventListener("keydown", keyAdd);
          document.addEventListener("keydown", keyFirstNumber);
          minus.removeEventListener("click", getFirstNumber);
          minus.addEventListener("click", operate);
          minus.classList.remove("number");
          minus.classList.add("operator");
          return document.querySelector("#display").textContent = total;
        }
        secondNumber = secondNumber.slice(0, -1);
        document.querySelector("#display").textContent = secondNumber;
        if (secondNumber === "") {
          total = firstNumber;
          minus.removeEventListener("click", operate);
          minus.addEventListener("click", add);
          minus.classList.remove("operator");
          minus.classList.add("number");
          document.querySelector("#display").textContent = "+";
        }
        return;
      }
      if (value === "decimal" && secondNumber.includes(".")) return;
      switch (value) {
        case "zero":
         secondNumber += "0";
         total = +firstNumber + +secondNumber;
         break;
        case "one":
         secondNumber += "1";
         total = +firstNumber + +secondNumber;
         break;
        case "two":
         secondNumber += "2";
         total = +firstNumber + +secondNumber;
         break;
        case "three":
         secondNumber += "3";
         total = +firstNumber + +secondNumber;
         break;
        case "four":
         secondNumber += "4";
         total = +firstNumber + +secondNumber;
         break;
        case "five":
         secondNumber += "5";
         total = +firstNumber + +secondNumber;
         break;
        case "six":
         secondNumber += "6";
         total = +firstNumber + +secondNumber;
         break;
        case "seven":
         secondNumber += "7";
         total = +firstNumber + +secondNumber;
         break;
        case "eight":
         secondNumber += "8";
         total = +firstNumber + +secondNumber;
         break;
        case "nine":
         secondNumber += "9";
         total = +firstNumber + +secondNumber;
         break;
        case "decimal":
          secondNumber += "."
          total = +firstNumber + +secondNumber;
          break;
        case "subtract":
          secondNumber += "-";
          total = +firstNumber + +secondNumber;
          break;
      }
      document.querySelector("#display").textContent = secondNumber;
      minus.removeEventListener("click", add);
      minus.addEventListener("click", operate);
      minus.classList.remove("number");
      minus.classList.add("operator");
    }

    function subtractKey(e) {
      let value = e.id;
      if (value === "back") {
        if (secondNumber === "") {
          total = rounded(firstNumber);
          numbers.forEach(number => {
              number.removeEventListener("click", subtract);
              number.addEventListener("click", getFirstNumber);
            });
          document.removeEventListener("keydown", keySubtract);
          document.addEventListener("keydown", keyFirstNumber);    
          minus.removeEventListener("click", getFirstNumber);
          minus.addEventListener("click", operate);
          minus.classList.remove("number");
          minus.classList.add("operator");
          return document.querySelector("#display").textContent = total;
        }
        secondNumber = secondNumber.slice(0, -1);
        document.querySelector("#display").textContent = secondNumber;
        if (secondNumber === "") {
          total = firstNumber;
          minus.removeEventListener("click", operate);
          minus.addEventListener("click", subtract);
          minus.classList.remove("operator");
          minus.classList.add("number");
          document.querySelector("#display").textContent = "-";
        }
        return;
      }
      if (value === "decimal" && secondNumber.includes(".")) return;
      switch (value) {
        case "zero":
         secondNumber += "0";
         total = firstNumber - secondNumber;
         break;
        case "one":
         secondNumber += "1";
         total = firstNumber - secondNumber;
         break;
        case "two":
         secondNumber += "2";
         total = firstNumber - secondNumber;
         break;
        case "three":
         secondNumber += "3";
         total = firstNumber - secondNumber;
         break;
        case "four":
         secondNumber += "4";
         total = firstNumber - secondNumber;
         break;
        case "five":
         secondNumber += "5";
         total = firstNumber - secondNumber;
         break;
        case "six":
         secondNumber += "6";
         total = firstNumber - secondNumber;
         break;
        case "seven":
         secondNumber += "7";
         total = firstNumber - secondNumber;
         break;
        case "eight":
         secondNumber += "8";
         total = firstNumber - secondNumber;
         break;
        case "nine":
         secondNumber += "9";
         total = firstNumber - secondNumber;
         break;
        case "decimal":
          secondNumber += "."
          total = firstNumber - secondNumber;
          break;
        case "subtract":
          secondNumber += "-";
          total = firstNumber - secondNumber;
          break;
      }
      document.querySelector("#display").textContent = secondNumber;
      minus.removeEventListener("click", subtract);
      minus.addEventListener("click", operate);
      minus.classList.remove("number");
      minus.classList.add("operator");
    }

    function multiplyKey(e) {
      let value = e.id;
      if (value === "back") {
        if (secondNumber === "") {
          total = rounded(firstNumber);
          numbers.forEach(number => {
              number.removeEventListener("click", multiply);
              number.addEventListener("click", getFirstNumber);   
            });   
          document.removeEventListener("keydown", keyMultiply);
          document.addEventListener("keydown", keyFirstNumber);  
          minus.removeEventListener("click", getFirstNumber);
          minus.addEventListener("click", operate);
          minus.classList.remove("number");
          minus.classList.add("operator");
          return document.querySelector("#display").textContent = total;
        }
        secondNumber = secondNumber.slice(0, -1);
        document.querySelector("#display").textContent = secondNumber;
        if (secondNumber === "") {
          total = firstNumber
          minus.removeEventListener("click", operate);
          minus.addEventListener("click", multiply);
          minus.classList.remove("operator");
          minus.classList.add("number");
          document.querySelector("#display").textContent = "*";
        }
        return;
      }
      if (value === "decimal" && secondNumber.includes(".")) return;
      switch (value) {
        case "zero":
         secondNumber += "0";
         total = firstNumber * secondNumber;
         break;
        case "one":
         secondNumber += "1";
         total = firstNumber * secondNumber;
         break;
        case "two":
         secondNumber += "2";
         total = firstNumber * secondNumber;
         break;
        case "three":
         secondNumber += "3";
         total = firstNumber * secondNumber;
         break;
        case "four":
         secondNumber += "4";
         total = firstNumber * secondNumber;
         break;
        case "five":
         secondNumber += "5";
         total = firstNumber * secondNumber;
         break;
        case "six":
         secondNumber += "6";
         total = firstNumber * secondNumber;
         break;
        case "seven":
         secondNumber += "7";
         total = firstNumber * secondNumber;
         break;
        case "eight":
         secondNumber += "8";
         total = firstNumber * secondNumber;
         break;
        case "nine":
         secondNumber += "9";
         total = firstNumber * secondNumber;
         break;
        case "decimal":
          secondNumber += "."
          total = firstNumber * secondNumber;
          break;
        case "subtract":
          secondNumber += "-";
          total = firstNumber * secondNumber;
          break;
      }
      document.querySelector("#display").textContent = secondNumber;
      minus.removeEventListener("click", multiply);
      minus.addEventListener("click", operate);
      minus.classList.remove("number");
      minus.classList.add("operator");
    }

    function divideKey(e) {
      let value = e.id;
      if (value === "back") {
        if (secondNumber === "") {
          total = rounded(firstNumber);
          numbers.forEach(number => {
              number.removeEventListener("click", divide);
              number.addEventListener("click", getFirstNumber);
            });    
          document.removeEventListener("keydown", keyDivide);
          document.addEventListener("keydown", keyFirstNumber);    
          minus.removeEventListener("click", getFirstNumber);
          minus.addEventListener("click", operate);
          minus.classList.remove("number");
          minus.classList.add("operator");
          return document.querySelector("#display").textContent = total;
        }
        secondNumber = secondNumber.slice(0, -1);
        document.querySelector("#display").textContent = secondNumber;
        if (secondNumber === "") {
          total = firstNumber;
          minus.removeEventListener("click", operate);
          minus.addEventListener("click", divide);
          minus.classList.remove("operator");
          minus.classList.add("number");
          document.querySelector("#display").textContent = "/";
        }
        return;
      }
      if (value === "decimal" && secondNumber.includes(".")) return;
      switch (value) {
        case "zero":
         secondNumber += "0";
         if (secondNumber === "0") {
           secondNumber = "";
           return alert("Can't divide by 0!");
         }
         else {
         total = firstNumber / secondNumber;
         }
         break;
        case "one":
         secondNumber += "1";
         total = firstNumber / secondNumber;
         break;
        case "two":
         secondNumber += "2";
         total = firstNumber / secondNumber;
         break;
        case "three":
         secondNumber += "3";
         total = firstNumber / secondNumber;
         break;
        case "four":
         secondNumber += "4";
         total = firstNumber / secondNumber;
         break;
        case "five":
         secondNumber += "5";
         total = firstNumber / secondNumber;
         break;
        case "six":
         secondNumber += "6";
         total = firstNumber / secondNumber;
         break;
        case "seven":
         secondNumber += "7";
         total = firstNumber / secondNumber;
         break;
        case "eight":
         secondNumber += "8";
         total = firstNumber / secondNumber;
         break;
        case "nine":
         secondNumber += "9";
         total = firstNumber / secondNumber;
         break;
        case "decimal":
          secondNumber += "."
          total = firstNumber / secondNumber;
          break;
        case "subtract":
          secondNumber += "-";
          total = firstNumber / secondNumber;
          break;
      }
      document.querySelector("#display").textContent = secondNumber;
      minus.removeEventListener("click", divide);
      minus.addEventListener("click", operate);
      minus.classList.remove("number");
      minus.classList.add("operator");
    }

    function operateKey(e) {
        if (isNaN(total)) return alert("Bad Expression!");
        if (total === "") return;
        numbers.forEach(number => {
          number.removeEventListener("click", getFirstNumber);
          number.removeEventListener("click", add);
          number.removeEventListener("click", subtract);
          number.removeEventListener("click", multiply);
          number.removeEventListener("click", divide);
          number.removeEventListener("click", operate);
        });
        document.removeEventListener("keydown", keyFirstNumber);
        document.removeEventListener("keydown", keyAdd);
        document.removeEventListener("keydown", keySubtract);
        document.removeEventListener("keydown", keyMultiply);
        document.removeEventListener("keydown", keyDivide);
        minus.classList.remove("operator");
        minus.classList.add("number");
        firstNumber = total;
        secondNumber = "";
        let operation = e.id;
        switch (operation) {
          case "add":
            document.querySelector("#display").textContent = "+";
            numbers.forEach(number => {
              number.addEventListener("click", add);
            });
            document.addEventListener("keydown", keyAdd);
            break;
          case "subtract":
            document.querySelector("#display").textContent = "-";
            numbers.forEach(number => {
              number.addEventListener("click", subtract);
            });  
            document.addEventListener("keydown", keySubtract);
            break;       
          case "multiply":
            document.querySelector("#display").textContent = "*";
            numbers.forEach(number => {
              number.addEventListener("click", multiply);
            }); 
            document.addEventListener("keydown", keyMultiply);
            break;   
          case "divide":
            document.querySelector("#display").textContent = "/";
            numbers.forEach(number => {
              number.addEventListener("click", divide);
            });    
            document.addEventListener("keydown", keyDivide);
            break;
          case "equals":
            document.querySelector("#display").textContent = rounded(total);
            minus.addEventListener("click", operate);
            minus.classList.remove("number");
            minus.classList.add("operator");
            firstNumber = "";
            numbers.forEach(number => {
              number.addEventListener("click", getFirstNumber);
            });
            document.addEventListener("keydown", keyFirstNumber);
            break;
        }
      }
    function getFirstNumber(e) {
      let value = e.target.id;
      if (firstNumber === "") {
        total = "";
      }
      firstNumber += 1;
      if (value === "back") {
        total = total.toString().slice(0, -1);
        document.querySelector("#display").textContent = total;
        if (total === "") {
          minus.removeEventListener("click", operate);
          minus.addEventListener("click", getFirstNumber);
          minus.classList.remove("operator");
          minus.classList.add("number");
        }
        return;
      }
      if (value === "decimal" && total.toString().includes(".")) return;
      switch (value) {
        case "zero":
         total += "0";
         break;
        case "one":
         total += "1";
         break;
        case "two":
         total += "2";
         break;
        case "three":
         total += "3";
         break;
        case "four":
         total += "4";
         break;
        case "five":
         total += "5";
         break;
        case "six":
         total += "6";
         break;
        case "seven":
         total += "7";
         break;
        case "eight":
         total += "8";
         break;
        case "nine":
         total += "9";
         break;
        case "decimal":
          total += ".";
          break;
        case "subtract":
          total += "-";
          break;
      }
      document.querySelector("#display").textContent = total;
      minus.removeEventListener("click", getFirstNumber);
      minus.addEventListener("click", operate);
      minus.classList.remove("number");
      minus.classList.add("operator");
    }

    function add(e) {
      let value = e.target.id;
      if (value === "back") {
        if (secondNumber === "") {
          total = rounded(firstNumber);
          numbers.forEach(number => {
              number.removeEventListener("click", add);
              number.addEventListener("click", getFirstNumber);
            });  
          document.removeEventListener("keydown", keyAdd);
          document.addEventListener("keydown", keyFirstNumber);
          minus.removeEventListener("click", getFirstNumber);
          minus.addEventListener("click", operate);
          minus.classList.remove("number");
          minus.classList.add("operator");
          return document.querySelector("#display").textContent = total;
        }
        secondNumber = secondNumber.slice(0, -1);
        document.querySelector("#display").textContent = secondNumber;
        if (secondNumber === "") {
          total = firstNumber;
          minus.removeEventListener("click", operate);
          minus.addEventListener("click", add);
          minus.classList.remove("operator");
          minus.classList.add("number");
          document.querySelector("#display").textContent = "+";
        }
        return;
      }
      if (value === "decimal" && secondNumber.includes(".")) return;
      switch (value) {
        case "zero":
         secondNumber += "0";
         total = +firstNumber + +secondNumber;
         break;
        case "one":
         secondNumber += "1";
         total = +firstNumber + +secondNumber;
         break;
        case "two":
         secondNumber += "2";
         total = +firstNumber + +secondNumber;
         break;
        case "three":
         secondNumber += "3";
         total = +firstNumber + +secondNumber;
         break;
        case "four":
         secondNumber += "4";
         total = +firstNumber + +secondNumber;
         break;
        case "five":
         secondNumber += "5";
         total = +firstNumber + +secondNumber;
         break;
        case "six":
         secondNumber += "6";
         total = +firstNumber + +secondNumber;
         break;
        case "seven":
         secondNumber += "7";
         total = +firstNumber + +secondNumber;
         break;
        case "eight":
         secondNumber += "8";
         total = +firstNumber + +secondNumber;
         break;
        case "nine":
         secondNumber += "9";
         total = +firstNumber + +secondNumber;
         break;
        case "decimal":
          secondNumber += "."
          total = +firstNumber + +secondNumber;
          break;
        case "subtract":
          secondNumber += "-";
          total = +firstNumber + +secondNumber;
          break;
      }
      document.querySelector("#display").textContent = secondNumber;
      minus.removeEventListener("click", add);
      minus.addEventListener("click", operate);
      minus.classList.remove("number");
      minus.classList.add("operator");
    }

    function subtract(e) {
      let value = e.target.id;
      if (value === "back") {
        if (secondNumber === "") {
          total = rounded(firstNumber);
          numbers.forEach(number => {
              number.removeEventListener("click", subtract);
              number.addEventListener("click", getFirstNumber);
            });
          document.removeEventListener("keydown", keySubtract);
          document.addEventListener("keydown", keyFirstNumber);    
          minus.removeEventListener("click", getFirstNumber);
          minus.addEventListener("click", operate);
          minus.classList.remove("number");
          minus.classList.add("operator");
          return document.querySelector("#display").textContent = total;
        }
        secondNumber = secondNumber.slice(0, -1);
        document.querySelector("#display").textContent = secondNumber;
        if (secondNumber === "") {
          total = firstNumber;
          minus.removeEventListener("click", operate);
          minus.addEventListener("click", subtract);
          minus.classList.remove("operator");
          minus.classList.add("number");
          document.querySelector("#display").textContent = "-";
        }
        return;
      }
      if (value === "decimal" && secondNumber.includes(".")) return;
      switch (value) {
        case "zero":
         secondNumber += "0";
         total = firstNumber - secondNumber;
         break;
        case "one":
         secondNumber += "1";
         total = firstNumber - secondNumber;
         break;
        case "two":
         secondNumber += "2";
         total = firstNumber - secondNumber;
         break;
        case "three":
         secondNumber += "3";
         total = firstNumber - secondNumber;
         break;
        case "four":
         secondNumber += "4";
         total = firstNumber - secondNumber;
         break;
        case "five":
         secondNumber += "5";
         total = firstNumber - secondNumber;
         break;
        case "six":
         secondNumber += "6";
         total = firstNumber - secondNumber;
         break;
        case "seven":
         secondNumber += "7";
         total = firstNumber - secondNumber;
         break;
        case "eight":
         secondNumber += "8";
         total = firstNumber - secondNumber;
         break;
        case "nine":
         secondNumber += "9";
         total = firstNumber - secondNumber;
         break;
        case "decimal":
          secondNumber += "."
          total = firstNumber - secondNumber;
          break;
        case "subtract":
          secondNumber += "-";
          total = firstNumber - secondNumber;
          break;
      }
      document.querySelector("#display").textContent = secondNumber;
      minus.removeEventListener("click", subtract);
      minus.addEventListener("click", operate);
      minus.classList.remove("number");
      minus.classList.add("operator");
    }

    function multiply(e) {
      let value = e.target.id;
      if (value === "back") {
        if (secondNumber === "") {
          total = rounded(firstNumber);
          numbers.forEach(number => {
              number.removeEventListener("click", multiply);
              number.addEventListener("click", getFirstNumber);
              document.removeEventListener("keydown", keyMultiply);
              document.addEventListener("keydown", keyFirstNumber);    
            });    
          minus.removeEventListener("click", getFirstNumber);
          minus.addEventListener("click", operate);
          minus.classList.remove("number");
          minus.classList.add("operator");
          return document.querySelector("#display").textContent = total;
        }
        secondNumber = secondNumber.slice(0, -1);
        document.querySelector("#display").textContent = secondNumber;
        if (secondNumber === "") {
          total = firstNumber
          minus.removeEventListener("click", operate);
          minus.addEventListener("click", multiply);
          minus.classList.remove("operator");
          minus.classList.add("number");
          document.querySelector("#display").textContent = "*";
        }
        return;
      }
      if (value === "decimal" && secondNumber.includes(".")) return;
      switch (value) {
        case "zero":
         secondNumber += "0";
         total = firstNumber * secondNumber;
         break;
        case "one":
         secondNumber += "1";
         total = firstNumber * secondNumber;
         break;
        case "two":
         secondNumber += "2";
         total = firstNumber * secondNumber;
         break;
        case "three":
         secondNumber += "3";
         total = firstNumber * secondNumber;
         break;
        case "four":
         secondNumber += "4";
         total = firstNumber * secondNumber;
         break;
        case "five":
         secondNumber += "5";
         total = firstNumber * secondNumber;
         break;
        case "six":
         secondNumber += "6";
         total = firstNumber * secondNumber;
         break;
        case "seven":
         secondNumber += "7";
         total = firstNumber * secondNumber;
         break;
        case "eight":
         secondNumber += "8";
         total = firstNumber * secondNumber;
         break;
        case "nine":
         secondNumber += "9";
         total = firstNumber * secondNumber;
         break;
        case "decimal":
          secondNumber += "."
          total = firstNumber * secondNumber;
          break;
        case "subtract":
          secondNumber += "-";
          total = firstNumber * secondNumber;
          break;
      }
      document.querySelector("#display").textContent = secondNumber;
      minus.removeEventListener("click", multiply);
      minus.addEventListener("click", operate);
      minus.classList.remove("number");
      minus.classList.add("operator");
    }

    function divide(e) {
      let value = e.target.id;
      if (value === "back") {
        if (secondNumber === "") {
          total = rounded(firstNumber);
          numbers.forEach(number => {
              number.removeEventListener("click", divide);
              number.addEventListener("click", getFirstNumber);
            });    
          document.removeEventListener("keydown", keyDivide);
          document.addEventListener("keydown", keyFirstNumber);    
          minus.removeEventListener("click", getFirstNumber);
          minus.addEventListener("click", operate);
          minus.classList.remove("number");
          minus.classList.add("operator");
          return document.querySelector("#display").textContent = total;
        }
        secondNumber = secondNumber.slice(0, -1);
        document.querySelector("#display").textContent = secondNumber;
        if (secondNumber === "") {
          total = firstNumber;
          minus.removeEventListener("click", operate);
          minus.addEventListener("click", divide);
          minus.classList.remove("operator");
          minus.classList.add("number");
          document.querySelector("#display").textContent = "/";
        }
        return;
      }
      if (value === "decimal" && secondNumber.includes(".")) return;
      switch (value) {
        case "zero":
         secondNumber += "0";
         if (secondNumber === "0") {
           secondNumber = "";
           return alert("Can't divide by 0!");
         }
         else {
         total = firstNumber / secondNumber;
         }
         break;
        case "one":
         secondNumber += "1";
         total = firstNumber / secondNumber;
         break;
        case "two":
         secondNumber += "2";
         total = firstNumber / secondNumber;
         break;
        case "three":
         secondNumber += "3";
         total = firstNumber / secondNumber;
         break;
        case "four":
         secondNumber += "4";
         total = firstNumber / secondNumber;
         break;
        case "five":
         secondNumber += "5";
         total = firstNumber / secondNumber;
         break;
        case "six":
         secondNumber += "6";
         total = firstNumber / secondNumber;
         break;
        case "seven":
         secondNumber += "7";
         total = firstNumber / secondNumber;
         break;
        case "eight":
         secondNumber += "8";
         total = firstNumber / secondNumber;
         break;
        case "nine":
         secondNumber += "9";
         total = firstNumber / secondNumber;
         break;
        case "decimal":
          secondNumber += "."
          total = firstNumber / secondNumber;
          break;
        case "subtract":
          secondNumber += "-";
          total = firstNumber / secondNumber;
          break;
      }
      document.querySelector("#display").textContent = secondNumber;
      minus.removeEventListener("click", divide);
      minus.addEventListener("click", operate);
      minus.classList.remove("number");
      minus.classList.add("operator");
    }

    function operate(e) {
        if (isNaN(total)) return alert("Bad Expression!");
        if (total === "") return;
        numbers.forEach(number => {
          number.removeEventListener("click", getFirstNumber);
          number.removeEventListener("click", add);
          number.removeEventListener("click", subtract);
          number.removeEventListener("click", multiply);
          number.removeEventListener("click", divide);
          number.removeEventListener("click", operate);
        });
        document.removeEventListener("keydown", keyFirstNumber);
        document.removeEventListener("keydown", keyAdd);
        document.removeEventListener("keydown", keySubtract);
        document.removeEventListener("keydown", keyMultiply);
        document.removeEventListener("keydown", keyDivide);
        minus.classList.remove("operator");
        minus.classList.add("number");
        firstNumber = total;
        secondNumber = "";
        let operation = e.target.id;
        switch (operation) {
          case "add":
            document.querySelector("#display").textContent = "+";
            numbers.forEach(number => {
              number.addEventListener("click", add);
            });
            document.addEventListener("keydown", keyAdd);
            break;
          case "subtract":
            document.querySelector("#display").textContent = "-";
            numbers.forEach(number => {
              number.addEventListener("click", subtract);
            });  
            document.addEventListener("keydown", keySubtract);
            break;       
          case "multiply":
            document.querySelector("#display").textContent = "*";
            numbers.forEach(number => {
              number.addEventListener("click", multiply);
            }); 
            document.addEventListener("keydown", keyMultiply);
            break;   
          case "divide":
            document.querySelector("#display").textContent = "/";
            numbers.forEach(number => {
              number.addEventListener("click", divide);
            });    
            document.addEventListener("keydown", keyDivide);
            break;
          case "equals":
            document.querySelector("#display").textContent = rounded(total);
            minus.addEventListener("click", operate);
            minus.classList.remove("number");
            minus.classList.add("operator");
            firstNumber = "";
            numbers.forEach(number => {
              number.addEventListener("click", getFirstNumber);
            });
            document.addEventListener("keydown", keyFirstNumber);
            break;
        }
      }

    function clearCalc() {
      total = "";
      firstNumber = "";
      secondNumber = "";
      numbers.forEach(number => {
        number.addEventListener("click", getFirstNumber);
        number.removeEventListener("click", add);
        number.removeEventListener("click", subtract);
        number.removeEventListener("click", multiply);
        number.removeEventListener("click", divide);
        number.removeEventListener("click", operate);
      });
      document.removeEventListener("keydown", keyAdd);
      document.removeEventListener("keydown", keySubtract);
      document.removeEventListener("keydown", keyMultiply);
      document.removeEventListener("keydown", keyDivide);
      document.addEventListener("keydown", keyFirstNumber);
      minus.classList.remove("operator");
      minus.classList.add("number");
      document.querySelector("#display").textContent = total;
    }

    operators.forEach(operator => {
      operator.addEventListener( "click", operate);
    });

    numbers.forEach(number => {
      number.addEventListener("click", getFirstNumber);
    });
    
    clear.addEventListener("click", clearCalc);
    
    document.addEventListener("keydown", keyFirstNumber)