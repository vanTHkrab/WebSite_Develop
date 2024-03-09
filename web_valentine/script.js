
document.getElementById("head").innerHTML = "Happy Valentine's Day!";
document.getElementById("head3").innerHTML = "";

document.getElementById("text_js1").innerHTML = "Yes!";
document.getElementById("text_js2").innerHTML = "NO!";

let n = 0;

function NotWant() {
    n++;
    switch (n) {
        case 1:
            document.getElementById("text_js2").innerHTML = "Are you sure?";
            // document.getElementById("image").src = "./img/Honkai.jpg";
            break;
        case 2:
            document.getElementById("text_js2").innerHTML = "Really?";
            break;
        case 3:
            document.getElementById("text_js2").innerHTML = "Please...";
            break;
        case 4:
            document.getElementById("text_js2").innerHTML = "Can you give me a chance?";
            break;
        case 5:
            document.getElementById("text_js2").innerHTML = "Please... ";
            break;
    }
}

function Want() {

    document.getElementById("").innerHTML = "I love you too!";
}
