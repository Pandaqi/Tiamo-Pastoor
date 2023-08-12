---
title: Een Muzikaal Experiment III (Belangrijke Overgangen)
author: tiamopastoor
date: 2018-01-03T16:00:42+00:00
language: nl
categories:
  - Miscellaneous

---
Voor dit derde experiment gaan we op een andere manier naar muziek kijken.

> Muziek is een verzameling _belangrijke noten_, met daartussen _overgangen_.

Wat bedoel ik daarmee? Nou, bijvoorbeeld, in elke maatsoort is de allereerste noot degene met de meeste nadruk. Die voel je het beste. Als die noot er niet in zit, of niet de juiste toon heeft, voel je vaak dat er iets niet klopt. Dus, dit is een hele simpele reeks "belangrijke noten":

[abcjs engraver="{ responsive: 'resize' }"]X:1  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
V:T2 middle=d clef=bass name="Akkoorden" snm="B.I"  
[V:T1] | c4 | B4 | A4 | G4 |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [G,,4c,,4e,,4] |  
[/abcjs]

[abcjs-midi]X:1  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
V:T2 middle=d clef=bass name="Akkoorden" snm="B.I"  
[V:T1] | c4 | B4 | A4 | G4 |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [G,,4c,,4e,,4] |

[/abcjs-midi]

 


In plaats van elke noot de hele maat te laten vullen, kunnen we overgangen plaatsen om de melodie te vormen:

[abcjs engraver="{ responsive: 'resize' }"]X:2  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
V:T2 middle=d clef=bass name="Akkoorden" snm="B.I"  
[V:T1] | c3 d/2c/2 | B2 E G | A3 B/2A/2 | G4 |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [G,,4c,,4e,,4] |  
[/abcjs]

[abcjs-midi]X:2  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
V:T2 middle=d clef=bass name="Akkoorden" snm="B.I"  
[V:T1] | c3 d/2 c/2 | B2 E G | A3 B/2 A/2 | G4 |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [G,,4c,,4e,,4] |  
[/abcjs-midi]

 

## De Belangrijke Noten

Elke maatsoort is op te delen in _beats_. De melodie hierboven staat, net als bijna alle nummers, in 4/4, en heeft dus vier beats.

Zo'n beat kan _belangrijk_ zijn, _relatief belangrijk_, en _zwak_. In vierkwartsmaat is het patroon als volgt:

  * Beat 1: belangrijk
  * Beat 2: zwak
  * Beat 3: relatief belangrijk
  * Beat 4: zwak

Hoe weet ik dat? Omdat een (relatief) belangrijke beat altijd wordt gevolgd door een zwakke beat. Ga maar na: als een drummer net op zijn snare drum heeft geslagen, voelt het raar als hij er meteen wéér op slaat, nog voordat hij zijn vorige slag heeft afgerond. Een sterke beat wordt van nature gevolgd door een zwakke beat.

Zwakke beats, anderzijds, kunnen wel in tweetallen voorkomen. Zo heeft de maatsoort 6/8 zes beats, in het volgende patroon:

  * Beat 1: belangrijk
  * Beat 2: zwak
  * Beat 3: zwak
  * Beat 4: relatief belangrijk
  * Beat 5: zwak
  * Beat 6: zwak

Om het simpel te houden, werken we vanaf nu alleen in 4/4. Oftewel, we hebben 2 plekken waar we belangrijke noten kwijt kunnen: aan het begin van de maat, en halverwege.

De volgende melodie van "belangrijke noten" heb ik gemaakt door random noten uit de toonladder te plaatsen. De akkoorden die eronder lopen zijn van het standaard 4-akkoordenschema: C---G---Am---F

[abcjs engraver="{ responsive: 'resize' }"]X:3  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
V:T2 middle=d clef=bass name="Akkoorden" snm="B.I"  
[V:T1] | c2 e2 | g2 b2 | a2 e2 | f2 d2 |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
[/abcjs]

