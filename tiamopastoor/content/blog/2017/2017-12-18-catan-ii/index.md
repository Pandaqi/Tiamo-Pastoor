---
title: Catan II
author: tiamopastoor
date: 2017-12-18T16:12:26+00:00
language: nl
categories:
  - Miscellaneous

---
Voor het eerste deel (waarin ik de simulatie uitleg + regels): [Catan I][1]

Het is tijd voor de super interessante resultaten! Het is tijd ... om de strategie achter Catan te ontmaskeren! Muwahahaha! (Dit is een povere poging om computersimulaties ongelofelijk spannend te maken.)

Ik heb een mooie visualisatie gemaakt van de simulatie, zodat je precies kunt zien hoe een potje verloopt. (Het helpt mij ook enorm met het programmeren, omdat ik meteen zie wat er allemaal fout gaat enzo. Als een huisje ineens ver buiten het bord staat, weet je dat ergens iets goed mis gaat.) Ik zal een hoop filmpjes maken van interessante potjes, en op YouTube zetten.

Daarnaast doe ik natuurlijk ook het zware werk, en laat ik de computer allerlei getallen uitspugen. Waar zijn we in geïnteresseerd? Nou, welk percentage van de potjes een bepaalde speler wint. De strategie die het hoogste percentage oplevert, is natuurlijk de beste.

BIJZAAK: De computer speelt 1000 potjes per simulatie. Dat was hoog genoeg voor goede resultaten, maar niet zo hoog dat ik steeds tien minuten moest wachten op antwoord.


## De ideale beginpositie

Voor de eerste test geven we alle spelers exact dezelfde strategie, en variëren we alleen de strategie voor beginpositie. Ofwel, speler 1 plaatst beide huisjes volgens strategie 2, speler 2 volgens strategie 2, et cetera.

De resultaten zijn:

  * Speler 1 wint 17,8%
  * Speler 2 wint 3,3%
  * Speler 3 wint 76,7%
  * Speler 4 wint 2,2%

Dat ziet er niet goed uit voor strategie 2 en 4. Laten we nu voor de volledigheid speler 4 de laatste strategie (5) geven. (Ik verwacht er namelijk niet veel van.)

  * Speler 1 wint 16,1%
  * Speler 2 wint 3%
  * Speler 3 wint 74,3%
  * Speler 4 wint 6,6%

Okee, dat is duidelijk: strategie 1, 3, en 5 zijn het beste. Dus proberen we daar nu verschillende combinaties van:

  * Speler 1 (speelt 1 en 3) wint 35,4%
  * Speler 2 (speelt 3 en 5) wint 2%
  * Speler 3 (speelt 1 en 5) wint 12,8%
  * Speler 4 (speelt 3 en 3) wint 31,8%

We hebben resultaat! De beste manier om te beginnen, is met strategie 1 en 3. Ofwel:

  * Plaats je eerste huisje bij een veld met een zo waarschijnlijk mogelijk getal (6 of 8)
  * Plaats je tweede huisje bij de meest nodige grondstoffen. (Dat zijn hout en klei, gevolgd door wol en graan, gevolgd door erts.)

{{< youtube g1_CtF7pv4A >}}

Toppiefloppie. Vanaf nu begint elke speler met deze strategie, zodat we echt puur kunnen testen op speelstrategieën tijdens het spel.

TOCH NIET: Bij het testen van de verschillende beginposities, merkte ik dat _volgorde_ ongelofelijk belangrijk is. Om het eerlijk te houden, begint bij mij elk potje met een andere speler. Daarnaast, gaan we eerst met de klok mee de spelers af, en vervolgens weer tegen de klok in terug, zodat de laatste speler geen nadeel heeft.

