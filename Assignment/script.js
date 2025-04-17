
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.panel');

    function showPanel(index) {
      tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
        panels[i].classList.toggle('active', i === index);
      });
    }

    function submitBtn() {
   
      let a = parseFloat(document.getElementById("demo").value);
      let b = parseFloat(prompt("enter you second number"))
      let d = 200;
      let c = a + b +d;
      alert("The result is: " + c);
      document.getElementById("result").innerHTML = c;
     
    }