---
title: De Vloek van de Programmeur – Deel 4
author: tiamopastoor
date: 2017-12-21T15:00:19+00:00
language: nl
categories:
  - Miscellaneous

---
Laatst was ik voor de zoveelste keer bezig met programmeren. Het ging allemaal lekker, totdat ik bij een punt aankwam waar ik altijd even van moet sidderen en beven: de **naamgevingshel! **

{{% remark %}}
Mijn spellingschecker suggereert _naamgevingsheli_. Dat klinkt als iemand in een helikopter die door de stad vliegt en op zoek is naar mensen die net een baby hebben gekregen, en dan vanuit de wolken namen toeschreeuwt. 

"Hé! Heb je Muhammed al geprobeerd? Of Joost? Ja, nee, dat is écht een Joost!" "Wat?" *vader laat van schrik de baby vallen* "Geen dank. Dit was de naamgevingsheli!" *geluid van opstijgende helikopter*
{{% /remark %}}

Hoe dan ook, als je programmeert werk je met _variabelen_. Je rekent iets uit, of je haalt een of andere waarde van een database (weet ik veel, bijvoorbeeld: hoe lang je streak is op snapchat), en dat moet je dan ergens in stoppen. Je moet het in een variabele stoppen, en dat ding moet je een naam geven.


Normaal gesproken is dat vrij simpel. Even doorgaand op het slechte voorbeeld van net, je zegt iets van

Maar soms dan wil je meerdere waardes ophalen, die je slechts tijdelijk nodig hebt. Dan krijg je een _naam clash_. 

Vaak los ik dit op door het woordje **temp** ervoor te plakken, van _temporary_. Dus zoiets:

Dat werkt nog prima. Maar soms dan loopt het een beetje uit de hand. Dan heb je loop in loop, statement in statement, en je weet niet waar je nog namen zoeken moet. Vaak dan los ik dat op door een variabele een hele vage naam te geven, en die te hergebruiken.

Bijvoorbeeld, ik noem een variabele "tempValue", en geef die steeds een andere waarde.

Oké, een beetje naar, maar het kan ermee door. 

Het grootste probleem is dat de kans bestaat dat ik op een gegeven moment kwijtraak wat de waarde ook alweer was. 

Dan zet ik misschien **tempValue** ergens aan het begin van een programma naar de waarde 10, en vervolgens vergeet ik dat en ben ik helemaal aan het einde van het programma verbaasd dat mijn code niet werkt. 

{{% remark %}}
En dat is vervelend, zo'n fout opsporen. Want je programma geeft geen error of iets. Het is niet alsof je computer kan zeggen "hé, gast, weet je nog die vage variabele die je eerder hebt gemaakt? Ja, je gebruikt hem hier zomaar nog een keer. Just saying."
{{% /remark %}}

Maar, waar het dan écht bont wordt, zijn programmeertalen waar je niet zomaar je _type_ variabele kan veranderen. Dus, misschien is die tempValue variabele eerst een getal, en wil ik er daarna een stuk tekst van maken, of een boolean (waar of onwaar). Dat kan dan niet. Dus, de enige oplossing is---natuurlijk---overal nummers achter zetten! Ja! Ja!

Dit is een stuk code dat ik ooit (lang geleden) heb getypt:

Dat dus. Simpel toch? Je raakt echt niet verward. Ziet er ook heel overzichtelijk uit enzo.

Needless to say: dit stuk code is snel weer in de prullenbak verdwenen toen ik het de dag erna terug zag. Maar, ik bewaar mijn slechte/niet werkende code altijd in een back-up, voor dit soort momenten en om mezelf te herinneren om zoiets nooit meer te doen.

{{% remark %}}
Voor de geïnteresseerden: ik probeerde de relaties tussen spelers van een gesimuleerd spel een rol te laten spelen. Ik wilde met dit stuk code de speler vinden met de beste relatie van iedereen met de andere spelers. Met _relatie_ bedoel ik hier: vertrouw je de speler, werk je samen of niet, of werk je juist tegen, etc. Hoe hoger het relatiegetal, hoe beter. Voor zover zoiets in getallen uit te drukken is.
{{% /remark %}}

_Hoe lossen we dat op dan?_ Geen idee. Dat is nou juist de vloek van de programmeur. Hij moet leren leven met de lelijkheid van deze code, of de tijd investeren om te leren om het helemaal netjes te doen. 

Ik _weet_ wel dat het beter is om dingen exact te noemen naar wat het voorstelt, maar dat maakt zulke _lange variabelen_ en kost _zoveel werk_! 

{{% example %}}
Bijvoorbeeld, in plaats van "tempStreak" doe je iets als "streakCurrentUserComparedToFriendedUseres". Dat zegt dan exact wat het is ... maar leest ook minder fijn.
{{% /example %}}

Dus geef toe, als jij de keuze hebt tussen heel veel getalletjes achter heel veel variabelen zetten, of je hele programma op een andere manier schrijven ... dan kies je toch gewoon een andere hobby?

{{% remark %}}
Nee, zo erg is het niet. Het wordt pas erg als je een variabele gebruikt die door de programmeertaal zelf al gereserveerd is voor iets. Bijvoorbeeld, een variabele genaamd "new" moet je nooit doen, want dan denkt je taal dat het iets heel nieuws moet maken. Zo'n fout ga je nóóit vinden.
{{% /remark %}}