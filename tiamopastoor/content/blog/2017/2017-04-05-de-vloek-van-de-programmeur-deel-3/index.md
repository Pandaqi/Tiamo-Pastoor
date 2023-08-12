---
title: De Vloek van de Programmeur – Deel 3
author: tiamopastoor
date: 2017-04-05T14:00:18+00:00
language: nl
categories:
  - Miscellaneous

---
Een tijd geleden moest ik een nieuw programma leren voor een opdracht. Dit programma was eigenlijk de grote leider op het gebied van de optimale oplossing vinden voor problemen, en kostte normaal gesproken ook duizenden euro's, maar wij kregen het gratis (van de universiteit) en moesten er binnen twee maanden van alles mee kunnen.

Toen ik dat hoorde dacht ik: jeej! Ik kan programmeren, nu kan ik daar nog meer mee. Maar ik zat verkeerd. De mensen die dat programma hadden ontwikkeld besloten om van elke grote, bekende programmeertaal af te wijken, en lekker hun eigen onbegrijpelijke syntax er in te pleuren. Nou goed, daar kan ik nog mee leven, maar waar ik niet mee kon leven was het volgende.


Voor de laatste opdracht moest ik erg veel ingewikkelde berekeningen doen over punten in een grid (denk aan een kaart met snelwegen en knooppunten), en die weer ergens anders in stoppen. Zoals een goed programmeur dat betaamt, stopte ik de uitkomst van die berekeningen eerst in een paar variabelen (`distanceX`, `distanceY`, ...). Vervolgens stopte ik die variabelen weer in dat andere ding (`calcRoute(distanceX, distanceY)`). Zo hoefde ik hetzelfde ding niet zes keer te kopiëren en opnieuw uit te rekenen, en zag de code er een stuk netter uit.

Maar het werkte niet. Het gaf niet eens resultaten of een error---het deed gewoon niks. Dus ik ging vergelijken met voorbeeldcode van de professor, dat was precies hetzelfde. Ik ging vergelijken met code van vrienden, dat was precies hetzelfde. Ik werd helemaal gek en was eigenlijk van plan om het hele vak maar te laten voor wat het was, totdat ik me realiseerde: al die andere mensen hadden het niet netjes gedaan. Ze hadden dingen gewoon constant zitten kopiëren in plaats van ze één keer op te slaan, en ze daarna overal te gebruiken.

(Ja, zelfs de professor. Ik vind het vreselijk als mensen die programmeren doceren geen tijd besteden aan efficiëntie of elegantie van code, maar goed, dit keer zal het vooral aan het programma hebben gelegen.)

Dus, één uur voor de deadline, 11 uur 's avonds, ik ga door mijn hele programma heen en haal alles weg. Elke regel code maak ik zeven kilometer lang, door gewoon alles er in rechtstreeks in te laten staan. En wat denk je? Het werkte _perfect_. Ik heb het programma vervloekt, de helft van mijn verslag besteed aan commentaar leveren, en een 7 gekregen.

Mijn punt is: dit is vervelend. Mocht je ooit iets gaan programmeren (of zelf een taal ontwikkelen), kies dan tenminste een taal die dit soort dingen toestaat ofwel een duidelijk error geeft dat het niet mag.

Wat het probleem dan ook nog eens verergert is dat, als je alles er direct in zet, je de _haakjeshel _krijgt. Je gaat minstens tien keer in diezelfde regel vergeten een haakje te sluiten dat je hebt geopend, of een haakje sluiten dat je nooit hebt geopend. En veel talen geven dan geen errors, want met een beetje geluk klopt _over het geheel_ het aantal open- en sluithaakjes wel. Maar je programma doet totaal niet wat je wil, en je hebt geen idee waarom. En dat is misschien nog wel frustrerender dan dat hele schijtprogramma.

Moraal van het verhaal: er is een reden dat sommige programmeertalen groot en bekend zijn en andere niet, en zorg dat je nooit teveel abstractie hebt in je code. Dan komt het wel goed.