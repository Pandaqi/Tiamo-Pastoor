---
title: Risk – Deel 2
author: tiamopastoor
date: 2017-03-21T20:00:10+00:00
language: nl
categories:
  - Miscellaneous

---
Dit is het vervolg van een eerdere post waarin ik probeer Risk te simuleren, en daarmee elk spellenavondje minder leuk maak door altijd te winnen. Of niet, we zullen zien of het iets oplevert.

## Vraag 5: Welke strategie is het beste?

Voordat we dat kunnen bekijken, moeten we weten hoe we "strategie-goedheid" meten. Het meest logische is natuurlijk: "hoe vaak de speler met die strategie wint". Als dit meer is dan normaal, is het een goede strategie, als het minder is, is het een slechte strategie.


Als je zo naar gemiddeldes kijkt, echter, kun je een vertekend beeld krijgen (aangezien niemand miljoenen potjes risk gaat spelen). Als gevolg kijk ik ook naar een ordening van winsten: hoe vaak komt elke speler op de eerste plek, de tweede, de derde, et cetera.

De speler die als eerste haar geheime missie haalt wint. Daarna krijgt iedere speler een score (huidige aantal legers + aantal legers per beurt), en wordt daarmee de verdere rangschikking gedaan.

## De Random Strategie

Voor de random strategie ziet de verdeling er als volgt uit.

|           | Speler 1 | Speler 2 | Speler 3 | Speler 4 |
| --------- | -------- | -------- | -------- | -------- |
| Positie 1 | 253      | 254      | 246      | 247      |
| Positie 2 | 302      | 263      | 209      | 226      |
| Positie 3 | 287      | 303      | 263      | 147      |
| Positie 4 | 158      | 180      | 282      | 380      |

We zien dat de verdeling van winst ongeveer gelijk is, maar wat opvalt is een verschuiving van één plek: speler 1 wordt het meeste tweede, speler 2 wordt het meeste derde, speler 3 het meeste vierde ... en gek genoeg wordt speler 4 ook het meeste vierde. Maar, de verschillen zijn niet gigantisch groot, dus het is een goed teken dat de kansen ongeveer gelijk zijn.

Zoals eerder gezegd: de eerdere spelers hebben wel een klein voordeel, aangezien zij als eerst mogen aanvallen of gebieden innemen, maar met de juiste strategie zou dat zo weggeveegd moeten worden.

## De Continenten Strategie

Speler 1 denkt vanaf nu "continenten eerst": hij kijkt waar hij het meeste poppetjes heeft, en probeert dat continent in de wacht te slepen. Dan doet hij hetzelfde bij het volgende continent, enzovoort.

|           | Speler 1 | Speler 2 | Speler 3 | Speler 4 |
| --------- | -------- | -------- | -------- | -------- |
| Positie 1 | 182      | 262      | 284      | 272      |
| Positie 2 | 206      | 275      | 239      | 280      |
| Positie 3 | 326      | 285      | 235      | 154      |
| Positie 4 | 286      | 178      | 242      | 294      |


Hmm, this doesn't look good. Speler 1 is er hard op achteruit gegaan door zich alleen op volledige continenten te focussen. Dus: niet doen. Maar, het is best wel een populaire strategie, dus ik ga even kijken hoe het is als twee mensen het gebruiken (speler 1 en 2):

|           | Speler 1 | Speler 2 | Speler 3 | Speler 4 |
| --------- | -------- | -------- | -------- | -------- |
| Positie 1 | 191      | 210      | 299      | 300      |
| Positie 2 | 252      | 175      | 289      | 284      |
| Positie 3 | 343      | 259      | 225      | 173      |
| Positie 4 | 214      | 356      | 187      | 243      |

Tja, toch maar niet doen.

## De "Ik win dik of verlies hopeloos" strategie

Je valt aan. Elke beurt, zelfs als je leger grote kans heeft het niet te winnen.

|           | Speler 1 | Speler 2 | Speler 3 | Speler 4 |
| --------- | -------- | -------- | -------- | -------- |
| Positie 1 | 132      | 290      | 312      | 266      |
| Positie 2 | 275      | 253      | 221      | 251      |
| Positie 3 | 299      | 297      | 241      | 163      |
| Positie 4 | 294      | 160      | 226      | 320      |

Okee, het wordt er niet bepaald beter op. Maar dat was ook wel te verwachten. Als speler 1 een ronde wint, dan doet hij dat ongelofelijk snel. Maar meestal wint hij niet.

## De "Misschien ben ik saai, maar ik ga zeker niet verliezen" strategie

Je valt alleen aan als je vrijwel zeker bent dat je gaat winnen (twee keer zoveel poppetjes), en verspreidt je poppetjes netjes over je territoria.

|           | Speler 1 | Speler 2 | Speler 3 | Speler 4 |
| --------- | -------- | -------- | -------- | -------- |
| Positie 1 | 487      | 154      | 175      | 184      |
| Positie 2 | 253      | 303      | 200      | 244      |
| Positie 3 | 196      | 320      | 317      | 167      |
| Positie 4 | 64       | 223      | 308      | 405      |

I guess we have a winner :p Dit is wel een indrukwekkende voorsprong, dus ik denk niet dat er nog een strategie overheen kan, maar we zullen kijken. Eerst: wat nu als twee mensen deze verdedigende strategie hebben?

