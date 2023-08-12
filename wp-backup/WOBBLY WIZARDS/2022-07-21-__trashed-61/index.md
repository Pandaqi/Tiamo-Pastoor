---
title: 'Privé: [Speldagboek] "Wobbly Wizards" #3'
author: tiamopastoor
date: 2022-07-21T13:50:31+00:00
language: nl
draft: true
private: true
categories:
  - Games

---
In het vorige deel ben ik begonnen met de eerste spreuk: "Wingardium Leviosa" (Ook wel bekend als: "til dingen op en laat ze naar een andere plek zweven".) Er is nog een hoop mis met de implementatie, maar het basisidee werkt in ieder geval.

In dit deel ga ik het "spreukenrad" invoeren, meerdere spreuken maken, en enkele fouten weghalen.

## Het spreukenrad

Het implementeren van het rad ging vlekkeloos (verrassend genoeg). De speler heeft gewoon een variabele genaamd "currentSpell" die de huidige spreuk bijhoudt, en eentje genaamd "maxSpells" die het aantal spreuken op het rad weergeeft. Om naar de volgende/vorige spreuk te gaan doe je simpelweg:

> _Met de klok mee: _<code>newSpell = (currentSpell + 1) % maxSpells</code><br /> _Tegen de klok in_: <code>newSpell = (currentSpell - 1) % maxSpells</code>

_Welke knopjes gebruik je hiervoor__?_ Het RB-knopje gaat met de klok mee, het LB-knopje tegen de klok in. (Dit zijn de "shoulder buttons" van de controller.)

_Wat is dat **"%"** teken_? Dat is de modulo operator. Oftewel: _delen met rest._ Als je 5 deelt met rest door 3, krijg je 1 en 2 rest. (Immers, 1*3 + 2 = 5.) De modulo operator geeft alleen de rest. Dus, 5 % 3 is gelijk aan 2. Het is een hele makkelijke manier om een waarde binnen een bepaald bereik te forceren, en zo te voorkomen dat een speler een spreuk selecteert die helemaal niet kan.

Vervolgens heb ik héél snel een rondje en een vierkantje getekend. Een stukje code plaatst deze netjes rond het rad, en houdt bij welke spreuk geselecteerd is, en klaar is kees!

Ik zal dadelijk een filmpje laten zien van het rad.

## Twee extra spreuken

De eerste spreuken die in mij opkwamen waren een "groei"-spreuk en een "krimp"-spreuk. Die heb ik meteen ingevoerd. Het was niks meer dan, wanneer je een spreuk afvuurt, checken wat de _huidige_ spreuk is, en op basis daarvan actie ondernemen. In dit geval wordt een voorwerp gewoon groter/kleiner gemaakt met een constante snelheid.

Dat ziet er allemaal als volgt uit:


[embedyt] https://youtu.be/9RkrnSrKvEM [/embedyt]

_Opmerking:_ ik vond het onhandig om de B-knop ingedrukt te houden terwijl je, bijvoorbeeld, springt. Daarom heb ik de spreuk-knop verplaatst naar R1 (PlayStation controller) of RT (XBOX Controller). Dit voelt veel makkelijker en natuurlijker.

## Waar gaat het fout?

Je ziet waarschijnlijk al de problemen:

  * Het voorwerp ... beweegt zonder reden bij het krimpen/groeien?
  * Het voorwerp kan té klein worden om nog te raken met je spreuk.
  * Het voorwerp zit soms de speler in de weg. Dan draait de speler om, en _bam_ knalt het voorwerp tegen zichzelf aan. Dit remt niet alleen de speler af, het kan zelfs gebeuren dat de twee voorwerpen in elkaar vast komen te zitten en je de spreuk wel _moet_ stopzetten.
  * Het is wel héél moeilijk om de spreuk goed te raken.

Het eerste was een foutje van mij. Ik vergat om de snelheid te resetten na een "Wingardium Leviosa" spreuk, waardoor elke andere spreuk _ook_ het voorwerp verplaatste met de laatste bekende snelheid.