[abcjs-midi]X:3  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
V:T2 middle=d clef=bass name="Akkoorden" snm="B.I"  
[V:T1] | c2 e2 | g2 b2 | a2 e2 | f2 d2 |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
[/abcjs-midi]

 

## De Overgangen

Heel simpel gezegd zijn er 3 overgangen mogelijk:

  * 1: Je melodie loopt netjes naar de volgende noot toe.
  * 2: Je melodie blijft constant.
  * 3: Je melodie loopt van de volgende noot af.

Ik pas dit ter demonstratie toe in een vast patroon: 1 2 3 1 2 3 1 2 3 ... We krijgen:

[abcjs engraver="{ responsive: 'resize' }"]X:4  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
V:T2 middle=d clef=bass name="Akkoorden" snm="B.I"  
[V:T1] | c d e e | g f b a | a a e d | f g d2 |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
[/abcjs]

[abcjs-midi]X:4  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
V:T2 middle=d clef=bass name="Akkoorden" snm="B.I"  
[V:T1] | c d e e | g f b a | a a e d | f g d2 |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
[/abcjs-midi]

 

Klinkt al redelijk, maar het is saai als alles dezelfde nootlengte heeft. Om even uit te testen, splits ik om en om de 1/4 noot in 1/8 noten.

[abcjs engraver="{ responsive: 'resize' }"]X:5  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
V:T2 middle=d clef=bass name="Akkoorden" snm="B.I"  
[V:T1] | c/2B/2c/2d/2 e e | g/2f/2e/2d/2 b a | a/2a/2a/2a/2 e d | f/2g/2a/2b/2 d2 |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
[/abcjs]

[abcjs-midi]X:5  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
V:T2 middle=d clef=bass name="Akkoorden" snm="B.I"  
[V:T1] | c/2B/2c/2d/2 e e | g/2f/2e/2d/2 b a | a/2a/2a/2a/2 e d | f/2g/2a/2b/2 d2 |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
[/abcjs-midi]

 

Klinkt prima. (Behalve de laatste maat, die doet me een beetje pijn.) Maar goed, ik hoop dat nu het idee duidelijk is. Laten we de beste melodie ooit gaan maken!

## Melodie: De belangrijke noten

Ik heb nog wat wiskundige reeksen over die ik niet eerder kon gebruiken, dus laten we daarmee beginnen.

De **Lazy Caterer's Sequence** vond ik wel een grappige. Het gaat over een cateraar die een taart in _zoveel mogelijk_ stukken wil snijden, maar alleen maar rechte lijnen mag snijden. De reeks gaat als volgt:

> 1, 2, 4, 7, 11, 16, 22, 29, 37, 46, 56, 67, 79, 92, 106, 121, ...

(Ofwel, als je 0 keer snijdt heb je 1 stuk, als je 1 keer snijdt heb je 2 stukken, als je 2 keer snijdt heb je 4 stukken, als je 3 keer snijdt heb je 7 stukken, etc.)

Hoe zetten we dit om in noten? We gaan weer _modulo_ doen. We blijven 8 van elk getal aftrekken, totdat elk getal binnen het interval 0 t/m 7 valt. (Ohja, en ik doe alles -1, want bij 0 beginnen maakt dit allemaal veel makkelijker.) De reeks wordt:

> 0, 1, 3, 6, 2, 7, 5, 4, 4, 5, 7, 2, 6, 3, 1, 0

Oh wauw, dat is symmetrisch. Misschien heb ik wel een gigantisch belangrijke nieuwe wiskundige stelling ontdekt. Ik denk het niet.

Dit pas ik toe op de toonladder C, met dezelfde akkoorden als net, en krijg:

[abcjs engraver="{ responsive: 'resize' }"]X:6  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
V:T2 middle=d clef=bass name="Akkoorden" snm="B.I"  
[V:T1] | c2 d2 | f2 b2 | e2 c'2 | a2 g2 | g2 a2 | c'2 e2 | b2 f2 | d2 c2 |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
[/abcjs]

