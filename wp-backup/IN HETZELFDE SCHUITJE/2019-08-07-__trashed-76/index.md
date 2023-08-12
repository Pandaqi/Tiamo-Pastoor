---
title: 'Privé: [Speldagboek] "In hetzelfde schuitje" #8'
author: tiamopastoor
date: 2019-08-07T13:50:00+00:00
language: nl
draft: true
private: true
categories:
  - Games

---
Welkom bij het 8e speldagboek ("devlog") voor mijn spel "in hetzelfde schuitje"!

In dit artikel (en waarschijnlijk ook de komende paar artikelen) gaan we een grote vraag oplossen:

> _Hoe laat je de computer een willekeurige historie/backstory genereren voor een hele wereld?_

Een groot onderdeel van het spel is ontdekken en clues verzamelen (naar onder andere schatkisten). Dit is alleen interessant als de werelden interessant zijn. De computer moet een achtergrond verzinnen, een reden waarom schatkisten liggen waar ze liggen, en die vervolgens in het spel stoppen.

Dit klinkt moeilijk, maar ... dat is het ook :p

Wat ik hieronder ga vertellen was zeker niet de eerste gedachte die ik had. Mijn eerste idee bleek na een half uur superstom, mijn tweede poging viel ook na een paar uur door de mand, en zodoende vond ik dit systeem met vallen en opstaan.

Maar geen zorgen: dit artikel heeft weer vele plaatjes en filmpjes!

(Ik moet kunnen controleren of mijn code werkt. Dus, terwijl de computer de hele wereld bedenkt en in elkaar zet, kan ik gewoon meekijken met alles wat hij doet en bedenkt. Ziet er leuk uit en helpt mij enorm bij het programmeren.)


## De verschillende "units"

Het idee is om de computer een wereld te laten simuleren, totdat deze "klaar" is om te worden opgeslagen en gespeeld.

Oftewel, de computer moet bijhouden wie er allemaal in de wereld leven, en wat ze aan het doen zijn.

Dit zijn alle "units":

  * Spelers 
      * Lijst van _schepen_ die deze speler bezit
  * Piraten 
      * Een piraat = zijn schip (maakt alles simpeler)
  * Monsters

Dit maakt de simulatie meteen makkelijker en realistischer. Als een speler twee schepen heeft, kan de ene aan het ontdekken zijn, en de ander aan het vechten. (Als ik geen onderscheid zou maken, zouden spelers slechts één ding tegelijk kunnen doen.)

## Hoe werkt zo'n simulatie?

In essentie is het heel simpel. (Het uitwerken is een ander verhaal.)

Ik laat de simulatie **tijdstappen** zetten, net zolang totdat ik zeg dat hij mag stoppen. Je begint bij tijd = 0, en je kunt eindigen op tijd = 100, maar ook tijd = 1000, of waar dan ook.

Ook heb ik een lijst **gebeurtenissen** bedacht. Zo heb je de gebeurtenis "place dock", waarmee iemand een haven bouwt. Of de gebeurtenis "natural disaster", waarbij een storm ontstaat.

Deze lijst is onderverdeeld in twee soorten gebeurtenissen: "main events" en "sub events".

  * Main events betreffen grote structurele veranderingen in de wereld. 
      * Bijv: Er komt een nieuwe speler, een nieuwe piraat wordt geboren, een storm ontstaat, etc.
  * Sub events zijn de kleinere gebeurtenissen, vaak uitgevoerd door individuele schepen. 
      * Bijv: Ga ontdekken, bouw een haven, begin een handelsroute, etc.

<PLAATJE VAN SIMULATIE>

Bij elke tijdstap doet de simulatie het volgende:

  * Voer "timed events" uit. Dit zijn gebeurtenissen die van tevoren gepland zijn op een bepaald tijdstip.
  * Ga door de lijst van units. Als een unit een (potentiële) gebeurtenis heeft opgeslagen, voer die uit.
  * Als er niks gebeurt in de wereld, voer een willekeurige "main event" uit.

_Waarom zou je "timed events" gebruiken?_ We willen zeker zijn dat sommige dingen ophouden. Als een piraat wordt geboren, bijvoorbeeld, willen we zeker zijn dat hij na zo'n 80 jaar sterft. De kans is groot dat hij vóór die tijd sterft in een zeegevecht, maar die zekerheid hebben we nooit. Dus, wanneer een piraat ontstaat, wordt zijn sterfdag alvast ingepland. (Dit klinkt alsof je er een interessante science-fiction film van zou kunnen maken. Of alsof ik een hele gemene programmeur ben.)

