---
title: Een Muzikaal Experiment II (Gray)
author: tiamopastoor
date: 2017-12-15T14:43:17+00:00
language: nl
categories:
  - Miscellaneous

---
Na wat zoekwerk heb ik twee wiskundige reeksen gevonden die niet al te snel uit de hand lopen. In deze post gaan we proberen daarvan een mooie melodie te maken.

**Gray-code:** 0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8, ...

> _Waar komt dit vandaan?_ Als je deze getallen in binair schrijft (dus met 0-en en 1-en), verschillen ze steeds maar één bit van elkaar. (Zo geldt bijvoorbeeld 4 = 0100 en 12 = 1100.)

**Stern's Diatomic Sequence:** 1, 1, 2, 1, 3, 2, 3, 1, 4, 3, 5, 2, 5, 3, 4, ...

> _Waar komt dit vandaan?_ Er is een formule, maar het heeft weinig zin die hier helemaal op te schrijven. Trust me!

## Poging 1

We gebruiken de Gray-code voor de noten. In tegenstelling tot de vorige keer, zeggen we dat het getal 7 de eerste noot van onze toonladder is. Oftewel, de getallen 0-6 zijn de noten van de octaaf _onder_ deze eerste noot. En de andere getallen zijn die van de octaaf _boven_ de eerste note.

We gebruiken wederom C Majeur, omdat die het makkelijkst in te voeren is :p

[abcjs engraver="{ responsive: 'resize' }"]

X:1  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| C D F E | B c A G | a b d' c' | f g e d |

[/abcjs]

[abcjs-midi]

X:1  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| C D F E | B c A G | a b d' c' | f g e d |

[/abcjs-midi]

Daar zit zeker een leuk patroon in. (Wordt alleen een beetje lastig om te zingen.) Zoals je misschien ook wel merkt, wordt geen enkel getal herhaald, dus dat werkt jammer genoeg wel een beetje tegen.

Laten we nu een ritme toevoegen. Bijvoorbeeld, op deze manier:

  * Elke sprong omhoog wordt gedaan door 1/8 noten
  * Elke sprong omlaag wordt gedaan door 1/2 noten

[abcjs engraver="{ responsive: 'resize' }"]

X:2  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| C/2D/2 F2 E-|E B/2c/2 A2 | G2 a/2b/2 d'-|d' c'2 f/2g/2 | e2 d2 |

[/abcjs]

[abcjs-midi]

X:2  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| C/2 D/2 F2 E-|E B/2 c/2 A2 | G2 a/2 b/2 d'-|d' c'2 f/2 g/2 | e2 d2 |

[/abcjs-midi]

Het komt toevallig netjes uit, maar we zitten eigenlijk in de verkeerde maatsoort hiervoor. We switchen over naar een 6/8 maat.

Daarnaast voeg ik het _bounce_ patroon toe. Dat betekent dat je eerst een noot naar beneden gaat, en dan heel snel een grote sprong omhoog. Oftewel, een hele korte 1/8 of zelfs 1/16 noot, gevolgd door een lange hogere noot. (Of, zoals altijd, andersom.)

[abcjs engraver="{ responsive: 'resize' }"]

X:3  
M:6/8  
K:C  
L:1/16  
Q:1/4=100  
| z8 C3 D | F4 E4 B3 c | A4 G4 a3 b | d'4 c'4 f3 g | e4 d4 z4 |

[/abcjs]

[abcjs-midi]

X:3  
M:6/8  
K:C  
L:1/16  
Q:1/4=100  
| z8 C3 D | F4 E4 B3 c | A4 G4 a3 b | d'4 c'4 f3 g | e4 d4 z4 |

[/abcjs-midi]

 

## Poging 2

We gebruiken dezelfde noten als net, maar nu wil ik voor het ritme iets anders proberen. We gebruiken de tweede reeks die we aan het begin hadden. Sterker nog, de getallen zijn laag genoeg dat ik ze rechtstreeks kan overnemen.

[abcjs engraver="{ responsive: 'resize' }"]

X:4  
M:4/4  
K:C  
L:1/8  
Q:1/4=120  
| C1 D1 F2 E1 B3 | c2 A3 G1 a2-|a2 b3 d'3-|d'2 c'2 f4-| f1 g3 e4 | d8 |

[/abcjs]

[abcjs-midi]

X:4  
M:4/4  
K:C  
L:1/8  
Q:1/4=120  
| C1 D1 F2 E1 B3 | c2 A3 G1 a2-|a2 b3 d'3-|d'2 c'2 f4-| f1 g3 e4 | d8 |

[/abcjs-midi]

Oké, de eerste twee maten zijn goed, daarna gaat het mis. (Het is ook lastig om een logisch ritme te maken, als je 3/8 en 5/8 noten all over the place hebt.) Dus we kopiëren het beginritme naar de rest:

