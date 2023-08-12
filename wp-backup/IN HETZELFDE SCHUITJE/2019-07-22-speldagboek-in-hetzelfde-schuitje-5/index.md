---
title: '[Speldagboek] "In hetzelfde schuitje" #5'
author: tiamopastoor
date: 2019-07-22T16:00:34+00:00
language: nl
thumb: /uploads/2019/06/seamless-map-02_result.webp
enclosure:
  - |
    |
        https://res.cloudinary.com/nietdathetuitmaakt/video/upload/v1560604990/Testing_Pirate_Maps_-_Firefox_Developer_Edition_6_14_2019_14_23_19.mp4
        20479736
        video/mp4
        
  - |
    |
        https://res.cloudinary.com/nietdathetuitmaakt/video/upload/v1560669378/Testing_Pirate_Maps_-_Firefox_Developer_Edition_6_16_2019_09_15_23.mp4
        27022750
        video/mp4
        
categories:
  - Games

---
Welkom bij het vijfde speldagboek ("devlog") voor mijn spel "In hetzelfde schuitje".

De vorige artikelen heb ik heel leuk allemaal ideeën uitgelegd over de wereld (de plaatsing van havens, hoe schepen hun weg naar de havens vinden, zeemonsters, etc.). Tijdens het programmeren, echter, kom je vaak vervelende dingen tegen, of juist plekken waar je iets zwaar kunt verbeteren.

In dit artikel ga ik vertellen wat er allemaal is veranderd/verbeterd tijdens het implementeren van de "bruisende wereld" van dit spel. En, voor het eerst zijn er korte filmpjes van het spel! (Dit lijkt heel wat, maar die filmpjes waren alleen om te testen of de computerschepen goed de routes volgden. Desondanks is dat al meer dan alleen wat plaatjes van het spel.)

## Een naadloze kaart

In het allereerste artikel legde ik uit hoe ik een kaart maakte. Je neemt een "ruisfunctie" die willekeurige ruis op het scherm plaatst, vervolgens zeg je dat deze ruis eilanden voorstelt (en alles eromheen zee), en je hebt een kaart.

Dit is meer dan prima voor veel doeleinden. Maar zoals altijd wilde ik meer! Mijn kaart moest naadloos zijn ("seamless"): als je aan de ene kant van de kaart afgaat, kom je op de andere kant weer terug. Alsof het een ronde planeet is.

Eerst dacht ik: "ik kan gewoon die ruis maken, en dan _doe ik alsof_ het naadloos is". Het werkt op zich prima---zoals je in de vorige plaatjes kon zien---want er is genoeg zee om van de ene naar de andere kant te komen. Maar het is niet mooi of realistisch, aangezien eilanden richting de rand "plotseling" beginnen of eindigen.

Nog belangrijker: er is een kleine kans dat de kaart _onspeelbaar_ wordt. Als je pech hebt, begin je in een stuk zee dat is afgesloten van de rest van de wereld. Je zit helemaal vast en kan nergens heen :p

Dit vond ik onaanvaardbaar. Dus ik moest een échte naadloze kaart creeëren.


### Het Eerste Idee

Mijn huidige ruisfunctie was 2D: hij bedacht ruis in twee dimensies, namelijk horizontaal en verticaal.

Als ik wil dat mijn kaart "rond" is, dan moet ik gewoon een 3D functie nemen! Die bedenkt ruis in een rondje, dat projecteer ik naar een 2D scherm, en dan is de ruis automatisch rond!

Ik dacht dat ik geniaal was ... maar dat was ik natuurlijk niet. Het probleem is dat de ruis wordt "vervormd". Als je een 3D bol naar een 2D rechthoek wilt omzetten, dan moet je de bovenkant een beetje in elkaar drukken. Het gevolg is dat eilanden in het midden van de kaart een normale vorm hebben, maar richting de zijkant steeds meer scheefgetrokken worden en er niet meer realistisch/speelbaar uitzien.

Een voorbeeld om het idee duidelijk te maken:

> Stel je hebt een 3D bol, zoals een voetbal. Snij deze open en probeer die dan in de vorm van een rechthoek te krijgen. Je zult merken dat je geen nette (platte) rechthoek kunt krijgen ... tenzij je delen van de voetbal uitrekt of juist wegknipt.

