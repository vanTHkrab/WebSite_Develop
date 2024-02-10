let n = 0;

function auujeefunction(){
    if (n == 0){
        document.getElementById("auu1_p1").innerHTML = "ไอ้อู๋จี้เอ้ย";
        n = 1;
    }
        else {
        document.getElementById("auu1_p1").innerHTML = "";
        n = 0;
    }
    console.log("auujeefunction: ", n);
}

function imgitsuki(){
    document.getElementById("imgitsuki").src = "img/itsuki.jpg";
}