_Hoe kiezen units hun gebeurtenis?_ Elke gebeurtenis heeft een lijst "potentiële gevolgen". Als je een oorlog begint, bijvoorbeeld, is een potentieel gevolg dat je een zeegevecht begint, maar ook dat je vriendjes gaat zoeken of een leger gaat opbouwen. Deze lijst wordt constant geüpdatet. Als de tijd komt dat een unit moet kiezen, kiest hij willekeurig één gebeurtenis uit deze lijst.

_Waarom het onderscheid tussen "main" en "sub" events?_ Dat heeft vele redenen.

  * Ten eerste houdt het de code snel en overzichtelijk. (Beter twee lijsten met een andere betekenis, dan één gigantische lijst met alles door elkaar heen.)
  * Ten tweede zijn de main events een stuk belangrijker dan de sub events. Het laatste deel van elke tijdstap is "kijken of we een main event kunnen uitvoeren", en zonder dat stukje zou de hele simulatie niet werken. Er zouden te weinig nieuwe spelers ontstaan, er zouden te weinig piraten ontstaan, etc. Door er twee aparte lijsten van te maken, wordt het programmeren een stuk makkelijker.
  * Ten derde had ik gewoon een gevoel dat het een goed idee was. Na tien jaar programmeerervaring heb ik dit patroon---zelfbedachte hiërarchie in spelonderdelen---vaak terug zien komen. We zullen zien :p

## Spelers ontdekken de wereld

We beginnen natuurlijk met de SPELERS.

De eerste potentiële gebeurtenis in de simulatie, is **"new player"**.

Als deze gebeurtenis plaatsvindt, wordt er een nieuwe speler aangemaakt. Elke speler begint op een willekeurige plek (zolang het geen land is en niet van iemand anders is) met één bootje.

Maar dan? Wat zou een "menselijke speler" doen in deze situatie? Ik heb hier veel over nagedacht en mee gestoeid. Ik dacht dat de simulatie wel zou werken als ze gewoon "willekeurig" gebeurtenissen kozen, maar niets bleek minder waar.

Dus toen besloot ik dat elke computerspel hetzelfde doel heeft: **de grootste/beste/rijkste worden**. Alles wat ze doen is gemaakt om hun territorium te vergroten, meer inkomsten te krijgen, een groter leger te krijgen, etc.

Dit heb ik opgebroken in de volgende stappen:

  * Ontdekken
  * Inkomsten
  * Bouwen
  * Vechten

### Wens 1: Ontdekken

De eerste gouden regel van de simulatie is:

> _Als een schip niks gepland heeft staan, gaat deze ontdekken._

Van elke speler wordt een territorium bijgehouden. Alle tegels aan de rand van dit territorium zijn opgeslagen (en worden constant geüpdatet).

_Ontdekken_ betekent niets meer dan dat een schip X aantal randvakjes kiest en die allemaal verkent. (Voor nu staat X op 3 vakjes.)

Vervolgens wordt opgeslagen wat de nieuwe vakjes aan de rand zijn, voor de volgende beurt of andere verkennende schepen.

Doordat we deze code hebben die checkt of tegels verkenbaar zijn, kunnen we meteen opslaan of tegels _bouwbaar_ zijn. Oftewel: kan ik op deze tegel, die ik zojuist heb ontdekt, iets bouwen?

Zo ja, dan wordt dat ingepland als de volgende gebeurtenis.

Zo nee, niks aan het handje.

Hieronder plaatjes van de wereld nadat de computer heeft lopen otndekken.

> De iets donkerdere kleur geeft aan waar HAVENS worden gebouwd, de nog donkerdere kleur geeft aan waar SCHEPEN zich op dit moment bevinden. Voor nu wordt _overal een haven gebouwd_, zolang het maar aan de rand van een eiland is. Maar dat gaat veranderen als we inkomsten meenemen. Ook hebben alle spelers nu maar één schip, maar dat gaat veranderen.

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1562147973/first-exploration-simulation.png" /> 

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1562147973/exploration-simulation-02.png" /> 

_Opmerking:_ het zien van deze territoria geeft me meerdere ideeën. Als we toch deze informatie opslaan in tegels, kan ik een soort "verboden gebieden" of "afgesloten gebieden" maken. Eén van de computerspelers kan misschien bruggen of poorten bouwen aan de rand van zijn territorium. Vervolgens moeten de echte spelers deze eerst kapotschieten, voordat ze erlangs mogen.