[abcjs-midi]X:6  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="T.II"  
V:T2 middle=d clef=bass name="Akkoorden" snm="B.I"  
[V:T1] | c2 d2 | f2 b2 | e2 c'2 | a2 g2 | g2 a2 | c'2 e2 | b2 f2 | d2 c2 |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
[/abcjs-midi]

 

**Opmerking:** het is natuurlijk niet waar dat je zomaar elke noot onder elk akkoord kunt zetten. Bijvoorbeeld, de noot C is dissonant met twee noten uit het G-akkoord (B en D). In dit geval lijkt het oké te zijn, maar misschien dat ik dadelijk nog wat noten aanpas.

## Melodie: De overgangen

Nu is het tijd voor overgangen! Ik voel weer een reeks aankomen.

De **Triangle Dot sequence** geeft aan hoeveel "dots" je nodig hebt om een driehoek te maken van bepaalde grootte. Bijvoorbeeld, als je 6 knikkers hebt, kun je een driehoek maken met 3 knikkers in de basis (3 + 2 + 1 = 6). Deze reeks gaat als volgt:

> 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, ...

We willen maar 3 mogelijke getallen (0, 1, of 2), dus we passen weer onze modulo toe:

> 0, 2, 5, 9, 14, 20, 27, 35, 44, 54, 65, 77, 90, 104, ...

> 0, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2

Verdorie. Al mijn patronen zijn té veel een patroon. We doen het er maar mee. Dit toepassen geeft: (Als de overgang zegt dat ik naar een noot toe moet bouwen, maar ik zit al op één noot afstand, voeg ik een kruis toe. Eens kijken wat er gebeurt.)

[abcjs engraver="{ responsive: 'resize' }"]X:7  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
V:T2 middle=d clef=bass name="Akkoorden" snm="A"  
[V:T1] | c ^c d =c | f e b g | e d c' d' | a ^g =g f |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
%  
[V:T1] | g f a b | c' d' e d | b a f g | d e c2 |  
\[V:T2\] \[c,,4e,,4g,,4\] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
[/abcjs]

[abcjs-midi]X:7  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
V:T2 middle=d clef=bass name="Akkoorden" snm="A"  
[V:T1] | c ^c d =c | f e b g | e d c' d' | a ^g =g f |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
%  
[V:T1] | g f a b | c' d' e d | b a f g | d e c2 |  
\[V:T2\] \[c,,4e,,4g,,4\] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
[/abcjs-midi]

 

Mijn enige probleem hiermee is dat er te weinig patroon in zit---het lijkt soms alsof willekeurige noten worden aangeslagen. Ik hoop dat het verbeterd na onze laatste stap: ritme toevoegen. Hiervoor gebruik ik het broertje van de vorige reeks.

## Melodie: Het ritme

De **Square Dot** **sequence** geeft aan hoeveel "dots" je nodig hebt om een vierkant te maken van bepaalde zijdelengte. Bijvoorbeeld, als je 9 knikkers hebt, kun je een vierkant maken met zijde 3. (3 + 3 + 3 = 3 * 3 = 9) De reeks gaat als volgt:

> 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, ... (oplettende lezers zien dat dit gewoon de kwadraten zijn)

Hoe zetten we dit om in een ritme? Laten we eens gek doen, en alleen kijken naar het laatste cijfer van elk getal:

> 1, 4, 9, 6, 5, 6, 9, 4, 1, 0, 1, 4, 9, 6

We maken de volgende indeling: (Ik doe dit half willekeurig, half op basis van hoe vaak een noot voorkomt. Idealiter heeft een melodie vooral 1/4, 1/8 en 1/2 noten. Andere noten, zoals hele en 1/16 noten, komen slechts een aantal keer voor.)

  * 0: hele noten
  * 1: 1/2 noten
  * 4: 1/4 noot
  * 5: 1/16 noten
  * 6: 1/4 noot
  * 9: 1/8 noten

