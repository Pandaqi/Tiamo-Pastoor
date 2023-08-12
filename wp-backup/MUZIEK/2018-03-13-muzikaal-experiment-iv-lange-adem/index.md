---
title: Een Muzikaal Experiment IV (De Lange Adem)
author: tiamopastoor
date: 2018-03-13T15:27:41+00:00
language: nl
categories:
  - Miscellaneous

---
In het vorige deel maakten we een melodie door een aantal "belangrijke noten" neer te zetten, en daartussen "overgangen" te maken. Die overgangen waren heel kort en simpel: of je gaat omhoog, of je gaat omlaag, of je blijft constant. Ook was de overgang nooit langer dan de huidige maat. Dat gaat veranderen!

In dit vierde muzikale experiment kijken we naar meer ingewikkelde patronen, en smeren we ze uit over een langere melodie.

## De Lange Melodie

_Wat bedoel je met een lange melodie?_ Nou, in veel popliedjes heb je vaak dat het hele lied wordt opgevuld met slechts één of twee "melodiefrases". Dus, je hebt één catchy melodie voor het couplet (die tig keer wordt herhaald), en eentje voor het refrein, en dat is het. (Een goed voorbeeld is Clocks van Coldplay. Nadat je de eerste zin hebt gehoord ... wordt exact die melodie alleen nog maar herhaald.)

In andere genres, echter, willen ze nog wel eens met meer frases werken. Dan wordt het couplet opgebouwd uit misschien 4 verschillende frases, allemaal aan elkaar geplakt om één lange melodie te worden. Ik vind dit vaak mooier.

(_Maar wat is een frase?_ Een op zichzelf staand stukje muziek. Ik zie het in dit artikel als een stukje met een (adem)pauze ervoor en erna. In het voorbeeld van net (Clocks van Coldplay) heb je maar één frase die steeds wordt herhaald. Je kunt dit ook als twee frases zien (omdat er een kleine adempauze tussen de eerste en tweede helft van de zin zit), als je wilt. Het is geen heel goed gedefinieerd iets.)


Dus, wij pakken één melodie van 16 maten! _Hoe spreiden we hierover een algemene melodie uit?_ Nou, door om de 2 of 4 maten een belangrijke noot te plaatsen volgens een patroon. Voor de variatie plaats ik één elke 2 maten, en het patroon is als volgt: we gaan eerst omlaag, dan omhoog, en dan blijven we constant.

Dit hele simpele idee ziet er als volgt uit:

[abcjs engraver="{ responsive: 'resize' }"]X:1  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
[V:T1] | c4 | z4 | B4 | z4 |  
[V:T1] | A4 | z4 | G4 | z4 |  
[V:T1] | A4 | z4 | B4 | z4 |  
[V:T1] | c4 | z4 | c4 | z4 |  
[/abcjs]

[abcjs-midi]  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
[V:T1] | c4 | z4 | B4 | z4 |  
[V:T1] | A4 | z4 | G4 | z4 |  
[V:T1] | A4 | z4 | B4 | z4 |  
[V:T1] | c4 | z4 | c4 | z4 |  
[/abcjs-midi]

 

## De gaten opvullen

In de tweede ronde gaan we kleinere patronen gebruiken om de gaten tussen onze noten op te vullen. Misschien is het grappig om ons grote patroon steeds opnieuw te gebruiken: omlaag, omhoog, constant. Dit wordt óf geniaal en dubbelzinnig, óf een chaos :p

[abcjs engraver="{ responsive: 'resize' }"]X:2  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
[V:T1] | c2 B2 | c2 d2 | B2 B2 | A2 G2 |  
[V:T1] | A2 B2 | c2 c2 | G2 F2 | G2 A2 |  
[V:T1] | A2 B2 | c2 c2 | B2 A2 | B2 c2 |  
[V:T1] | c2 c2 | c2 B2 | c2 d2 | c2 c2 |  
[/abcjs]

[abcjs-midi]X:2  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
[V:T1] | c2 B2 | c2 d2 | B2 B2 | A2 G2 |  
[V:T1] | A2 B2 | c2 c2 | G2 F2 | G2 A2 |  
[V:T1] | A2 B2 | c2 c2 | B2 A2 | B2 c2 |  
[V:T1] | c2 c2 | c2 B2 | c2 d2 | c2 c2 |  
[/abcjs-midi]

 

