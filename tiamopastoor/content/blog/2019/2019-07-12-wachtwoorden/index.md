---
title: Wachtwoorden
author: tiamopastoor
date: 2019-07-12T16:00:30+00:00
language: nl
categories:
  - Anecdotes

---
Onlangs probeerde ik in te loggen op mijn bankrekening. Ik heb een stuk of vijf verschillende wachtwoorden die ik her en der gebruik, en een stuk of drie gebruikersnamen, dus meestal probeer ik gewoon alle combinaties totdat eentje werkt.

Maar geen van de combinaties werkte.

"Natuurlijk," dacht ik, "voor zoiets belangrijks als mijn geld heb ik een apart wachtwoord bedacht!"

Maar ja, dat wachtwoord wist ik dus niet meer. Meestal betekent dit simpelweg dat ik één van mijn andere wachtwoorden pak, en er willekeurige tekens achterplak. In plaats van "wachtwoord" krijg je dan "W8woord#!?".

Hopelijk zie je het probleem met deze methode: hoe ga je dit ooit onthouden? Natuurlijk zou ik mijn wachtwoorden ergens kunnen bijhouden, of op een briefje kunnen schrijven, maar dat verpest het hele idee van wachtwoorden. Nee, ze moeten allemaal in mijn hoofd zitten.

Om het nog erger te maken hebben vrijwel alle websites een eigen lijst van belachelijke wachtwoordcriteria.

Je wachtwoord moet minstens de volgende onderdelen bevatten:

  * Een hoofdletter
  * Een kleine letter
  * Een speciaal teken
  * Een cijfer
  * Een Chinees symbool
  * Een toverspreuk uit Harry Potter
  * Een pootafdruk van een kip
  * De naam van je huisdier
  * Je lievelingsfilm
  * Je favoriete docent van de basisschool
  * Je mening over klimaatverandering
  * Een opmerking over dat het deze zomer wel héél warm is in Nederland

Het zal je weinig verbazen dat ik mijn wachtwoord niet kon achterhalen en uiteindelijk per post een nieuw wachtwoord kreeg toegestuurd.

Ik heb hierop maar één ding te zeggen:


> **WAT ZIJN JULLIE AAN HET DOEN!?**

Deze criteria doen niks om wachtwoorden veiliger te maken. Sterker nog, ze maken wachtwoorden _onveiliger_. Een bank zou veel beter moeten weten. Ik zou mezelf nauwelijks een serieus programmeur noemen, en zelfs ik weet beter.

## Een lesje wachtwoorden hacken

Hackers hebben doorgaans drie strategieën voor het kraken van je account:

  * Andere websites kraken waarop je (eventueel) hetzelfde wachtwoord hebt gebruikt. Deze andere websites zijn vaak kleine, onschuldige websites die je makkelijk kunt kraken. Als je daarop een account hebt, en je hebt hetzelfde wachtwoord gebruikt, ben je de pineut.
  * Zoveel mogelijk informatie over jou verzamelen en daarmee je wachtwoord raden. Iets te veel mensen gebruiken hun naam, geboortedatum, huisdier, lievelingsfilm, of iets dergelijks in hun wachtwoord.
  * _Brute force_. Ze proberen simpelweg alle mogelijke wachtwoorden ("combinaties van tekens"), totdat ze de juiste hebben. Dit doen ze natuurlijk niet zelf. Ze hebben een gigantische hoeveelheid computers tot hun beschikking die duizenden keren per seconde proberen in te loggen.

Deze criteria helpen niet tegen strategie 1. De meeste mensen hebben één "raar wachtwoord" die aan de criteria voldoet. Vervolgens gebruiken ze die dus overal, want ze gaan niet meerdere "rare wachtwoorden" kunnen onthouden.

> Ik ben hier zelf slachtoffer van geworden. Mijn alleroudste wachtwoord met cijfers/letters/symbolen was een keer bekend geworden, omdat een of andere website was gekraakt. Ik kreeg hierover netjes een bericht, wat best fijn was. Enkele dagen later kreeg ik een bericht dat er op het emailadres, geassocieerd met dat account, _succesvol was ingelogd door iemand anders_. Het is fijn dat Google verdachte pogingen herkent en tegenhoudt, anders was ik dat emailadres kwijtgeweest.

Strategie 2 staat redelijk los van de criteria, hoewel het ook hierbij een valkuil kan zijn. Als een website vraagt om "één cijfer" in je wachtwoord, wat is het eerste dat mensen doen? Hun geboortedatum, huisnummer, of lievelingsgetal.

Nee, strategie 3 is het meest interessant. Hierbij helpen de criteria de hackers juist enorm.

## Een voorbeeld

