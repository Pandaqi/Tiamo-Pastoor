---
title: Wie is de Mol – De Simulatie
author: tiamopastoor
date: 2018-01-07T20:47:01+00:00
language: nl
categories:
  - Miscellaneous

---
Wie is de Mol is weer begonnen! En ook dit jaar zit er een app bij waarmee je punten kunt scoren.

Als wiskundige voel ik dan ook de verplichting om deze app te simuleren, en zo uit te vogelen wat (gemiddeld genomen) de beste strategie is om toe te passen. Ga ik op twee mensen stemmen? Ga ik altijd op drie mensen stemmen? Stem ik altijd op vier mensen, behalve voor de finale? We zullen het zien.

![](/uploads/2020/08/Naamlogo-verkleind_result.webp)

{{% update %}}
Dit artikel is inmiddels enkele jaren oud. De app is ietsje anders inmiddels, dus dit onderzoek zal niet helemaal juist meer zijn.

Maar omdat ik zie dat heel veel WIDM-fans dit artikel bezoeken, zal ik even vermelden dat ik een eigen bordspelversie heb gemaakt dat de WIDM ervaring nabootst! Zie dit artikel voor uitleg: [Wie is de Trol?](https://pandaqi.com/wie-is-de-trol/)
{{% /update %}}

_Hoe werkt de WIDM app?_ Voor de niet-ingewijden zal ik snel het systeem uitleggen. Je begint met 100 punten. Je kunt, tot het moment dat de executie komt, die punten inzetten op kandidaten. Als jouw kandidaat _niet_ uit het spel ligt aan het einde van de uitzending, worden jouw punten verdubbeld! Als jouw kandidaat _wel_ uit het spel ligt, verlies je al je punten die je op desbetreffende kandidaat hebt ingezet.

Ik heb dit systeem in de computer gezet (met de programmeertaal R, eigenlijk bedoeld voor statistiek), en 1000 keer een serie Wie is de Mol laten simuleren. Vervolgens heb ik als graadmeter het gemiddelde aantal punten uit al die potjes genomen. (Als een bepaalde "strategie" gemiddeld meer punten haalt in al die 1000 potjes, is het een betere strategie.)

Hieronder leg ik precies uit wat ik heb gedaan en geprobeerd. Als je dat niet wilt weten of een fobie hebt voor grafieken, kun je [skippen naar de resultaten][1].

**Opmerking:** elk jaar rond _Wie is de Mol?-_tijd wordt dit artikel belachelijk vaak bezocht, en dit jaar is geen uitzondering. Ik ben daar natuurlijk heel blij mee 🙂 Maar bedenk wel dat dit artikel al even geleden is geschreven, dus mocht er iets onduidelijk zijn of niet kloppen, laat het dan vooral weten!

## Eerste poging

De meest voor de hand liggende strategie is:

Je verdeelt de punten evenredig over **n** personen.

Dus, strategie 1 is dat je altijd één persoon kiest, strategie 2 als je altijd twee personen kiest, en zo door.

De resultaten zijn als volgt:

![](/uploads/2018/01/WIDM-Eerste-Poging.png)

_Wat is dit?_

  * Het **zwarte** puntje geeft het verwachte aantal punten aan. Dus, strategie 2 is het beste.
  * Het **rode** puntje geeft het maximale aantal punten aan dat is gehaald in de simulatie. Met de eerste paar strategieën kun je zoveel punten halen dat ze buiten het plaatje vallen. (Want ja, als je vanaf het begin elke keer de mol koos, heb je alle punten!)
  * Het **blauwe **puntje geeft het minimale aantal punten aan. Andersom zijn de eerste strategieën dus ook het meest risicovol, omdat je zomaar met geen of nauwelijks punten over kunt blijven.

Dus als we hierop afgaan kun je in ieder geval het beste nooit over 4 of meer kandidaten spreiden.

## Tweede poging

Maar, in de finale vallen in zekere zin 2 kandidaten tegelijkertijd af. Dus dat is anders! De vraag is: maakt het dan uit of je jouw strategie aanpast?

Dus, we beginnen nu met dezelfde strategieën, maar in de finale doet men iets anders:

  * Strategie 1: Men kiest één kandidaat
  * Strategie 2: Men kiest twee kandidaten
  * Strategie 3: Men kiest drie kandidaten

Dit zijn respectievelijk de resultaten:

{{% image-gallery %}}
![](/uploads/2018/01/WIDM-Tweede-Poging-1.png)
![](/uploads/2018/01/WIDM-Tweede-Poging-2.png)
![](/uploads/2018/01/WIDM-Tweede-Poging-3.png)
{{% /image-gallery %}}

Het maakt eigenlijk nauwelijks verschil, waarom ik een beetje treurig ben 🙁

Sterker nog, gemiddeld krijg je de meeste punten als je altijd **2** kandidaten kiest, en in de finale maar **1 **kandidaat. Maar ja, dan heb je ook een kans van 1 op 3 dat je eindigt met 0 punten, omdat je uiteindelijk niet de mol kiest. Dat is een beetje té risicovol voor mij.

## Derde poging

Toen zag ik iets heel interessants! In mijn simulatie wisselt men alleen van keuze als men iemand fout heeft. Dus, als de computer iemand kiest die uiteindelijk afvalt, herverdeelt hij zijn punten---en anders niet.

Ik stelde in dat de computer altijd vlak voor de finale zijn keuzes moet heroverwegen, en wat denk je? _Al onze lievelingsstrategieën faalden._

**Belangrijke opmerking!** Het was op dit moment dat ik besefte dat ik een ronde teveel deed in mijn simulatie. Dus, alle voorgaande resultaten moeten gedeeld door 2.

![Derde poging WIDM simulatie.](/uploads/2018/01/WIDM-Ik-haat-mezelf.png)

Zoals je ziet zijn alle strategieën nu ineens (ongeveer) even goed. Blijkbaar is het niet verstandig om te wisselen voor de finale, als je het tot dan toe steeds (of meestal) goed had.

_Waarom?_ In de vorige rondes viel geen van je keuzes af, en dat maakt de kans steeds groter en groter dat daadwerkelijk een van hen de mol is. Als je dus voor de finale wisselt, is de kans groot dat je juist weggaat van de mol, en je punten verspeelt.

Afhankelijk van hoeveel wiskundige kennis je hebt, klinkt de uitleg hierboven ofwel compleet logisch, ofwel compleet idioot. Een slimme geest zegt nu: "Nee Tiamo, het zou helemaal niet uit moeten maken. Alle mensen die over zijn hebben exact dezelfde kans om de mol te zijn. Dus wisselen of niet maakt geen enkel verschil!"

Tja, dat dacht ik ook ... totdat ik erachter kwam dat het wél uitmaakte. Ik introduceer ...

## Een probleem

Er is een grappig wiskundig probleem dat hiermee te maken heeft, maar het op het eerste gezicht tegenspreekt.

Dit heet het **Monty Hall** probleem:

Stel je hebt een spelshow met drie deuren. Achter twee van de deuren zit een _geit_, achter de andere een _dure auto_. Je wilt natuurlijk de auto winnen (en niet de geit).

De presentator vraagt je om een deur te kiezen. Jij kiest een deur (zeg, bijvoorbeeld, deur 1), en tot je verbazing doet de presentator _een andere deur_ open (zeg, bijvoorbeeld, deur 3). Achter die deur staat een geit.

Vervolgens zegt hij dat je nóg een deur mag kiezen. Hij belooft deze wél open te maken zoals jij hebt aangegeven.

Wat is dan het verstandigst? Dezelfde deur kiezen (deur 1), of van deur wisselen (naar deur 2)?

**SPOILER:** Het antwoord is dat je van deur moet wisselen.

Je kunt dit uitleggen door alle mogelijkheden langs te gaan, en te kijken in hoeveel daarvan de auto daadwerkelijk achter jouw originele deur zat. Dan zul je zien dat er, omdat er drie deuren zijn, meer kans is dat de auto _niet_ achter de deur zit die je origineel koos. En dus is het slim om te wisselen. (Misschien moet ik hier een plaatje voor tekenen.)

## Nu terug naar WIDM

Als je dit terug vertaalt naar WIDM, moet je juist wisselen _elke keer_ als een kandidaat afvalt die jij _niet_ had gekozen.

Een andere kandidaat die afvalt, is hetzelfde als die presentator die eigenwijs een andere deur opendoet om te laten zien "hé, dit is de Mol dus niet!"

De app is natuurlijk ietsje anders. Je kunt bij de app meerdere kandidaten kiezen ( = je kunt je keuze spreiden), en dit probleem herhaalt zich voor elke aflevering, maar zelfs dan is de uitspraak waar. **Je moet altijd wisselen.** Het enige belangrijke is dat je niet terugwisselt naar je vorige keus. Elke ronde heeft de kandidaat die jij _het langst niet hebt gekozen_ (en ondertussen ook niet is afgevallen)_ _de grootste kans de mol te zijn.

### Handmatig

Ik heb het eerst even met de hand uitgewerkt.

In de finale hebben de kandidaten de volgende hoeveelheid kans om de mol te zijn:

  * _Kandidaat 1_ (laten we zeggen "de persoon die je het minst hebt gekozen"): 40% kans
  * _Kandidaat 2_: 30% kans
  * _Kandidaat 3_: 30% kans

Een duidelijk verschil. De persoon die je het minste hebt gekozen, maar in de tussentijd _niet_ uit het spel is gegaan, is 10 procentpunt waarschijnlijker de mol dan de anderen!

### Gesimuleerd

Als laatste wil ik dus de Monty Hall-strategie proberen. Als géén van jouw gekozen kandidaten is afgevallen, kies jij juist andere kandidaten. En dan het liefst degene die je het langst niet meer had gekozen.

Zo! Dan nu eindelijk de resultaten van de Monty-Hall methode:

![](/uploads/2018/01/WIDM-Poging-4.png)

Jup, dat werkt :p Veel beter dan dit gaat het niet worden ben ik bang.

De vorige beste strategie was "zet altijd in op twee willekeurige kandidaten", met ongeveer 4500 punten als gemiddelde. (Nogmaals sorry van mijn fout, maar je moet de eerste twee simulaties door twee delen, omdat ik een ronde teveel had ingevoerd.)

Deze strategie heeft als hoogste gemiddelde zo'n 10000 punten. Dus ik nomineer dit als de beste strategie!

## Conclusie 

**Dus, wat is de beste strategie voor de WIDM app?**

  * Zet in op 2 à 3 mensen.
  * Ongeacht wat er gebeurt, switch na elke ronde naar geheel nieuwe mensen. => Kies hiervoor de mensen die je _het langste niet meer hebt gekozen_.

Zoals ik in een comment hieronder zeg: de simulatie heeft de kandidaten genummerd en op volgorde gezet. Het kiest simpelweg na elke ronde de volgende paar in de lijst. (En als het aan het einde komt, begint het weer van voor af aan.) Afgevallen kandidaten worden natuurlijk uit de lijst gehaald en geskipt.

Mijn simulatie (en een wiskundig verhaaltje) geven dit als de beste strategie. Al lijkt het contra-intuïtief. 

_Wat nou als ik de punten niet gelijk verdeel over mensen?_ Dat maakt de simulatie niet uit. Jij weet niet wie de mol is, dus elke kandidaat heeft evenveel kans om eruit te gaan. Dus zelfs dan is bovenstaande strategie het beste.

Maar merk op dat dit gaat over _duizenden simulaties_. Als je deze strategie gebruikt voor één seizoen WIDM, kan je net pech hebben en alsnog heel laag scoren. Dat is, tja, het probleem met _kansen_.

Dus doe vooral waar jij plezier uithaalt. Als je heel zeker bent over je mol, blijf je toch lekker op hem/haar?

## De Simulatie

De code is te vinden in deze Google Drive folder: [Wie is de Mol (App Simulatie)][2]

De code is een rotzooi. Ik heb veel dingen uitgeprobeerd en vervolgens weer weggehaald. Dit was één van de allereerste simulaties die ik deed. 

{{% update %}}
Sindsdien heb ik veel betere en grotere simulaties gedaan. Van [Halli Galli](/blog/2017/2017-09-07-halli-galli/), en er komen binnenkort heel wat bordspellen aan.
{{% /update %}}

Daarnaast is R sowieso een ramp.

Welke programmeertaal begint zijn lijsten nou bij index 1? En welke programmeertaal kan geen comments van meer dan één regel schrijven? En welke programmeertaal heeft als naam nou één letter? (Nu ik erover nadenk: best wel veel. Maar toch, ze hadden iets kunnen kiezen dat meer duidelijkheid verschafte dan de letter R.) 

Ik vind het een mollenactie. Overduidelijk.

 [1]: #conclusie
 [2]: https://drive.google.com/drive/folders/1-i41Lq49gB9BrKl4mlw-0PIazWp0UMI7?usp=sharing