_Opmerking:_ die witte lijn aan de bovenkant was een grote fout. Ik wilde een tijdlijn maken waarin de computer precies vertelde wat er gebeurde. Elke vertical lijn is één tijdstap en daaronder stonden dan een paar zinnetjes zoals "player 1 explores!" en "a new player enters the world!" Wat denk je? Binnen 10-20 beurten gebeurt er ZOVEEL per tijdstap, dat het niet meer op het scherm past. Dus dit idee heb ik maar weggegooid. Beetje jammer van de tijd die erin zit, maar goed. De computer spuugt nog steeds die zinnetjes uit, maar niet meer op het scherm (maar naar de _console_, die je op elke pagina kunt openen met F12).

### Wens 2: Inkomsten

Het moet iets kosten (geld/grondstoffen/mankracht) om dingen te bouwen. Zoals je in de simulatie hierboven ziet, zal een computer constant overal havens neerpleuren als inkomsten _niet_ worden meegenomen.

Om dit mee te nemen, moet ik drie stappen zetten:

  * Als de computer niet genoeg grondstoffen heeft, wordt desbetreffende gebeurtenis natuurlijk niet uitgevoerd.
  * De computer moet gebeurtenissen krijgen die hem grondstoffen opleveren.
  * Deze gebeurtenissen moeten realistisch zijn en worden aangeroepen als er een tekort aan grondstoffen is.

_Wat bedoel je met dat laatste punt_? Nou, ik zou kunnen zeggen "computers verdienen elke beurt 5 goud". Zo kom je gaandeweg aan grondstoffen en kun je niet overal havens bouwen. Maar dat is niet leuk of realistisch.

In plaats daarvan kan ik meerdere opties geven:

  * Elke haven die je bouwt, levert iets op. (Voornamelijk goederen.)
  * Elke stad die je bouwt, levert iets op. (Voornamelijk belasting = goud en mensen = mankracht.)
  * Elke handelsroute waarbij een haven van jou is betrokken, levert nóg meer op.
  * Natuurlijk, als je vecht met iemand en je wint, dan krijg je daar iets moois voor terug.
  * Iets waarbij ik de grootte van eilanden/je territorium meeneem.
  * Schepen onderhouden kost natuurlijk juist grondstoffen.

Op deze manier vinden interessante gebeurtenissen plaats, waarmee ze tegelijkertijd de wereld opbouwen.

De tweede gouden regel in de simulatie is:

> _Als je iets kunt bouwen, probeer het dan. Heb je te weinig grondstoffen? Plan een gebeurtenis om meer grondstoffen te krijgen_.

Vooral de tweede zin is belangrijk. Als een speler te weinig grondstoffen heeft, maar niet lang wil wachten, kan hij bijvoorbeeld besluiten om iemand anders aan te vallen om deze te krijgen. Op die manier krijg je automatisch een beetje conflict, maar wel met een goede reden.

[embedyt] https://youtu.be/4LYPbPZkI-o [/embedyt]

_Opmerking:_ ik ben langzaam aan het kijken naar manieren om de kaart mooier en duidelijker te maken. Ik heb nu de eilanden een soort 3D effect gegeven ("pop out") en een kleine schaduw, wat ik al een stuk mooier vind (hoewel de precieze kleur nog moet worden afgesteld).

_Opmerking:_ die vierkantjes die zo "blinken" (ene kleur, andere kleur, ene kleur, andere kleur) zijn havens met een handelsroute. Een schip met een handelsroute gaat namelijk elke beurt naar een andere haven. Als laatste moet ik opmerken dat er al wel gevochten wordt hier, maar dat is zonder enige consequenties, dus daar zie je niks van.

Als laatste is het belangrijk om op te merken dat ik totaal niet bezig ben met de juiste getalletjes invullen. Op dit moment kunnen spelers wel héél makkelijk uitbreiden en bouwen, maar dat is oké.

Hoeveel inkomen iets oplevert, bijvoorbeeld, is nu ingesteld op willekeurige getallen (doorgaans 1 of 2). Dit doe ik omdat er later nog andere elementen bijkomen die deze waardes zullen beïnvloeden.

Piraten, bijvoorbeeld, zullen een doorn in het oog zijn van spelers en met regelmaat hun schepen/havens vernietigen. Misschien worden piraten wel zó sterk dat ik het inkomen uit havens flink omhoog moet gooien. Ik weet het nu nog niet, dus ik doe er nog niks mee.

