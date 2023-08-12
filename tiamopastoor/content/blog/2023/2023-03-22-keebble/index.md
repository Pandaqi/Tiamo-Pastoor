---
title: Keebble
author: tiamopastoor
date: 2023-03-22T15:00:00+00:00
language: nl
thumb: /uploads/2023/02/keebble_header.webp
categories:
  - Games

---
Ik vind Scrabble een prima spel. De meesten om me heen kennen de regels en vinden het ook niet zo erg.

Het grootste probleem? Het duurt _lang_ en je hebt _veel ruimte nodig_.

Nou, ik ben toevallig de uitvinder van "One Paper Games", dus ik zag hier een kans. Kan je Scrabble terugbrengen naar één blaadje? Iets dat je speelt door je woorden te _schrijven_ op dat veld? Iets dat hoogstens 30 minuten duurt?

Het antwoord is **ja!** 

Zo ontwikkelde ik laatst [Keebble][1]. Hieronder leg ik (heel kort) de leukste kanten uit. (Op de website kan je altijd mijn "volledige devlog" vinden met véél meer detail.)

## Interactieve Regels

Ik speel al lange tijd met het idee van "interactieve regels". Spelregels zijn nou juist het _minst_ effectief als je ze opschrijft in een geprint boekje. Laat de lezer spelen met de regels! Animeer hoe een beurt verloopt! Maak het interactief!

Dit spel is de eerste die mijn nieuwe systeem hiervoor gebruikt. Het is allemaal nog niet genoeg getest / afgewerkt, maar 99% is af en veelbelovend.

Het idee is dat de regels simpelweg een _webpagina_ zijn. Die kan je dus opzoeken op elk apparaat (of alsnog printen als je wilt).

De regels beginnen met alle secties "ingeklapt". Pas als je een sectie begint te lezen, klik je erop en klapt hij uit. Zo raak je nooit overweldigt qua informatie. Zo hoef je niet langs dingen te scannen die je niet hoeft te weten.

Vervolgens probeer ik in de regels knoppen te zetten. Als je daarop drukt, genereert het een willekeurig voorbeeld van hetgeen wordt uitgelegd. Bijvoorbeeld, de computer bedenkt een "beurt". Dan vertelt hij dit aan de lezer:

  * Henk is aan de beurt.
  * Hij trekt een kaart.
  * Daarna speelt hij kaart X.
  * Er gebeurt Y en Z, en dan is zijn beurt voorbij.

Zo _ziet_ de lezer het spel in actie. Als het voorbeeld onduidelijk is, genereren ze gewoon een nieuwe.

Zoals ik al zei: het is weer zo'n gek innovatief idee van mij, ik moet nog dingen uitvogelen. Maar vooralsnog zijn de resultaten erg goed. (Anderen vinden het fijn en ik vind het zelf eigenlijk ook een verademing.)

## Hoe krijg je nieuwe letters?

Het grootste deel van Scrabble kan je zo overnemen. 

  * Schrijf woorden
  * Ze moeten kloppen en op op één lijn staan
  * Eerste woord moet langs middelste vakje. Daarna moeten ze aansluiten op de bestaande tegels.

So far, so good.

Maar ... hoe kom je aan letters? Hoe kom je aan _nieuwe_ letters elke beurt?

Vorige OPGs (One Paper Games) leerden mij dat je het beste spelers een eigen vakje kan geven waarin ze hun informatie schrijven. Ze kiezen simpelweg één vakje dichtbij waar ze zitten en dat is nu hun "hand".

Vervolgens bedacht ik deze oplossing:

  * Aan het einde van je beurt, zeg je 2 letters die je wilt hebben. Die krijg je!
  * Maar als andere spelers een letter daarvan wel leuk vinden, mogen ze ook eentje daarvan bij hun eigen hand schrijven.

## De Keebble magie

Je denkt misschien: dat is te makkelijk. Je kan precies de letters noemen die je wilt!

Ten eerste valt dat mee. Anderen blokkeren steeds de plek waar je wilt zijn, zeker op mijn kleinere bord. Ook is je hand dus _open_ (iedereen kan het zien, het staat geschreven op papier). Dus je kan geen stiekem plannetjes uitvoeren.

Ten tweede zijn het andere handjevol regels ingesteld om dit strategischer te maken.

  * Je vraagt letters aan het _einde_ van je beurt. Dus je moet een hele ronde wachten voordat je ze gebruikt.
  * Je score per letter hangt af van wat iedereen in de hand heeft. (Als je een letter gebruikt die _niemand_ anders in de hand heeft, is hij veel meer punten waard.)
  * Je hebt een handlimiet van 7 letters. Dus ben te gierig, en je hand vult op met dingen waarmee je niks kunt. (En nee, je kan ze niet kwijtraken of wisselen.)

## Afwerking

Toen moest ik het spel gewoon uitwerken en testen. Gelukkig bleek dat 95% van mijn keuzes al de juiste was: ik heb nog nooit _zo'n_ vlekkeloze eerste test gehad.

Ik had alleen kleine slimme aanpassingen nodig.

**Bijvoorbeeld:** Het spel eindigde erg plotseling (zodra 10 vakjes aan de zijkant waren opgevuld, stopt het meteen). Dat voelde oneerlijk, net te snel, en als een anti-climax. Dus als dit gebeurt, mogen spelers alleen nog maar woorden leggen, en het spel stopt (definitief) als iemands hand leeg is

**Bijvoorbeeld:** Het bord is wel érg klein. Het past op zich prima, maar nét iets meer vrijheid was fijn. Dus ik voegde iets toe dat ik altijd miste in Scrabble: **muren**. 

Zet een muur tussen twee vakjes. Vanaf nu zijn ze niet meer "aangrenzend". Dus je kan er andere woorden langs leggen zonder dat ze hoeven te passen!

(Tevens kan je bordgrootte natuurlijk kiezen op de website. Of zelf bepalen door meer/minder te vouwen.)

Dus dit is waar het spel op uitkomt:

  * Plaats een woord
  * Zeg twee letters.
  * Jij krijgt die letters
  * De rest mag er een kiezen voor zichzelf OF een muur plaatsen

De regels zijn één pagina en het werkt 🙂

(Natuurlijk kon ik het niet laten om een stuk of zes mini-uitbreidingen bij te voegen. Zoals eentje waarbij je die "speciale vakjes" gebruikt, zoals "dubbele letterwaarde".)

## Conclusie

En dat is dus Keebble 🙂

Ik heb nog een paar Scrabble-varianten, maar die waren allemaal iets lastiger om te maken. (Geen One Paper Game, maar met materiaal.) Waarschijnlijk noem ik die dan iets van _Keebble: Domino_.

Want het woord Keebble vind ik heel leuk. Voor als het niet duidelijk was, het is het omgekeerde van Scrabble in mijn ogen: Scrap -> Keep. Scrabble -> Keebble.

Die interactieve regels zijn ook de toekomst, in mijn ogen. Het enige nadeel is dat _als_ je het wilt printen, deze versie net wat _minder mooi is_. Maar dat valt natuurlijk weg als er verder slechts grote voordelen zijn.

Verwacht de komende tijd dus nog meer (taal/woord) spellen!

 [1]: https://pandaqi.com/keebble