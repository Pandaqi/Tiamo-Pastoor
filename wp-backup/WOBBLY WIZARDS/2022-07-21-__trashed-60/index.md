---
title: 'Privé: [Speldagboek] "Wobbly Wizards" #2'
author: tiamopastoor
date: 2022-07-21T13:50:29+00:00
language: nl
draft: true
private: true
categories:
  - Games

---
In het vorige dagboek legde ik het idee van het spel uit, en de eerste stappen (een wereld maken + poppetje laten bewegen). Nu is het tijd voor **spreuken**.

## Het eerste idee

Eerst bedacht ik het volgende systeem:

  * Je drukt op B.
  * Jouw poppetje schiet een toverstraal af (in de richting waarin je poppetje staat).
  * Als die toverstraal een voorwerp bereikt, wordt de toverspreuk daarop uitgevoerd.

Simpel toch? Nou, het werkt niet. Sommige spreuken hebben een variabele tijdsduur. Bijvoorbeeld, als je iets wilt oppakken om te verplaatsen, moet je dat voorwerp _in je spreuk houden_ totdat je het hebt neergezet waar je wilt. Dus ik moet iets toevoegen aan het systeem:

  * Je drukt op B _om de spreuk te beginnen_.
  * Je schiet toverstraal ...
  * Als voorwerp bereikt ...
  * Je drukt nogmaals op B om de _spreuk te eindigen_.

Werkt dit? Natuurlijk niet, niks werkt de eerste keer bij computerspellen :p

Als je de tijd tussen het _afschieten_ en _voorwerp bereiken_ te groot maakt, kan er iets tussenkomen, of kan je té lang je spreuk niet gebruiken. Bovendien is het zwaar voor de computer om de hele tijd te testen of ieders spreuken ergens mee in aanraking komen.


Het systeem kan best werken voor een ander spel, maar geen "couch co-op" zoals ik hem nu maak.

## Het eerste idee 2.0

De eerste techniek waar je natuurlijk aan denkt bij _dingen afschieten_ in een spel, is _RayCasting_. (Waar ik het de vorige keer heel kort over heb gehad.)

In plaats van écht iets afvuren, ga ik de speler voor de gek houden. Op het moment dat een speler op "B" drukt, wordt een _ray_ de wereld ingestuurd. Dat is gewoon een rechte lijn, in de richting waarin de speler kijkt. Die ray zal met een voorwerp botsen, en dat voorwerp zal _meteen_ door de spreuk beïnvloed worden. Er worden nog wel wat visuele effecten uitgehaald, en lichtstraaltjes uit de toverstok geschoten, maar dat is allemaal schijn.

Het systeem wordt:

  * Je drukt op B om spreuk te beginnen.
  * De ray zoekt het dichtstbijzijnde voorwerp.
  * Dit voorwerp raakt meteen onder invloed van jouw spreuk.
  * (Links en rechts worden wat visual effects afgevuurd.)
  * Wanneer je op B drukt eindigt de spreuk weer.

Dit werkt op zich prima. Het is heel "goedkoop" voor een computer om uit te voeren. Het voelt alsof het spel heel snel reageert en alsof je grote controle hebt. Immers, elke spreuk die je schiet is meteen raak. (Mits je goed gericht hebt, natuurlijk.) Het gaat wel een uitdaging worden om de visual effects goed te krijgen, maar dat is een zorg voor later.

Er is, echter, één groot probleem. _Niet alle spreuken hebben een variabele lengte_. Bijvoorbeeld, een spreuk om sloten te openen kent geen begin of einde. Je vuurt hem af en---_bam_---het slot is open. Voor veel spreuken is het dus onzinnig, zo niet frustrerend, om twee maal op B te moeten drukken.

## Het beste idee

Het is veel intuïtiever en consistenter als spelers de B-knop _ingedrukt_ moeten houden. Voor spreuken die meteen effect hebben, kunnen ze B meteen loslaten. Voor spreuken die ze lange tijd willen aanhouden, moeten ze B lange tijd aanhouden. Precies logisch, toch?

Het systeem luidt nu:

  * Het eerste moment dat B wordt ingedrukt ...
  * ... zoekt het spel met een _ray_ welk voorwerp de spreuk beïnvloed.
  * Jij hebt controle over dit object ...
  * ... totdat je B weer loslaat.

Dit werkt prima! Hieronder het resultaat.

[embedyt]&nbsp;https://youtu.be/a994Ze2TD20 [/embedyt]

## Wingardium Leviosa!

De eerste spreuk is simpel: je tilt een voorwerp op, sleurt het met je mee, totdat je het weer op de grond laat vallen (hopelijk op de plek die jij wilt).