Echter, als alle spelers strategie 1 + 3 gebruiken, merk ik dat de laatste speler een gigantisch voordeel heeft. Dat komt omdat die speler als eerste strategie 3 "mag" gebruiken, en dus de allerbeste plek kan kiezen. Blijkbaar is strategie 3 alleen waardevol als je het als een van de eersten doet. (Sterker nog, speler 1, die als laatste strategie 3 doet, heeft er een gigantisch nadeel van.)

Ofwel:

  * Als je een van de eersten bent die strategie 3 toepast, gebruik hem dan vooral!
  * Zo niet, gebruik het liefst strategie 1. (Het bord is groot genoeg dat iedereen deze altijd kan gebruiken.)

Voor de verdere simulaties heb ik wat met de beginposities gespeeld zodat alle spelers ongeveer eerlijke kansen hebben. Voor de zekerheid corrigeer ik alsnog de kleine verschillen.

## De ideale sociale instelling

Ik merkte dat ik NOGAL veel opties had qua strategieën, dus ik ga ze in een andere volgorde af: ik begin bij de categorie met de minste opties, en werk naar die met de meeste toe. In het volgende filmpje spelen speler 0 en 1 _defensief_, en speler 2 en 3 _agressief_.

{{< youtube BTvdvCU0rGI >}}

De mogelijke sociale houdingen waren: defensief, neutraal, en agressief. Nu kan ik me voorstellen dat het resultaat van je houding verandert als andere mensen hun houding veranderen. Oftewel, als de rest heel agressief speelt, heb je er misschien weinig aan om neutraal te zijn. Dus we proberen alle mogelijkheden uit:

  * Speler 1 (speelt defensief) wint 22,4%
  * Speler 2 (speelt defensief) wint 23,2%
  * Speler 3 (speelt neutraal) wint 1,9%
  * Speler 4 (speelt agressief) wint 35,4%

Agressief zijn lijkt beter dan defensief. In ieder geval, neutraal zijn werkt hier totaal niet. Laten we die weghalen:

  * Speler 1 (speelt defensief) wint 23,6%
  * Speler 2 (speelt defensief) wint 26,6%
  * Speler 3 (speelt agressief) wint 23,2%
  * Speler 4 (speelt agressief) wint 26,6%

Dat gaat bijzonder gelijk op. Eens kijken hoe neutraal samenwerkt met defensief:

  * Speler 1 (speelt defensief) wint 25%
  * Speler 2 (speelt neutraal) wint 19,9%
  * Speler 3 (speelt agressief) wint 24,1%
  * Speler 4 (speelt agressief) wint 31%

Da's ook niet veel soeps. Op de een of andere manier, als andere spelers neutraal of defensief zijn, speelt dat een agressief persoon in de kaart. Dus, ik verwacht dat agressief zijn altijd goed werkt, tenzij er te veel andere spelers ook agressief zijn. Eens kijken of ik gelijk heb:

  * Speler 1 (speelt defensief) wint 21,9%
  * Speler 2 (speelt agressief) wint 28,3%
  * Speler 3 (speelt agressief) wint 23,2%
  * Speler 4 (speelt agressief) wint 26,6%

Meh, ik heb een beetje gelijk, en ook weer niet. In ieder geval is wél duidelijk dat agressiviteit loont! Jeej! Dit wordt pijnlijk duidelijk als er 3 defensieve spelers zijn, en 1 agressieve:

  * Speler 1 (speelt defensief) wint 20,3%
  * Speler 2 (speelt defensief) wint 24,5%
  * Speler 3 (speelt defensief) wint 22,3%
  * Speler 4 (speelt agressief) wint 32,9%

Ofwel: wees agressief! Als iemand jou lastigvalt door in de buurt te bouwen, of kaarten af te pakken, pak jij de rest van het potje op alle manieren die persoon terug!

Grappige bijzaak: ongeacht wat iedereens instelling is, potjes duren ongeveer even lang (ongeveer 180 rondes, dus 45 beurten per persoon). Ook wint de persoon met de langste handelsroute en/of grootste riddermacht ongeveer 60% van de tijd.

