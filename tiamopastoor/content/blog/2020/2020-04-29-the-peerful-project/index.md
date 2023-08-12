---
title: The Peerful Project
author: tiamopastoor
date: 2020-04-29T16:00:05+00:00
language: nl
thumb: /uploads/2020/04/peerfulProject-fullLogo.png
categories:
  - Games

---
Ik ben bang dat ik voor de tweede keer in korte tijd een geniaal idee heb bedacht. (Dat meen ik serieus. Ik ben bang dat ik nu al over mijn creatieve piek heen ben.)

Ongeveer een maand geleden kwam ik met de [One Paper Games][1]: volledige bordspellen die je kunt spelen door slechts één A4-tje thuis uit te printen. Zo kan je heel simpel en goedkoop bordspellen spelen met elk spelersaantal dat je maar wilt!

Zodoende kwam ik aan het denken over manieren om dit toe te passen op _computerspellen_. De meeste mensen zijn toch een beetje geïntimideerd door computerspellen, en controllers, en wat ze allemaal moeten installeren of aanschaffen. Het wordt al helemaal een duur grapje als je met 2, 3 of zelfs 4+ mensen tegelijkertijd wilt spelen.

Hoe lossen we dat op?

> **Spellen die een website zijn. Je start het spel op de _computer_ en elke speler bestuurt het met z'n eigen _smartphone_!**

Ik heb besloten al deze spellen gratis beschikbaar te maken onder de naam ["The Peerful Project"][2]. (Klik op de titel om naar de officiële pagina te gaan, waar tevens mooie uitleggende plaatjes en een spellenlijst staan.)

## De gigantische voordelen

Waarom dacht ik dat dit een goed idee was?


  * Omdat het spel een website is, kan elke computer/telefoon het spelen, zonder dat je iets hoeft te installeren.
  * Omdat het spel zelf op de computer plaatsvindt, kan ik gewoon mooie en volledige spellen maken. (Want een computer heeft een groot scherm en is krachtig genoeg voor zware spellen.)
  * Maar omdat je smartphone de controller is, hoef je geen extra materiaal te kopen, geen knopjes uit te leggen, en kan je met elk spelersaantal spelen!

Nu denk je misschien: waarom heeft niemand dat eerder gedaan!? Daarop heb ik twee dingen te zeggen.

Ten eerste is iets soortgelijks wel eerder gedaan, maar dan op een andere manier.

Je hebt de **Jackbox** spellen die je op de mobiel speelt, maar er zijn twee grote verschillen: je moet ze kopen en installeren, en ze zijn "turn-based". Dat betekent dat je niet allemaal tegelijkertijd een poppetje bestuurt, bijvoorbeeld, maar gewoon in rondes van een minuut bijvoorbeeld tekeningen maakt en naar het spel opstuurt.

Ik vind dit leuk, maar ik dacht dat het beter kon. Met mijn idee speel je het spel in "realtime": alles wat je doet op je mobiel, gebeurt direcet op het scherm, en vice versa. Oftewel, het speelt als een echt computerspel.

Ten tweede snap ik ook niet waarom niemand hier eerder iets mee heeft gedaan, want achteraf gezien was het vrij simpel. De hele code voor het verbinden van je _smartphone_ met je _computer_ is slechts enkele honderden regels. In programmeerland is dat belachelijk weinig, want zelfs de simpelste programma's hebben duizenden regels code.

## De kleine nadelen

Vanwege de technologie (en de opzet) die ik hanteer, is elk spel in dit project "lokale multiplayer". Oftewel, iedereen moet bij elkaar in de buurt zijn, het liefst in dezelfde ruimte. Dit is geen "online multiplayer" in de zin dat je met kennissen uit Australië kunt spelen, zoals "Fortnite" of al die andere (voornamelijk) schietspellen.

Persoonlijk, echter, heb ik nooit iets gehad met _online multiplayer._ Ik vind _local multiplayer_ veruit de beste vorm van gamen, zeker voor gezinnen of mensen die meer "lichte" spellen of "party games" willen doen met hun familie/vrienden. De spellen die ik maak zijn ook gericht op die groepen, dus dit project past gewoon precies bij mij en wat ik wil bereiken.

Tevens zijn websites natuurlijk minder krachtig dan originele computerspellen, dus ik kan geen _al_ te zware dingen doen. In mijn ervaring is dat totaal geen probleem, want websitecode wordt haast met de week sneller en beter.

