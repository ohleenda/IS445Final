function evenNum() {
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
  
    if (n1 <= 2 || n1 >= 100) {
      console.log(parseInt(n1, 10));
      document.getElementById("msg").innerHTML +=
        "Number 1 input" + n1 + " is not a valid number.";
      document.getElementById("result").innerHTML = "";
    }
    if (n2 <= 2 || n2 >= 100) {
      document.getElementById("msg").innerHTML +=
        "Number 1 input" + n2 + " is not a valid number.";
      document.getElementById("result").innerHTML = "";
    } else if (n1 >= 2 && n1 <= 100 && n2 >= 2 && n2 <= 100) {
      calculateEvenNum(n1, n2);
    }
  }

  function calculateEvenNum(firstNum, secondNum) {
    var eNumArray = [];
    var sNum = 0;
    var bNum = 0;
  
    if (firstNum > secondNum) {
      sNum = secondNum;
      bNum = firstNum;
    } else if (firstNum < secondNum) {
      sNum = firstNum;
      bNum = secondNum;
    }
  
    while (sNum <= bNum) {
      if (isEven(sNum) == true) {
        eNumArray.push(sNum);
        sNum = sNum + 1;
      } else if (isEven(sNum) == false) {
        sNum = sNum + 1;
      }
    }

    console.log(eNumArray);
    document.getElementById("result").innerHTML =
      "There are " + eNumArray.length + " even numbers:";
    document.getElementById("msg").innerHTML = eNumArray;
  }

  function isEven(num) {
    res = true;
    for (var i = num; i <= num + 1; i++) {
      if (num % 2 == 0) {
        res = true;
      } else {
        res = false;
      }
      return res;
    }
  }