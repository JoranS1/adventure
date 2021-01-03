var gameContainer = document.getElementById("game-container");
var title = document.getElementById("title");
var description = document.getElementById("description");
var gameButtons = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var picture = document.getElementById("picture");
var kleding = false;
var sleutel = false;
title.innerHTML = "De vage tijdmachine deel 2";
description.innerHTML ="Dit is een point and click adventure spel klik op de buttons en zie wat er gebeurt"; 
picture.src = "layton.jpg";
button1.style.display = "none";
button3.style.display = "none";
button2.innerHTML = "KLIK HIER OM HET SPEL TE STARTEN";
button2.removeEventListener("click",pick);
button2.removeEventListener("click",pakOp);
button2.addEventListener("click",start);
		button1.removeEventListener("click",function(){
			alert("Je hebt geen kleding om aan te doen");
		});
		button2.removeEventListener("click",function(){
		alert("De deur is dicht je hebt een sleutel nodig om de deur open te maken");

	});
	

function start(){
	button3.removeEventListener("click",Wasted);
	
	picture.src ="tijdmachine.jpg";
	picture.style.marginBottom = "80px"
	button2.style.display = "none";
	button1.style.display = "inline-block";
	button3.style.display = "inline-block";
	description.innerHTML = "Kies hier je tijd."
	title.innerHTML = "De tijden";
	button1.innerHTML ="KLIK HIER OM NAAR DE ROMEINEN TE GAAN";
	button3.innerHTML ="KLIK HIER OM NAAR DE GRIEKEN TE GAAN";
	console.log("start");
	button1.addEventListener("click",romeinStart);
	button3.addEventListener("click",griekStart)

}

function romeinStart(){
	button1.removeEventListener("click",romeinStart);
	button2.removeEventListener("click",start);
	
	picture.src = "romeinsestraat.jpg";
	title.innerHTML = "De aankomst in de Romeinse tijd";
	description.innerHTML = "Na een reis van 10 minuten kom je aan in een typische romeinse straat je ziet trouwens een setje kleding liggen(was helaas geen foto van want je hebt per ongeluk je fototoestel thuis laten liggen) en 2 wegen de ene zit VOL met wachters en de andere leidt naar een steeg welke weg pak je? "
	button2.style.display = "inline-block";
	button1.innerHTML = "Ga naar weg nummer 1";
	button2.innerHTML = "Pak de kleding";
	button3.innerHTML = "Ga naar weg nummer 2";
	console.log("staart");
	button1.addEventListener("click",Steeg);
	button2.addEventListener("click",pakOp);
	button3.addEventListener("click",Wasted);
}

function pakOp(){
	kleding = true;
	button2.style.display = "none";
	alert("Romeinse kleding is toegevoegd aan je inventaris");
}

function Wasted(){
	button2.removeEventListener("click",pakOp);
	button1.style.display = "none";
	button3.style.display = "none";
	kleding = false;
	sleutel = false;
	button2.style.display = "none";
	gameContainer.style.backgroundColor="red"
	picture.src = "wasted.jpg";
	title.innerHTML = "WASTED";
	description.innerHTML = "WASTED GAME OVER";

}