De implementatie was ... iets minder makkelijk. Ik heb een script geschreven dat op _alle_ "oppakbare" objecten moet. Als je een spreuk loslaat op een voorwerp, wordt deze "spellBound". Zolang een voorwerp spellbound is, beweegt het precies mee met wat de speler aan het doen is. Als de speler draait, draait het voorwerp op zo'n manier mee dat het op dezelfde afstand blijft. Als de speler springt, springt het voorwerp mee. Dit gaat door totdat de speler de B-knop weer loslaat ("spellBound" wordt weer uitgezet).

Dit werkt goed en intuïtief. Alleen drie probleempjes:

  * Spelers hebben geen complete bewegingsvrijheid. Er zijn plekken waar een voorwerp niet naartoe kan vliegen, omdat er een object (of medespeler) in de weg staat. Nu knalt een voorwerp daar gewoon tegenaan en staat dan stil. _Oplossing:_ ook de voorwerpen krijgen die _move\_and\_slide_ functie, waarmee ze over en om obstakels heen kunnen sliden. Zolang het obstakel niet té groot is, beweegt het nu lekker langs.
  * Het voelt onnatuurlijk om een voorwerp _exact_ te laten meebewegen. _Oplossing:_ het voorwerp beweegt _net wat langzamer_ dan de speler. Hij vliegt als het ware "achter" de beweging in, op dezelfde manier als een ballon achter je aan zweeft wanneer je deze aan een touwtje meetrekt. Dit ziet er goed uit en voelt ook natuurlijk. (Het is nog niet optimaal, want soms beweegt hij tegen je eigen speler aan, maar dat lossen we wel op.)
  * Spelers kunnen op het moment _uit het niets_ een 180 graden draai maken. Dat is onrealistisch én maakt het uitvoeren van spreuken heel haperig. _Oplossing:_ spelers hebben een maximum draai die ze per "frame" in het spel kunnen maken. Als ze daaroverheen gaan, wordt de waarde teruggeduwd naar het maximum. Als je nu naar rechts kijkt, en meteen naar links omdraait, laat het spel de speler netjes draaien.

Zo, nu speelt het al een stuk fijner. Let maar eens op de veranderingen in onderstaand filmpje.

[embedyt] https://youtu.be/27lpe_493rQ [/embedyt]

_Opmerking:_ je vraagt je misschien af: "waarom worden objecten soms ineens groen belicht?" Nou, dat is om aan te tonen dat een object "geraakt wordt door de speler _ray_". Oftewel: "als je nu op B drukt, betover je dit voorwerp" Uiteindelijk moet het een stuk beter en mooier zijn, natuurlijk. Het is nu inconsistent en lelijk. Maar vooralsnog weet ik niet hoe ik zoiets doe, en je moet altijd eerst focussen op de gameplay en de systemen, en later pas op de visuele kant.

## Moeilijke keuzes

Dan zijn er nog wat keuzes die ik niet zo makkelijk kon maken:

  * Maximale spreukafstand. Ik heb nu een random getal ingevoerd ("15 afstand"), maar uiteindelijk moet ik daar meer moeite instoppen, want het is een belangrijke variabele. Hoe dichtbij moet je staan, voordat je een spreuk ergens op kunt uitoefenen? Zeer dichtbij? Of mag het ook van ver weg, maar moet je dan gewoon goed kunnen richten?
  * Wanneer "raakt" een spreuk een voorwerp, en wanneer niet? Met één _raycast_ is het soms moeilijk om een voorwerp te "raken", zelfs als je dichtbij staat of _denkt_ dat je goed staat. Dit kan ik oplossen door meer raycasts toe te voegen (die lijnen in verschillende richtingen sturen), en zo de kans te verhogen dat hij een object oppikt. Ik kan dit óók oplossen door de "hitbox" van voorwerpen groter te maken. Oftewel, in plaats van dat ik zeg "je raakt dit voorwerp alleen als de lijn precies door het voorwerp gaat", teken ik een groot onzichtbaar vierkant om het voorwerp heen en zeg "het is al goed als je _ergens_ in dit vierkant komt".

Ik weet het antwoord niet. Ik ga de komende tijd er eens over nadenken en dingen uitproberen.

## Conclusie

Het spel begint vorm te krijgen. De volgende logische stappen zijn:

  * Ondersteuning voor meerdere spelers ("controllers") maken. Het is een co-op spel, dus ik vind het belangrijk om vroeg te ervaren hoe het speelt met meerdere spelers.
  * Meer spreuken ontwikkelen, en een bijbehorend "spreukenrad" om deze te besturen.
  * Een basic level 1 maken, door geld en een klokje te introduceren, om te kijken of het spel daadwerkelijk leuk is.

De volgende dagboeken zullen hierover gaan!