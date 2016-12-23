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