Het tweede is simpel te voorkomen door een minimum en maximum grootte in te stellen. Aangezien dat geen prioriteit heeft---en ik geen idee heb wat goede waardes zijn---heb ik dat nog niet gedaan. Dat komt wel.

Het derde punt heeft mij veel hoofdpijn bezorgd, totdat ik erachter kwam dat het eigenlijk heel simpel is in Godot. Die heeft namelijk een functie _add\_collision\_exception_with_ waarmee je kunt zeggen dat twee voorwerpen (bij uitzondering) _niet_ tegen elkaar aan kunnen botsen. Dus die exception zet ik aan als je een voorwerp bestuurt, en daarna zet ik hem weer uit. Simpel, werkt hartstikke goed.

_Opmerking:_ eerst had ik geprobeerd om voorwerpen altijd met een soort cirkelbaan om de speler heen te slingeren, maar dat was lastig én loste het probleem niet perse op. Daarna probeerde ik alle voorwerpen op een andere "collision layer" te zetten, maar dat werkte voor geen meter.

Het laatste punt blijft een twijfelkwestie. Om wat meer inzicht te krijgen teken ik vanaf nu een lijn die onze _raycast_ weergeeft. Zo zien we precies wat "het poppetje in het spel ziet". Ook heb ik het spreukenrad even opgeleukt. En gezorgd dat het, zeg maar, niet het halve scherm in beslag neemt.

[embedyt] https://youtu.be/-ZPT4B0znbw [/embedyt]

## Wat zien we?

Dat ik wel heel vaak van het speelveld afval.

Op een serieuzere noot: het is gewoon lastig om dat ene lijntje precies door een object heen te krijgen. De techniek die ik in het filmpje gebruik is dat ik de spreukknop al van tevoren indruk, en dan met een grote zwaai langs het object draai. Ergens een keer moet ik hem wel raken, toch? Nou, dat is niet echt een goede insteek. Het spel moet makkelijk te besturen zijn, niet met een trucje.

Ik probeer de volgende oplossingen:

  * Elk voorwerp krijgt een tweede "hitbox". Dit is een soort grote (onzichtbare) doos die om het voorwerp zit, en je "raakt" een voorwerp al als dat lijntje ergens door die doos vliegt. Deze doos wordt simpelweg even groot als elke tegel in het spel, zodat je niet andere voorwerpen in de weg zit.
  * De speler krijgt meerdere raycasts. Oftewel, bovenop het huidige lijntje, komen er nog twee naast (eentje helemaal links; eentje helemaal rechts). Als dat niet genoeg is, kan ik nog meer lijnen boven (rond het hoofd van het poppetje) en onder (bij zijn voeten) plaatsen.

Ik zal je heel wat tijd besparen door te zeggen: _je hebt allebei de technieken_ _nodig_. (Dit kostte mij tientallen verschillende pogingen en experimenten om uiteindelijk te concluderen.)

Realistischerwijs zou je zeggen: één zo'n lijntje is genoeg. Je hebt immers maar één toverstok die een lijntje schiet. Het probleem is alleen dat spellen niet realistisch zijn.

Er is een gezegde in de spellenwereld die luidt: "in real life you can't double jump". Heel veel spellen bevatten een poppetje dat kan "double jumpen" (als hij in de lucht is, kan hij eenmaal nóg hoger springen), terwijl dat in de echte wereld niet kan. Waarom zit het er dan toch in? Omdat het leuk is! Omdat dit mechanisme een spel vaak ten goede komt.

Op diezelfde manier gaat het er niet om dat het realistisch is, maar dat het realistisch/beter _voelt_. De speler hoeft niet echt naar een object te kijken, zolang de speler maar _denkt_ dat hij het object op de juiste manier aankijkt.

Dus ik heb voorwerpen uiteindelijk een redelijk grote "hitbox" gegeven, en de speler drie raycasts:

[embedyt] https://youtu.be/KUwqQzGHlLw [/embedyt]

