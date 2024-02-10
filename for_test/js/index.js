function myfirstFunction() {
    document.getElementById("auujee").innerHTML = "Paragraph changed.";
}

function mathFunction() {
    var x = 5;
    var y = 6;
    var z = x + y;
    document.getElementById("math").innerHTML = z;
}

let a, b, c;
a = 5; b = 6; c = a + b;
document.getElementById("math2").innerHTML = c;


document.getElementById("car").innerHTML = "Class car";
const car = {type:"Fiat", model:"500", color:"white"};
function carFunctiontype() {
    document.getElementById("c").innerHTML = car.type;
}
function carFunctionmodel() {
    document.getElementById("c").innerHTML = car.model;
}
function carFunctioncolor() {
    document.getElementById("c").innerHTML = car.color;
}

function math3(a,b){
    return a+b * a;
}

document.getElementById("math3").innerHTML = math3(5,6);