Het laatste nadeel is dat ik de spellen niet kan _beveiligen,_ in de zin dat ik er geen geld voor kan vragen of kan voorkomen dat mensen ze hacken. Dat eerste is vooral mijn eigen probleem (en nee, ik weiger om advertenties in de spellen te stoppen), dat tweede is gewoon spelbederf. Als jij met je familie zo'n spel gaat spelen, en iemand met informaticaverstand besluit tijdens het spel stiekem zijn browser codes te laten uitvoeren, dan---eh---moet je andere familie zoeken denk ik.

Daar staat tegenover dat deze spellen wel _extreem veilig_ zijn op elke andere denkbare manier. Zoals ik dadelijk zal uitleggen, hebben deze spellen geen centrale server. Om het spel te spelen hoef je geen account aan te maken of andere informatie achter te laten---ik weet helemaal _niks_ van mensen die mijn spel spelen. (Ik nodig je dan ook uit om mij feedback te geven middels een comment of een mailtje, want ik heb letterlijk geen idee hoe vaak deze spellen worden gespeeld.)

## Maar, hoe werkt het dan?

Ik zal proberen een korte, niet-technische verklaring te geven.

Websites staan op een _server_. Dat is een soort computer ergens in een kelder die _de hele dag aanstaat._

Iedereen die de URL intypt, maakt een connectie met die server. (Vervolgens vragen ze de server hoe de website eruitziet, die stuurt wat informatie terug, en dat is hoe ons internet grotendeels werkt.)

_Online multiplayer_ spellen gebruiken zo'n server. Het spel zelf vindt plaats op de server---alle spelers zijn daarmee verbonden. Als jij iets doet in het spel, gaat jouw input eerst naar de server toe, die bepaalt wat er gebeurt, en stuurt vervolgens de updates naar de rest.

In dit project gebruik ik een andere, wat oudere techniek. (Het is een beetje een "vergeten" techniek dezer dagen, wat best jammer is.)

Deze techniek heet **peer-to-peer**. In plaats van iedereen met een server te verbinden, verbindt je mensen _direct met elkaar_. Oftewel, als jouw smartphone een peer-to-peer verbinding met de computer heeft, kun je dus _direct_ berichten naar elkaar sturen.

Zoals je kunt verwachten, is dit razendsnel. Hoe dichter je bij elkaar zit, hoe sneller dit gaat. Als je dus in dezelfde kamer zit, of gewoon hetzelfde Wi-Fi netwerk gebruikt, worden berichten in minder dan 5–15 milliseconden verstuurt en ontvangen. Dat is praktisch even snel als wanneer je een muis of toetsenbord zou gebruiken.

Dit is tevens de reden waarom het spel _lokale multiplayer_ is: je kunt dit niet op afstand spelen, want dan wordt de verbinding juist veel _trager_ dan met een server. Ga maar na: als jij direct in verbinding moet blijven met iemand in Australië, hoe lang denk je dat het duurt om die verbinding vast te stellen? En hoe lang voordat signalen worden ontvangen?

_Opmerking:_ ja, dat is waar de naam van dit project vandaan komt. "The Peerful Project" is natuurlijk gewoon een slechte woordgrap op "The Cheerful Project", maar dan met peer-to-peer erin gepropt :p

## Conclusie?

Ga dat spelen!

Ik denk dat deze spellen de toekomst zijn. Het idee alleen al vond ik leuk, in de praktijk blijkt het ook nog supergoed te werken.

Op het moment dat ik dit schrijf heb ik nog maar één volledig spel afgemaakt en online gezet met deze techniek. Dit spel heb ik al vaker getest dan sommige van mijn andere spellen, gewoon omdat het zo _makkelijk_ is om het op te starten en met X aantal mensen te spelen.

Je typt de URL in op de computer. Iedereen typt hem in op z'n mobiel. Je connect met elkaar, en na 5–10 seconden kan je al starten!

> Het spel waarover ik praat is ["Pizza Peers"](https://pandaqi.com/pizza-peers)

Hopelijk kan ik snel de andere spelideeën uitwerken en dit project verder verspreiden. Ik zou het mooi vinden als iedereen---jong en oud, gamer of niet-gamer---met gemak samen een spelletje kon spelen.

 [1]: /blog/2020/2020-03-17-one-paper-games/
 [2]: https://pandaqi.com/the-peerful-project