Stel iemand heeft een wachtwoord met 6 tekens. Als er geen criteria aan dit wachtwoord vastzitten, kan elk teken dus _alles_ zijn: kleine letter, grote letter, cijfer, symbool. In principe kan je hele gekke dingen intoetsen (de karakterset heeft meer dan een miljoen mogelijkheden), maar de meesten zullen gewoon een standaard toetsenbord hebben en het normale alfabet gebruiken.

Dit geeft: 26 + 26 + 10 + 20 = 82 mogelijkheden. (Ik ga er even van uit dat je 20 verschillende symbolen/rare tekens kunt typen.)

Een wachtwoord van lengte 6 heeft dus 82<sup>6</sup> = meer dan 300 miljard mogelijkheden. Gaan ze dat snel kraken? Nee.

Maar stel nu dat je de 4 standaard criteria hebt:

  * Minstens 1 kleine letter
  * Minstens 1 grote letter
  * Minstens 1 cijfer
  * Minstens 1 speciaal teken

Dan heb je als hacker dus al meer informatie over 4 van de tekens. Dit is namelijk hoe je wachtwoord er nu uitziet:

  1. Kleine letter = 26 mogelijkheden
  2. Grote letter = 26 mogelijkheden
  3. Cijfer = 10 mogelijkheden
  4. Speciaal teken = 20 mogelijkheden
  5. Niet bekend = 82 mogelijkheden
  6. Niet bekend = 82 mogelijkheden

Oftewel, er zijn 26 x 26 x 10 x 20 x 82 x 82 = minder dan 1 miljard mogelijheden. Gaan ze dat snel kraken? Ligt eraan. Gaan ze dat veel sneller kraken dan zonder criteria? JA.

De reden dat ik "ligt eraan" zeg, is omdat dit een sterk versimpelde weergave is van wachtwoorden hacken. Er zijn veel andere methodes, zoals een tabel van "veelgebruikte wachtwoorden". Deze tabel is véél korter dan die 1 miljard mogelijkheden, en meestal zit het juiste wachtwoord ertussen, mede dankzij die criteria.

Hoe meer criteria, en hoe specifieker die zijn, hoe makkelijker je wachtwoord te kraken is.

## Hoe veilig zijn we?

Misschien denk je: "1 miljard mogelijkheden? Dat gaan ze toch nooit allemaal raden!"

Nou, zou je daar wel zo zeker van zijn? :p

De simpele handeling van "gebruikersnaam en wachtwoord invullen, en op 'inloggen' drukken", kost een computer helemaal niks. De enige limiterende factor is de internetverbinding: hoe lang het duurt om een antwoord te krijgen van de website.

Stel dat het 50 milliseconden duurt om dit te laden, en een hacker heeft 1000 computers (of simpelweg "verbindingen") tot zijn beschikking. Dan kan hij 20,000 pogingen doen per seconde, waardoor hij binnen 50,000 seconden alle mogelijkheden heeft gehad. Dat is iets minder dan 14 uur.

Als je daarentegen géén criteria gebruikt, gaat dit getal dus keer 300, en kost het een hacker een HALF JAAR om je wachtwoord te achterhalen.

Oftewel, elke keer als een website je vraagt om zo'n raar wachtwoord, wordt even heel erg boos en stuur een vernietigende klaagbrief.

## Wat is de oplossing?

Simpel. De enige criteria voor een nieuw wachtwoord is: _hij moet heel erg lang zijn_. Minstens 10-20 tekens.

Vervolgens kun je gewoon een zin bedenken. Misschien een uitspraak die je leuk vindt, of iets wat je vaak zegt. (Of iets wat je ego streelt, zoals "Tiamoisdeallerknapste" Dit zou serieus goed werken, omdat een _naam_ tussendoor de boel nog meer in de war schopt.)

Vervolgens wordt het makkelijk om meerdere wachtwoorden te onthouden, terwijl ze (haast) onmogelijk te kraken zijn.

Het voorbeeld hierboven was met "slechts" 6 tekens. Als je een zin hebt van 23 tekens, zoals "wienietwaagtwienietwint", dan schieten de getallen naar astronomische hoogten.

_Opmerking:_ de bank waarover ik in het begin sprak, heeft een _maximum_ van 20 tekens. Hier snap ik al helemaal niks van. Een wachtwoord wordt toch door een zogenaamde _hash_ gegooid die het terugbrengt naar een stuk tekst van vaste lengte. Dus het is niet alsof ze bang zijn dat het te veel ruimte inneemt.

## Conclusie

Ik heb onlangs op alle belangrijke plekken mijn wachtwoord vervangen door een specifieke, unieke zin.

Op die manier heb ik geen last meer van mijn oude wachtwoorden die ik hergebruik én ik kan het veel beter onthouden.

Ik raad jou aan om hetzelfde te doen :p

Oh ja, en wordt boos over deze criteria. Het slaat nergens op.

 