## Hoe je die dief behandelt

Ik was zo stom om ook hiervoor 5 strategieën te verzinnen, waardoor ik twee testrondes moet doen:

  * Speler 1 (bouw snel iets als je meer dan 7 kaarten hebt) wint 24,2%
  * Speler 2 (bouw snel iets als je meer dan 8 kaarten hebt) wint 28,9%
  * Speler 3 (bouw snel iets als je meer dan 9 kaarten hebt) wint 21,9%
  * Speler 4 (bouw snel iets bij meer dan 7, maar niet als je bijna je doel bijeen hebt gespaard) wint 25%

  * Speler 1 (hetzelfde) wint 26,7%
  * Speler 2 (hetzelfde) wint 27%
  * Speler 3 (hetzelfde) wint 21,2%
  * Speler 4 (negeer de dief volledig) wint 25,1%

Zoals je ziet, is strategie 2 het beste. (De rest is niet persé super slecht, maar dan nog, men wint Catan met de kleine dingetjes!)

Dus, heb je meer dan 8 kaarten, probeer ze op iets willekeurigs kwijt te raken. Heb je minder dan dat, negeer de dief.

## Van ruilen komt huilen

Eindelijk, een categorie waar ik precies 4 opties heb. Laten we kijken wat ervan terecht komt.

  * Speler 1 (ruil alleen zoveel als je weggeeft) wint 28%
  * Speler 2 (ga mee met de eisen van de ander) wint 25,5%
  * Speler 3 (kies 50/50 wat je doet bij het ruilen met andere spelers) wint 23,1%
  * Speler 4 (nooit ruilen met spelers) wint 23,4%

Grappig: van ruilen worden de potjes gemiddeld 10 beurten langer. (Nu ongeveer 190 rondes.) Ook wint de persoon met de langste route iets minder potjes. (Nu maar 50%.)

Wederom zijn de verschillen klein, maar je moet nooit toegeven aan de eisen van andere spelers! Je ruilt alleen precies wat je nodig hebt, en wat je daarvoor weg wilt geven. Als die tegenstander om extra kaarten vraagt, zeg je NEE JOSE!

## Ontwikkelingskaarten kopen

Terwijl ik met deze simulatie bezig ben, merk ik steeds meer het belang van deze kaarten. Dat verklaart waarom ik vroeger nooit won---ik negeerde ontwikkelingskaarten omdat ik ze stom vond. Ik verwacht dan ook grote verschillen hier.

  * Speler 1 (probeer constant ridders te krijgen) wint 27,2%
  * Speler 2 (vijftig procent kans dat je ontwikkelingskaart neemt) wint 25,3%
  * Speler 3 (koop alleen kaarten als je verder niks anders kan) wint 21,1%
  * Speler 4 (koop nooit ontwikkelingskaarten) wint 26,4%

Dat zijn geen grote verschillen :p Maar, zoals ik al verwachtte, loont het wel om de hele tijd kaarten te blijven kopen, hopend op ridders. Wat ik dan wél frappant vind, is dat het ook loont als je helemaal nooit kaarten koopt. Misschien komt het omdat je dan veel sneller grondstoffen hebt voor straten/steden/dorpen, en dat meer oplevert.

Oftewel, maak een keuze aan het begin van het potje: of je gaat vol op de kaarten, of je doet alsof ze niet bestaan.

{{< youtube 7paUBETdlUQ >}}

## Steden bouwen

In mijn potjes heeft nooit iemand gewonnen zonder steden te bouwen, dus ik ga ervan uit dat ze belangrijk zijn.

  * Speler 1 (probeer constant steden te bouwen) wint 24,6%
  * Speler 2 (vijftig procent kans dat je kiest voor een stad te gaan) wint 27,9%
  * Speler 3 (bouw alleen een stad als je verder geen opties hebt) wint 19,4%
  * Speler 4 (bouw pas steden als je al jouw dorpen al hebt geplaatst) wint 27,9%

  * Speler 1 (hetzelfde) wint 24,5%
  * Speler 2 (hetzelfde) wint 29,9%
  * Speler 3 (hetzelfde) wint 20,3%
  * Speler 4 (bouw nooit steden) wint 25,3%