|           | Speler 1 | Speler 2 | Speler 3 | Speler 4 |
| --------- | -------- | -------- | -------- | -------- |
| Positie 1 | 419      | 364      | 85       | 132      |
| Positie 2 | 341      | 361      | 159      | 139      |
| Positie 3 | 193      | 221      | 453      | 133      |
| Positie 4 | 47       | 54       | 303      | 596      |

Okee, dan gaan ze er allebei op vooruit, alhoewel speler 1 dat meer doet dan speler 2. Dit gaat allemaal ten koste van de spelers die niet verdedigend spelen. Dus, de eerste waardevolle tip van deze reeks: BALANS IS ALLES.

## De "Jullie kunnen me lekker niet pakken" strategie

Je kijkt of er territoria zijn met weinig connecties, zodat je daar redelijk veilig zit (men kan niet makkelijk bij je komen). Daar gooi je al je legers neer, en vanuit daar stuur je ze naar andere minder veilige gebieden toe. Een soort hoofdkwartier-idee. Klinkt tactisch toch? Let's see.

|           | Speler 1 | Speler 2 | Speler 3 | Speler 4 |
| --------- | -------- | -------- | -------- | -------- |
| Positie 1 | 128      | 284      | 302      | 286      |
| Positie 2 | 352      | 217      | 215      | 216      |
| Positie 3 | 381      | 253      | 208      | 158      |
| Positie 4 | 139      | 246      | 275      | 340      |

Nope, totaal niet tactisch. Zo zie je maar weer: wie hoofdkwartieren heeft uitgevonden was een slecht militair strateeg.

## De "Ik wil wel balans, maar ik ben ongeduldig" strategie

Hetzelfde als de succesvolle balans-strategie hiervoor, maar je valt al aan als je evenveel of meer legers hebt.

|           | Speler 1 | Speler 2 | Speler 3 | Speler 4 |
| --------- | -------- | -------- | -------- | -------- |
| Positie 1 | 325      | 224      | 210      | 241      |
| Positie 2 | 266      | 279      | 227      | 228      |
| Positie 3 | 283      | 288      | 264      | 165      |
| Positie 4 | 126      | 209      | 299      | 366      |


Nog steeds goed, maar minder goed dan eerst. Dat betekent dat het voorzichtig zijn met aanvallen toch een groot voordeel is, en één van de redenen dat de balans-strategie goed is.

Merk wel op dat dit alleen werkt als je ook de juiste verplaatsing-strategie toepast: je verplaatst alleen van A naar B als achteraf zowel A als B meer legers hebben dan A eerst had.

_Wat?_ Stel A heeft 4 legers, en B heeft er 8. Dan verplaats je er twee, en krijgt A = 6, B = 6 en dat is goed. Beide gebieden hebben namelijk meer dan de 4 legers die A in eerste instantie bevatte. (Als A = 7 en B = 8, dan verplaats je niet, want dat gaat niet goed.)

Oh, ja, men verplaatst altijd de helft van de poppetjes. Dit is simpelweg het meest logisch en redelijk. (Daarbovenop zorgden andere waardes ervoor dat de simulatie erg lang duurde.)

## De "We laten Mexico betalen voor de muur" strategie

Je plaatst al je troepen in grensgebieden, en verplaatst ook al je nieuwe troepen daar naar toe. Als je gaat vechten kijk je eerst of er nog ergens een binnengebied is dat jou van binnenuit kapot zou kunnen maken.

_Wat zijn grensgebieden_? Een grensgebied betekent dat minstens één buurland niet van jou is. (Het is dus de grens tussen jouw territorium en dat van een andere speler.)

_Wat zijn binnengebieden_? Een gebied dat niet van jou is, terwijl alle (of de meeste) buurlanden wél van jou zijn. (In zekere zin is het een "gat" in jouw territorium.)

Ook dit vind ik redelijk goed klinken. (Het zal wel weer tegenvallen, maar goed.)

|           | Speler 1 | Speler 2 | Speler 3 | Speler 4 |
| --------- | -------- | -------- | -------- | -------- |
| Positie 1 | 332      | 206      | 255      | 207      |
| Positie 2 | 269      | 275      | 200      | 256      |
| Positie 3 | 261      | 304      | 275      | 160      |
| Positie 4 | 138      | 215      | 270      | 377      |

Het is een succes! God zij geprezen! Het is bijna net zo goed als de balans-strategie. Zo zie je maar weer: nooit van binnenuit iemand jouw leger kapot laten maken, en in plaats van grenzen sluiten, kun je ze ook gewoon uitbreiden. (Disclaimer: geldt vooralsnog alleen voor Risk.)

## Nu begint het echte werk

Maar maar maar, nu hebben we steeds speler 1 (en soms speler 2) in z'n eentje een speciale strategie laten uitvoeren, en de rest random laten spelen. Ook hebben we steeds maar voor 4 spelers gekeken. Wat ik in het volgende deel ga doen, is alle spelers een strategie laten kiezen, én proberen om een 6-speler spel te visualiseren.

_Opmerking:_ is het jullie ook opgevallen dat speler 3 steeds profiteert als speler 1 het slecht doet? Dat was bij andere spellen die ik simuleerde ook al zo, misschien zit er een speciale magie op de derde speler. Hij wordt niet hard aangepakt, want hij is niet één van de eerste, maar hij heeft ook niet de nadelen van laatste zijn. Of het is toeval, maar dat zou saai zijn.

WORDT VERVOLGD: [Risk---deel 3][1]

 [1]: /blog/2017/2017-03-23-risk-deel-3/