> 1/2, 1/4, 1/8, 1/4, 1/16, 1/4, 1/8, 1/4, 1/2, 1/1, 1/2, 1/4, 1/8, 1/4

**Belangrijk!** We passen dit ritme alleen toe op de overgangsnoten, want, als we het op alles toepassen zijn we onze "belangrijke noten" kwijt. Die kunnen dan namelijk overal zitten, in plaats van op de twee plekken waar wij ze willen hebben. Dus het wordt een beetje passen en meten

Dit geeft ons:

[abcjs engraver="{ responsive: 'resize' }"]X:8  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
V:T2 middle=d clef=bass name="Akkoorden" snm="A"  
[V:T1] | c2 d c | f/2e/2d/2c/2 b g | e z/2 d/2 c' d' | a ^g/2=g/2 g f |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
%  
[V:T1] | g2 a2-|a2 e2 | b a f/2g/2a/2b/2 | d e c2 |  
\[V:T2\] \[c,,4e,,4g,,4\] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
[/abcjs]

[abcjs-midi]X:8  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
V:T2 middle=d clef=bass name="Akkoorden" snm="A"  
[V:T1] | c2 d c | f/2e/2d/2c/2 b g | e z/2 d/2 c' d' | a ^g/2=g/2 g f |  
[V:T2] | [c,,4e,,4g,,4] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
%  
[V:T1] | g2 a2-|a2 e2 | b a f/2g/2a/2b/2 | d e c2 |  
\[V:T2\] \[c,,4e,,4g,,4\] | [B,,4d,,4g,,4] | [A,,4c,,4e,,4] | [A,,4c,,4f,,4] |  
[/abcjs-midi]

 

Daar kan ik best tevreden over zijn. Hieronder de uiteindelijke versie (na wat opschonen enzo)

## Het eindresultaat!

Tada da da.

[abcjs engraver="{ responsive: 'resize' }"]X:9  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
V:T2 middle=d clef=bass name="Akkoorden" snm="A"  
[V:T1] | c2 d c | f/2e/2d/2c/2 b g | e z/2 d/2 c' d' | a ^g/2=g/2 g f |  
[V:T2] | [c,,2e,,2g,,2] e,, g,, | [B,,2d,,2g,,2] d,, g,, | [A,,2c,,2e,,2] c,, e,, | [A,,2c,,2f,,2] c,, f,, |  
%  
[V:T1] | g2 a2-|a2 B2 | c2 f/2g/2a/2b/2 | d e c2 |  
[V:T2] | [c,,2e,,2g,,2] e,, g,, | [B,,2d,,2g,,2] d,, g,, | [A,,2c,,2e,,2] c,, e,, | [A,,2c,,2f,,2] c,, f,, |  
[/abcjs]

[abcjs-midi]X:9  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
V:T1 clef=treble-8 name="Melodie" snm="M"  
V:T2 middle=d clef=bass name="Akkoorden" snm="A"  
[V:T1] | c2 d c | f/2e/2d/2c/2 b g | e z/2 d/2 c' d' | a ^g/2=g/2 g f |  
[V:T2] | [c,,2e,,2g,,2] e,, g,, | [B,,2d,,2g,,2] d,, g,, | [A,,2c,,2e,,2] c,, e,, | [A,,2c,,2f,,2] c,, f,, |  
%  
[V:T1] | g2 a2-|a2 B2 | c2 f/2g/2a/2b/2 | d e c2 |  
[V:T2] | [c,,2e,,2g,,2] e,, g,, | [B,,2d,,2g,,2] d,, g,, | [A,,2c,,2e,,2] c,, e,, | [A,,2c,,2f,,2] c,, f,, |  
[/abcjs-midi]

 

Ik vind het best een mooie melodie geworden. De volgende keer ga ik meer aandacht besteden aan uitgebreidere overgangen. We hebben nu heel simpel 3 basisvormen gebruikt, maar die kun je natuurlijk (samen met ritme) op een hele hoop manieren combineren.

 