Twee opties zijn het beste: vijftig procent kans dat je een stad besluit te maken, en pas steden overwegen als al je dorpen zijn geplaatst. Nadat ik nog vele simulaties heb gerund, ben ik tot de conclusie gekomen dat ze even goed zijn. De resultaten wisselen steeds van plek---de ene keer heeft de ene strategie net wat meer overwinningen, de andere keer de andere.

Ofwel, kies aan het begin van het potje:

  * Elke keer als je iets nieuws zoekt om te doen, kies de helft van de tijd (of iets meer/minder, ligt eraan hoe strak je dat wil bijhouden) een stad.
  * Bouw eerst al je dorpen, upgrade ze dan naar steden.

{{< youtube orbaxvWEWpI >}}

## Straten bouwen

Het bouwen van straten hangt heel nauw samen met je andere keuzes. (Als jij bijvoorbeeld strenge eisen stelt aan een nieuw dorpje---het moet aan een goed veld liggen, of juist aan de rand, etc.---dan kan jij nog wel eens heel veel straten moeten bouwen.) Dus ik wil eigenlijk dadelijk nog wat meer testen doen waarin ik meerder strategieën combineer, in plaats van per categorie los te kijken.

Hoe dan ook, de resultaten:

  * Speler 1 (probeer de langste handelsroute te krijgen) wint 23,4%
  * Speler 2 (kies een straat met vijftig procent kans) wint 15%
  * Speler 3 (bouw alleen een straat als het nodig is om een gebouw te kunnen bouwen) wint 26,5%
  * Speler 4 (probeer eerst een dorp, stad, of ontwikkelingskaart te krijgen) wint 35,1%

Dit verbaast me eigenlijk wel. De persoon met de langste handelsroute wint meer dan de helft van de potjes, maar toch blijkt straten bouwen alleen belangrijk als je niks anders kan. Anderzijds, aan alleen straten heb je ook niks. (Ze leveren geen grondstoffen of punten op.)

Dus, de overwinning hier gaat naar: bouw alleen straten als je écht niks anders kan!

Grappig: het spel duurt veel langer als men geen straatjes bouwt. Als iedereen strategie 4 hanteert, duurt het spel gemiddeld 220 a 230 beurten. (Dus, 55 beurten per persoon.)

{{< youtube ecfTibHWqoQ >}}

## Dorpen bouwen

Dit is waar je strategie om zal draaien. Dorpen geven toegang tot ALLES, en hoe en waar je ze plaatst is erg belangrijk. Althans, dat denk ik. Meestal ben ik al blij als ik halverwege het spel eindelijk genoeg wol heb kunnen verzamelen voor een dorp.

  * Speler 1 (bouw meteen een dorpje als het kan) wint 19,3%
  * Speler 2 (bouw alleen op plekken die minstens 2 grondstoffen geven) wint 9,2%
  * Speler 3 (bouw alleen op plekken die 3 grondstoffen geven) wint 32,8%
  * Speler 4 (bouw alleen als het aan een veld grenst waar je nog niet aan grenst) wint 38,7%

Dit waren alleen de eerste vier strategieën, er komen er dadelijk nog drie. Maar, we zien al dat speler 3 en 4 er het beste vanaf komen.

  * Speler 1 (bouw alleen als het grenst aan een veld die je een grondstof geeft die je nog mist/het minste krijgt) wint 12,9%
  * Speler 2 (bouw alleen aan velden met een grote kans om gegooid te worden) wint 4,5%
  * Speler 3 (geef de voorkeur aan havenlocaties) wint 51,1%
  * Speler 4 (dezelfde strategie als hiervoor) wint 31,5%

