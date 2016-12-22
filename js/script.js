var eins_value = document.getElementById("1").value;
var eins = document.getElementById("1");
var p = document.getElementById("p");
var clear = document.getElementById("c");
var zwei_value = document.getElementById("2").value;
var zwei = document.getElementById("2");
var plus_value = document.getElementById("+").value;
var plus = document.getElementById("+");
var gleich_value = document.getElementById("=").value;
var gleich = document.getElementById("=");
var speicher = [];



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