> Als er op zo'n voetbal een patroon zit, dan zal dat patroon er nu heel raar uitzien. Je hebt het immers uit z'n proporties gehaald en gedwongen iets te zijn wat het niet is. (Pff, hoe durf je zo met voetballen om te gaan. Laat hem gewoon zijn wie hij is!)

### Het Tweede Idee

Gelukkig zag ik online dat ik op de goede weg was. Ik had geen 3D ruis nodig, maar **4D ruis**!

Wij kunnen ons natuurlijk niks voorstellen bij 4 dimensies, dus ik heb hier geen visueel voorbeeld. Maar het idee zelf is vrij simpel:

  * Maak twee cirkels.
  * De ene cirkel loopt door de eerste twee dimensies (zeg **x** en **y**)
  * De andere cirkel loopt door de andere twee dimensies (zeg **z** en ... eh ... **w**)
  * Deze cirkels staan loodrecht op elkaar.

Vervolgens loop je over deze cirkels heen. De ene cirkel bepaalt de x-coördinaten van je kaart (_horizontaal_), de andere bepaalt de y-coördinaten (_verticaal_).

_Waarom moeten de cirkels loodrecht op elkaar staan?_ Omdat de "x"-as en "y"-as (in een 2D situatie) óók loodrecht op elkaar staan. Als de cirkels niet loodrecht zijn, kunnen we ze niet terugbrengen naar een 2D kaart (zonder "vervorming").

_Waarom cirkels?_ Nou, een cirkel begint waar het eindigt. Dus als we ruis uit een cirkel weten te halen, en we lopen over die cirkel heen, dan sluit de ruis aan het begin _precies_ aan op de ruis aan het einde. Oftewel: naadloos!

Hieronder wat geweldige plaatjes. Let er dus op dat eilanden aan de rand netjes aan de overzijde verdergaan.

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1560518095/seamless_map_01.png" /> 

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1560518095/seamless_map_03.png" /> 

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1560518095/seamless_map_02.png" /> 

### Belangrijke opmerkingen

Tot mijn verbazing was er geen 4D Perlin noise functie te vinden voor mijn programmeertaal (JavaScript). Dus ik heb uren moeten besteden aan het algoritme leren, zien hoe het in 2D en 3D werkt, en dat vervolgens overzetten naar 4D.

Op zich had dit sneller gekund. Ik had namelijk vrij snel door hoe het patroon in elkaar stak, en de code zelf was ook snel gepiept. (Ik geef de credits aan copy-paste.)

Maar ... ik had weer een stomme fout gemaakt :p Ik heb 2 uur lopen zoeken naar de reden waarom mijn functie vaak niet werkte, en als het werkte, een hele lelijke kaart gaf. Al mijn instructies en berekeningen leken te kloppen.

Wat was het probleem? In de code zaten voor elke dimensie twee variabelen: eentje met een kleine letter (**x**) en eentje met een grote letter (**X**).

Je raadt het al: ik had ergens een kleine letter gebruikt, waar het een grote moest zijn. Tussen honderden regels code zie je het verschil haast niet tussen een **w** en een **W**.

Toen ik dat ene kleine foutje verbeterde, het bestand opsloeg, het spel opende, en op "run" drukte ... euforie!

_Opmerking:_ je ziet misschien dat de kaarten nu "meer eiland" bevatten en "minder water". Dat is een automatische bijkomstigheid van een naadloze map. Aangezien eilanden aan de andere kant verder moeten, worden eilanden nu netjes afgemaakt, waardoor ze vaak twee keer zo groot worden. Ik heb er eens naar gekeken, en enkele testjes gedaan, en ik vind dit eigenlijk leuker! De kaart is interessanter, je moet iets meer moeite doen om de weg te vinden (of ergens tussendoor te varen), en mijn routes worden nog steeds door de computer gevonden.

Daarover gesproken ...

## Slimmere routes

In het vorige dagboek legde ik uit hoe je met enkele trucjes (en wiskundige algoritmes) snel routes kunt vinden tussen twee punten op de kaart. Dit zorgde ervoor dat routes niet langer dan een paar milliseconden kosten om te berekenen.

