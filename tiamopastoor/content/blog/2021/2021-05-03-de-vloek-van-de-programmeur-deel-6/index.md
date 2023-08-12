---
title: De Vloek van de Programmeur (Deel 6)
author: tiamopastoor
date: 2021-05-03T14:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Ik had laatst een idee voor een spel. Eentje waarbij je alles bestuurt door _symbolen_ te tekenen op het scherm. 

(Je wilt iets weghalen? Teken een kruis eroverheen. Je wilt iets in een bepaalde richting gooien? Teken een pijl in die richting.)

Nou ja, stiekem had ik dat idee eigenlijk al een jaar geleden, maar toen dacht ik dat het veel te moeilijk zou zijn en dat ik sowieso een heel complex systeem daarvoor nodig had. Zo'n 10-20 verschillende symbolen herkennen? Ongeacht hoe lelijk de speler ze tekent? En nog snel ook ( = zonder hapering/vertraging)? Onmogelijk.

Dat was niet zo. Toen ik het bestaan ontdekte van de [dollar family of recognition algorithms][1], waren al mijn problemen ineens opgelost.

Ik had al bepaald dat alle symbolen simpel zouden blijven, te tekenen met één lijn, dus ik pakte het "$1 Algorithm" (voor _1 stroke_). Ik las de code, vertaalde het naar de programmeertaal waarin ik meestal spellen maak, en ta da! Na een uurtje of twee had ik een werkende symbolenherkenner!

Dus ik ben helemaal gelukkig, voer allerlei symbolen in, probeer het systeem opnieuw en opnieuw ... tot ik erachter kom dat hij alleen werkt _als ik exact het symbool teken zoals hij in de computer staat._ Ik begin de lijn ergens anders? Computer kent 'm niet. Ik teken een lijn omgekeerd (dus niet van links naar rechts, maar rechts naar links)? De computer heeft géén idee meer.

Hm. Dat is onhandig. Dus ik zoek verder en kom erachter dat de "$Q Algorithm" beter geschikt zou moeten zijn. Volgorde maakt niet uit! En als bonus staat hij _multistrokes_ toe (dus symbolen uit meerdere lijnen), misschien kan ik daar dan ook wel iets mee.

Dus ik ga weer een paar uur code overschrijven, vertalen, en omzetten naar mijn huidige systeem. En tada! Het werkt! 

Maar ... wacht eens even, waarom kan ik niet meer bewegen met de muis---oh, hij loopt elke keer _een halve seconde vast_ als hij een symbool probeert te herkennen.

Dat is natuurlijk onspeelbaar! Zeker als het spel _meerdere spelers_ moet ondersteunen die _constant allerlei symbolen tekenen_.

De eerste stap is natuurlijk: _multithreading_! Ik gooi al deze code in een apart proces, zodat het hoofdproces van het spel _niet_ vastloopt. Yes, geen haperingen meer!

Hartstikke leuk, maar dat verandert natuurlijk niks aan die grote vertraging tussen tekening => resultaat. Je wilt niet elke keer pas een seconde later zien wat jouw tekening eigenlijk voor resultaat heeft opgeleverd.

Dan de tweede stap: mijn _game engine_ ondersteunt ook andere programmeertalen die sneller zouden moeten zijn, zoals C#. Misschien doe ik onbewust iets stoms in deze taal---elke programmeertaal heeft zo z'n eigenaardigheden die het ineens súperlangzaam maken---en kan ik het zo oplossen!

Dus ik spendeer weer een paar uur met alles vertalen, overzetten, met elkaar verbinden, en ta da! Het ... werkt niet? Hij blijft crashen? Ook al is deze code die ik net heb geschreven sowieso goed en foutloos, want hij geeft geen errors meer aan?

En dat was het moment, beste lezer, dat ik erachter kwam dat mijn computer _om onverklaarbare redenen_ ALLE BESTANDEN had gewist die ik net had getypt. 

