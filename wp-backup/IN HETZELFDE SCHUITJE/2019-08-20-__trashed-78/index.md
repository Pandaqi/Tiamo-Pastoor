---
title: 'Privé: [Speldagboek] "In hetzelfde schuitje" #10'
author: tiamopastoor
date: 2019-08-20T13:51:00+00:00
language: nl
draft: true
private: true
categories:
  - Games

---
Welkom bij het 10e dagboek ("devlog") voor mijn spel "in hetzelfde schuitje".

Zoals beloofd behandel ik mijn leerpunten na enkele oefenpotjes, werk ik de "backstory simulator" verder uit (met piraten en zeemonsters), en geef ik het spel wat visuele/handige upgrades.

_Opmerking:_ ik ben het helemaal vergeten te vertellen, maar ik heb een (nieuw) icoontje getekend voor schatkisten die je verzameld. [<img decoding="async" loading="lazy" class="size-full wp-image-9020 alignleft" src="/uploads/2019/07/resIconTreasure.png" alt="" width="100" height="100" />][1]

Die zie je nu aan de linkerkant. Ik vond het niet nodig om er meer aandacht aan te besteden dan dit :p

## Oefenpotjes

Ten eerste moet ik opmerken dat het spel nog niet altijd even stabiel is. Als het spel eenmaal is opgestart, werkt het perfect en crasht de server nooit. Maar de handelingen daaromheen---zoals aanmelden bij een spel, het spel pauzeren, wat je moet doen als iemand zijn internet verliest, etc.---werken allemaal nog niet echt.

Voor nu is dat geen groot probleem, aangezien dit allemaal randgevallen zijn, maar de uiteindelijke versie moet dit zeker oplossen.

En dan nu naar de interessante onderdelen!


Het maken van simpele plaatjes voor de havens/steden, en het toevoegen van schaduwen en andere effecten, maakt het spel meteen een stuk aantrekkelijker om te zien! En mijn ervaring leert dat "een spel dat aantrekkelijk is om te zien, is aantrekkelijk om te spelen" Mijn testers waren meteen een stuk enthousiaster bij het zien van de kaart. Ze wilden zelfs wachten totdat de kaart helemaal onthuld was, gewoon om te zien hoe dat eruit zag. (De kaart begint helemaal in "mist", maar wordt gaandeweg verder onthult.)

Ook was het een goede zet om de kaart kleiner te maken. Op deze manier kun je veel beter zien wat er aan de hand is en voelt het spel minder intimiderend.

Daarnaast was men enthousiast over het schatkisten zoeken. Het systeem kon niet helemaal tot bloei komen, waardoor er uiteindelijk maar één schatkist is gevonden, maar het idee spreekt in ieder geval aan.

### Schatkisten vinden

_Waarom werd maar 1 van de 6 schatkisten gevonden?_ Ik bedacht de volgende redenen:

  * Er zijn te weinig steden (die hints kunnen geven). Nu is het 50% havens en 50% steden---dat moet naar iets van 25% havens en 75% steden.
  * Er zijn iets te veel hints die alleen nuttig zijn als de kaart verder ontdekt is. Ik moet nog zo'n 5-10 andere soorten hints bedenken die altijd informatie geven, zeker aan het begin van het spel.
  * We hebben het potje maar 15-20 minuten gespeeld :p Hier kom ik dadelijk op terug.
  * De "explore"-actie voelt nu heel stom, want je hebt maar 6 vakjes (op een kaart van 800 vakjes), waar je daadwerkelijk iets kunt vinden.

Gelukkig noemde mijn zusje zelf al het laatste punt. Ze had nooit zin om te "exploren", omdat je toch vrijwel nooit iets vond. Dit kwam overeen met mijn plannen voor het spel, wat altijd fijn is, want het betekent dat je een spel maakt volgens de wensen van de spelers.

### Exploren, maar dan leuker

_Wat zijn die plannen voor het_ _spel_? Ik werk dus al een tijd aan die "backstory simulator". Eén van de dingen die ik daarmee wil bereiken, is dat er dingen op de bodem van de oceaan te vinden zijn: gezonken schepen, verloren schatten, bijzondere items, etc.

  * Als ik ervoor kan zorgen dat 25%-50% van de tegels _iets_ van waarde bevat, is het veel interessanter om bemanning in te zetten en te exploren.
  * Gezonken schepen bevatten _meerdere hints_ naar dezelfde schat. Zo'n schip is immers ooit van die piraat geweest.
  * Bijzondere items kunnen je helpen ("je krijgt vanaf nu elke beurt 1 goud!"), maar ook hinderen ("een vloek raast over je schip! Je verliest elke beurt 1 goud!")

### Waarom ik nachtmerries heb over Safari

