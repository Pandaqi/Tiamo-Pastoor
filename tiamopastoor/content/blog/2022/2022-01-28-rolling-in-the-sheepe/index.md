---
title: Rolling in the Sheepe
author: tiamopastoor
date: 2022-01-28T15:00:00+00:00
language: nl
thumb: /uploads/2022/01/banner_wide.webp
categories:
  - Miscellaneous

---
Weer een dag, weer een artikel in de reeks "Tiamo probeert al zijn oude projecten af te maken"

Dit is een bijzondere. Ironisch genoeg is het originele (zeer simpele) idee voor dit spel in een paar maanden tijd doorgerold tot allerlei rare gevolgen, als een sneeuwbal die van een helling rolt en steeds groter wordt. Lees onder de trailer het verhaal achter dit spel.

Bezoek de officiële pagina om het spel te downloaden: [Rolling in the Sheepe (on Pandaqi Games)][1]

{{< youtube OorjwESxxZ4 >}}

{{% remark %}}
Ja, ik doe de voice-over en de zang. Nee, de schapengeluiden zijn opnames van echte schapen.
{{% /remark %}}

{{% remark %}}
Tot mijn grote verbazing heeft de spellenwinkel wederom, helemaal uit zichzelf, besloten dat ze dit spel goed genoeg vonden om te "featuren" op de voorpagina. Ergens doe ik iets heel erg goed inmiddels! 

Maar van alle honderden mensen die nu constant het spel bezoeken, downloaden slechts een handjevol het spel, en niemand koopt het. Dus er is nog een missend ingrediënt dat ik moet ontdekken ...
{{% /remark %}}

## Wat is het idee? 

Dit is een **lokaal multiplayerspel**, wat betekent dat je met familie of vrienden, op de bank, achter hetzelfde beeldscherm, samen een leuk spelletje speelt.

Iedereen is een schaap met een bepaalde vorm. Door te rollen, vliegen, springen, zweven, probeer je door de kamers en de tunnels te komen en **als eerste de finish te bereiken**.

Maar dat je met een bepaalde vorm begint ... blijft natuurlijk niet zo. De laatste speler wordt de "wolf": als die je aanraakt, word je in tweeën gehakt. En tja, hoe kleiner en hoekiger je bent, hoe minder makkelijk je rolt.

Dat is dus het _hele simpele_ idee waarmee alles begon: iedereen is een willekeurige vorm en je moet als eerste over de finish rollen. 

Dit was bedoeld als mijn volgende spel in de reeks "One Week Games". Zoals de naam suggereert, zijn dat spellen die, begin tot eind, in één week zijn gemaakt.

Laten we nu eens kijken wat er daarna allemaal gebeurde ...

## Waarom ik ga stoppen met "simpel idee" te zeggen 

Binnen een dag realiseerde ik het volgende: "tja, als alle spelers naar rechts racen, ontstaat er vanzelf té veel (horizontale) afstand en moet de camera helemaal uitzoomen om iedereen in beeld te houden. Onhandig!" Hoe los je dat op? Nou, door het parkoers alle kanten op te laten gaan, niet alleen van links naar rechts. Het idee werd al ingewikkelder.

Binnen twee dagen had ik besloten dat je niet alleen een willekeurige vorm was, je moest ook realistisch doormidden worden gesneden! (Dus als jij op een scherpe "stekel" in de omgeving landde, moest die jou precies doormidden snijden hoe je hem raakte.)

Dus ik bouwde dat systeem. En ik was trots op mezelf, want het werkte ook nog, binnen afzienbare tijd.

En toen maakte ik de rest van het spel. En ik werkte door. 

En na een weekje moest ik concluderen: dat doormidden snijden werkt niet. Ik kon _niet_ garanderen dat je überhaupt nog vooruit kon komen met de vorm die je overhield. Ik kon _niet_ een sluitend algoritme bedenken om elke vorm "ronder" of "hoekiger" te maken.