[abcjs engraver="{ responsive: 'resize' }"]

X:5  
M:4/4  
K:C  
L:1/8  
Q:1/4=120  
| C1 D1 F2 E1 B3 | c2 A3 G3 | a1 b1 d'2 c'1 f3 | g2 e3 d3 |

[/abcjs]

[abcjs-midi]

X:5  
M:4/4  
K:C  
L:1/8  
Q:1/4=120  
| C1 D1 F2 E1 B3 | c2 A3 G3 | a1 b1 d'2 c'1 f3 | g2 e3 d3 |

[/abcjs-midi]

Dat klinkt prima. Een beetje saai, maar goed, niet te veel verwachten :p

 

## Poging 3

Nu doen we het andersom: we gebruiken de tweede reeks voor de melodie. Als we dezelfde techniek toepassen als voor de eerste melodie, krijgen we iets redelijk voorspelbaars: (tenminste, als we nog geen ritme toepassen)

[abcjs engraver="{ responsive: 'resize' }"]

X:6  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| c c d c | e d e c | f e g d | g e f c |

[/abcjs]

[abcjs-midi]

X:6  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| c c d c | e d e c | f e g d | g e f c |

[/abcjs-midi]

 

Dat kan beter. Laten we de getallen bekijken als intervallen.

  * 1 = eentje omhoog
  * 2 = eentje omlaag
  * 3 = twee omhoog
  * 4 = twee omlaag
  * 5 = drie omlaag

[abcjs engraver="{ responsive: 'resize' }"]

X:7  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| c d e d | e g f a | b g b f | e B d B |

[/abcjs]

[abcjs-midi]

X:7  
M:4/4  
K:C  
L:1/4  
Q:1/4=120  
| c d e d | e g f a | b g b f | e B d B |

[/abcjs-midi]

 

Niet geweldig, maar we gaan er iets mee proberen. De laatste maat klinkt als een niet-afgeronde maat. Oftewel, het klinkt als iets wat aan het begin of in het midden van een melodie zou zitten, maar de melodie nooit afrond. Dus, ik wissel de maten even om.

Daarnaast zijn maat 2 en maat 3 spiegelbeelden van elkaar. (Met als variatie dat maat 3 eentje hoger is.) Dus die wil ik uit elkaar plaatsen, zodat we herhaling krijgen over tijd. (Als je constant direct na elkaar dingen herhaalt, wordt het irritant. Als je het in een patroon over tijd doet, wordt het kunst. Dat zou ik op een tegeltje moeten zetten.)

Als je goed kijkt, zie je dat er steeds een grote sprong zit tussen de laatste noot van de ene maat, en de eerste van de andere. Een manier om deze sprong te verzachten, is door die laatste noot heel lang uit te rekken. Dus dat doen we.

[abcjs engraver="{ responsive: 'resize' }"]

X:8  
M:4/4  
K:C  
L:1/8  
Q:1/4=120  
| e g f a5 | e B d B5 | b g b f5 | c d e d5 |

[/abcjs]

[abcjs-midi]

X:8  
M:4/4  
K:C  
L:1/8  
Q:1/4=120  
| e g f a5 | e B d B5 | b g b f5 | c d e d5 |

[/abcjs-midi]

Dit klinkt heel erg mechanisch, omdat er een gigantisch gebrek aan variatie is. Er moet wat meer leven in. Dus, we gaan toch kijken of we nog een ritme uit een van de reeksen kunnen krijgen.

We pakken de eerste (de gray-code). Het probleem ermee is dat elk getal anders is, en we hebben alles tussen 0 en 15. Dus, ik rond elk getal af naar het dichtstbijzijnde viertal. En dan stelt elk getal een zestiende noot voor. (Bijvoorbeeld, 6 wordt afgerond naar 8, en stelt een 8/16 = 1/2 noot voor.)

Dit geeft:

[abcjs engraver="{ responsive: 'resize' }"]

X:9  
M:4/4  
K:C  
L:1/16  
Q:1/4=120  
| e4 g4 f4 a4 | e4 B8 d4 | B4 b12 | g12 z4 | b16 | f16 | c12 d4-|d8 e8 | d8 z8 |

[/abcjs]

[abcjs-midi]

X:9  
M:4/4  
K:C  
L:1/16  
Q:1/4=120  
| e4 g4 f4 a4 | e4 B8 d4 | B4 b12 | g12 z4 | b16 | f16 | c12 d4-|d8 e8 | d8 z8 |

[/abcjs-midi]

 

Verschrikkelijk.

