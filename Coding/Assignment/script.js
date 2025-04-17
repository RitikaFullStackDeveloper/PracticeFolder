function showPanel(index) {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");

  tabs.forEach((tab) => tab.classList.remove("active"));
  panels.forEach((panel) => panel.classList.remove("active"));

  tabs[index].classList.add("active");
  panels[index].classList.add("active");
}

function submitBtn() {
  let a = parseFloat(document.getElementById("demo").value);
  let b = parseFloat(prompt("Enter your second number", 200));
  let c = a + b;
  alert("The result is: " + c);
  document.getElementById("result").innerHTML = c;
}