function Steeg(){
	button1.removeEventListener("click",Steeg);
	button3.removeEventListener("click",Wasted);
	button1.style.display ="inline-block";
	button3.style.display = "inline-block";
	button2.style.display = "none";
	picture.src = "steeg.jpg";
	button1.innerHTML ="Kleding aantrekken";
	button3.innerHTML ="Bushcampen";
	title.innerHTML = "Vluchten";
	description.innerHTML = "Je moet vluchten want er komen wachters jou kant op wat ga je doen? jezelf vermommen met je kledingset (als je die hebt) of verstoppen in de bosjes?";
	if(kleding ==  false){
		button1.addEventListener("click",function(){
			alert("Je hebt geen kleding om aan te doen");
		});
	}
	else if(kleding == true){
		button1.addEventListener("click",colleseum);
		kleding = false;
	}
	button3.addEventListener("click",Wasted);
}
function colleseum(){
	button2.removeEventListener("click",pakOp);
	button1.removeEventListener("click",colleseum);
	button3.removeEventListener("click",Wasted);
	picture.src = "colosseum.jpg";
	button2.style.display = "inline-block";
	title.innerHTML ="Voor het colosseum";
	description.innerHTML = "Je komt voor het colleseum en er staat een wachter voor de ingang die toevallig iedereen herkent. Je kan het erop gokken dat hij je herkent voor iemand anders,naar binnen sneaken via een persoon of via een zijingang naar binnen sluipen?";
	button1.innerHTML = "Naar de wachter toe lopen";
	button2.innerHTML = "Via een ander persoon naar binnen";
	button3.innerHTML ="Via een zijingang";
	button1.addEventListener("click",binnen);
	button2.addEventListener("click",Wasted);
	button3.addEventListener("click",binnen2);
}
function binnen(){
	button2.removeEventListener("click",Wasted);
	button1.style.display = "none";
	button3.style.display = "none";
	title.innerHTML = "De leeuwenshow";
	description.innerHTML ="Je wordt tot je grote verbazing gewoon binnengelaten. Je kijkt naar de leeuwenshow in het colosseum jij vond het een adembemende show";
	button2.innerHTML = "VERDER";
	picture.src = "binnen.jpg";
	button2.addEventListener("click",einde);
}
function binnen2(){
	button1.removeEventListener("click",binnen)
	button2.removeEventListener("click",Wasted);
	button2.removeEventListener("click",pick);
	button1.style.display = "inline-block";
	button2.style.display = "inline-block";
	button3.style.display ="none";
	picture.src ="binnen2.jpg"
	title.innerHTML = "Illegaal binnen";
	description.innerHTML = "Je zit maar het zit je toch niet lekker dat iets strafbaars doet wat doe aangeven bij wachters of blijven zitten?";
	button1.innerHTML = "Aangeven";
	button2.innerHTML = "Blijven zitten";
	button1.addEventListener("click",Wasted);
	button2.addEventListener("click",einde)
}
function einde(){
	picture.src="einde.jpg";
	title.innerHTML="EINDE";
	description.innerHTML="JE HEBT DE GAME UITGESPEELD";
	button1.style.display="none";
	button2.style.display="none";
	button3.style.display="none";
}
function griekStart(){
	button1.removeEventListener("click",romeinStart);
	button2.removeEventListener("click",start);
	button3.removeEventListener("click",griekStart);
	picture.src = "grieksestraat.jpg";
	button1.innerHTML = "Naar de haven";
	button2.innerHTML ="Pak de sleutel";
	button3.innerHTML ="Naar het steegje";
	button2.style.display ="inline-block";
	button1.addEventListener("click",haven);
	button2.addEventListener("click",pick);
	button3.addEventListener("click",Wasted);
	title.innerHTML ="Aankomst in het oude Griekenland";
	description.innerHTML = "Na een reis van 10 minuten kom je aan in het oude Griekenland er ligt een roestige sleutel van een huis of iets wat erop lijkt en 2 wegen de ene leidt naar een doodlopend steeg waar je direct doodgaat door criminelen de andere leidt naar de haven";
	
}
function pick(){
	alert("Je hebt de sleutel opgepakt");
	sleutel=true;
	button2.style.display ="none";
}
function haven(){
	button1.removeEventListener("click",haven);
	button3.removeEventListener("click",Wasted)
	picture.src = "haven.jpg";
	button2.style.display ="none"
	title.innerHTML = "In de haven";
	description.innerHTML = "Je komt aan in de prachtige haven van het oude Athene maar je wilt vaart maken want je ziet een heel mooi huis staan daar wil je een kijkje nemen maar je wilt ook eventjes aan de waterkant zitten wat ga je doen?";
	button1.innerHTML = "Naar het huis";
	button3.innerHTML = "Aan de waterkant relaxen";
	button1.addEventListener("click",huis);
	button3.addEventListener("click",Wasted);
}
function huis(){
	button2.removeEventListener("click",pick);
	button2.style.display = "inline-block";
	button1.style.display = "none";
	button3.style.display = "none";
	button2.innerHTML = "Deur openmaken";
	picture.src = "huis.jpg";
	title.innerHTML = "Voor het huis";
	description.innerHTML = "Je staat voor het schitterende huis (mooi he?) je probeert de deur open te maken deur is vrij stevig dus je komt er met GEEN mogelijkheid doorheen dus je kan alleen met een sleutel naar binnen";
	if(sleutel == true){
	button2.addEventListener("click",inside);
	sleutel = false;
}
	else if(sleutel == false){
		button2.addEventListener("click",function(){
		alert("De deur is dicht je hebt een sleutel nodig om de deur open te maken");

	})}
}
function inside(){
	button2.removeEventListener("click",inside);
	button2.style.display="inline-block";
	title.innerHTML = "Binnen in het huis";
	description.innerHTML = "De sleutel past op de deur alleen als je hem eruit haalt brak hij in 4 stukken dus daar heb je niks meer aan. Binnen in het huis is het intrieur net zo adembenemend als het huis zelf.";
	button2.innerHTML = "Iets lezen tot je naar huis wordt geteloporteerd";
	picture.src ="inside.jpg";
	button2.addEventListener("click",einde);
}

