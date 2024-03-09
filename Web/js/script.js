const callmebackbtn = document.querySelector('#callmeback-btn');

callmebackbtn.addEventListener("click", function() {
    console.log('Button clicked');
    document.getElementById('text').innerHTML = "";
});

document.querySelector('#callmeback-btn2').addEventListener("click", function() {
    console.log('Button text Clicked');
    document.getElementById('text').innerHTML = "Hello World";
});