Dus toen veranderde het naar iets wat achteraf gezien véél slimmer en beter was: iedereen begint als perfect ronde cirkel. Als je wordt gesneden, verander je in twee kleinere _achthoeken_. Opnieuw gesneden? Je wordt een _zevenhoek_. Dit gaat door totdat je een driehoek bent, die natuurlijk voor geen ene meter rolt.

(Andersom, als je een powerup pakt die je "ronder" maakt, ga je gewoon een vorm omhoog. Driehoek => Vierkante => ... => Cirkel.)

Tja. Daar zat ik dan met mijn mooie systeem om dingen te snijden. Ik wilde het niet ongebruikt laten, dus ik besloot de ontwikkeling te pauzeren om [Carving Pumpkins][2] te maken.

Toen ik terugkwam, was het hele project dus overhoop en de kernregels veranderd. Nog wat testrondes onthulden dat

  * Spelers te weinig controle hadden (je kon alleen naar links of rechts rollen) om het spel langdurig leuk te maken.
  * En ik mechanismes moest toevoegen om spelers "bij elkaar te houden". (Als iemand een te grote voorsprong neemt, of iemand valt te ver achter, is het niet leuk meer en is de winnaar eigenlijk al bepaalt. Bovendien kan ik dat dus niet allemaal in beeld houden, want je kijkt allemaal naar hetzelfde scherm.)

Dus ik voegde extra mechanismes toe (houdt beide knoppen ingedrukt om te _zweven_, bijvoorbeeld) en schreef ideeën op voor nog meer.

Ook brak ik de route op in "kamertjes", die eens in de zoveel tijd gesloten zouden zijn. Het zou de voorste speler(s) tijd kosten om dat slot open te maken, wat iedereen dichter bij elkaar brengt.

Bovendien, aangezien je in meerdere stukken kon worden gehakt, was het genoeg om één stuk over de finish te brengen? Of moesten ze allemaal komen? Kreeg je een tijdstraf als ze niet allemaal over de finish kwamen? Vragen, vragen, vragen.

Zie je waar dit heen gaat? Het idee "race van links naar rechts door te rollen" was inmiddels een heus systeem om hele geraffineerde parkoers te genereren, met allerlei powerups en speciale kamertjes tussendoor, en je kon _zweven_ en _aan muren blijven kleven_.

En toen stopte ik weer, want er kwamen wat spellenwedstrijden aan die ik wilde _joinen_.

Toen ik terugkwam, zei ik tegen mezelf: "Wat ben ik aan het doen? Houdt het gewoon bij dat simpele idee. Als je het zo groot houdt, ga je het nooit afmaken en over een week wéér stilleggen."

En daarom zweeft het uiteindelijke spel ergens tussen "simpel grappig ideetje" en "volwaardig groot spel". Maar het is tenminste af, iets wat ik niet aan zag komen toen ik alle motivatie voelde wegglippen.

## En de titel? 

Die kan je denk ik wel raden :p In een gesprek met iemand over dit idee werd al snel de grap gemaakt "Rolling in the Sheeeeeeeeep". 

Om het nog een extra twist te geven, besloot ik er "Sheepe" van te maken, omdat het dus allemaal om _shapes_ draait. Dus sheep + shape = sheepe. Hopelijk zien anderen dat ook :p

En tja, ik had al genoeg trailers gemaakt die gewoon wat mooie beelden lieten zien, ik vond het tijd voor wat anders. Vandaar de parodie op de hit van Adele en de algehele niet-serieuze instelling.

## Het probleem met later terugkomen 

Ik heb dus zo'n twee weken aan dit spel gewerkt, voordat ik het onderbrak voor iets nieuws. Ik merkte dat het idee veel te groot werd en ik liep tegen problemen aan die ik niet wist op te lossen. (En natuurlijk de aloude reden: ik had dingen die ik liever wilde doen en was dus de motivatie kwijt.)

