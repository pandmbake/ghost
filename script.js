var x = document.getElementById("slide-in-blurred-bottom");
var y = document.getElementById("crazy");
var a = document.getElementById("ghostBackground");
var b = document.getElementById("scream");
var c = document.getElementById("sound");
var d = document.getElementById("text1");
var e = document.getElementById("text2");

function change () {
    x.style.display = "none";
    y.style.display = "block";
    y.style.margin = "8em auto";
    a.style.display = "none";
    c.pause();
    b.play();
    d.style.display = "none";
    e.style.display = "";
    
} 

function changeBack() {
    x.style.display = "";
    y.style.display = "none";
    a.style.display = "";
    a.style.marginTop = "150px"
    c.play();
    b.pause();
    d.style.display = "";
    e.style.display = "none";
} 
    




    
    