---
title: De Vloek van de Programmeur – Deel 5
author: tiamopastoor
date: 2019-06-20T14:00:49+00:00
language: nl
categories:
  - Anecdotes

---
Het is onmogelijk in te schatten hoe lang het duurt om codes te schrijven.

Op de een of andere manier heb ik, na tien jaar ervaring, nog steeds geen idee hoe lang een programmeertaak gaat duren.

Een systeem om de kortste route te vinden? Dat is wel lastig zeg, zo'n algoritme. Weet je wat, ik trek er een hele dag voor uit. Na een uur is het tot mijn grote verbazing gedaan.

Eventjes de computerspelers in een willekeurige richting laten bewegen? Tien regels code. Een kwartier, maximaal. Twee dagen later trek ik de haren uit mijn hoofd _omdat het maar niet wil werken_.

## Bewijsstuk A

De afgelopen paar weken heb ik aan een computerspel gewerkt. Hiervoor heb ik al enkele leuke artikelen geschreven die vast binnenkort zullen verschijnen (als de eerste werkende versie af is).

Ik dacht: dit is een complex spel, minstens een maand om überhaupt de basis te maken. Na drie weken, waarvan ik er anderhalf vooral aan een ander project heb besteed, werkt bijna alles.

Maar het had nog sneller kunnen zijn, ware het niet dat de meest simpele dingen _meerdere dagen_ in beslag hebben genomen.


Zo moet dit spel een wereldkaart laten zien en waar alle schepen/havens op die kaart zijn. Dit is niets anders dan: ga door de lijst met "units", pak de X en Y coördinaaten, en plak een plaatje op die plek.

Toen ik de code voor het eerst uitteste, leek alles te kloppen. Ik vergeleek de posities van een paar schepen en zag dat het goed was. ("En toen schiep God de zeemonsters. Hij vergeleek hun locatie met die op zijn iPad ... en hij zag dat het goed was.")

De dag erna zag ik dat de _havens_, daarentegen, nét een beetje de verkeerde kant op stonden. Ik was verslagen. Hoe kunnen alle "units" op de juiste plek staan, behalve de havens? Ze gebruiken allemaal precies dezelfde code om de locatie op te sturen en weer te geven!

Na enkele dagen kwam ik achter het probleem. Ik maak eerst alles havens. _Daarna_ pas verplaats ik ze naar de goede plek, door te zoeken naar vakjes die aan de rand van een eiland zitten. Wat denk je? Ik verplaats ze wel, maar ik sloeg die verplaatsing niet op. Met één regel code was dit hele probleem opgelost. Toch heeft dit mij twee dagen van frustratie gekost.

## Bewijsstuk B

Tegelijkertijd heb ik een groot en complex vechtsysteem in het spel.

Schepen kunnen kannonen afvuren. Het vervelende van kanonskogels? Ze vliegen weg van het schip, in een bepaalde richting, voor een bepaalde tijd. Ik moest checken wat het allereerste object was dat zo'n kanonskogel raakt. Dat is niet makkelijk, dat ligt niet voor de hand, en dat is niet weinig code. (Zeker omdat er veel andere voorwaarden aan vast zaten, zoals de oriëntatie van het schip, het level van de kannonnen, het feit dat kanonskogels niet zomaar door havens kunnen, etc.)

Wat denk je? Paar uurtjes werken in de ochtend en het was gepiept. Ik heb die middag lekker gesport en ontspannen een serie gekeken. Diezelfde avond heb ik nog een paar andere grote systemen ingebouwd.

Programmeren duurt nooit zo lang als ik denk.

## Bewijsstuk C---Een quiz

Laten we als laatste een korte quiz doen om mijn punt te versterken.

Ik had, voor mijn spel, 4-dimensionale ruis nodig. Dat klinkt heel moeilijk, maar dat valt heel erg mee.

Mijn spel heeft een landkaart. Die kaart moet naadloos zijn: als je aan de linkerkant eraf gaat, kom je er aan de rechterkant weer op. (Hetzelfde voor de boven- en onderkant.)

Die landkaart wordt gegenereerd door willekeurige ruis te maken en vervolgens te zeggen "plekken met veel ruis zijn eilanden, de rest is de zee". Dit is een veelgebruikte standaardmethode om willekeurige kaarten te maken.

Dus, om ruis te krijgen die naadloos was, moest ik twee cirkels van ruis maken. (Want als je over een cirkel loopt, begin je waar je eindigt.) Een cirkel heeft 2 dimensies. Dus twee cirkels = 2×2 = 4 dimensionale ruis!

Ik ga de code voor die ruis geven. Je hoeft er niks van te begrijpen. Je hoeft het niet goed door te lezen.

Je hoeft alleen te kijken naar de patronen en de structuur en te zoeken naar _wat er niet klopt_.

Leef je in in mijn situatie. Ik scan door deze hele functie heen, constant op zoek naar afwijkingen, typfouten, patronen die niet kloppen.

Er is één kleine afwijking die het hele algoritme deed crashen (of hele lelijke kaarten genereerde).



Heb je 'm gevonden?

Op één van de eerste regels wordt ervoor gezorgd dat alle waardes (voor X, Y, Z en W) tussen de 0 en 255 liggen.

Je doet dit door simpelweg `X = X & 255;` te doen voor alle vier die coördinaten.

Voor de laatste coördinaat, de "W", had ik per ongeluk een kleine letter "w" genomen.

Het schrijven van die ruisfunctie, wat niet bepaald makkelijk is (wat te zien is aan het feit dat niemand het had gedaan in mijn programmeertaal), duurde iets meer dan anderhalf uur. Het vinden van deze piepkleine fout duurde de rest van de dag.

Dat is ... _de vloek van de programmeur_.