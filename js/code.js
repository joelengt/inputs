console.log("ds");
var SelectColor = document.querySelector("#SelectColor")
var btnShowColor = document.querySelector("#btnShowColor")

var SelectDate1 = document.querySelector("#SelectDate1");
var SelectDate2 = document.querySelector("#SelectDate2");
var Valuerange = document.querySelector("#Valuerange");

btnShowColor.addEventListener("click", MostrarColor)

var div = document.createElement("div");

function MostrarColor() {
	div.style.width = "100px";
	div.style.height = "50px";
	div.style.margin = "0 auto";
	div.style.background = SelectColor.value;
	$("body").insertBefore(div, $(".box"));
	console.log(SelectColor.value);
	console.log(SelectDate1.value);
	console.log(SelectDate2.value);
	console.log(Valuerange.value);

}


function $ (argument) {
	return document.querySelector(argument)
}