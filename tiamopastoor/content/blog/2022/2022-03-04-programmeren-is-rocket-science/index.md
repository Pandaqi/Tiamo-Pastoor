---
title: Programmeren is Rocket Science
author: tiamopastoor
date: 2022-03-04T15:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Vandaag wil ik even een kort voorbeeld geven waarom het een wereldwonder is dat we überhaupt werkende computers hebben met werkende spellen en programma's.

Ik ben een spel aan het maken. Het werkt helemaal perfect op mijn oude laptop.

In onze kamer staat een nieuwe, veel betere computer die we gebruiken voor onder andere spellen spelen. Dus, zoals altijd, kopieer ik het spel daarnaartoe en nodig mensen uit om het te testen.

Wat gebeurt er? Niks. Het spel crasht. Meteen. Je komt niet eens binnen.

Ik ren terug naar mijn laptop, check of ik ergens een domme typefout heb gemaakt, of het verkeerde bestand gekopieerd, maar nee. Alles op m'n laptop werkt. Alles op die computer werkt niet.

Dus ik check de "logs": als een programma crasht, laat het meestal in een bestandje ergens weten _waarom_ het ineens wilde stoppen. Maar die zeggen ook niks. Volgens de logs is het spel gewoon goed opgestart en zou het moeten werken.

Ik vind een aantal problemen, dat wel. Na een minuutje speuren kom ik achter een fout in mijn code om _teams_ te regelen. Even later is er een klein foutje in mijn code van het menu. 

Maar hoeveel kleine foutjes ik ook oplos, het spel blijft perfect werken op _mijn_ laptop, en helemaal niet werken op _een nieuwere, betere computer._

Nou goed, uiteindelijk til ik mijn laptop maar naar de woonkamer en testen we het spel op mijn minischerm. Verre van ideaal, maar het was alsnog leuk, wat op zich fijn is, want het betekent dat het spel zelf leuk genoeg is :p

Maar dit zit me niet lekker. Ik wil niet dat mijn spel dadelijk door alle computers minder dan vijf jaar oud niet kan worden gespeeld.

Dus ik download ook het originele project op die _nieuwe_ computer en open het, om te kijken of dat iets zegt. Nee, het zegt niks. Waarom niet? Omdat dit _ook_ meteen crasht. Dus niet alleen het uiteindelijke spel stopt ermee, ook _de software waarmee ik het maak_ besluit de benen te nemen als ik deze folder wil openen.

Een week later heb ik de moed gevonden om dit grondig uit te zoeken. Hoe doe je dat? Door het proces van eliminatie.

Je haalt _alles_ uit het project, tot alleen één klein dingetje overblijft. Je test of het crasht. Waarschijnlijk niet, dus je stopt weer iets terug, en test het opnieuw. Dit herhaal je, totdat het spel weer begint te crashen, waarna je weet: dat stukje wat ik net weer terug heb gestopt, dáár zit de fout.

Dat doe ik. Drie kwartier lang ga ik door deze monotone handeling. Ik had bepaalde aannames ("het komt misschien door A" of "meestal geeft B dit soort problemen"), maar dat was het niet. Dus toen het project ineens weer begon te crashen was ik stomverbaasd.

Welk deel had ik net weer terug gestopt in het project? Een tekstbalkje. Dit spel heeft _twee_ tekstbalkjes: eentje die "Game Over!" zegt (als het spel voorbij is, verrassend genoeg) en eentje die zegt "Player <naam hier> Won!"

Deze verschijnen na elkaar als het spel is afgelopen (met een animatie), dus ze hebben precies hetzelfde lettertype, dezelfde kleur, etcetera. _Dat wordt dadelijk belangrijk._

Eén tekstbalkje is prima. Maar twee? Crash. Nog eens crash. Alles crasht.

Dat is niet de bedoeling. Computers horen, eh, meer dan één tekstje tegelijkertijd te kunnen laten zien. Zeker als ze praktisch hetzelfde zijn.

Ik programmeer al behoorlijk lang, dus ik had een ingeving, een soort intuïtie: misschien probeert de software iets te optimaliseren door tekst die _ongeveer hetzelfde_ is samen te nemen, maar doet het dat verkeerd. Dus wat als we het tweede tekstbalkje nét wat anders maken?