Oké dan, een laatste poging. We gaan met de Gray-code een ritme maken voor één maat. Voor variatie spiegelen we dit ritme voor elke tweede maat. Hoe doen we dat? We tellen alle getallen bij elkaar op (dat geeft 120). Vervolgens berekenen we voor elk viertal getallen in hoeverre ze aan dat gemiddelde bijdragen:

  * 0, 1, 3, 2 = 6 => 6/120 => (ongeveer) 1/16
  * 6, 7, 5, 4 = 22 => 22/120 => (ongeveer) 1/8 + 1/16
  * 12, 13, 15, 14 = 54 => 54/120 => (ongeveer) 1/2
  * 10, 11, 9, 8 = 38 => 38/120 => (ongeveer) 1/4

 

[abcjs engraver="{ responsive: 'resize' }"]

X:9  
M:4/4  
K:C  
L:1/16  
Q:1/4=120  
| e g3 f8 a4 | e4 B8 d3 B | b g3 b8 f4 | c d3 e8 d4 |

[/abcjs]

[abcjs-midi]

X:9  
M:4/4  
K:C  
L:1/16  
Q:1/4=120  
| e g3 f8 a4 | e4 B8 d3 B | b g3 b8 f4 | c d3 e8 d4 |

[/abcjs-midi]

Het beste dat ik ervan kan maken. Op zich wel prima, maar ik ben vooral benieuwd hoe we onze drie gevonden melodieën samen kunnen gooien tot een nummer. (Waarschijnlijk wordt deze melodie een achtergrond-melodie of iets.)

## En nu allemaal!

De uitdaging: gooi de melodieën samen tot iets wat op een nummer zou kunnen lijken.

Ik merkte nu dat ik een functie probeerde te gebruiken die mijn bladmuziek-programmeertaal nog niet had. Ik kan het ritme van het deuntje niet aanpassen. (Nouja, ik kan het wel, maar dat ding luistert er gewoon niet naar.) Dus vandaar dat dit stukje wat sneller gaat.

[abcjs engraver="{ responsive: 'resize' }"]

X:10  
M:4/4  
K:C  
L:1/16  
Q:1/4=100  
|C2D2F4E2B6|c4A6G6|a2b2d'4c'2f6|g4e6d6|  
|eg3f8a4|e4B8d3B|bg3b8f4| c3d3e2d4C3D|  
M:6/8  
|F4E4B3c|A4G4a3b|d'4c'4f3g|e4d4C3D|  
|F4E4B3c|A4G4a3b|d'4c'4f3g|e4d4z4|  
M:4/4  
|C2D2F4E2B6|c4A6G5B|bg3b8f4| c3d3e2d8|  
|eg3f8a4|e4B12|a2b2d'4c'2f6|g4e6d2C3D|  
M:6/8  
|F4E4B3c|A4G4a3b|d'4c'4f3g|e4d4C3D|  
|F4E4B3c|A4G4a3b|d'4c'4f3g|e4d4z4|

[/abcjs]

[abcjs-midi]

X:10  
M:4/4  
K:C  
L:1/16  
Q:1/4=100  
| C2 D2 F4 E2 B6 | c4 A6 G6 | a2 b2 d'4 c'2 f6 | g4 e6 d6 |  
| e g3 f8 a4 | e4 B8 d3 B | b g3 b8 f4 | c3 d3 e2 d4 C3 D |  
M:6/8  
| F4 E4 B3 c | A4 G4 a3 b | d'4 c'4 f3 g | e4 d4 C3 D |  
| F4 E4 B3 c | A4 G4 a3 b | d'4 c'4 f3 g | e4 d4 z4 |  
M:4/4  
| C2 D2 F4 E2 B6 | c4 A6 G5 B | b g3 b8 f4 | c3 d3 e2 d8 |  
| e g3 f8 a4 | e4 B12 | a2 b2 d'4 c'2 f6 | g4 e6 d4 C D |  
M:6/8  
| F4 E4 B3 c | A4 G4 a3 b | d'4 c'4 f3 g | e4 d4 C3 D |  
| F4 E4 B3 c | A4 G4 a3 b | d'4 c'4 f3 g | e4 d4 z4 |

[/abcjs-midi]

Het past niet allemaal even lekker samen, maar hé, het is iets. De regel is dat ik me aan de patronen moet houden en niet/nauwelijks de melodie en het ritme nog mag aanpassen. (Alleen als het anders echt niet uitkomt, bijv. dat een noot niet meer in de maat past.) Maar op zich vind ik het nog best goed voor een melodie uit twee wiskundige reeksen 🙂

Oftewel, de conclusie is dat dit soort reeksen best heel goed kunnen helpen. Ze kunnen een basis geven waaruit je kunt werken, maar je zult nog steeds zelf de melodieën netjes moeten maken en op elkaar aan moeten laten sluiten. En dat is eigenlijk wel een goeie: naast patronen bestaat muziek natuurlijk uit de _overgangen_ tussen die patronen. Daar wil ik de volgende keren ook mee experimenteren, want dat zou enorm moeten helpen met deze mechanische melodieën mooi in elkaar laten overvloeien.

 

 