---
title: Machine Learning
author: tiamopastoor
date: 2018-04-17T16:00:36+00:00
language: nl
categories:
  - Miscellaneous

---
Machine learning! Iedereen zegt het, niemand weet precies wat het betekent.

Ik volg al jaren ontwikkelingen op het gebied van machine learning. Ik deed alsof ik het volgde vanwege mijn studie wiskunde, maar eigenlijk was ik geïnteresseerd in toepassingen in computerspellen (of software). In al die jaren zag ik de geweldige dingen die het kon bereiken, maar ik dacht dat het een gigantisch moeilijk onderwerp was, en vond nooit de motivatie om er zelf in te duiken en het te proberen.

Tot vandaag.

Ik ga proberen op een begrijpelijke manier uit te leggen wat ik heb gedaan, wat de resultaten zijn, en de problemen onderweg. Hopelijk ben je aan het eind van het stuk gemotiveerd om er zelf iets mee te doen, en anders kun je doen alsof je verstand hebt van machine learning bij je volgende socialiseer-moment.

**Opmerking:** Ik ga dingen niet bepaald diepgaand uitleggen, want dat zou dit stuk veel te lang en ingewikkeld maken. Ik geef een hele algemene beschrijving. Daarnaast snap ik zelfs soms ook maar half waarom iets wel of niet werkt. Als programmeur leeft bij mij altijd het motto: werkende code is belangrijker dan mooie code.

**Opmerking:** Als je wel een iets diepgaander en completer beeld wilt krijgen, raad ik de relatief korte video's van 3Blue1Brown aan: [How do Neural Networks work? (Playlist)](https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)

## Het doel 

Het doel van machine learning is om de computer intelligent te maken. Je geeft het een probleem, en de computer traint zichzelf stukje bij beetje om dat probleem zo goed mogelijk op te lossen. (Ik wil dit, uiteindelijk, toepassen om slimme computerspelers in computerspellen te maken.)

Voor het eerste experiment is de opzet dus zo simpel mogelijk. Hij luidt:

  * Een computerspeler wordt op een willekeurige positie op het scherm gegooid, met een willekeurige snelheid en richting.
  * Wanneer hij over de rand gaat van het veld (dus van het scherm af), gaat hij dood.
  * Het doel is: _probeer zo lang mogelijk op het scherm te blijven_.

Ik ga de computer helemaal niks uitleggen over dit probleem of wat ze moeten doen. Ik laat hem dat zelf uitvinden door hem te "belonen" voor goed gedrag (en dus te straffen voor slecht gedrag). Arme computer.

**Opmerking:** er zit een maximale tijd op elke ronde van _20 seconden_. Als een speler 20 seconden op het veld kan blijven, vertrouw ik erop dat hij dat voor eeuwig kan, en kap ik die simulatie dus af.

## Hoe gaan we dat doen? 

Met behulp van **neurale netwerken** en **evolutie**!

### Neurale Netwerken 

Elke computerspeler maakt zijn beslissingen aan de hand van zijn persoonlijke neurale netwerk. Het heet een neuraal netwerk omdat het een simpele weergave is van het menselijk brein, en het helpt ook om er zo over na te denken. Net als in ons brein, maken we een stel neuronen, waartussen signalen worden afgevuurd (of juist niet). (We zeggen ook wel dat een neuron _activeert_ of _oplicht_ als deze een signaal afvuurt.)

![](/uploads/2018/04/Machine-Learning-Transparent-01-1.png) 

Oftewel, zo'n netwerk is gevuld met computerversies van "neuronen". Deze krijgen de signalen binnen, voeren een berekening uit, en sturen vervolgens een nieuw signaal verder. Dit is machine learning in een notendop: de computer leert zichzelf _welke berekening hij moet uitvoeren bij elke neuron._

Een netwerk heeft meerdere lagen. De tussenlagen en outputlaag bestaan uit die neuronen, maar de inputlaag niet. Die hoeft namelijk geen berekening uit te voeren (maar krijgt rechtstreeks input).

  * **Inputlaag:** hier geef ik de computer enkele feitjes over het spel, zoals zijn snelheid en positie
  * **Tussenlagen:** hier vindt de magie plaats
  * **Outputlaag:** hier staan de mogelijke acties die de computer kan doen, zoals _pijltje omhoog_ en _pijltje omlaag_ indrukken

Een signaal begint bij de inputlaag, kriskrast door de tussenlagen heen, en licht uiteindelijk enkele neuronen bij de outputlaag op. De neuronen die oplichten zijn de acties die door de computer worden uitgevoerd.

_Maar, als dit allemaal getallen zijn, wanneer licht een neuron dan op en wanneer niet?_ Eigenlijk spelen we vals---maar dat is goed! Op elk signaal wordt een functie losgelaten, die alles terugbrengt naar een getal tussen 0 en 1. Eigenlijk kunnen we dus helemaal niet spreken van een neuron die oplicht of niet, want de waarde kan alles zijn tussen 0 en 1. Maar dat is helemaal geen probleem, zo blijkt. De computer kan prima leven met een signaal dat "30%" activeert.

