var x = document.getElementById("slide-in-blurred-bottom");
var y = document.getElementById("crazy");
var a = document.getElementById("ghostBackground");
var b = document.getElementById("scream");
var c = document.getElementById("sound");

function change () {
    x.style.visibility = "hidden";
    y.style.visibility = "visible";
    a.style.visibility = "hidden";
    c.autoplay = false;
    b.autoplay = true;
    
} 

function changeBack() {
    x.style.visibility = "visible";
    y.style.visibility = "hidden";
    a.style.visibility = "visible";
    c.autoplay = true;
    b.autoplay = false;
}    
    




    
    