Speler 3 wint hartstikke hard. (Wat ik opvallend vind, want zo belangrijk zijn havens toch ook weer niet?) Hoe dan ook, om tot een eenduidig antwoord te komen, testen we de beste vier strategieën tegen elkaar:

  * Speler 1 (bouw meteen een dorpje) wint 16,6%
  * Speler 2 (bouw alleen op plekken die 3 grondstoffen geven) wint 1,6%
  * Speler 3 (bouw alleen als het aan een veld grenst waar je nog niet aan grenst) wint 23,8%
  * Speler 4 (geef de voorkeur aan havenlocaties) wint 58,0%

Dat is een duidelijke winnaar. Maar er zijn helemaal niet zoveel havenlocaties, dus ik wil wel eens weten wat er gebeurt als drie mensen die strategie gebruiken. (Iedereen behalve speler 1, in dit geval.)

  * Speler 1 wint 11%
  * Speler 2 wint 0,9%
  * Speler 3 wint 41%
  * Speler 4 wint 47,1%

Tja, dan valt één speler keihard buiten de boot :p Die vindt waarschijnlijk geen vrije havenlocaties meer, en gebruikt dus onbedoeld de "bouw heel soms random dorpjes" strategie.

Maar toch zijn de resultaten wat scheefgetrokken door bepaalde combinaties van strategieën. Namelijk, als ik alle spelers exact dezelfde strategieën laat spelen (die we net allemaal als de beste eruit hebben gepikt), winnen speler 3 en 4 veeeel vaker dan speler 1 en 2. Dat hoort niet. Als alle spelers "even geniaal" zijn, en op dezelfde manier spelen, moet dat gelijkgetrokken worden.

Dus, vanaf nu ga ik combinaties van strategieën uittesten.

## De brute force methode

Ik ga de computer nog veel meer potjes laten spelen, elke keer random strategieën. Vervolgens sla ik ze op, en kijk welke random strategie het meeste heeft gewonnen. Om te weten hoeveel potjes we moeten laten spelen, moeten we eerst even berekenen hoeveel mogelijke strategieën er zijn. We vermenigvuldigen gewoon alle mogelijkheden met elkaar:

> 5 \* 5 \* 4 \* 7 \* 5 \* 4 \* 4 \* 5 \* 3 = 840 000

Well, damn. Dat is veel te veel. Ik gooi even een paar strategieën weg die hopeloos waren, en we krijgen:

> 4 \* 4 \* 4 \* 5 \* 4 \* 4 \* 4 \* 4 \* 2 = 163 840

Is dat haalbaar? Eigenlijk niet. Ik wil namelijk een percentage van hoe vaak elke strategie wint, en nu zou ik daarvoor een paar miljoen keer moeten simuleren. Plus, het weergeven en sorteren van resultaten is een hel.

Ik haal het "ruil-aspect" weg, want alleen eerlijke ruil toestaan was vrij duidelijk de winnaar. Ook was duidelijk hoe je met de dief om moest gaan, en kan dat dus weg.

> 4 \* 4 \* 4 \* 5 \* 4 \* 4 \* 1 \* 1 \* 2 = 10 240

Haalbaar. (Soort van.) Dus, de computer probeert nu alle mogelijke strategieën uit, en slaat op hoe vaak een bepaalde strategie wint. Na 100,000 simulaties is dit het resultaat. Onthoudt dat dit in principe een heel laag getal is: bij 4 spelers per potje, wordt elke strategie gemiddeld maar 40 keer uitgeprobeerd. Maar toch, het resultaat zou redelijk moeten kloppen. BEHOLD!

De beste strategie: [3, 3, 3, 5, 1, 1, 2] met een winstpercentage van 0,108%