### Wens 3: Bouwen

De computer wil zoveel mogelijk havens en steden bouwen. Hiermee houdt hij namelijk de positieve cyclus in stand: grondstoffen => bouwen => levert nog meer grondstoffen => nog meer bouwen

Maar er is meer in het leven van een computerspeler. Namelijk, het bouwen van schepen. Ook deze helpen bij die positieve cyclus: meer schepen => sneller ontdekken => meer bouwen per beurt => meer handelsroutes => etc.

> _Hoe werkt het bouwen van schepen?_ Een schip begint bij één van de havens die een speler bezit. Vanaf dat moment telt hij gewoon mee met de rest van de units en doet dezelfde dingen.

Uiteindelijk heb ik ervoor gekozen om deze dingen een gelijke waarde te geven. De computer wil gewoon iets bouwen. De eerste optie die het krijgt, en waarvoor de computer genoeg grondstoffen heeft, wordt gepakt.

In de toekomst kunnen verschillende dingen verschillende kosten hebben. Ook denk ik dat er misschien regels nodig zijn zoals "bouw niet twee havens naast elkaar", maar dat is een zorg voor later.

De derde gouden regel in de simulatie is:

> _Als je iets kunt bouwen, BOUW HET DAN!_

Die was niet zo moeilijk uiteindelijk :p Het filmpje hiervan lijkt veel op die van de vorige stap. Nee, het moeilijkste (en misschien wel meest belangrijke) deel komt nog: computerspelers laten vechten en schepen laten zinken!

[embedyt] https://youtu.be/1XfGEhOyNUU [/embedyt]

### Wens 4: Vechten

Deze simulatie werkt met een systeem van onderlinge relaties.

  * Aan het begin zijn alle relaties neutraal.
  * Als een speler iets doet wat een andere speler stom vindt, verslechtert de relatie.
  * Als de relatie slecht genoeg is, breekt oorlog uit en worden alle schepen ingezet om te vechten.
  * Als de relatie genoeg verbeterd is, stopt het conflict weer.

De vierde gouden regel in de simulatie is:

> _Alles wat je doet, verslechtert of verbetert je relaties.__ Als relaties te slecht zijn, breekt oorlog uit, met alle gevolgen van dien_.

_Wat voor stomme dingen kun je doen?_ Er zijn eigenlijk twee categorieën van stomme dingen. De ene is onschuldig en verslechtert relaties stukje bij beetje; de ander is overduidelijk agressief (en vaak nadat de oorlog al is uitgebroken).

Onschuldig:

  * Een roep om hulp negeren.
  * Diplomatische pogingen negeren/afslaan
  * Een handelsroute (naar/van jouw haven) verbieden.
  * Dichtbij iemands territorium komen (of er zelfs doorheen gaan).
  * Je ziet dat iemands leger (= aantal schepen) flink toeneemt.

Agressief:

  * Een stuk van iemands territorium bevaren/innemen
  * Iets van iemand anders belegeren/overnemen (haven, stad, territorium)
  * Andermans schepen aanvallen.

Elke keer als een relatie verslechtert, wordt gekeken "is dit genoeg voor een oorlog?" Als dat zo is, dan breekt die oorlog uit. Zo niet, dan gebeurt er vooralsnog niks.

Dit is een voorbeeld van hoe oorlog onstaat:

> Je zit ergens middenin de wereld en vanaf twee kanten wordt je ingebouwd. Jouw territorium kan nauwelijks meer groter, terwijl de rest je steeds meer terugduwt. Over tijd wordt de relatie slechter en slechter. Je vraagt of ze je met rust willen laten (diplomatie), maar ze luisteren niet. Op een gegeven moment is de relatie zó slecht dat je begint terug te vechten. Dan is er oorlog.

Hoe dat vechten precies gaat, zal ik dadelijk kort uitleggen. (Als ik dat hier doe, komt dat de leesbaarheid niet bepaald ten goede.)

<FILMPJE>

Er zijn natuurlijk ook dingen die relaties verbeteren. (Ik zeg wel "natuurlijk", maar ik was dit eerst vergeten, daarom staat het hier pas.)

  * Als je samen een handelsroute hebt, wordt de relatie beter.
  * Als je te weinig grondstoffen hebt, kun je vragen om hulp. Als iemand die hulp verleent (en jou grondstoffen geeft), wordt de relatie beter.
  * Als je wordt aangevallen, kun je vragen om hulp. Als iemand die hulp verleent (en met jou meevecht), wordt de relatie beter.
  * Ik heb letterlijk een gebeurtenis "diplomacy" waarbij je gaat onderhandelen met mensen om betere vriendjes te worden.