Dat is ongelofelijk snel ... maar niet als je 100 routes moet berekenen. Op sommige kaarten zijn wel 15-20 havens die allemaal hun eigen routes nodig hebben, waardoor het totaal nogal kan oplopen.

Dus ik moest iets slimmers bedenken. Dit is waarop ik uitkwam:

**Verschillende havengroottes:** Grotere havens hebben meer routes. Het gevolg is dat kleinere havens slechts één of twee routes hebben, en minuscule havens (van eilanden met maar een paar tegels) hebben geen routes.

  * Elke haven heeft zijn "grootte" opgeslagen. Deze is gelijk aan het aantal vrije vakjes aan de rand van het eiland (want dat getal had ik toch al nodig om de haven te plaatsen).
  * Ik neem hier de wortel van en vermenigvuldig dat met 1/4.
  * _Waarom?_ Omdat het goed uitkwam zo :p Ik heb simpelweg even gekeken naar hoe groot de grootste havens worden en gezegd dat ik die havens minstens 4-5 routes wil geven. Eilanden kunnen op zo'n naadloze kaart van 2000 tegels behoorlijk groot worden---tussen de 100-200 tegels---dus deze formule was simpel en werkte goed.
  * _Waarom "minstens" 4-5 routes?_ Nou, er is één bijwerking van deze techniek, die ik in het volgende stukje ga uitleggen ...

**Routes omdraaien:** Als ik een route van haven A->B heb ... heb ik natuurlijk ook meteen de omgekeerde route. Ik hoef alleen de route te kopiëren en om te draaien (van B->A). Zo heb ik in haven B ook alvast één kloppende route (die ik niet opnieuw hoef uit te rekenen).

  * Als het dan tijd wordt om voor haven B de routes uit te rekenen, zie ik dat ik ze al heb, en kan ik meteen door naar de volgende haven!
  * _Wat is hier de vervelende bijwerking van_? Stel haven B is een minuscuul eiland. Eentje die geen enkele route hoort te hebben. Omdat andere havens wél naar dit eiland willen, kan zo'n klein eilandje ineens vijf routes krijgen! Zo extreem gebeurt het vrijwel nooit, maar het totale aantal routes is wel altijd iets hoger dan wat ik zelf instel.
  * Daarom ben ik extra "streng" voor grote havens en zorg dat ze zelf maar 4-5 routes aanleggen. Ze krijgen namelijk ongetwijfeld nog een handjevol routes van andere havens gratis erbij, en dan heb je alsnog een haven die 10 routes kent.

**Routes sneller vinden:** Zoek een goede balans tussen een _sierlijke route_ en de _meest efficiënte route_.

  * De meest efficiënte route is vaak een rechte lijn, of een lijn die _precies_ langs de kust van een eiland gaat.
  * Ik heb dit veranderd door te zeggen: geef de voorkeur aan diepe/open wateren.
  * Dit geeft veel mooiere/meer realistische routes ... maar duurt ook veel langer om uit te rekenen. Je zegt namelijk tegen het algoritme: "neem expres een stuk langere route, die niet langs al deze plekken mag gaan"

