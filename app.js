var choice = 0;
var but = document.querySelector(".btn");
but.addEventListener("click",run);
function choice1() {
  console.log("clicked on metric");
  document.querySelector(".cm").innerHTML = "cm";
  document.querySelector(".kg").innerHTML = "kg";
  choice = 0;
  console.log("choice is",choice);
  // run1();
}
function choice2() {
  console.log("clicked on Imperial");
  document.querySelector(".cm").innerText = "inch";
  document.querySelector(".kg").innerText = "pound";
  choice = 1;
  console.log("choice is",choice);
  // run2();
}
function run(event) {
  event.preventDefault();
  if(choice === 0){
    var height = document.querySelector(".height");
    var heightInM = height.value / 100;
    var weight = document.querySelector(".weight");
    console.log(height.value, weight.value);
    var bmi = weight.value / (heightInM * heightInM);
    console.log("BMI is:", bmi);
    change(bmi);
    // document.querySelector(".output").innerHTML = "Your BMI is " + bmi.toFixed(1);
  }
  else if(choice === 1){
    var height = document.querySelector(".height");
    var weight = document.querySelector(".weight");
    console.log(height.value, weight.value);
    var bmi = 703 * (weight.value / (height.value * height.value));
    console.log("BMI is:", bmi);
    document.querySelector(".output").innerHTML =  "Your BMI is " +bmi.toFixed(1);
    change(bmi);
  }
}
function change(out){
  if(out < 18.5 ){
    document.querySelector(".output").innerHTML = "Your BMI is "+out.toFixed(1)+" which says that you are Underweight";
  }
  else if(out >= 18.5 && out <=24.9){
    document.querySelector(".output").innerHTML = "Your BMI is "+out.toFixed(1)+" which says that you are Normal";
  }
  else if(out>=25 && out <=29.9){
    document.querySelector(".output").innerHTML = "Your BMI is "+out.toFixed(1)+" which says that you are Overweight";
  }
  else if(out >= 30){
    document.querySelector(".output").innerHTML = "Your BMI is "+out.toFixed(1)+" which says that you are Obese";
  }
}