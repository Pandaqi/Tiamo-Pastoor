---
title: 'Privé: [Speldagboek] "Wobbly Wizards" #1'
author: tiamopastoor
date: 2022-07-21T13:50:28+00:00
language: nl
draft: true
private: true
categories:
  - Games

---
_Dit is deel 1 van een_ **speldagboek** _over mijn spel met werktitel "Wobbly Wizards"_. _Hierin leg ik uit hoe ik een bepaald spel heb gemaakt: wat het proces was, welke problemen er waren en hoe ik die heb opgelost, interessante anekdotes, etc. Ondertussen probeer ik ook grappig en informatief te zijn. Ik hoop dat je het leuk vindt om te lezen!  
_ 

Mijn zusje en ik houden enorm van het spel _Overcooked_ (en natuurlijk het vervolg, logischerwijs getiteld _Overcooked 2_). In dit spel moet je samenwerken om een keuken te besturen. Je moet dingen snijden, in de pan gooien, op een bord gooien, afleveren, en voilà---punten scoren!

_Dat klinkt makkelijk_, hoor ik je denken. Wacht maar. Wacht maar totdat je een pan laat aanfikken omdat je net te laat bent, en vervolgens niet bij de brandblusser kan komen omdat je medespelers het pad blokkeren, en tot overmaat van ramp gooi je per ongeluk alle tomaten in de prullenbak. Het is _hilarisch_. Je hebt soms vijf à zes pogingen nodig om een level te halen, en elke keer bedenk je nieuwe strategieën en is iedereen zo van "wat nou ... als ik deze keer de borden afwas, jij het fornuis in de gaten houdt, jij snijdt en gooit, etc." Op een gegeven moment hadden we zelfs een spreekwoord in het leven geroepen: "wie afwast, hoeft niet te snijden" (Geloof me, die tactiek werkt!)

Natuurlijk kon ik het niet laten om dit spel na te maken. Ik speel eigenlijk alleen computerspellen samen met anderen, en zo'n co-operatief "party" spel ligt dan ook precies in mijn straatje. Maar exact namaken is nooit leuk, dus ik wilde een twist toevoegen.

Mijn zusje is gek van Harry Potter. Toen ze voor de zoveelste keer de films keek, ging er bij ons beide een lampje branden! Bij haar zei het lampje: we doen Overcooked, maar dan met _gerechten_ uit Harry Potter (die smekkies in alle smaken, en die chocoladekikkers, etc.) Mijn lampje zei: we doen Overcooked, maar dan heel anders, met _tovenaars_ die _spreuken uitvoeren_.

Nou, lang verhaal kort, ik vond mijn lampje beter :p Dus toen ben ik begonnen met de uitwerking.

## Het kernidee

De meeste goede ideeën beginnen met één zin. Een kernconcept dat het hele spel meteen uitlegt. Voor dit spel was het kernconcept als volgt:

Alle spelers zijn tovenaars die door te rennen, springen en toveren levels moeten halen.


Klinkt op zich oké, maar nog niet helemaal top. Waarom doen de tovenaars dit? Wat zou er leuk aan zijn? Dus ik dacht even na en kwam op een idee. Mijn zusje vertelde dat er---in de Harry Potter wereld---5 dingen bestaat die niet te toveren zijn. Welke 5 dat exact zijn is niet duidelijk, maar één ervan is in ieder geval _geld_. (Een andere is _(goed) eten_, en je kunt ook niet _de dood terugdraaien_.)

Het kernconcept werd herformuleerd:

In dit spel speelt iedereen tovenaars met studieschuld. Elk level moeten ze met hun toverkunsten genoeg geld zien binnen te halen.

Want iedereen weet hoe duur al die tovenaarsstudies zijn. Zweinstein is echt gierig.

Hoe dan ook: hier kon ik iets mee. Het ene level konden de tovenaars misschien helpen met verhuizen (door dingen met magie te verplaatsen), het andere level konden ze inbreken bij een bank (door met magie sloten te openen), etc.

Met dit idee in het achterhoofd ging ik aan de slag.