Uiteindelijk, na al deze dingen implementeren, vindt mijn spel alle routes tussen de 20-40 milliseconden. Elke haven heeft meer dan genoeg routes om een interessante wereld te krijgen (gemiddeld zijn er zo'n 15 havens met 5 routes per haven). Dus die 40 milliseconden vind ik hartstikke prima

### AI Bootjes

En toen schreef ik de code zodat bootjes deze routes kunnen volgen! (De bootjes waarover ik het dan heb zijn de computerschepen of "AI schepen". Die worden helemaal bestuurd en geregeld door de computer, niet de spelers.)

Dit was vrij simpel:

  * Elke route krijgt één bootje. Dat bootje weet natuurlijk waar hij begint.
  * Elke beurt zet hij een stap verder op die route.
  * Als de boot aan het einde van de route is, staat hij dus bij een andere haven. Daar kiest hij een nieuwe route, en gaat zo eeuwig door.

Zo ziet dat eruit:

<div style="width: 640px;" class="wp-video">
  <!--[if lt IE 9]><![endif]--><video class="wp-video-shortcode" id="video-8921-1" width="640" height="360" preload="metadata" controls="controls"><source type="video/mp4" src="https://res.cloudinary.com/nietdathetuitmaakt/video/upload/v1560604990/Testing_Pirate_Maps_-_Firefox_Developer_Edition_6_14_2019_14_23_19.mp4?_=1" />
  
  [https://res.cloudinary.com/nietdathetuitmaakt/video/upload/v1560604990/Testing_Pirate_Maps_-_Firefox_Developer_Edition_6_14_2019_14_23_19.mp4](https://res.cloudinary.com/nietdathetuitmaakt/video/upload/v1560604990/Testing_Pirate_Maps_-_Firefox_Developer_Edition_6_14_2019_14_23_19.mp4)</video>
</div>

_Opmerking:_ in het uiteindelijke spel zet elke boot natuurlijk X stappen per beurt. Sommige boten zullen snel zijn en 4 tegels per beurt verplaatsen, anderen zijn langzaam en zetten inderdaad maar één stapje.

_Opmerking 2:_ ik test een andere methode van filmpjes in artikelen zetten. Vroeger zette ik elk filmpje op YouTube en linkte dan naar die URL, maar dat is veel werk als je tientallen filmpjes van tien seconden allemaal los moet uploaden. Dus nu haal ik ze direct van een bepaalde cloud, maar dat zal nog wel eens te zwaar kunnen worden voor mijn gratis account :p

_Opmerking 3:_ ja, er staan veel tabbladen open. Zo gaat dat altijd tijdens een programmersessie. Je zoekt steeds meer dingen op, lees steeds meer docs en referenties, en uiteindelijk heb je 30 tabbladen over hele specifieke programmeerproblemen. Nu ik dit schrijf is het netjes terug naar een 5 tabbladen.

## Bewegende zeemonsters

De zeemonsters bewegen niet zoals de bootjes.

Het zijn monsters. Ze kunnen geen kaart lezen en zijn niet geïntereseerd in goederen verhandelen bij de havens.

Ik had hier een heel stuk geschreven over hoe de monsters bewegen. Toen schreef ik een stuk code, keek naar de resultaten, en dacht "dit is saai, voorspelbaar, en vooral niet interessant en realistisch".

Dus toen heb ik het hele idee van de monsters een beetje overhoop gegooid. Dat idee ga je nu lezen---het oude verhaal staat helemaal onderaan het artikel.

Ik wil dat zeemonsters echt werken als angstaanjagende zeewezens. Dit betekent het volgende:

  * **Flocking behaviour:** Waar computerschepen van haven naar haven varen en dus veel rond de eilanden te vinden zijn, zullen zeemonsters vooral in diepe wateren zwemmen. Als je het diepe water opgaat, is de kans dus groot dat je een _groep zeemonsters_ tegenkomt.
  * **Chasing behaviour:** Monsters hebben twee verschillende snelheden: "normaal" en "jagen". Hun normale snelheid is héél langzaam, als een koe die door de weide graast. Maar als ze jagen ... dan zijn ze een stuk sneller. 
      * _Wanneer gaan ze jagen?_ Hun "zicht" is redelijk groot. Als ze een schip zien, gaan ze erachteraan. Als ze het schip na X beurten (3 ofzo) nog niet te pakken hebben, laten ze het weer gaan en zoeken iets nieuws om te doen.
      * Het kan gebeuren dat ze het schip "in de verte zien" of "aan de andere kant van het eiland", en dus langs eilanden en gekke routes moeten jagen. Dat vind ik alleen maar leuk, dus dat laat ik lekker zo.
      * _Waarom is hun normale snelheid enorm langzaam?_ Om spelers een kans te geven. Als ze in de verte een monster zien, hebben ze een kans om veilig weg te komen, aangezien ze sneller kunnen zijn. Daarnaast is het contrast op deze manier groter tussen _normaal_ en _jagen_.
  * **General (world) behaviour:** monsters zitten niet alleen achter spelersschepen aan, maar ook achter computerschepen. Als je geluk hebt, gaan ze achter die ander aan, en kun je twee vliegen in één klap slaan (met je kanonskogels). 
      * Hierover twijfel ik nog eigenlijk. Misschien dat ze wel achter computerschepen aangaan, maar dat er een véél grotere kans is dat ze achter échte spelers aangaan.
  * **Terrorizing behaviour:** Monsters zullen, van tijd tot tijd, niet in diepe wateren zitten. Misschien zijn ze afgeleid door schepen, of toevallig ergens gestrand. In dat geval zijn ze aan het "terroriseren" 
      * Als ze op een haven staan, of vlak in de buurt, terroriseren ze de haven. Er kan niet worden onderhandeld en schepen in de buurt zijn extra schietgraag.
      * Als ze vlak langs de kust gaan, gaat hun reputatie omhoog. (In latere versies kun je als speler van het schip af en over het eiland. In dat geval kan zo'n monsters je natuurlijk aanvallen en opvreten.) Een monster met hogere reputatie, wordt sterker, maar levert ook meer beloning op als je hem verslaat.

Dit is allemaal leuk en aardig, maar hoe passen we dat in de praktijk toe?

Nou, als volgt:

  * Elk monster kijkt of hij iets interessants kan zien (schip, haven, etc.)
  * Zo ja, dan zet hij dat als "target" en zoekt de route ernaartoe. 
      * Deze target blijft hij onthouden, zelfs als het schip uit het zicht verdwijnt en het monster eerst om een eiland heen moet.
      * Dat geeft veel meer het idee dat hij écht achter je aan zit en dat je geen moment veilig bent.
  * Zo nee, dan kiest hij een willekeurig punt in zijn omgeving en zoekt de route daarnaartoe. 
      * Als hij een "eiland" tegel kiest, slaat hij deze over, en zoekt opnieuw.
      * Als hij een "ondiep water" tegel kiest, is er een 50% kans dat hij dit accepteert. (Met 50% kans wil hij liever in diep water blijven.)
      * Hij slaat wél op dat hij een eilandtegel heeft gevonden. Hoe meer hij er vindt, namelijk, hoe dichter hij langs de kust zal zwemmen. Dus hij "terroriseert" meer.
  * In beide gevallen volgt hij de route, voor zoveel stappen als hij kan.
  * Na X beurten (dat zal deels vaststaan, deels willekeurig zijn) laat hij het target gaan en begint opnieuw.

Dit vind ik een veel leuker en realistischer gedrag voor monsters. (Ik heb zoveel moeite gestopt in dat algoritme om routes te vinden, ik ga hem gebruiken ook! Deze routes zullen hoogstens 4-8 tegels zijn, wat _praktisch niks_ is voor de computer om uit te rekenen.)

Hieronder een filmpje! (De schepen zijn de 3 blauwe vakjes met donkerblauwe rond. De computerschepen zijn de goudstukken---ik had even een plaatje nodig voor het onderscheid :p De monsters zijn de zwarte vierkantjes.)

<div style="width: 640px;" class="wp-video">
  <video class="wp-video-shortcode" id="video-8921-2" width="640" height="360" preload="metadata" controls="controls"><source type="video/mp4" src="https://res.cloudinary.com/nietdathetuitmaakt/video/upload/v1560669378/Testing_Pirate_Maps_-_Firefox_Developer_Edition_6_16_2019_09_15_23.mp4?_=2" />[https://res.cloudinary.com/nietdathetuitmaakt/video/upload/v1560669378/Testing_Pirate_Maps_-_Firefox_Developer_Edition_6_16_2019_09_15_23.mp4](https://res.cloudinary.com/nietdathetuitmaakt/video/upload/v1560669378/Testing_Pirate_Maps_-_Firefox_Developer_Edition_6_16_2019_09_15_23.mp4)</video>
</div>

_Opmerking:_ je ziet dat ze een beetje ronddwalen, maar zodra ze een schip zien, zijn ze er als de kippen bij om deze te pakken. Ook zie je dat ze niet veel langs de rand van eilanden gaan. Sommige vinden nooit een schip, omdat ze een beetje vast zitten in een nauw gedeelte, of toevallig steds de verkeerde kant kiezen.

Het "flocking" gedeelte komt ook uit de verf, maar niet heel erg. (Soms zie je wel meerdere monsters even samenkomen in hetzelfde stuk.) Dat vind ik geen probleem, aangezien monsters op deze manier al sterk genoeg zijn. Als ik later _vissen_ (en misschien _vogels_) ga toevoegen, wil ik zeker een fatsoenlijke flocking implementeren.

Dat is niet al te moeilijk. Dit is bijvoorbeeld een goed artikel dat de principes uitlegt: [Flocking in ActionScript 3][1]

_Opmerking 2:_ natuurlijk wordt het sleutelen aan de instellingen. Monsters zijn nu wel héél snel en hebben wel héél goed zicht. In het echte spel heeft elk monster andere statistieken---de een is heel snel, de ander heeft een groot aanvalsbereik, de ander is heel langzaam maar wel ongelofelijk sterk, etc. Dan wordt het minder eentonig en weet je niet zeker hoe succesvol een monster je kan achtervolgen.

_Opmerking 3:_ het idee van de monsters is uiteindelijk nóg een beetje veranderd. Zo gaat dat nou eenmaal als je een spel maakt. Dit zijn de veranderingen:

  * Elk monster, ongeacht level of "statistieken", beweegt 1 vakje per beurt (als ze gewoon rondzwemmen en niet jagen). 
      * _Waarom deze verandering?_ Toen ik mijn simulaties bekeek, zag ik dat monsters heel vaak "uit het niets" opdoken. Ze bewogen zo snel, dat ze van de ene beurt op de andere ineens aan je schip kleeften. Dat is niet leuk. Je wilt spelers een kans geven, informatie geven, een wereld met duidelijke en consistente regels geven. Dus elk monster beweegt langzaam genoeg om hem op tijd te ontdekken.
  * De **sea of monsters!** Het idee is als volgt: aan het begin van het spel prik ik enkele locaties op de kaart die middenin de oceaan liggen. Dit is een beetje de "broedplek" van de monsters. Als een monster sterft, komt hij terug op zijn broedplek. 
      * _Waarom deze_ _verandering_? Ongeveer dezelfde reden. Je wilt niet dat, als een monster sterft, deze op een willekeurige plek verschijnt, want dan hebben mensen die "toevallig" in de buurt staan daar heel veel last van. Als ze op een standaardplek middenin de oceaan terugkomen, wordt dat probleem verzacht. Daarnaast maakt dit de wereld wat interessanter, omdat je echt een "zee van monsters" kunt hebben.

## De wereld opslaan: een probleem

Het is vrij standaard (in spellenland) om een 2D grid op te slaan in een "2D Array".

Oftewel, je maakt een lijst aan met lengte Y, waarbij Y het aantal rijen is (verticale vakjes op de kaart). Vervolgens stop je in _elk van die vakjes_ nóg een lijst met lengte X, waarbij X het aantal kolommen is (horizontale vakjes op de kaart).

Zodoende krijg je letterlijk een tabel, waarbij je elk vakje kunt aanroepen door de X en Y coördinaat in te vullen.

Dit systeem werkt heel goed voor, bijvoorbeeld, het bepalen van de eilanden en de zeeën. Als ik wil weten of een vakje een eiland is, hoef ik alleen maar "map\[Y\]\[X\]" te typen, en ik heb meteen de waarde. Dit is supersnel, heel makkelijk te gebruiken, en zit in een groot deel van het spel.

Aan de andere kant is het normaal om verschillende "poppetjes" in je spel (in mijn geval monsters, schepen, etc.) ook in zo'n lijst op te slaan. (Maar dan gewoon 1 dimensionaal, een 1D array.) Als ik al mijn schepen wil verplaatsen, dan ga ik gewoon op volgorde door die lijst heen, en pas de verplaatsingscode toe op elk schip.

Deze twee dingen zijn los van elkaar heel snel. Maar als je ze samenneemt ... staat binnen de kortste keren je hele spel stil omdat het teveel moet uitrekenen :p

Eén van de makkelijkste manieren om de computer veel opdrachten te geven, is door een loops in loops te plaatsen. _Wat is een "loop"?_ Zoals het woord zegt (wat je in het Engels moet lezen): een stukje code wat je maar blijft herhalen.

Als je een loop in een andere loop plaatst, moet je dus iets herhalen ... wat je ook al moet herhalen ... wat je ook al moet herhalen ... en dat telt op.

**Een voorbeeld**. Als ik wil weten of in de omgeving van mijn schip een monster staat, dan moet ik 3 loops gebruiken. Stel het schip kan "zien" tot 5 tegels rondom zichzelf, en er zitten 10 monsters in het spel, dan herhaal ik het stukje code _125 keer_.

  * Je hebt twee "loops" nodig om door de kaart te gaan (je moet door alle X en Y waardes): 5×5
  * Dan heb je nog een "loop" nodig om door de lijst met monsters te gaan: nog een keer x5

Het wordt nog erger: ik moet dit doen _voor elk schip in het spel_. Hoppakee, nog een loop eromheen, met 3 spelers heb je al 3×125 = 375 keer een lap code herhalen.

Het wordt nog erger: ik heb niet alleen monsters in mijn spel. Ik heb ook andere schepen, havens, en er komt nog meer bij in de toekomst.

**Conclusie?** In dit soort gevallen moet je doorgaans één van twee dingen doen:

  * Je spelidee heroverwegen en waarschijnlijk versimpelen.
  * De wereld in een slimmere structuur opslaan ...

## De wereld opslaan: een oplossing

De oplossing zit eigenlijk al in de probleemstelling.

Ik zei al dat die 2D array supersnel en makkelijk was. Eigenlijk zou je dus willen dat je alles op die manier kan doen.

Is het dan geen idee om, te allen tijde, ook op te slaan welke poppetjes er op dat specifieke vakje staan? Dan hoef ik alleen maar "map\[Y\]\[X\].poppetjes" te doen, en ik heb meteen alles wat daar staat.

Nou, dat heb ik uitgeprobeerd, en het werkte verdraaid goed :p

Dit is in het kort het idee:

  * Elke keer als een poppetje zich verplaatst, verplaats je hem op twee manieren.
  * **Manier 1:** In de lijst van poppetjes. 
      * Pak dit poppetje, update diens x- en y-coördinaat.
  * **Manier 2:** In de 2D array van de map. 
      * Pak het vakje waar het poppetje eerst stond.
      * Zoek het poppetje en haal deze uit de lijst.
      * En plak het poppetje in het nieuwe vakje erbij.

Je bent nu dingen "dubbel" aan het opslaan, wat net iets meer geheugen kost van de server, maar je krijgt er ongelofelijke snelheid en simpliciteit voor terug.

Waar ik eerst die miljoenen loops moest doorlopen, kan ik nu gewoon zeggen: "ik wil weten of in vakje {3,5} een monster staat, ik pak map\[5\]\[3\] erbij, en ... _ik weet het al_"

Op ieder willekeurig moment kun je met één regel code weten wat op een bepaald vakje staat.

_Opmerking:_ ja, de X en Y coördinaat zijn omgedraaid. Dat is altijd met 2D arrays. Het is een lang verhaal, maar het is beter zo :p

_Opmerking 2:_ natuurlijk sla ik de poppetjes in het spel niet op onder de naam "poppetjes". Het is allemaal in het Engels en met zo kort mogelijke namen, anders moet ik veel typen. (Ze heten vooral _units_ en _ships_. Ik ben niet heel consistent in naamgeving.)

Dus ik heb delen van de code herschreven om deze structuur te gebruiken, en het resultaat mag er zijn (vind ik).

De allereerste beurt van het spel moet de server héél veel dingen uitrekenen, opzetten, klaarzetten. (Waaronder het uitrekenen van die routes, bijvoorbeeld.) Deze beurt kost gemiddeld **70-100 milliseconden**. (Dat kan nog wel korter, maar dat heeft nu geen prioriteit.)

Daarna kost elke beurt gemiddeld **1 milliseconde**. (Elke beurt verplaatsen er bijna vijftig dingen en checken al die dingen of ze iets kunnen zien of aanvallen. Dan vind ik 1 milliseconde een aardig resultaat.)

Ik heb het spel nog niet met een (groot) spelersaantal gespeeld, of met volledigheid van spelregels voor de wereld, maar ik verwacht niet dat die het veel langer maken. Het overgrote deel van de complexiteit zit namelijk in al die momenten waarop je dingen op de kaart moet opzoeken.

## De laatste loodjes

Het spel is nu zeer dichtbij een werkende versie.

Het zal nu een paar dagen hard doorwerken zijn om alle kleine beetjes af te maken en alle kleine foutjes (die het spel doen crashen voordat je ook maar een paar beurten bezig bent) eruit te halen.

Dan kan ik het spel testen met andere spelers 🙂 (Met één boot spelen kan natuurlijk niet, want je wint als je alle andere boten hebt verslagen. En om nou zelf drie apparaten aan te zetten en tegen mezelf te spelen ...)

Een _werkende_ _versie_ is nog niet perse een _werkend spel_ of een _goed spel_.

Andere mensen zien zo'n spel altijd héél anders dan jijzelf (de ontwikkelaar). Ze gaan dingen proberen waar jij niet eens aan had gedacht. Ze gaan dingen stukmaken :p Pas als je het een paar keer met anderen hebt getest, voor langere tijd (het liefst tot het einde van het spel) zul je echt alle grote fouten vinden en eruit kunnen halen.

Daarnaast merk je dan ook pas of het spel leuk is. Of het begrijpelijk is en mensen er enthousiast van worden.

Dus het volgende artikel zal waarschijnlijk over de eerste werkende versie gaan. (Misschien dat ik daarvoor nog iets meer dingen ontwerp, zoals icoontjes voor elke rol. We zullen zien.)

## Appendix A: het oude idee voor monsters

Ze doen een "random walk". Ze zetten een stap in willekeurige richting, waarbij elke richting even waarschijnlijk is. Hierbij zijn er slechts enkele uitzonderingen:

  * Ze kunnen niet op eilandtegels. Dus als ze een stap kiezen naar een eilandtegel, negeren ze die gewoon en zoeken verder.
  * Ze kunnen ook niet door havens heen. (Dit klinkt heel logisch, maar ik was dit vergeten in te bouwen, en tot mijn verbazing gingen monsters ineens onder havens door.)
  * Ze kunnen wél met andere "units" op hetzelfde vakje staan. Sterker nog, als ze een vakje tegenkomen met een schip erop, dan gaan ze daar expres naartoe.

_Waarom gaan ze naar schepen toe?_ Veel monsters kunnen alleen van dichtbij aanvallen---ze hebben een kleine "attack range". Dat is één van de belangrijke verschillen tussen monsters en computerschepen (die wél van ver kunnen schieten met hun kannonnen).

Daarnaast krijgen we een tweede voordeel gratis erbij: monsters volgen schepen in de buurt. Als je binnen hun bereik komt, gaan ze naar jouw vakje toe. Als je dan niet snel genoeg weg bent met je schip, hebben ze je te pakken :p

Dit "zicht" van de monsters kan best groot zijn. Ik moet op de server sowieso "testen" of monsters een schip kunnen zien, anders weet ik niet of ze deze beurt aanvallen of niet. In diezelfde code kan ik heel makkelijk opslaan _waar_ ze dit schip zien en dat als doelwit neerzetten.

_Maar dat ziet er toch niet realistisch uit, als de monsters "random"_ _rondlopen_? Dat is een goed punt. Een random walk heeft het nadeel dat, gemiddeld genomen, je op hetzelfde punt eindkomt als waar je bent begonnen. Als je met evenveel kans naar links gaat als naar rechts, dan zal je niet heel ver van je plek komen.

Aan de andere kant, als je zo'n random walk genoeg tijd geeft, zal hij naar één kant toegaan. Dat kan ook een nadeel zijn: dat monsters over tijd gewoon van je kaart aflopen.

Beide nadelen, echter, zijn in dit spel geen probleem. De kaart is naadloos, dus monsters die veel verplaatsen zijn alleen maar leuk. Daarnaast moeten monsters om eilanden heen en worden ze naar schepen toegetrokken, wat ervoor zorgt dat ze niet rond hun eigen plekje kunnen blijven.

&nbsp;

 [1]: https://gamedevelopment.tutsplus.com/tutorials/3-simple-rules-of-flocking-behaviors-alignment-cohesion-and-separation--gamedev-3444