Het enige dat we moeten doen is de _outputlaag_ betekenis geven. In mijn geval zeg ik: een waarde boven 0.5 betekent activeren, een waarde onder 0.5 betekent niet activeren. Dus, stel de eerste neuron van de outputlaag geeft 0.7, dan moet de computer dat knopje wél indrukken.

Aan het einde, wanneer je de visualisatie ziet, wordt alles nog een stuk duidelijker.

**Opmerking:** in deze eerste simulatie staat het aantal neuronen en tussenlagen vast. Er zijn, echter, algoritmes waarbij zelfs dit door de computer bepaalt kan worden. Deze zijn nog krachtiger dan wat ik nu doe, maar gaan mij op het moment de pet te boven, en ik wil eerst de simpele stappen maken.

**Opmerking:** op diezelfde manier heb je machine learning technieken die zonder evolutie werken, en vaak daarom ook een stuk efficiënter zijn, zoals _deep reinforcement learning_. Die technieken ga ik in de toekomst vast nog bekijken, maar voor nu is hele simpele evolutie interessant genoeg :p

### Evolutie 

Aan het begin van de simulatie, maak ik een willekeurige _populatie_. In mijn geval zijn dat 50 computerspelers, elk met een willekeurig neuraal netwerk.

Ik doe 50 "rondes". Hierin test ik één iemand van de populatie, met de methode die ik boven beschreef. Als de ronde voorbij is, sla ik op _hoe lang hij op het scherm is gebleven_.

Dit heet de zogenaamde **fitness**. Hoe langer een speler op het veld blijft, hoe hoger zijn fitness, en dus hoe "sterker" zijn neurale netwerk. Zoals je al verwacht: op een gegeven moment gaan we de netwerken "voortplanten", en dan blijven alleen de fitste spelers over.

Dat voortplanten gebeurt nadat ik alle spelers getest heb---dus na die 50 rondes. Wanneer de voortplanting klaar is, zitten we in een nieuwe "generatie".

### Hoe gaat dit voortplanten? 

Eerst wilde ik zeker zijn dat mijn beste spelers sowieso werden bewaard:

  * Ik sorteer eerst alle spelers op basis van hun fitness.
  * Ik bewaar de beste 10% _zoals ze zijn_. Deze zullen dus niet veranderen of vervangen worden.
  * De andere 90% zullen vervangen worden.
  * Ik laat netwerken voortplanten totdat die 90% vervangen is. (Oftewel, de populatie is weer helemaal aangevuld.)

Nu moet ik even iets extra's uitleggen om de voortplanting duidelijk te maken. Ik zei eerst dat een neuron een _berekening_ uitvoert. Maar hoe doet hij dat? Nou, hij vermenigvuldigt de _signalen_ die hij binnenkrijgt met een stel _gewichten_. Vervolgens telt hij daar nog een _bias_ (dat is gewoon een getal) bij op. De computer kan dus eigenlijk maar twee dingen aanpassen: de gewichten en de bias van elke neuron.

Het voortplanten zelf gaat dan als volgt:

  * Kies twee ouders. Deze zijn willekeurig gekozen, _maar_ netwerken met hogere fitness hebben wel een grotere kans.
  * Mix de twee netwerken; dit heet **crossover**. Oftewel, mix de waardes voor gewichten en de bias. Voor de ene neuron pak je die van de vader, voor de andere pak je die van de moeder, enz.
  * Voeg een **mutatie** toe met een minuscule kans. Een mutatie is niets anders dan een waarde een klein beetje in een bepaalde richting duwen. Bijvoorbeeld, stel de bias van een bepaalde neuron muteert, dan maak ik dat getal net ietsje hoger of lager.

Nu heb je een geheel nieuw netwerk (de "baby" van de twee ouders) om de populatie mee aan te vullen.

![](/uploads/2018/04/Machine-Learning-Voortplanting-02.png) 

**Opmerking:** in eerdere code betekende een mutatie dat ik één getal _compleet veranderde_. Ik verving een gewicht of bias door een willekeurig nieuw getal. Zoals je verwacht: dat werkte niet. Het is ook niet realistisch. Als een kind een bepaalde mutatie heeft, dan is niet ineens de helft van zijn DNA compleet anders dan dat van de ouders. Nee, dan is één specifiek gen veranderd.

### Is dat alles? 

Dat is alles.

## Welke input nemen we? 

Eerst wilde ik hele algemene input gebruiken. Ik wilde de speler slechts zijn eigen **x** en **y **coördinaat geven, en hij moest zelf maar uitvogelen waar de randen van het scherm zaten. Dat was te moeilijk, en te langzaam.