Pas 4 maanden later kwam ik weer terug. Dat lijkt misschien een relatief korte tijd, maar het is een eeuwigheid in deze wereld. En tijd lost niet _op magische wijze_ grote obstakels in je spelontwerp op.

Toen ik terugkwam, heb ik eerst twee dagen lang hele blokken code herschreven. Ik was trots op de nieuwe, schonere code en dacht dat het zo goed was. Toen heb ik allerlei nieuwe dingen toegevoegd die sowieso een goed idee waren in mijn ogen.

En toen ... 

Ik dacht dat we een paar dagen verwijderd waren van een afgemaakt spel, maar het project dacht daar anders over.

Elke keer dat ik het opstartte, crashte het weer om een andere reden. Of er ging iets compleet mis (wat essentieel was voor het spel) en ik had géén idee waarom. _Dagenlang_ heb ik door die oude code moeten speuren naar wat er mis zou kunnen zijn. En uiteindelijk kon ik vaak slechts _gokken_ wat het was en daar iets op bedenken, zo'n rotzooi was het.

In die 4 maanden afwezigheid had ik alweer veel geleerd over bétere manieren om iets te doen, en bovendien was ik alle details vergeten van deze oude code. Dus nu had ik nog steeds dezelfde grote problemen ... maar 0,0 informatie!

Bijvoorbeeld: in het spel genereert hij automatisch een route voor de spelers om te rollen. Dit doet hij door steeds een nieuw stukje te plaatsen aan de _voorkant_, en het oudste stukje weg te halen aan de _achterkant_. Maar toen ik het spel opnieuw startte, besloot hij _na 20-30 seconden_, om onbegrijpelijke reden een stukje compleet ergens anders te plaatsen, buiten het bereik van spelers. En daarmee dus het hele spel onmogelijk te maken en even later te laten crashen.

Wat bleek het probleem? Nou, het algoritme probeert allerlei verschillende stukjes, totdat hij eentje heeft die _past_. Alles wat niet past, zou weggegooid moeten worden voordat je het volgende probeert. _Dat had ik niet gedaan._ Om onbegrijpelijke reden was ik dat vergeten en had ik daar nooit over getwijfeld. Dus alle stukjes die niet pasten, werden alsnog geplaatst! Maar omdat ze geen locatie hadden, werden ze door het spel op plaats "0" neergegooid.

Ben ik twee dagen aan kwijt geraakt. (Natuurlijk heb ik ook ondertussen andere dingen opgelost, verbeterd, getekend voor het spel, etcetera. Maar het overgrote deel van de tijd was ik bezig met dit ene probleem oplossen.)

Als ik dit probleem toentertijd _meteen_ had opgelost, had ik dit waarschijnlijk in vijf minuten gevonden. Ik had immers die code net geschreven, ik zat er helemaal in, en ik had nog een kritische mindset jegens dit gloednieuwe stuk code.

Dus het spel is afgemaakt, maar ik weet oprecht niet of mensen het lang kunnen spelen zonder dat het crasht, of dat er _iets_ gebeurt wat niet hoort te gebeuren. Ik codeer na al die jaren redelijk netjes, en heb gedaan wat ik kon om alles veiliger te maken ... maar dit was een grote rotzooi die ik niet meer kon redden 🙁

(Helpt ook niet dat dit hele algoritme---_terwijl je speelt een hele complexe route maken die moet kloppen aan alle kanten_---geheel nieuw was voor mij. Ik zie nu, achteraf, dat ik het hele algoritme anders had kunnen aanpakken om mezelf problemen te besparen. Maar goed, dat is dus een leerpunt voor de volgende keer dat ik zoiets maak.)

## Concrete lessen 

### Les #1 

**Maak iets meteen af en laat geen grote problemen openstaan (voor langer dan een paar dagen).** 

Zelfs al lijkt het spel "simpel". Zelfs al is je motivatie weg. Een project onderbreken is niets anders dan een garantie dat je _later_ _vijf keer zoveel moeite erin moet steken_ om het nog af te krijgen.

### Les #2 