Prima. Beetje saai, wordt aan het einde wat eentonig. Maar dat verandert vast allemaal als we een ritme gaan toevoegen!

## Ritme makes the world go 'round

Ik heb een idee! We gebruiken ons patroon gewoon _nog een keer_. Maar, wat betekent "omlaag" en "omhoog" in het land van ritme? Ik definieer dat nu als volgt:

  * Ons ritme begint bij de basisnoot "4" (een kwartsnoot)
  * Omhoog betekent dat de noot _langer _wordt (dus bijv. 1/4 wordt 1/2)
  * Omlaag betekent dat de noot _korter_ wordt (dus bijv. 1/4 wordt 1/8)
  * Constant betekent natuurlijk dat de nootlengte hetzelfde blijft.

Laten we kijken wat dat ons oplevert.

[abcjs engraver="{ responsive: 'resize' }"]X:3  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
[V:T1] | c c B/2B/2B/2B/2 | c c d d | B B B/2B/2B/2B/2 | A A G G |  
[V:T1] | A A B/2B/2B/2B/2 | c c c c | G G F/2F/2F/2F/2 | G G A A |  
[V:T1] | A A B/2B/2B/2B/2 | c c c c | B B A/2A/2A/2A/2 | B B c c |  
[V:T1] | c c c/2c/2c/2c/2 | c c B B | c c d/2d/2d/2d/2 | c c c c |  
[/abcjs]

[abcjs-midi]X:3  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
[V:T1] | c c B/2B/2B/2B/2 | c c d d | B B B/2B/2B/2B/2 | A A G G |  
[V:T1] | A A B/2B/2B/2B/2 | c c c c | G G F/2F/2F/2F/2 | G G A A |  
[V:T1] | A A B/2B/2B/2B/2 | c c c c | B B A/2A/2A/2A/2 | B B c c |  
[V:T1] | c c c/2c/2c/2c/2 | c c B B | c c d/2d/2d/2d/2 | c c c c |  
[/abcjs-midi]

 

Iets beter, maar nog steeds een beetje saai en eentonig. De grootste reden waarom dit zo "slecht" is, is omdat het aan één stuk doorgaat. Er zitten geen pauzes in, en dus is het geen samenstelling van frases, maar één grote frase met daarin een warboel van noten.

Ik heb geleerd dat dit vaak een probleem is met melodieën: te weinig ruimte. De meeste melodieën worden beter als je ze minder gehaast maakt, en sommige noten wat langer maakt of even ergens anders plaatst, zodat je meer pauze hebt. Dus, dat gaan we ook toepassen op deze melodie

## Meer ruimte is meer beter

Waar mogelijk haal ik noot-repetities weg, en vervang ze door één langere noot + pauze. Ook verschuif ik een aantal noten (door de noten daarvoor korter of langer te maken), want zo creëer je ook ruimte.

[abcjs engraver="{ responsive: 'resize' }"]X:4  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
[V:T1] | c c c/2B/2B/2B/2 | c c/2 d2 z/2 | B B B/2A/2A/2A/2 | A A/2 G2 z/2 |  
[V:T1] | A A A/2B/2B/2c/2-| c/2c/2c/2 c1 c1 z/2 | G G G/2F/2F/2G/2-| G/2A/2A/2 A3/2 z |  
[V:T1] | A A A3/2 z/2 | z/2 A/2A/2A/2B/2B/2c/2c/2 | B B A3/2 z/2 | B B c/2c/2c/2c/2 |  
[V:T1] | c c c/2c/2c/2c/2 | c2 B2 | c/2 d2 z/2 c1 | c3 z1 |  
[/abcjs]

[abcjs-midi]X:4  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
[V:T1] | c c c/2B/2B/2B/2 | c c/2 d2 z/2 | B B B/2A/2A/2A/2 | A A/2 G2 z/2 |  
[V:T1] | A A A/2B/2B/2c/2-| c/2c/2c/2 c1 c1 z/2 | G G G/2F/2F/2G/2-| G/2A/2A/2 A3/2 z |  
[V:T1] | A A A3/2 z/2 | z/2 A/2A/2A/2B/2B/2c/2c/2 | B B A3/2 z/2 | B B c/2c/2c/2c/2 |  
[V:T1] | c c c/2c/2c/2c/2 | c2 B2 | c/2 d2 z/2 c1 | c3 z1 |  
[/abcjs-midi]

 