Vervolgens gebruik ik dit om te bepalen wie er meevechten in een oorlog. Als jij een oorlog begint, zal iedereen die een _positieve relatie_ met jou heeft, ook de oorlog verklaren (aan je tegenstander, niet aan jou natuurlijk).

_Opmerking:_ relaties "verbeteren" of "verslechteren" is een beetje vaag. Voor de computer zijn dit natuurlijk gewoon getalletjes, en zo moet je er ook over denken. Elke relatie begint op 0. Het inpikken van iemands territorium, bijvoorbeeld, verandert dit getal met -2, en als je onder de -10 zit heb je oorlog. Het starten van een gezamenlijke handelsroute, bijvoorbeeld, doet +1, en als je boven de +10 zit ben je dikke vriendjes.

### Oorlogje spelen

Ik had vele plannen voor dit deel van de simulatie, maar uiteindelijk was een groot deel daarvan niet praktisch. Het ene idee was te langzaam, waardoor de simulatie tientallen seconden duurde, wat echt niet kan met een online spel. Het andere idee maakte het te voorspelbaar of juist onrealistisch.

Dus hieronder zal ik uitleggen welk idee het wél is geworden.

Als een oorlog uitbreekt, wordt bepaald wie er allemaal meedoen. Al die spelers geven al hun schepen direct een nieuwe opdracht: **"conquer"**.

Deze opdracht combineert de gebeurtenissen _ontdekken_ en _vechten_, maar dan op een agressieve en efficiënte manier. Schepen gaan op zoek naar spullen van de tegenstander, vernietigen die, en trekken dan vrolijk verder. In feite heeft elk schip dit stappenplan:

  1. _Zoeken:_ De schepen zoeken om zich heen (in een cirkeltje van zo'n 3-5 tegels)
  2. _Innemen:_ Elke tegel die ze vinden die _van hun tegenstander is_, wordt meteen van hen.
  3. _Vechten:_ Ook houden ze bij welke schepen/havens/steden ze allemaal tegenkomen. Vervolgens pakken ze een willekeurig ding uit die lijst en vallen deze aan.
  4. _Verplaatsen_: 
      * Als hun aanval succesvol was, pakken ze één van de tegels aan de rand van hun gebied, en verplaatsen daarnaartoe. (Ze trekken verder door het gebied van de tegenstander.)
      * Als hun aanval niet succesvol was, misschien omdat andermans schip nog een klein stukje "health" over heeft, blijven ze staan om de klus af te maken.

Natuurlijk zijn er nog wat belangrijke zaken om mee te nemen.

  * Het kan zijn dat een schip geen enkele vijandige tegel vindt in zijn omgeving. In dat geval gebeuren fase 2 en 3 niet (want er is niks om te veroveren) en verplaatst het schip alleen maar, in de hoop ergens een keer in het gebied van de tegenstander te komen.
  * Spelers kunnen dus ook havens en steden aanvallen. In dat geval zinkt de haven natuurlijk niet, zoals bij schepen, maar komt het in het bezit van de aanvaller.
  * Als een speler te weinig schepen overheeft, of te weinig territorium, zal die speler zich overgeven en zo de oorlog beëindigen.

Enerzijds is dit een sterk versimpelt model van hoe een echte oorlog/zeeslag gaat, anderzijds is dit al redelijk complex en denk ik dat het goed gaat passen in het geheel.

## Conclusie (voor nu)

Het spelersdeel van de simulatie werkt nu. Dat is al heel wat, maar niet genoeg, aangezien juist _piraten_ (en _zeemonsters_) de grootste rol spelen in dit spel. (Zij verstoppen de schatkisten en creëeren interessante situaties.) Aangezien ik nu al erg lang met deze simulatie bezig was, zonder noemenswaardige vooruitgang te boeken in het spel zelf, besloot ik tijdelijk deze ontwikkeling te onderbreken.

In de volgende _devlog_ praat ik over het plaatsen van schatkisten en het (willekeurig) genereren van aanwijzing naar deze schatkisten.

In de _devlog_ daarna zal ik weer verdergaan met deze achtergrondsimulatie (en langzamerhand de resultaten overdragen naar het echte spel).

Tot dan!