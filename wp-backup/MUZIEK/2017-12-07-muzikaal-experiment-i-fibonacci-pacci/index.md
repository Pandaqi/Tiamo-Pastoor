---
title: Een Muzikaal Experiment I (Fibonacci-pacci)
author: tiamopastoor
date: 2017-12-07T17:33:05+00:00
language: nl
categories:
  - Miscellaneous

---
Voor het eerste experiment houden we het heel simpel. Of, nouja, we gaan geen rare dingen doen en kijken alleen maar naar getallen. We zijn namelijk op zoek naar een _patroon_ om een liedje mee te bouwen, en getallen hebben meer patronen dan wat dan ook. (Dat is niet helemaal waar, maar het was een mooie inleidende zin.)

## Fibonaccipacci

Ik ging op zoek naar een leuke wiskundige reeks die ik zou kunnen gebruiken, maar vond niet zo snel iets leuks. De meeste reeksen lopen veel te snel uit de hand. (Je begint bij 1, en na tientallen termen zit je al met getallen in de honderdduizend.)

Dus we pakken een reeks die iedereen wel kent (Fibonacci!) en veranderen iets. De reeks begint doorgaans bij 1 en 1, en vanaf dat moment is elk getal de vorige twee getallen bij elkaar opgeteld:


> 1  1  2  3  5  8  13  21  34  ...

Om de getallen binnen de perken te houden, doen we modulo 16. Ofwel, als we boven de 16 uitkomen, trekken we 16 van het getal af. (Dus die 21 wordt 21-16 = 5.) (Waarom 16? Omdat één toonladder 8 noten kent, vandaar het woord _octaaf_, en ik wil omhoog en omlaag gaan.)

> 1  1  2  3  5  8  13  5  2  7  9  0  9  9  2  11  13  8  5  13  2 ...

Dat is meer dan genoeg. Zo lang hoeft de melodie niet te zijn :p

_Wat betekenen deze getallen? _Nou, bijvoorbeeld, we kunnen de getallen opsplitsen en zeggen dat:

  * Even getallen betekenen een interval omhoog. (Dus, 8 = 4 noten omhoog in de toonladder.)
  * Oneven getallen betekenen een interval omlaag. (Dus 13 = (14/2) = 7 noten omlaag in de toonladder.)

Dan krijgen we dit:

[abcjs engraver="{ responsive: 'resize' }"]

X:1  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| c B A B | A F c D | B, C G, C, |

[/abcjs]

[abcjs-midi]

X:1  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| c B A B | A F c D | B, C G, C, |

[/abcjs-midi]

Dit is een ramp. We hebben veel te veel oneven getallen. Laten we iets nieuws proberen:

  * Stel 0 is de tonic noot, dus C in dit geval. (Omdat we in de toonladder van C zitten, wel zo makkelijk.)
  * Dan stellen even getallen de noten uit de octaaf _boven_ de tonic voor.
  * En oneven getallen noten uit de octaaf _onder _de tonic.

 

[abcjs engraver="{ responsive: 'resize' }"]

X:2  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| c B B d | A G f C | G d F E | c E E d | D C f G | C d z2 |

[/abcjs]

[abcjs-midi]

X:2  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| c B B d | A G f C | G d F E | c E E d | D C f G | C d z2 |

[/abcjs-midi]

Mwah, ietsiepietsie beter. Laten we de tweede component toevoegen: het ritme.

## Fibonaccipacci + Ritme

Nou hebben we in zekere zin twee opties:

  * Het ritme laten bepalen door de noten die we hebben. (Bijvoorbeeld, als je twee dezelfde noten na elkaar hebt, moeten dat allebei 1/8 noten zijn)
  * Het ritme laten bepalen door een nieuwe reeks.

Let's try them both!

### Ritme door eigen noten

Eerst op basis van de reeks die we al hebben. Laten we de volgende regels instellen:

  * Twee noten na elkaar die hetzelfde zijn, óf maar één noot verschillen, moeten allebei 1/8 zijn.
  * Twee noten die meer dan een octaaf verwijderd zijn, moeten allebei 1/2 zijn.
  * De rest is 1/4.

[abcjs engraver="{ responsive: 'resize' }"]

X:3  
M:4/4  
K:C  
L:1/8  
Q:1/4=120  
| c2 BB d2 AG | f4 C4 | G2 d2 FE c2 | EE d4 D2-| D2 C f2 G C2 | d4 z4 |

[/abcjs]

[abcjs-midi]

X:3  
M:4/4  
K:C  
L:1/8  
Q:1/4=120  
| c2 BB d2 AG | f4 C4 | G2 d2 FE c2 | EE d4 D2-| D2 C f2 G C2 | d4 z4 |

[/abcjs-midi]

Hierin zie ik iets verscholen dat werkt. In zekere zin heb je aan het begin twee frases: maat 1 + 2, en maat 3 + 4. De eerste frase gaat wat op en neer en eindigt dan laag (op een middel C). De tweede frase gaat wat op en neer, en eindigt dan hoog (op een D). Dit is een mooi patroon.

We kunnen dit versterken door die frase die op en neer gaat meer op elkaar te laten lijken. Én, door die middel C wat hoger te maken, en zo het contrast ietsje te verzachten. (Anders klinkt het alsof een aap wild een stel willekeurige noten indrukt.)

Hieronder het resultaat (met willekeurige semi-pretentieuze tekst om in je hoofd mee te zingen)

[abcjs engraver="{ responsive: 'resize' }"]