Hij had blijkbaar besloten om het project op te schonen en alle bestanden te vervangen door een standaard template (voor nieuwe _classes_). En nee, ik had niet halverwege die twee uur eraan gedacht om een backup te maken, dat doe ik meestal pas als ik na een paar uur werk de computer weer verlaat.

Dus ik ben gefrustreerd :p Ik heb die hele avond geen zin meer iets productiefs te doen, sta op het punt dit spel op te geven, en ga maar mijn Google Drive opruimen en categoriseren. (Want dat was héél hard nodig, geloof me.)

De dag erna raap ik alle moed bijeen, ik verzamel de laatste beetjes motivatie die ik heb, en ik schrijf het opnieuw. Inmiddels kan ik dat algoritme _dromen_, dus ik voer al verbeteringen door, optimalisaties, betere benamingen, etcetera.

Twee uur later heb ik een _prachtig_ stuk code geschreven om dat algoritme te ondersteunen. En het werkt! En het lijkt snel te zijn! Het enige dat ik nog hoef te doen is de juiste informatie doorsluizen vanuit mijn _game engine_ en dan te berekenen hoe lang het algoritme precies duurt.

Huh? Waarom wil hij die informatie niet doorgeven!? Dit hoort te werken! Simpeler dan dit kan het niet! Dit heeft altijd gewerkt!

Er is niks mis met mijn code. Ik ben het drie keer nagelopen en het werkte in z'n eigen omgeving. Maar om een of andere reden willen de bestanden niet met elkaar communiceren.

En dan zie ik het. 

Iets dat ik allang had gezien, iets dat al in mijn achterhoofd zat, maar besloot om _nu_ pas naar voren te komen.

**De makers van het programma hadden het algoritme óók in de taal C# op hun website staan.**

ZE HADDEN AL HET WERK AL GEDAAN! IK HAD HET GEWOON KUNNEN DOWNLOADEN EN IK WAS KLAAR GEWEEST! AAH. AAAAAH. AAAH.

Dus dat heb ik gedaan. De C# folder gedownload, in het project gezet, tien regeltjes code om alles netjes door te geven, en het werkt _perfect_. Beter zelfs dan al mijn vorige pogingen, want ik zie dat zij dezelfde optimalisaties deden als ik (en nog wat meer).

Oftewel, waar ik eerst minstens 500 milliseconden nodig had om een symbool te herkennen, kan hij dat nu binnen maximaal 20 milliseconden ... en nog nauwkeuriger ook, want ik heb de "resolutie" van de symbolen veel hoger staan. 

En het enige dat ik had hoeven doen was de bestaande code downloaden en in het project zetten.

In plaats daarvan heb ik **VIER KEER OPNIEUW** hetzelfde algoritme handmatig ingetypt, getest, en geoptimaliseerd.

Wat leren we hiervan? _Lees dingen. Lees de waarschuwingen, welk werk al gedaan is, waarvoor je iets wel/niet kunt toepassen_. 

(De reden dat mijn bestanden werden gewist heeft, waarschijnlijk, te maken met een kleine waarschuwing die ik uiteindelijk ergens in een hoekje van de documentatie vond. Die zei namelijk dat bepaalde bestanden precies dezelfde naam moesten hebben als de _class_ die erin zit, anders konden er allerlei dingen misgaan. En laat nou net mijn folder gewist zijn nadat ik de bestanden had hernoemd.)

En dat is de reden waarom ik geen informatica ben gaan studeren. Ik zal dit soort domme dingen eeuwig blijven doen. En dat, is de _vloek van de programmeur_.

{{% remark %}}
Overigens is het nog ietsje complexer. Dit spel wordt speelbaar op de mobiel, waarbij spelers rondom het scherm kunnen zitten en dus de symbolen **in verschillende hoeken** zouden kunnen tekenen. Dus ik moest ook nog een stuk code schrijven dat de symbolen automatisch draait zodat ze het beste passen, wat natuurlijk ook langer duurt dan je wilt. En niet al te best was voor de performance, want de hoeveelheid symbolen om te controleren ging hiermee ineens x4.
{{% /remark %}}

 [1]: https://depts.washington.edu/acelab/proj/dollar/index.html