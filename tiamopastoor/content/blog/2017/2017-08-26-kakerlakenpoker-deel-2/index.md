---
title: Kakerlakenpoker – Deel 2
author: tiamopastoor
date: 2017-08-26T16:04:50+00:00
language: nl
categories:
  - Miscellaneous

---

Dit is het tweede (en laatste) deel van een simulatie van het spel Kakerlakenpoker. Lees deel 1 hier: [Kakerlakenpoker---Deel 1][1]

## De Strategieën

Zoals altijd maak ik een programma waarin men duizenden keren het spel speelt, en vervolgens kijkt hoe vaak iedereen verliest. Door alle spelers andere strategieën te laten gebruiken kan ik zien welke het beste werkt, en welke het slechtst.

In het vorige deel zagen we al dat er eigenlijk twee losse spelelementen: het kaarten weggeven, en het kaarten ontvangen. Beide kunnen andere strategieën aan elkaar koppelen. Deze heb ik bedacht:

KAARTEN WEGGEVEN:

  * (Strategie 0: compleet willekeurig)
  * Strategie 1: Altijd liegen
  * Strategie 2: Altijd de waarheid spreken
  * Strategie 3: 50% liegen, 50% waarheid
  * Strategie 4: Kaarten uit je hand spelen die _ongevaarlijk_ zijn voor jezelf (je hebt die soort niet/nauwelijks voor je)
  * Strategie 5: Kaarten uit je hand spelen die _gevaarlijk_ zijn voor jezelf
  * Strategie 6: Je beweert de soort die de andere speler het meest heeft
  * Strategie 7: Je beweert de soort die de andere speler het meest heeft, terwijl je een andere soort geeft die die speler ook al veel heeft
  * Strategie 8: Je geeft kaarten altijd aan de speler die het grootste percentage doorgeeft

KAARTEN ONTVANGEN:

  * (Strategie 0: compleet willekeurig)
  * Strategie 1: Altijd doorgeven
  * Strategie 2: Altijd geloven
  * Strategie 3: Altijd niet geloven
  * Strategie 4: Nooit doorgeven (50% geloven, 50% niet geloven)
  * Strategie 5: Veel doorgeven (50% doorgeven, 25% geloven, 25% niet geloven)
  * Strategie 6: Als je de soort al veel hebt, altijd geloven
  * Strategie 7: Als je de soort nog niet (veel) hebt, niet geloven
  * Strategie 8: Als die ander de soort al veel heeft, altijd geloven

## Startspeler?

De startspeler wordt random bepaald elk potje. In eerste instantie had ik steeds speler 1 als startspeler, maar daardoor werd het wel erg oneerlijk verdeeld:

{{% image-gallery %}}
  ![](/uploads/2017/08/KakerlakenPlotPlayer1AlwaysStarts.png)
  ![](/uploads/2017/08/KakerlakenPlayer1AlwaysStartsLAMKLEMH.png)
{{% /image-gallery %}}

Zoals je ziet kan speler 1 best zijn slagje slaan aan het begin en veel kaarten wegspelen, maar de kans is groot dat het hem uiteindelijk duur komt te staan.

In het echt zal het zoiets zijn dat de speler "die het laatst een kakkerlak heeft gezien" of de speler "die het bangst is voor spinnen" mag beginnen, maar ja, dat is niet echt in een simulatie te brengen.

## Jammer genoeg ...

... betekent dit dat de startspeler, en waar de kaart al langs is geweest, veel uitmaakt. Ofwel, onze leuke berekening met Markovketens klopt van geen kant :p Dit is de uitkomst van de simulatie voor die 3 spelers:

![](/uploads/2017/08/KakerlakenMarkovketenCheck.png)

Precies het tegenovergestelde van wat de Markovketens zeiden. (Wat mij dan weer doet vermoeden dat ik ergens gewoon enkele getallen per ongeluk heb omgedraaid, maar ik kon niks vinden, dus we gaan gewoon door.)

## En de pret begint