De andere les is dat ik de neiging heb om fouten in een spel te maskeren door gewoon héél veel _inhoud_ toe te voegen. Dit spel heeft bijna 100 unieke dingen die kunnen verschijnen (verspreid over 3 categorieën: terrein, minigame, powerup). 

Dat is _veel_. Meer dan de meeste spelers (actief) zullen zien. Maar dit was het makkelijke deel: ik heb al tientallen keren powerups of terreinsoorten in spellen gestopt. Daar gaat het nooit mis. Zoiets als "omgekeerde zwaartekracht" of "beweeg sneller" is _één simpele regel code_ en werkt altijd.

Het enige probleem is dat de kern van het spel hierdoor achterblijft, en dan is al deze inhoud slechts een pleister op de wond. Mensen gaan echt niet enthousiast zijn over alle unieke powerups, als ze nooit lang genoeg willen spelen om er eentje tegen te komen :p

Dus voor de volgende keer ga ik expres mezelf dwingen om geen (of slechts een handjevol) extra inhoud toe te voegen. Alleen een sterke basis, een paar sterke regels/mechanismes, en dat moet het spel zijn.

### Les #3 

Dit spel heeft wel een keerpunt gemarkeerd. Het liet me beseffen hoeveel tijd ik wel niet kwijtraak met de _allersimpelste ideeën_ opblazen tot iets gigantisch. En hoe dat traditioneel, de afgelopen jaren, leidde tot projecten die maar 50% af kwamen en nooit het daglicht zagen. 

Het toonde me ook de kracht van dingen een probeersel laten zijn. Dat systeem van dingen doormidden hakken? Ik maakte het voor dit spel en _probeerde uit alle macht_ om het erin te passen (toen ik voelde dat het niet werkte).

Maar toen ik de knop omzette en dacht "misschien niet dit spel, maar dan ooit iets anders", had ik al snel drie of vier _andere_ ideeën die zo'n systeem konden gebruiken. En daaruit vloeide dus Carving Pumpkins. En nog een ander idee dat te goed is om niet te maken. 

Als ik had geprobeerd om Sheepe te maken zoals het originele idee, was het een veel slechter spel geweest, en had ik nooit het systeem kunnen "verbeteren" en "opnieuw implementeren" in een ander (beter) idee.

### Les #4 

**Niet op het laatste moment nog hele systemen omschrijven.** Ongeacht hoeveel beter je nieuwe idee/code/structuur ook is, het is te laat daarvoor.

Zo zaten er allemaal fouten in mijn systeem waarmee ik een "hek" om bepaalde kamers zet (zodat je een minigame moet spelen om het hek te openen en verder te mogen). Het was zo lelijk en inconsistent (soms deed het de verkeerde kanten open, soms juist te weinig) dat ik besloot om het hele systeem opnieuw te bekijken en herschrijven.

Enerzijds was dat een geweldig idee, want nu werkt het (met véél snellere en simpelere code) wél perfect.

Anderzijds heeft dit het spel dus ook weer dagenlang vertraagd, omdat er allemaal problemen kwamen die ik niet had voorzien. (Wederom: ik was inmiddels vergeten dat andere delen van het spel leunden op de oude code, en de details daarvan, dus toen ik die veranderden, kwamen op de ráárste plekken crashes naar boven.)

Dat systeem van de hekken en de minigames is de _kern van het spel_, dus dan kan je dat verwachten. Dus als je puur kijkt met de blik "ik wil het project afmaken" of "ik heb een deadline te halen", is dit een no-go.

## Les #5 

Sorry voor het lange artikel, maar projecten met veel obstakels zijn juist de meest leerzame!