_Wat betekent dit?_

  * 3+3: Plaats beide huisjes op plekken met de meest nodige grondstoffen.
  * 3: Bouw alleen straten als het echt nodig is
  * 5: Bouw alleen dorpen op plekken met grondstoffen die je het minst krijgt
  * 1: Zodra je de grondstoffen hebt, bouw meteen een stad
  * 1: Check altijd eerst of je een ontwikkelingskaart kan kopen---zo ja, doe dat
  * Ruil altijd eerlijk
  * Probeer altijd snel iets te bouwen als je meer dan 8 kaarten hebt
  * 2: Speel agressief

Er is een eervolle tweede plek voor [3, 1, 3, 5, 4, 1, 1]. Die won 106 potjes, tegenover de 108 potjes van de uiteindelijke winnaar.

En een iets minder eervolle derde plek voor [3, 1, 2, 5, 4, 1, 1]. Die won 105 potjes.

Dit is gelukkig (ongeveer) hetzelfde als we al eerder hadden waargenomen. 3 en 1 zijn de beste beginstrategieën. En dit bewijst bijvoorbeeld dat, als het om steden bouwen gaat, je inderdaad ofwel zo snel mogelijk steden moet bouwen, ofwel juist eerst moet wachten tot al je dorpen geplaatst zijn.

BIJZAAK: Ik ben wel blij om te zien dat mijn simulatie lijkt te kloppen. Gemiddeld, over al die 100,000 potjes, wint elke speler bijna exact 25% van de tijd. Dus er is geen fout in de simulatie die een bepaalde speler een voordeel geeft.

ANDERE BIJZAAK: Het gemiddelde aantal beurten van een potje is wel vrij lang: 200 beurten. (Dat is 50 beurten per persoon.) Dat komt waarschijnlijk doordat er enkele strategieën zijn die ergens vast kunnen lopen, waardoor één of twee van de vier spelers nauwelijks meer iets doen, en daardoor moet wachten tot iemand anders het spel wint. Maar, op zich, 50 beurten is niet super lang, denk ik. 

(Voor mijn gevoel duren potjes Catan altijd heel wat beurten langer dan je zou willen. Althans, dan dreigt een speler te winnen, en dan ineens besluit iedereen die persoon tegen te werken en te irriteren en daardoor het spel nog even tien beurten langer te laten duren. En vervolgens wint die persoon alsnog.)

## Het vonnis

Om een zeker vonnis te vellen, ga ik bovenstaande methode doen, maar dan 1,000,000 keer. Dat duurt lang, dus ik zet het dadelijk aan, en ga dan een paar uur wat anders doen. Maar, dit betekent wel dat gemiddeld genomen elke methode 400 keer wordt geprobeerd, wat in mijn ogen genoeg moet zijn voor een duidelijk resultaat. (Ik bedoel, wie speelt er nou in zijn leven echt 400 potjes Catan?)

Het resultaat:

De beste strategie: [3, 3, 2, 1, 4, 1, 1] met een percentage van 0,1112% (ofwel, 1112 potjes gewonnen)

Een gemiddeld potje duurt 209 beurten.

65,9% van de tijd had de winnaar de _langste handelsroute_ in zijn bezit  
52,3% van de tijd had de winnaar de _grootste riddermacht_ in zijn bezit

Tweede plek: [3, 3, 2, 1, 4, 1, 2] met 1050 gewonnen potjes. (Dat is gewoon dezelfde strategie, maar dan agressief, in plaats van defensief.)

Derde plek: [3, 3, 2, 5, 4, 1, 1] met 1036 gewonnen potjes.

Oftewel, **wat moet je doen om te winnen?**

  * 3+3: Plaats beide huisjes (aan het begin) op plekken met de meest nodige grondstoffen.
  * 2: Bouw met vijftig procent kans een straat wanneer mogelijk
  * 1: Bouw dorpen zo snel mogelijk
  * 4: Bouw eerst al je dorpen, begin dan pas aan steden
  * 1: Check altijd eerst of je een ontwikkelingskaart kan kopen---zo ja, doe dat
  * Ruil altijd eerlijk (als de ander meer vraagt, weiger je)
  * Probeer altijd snel iets te bouwen als je meer dan 8 kaarten hebt
  * 1: Speel defensief

