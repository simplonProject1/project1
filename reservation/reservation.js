function toChoose (event) {

	event.preventDefault();

	document.getElementById("first").style.display = "none";
	document.getElementById("second").style.display = "block";

	var startingDate = document.forms['firstForm']['startDate'].value;
	var tagToAdd1 = document.createElement("span");
	var contentToAdd1 = document.createTextNode(startingDate);
	tagToAdd1.appendChild(contentToAdd1);
	var element = document.getElementById("addStartDate");
	element.appendChild(tagToAdd1);

	var endingDate = document.forms['firstForm']['endDate'].value;
	var tagToAdd2 = document.createElement("span");
	var contentToAdd2 = document.createTextNode(endingDate);
	tagToAdd2.appendChild(contentToAdd2);
	var element = document.getElementById("addEndDate");
	element.appendChild(tagToAdd2);

	var destination = document.forms['firstForm']['destination'].value;
	var tagToAdd3 = document.createElement("span");
	var contentToAdd3 = document.createTextNode(destination);
	tagToAdd3.appendChild(contentToAdd3);
	var element = document.getElementById("addDestination");
	element.appendChild(tagToAdd3);
}

function toReserve (event) {

	event.preventDefault();

	document.getElementById("second").style.display = "none";
	document.getElementById("third").style.display = "block";
}

function toConfirm (event) {
	
	event.preventDefault();

	document.getElementById("third").style.display = "none";
	document.getElementById("fourth").style.display = "block";

	var name = document.forms['thirdForm']['firstname'].value;
	var tagToAdd4 = document.createElement("span");
	var contentToAdd4 = document.createTextNode(name);
	tagToAdd4.appendChild(contentToAdd4);
	var element = document.getElementById("addName");
	element.appendChild(tagToAdd4);

	var email = document.forms['thirdForm']['email'].value;
	var tagToAdd5 = document.createElement("span");
	var contentToAdd5 = document.createTextNode(email);
	tagToAdd5.appendChild(contentToAdd5);
	var element = document.getElementById("addEmail");
	element.appendChild(tagToAdd5);
}

/* po kliknięciu w guzik niech się wyświetla przez chwilę: przetwarzam (tak jak w dodaj linka) i po chwili niech się wyświetla następna część 
moment.js - biblioteka do javascripta
jest taki format daty w ms 1970, trzeba by było szczytać odjąć i przeliczyć na dni
*/
/* zrobić jakąś randomową cenę */