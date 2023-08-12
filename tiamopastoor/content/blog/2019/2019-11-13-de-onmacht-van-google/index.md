---
title: De (on)macht van Google
author: tiamopastoor
date: 2019-11-13T18:17:18+00:00
language: nl
categories:
  - Miscellaneous

---
Ik beheer al jarenlang enkele websites:

  * Dit blog (wat veruit de grootste is, maar niet de meest bezochte)
  * Een grote tutorial website ([https://pandaqi.com/tutorials](https://pandaqi.com/tutorials)---tot voor kort de meest bezochte)
  * Mijn spellenwebsite met allerlei gratis computer- en bordspellen ([https://pandaqi.com][1])
  * Mijn professionele portfolio website voor mijn eigen bedrijfje ([https://rodepanda.com][2])

Veel van mijn werk is daarmee afhankelijk van Google: zij sturen personen naar mijn websites, zij zorgen dat mensen mijn werk kunnen vinden. De laatste jaren heb ik mijn bezoekersaantallen almaar zien stijgen en stijgen, en zag dus geen reden tot bezorgdheid ... totdat ik onlangs de Google-omgeving voor ontwikkelaars opende (de "_Google Search Console_")

Op deze omgeving kun je zien hoeveel pagina's van jouw website zijn "geïndexeerd" door Google.

## Wat is hier bijzonder aan?

Well, see for yourself:

![](/uploads/2019/11/google-webmaster-tools_result.webp)

Er waren maar **60 pagina's** geïndexeerd, en **462 uitgesloten**. Toen ik de details ging bekijken, zag ik tot mijn schrik dat eigenlijk alleen de homepage en een paar onbelangrijke artikelen waren opgenomen in Google, en de rest van de website dus **compleet werd genegeerd.** (Dit zijn statistieken voor pandaqitutorials.com, wat in totaal zo'n 600 unieke pagina's hoort te hebben.)

Ik kon mijn ogen niet geloven. Waarom heeft Google niks laten weten? Voor hetzelfde geld zijn mijn websites al twee jaar onvindbaar! Al dat harde werk voor niets!

Dus ik ging op onderzoek uit en vond---na een paar frustrerende uurtjes---de reden dat mijn hele website werd uitgesloten.

Vroeger was het normaal dat websites begonnen met "**www.**" Dit signaleerde het publieke deel van de website, terwijl andere delen van de website (waar misschien privébestanden werden opgeslagen) _niet_ met "www" begonnen. Maar, het internet groeide, en het publieke deel van websites werd groter en belangrijker, dus begon men deze prefix weg te laten.

Dat had ik ook gedaan met mijn website. Het is "pandaqitutorials.com", niet "www.pandaqitutorials.com" Maar mijn provider dacht daar anders over en gaf nog steeds ondersteuning voor de oudere variant.

Het gevolg? Google dacht dat ik de boel aan het belazeren was. Elk artikel stond precies dubbel in hun database ("duplicate content"), dus dachten ze dat ik een spammer was, en besloten de meeste dingen maar niet op te nemen in hun database. Een snelle Google zoekactie bewees dat ze daad bij woord hadden gevoegd: al die 600 pagina's van mijn website waren nauwelijks te vinden, zelfs als ik exact op de titel of de URL zocht.

## Het wordt nog erger

Toen ging ik kijken bij mijn andere website (rodepanda.com):

![](/uploads/2019/11/google-webmaster-tools-2_result.webp)

Wel potverdriedubbeltjes! Het overgrote deel van de website opnieuw genegeerd!

Ook deze keer was de reden die "duplicate content". Sommige van de URLs op mijn portfolio bevatten spaties. Bijvoorbeeld: [https://rodepanda.com/Over Mij/Algemene voorwaarden][3]

Spaties zijn eigenlijk verboden, net zoals enkele andere speciale tekens. Als ze in een URL zitten, worden ze vervangen door "%20".

Ik dacht dat ik slim was geweest: ik had code geschreven om beide varianten te laten werken.

Het gevolg? Google dacht weer dat ik aan het spammen was! De versie mét spaties en de versie zónder spaties gingen naar exact dezelfde pagina, dus werden ze genegeerd.

## Hoe dit op te lossen?

Uiteindelijk was de oplossing relatief simpel. Ik moest een regeltje code toevoegen in beide websites die het volgende vertelde:

> "Kijk, dit is de échte versie van de pagina => als je een andere vindt die erop lijkt, negeer die andere, maar indexeer deze wel"

(Voor de geïnteresseerden: dat regeltje code is een "canonical link" in de HTML.)

Maar die oplossing interesseert me nu even niet. Het gaat me om het feit dat Google besluit om, zonder overleg of waarschuwing, hele websites van het internet te vegen omdat ze zelf de fout maken dubbele pagina's te vinden.

Ik snap echt wel waarom ze het doen. Te veel mensen hebben al jarenlang succes met hun websites puur en alleen vanwege spam en andere vieze trucjes.

Zo las ik ooit een artikel dat stellig beweerde dat je zoveel mogelijk "keywords" in je pagina's moest proppen. (Wil je dat mensen je vinden als ze zoeken op "kapper in Amsterdam"? Zeg dan in elke paragraaf minstens 10 keer de woorden "kapper" en "Amsterdam"!) Die mensen zeggen vaak ook dat je expres hele lange pagina's moet maken met veel inhoud, want dat vindt Google leuk.

En weet je wat het ergste is? Het werkt. Ik heb enkele _superlange_ artikelen over _een heel specifiek onderwerp_, en die artikelen worden veruit het meeste bezocht. Ik snap inmiddels niet eens waar de mensen vandaan komen of wat er zo interessant is, maar die artikelen blijven mijn meeste bezoekers binnenslepen. En waarom? Omdat ze heel vaak dezelfde inhoud herhalen.

Dus ik snap dat Google hier iets tegen wil doen, maar dit is niet de juiste manier. Ik heb toevallig nog heel veel verstand van websites, dat is nou juist een van de dingen waarin mijn eigen bedrijfje is opgericht, maar andere mensen zouden misschien _nooit_ erachter komen dat Google hun website negeert. En als ze het al weten, zullen ze de oplossing niet snel vinden. Zo kan Google je hele bedrijf, je hele product, je hele vereniging eigenlijk van de kaart vegen ... en je zult het nooit weten.

Dat is de macht van Google.

Maar tegelijkertijd vecht Google al jarenlang tegen dezelfde problemen: spammers, mensen die kleine foutjes of gaten vinden in de algoritmes, en daarmee hun websites (die doorgaans vol staan met prut) verheffen boven de écht waardevolle websites. (Zoek maar eens naar dingen als _search engine optimization_: "SEO Tips". Sommige dingen zijn gewoon logisch, andere dingen zijn gewoon smerige trucjes, en het stomme is dat het bijna allemaal werkt.)

En ik denk eigenlijk niet dat Google daar ooit iets tegen kan doen. Althans, niet zonder door te slaan naar de andere kant, en een soort censuur toe te passen op het internet. (Je hebt al van die verhalen dat ze expres een foto van Donald Trump laten verschijnen als je zoekt op "idiot" ofzo, maar ik weet niet in hoeverre dat waar is :p)

Dat is de onmacht van Google.

Oftewel, wat hebben we geleerd? Als je Google gebruikt, wees ietsje kritischer over de resultaten die je voorgeschoteld krijgt. Google heeft algoritmes die ook gewoon grote fouten kunnen maken of de verkeerde kant te veel aandacht geven.

En als je websites beheert, check dan _zeer regelmatig_ even de statitistieken in de _search console_ :p Echt zeer, zeer regelmatig.

 [1]: https://pandaqi.com
 [2]: https://rodepanda.com
 [3]: https://rodepanda.com/Over%20Mij/Algemene%20voorwaarden