_Waarom hebben jullie het spel maar een kwartiertje getest?_ Omdat Safari een schijtbrowser is. Al mijn testers hadden iPhones en daardoor verschillende versies van Safari. Mijn spel werkte prima op Firefox en Chrome---waar ik ze uitvoerig heb getest---maar Safari vond het nodig alles kapot te maken. De ene kon de kaart niet goed lezen, de ander kon de zeilen niet bijzetten, de ander kon niet op de upgradeknop drukken (omdat hij niet goed werd weergegeven).

Dus toen heb ik onze oude iMac opgestart, Safari geopend, en mijn eigen spel een paar uur lang uitgetest. WANT ZE MAKEN GEEN SAFARI MEER VOOR WINDOWS. Ik haat Apple.

{{% update %}}
The nightmare continues! Apple staat niet toe dat je Safari los van je computer update. Dus toen heb ik de hele computer moeten updaten naar de laatste versie van het besturingssysteem, zodat de laatste versie van Safari automatisch meekwam. (Want, de huidige versie van Safari kon niet eens mijn huidige programmeertaal aan, dus het spel crashte voordat je begon.
{{% /update %}}

{{% update %}}
The nightmare continues still! Op de computerversie van Safari ... werkte het spel helemaal perfect! Dus het moest liggen aan de mobiele versie. Toen heb ik de iPhone van m'n zusje moeten aansluiten op de computer, via Safari toegang moeten krijgen tot de code daar, en toen moeten controleren wat er mis ging. Maar er ging niks mis. Er was geen error code, geen stukje wat niet klopte.
{{% /update %}}

Dus toen heb ik wat haren uit mijn hoofd getrokken en verder gezocht.

**OPLOSSING:** Wat was het probleem? Nou, één van de basiselementen in de programmeertaal voor websites (HTML), is een "input slider" of "range input". Dat is gewoon zo'n ding wat je heen en weer kunt schuiven, om zodoende een bepaald getal te kiezen binnen een bepaald bereik. Ik gebruik twee van die sliders in de interface van de _Sailor_ rol.

In alle browsers werkt dit ding precies hetzelfde. Je kunt ergens op de slider klikken, of een kleine "swipe" maken in de gewenste richting, en de slider volgt meteen. Als ik de zeilen op het schip wil bijzetten, hoef ik slechts omhoog te swipen over de slider, en het is gefikst.

Maar niet op Safari. Nee nee, daar kun je niet op de slider tikken, én een normale swipe werkt niet. De enige manier om de slider te veranderen is om _precies te beginnen op het huidige getal_ en _precies te swipen naar je gewenste getal_. Ja, dat gaat niemand doen. Zelfs met de grootste moeite lukt het mij niet altijd om die beweging zo precies te maken. Uiteindelijk lag de fout dus niet perse aan Safari, maar aan de combinatie "touch screen" en "Safari".

Dus toen zat er maar één ding op: zelf code schrijven om een slider te laten functioneren _zoals hij hoort te functioneren_. Dus ik moest zelf checken wanneer iemand op de slider klikt (of eroverheen beweegt) en daarmee de juiste waarde inschakelen. Jippie. Ik haat Apple.

### Overige dingen

_Verder nog iets interessants?_ Kleine dingetjes.

  * Beurten kunnen wel wat langer dan de huidige 35 seconden.
  * Monsters en schepen moeten minder opleveren, want nu eindigde mijn zusje (na een kwartier spelen) met 200 hout in haar voorraad. 
      * Ook kan ik spelers iets minder kanonskogels geven. Drie kanonskogels, in vier richtingen, betekent 12 mogelijkheden om dingen te raken. Dat is wel erg krachtig voor de beginnersvariant :p
  * Op twee plekken op de kaart stonden een paar steden/haven die onbereikbaar waren. Het pad werd afgesneden door iets anders (meestal een haven). Dus toen waren mijn testers zo van: "zou het niet leuk zijn als je over land kon?" En toen was ik zo van: "dat is exact wat ik gepland heb!" 
      * Bij elk testpotje merk ik weer dat mensen het heel gaaf zouden vinden als ze over land konden, mede omdat dit het spel nog veel meer mogelijkheden zou geven. (Ongeveer de helft van de kaart is eiland, dus het verschil tussen wel/niet over land kunnen bewegen is vrij groot.)
  * En ja, het spel kan nog veel meer "polish" gebruiken. Nu is de kaart op de computer vrij kaal, en ik moet nog meer informatie laten zien (zoals welke spelers in het spel zitten en wat voor grote gebeurtenissen er zijn), maar dat heeft eigenlijk weinig prioriteit.

Naast bovenstaande problemen waren er natuurlijk nog heel veel kleine bugs: dingen die net niet goed werden weergegeven, of de verkeerde waarde aangeven, of niet snel genoeg werden geladen, etc. Maar dat is allemaal niet zo interessant; hierboven staan de belangrijkste problemen (en beoogde oplossingen).

## Oceanen herkennen

Met die problemen opgelost, kan ik eindelijk verder werken aan de simulatie die de hele backstory van de wereld moet bedenken. In eerste instantie wilde ik hier vertellen over de _piraten_ en de _zeemonsters_, maar op het laatste moment heb ik dat doorgeschoven naar de volgende devlog. Deze werd al vrij lang.

In plaats daarvan bedacht ik iets anders wat verdraaid handig zou zijn: het **herkennen en benoemen van oceanen**.

Als ik een stuk of 5-10 oceanen heb op de landkaart, wordt het véél makkelijker om hints te geven naar de locatie van een schatkist of scheepswrak. (Ook maakt het de kaart iets realistischer en interessanter.)

Ergens aan het begin van dit spel schreef ik code voor het herkennen van eilanden, dus ik dacht "oh, simpel, dit kan ik al", maar niets was minder waar :p Het herkennen van oceanen was een heel ander, veel moeilijker probleem.

Waarom? Nou, al het water in onze spelwereld is met elkaar verbonden. Water is nooit netjes afgesloten, zoals een eiland. Dus de vraag is: hoe bepaal je waar de ene oceaan stopt en de andere begint?

Na wat onderzoek (en diepgaand denkwerk) bedacht ik de oplossing! Het idee is als volgt:

  * We **groeien** alle eilanden met één tegel. 
      * Hierdoor ontstaan wel degelijk afgesloten stukken water!
  * We slaan deze nieuwe kaart op als een **kopie.** 
      * De extra landtegels---die wél in de kopie zitten, maar niet in de originele kaart---slaan we op.
  * We gaan door de hele kopie heen en **ontdekken** alle oceanen. 
      * Dit gebruikt exact dezelfde code als het ontdekken van eilanden, maar in dit geval zoeken we watertegels in plaats van landtegels.
  * Alle extra landtegels (die we hadden opgeslagen) worden weer teruggegeven aan de oceanen. 
      * Hierbij check ik simpelweg wat de meest dichtbijzijnde oceaan is en neem dat getal over.

Hieronder staat een plaatje wat het hele idee samenvat.

[<img decoding="async" loading="lazy" class="alignleft size-large wp-image-9038" src="/uploads/2019/07/detecting_oceans-1024x260.png" alt="" width="920" height="234" />][2]

Hiermee ontstaat voor elke kaart een redelijk realistische en voorspelbare indeling van oceanen.

Bovendien weten we nu hoe _groot_ elke oceaan is, wat ervoor zorgt dat we een _passende naam_ kunnen geven. Een oceaan van slechts een paar tegels, noemen we een "bay". Een iets grotere oceaan, is een "gulf" of een "street". Dit systeem gaat door, totdat de allergrootste oceanen daadwerkelijk "ocean" heten.

Hieronder zijn een paar plaatjes van het resultaat ( = een wereld inclusief oceanen en hun namen).

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1564174276/Ocean_Detection_2.png" /> 

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1564174276/Ocean_Detection_1.png" /> 

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1564174276/Ocean_Detection_3.png" /> 

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1564174276/Ocean_Detection_4.png" /> 

_Opmerking:_ soms overlappen de namen van oceanen. Ik had nog geen zin om dit probleem op te lossen :p Het zou waarschijnlijk hele lelijke code worden. En het is op het moment totaal niet belangrijk. (En als je denkt: "_cooperation sea" klinkt niet heel realistisch_, dan stel ik voor dat je die naam Googlet.)

_Opmerking:_ natuurlijk was het allemaal niet zo simpel als het nu lijkt. Ik moest een beetje spelen met het "groeien" van de kaart om de beste resultaten te krijgen. In deze versie groeit de kaart met één tegel in alle richtingen (horizontaal, verticaal en diagonaal), maar ook twee tegels in horizontale en verticale richting. Als ik de kaart _meer_ liet groeien, werd er te weinig water ontdekt, maar als ik de kaart _minder_ liet groeien, was er altijd maar één hele grote oceaan :p

## Conclusie

Niks spectaculairs deze devlog, maar we komen er wel. Stukje bij beetje verdwijnen alle fouten uit het spel en worden alle essentiële onderdelen gemaakt (en getest).

Hopelijk komt volgende devlog eindelijk die _backstory simulator_ af, want dan kan ik hem in het spel bouwen, en de allereerste complete versie een feit noemen.

Natuurlijk, het mist nog steeds veel dingen die ik er graag in zou hebben, en het ziet er niet al te best uit, maar het spel is _functioneel_ af en compleet _speelbaar_. Dat vind ik heel wat, voor zo'n complex spel wat eigenlijk begon als een groot experiment, aangezien ik nog nooit een dergelijk spel heb gezien. (Een semi-coöperatief multiplayer spel, dat je op de computer kunt opstarten en met je telefoon kunt verbinden+spelen, waarbij een hele wereld met geschiedenis wordt bedacht, waar je doorheen vaart terwijl je schatkisten vindt en andere schepen neerschiet. Ik heb nog geen soortgelijke spellen gevonden :p)

Tot dan!

 [1]: /uploads/2019/07/resIconTreasure.png
 [2]: /uploads/2019/07/detecting_oceans.png