X:4  
M:4/4  
K:C  
L:1/8  
Q:1/4=120  
| c2 FE d2 AG | f4 A4 | G2 d2 FE c2 | EE d4 z4 |  
W: Zon-der de maan kan ik niets lief nee zon-der de weg en de wil  
| c2 FE d2 AG | f4 A4 | G2 d2 FE c2 | EE d4 z4 |  
W: Zon-der jouw hand wil ik niets lief nee vraag niet om hulp want ik slaap[/abcjs]

[abcjs-midi]

X:4  
M:4/4  
K:C  
L:1/8  
Q:1/4=120  
| c2 FE d2 AG | f4 A4 | G2 d2 FE c2 | EE d4 z4 |  
W: Zon-der de maan kan ik niets lief nee zon-der de weg en de wil  
| c2 FE d2 AG | f4 A4 | G2 d2 FE c2 | EE d4 z4 |  
W: Zon-der jouw hand wil ik niets lief nee vraag niet om hulp want ik slaap

[/abcjs-midi]

Niet super, maar het werkt op zich wel.

### Ritme door een nieuwe reeks

Wat dacht je van Fibonacci, maar dan modulo 4? Ofwel:

> 1  1  2  3  1  0  1  1 (en het herhaalt zich tot het eind der tijden)

Wat stelt alles voor?

  * 0 = Achtste noot
  * 1 = Kwart noot
  * 2 = Halve noot
  * 3 = Hele noot

We krijgen (toegepast op de originele noten):

[abcjs engraver="{ responsive: 'resize' }"]

X:5  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| c B B2 | d4 | A G/2 f C z/2 | G d F2 | E4 | c E/2 E d z/2 | D C f2 | G4 | C d/2 z/2 z2 |

[/abcjs]

[abcjs-midi]

X:5  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| c B B2 | d4 | A G/2 f C z/2 | G d F2 | E4 | c E/2 E d z/2 | D C f2 | G4 | C d/2 z/2 z2 |

[/abcjs-midi]

Daar kan ik ook wel iets mee: er zitten veel patronen in. (Wat natuurlijk ook komt doordat onze reeks repeteert.)

  * De verre sprong omhoog, gevolgd door de verre sprong omlaag.
  * Dat niet alleen---de eerste keer dat het gebeurd (in maat 3) is de sprong groter dan de tweede keer (in maat 4), wat zorgt voor een dalend patroon in het algemeen. (Ik noem dat zelf de toeter: de noten worden als het ware geklemd in een toeter die groot begint en steeds kleiner wordt naar rechts toe. Hoewel het ook andersom kan, natuurlijk.)
  * De 1/2 noot, die mooi wordt gevolgd door de hele noot.

[abcjs engraver="{ responsive: 'resize' }"]

X:6  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| c E/2 E d z/2 | A G/2 f C z/2 | G d F2 | E4 |  
| c E/2 E d z/2 | A G/2 f C z/2 | G d F2 | E4 |

[/abcjs]

[abcjs-midi]

X:6  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| c E/2 E d z/2 | A G/2 f C z/2 | G d F2 | E4 |  
| c E/2 E d z/2 | A G/2 f C z/2 | G d F2 | E4 |

[/abcjs-midi]

 

## En nu allemaal!

We gaan proberen om een nummer te maken, terwijl we zo min mogelijk veranderen aan onze melodieën gevonden met de reeksen. Want, natuurlijk kan ik nu gaan experimenteren en een hoop nootjes verschuiven totdat ik iets heb wat ik heel goed vind klinken, maar dat is tegen het hele idee van deze posts. Dus dat doen we niet.

Mijn excuses voor de lelijke akkoorden bij dit stukje. Ik moet nog uitvogelen hoe deze hele bladmuziek-programmeertaal werkt.

[abcjs engraver="{ responsive: 'resize' }"]

X:7  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| "C"c F/2E/2 d A/2G/2 | "F"f2 A2 | "C"G d F/2E/2 c | "Dm"E/2E/2 d2 z2 |  
| "C"c F/2E/2 d A/2G/2 | "F"A G/2 f C z/2 |  "G"G d F2 | E4 |  
| "C"c F/2E/2 d A/2G/2 | "F"f2 A2 | "C"G d F/2E/2 c | "Dm"E/2E/2 d2 z2 |  
| "C"c F/2E/2 d A/2G/2 | "F"A G/2 f C z/2 | "G"c F/2E/2 F2 | E4 |

[/abcjs]

[abcjs-midi]

X:7  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| "C"c F/2E/2 d A/2G/2 | "F"f2 A2 | "C"G d F/2E/2 c | "Dm"E/2E/2 d2 z2 |  
| "C"c F/2E/2 d A/2G/2 | "F"A G/2 f C z/2 |  "G"G d F2 | E4 |  
| "C"c F/2E/2 d A/2G/2 | "F"f2 A2 | "C"G d F/2E/2 c | "Dm"E/2E/2 d2 z2 |  
| "C"c F/2E/2 d A/2G/2 | "F"A G/2 f C z/2 | "G"c F/2E/2 F2 | E4 |

[/abcjs-midi]

 

## Conclusie

Het eindresultaat is op zich redelijk. Niet heel daverend, ook niet helemaal rotzooi. Ik heb het melodietje nu ook in mijn hoofd zitten, maar dat komt misschien omdat ik het de afgelopen 2 uur de hele tijd opnieuw heb geluisterd voor dit artikel.

Het geeft in ieder geval hoop voor de toekomst. Volgende keer proberen we wel weer een nieuwe reeks. Misschien bedenken we er zelf wel eentje, dat is nog handiger.