Beter, beter, maar nog steeds een klein beetje houterig. We zijn nu namelijk het algehele patroon een beetje kwijtgeraakt. Natuurlijk, de "belangrijke noten" zijn er nog, maar de melodie werkt er niet echt naartoe.

_Wat bedoel je daarmee?_ Meerdere keren in de melodie is de "belangrijke noot" exact hetzelfde als de vorige noot, waardoor hij niet opvalt. Andersom, soms dan is er een grote sprong om deze noot te bereiken, en voelt het dus meer als een fout (omdat er niet naar de belangrijke noot toe wordt gebouwd). Dat gaan we nu veranderen.

## De lange melodie terugvinden.

 

[abcjs engraver="{ responsive: 'resize' }"]X:5  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
[V:T1] | c c c/2B/2B/2B/2 | c c/2 d2 z/2 | B B B/2A/2A/2A/2 | A A/2 G2 z/2 |  
[V:T1] | A A A/2B/2B/2c/2-| c/2 c c/2 c1 F | G G G/2F/2F/2G/2-| G/2 G G/2 G/2 z/2 F |  
[V:T1] | A A A3/2 z/2 | z/2 A/2A/2A/2B/2B/2c/2c/2 | B B B3/2 z/2 | z/2 B/2B/2B/2c/2c/2d/2d/2 |  
[V:T1] | c c c/2B/2c/2B/2 | c2 B2 | c/2 d2 z/2 c1 | c3 z1 |  
[/abcjs]

[abcjs-midi]X:5  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
[V:T1] | c c c/2B/2B/2B/2 | c c/2 d2 z/2 | B B B/2A/2A/2A/2 | A A/2 G2 z/2 |  
[V:T1] | A A A/2B/2B/2c/2-| c/2 c c/2 c1 F | G G G/2F/2F/2G/2-| G/2 G G/2 G/2 z/2 F |  
[V:T1] | A A A3/2 z/2 | z/2 A/2A/2A/2B/2B/2c/2c/2 | B B B3/2 z/2 | z/2 B/2B/2B/2c/2c/2d/2d/2 |  
[V:T1] | c c c/2B/2c/2B/2 | c2 B2 | c/2 d2 z/2 c1 | c3 z1 |  
[/abcjs-midi]

 

Prima. Ik ben er niet enorm trots op, want het klinkt nog enigszins mechanisch, en het mist nog iets. Het blijft immers een melodie gevormd uit een aantal vaste patronen en regeltjes. Maar het is gewoon oké, gemiddeld :p

## Het resultaat

De "lange melodie" kan je snel kwijtraken. Waarschijnlijk wordt het duidelijker als je deze versterkt door andere instrumenten dezelfde lijn te laten volgen. (Dus C -> B -> A -> G -> A -> B -> C -> C) Als je meerdere melodieën hebt (meerstemmig) kan je deze ook allemaal dezelfde baslijn laten volgen om het te versterken.

Ik denk, echter, dat onze melodie vooral "matig" is omdat er geen idee achter zit. Ik heb patronen toegepast om iets uit te proberen, maar niet nagedacht over het "verhaal" dat ik wil vertellen met de melodie. Normaal gesproken, namelijk, heb je een bepaalde stemming of onderwerp die je met de melodie wilt behandelen, en dat helpt gigantisch om het levendig te maken. Ook is het vaak de bedoeling dat een couplet vlekkeloos in het refrein overgaat, maar dat je halverwege het couplet nog in een niet-opgeloste spanning zit.

Dus, met dat in het achterhoofd, kunnen we het volgende doen (voor een---hopelijk---beter eindresultaat):

  * Een akkoordenschema of achtergrondmelodie als begeleiding eronder zetten
  * De melodie halverwege in een soort "dal" laten zitten, zodat er tempo in het couplet blijft zitten, en je ergens heen gaat.
  * Het einde van het huidige couplet klinkt eigenlijk meer als een einde van een refrein ... geen idee wat ik daarmee moet. Misschien is dit nummer wel alleen een stuk of 4 coupletten :p Dan werkt het namelijk wel, want elk couplet gaat vlekkeloos over in een volgend couplet. Maar dat is een luie oplossing. In plaats daarvan kunnen we eindigen op het G-akkoord, want dat is het dominante akkoord van de C-toonladder, en wil dus overgaan naar de C.
  * Iets losser zijn in de overgangen. Dus niet alleen met een frase beginnen precies aan het begin van een maat.