## Welk programma zal ik gebruiken?

Hierover bestond geen twijfel: _Godot Engine_. Ik heb zelfs meegeschreven aan een boek over de laatste versie van dit programma. Maar, zelfs als je dat even vergeet, is het gewoon een heel fijn programma. Het is niet zwaar voor de computer, simpel, gebruiksvriendelijk, en ondersteunt alles wat ik nodig heb. En het is helemaal gratis! (Ook op de online "Game Development"-lijstjes staat deze steeds vaker op nummer 1.)

## Welke stijl zal ik gebruiken?

De stijl van Overcooked werkt gewoon heel goed voor zo'n soort spel. Deze stijl heeft de volgende kenmerken:

  * De wereld is 3D. Meer bewegingsmogelijkheden, voor meer spelers en meer chaos!
  * De camera kijkt schuin op de wereld, maar meer van boven dan van de zijkant. Dit zorgt ervoor dat perspectief geen dingen verhult of moeilijk zichtbaar maakt.
  * De camera verplaatst nooit. Het hele level is altijd in het zicht; alle spelers zijn continu goed zichtbaar.
  * De wereld werkt grotendeels volgens een vierkant grid. Dit betekent dat een level bestaat uit "vierkante blokjes", en dat spelers alleen vrij kunnen bewegen langs de X en Z as. Ze staan altijd rechtop en kunnen alleen springen over de Y-as. (Als de camera precies van boven op de wereld zou kijken, zou het spel niet te onderscheiden zijn van 2D, omdat de poppetjes niet in alle richtingen kunnen draaien.)
  * Alles is goed verlicht, met heldere/duidelijke kleuren. Het is een beetje cartoony en low-poly (lage resolutie/simpele 3D modellen), maar niet extreem.

Ik zal deze stijl grotendeels kopiëren. Ik ben niet bijzonder goed in 3D modellen maken, laat staan realistische textures geven, dus ik zal het waarschijnlijk nóg simpeler houden. Bovendien, omdat spreuken zo'n belangrijk deel van het spel gaan worden, zal daar (visueel) de aandacht naar uitgaan.

## Maar wat ga ik wél veranderen?

De grootste veranderingen ten opzichte van Overcooked zijn:

  * Mijn levels gaan _hoogteverschillen_ bevatten. (Het wordt een soort 3D platformer.) Spelers gebruiken standaard de A-knop van de controller om te springen. (In Overcooked kun je niet springen, en wordt A gebruikt voor dingen oppakken of neerzetten.)
  * Spreuken moet men _van afstand_ richten. (Daarom is het ook geen probleem dat ik de A-knop voor iets anders gebruik. Ik hoef niks op te pakken of neer te zetten: dat moeten de spreuken regelen.) Zolang men de B-knop ingedrukt houdt, stuurt men een spreuk in de richting waar ze naar kijken.
  * Iedere speler heeft _meerdere soorten spreuken._ Ik ben van plan iedere speler een "rad met spreuken" te geven. Daar kunnen ze dan snel aan draaien om een andere spreuk te kiezen. Vervolgens gebruik je die spreuk dan weer altijd met dezelfde B-knop.

Deze veranderingen lijken me meer dan groot genoeg om het een uniek en veelzijdig spel te maken.

## Eerste stappen

Ik ben vergeten van de allereerste stappen een foto/filmpje te maken. (Sorry!) Gelukkig waren ze ook niet zo interessant.

Eerst moest ik wat code schrijven om een level in te laden.

Godot heeft een _GridMap_ node die dit heel goed kan doen ... maar, zo bleek bij het testen, die ondersteunt _RayCasts_ niet. Een _RayCast_ is niets anders dan een lijn die jij de wereld inschiet. Die lijn checkt dan of hij een blokje van de wereld raakt, en zo ja, laat hij dat weten en kun je er iets mee. Bijvoorbeeld, om te testen of de speler op de grond staat, kan ik een _ray_ naar zijn voeten sturen en checken of die een blokje raken.

