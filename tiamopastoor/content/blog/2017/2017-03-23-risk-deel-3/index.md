---
title: Risk – Deel 3
author: tiamopastoor
date: 2017-03-23T19:38:55+00:00
language: nl
categories:
  - Miscellaneous

---
Dit is waar het echte werk begint. Voorheen hebben we allerlei strategieën gesimuleerd en gekeken naar hoe je het beste kunt winnen (of verliezen) als de rest allemaal random speelt. Nu gaan we dingen doen waar je pas echt iets mee kan: alle spelers spelen een strategie, én ik ga het verloop van een potje Risk door de computer laten zien.

Hier alvast een voorproefje: (waarom een voorproefje? omdat er hier en daar kleine dingetjes nog niet klopten, maar ik vond het grappig, omdat zelfs dan strategie 3 nog gewoon het beste is)

{{< youtube Srx705Kztts >}}

Je zult sowieso zien dat geel (speler 4, van de 6) het eigenlijk altijd wel goed doet, wat mij toch weer terugbrengt bij de magie van niet de eerste en niet de laatste speler zijn. Het blijft opvallend.

{{% remark %}}
In eerste instantie had ik geprogrammeerd dat, als je bijvoorbeeld speler 2 moest verslaan, je ook won als iemand anders dat deed. Dat was een beetje oneerlijk, dus in deze uiteindelijke filmpjes en simulaties geldt het volgende: stel iemand anders (noem haar A) verslaat de speler die jij had moeten pakken, dan moet jij vanaf dat moment A verslaan. Klinkt eerlijker, en volgens mij is het in latere versies ook de regel.
{{% /remark %}}

## Een aantal interessante 6-speler spellen

{{< youtube ujJ5IIJSG6w >}}

{{< youtube OLTb1fOj4wo >}}

{{< youtube 4hhTqe-8-lU >}}

{{< youtube acyHpZvYvs0 >}}

{{< youtube IbZSW9EqvCA >}}

{{< youtube U2iBNNsr_GY >}}

## Pff, 6 spelers max? Dat kan beter.

Inderdaad! Laten we eens 10 spelers proberen. (Dat ging overigens verbazingwekkend makkelijk; alleen waren mijn kleurtjes op, dus is het onderscheid misschien iets minder goed te zien.)

{{< youtube gYcmVJhDrKc >}}

{{< youtube 558UolOaKVg >}}

Oké, alle gekheid op een stokje: 20 spelers. Om te bewijzen dat Risk ook een optie is op een bruiloft, begrafenis, of familiefeest. (Alhoewel, begrafenis misschien niet.)

{{< youtube W8_b8QURYF8 >}}

{{< youtube ACvyfNvdWPA >}}

Oké oké, ik heb jullie gehoord. 40 spelers.

{{< youtube Nhip8WwAu2k >}}

Maar hier hebben we op zich weinig aan, want er gebeurt veel te veel, en soms juist helemaal niks (omdat men in een impasse zit waar niemand sterk genoeg is om uit te komen), dus laten we teruggaan naar 6 spelers.

## Nog wat opmerkingen

In een aantal varianten van Risk staat in de spelregels dat spelers altijd minstens 3 nieuwe legers krijgen, en die regel zit er waarschijnlijk in om kleine spelers toch steeds weer een kans te geven. En op zich snap ik dat wel, want we zien tot nog toe steeds in de simulaties dat één of twee spelers al erg snel compleet verdwenen zijn, en al snel duidelijk is wie er gaat winnen. Dus ik ga die regel toevoegen, en kijken wat er gebeurt.

{{< youtube LvAtuQB66J0 >}}

Het eerst wat opvalt is natuurlijk dat potjes _veeeel_ langer duren. Het tweede wat opvalt is dat iedereen heel lang in de race blijft, totdat rood uit het niets lichtblauw en donkerblauw wegvaagt, waardoor geel kans ziet om z'n continent te pakken en te winnen. Het maakt het spel op zich wel leuker, behalve dan dat mensen twee dagen moeten uittrekken voor zo'n potje.

Maar, sowieso 3 legers krijgen per ronde vind ik wat veel, misschien is het beter om altijd minstens 1 leger te geven.

{{< youtube TTLts4ktMr4 >}}

## Wat is nou, definitief, de beste strategie?

Om dit te weten te komen ga nog één monstersimulatie doen: we proberen elke mogelijke samenstelling van strategieën, en kijken dan welke in de meeste gevallen---ongeacht wat de rest doet---het meest effectief is. Omdat dit 6^3 mogelijkheden zijn (3 spelers, 6 strategieën) kost dit veel rekenkracht, en moet ik dus wel het aantal simulaties per combinatie naar beneden halen.

(Ofwel, in plaats van dat we één situatie nu een miljoen keer simuleren en daar het gemiddelde van nemen, doe ik dat nu honderd keer. Het maakt niet bijzonder veel verschil, alleen het eindantwoord is minder nauwkeurig.)

Ready? Go.

### Strategie 1

|           | Speler 1 | Speler 2 | Speler 3 |
| --------- | -------- | -------- | -------- |
| Positie 1 | 821      | 1418     | 1361     |
| Positie 2 | 1608     | 1079     | 913      |
| Positie 3 | 1171     | 1103     | 1326     |

### Strategie 2

|           | Speler 1 | Speler 2 | Speler 3 |
| --------- | -------- | -------- | -------- |
| Positie 1 | 520      | 1572     | 1508     |
| Positie 2 | 1831     | 931      | 838      |
| Positie 3 | 1249     | 1079     | 1254     |


### Strategie 3

|           | Speler 1 | Speler 2 | Speler 3 |
| --------- | -------- | -------- | -------- |
| Positie 1 | 2462     | 555      | 583      |
| Positie 2 | 900      | 1757     | 943      |
| Positie 3 | 238      | 1288     | 2074     |

### Strategie 4

|           | Speler 1 | Speler 2 | Speler 3 |
| --------- | -------- | -------- | -------- |
| Positie 1 | 180      | 1718     | 1702     |
| Positie 2 | 2588     | 514      | 498      |
| Positie 3 | 832      | 1368     | 1400     |

### Strategie 5

|           | Speler 1 | Speler 2 | Speler 3 |
| --------- | -------- | -------- | -------- |
| Positie 1 | 2237     | 697      | 666      |
| Positie 2 | 910      | 1656     | 1034     |
| Positie 3 | 453      | 1247     | 1900     |
  
### Strategie 6

|           | Speler 1 | Speler 2 | Speler 3 |
| --------- | -------- | -------- | -------- |
| Positie 1 | 1508     | 1078     | 1014     |
| Positie 2 | 1473     | 1259     | 868      |
| Positie 3 | 619      | 1263     | 1718     |


_De uitslag is bekend!_ Strategie 3, 5, en 6 zijn het beste, met, zoals eigenlijk al wel verwacht, de overduidelijke winnaar **strategie 3**.

Daarom gaan we er nog eentje simuleren: 6 spelers, allemaal strategie 3.

## Strategie 3 for the win!

(Ik heb geprobeerd een aantal lange potjes op te nemen, maar met strategie 3 gaat verrassend genoeg elk potje erg snel, so that's that.)

{{< youtube REhA3S95Pzo >}}

{{< youtube eJtfRjG53I4 >}}

{{< youtube 7kMZDhyLDks >}}

## Nog meer?!

Nee, ik wil alleen zeggen dat in het vierde deel een korte uitleg komt van hoe ik alles heb gedaan, en een link naar de code en andere bestanden.

WORDT VERVOLGD: [Risk---deel 4][1]

 [1]: /blog/2017/2017-03-25-risk-deel-4/