Hieruit komt het volgende:

[abcjs engraver="{ responsive: 'resize' }"]X:6  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
V:T2 middle=d clef=bass name="Akkoorden" snm="A"  
[V:T1] | c c c/2B/2B/2B/2 | c c/2 d2 z/2 | B B B/2A/2A/2A/2 | A A/2 G3/2 z/2 F/2 |  
[V:T2] | [c,,4e,,4g,,4] | [c,,4e,,4g,,4] | [B,,4e,,4g,,4] | [B,,4e,,4g,,4] |  
[V:T1] | A A A/2B/2B/2c/2-| c/2 c c/2 c1 F | G G G/2F/2F/2G/2-| G/2 G F/2 F/2 z1 E/2 |  
[V:T2] | [A,,4c,,4e,,4] | [A,,4c,,4e,,4] | [G,,4B,,4d,,4] | [G,,4B,,4d,,4] |  
[V:T1] | F G A3/2 z/2 | z/2 A/2A/2A/2B/2B/2c/2c/2 | B B B3/2 z/2 | z/2 B/2B/2B/2c/2c/2d/2d/2 |  
[V:T2] | [A,,4c,,4e,,4] | [A,,4c,,4e,,4] | [B,,4e,,4g,,4] | [B,,4e,,4g,,4] |  
[V:T1] | d1 c/2 d/2-d2-| d z2 G |  
[V:T2] | [B,,4d,,4g,,4] | [B,,4d,,4g,,4] |  
[/abcjs]

[abcjs-midi]X:6  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
V:T2 middle=d clef=bass name="Akkoorden" snm="A"  
[V:T1] | c c c/2B/2B/2B/2 | c c/2 d2 z/2 | B B B/2A/2A/2A/2 | A A/2 G3/2 z/2 F/2 |  
[V:T2] | [c,,4e,,4g,,4] | [c,,4e,,4g,,4] | [B,,4e,,4g,,4] | [B,,4e,,4g,,4] |  
[V:T1] | A A A/2B/2B/2c/2-| c/2 c c/2 c1 F | G G G/2F/2F/2G/2-| G/2 G F/2 F/2 z1 E/2 |  
[V:T2] | [A,,4c,,4e,,4] | [A,,4c,,4e,,4] | [G,,4B,,4d,,4] | [G,,4B,,4d,,4] |  
[V:T1] | F G A3/2 z/2 | z/2 A/2A/2A/2B/2B/2c/2c/2 | B B B3/2 z/2 | z/2 B/2B/2B/2c/2c/2d/2d/2 |  
[V:T2] | [A,,4c,,4e,,4] | [A,,4c,,4e,,4] | [B,,4e,,4g,,4] | [B,,4e,,4g,,4] |  
[V:T1] | d1 c/2 d/2-d2-| d z2 G |  
[V:T2] | [B,,4d,,4g,,4] | [B,,4d,,4g,,4] |  
[/abcjs-midi]

 

Ik ben er tevreden mee. Als je dit vergelijkt met waarmee we begonnen, is het natuurlijk duizend maal beter. Maar ik bedenk vrijwel altijd veel betere, "meer natuurlijke" melodieën als ik gewoon met de piano/gitaar improviseer, of zelfs als ik in bed lig. Ik denk dan ook dat deze experimenten vooral hulpjes zijn voor als je even vast zit, of niet weet wat er precies mist aan je huidige creatie. Dan helpt het vaak om gewoon een paar patronen of regels toe te passen, en te kijken of het je iets oplevert.

## De volgende keer

De volgende keer ga ik naar complexere patronen kijken. Dus in plaats van alleen "omhoog, omlaag en constant", ga ik die op allerlei manieren mixen totdat ik iets leuks krijg. (Want, de meeste melodieën zijn inderdaad niet zo simpel dat ze alleen omhoog of omlaag gaan.) Zo kan je een sprongetje maken (heel snel omhoog, en dan omlaag; of vice versa), of zigzaggen (tussen twee of drie noten steeds op en neer), of opvullen (je gebruikt eerst het ene patroon, en daarna hetzelfde patroon maar dan precies op de noten die je eerst niet gebruikte), en ga zo maar door.

Dus ja, tot de volgende keer.

 