var clear = document.getElementById("c");
clear.onclick = function() {

    document.getElementById("textarea").value = "";
};

function anzeigen(wert) {
    var display = document.getElementById("textarea").value + wert;
    document.getElementById("textarea").value = display;
};

function rechnung() {
    var ergebnis = eval(document.getElementById("textarea").value);
    document.getElementById("textarea").value = ergebnis;
};


function leuchten(x) {
    var elemente = document.getElementById("rahmen");
    var button = elemente.getElementsByClassName("buttonAnzeige");
    button[x].style.backgroundColor = "#c0c0c0";
    button[x].style.borderStyle = "outset";
    button[x].onmouseout = function() {
        button[x].style.backgroundColor = "buttonface";
        button[x].style.borderStyle = "outset";
    }

}