De speler test van alle drie de lijnen of ze iets raken. Als meerdere lijnen iets raken, kiest hij het object dat het meest dichtbij is ("proximity vote"). Een alternatief is "majority vote", waarbij hij automatisch het object kiest wat door _de meeste_ _lijnen_ wordt geraakt, maar bij slechts drie lijnen was dat geen goede optie.

In het filmpje zie je ook dat de spreuk een mooi boogje maakt! Dit was uiteindelijk makkelijk te implementeren door middel van _Bezier_ _Curves_. Je hebt het beginpunt (de speler), en het eindpunt (het betoverde object), en daar tussenin zet je het controle punt (hoe verder je dit punt van de speler af plaatst, hoe groter de boog). Vervolgens heb je een simpel algoritme dat er een net boogje doorheen tekent.

Als laatste verandering zie je waarschijnlijk dat er daadwerkelijk spreuken te zien zijn! Natuurlijk is dit niet de uiteindelijke vorm. Er gaat nog van alles mis en soms is het heel lelijk. Maar ik moest even zien wat er precies gebeurde, anders werd het erg lastig fouten uit de code halen. (Anderzijds is het motto namelijk altijd: "eerst het spel laten werken, dán pas mooie visuele effecten maken")

_Opmerking:_ in dit filmpje schieten alle lijnen vanuit hetzelfde punt. Daardoor kon je een object missen als deze _heel dichtbij_ stond. Om dit te fiksen heb ik---zoals je in het volgende filmpje ziet---de lijnen parallel laten lopen.

## Dashen

In _Overcooked_ heb je iets wat ze "Dashen" noemen. Dit is een soort tussenweg tussen rennen en lopen. Als je op de B-knop drukt, gaat je poppetje eventjes héél snel, en remt vervolgens weer af naar de normale loopsnelheid. Dit vond ik ook wel leuk voor dit spel. Zeker omdat het goed werkt: je kunt sneller als je wilt ... maar het gaat ten koste van je precisie.

Omdat ik al een paar uur in allerlei moeilijke wiskundige concepten was gedoken, wilde ik even iets simpels implementeren voor de afwisseling. Het ziet er als volgt uit: (Het rode getalletje dat je ziet, laat de huidige "snelheid verdubbelaar" zien als gevolg van het dashen.)

[embedyt] https://youtu.be/woQsSyAvyy4 [/embedyt]

## Conclusie

Ik ben verbaasd over hoe vlot dit gaat. Ik heb nu drie werkende spreuken, plus een spreukenrad waaraan de speler snel kan draaien. Natuurlijk, links en rechts zijn nog foutjes ("bugs" of dingen die ik gewoon nog niet 100% heb geprogrammeerd), maar het grootste deel werkt.

In het volgende devlog zal ik de volgende grote spreuken toevoegen: "kapot maken" en zijn tegenhanger "repareren". Dit zal waarschijnlijk moeilijker worden, maar laten we hopen van niet. Ik moet namelijk een manier vinden om alle 3D modellen uit elkaar te laten vallen. Maar als het werkt zou het heel gaaf zijn. (Dat is trouwens ook de reden dat ik deze spreuken nu doe. Er staan ook een hoop "makkelijke spreuken" op mijn lijstje, maar die eisen nauwelijks iets extras, dus het heeft weinig zin om die als eerste te doen.)

Vervolgens zal ik meerdere spelers toevoegen. (Oftewel, als je meer controllers hebt aangesloten, zet hij meer spelers in het spel.) Het blijft uiteindelijk een multiplayer co-op spel. Ik wil vroeg beginnen met meerdere spelers testen, en het is best wel belangrijk dat het spel überhaupt werkt met meerdere spelers :p

Vervolgens wordt het zaak om spreuken er (visueel) mooier en duidelijker uit te laten zien, en om een paar simpele objecten te maken die ik in levels kan plaatsen. Zodoende kan ik een geheel eerste "testlevel" maken.

Daarna zal ik, waarschijnlijk, even wat afstand nemen en het spelidee verder schrijven. Waaruit gaan levels precies bestaan? Hoe lang duren levels en wat doe je? Welke spreuken ga ik allemaal in het spel stoppen?

&nbsp;