(Misschien denk je: _huh, maar als het project niet opent, hoe kan je het dan aanpassen?_ Nou, een van de redenen dat ik deze software koos, is omdat ze na hadden gedacht over hoe je dingen goed en handig opslaat. Dus elk bestand is een tekstbestandje dat ik los kan openen, lezen, en aanpassen. Zonder verstand te hebben van hoe het achter de schermen werkt. Dus ik kan technisch gezien mijn hele spel maken zonder ooit de software te openen :p)

En ja hoor ... ik pas de grootte van die tweede tekstbalk aan van 64 naar 63 ... en alles werkt.

_Alles._ Het spel laadt, start op, doet exact wat het moet doen, geen enkele crash of fout, het is zelfs behoorlijk snel. (Minstens 10x sneller dan mijn oude laptop natuurlijk.)

Wat is exact het probleem? Geen idee, ik heb de software niet geschreven. Dat zal een minuscuul foutje zijn ergens in die gigantische hoop code. Dus ik heb een "bug report" ingestuurd met dit hele verhaal---in het Engels en formeel/technisch natuurlijk, niet als leuke anekdote in het Nederlands---en ik zal het laten weten als iemand met meer verstand van de software dit heeft achterhaald.

Maar het punt is dat dit soort dingen voorkomen---véél vaker dan je denkt. Het verschil tussen een programma dat 100% werkt en eentje die crasht voordat het kan opstarten _kan letterlijk één cijfertje zijn_. Zelfs in grote software, door veel mensen onderhouden, getest op van alles en nog wat, door bedrijven gebruikt om grote commerciële spellen te maken.

Computers kunnen niet _gokken wat je bedoelde_. Ze kunnen niet om een foutje heen, hoe klein het ook is, hoe makkelijk het ook op te lossen is.

Bijna _altijd_ crasht mijn spel meerdere keren tijdens de eerste testsessie. Waarom? Omdat ik dan 2-4 spelers heb die allerlei shit proberen die ik zelf nooit had voorzien, en dan komen ineens allemaal fouten in mijn logica en code naar boven. 

Maar ook _altijd_ weet ik dat het twee minuten werk is om die fouten op te sporen en verbeteren. Want als je weet dát er een fout is, kan je het snel terugbrengen tot een typefoutje ergens, of iets dat je was vergeten op te slaan, of zoiets kleins.

In zekere zin word ik banger van een spel dat helemaal werkt maar niet leuk is, dan een spel dat 100 keer crasht maar wel plezier oplevert (als het werkt). 

Dus de volgende keer dat iets niet werkt: start gewoon je apparaat opnieuw op en neem een _net_ iets andere route naar wat je wilt doen. De kans is bijna 100% dat het dan wel werkt. (In mijn geval: spelers zien écht het verschil niet tussen tekst in grootte 64 en tekst in grootte 63.) 

Ik weet nog dat mijn moeder daar ooit helemaal verbaasd over was. "Huh, maar het zijn computers, die doen exact wat wij zeggen elke keer, hoe kan het de ene keer wel werken en de andere niet?" 

Nou, om dit soort redenen. Programmeren is extreem moeilijk. Er zijn honderden systemen, duizenden regels code, tientallen componenten van je apparaat, die _allemaal_ foutloos moeten communiceren, samenwerken, informatie uitwisselen, wil het allemaal goed gaan. Zoiets simpels als "het is warmer vandaag, dus de computer heeft meer moeite zichzelf te koelen, dus hij doet langer over berekeningen, dus een berekening komt te laat terug" kan je computer al laten crashen.

Zelfs na jaren ervaring sluipen foutjes erin en het kleinste foutje kan een grote crash veroorzaken. Of andersom: ik heb wel eens een maand lang een gigantische fout in de code gehouden, maar het niet door gehad, omdat het niet leidde tot een desastreuse crash. 

(Zo kwam ik er pas een paar dagen geleden achter dat de code voor "springen" in dat spel niet klopte. Niet omdat mijn code fout was, maar omdat ik _de verkeerde code_ had geschreven, de verkeerde _logica_ had toegepast. En daar kwam ik pas achter toen zich een zeldzame situatie voordeed waarin dit een groot verschil maakte.)

Dat wilde ik even mededelen. Hopelijk blijft mijn spel nu werken op alle apparaten, waarschijnlijk wel. Maar het volgende project? Ik weet zeker dat zich weer zoiets gaat voordoen, want programmeren is haast rocket science.