Vanaf nu, als ik een spel maak met _willekeurige inhoud_ (dus bijv. een lijst powerups die kunnen verschijnen), moet ik vanaf het begin de volgende dingen gewoon (netjes) inbouwen:

  * _Kans_ dat dit item wordt gekozen.
  * _Maximum/Minimum_ voor dit item.
  * _Spelersaantal_ waarin het wel/niet voorkomt + eventueel andere kansen voor verschillende spelersaantallen. (Vooral het verschil tussen "solo mode" (1 speler) en "multiplayer" (2+) is vaak van belang.)
  * _Restricties_: specifieke condities waarin het item _niet_ gebruikt mag worden, or juist _heel graag_ wordt gebruikt. Denk aan: veel ruimte? De speler gaat bijna dood? Iemand staat ver voor/achter?
  * _Eigenschappen_: bepaalde eigenschappen die ik kan gebruiken om beter gebalanceerde keuzes te maken. (Zoals een groep waarbij het item hoort, hoe moeilijk het is om te omzeilen, etc.)

Elke keer denk ik "nee, dit project heeft dat allemaal niet nodig" ... en uiteindelijk blijkt het wel allemaal nodig. En dat is logisch, want het is wel héél zeldzaam dat je een spel hebt waarbij alles _exact even belangrijk en toepasbaar en gebalanceerd is in alle mogelijke situaties_. 

Dus gewoon inbouwen, geheel ondersteunen vanaf het begin, bespaart een hoop moeilijkheden.

## Conclusie 

Al met al is dit project vooral een emotioneel keerpunt.

Toen ik enkele maanden geleden een lijst maakte van "onafgemaakte projecten", werd ik steeds depressiever naarmate de lijst langer werd. Oh ja, die ook nog. Oh ja, dat project was óók nooit afgekomen. 

En toen ik dacht dat de lijst écht af was? Toen ging ik douchen en besefte na tien minuten onder een warme straal: "ah shit, zelfs dat spel van laatst ben ik nog vergeten op te schrijven, zelfs dát was niet af!" 

En nu, bij het afmaken, werd ik dus constant herinnerd aan hoe incapabel ik soms kan zijn qua programmeren. Ik heb erg veel ervaring en kennis, maar ben nét niet exact genoeg (van mezelf) om écht sterk te programmeren. En ik werd eraan herinnerd hoe het nog steeds lastig is voor mij om de "fun" te vinden in een idee. 

(Ik werk vooral door omdat het goed is om bezig te blijven. Ik heb nog steeds veel last van alle rotzooi uit mijn jeugd en kan niet oprecht zeggen dat ik ooit "zin" heb in iets. En tja, hoe kan je nou echt leuke spellen maken, als je zelf niks leuk vindt?)

Nou, daar werd ik een beetje verdrietig van, en dat zette me op dit oorlogspad om alles af te krijgen en te publiceren. Perfectionisme weg, grootse doelen weg. Gewoon iets maken dat ik grappig vind, dan afmaken en online zetten.

Als je dit nog steeds leest, ga ik toch het spel aanprijzen :p 

Het is een verrassend goed spel geworden, gezien de weg ernaartoe. Ziet er ook grappig en origineel uit. Ik heb, tijdens de ontwikkeling, heel vaak gewoon het spel opgestart om even rond te hobbelen zonder doel, zo grappig vond ik de beweging. (De vormen hebben zo'n "squishy" animatie als ze tegen dingen aanbotsen, alsof ze van pudding zijn, vind ik hartstikke leuk.) Ideeën zijn niet volledig uitgewerkt of afgewerkt, maar dat moet de perfectionist in mij maar even accepteren.

En met dit spel af, begint de lijst toch redelijk schoon te geraken! We zijn bijna op het punt dat ik met gerust hart iets nieuws kan beginnen. 

(Mede omdat ik sommige projecten definitief heb verplaatst naar de lijst "ga ik nooit meer afmaken", om wat voor reden dan ook. Eén van die projecten, bijvoorbeeld, gebruikt een systeem/code die niet meer wordt ondersteund en die ik niet meer begrijp.)

 [1]: https://pandaqi.com/rolling-in-the-sheepe
 [2]: https://pandaqi.com/carving-pumpkins-and-dwarfing-dumplings