Dus nu geef ik de volgende zes waardes als input:

  * Afstand tot linkerkant scherm
  * Afstand tot bovenkant scherm
  * Afstand tot rechterkant scherm
  * Afstand tot onderkant scherm
  * Snelheid langs de x-as
  * Snelheid langs de y-as

Waarschijnlijk zijn ze niet allemaal nodig, maar ik wilde het simpel en snel houden. Het netwerk kan namelijk zelf ook wel uitvogelen dat, als het ver van de linkerkant is, het dichtbij de rechterkant is. Maar dat kost veel pijn en moeite.

**Opmerking:** eerst gaf ik de input zonder enige "bewerking". Dus, ik gaf de afstand tot de linkerkant van het scherm in _aantal pixels_. Dat is niet de bedoeling, kwam ik achter. Het is de bedoeling dat je input ongeveer _gestandaardiseerd_ is. Je kunt dit zien als: de waarde hangt het grootste deel van de tijd tussen de -1 en 1.

_Waarom moet dit?_ Omdat de rest van het netwerk met signalen werkt tussen de 0 en 1. Op deze manier sluit het veel, veel beter op elkaar aan. Anders zouden we moeten wachten totdat evolutie heeft uitgevonden hoe het dat gigantische getal (bijvoorbeeld een x-coördinaat van 400 pixels) naar een klein getalletje kan krijgen. Dus, nu deel ik het aantal pixels door de helft van de schermbreedte.

**Opmerking:** om deze reden is het vrijwel altijd verstandiger om waar/onwaar data als input te gebruiken, als dat mogelijk is. Je zegt simpelweg 0 = onwaar, en 1 = waar, en je weet zeker dat je waardes niet te groot worden. (Iemand gebruikte dit bijvoorbeeld om de computer Snake te leren spelen. In plaats van de locatie van het stukje eten te geven, gaf hij drie inputs: "is het eten rechts van me?" "is het eten links van me?" "is het eten recht voor mijn neus?")

**Opmerking:** als je werkt met andere input (zoals letters) werkt het ook beter om die om te zetten in 26 waar/onwaar inputs (één voor elke letter), dan één getalleninput. Anders zou de computer zichzelf rare dingen aanleren als "B is het midden van A en C", want "A = 1, C = 3, en B = 2", en dat is niet alleen onjuist, het gooit het leersysteem in de war.

## Welke output nemen we? 

Deze is simpel:

  * Pijltje omhoog
  * Pijltje rechts
  * Pijltje omlaag
  * Pijltje links

Oftewel, de computer kan in alle richtingen bewegen, en niks anders.

## De resultaten! 

Linksboven kun je het hele neurale netwerk van de speler zien, inclusief de getallen en wat wel of niet wordt afgevuurd. Linksonder staat de huidige generatie, ronde, en tijd. Daarnaast staat de gemiddelde scherm tijd van de vorige generatie. Dit is voor mij een hele goede manier om te zien of mijn spelers daadwerkelijk beter worden over tijd.

Laten we beginnen.

{{% video src="machine_learning_1.mp4" %}}

Zoals verwacht doen de eerste paar generaties het verschrikkelijk slecht. De netwerken zijn zo goed als willekeurig, en de gemiddelde tijd dat een speler op het scherm blijft is zo'n 3 seconden.

{{% video src="machine_learning_2.mp4" %}}

Pas vanaf generatie 4 of 5 begint dit getal omhoog te schieten. Nog steeds zijn veel spelers té willekeurig om het goed te doen, maar enkele spelers zijn al in staat om goed lang te overleven.

{{% video src="machine_learning_3.mp4" %}}

Vanaf nu springt de kwaliteit van de spelers een beetje heen en weer, maar vanaf generatie 30 is de gemiddelde tijd bijna de volle 20 seconden. Sommige spelers zijn toevallig slecht gemuteerd, maar de meeste spelers overleven lang. Hoe doen ze dit? Weg gaan van de kant ... en dan stilstaan.

{{% video src="machine_learning_4.mp4" %}}

Hieronder een video van het hele proces, versneld, van generatie 0 tot wanneer ik het genoeg vind geweest. Eens in de zoveel tijd stop ik even om te kijken hoe de huidige spelers bewegen.

{{< youtube BEQE6rID2aQ >}}

Dat stilstaan maakt me een beetje verdrietig. Het is saai. Maar, dit eerste experiment was nodig om te testen of mijn machine learning werkt. En het werkt!

Dus, voor het volgende experiment zal ik zeggen dat de speler _altijd_ vooruit blijft bewegen, en dat de computer slechts kan _sturen_. (Als dat experiment komt. Ik wil dit blog eigenlijk vooral houden voor schrijfwerk en weggaan van wiskunde/programmeren.)

 [1]: /uploads/2018/04/Machine-Learning-Transparent-01-1.png
 [2]: /uploads/2018/04/Machine-Learning-Voortplanting-02.png