var x = document.getElementById("slide-in-blurred-bottom");
var y = document.getElementById("crazy");
var a = document.getElementById("ghostBackground");
var b = document.getElementById("scream");

function change () {
    if (x.getAttribute('src') === "245787032022212.png") {
        Image.src = "7fe4622378320f5bd8d594facffc6b58.gif";
        x.style.visibility = "hidden";
        y.style.visibility = "visible";
        a.style.visibility = "hidden";
    } else {
        Image.src = "24578703202221.png";
        x.style.visibility = "visible";
        y.style.visibility = "hidden";
        a.style.visibility = "visible";
    
    } 
}    




    
    