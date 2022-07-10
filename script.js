var x = document.getElementById("slide-in-blurred-bottom");
var y = document.getElementById("crazy");
var a = document.getElementById("ghostBackground");
var b = document.getElementById("scream");
var c = document.getElementById("sound");
var d = document.getElementById("text1");
var e = document.getElementById("text2");

function change () {
    x.style.visibility = "hidden";
    y.style.visibility = "visible";
    a.style.visibility = "hidden";
    c.pause();
    b.play();
    d.style.visibilty = "hidden";
    e.style.visibility = "";
    
} 

function changeBack() {
    x.style.visibility = "visible";
    y.style.visibility = "hidden";
    a.style.visibility = "visible";
    c.play();
    b.pause();
    d.style.visibilty = "";
    e.style.visibility = "hidden";
} 
    




    
    