Dit komt overeen met wat ik merkte toen ik de filmpjes maakte. Terwijl ik het plaatjes-maken uittestte, speelde de eerste speler altijd met het "bouw en koop alles zo snel mogelijk" en "speel defensief" systeem, en die speler won bijna alles.

BIJZAAK: Het duurde ongeveer 9 minuten per 100,000 potjes om te simuleren. Op zich ben ik best tevreden daarover, hoewel ik weet dat mijn simulatie-programma _stukken_ efficiënter en netter had gekund :p

Mijn favoriete potje:

{{< youtube N6WOxZexVXc >}}

En nog wat andere leuke potjes:

{{< youtube ZWGBPJwrS5o >}}

{{< youtube 9AbIs9A7To0 >}}

{{< youtube QQaug6tIA4Q >}}

## Wat nu?

Nu weet je hoe je moet spelen bij je al je volgende potjes Catan. Of je negeert dit allemaal en doet gewoon waar je zin in hebt. Het gaat immers niet om winnen, maar om gezellig een spel spelen. Desalniettemin, hoe sneller je dit spel uit de weg hebt geruimd, hoe eerder je een nog veel leuker spel kan gaan doen!

Om het af te ronden nog wat visualisaties met random strategieën:

### Filmpje 1

{{< youtube DNfg-tqRuc0 >}}

Speler 0: [1, 7, 1, 2, 1, 2, 1] met beginstrategie [3,1]  
Speler 1: [2, 5, 2, 2, 1, 2, 1] met beginstrategie [2,3]  
Speler 2: [4, 3, 4, 4, 1, 2, 1] met beginstrategie [1,4]  
Speler 3: [2, 1, 3, 1, 1, 2, 1] met beginstrategie [2,3]

### Filmpje 2

{{< youtube xj9ROe75ZlU >}}

Speler 0: [2, 3, 3, 4, 1, 2, 3] met beginstrategie [4,2]  
Speler 1: [4, 5, 2, 4, 1, 2, 1] met beginstrategie [3,1]  
Speler 2: [2, 3, 3, 2, 1, 2, 3] met beginstrategie [2,4]  
Speler 3: [1, 7, 4, 4, 1, 2, 3] met beginstrategie [3,4]

### Filmpje 3

{{< youtube w4P5TqxQJNo >}}

Speler 0: [1, 5, 3, 2, 1, 2, 3] met beginstrategie [2,2]  
Speler 1: [2, 7, 2, 3, 1, 2, 1] met beginstrategie [3,4]  
Speler 2: [4, 7, 1, 3, 1, 2, 3] met beginstrategie [1,3]  
Speler 3: [2, 3, 4, 2, 1, 2, 3] met beginstrategie [1,2]

### Filmpje 4

{{< youtube 0AB70kkRZJE >}}

Speler 0: [3, 3, 2, 1, 1, 2, 3] met beginstrategie [3,2]  
Speler 1: [4, 4, 1, 4, 1, 2, 1] met beginstrategie [1,2]  
Speler 2: [4, 3, 2, 3, 1, 2, 1] met beginstrategie [4,4]  
Speler 3: [3, 3, 4, 4, 1, 2, 3] met beginstrategie [2,3]

## De Code

Het hele JAVA-project (dat je direct kunt openen in NetBeans, en waarschijnlijk andere programma's) is te vinden in deze Google Drive folder: [Settlers of Catan (Simulation)][2]

 [1]: /blog/2017/2017-12-18-catan-i/
 [2]: https://drive.google.com/drive/folders/1TY195wDWcUt7H-QYzg9wK0dnTTbqtwtx