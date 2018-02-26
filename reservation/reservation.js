function iChose (event) {

	event.preventDefault();

	document.getElementById("first").style.display = "none";
	document.getElementById("second").style.display = "block";

	var startingDate = document.forms['firstForm']['startDate'].value;
	var para1 = document.createElement("span");
	var node1 = document.createTextNode(startingDate);
	para1.appendChild(node1);
	var element = document.getElementById("addStartDate");
	element.appendChild(para1);

	var endingDate = document.forms['firstForm']['endDate'].value;
	var para2 = document.createElement("span");
	var node2 = document.createTextNode(endingDate);
	para2.appendChild(node2);
	var element = document.getElementById("addEndDate");
	element.appendChild(para2);

	var destination = document.forms['firstForm']['destination'].value;
	var para3 = document.createElement("span");
	var node3 = document.createTextNode(destination);
	para3.appendChild(node3);
	var element = document.getElementById("addDestination");
	element.appendChild(para3);
}

function iWant (event) {

	event.preventDefault();

	document.getElementById("second").style.display = "none";
	document.getElementById("third").style.display = "block";
}

function iConfirm (event) {
	
	event.preventDefault();

	document.getElementById("third").style.display = "none";
	document.getElementById("fourth").style.display = "block";

	var name = document.forms['thirdForm']['firstname'].value;
	var para4 = document.createElement("span");
	var node4 = document.createTextNode(name);
	para4.appendChild(node4);
	var element = document.getElementById("addName");
	element.appendChild(para4);

	var email = document.forms['thirdForm']['email'].value;
	var para5 = document.createElement("span");
	var node5 = document.createTextNode(email);
	para5.appendChild(node5);
	var element = document.getElementById("addEmail");
	element.appendChild(para5);
}

/* po kliknięciu w guzik niech się wyświetla przez chwilę: przetwarzam (tak jak w dodaj linka) i po chwili niech się wyświetla następna część 
moment.js - biblioteka do javascripta
jest taki format daty w ms 1970, trzeba by było szczytać odjąć i przeliczyć na dni
*/