function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function display(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    var result = document.getElementById("result").value;
    var answer = eval(result);
    document.getElementById("result").value = answer;
  }
  