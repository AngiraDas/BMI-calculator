function calcBMI() {
    var name = document.getElementById("name").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = (weight / (height*height)) *10000;

    console.log(name);
    console.log(weight);
    console.log(height);

    var health = bmi;
    if (health >= 25) {
	document.getElementById("health").innerHTML = "You are overweight";
  	document.getElementById("health").style.color = "red";
    } else if (health < 18.5) {
	document.getElementById("health").innerHTML = "You are underweight";
  document.getElementById("health").style.color = "yellow";
    } else if (health < 25) {
	document.getElementById("health").innerHTML = "You are healthy";
  document.getElementById("health").style.color = "green";
    }

    document.getElementById("bmi").innerHTML = bmi;
}