Elke strategie tegenover elke andere strategie zetten zou _superveel_ tijd kosten (aangezien we ongelofelijk veel combinaties kunnen maken). Dus ik ga een paar leuke combinaties kiezen.

### Supersimpel

Speler 1 heeft strategie 1, speler 2 strategie 2, etc. De uitkomst is vrij duidelijk:

{{% image-gallery %}}
  ![](/uploads/2017/08/KakerlakenStrategieUno.png)
  ![](/uploads/2017/08/KakerlakenStrategieUnoPlot.png)
{{% /image-gallery %}}

Speler 2 is enorm eerlijk; ze gelooft iedereen, en spreekt zelf altijd de waarheid. Zoals je ziet werkt dat niet in een blufspel. Als je kijkt naar het kaartverloop zie je dat speler 2 en speler 5 vrijwel elk pootje aan het einde strijden om wie de verliezer is. Ik denk dat vooral het feit dat speler 5 juist kaarten speelt die gevaarlijk zijn voor hemzelf het probleem is. (Want, speler 1 geeft bijvoorbeeld alles door, en die doet het best goed, dus daar kan het niet aan liggen.)

### Gewoon simpel

Nu zetten we juist de bovenste strategieën tegen elkaar op: Speler 1 heeft strategie 4, speler 2 heeft strategie 5, etc.

{{% image-gallery %}}
  ![](/uploads/2017/08/KakerlakenStragieDuo.png)
  ![](/uploads/2017/08/KakerlakenStrategieDuoPlot.png)
{{% /image-gallery %}}

Speler 2 heeft nu strategie 5 die het de vorige keer ook zo slecht deed, dus dat is redelijk logisch. Het is verrassend dat speler 3 zo slecht scoort, aangezien die strategie op het eerste gezicht zeer goed lijkt (en ik hem vaak met succes heb gebruikt). Grappig is wel dat, als je naar het spelverloop kijkt, speler 2 een hele tijd veruit de meeste kaarten heeft, maar uiteindelijk op het laatste moment speler 5 toch nog verliest (in dit specifieke geval).

### Gemiddeld moeilijk, ofzo

We zien nu drie dingen: strategie 2 is slecht, strategie 5 ook, en redelijk veel doorgeven is over het algemeen goed. Hieruit kunnen we een nieuwe selectie strategieën samenstellen die allemaal aan elkaar gewaagd zouden moeten zijn. Speler 1 => 1, Speler 2 => 3, Speler 3 => 4, Speler 4 => 7, Speler 5 => 8.

{{% image-gallery %}}
  ![](/uploads/2017/08/KakerlakenStrategieTrio-1.png)
  ![](/uploads/2017/08/KakerlakenStrategieTrioPlot.png)
{{% /image-gallery %}}

Zoals ergens wel te verwachten, doet de "doe altijd dit" strategie (strategie 1) het veruit het slechtst.  De strategie die veruit het beste scoort is natuurlijk die van speler 2 (strategie 3), want die heeft niet één keer verloren! Ofwel, we concluderen dat strategie 3 en 8 het beste zijn.

### Nu wordt het ingewikkelder

Tot nog toe heb ik steeds elke speler dezelfde strategie gegeven uit de twee categorieën. Dat kan beter! Strategie 4 en 7 doen het bijvoorbeeld gemiddeld goed, dus waarschijnlijk bevatten die een goede component en een slechte. Ofwel, we blijven met vier strategieën over die we lekker gaan mixen met elkaar: 3, 4, 7, 8 van beide categorieën. Dit geeft veel mogelijkheden tot combineren (16), dus we breiden het aantal spelers een beetje uit en doen een simulatie met zes spelers

  * Speler 1: 3 + 3
  * Speler 2: 3 + 4
  * Speler 3: 3 + 7
  * Speler 4: 3 + 8
  * Speler 5: 4 + 3
  * Speler 6: 4 + 4

{{% image-gallery %}}
  ![](/uploads/2017/08/KakerlakenStrategieQuatro.png)
  ![](/uploads/2017/08/KakerlakenStrategieQuatroPlot.png)
{{% /image-gallery %}}