Dus uiteindelijk heb ik zelf maar snel iets geschreven wat aan het begin alle mogelijke levelblokjes inlaadt, en ze dan netjes op een rijtje zet. Ook heb ik meteen de camera goed gepositioneerd en de wereld wat vriendelijker voor de ogen gemaakt. (Door middel van camera-instellingen die bijvoorbeeld randjes van objecten glad maken, de wereld met een bepaalde kleur verlichten, etc.)

## Een bewegend poppetje!

Een poppetje laten bewegen is niet moeilijk. Een poppetje _op een fijne manier_ laten bewegen is altijd lastig.

Natuurlijk wordt de _joystick_ van een controller gebruikt om te sturen. Als de joystick maar een klein beetje in een bepaalde richting wordt geduwd, telt het niet mee. (De waarde zit nog in de zogenaamde "deadzone". Als je dit niet doet, wordt de besturing té gevoelig.)

Als je daarbuiten zit, berekent hij gewoon de positie van de joystick, vermenigvuldigt die met de spelersnelheid, en tada.

_Eerste belangrijke verandering:_ wanneer je in de lucht bent, beweegt je poppetje met een andere snelheid (een veel langzamere snelheid). Dit is realistisch én voorkomt dat mensen de hele tijd als een gek gaan springen.

_Tweede belangrijke verandering:_ wanneer je géén input geeft, remt het poppetje automatisch af. Om dit te bereiken vermenigvuldig je de snelheid gewoon steeds met een getal kleiner dan 1, totdat de snelheid helemaal op 0 staat. In zulke spellen is het altijd een goed idee om _heel snel_ af te remmen. Dit maakt een poppetje namelijk wendbaarder, en geeft de illusie dat het spel "sneller" speelt en reageert.

_Derde belangrijke verandering:_ ik voeg een simpele check toe om te kijken of een poppetje _iets onder zijn voeten heeft_. Zo ja, dan mag hij springen! Zo niet, dan is hij in de lucht, en mag hij niet verder springen. (Anders kunnen spelers natuurlijk oneindig lang opstijgen.) Ook is in zulke spellen de zwaartekracht + sprongkracht erg hoog, waardoor een poppetje héél snel omhoog en omlaag gaat. Dit is wederom om wendbaarder te zijn.

_Vierde belangrijke verandering:_ als het poppetje iets aanraakt, staat het nu compleet stil. Dat moet niet. Gelukkig is dit zo'n veelvoorkomend probleem dat Godot een functie hiervoor heeft: _move\_and\_slide_. Met wat aanpassingen kan het poppetje gewoon over hobbels heenlopen, langs wanden kruipen, etc. Hij bestuurt nu fijn en voorspelbaar.

_Vijfde belangrijke verandering:_ stofwolkjes. Ik hou van effecten die laten zien dat een poppetje loopt. Soms zijn dat subtiele voetsporen, in dit geval zijn het overduidelijke stofwolken. Eigenlijk ontstond dit compleet toevallig (door een verkeerd geplaatst Particle-effect dat ik eigenlijk voor spreuken wilde gebruiken), maar nu heb ik er maar meteen stofwolken van gemaakt. Het maakt het een stuk leuker en kleurrijker, terwijl het tegelijkertijd duidelijker laat zien waar een poppetje is of naartoe wandelt.

[embedyt] https://youtu.be/TKIcBKj6zbA [/embedyt]

## Conclusie

Er is nog weinig spannends gebeurd in dit dagboek. Geen zorgen: dat komt binnenkort! In het volgende deel begin ik met het spreukensysteem invoeren. De eerste spreuk is ook meteen de belangrijkste: de _optil-en-verplaats_ spreuk. (Ook wel "Wingardium Leviosa" uit Harry Potter.) Hier zal dus wat tijd in gaan zitten, omdat ik het hele spreukensysteem nog moet opzetten, maar ik heb hierbij wel hele interessante keuzes die ik graag vertel.

Hopelijk heb ik wel duidelijk kunnen maken dat het een leuk en veelbelovend idee is :p Zo niet: slaap er nog een nachtje over.

&nbsp;