En de verliezer is: speler 6. Vrij duidelijk. Daarnaast is ofwel strategie 4 (kaarten spelen die ongevaarlijk zijn voor jezelf) geen groot succes, ofwel strategie 3 (altijd niet geloven) niet. De volgende set combinaties:

  * Speler 1: 4 + 7
  * Speler 2: 4 + 8
  * Speler 3: 7 + 3
  * Speler 4: 7 + 4
  * Speler 5: 7 + 7

{{% image-gallery %}}
  ![](/uploads/2017/08/KakerlakenStrategieCinco.png)
  ![](/uploads/2017/08/KakerlakenStrategieCincoPlot.png)
{{% /image-gallery %}}

Speler 4 en 2 hebben het in ieder geval niet zo goed voor mekaar, al is niet duidelijk waarom. (Wel is het knap dat zowel speler 5 als speler 3 in mijn gesimuleerde potje geen enkele kaart krijgt.)

Goed, de laatste combinaties

  * Speler 1: 7 + 8
  * Speler 2: 8 + 3
  * Speler 3: 8 + 4
  * Speler 4: 8 + 7
  * Speler 5: 8 + 8

{{% image-gallery %}}
  ![](/uploads/2017/08/KakerlakenStrategieSeis.png)
  ![](/uploads/2017/08/KakerlakenStrategieSeisPlot.png)
{{% /image-gallery %}}

Nou, dat lijkt me duidelijk. Hieruit gaan we de vijf beste strategieën halen, en die als laatste simulatie tegen elkaar opzetten om de winnaar te bepalen!

### De Finale

Na de plots aandachtig bestudeerd te hebben, zijn de beste strategieën geworden:

  * Speler 1: 8 + 3
  * Speler 2: 8 + 4
  * Speler 3: 8 + 7
  * Speler 4: 4 + 7
  * Speler 5: 3 + 7

{{% image-gallery %}}
  ![](/uploads/2017/08/KakerlakenStrategieSiete.png)
  ![](/uploads/2017/08/KakerlakenStrategieSietePlot.png)
{{% /image-gallery %}}

De winnaar is ... strategie 3 + 7! Je hanteert altijd dezelfde kansen (50% de waarheid spreken, en 50% liegen), en als iemand een kaart aanbiedt die je nog niet veel hebt, moet je diegene niet geloven.

Ik ben teleurgesteld. Het verschil met die eerste, strategie 8 + 3, is erg klein. Daarnaast heeft strategie 8 sowieso veel goede dingen gedaan, dus ik denk dat het eigenlijk wel goed is om die er bij te houden. Gelukkig kan mijn simulatie zoveel strategieën aan als je wil (zolang ze elkaar natuurlijk niet overlappen qua functionaliteit).

### Grapje, nu komt de finale

Dus we gaan helemaal los!

  * Speler 1: 3 + 7
  * Speler 2: 3 + 7,8
  * Speler 3: 3,8 + 7
  * Speler 4: 3 + 6,7
  * Speler 5: 8 + 3,4,7
  * Speler 6: 4 + 4,7

{{% image-gallery %}}
  ![](/uploads/2017/08/KakerlakenStrategieOcho.png)
  ![](/uploads/2017/08/KakerlakenStrategieOchoPlot.png)
{{% /image-gallery %}}

Tja, het wordt zo toch pijnlijk duidelijk. Strategie 3 + 7 verslaat al het andere. Er kan niks tegenop. Als je er extra strategieën bij gooit, verschilt het nog steeds weinig (de eerste 4 spelers hebben allemaal nagenoeg hetzelfde aantal potjes verloren). Dus je moet maar hopen dat de rest niet deze optimale strategie kent :p

## De Code

De simulatie-code is te vinden in deze Google Drive folder: [Kakerlakenpoker (Simulatie)][2]

 [1]: /blog/2017/2017-08-26-kakerlakenpoker-deel-1/
 [2]: https://drive.google.com/drive/folders/13tyTK628ZuSSrYwG3rnlN3BovrIUvBz7