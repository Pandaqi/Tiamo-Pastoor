---
title: AI is niet meer de toekomst
author: tiamopastoor
date: 2022-12-25T15:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
De laatste maanden gaan de ontwikkelingen in de wereld van AI (of Machine Learning) in aan razendsnel tempo.

Dit komt voor veel mensen als een schok. Sommige mensen nemen het nog steeds niet serieus. De rest, die er een beetje verstand van heeft, vond dit compleet voorspelbaar en is blij dat de rest van de wereld eindelijk wakker wordt.

Op dit moment zijn er algoritmes, zowel betaald als openbaar, waarmee je

  * Een beschrijving kan typen en de computer maakt een plaatje **(visueel)**
  * Een vraag kan stellen en de computer geeft je een geschreven antwoord **(textueel)**
  * Tekst kan typen en de computer maakt er een gesproken opname van **(audio)**
  * En nog meer.

Ze zijn niet perfect, voor zover dat kan of meetbaar is. Maar ze zijn goed genoeg voor de meeste doeleinden en scoren soms zelfs beter dan mensen. Ik heb vaker gesproken over de toekomst van school en maatschappij. Over het belang van zoiets als _universal basic income_ (AI doet de meeste taken, dus het hebben van een baan is slechts een optie voor wie het wil) en scholen die _logisch denken_ leren in plaats van dat je zinloze feitjes moet stampen.

De huidige ontwikkelingen tonen aan dat dit niet iets is dat we over 50 jaar moeten beslissen, maar misschien iets dat over 5 jaar al moet zijn veranderd.

Ik heb _redelijk_ verstand van _machine learning_ en de bijbehorende ideeën. (Ik heb Wiskunde gestudeerd, programmeer al heel lang, en mijn scriptie ging over modellen om het aantal bezoekers voor een theatervoorstelling te voorspellen.) 

Daarnaast ben ik zelf een kunstenaar, het vakgebied waarin iedereen nog steeds denkt veilig te zijn voor AI. Dus ik wil mijn gedachten hierover delen.

Natuurlijk is dit allemaal zwaar versimpeld. Anders zou iedereen en hun oma allang een AI hebben ontwikkeld en hun baan hebben opgezegd :p

## Hoe werkt deze AI?

Door te leren zoals mensen leren. **Dit is belangrijk.** 

Maar omdat het een computer is, kunnen we het _enorm veel input geven_ en veel sneller daarover laten nadenken. (In zekere zin traint het in een uur alsof het al miljoenen jaren alles leert over bepaalde onderwerpen.)

### Neuronen

Het algoritme bestaat uit "neuronen" (net zoals onze hersenen). Heel veel neuronen, geschakeld aan elkaar, van begin (_input_) tot eind (_output_).

  * Een getal gaat erin.
  * Deze ondergaat een simpele berekening. (Vermenigvuldigt met een **gewicht**, en dan een **bias** erbij opgeteld.)
  * Dat getal stuurt het door naar de volgende neuronen waarmee het is verbonden.

Dit is alles.

Het zijn slechts een hoop simpele berekeningen. Neuronen in dezelfde laag hangen niet van elkaar af, en kunnen dus zelfs _tegelijkertijd_ worden uitgerekend. Zo kan je relatief snel een antwoord krijgen, zelfs als je biljoenen neuronen in je netwerk hebt.

### Bijvoorbeeld

Neem het typische voorbeeld van een AI die kan herkennen welk cijfer staat geschreven in een plaatje.

  * De input is het plaatje. De waarde van elke pixel (hoeveel groen, hoeveel blauw, hoeveel rood) wordt als getal erin gestopt. 
  * De output bestaat uit 10 neuronen (die de getallen 0-9 voorstellen). Degene met de hoogste waarde wordt gezien als de "beste optie" en gekozen als antwoord.

Hoe meer neuronen, in meer lagen, hoe meer dit "neurale netwerk" kan leren. Hoe _beter_ de input en output zijn gedefinieerd, hoe sneller en beter het leert. (Als je het allemaal plaatjes geeft met hele onduidelijke getallen, gaat het wat moeizamer.)

Dit is exact wat er in ons hoofd gebeurt. We zien iets, dat triggert neuronen in ons hoofd, die triggeren weer neuronen waarmee ze zijn verbonden, en zo krijgen wij reflexen, gedachten, associaties, creatieve ideeën, etcetera.

{{% remark %}}
Grappig genoeg bestond dit idee al heel lang, van neurale netwerken en de digitale neuron. Maar toen het werd bedacht, zagen ze niet wat ze er mee moesten. Nu wordt het misschien wel het belangrijkste idee op aarde.
{{% /remark %}}

### Leren

Dus hoe _leert_ zo'n AI? 

  * We geven het input en de gewenste output. (Bijvoorbeeld: een plaatje + het getal dat erin staat.)
  * We laten het netwerk uitrekenen.
  * Klopt het antwoord? Geweldig!
  * Klopt het niet? Pas die _gewichten_ en _biases_ een klein beetje aan, zodat hij wél het juiste antwoord geeft.

Dit is, wederom, wat mensen doen. We gooien een bal naar iemand toe. Maar de bal vliegt veel te ver. Oké, dan proberen we de volgende keer _iets_ zachter te gooien. Herhaal honderden keren, en je leert om de bal perfect te gooien naar dat doelwit.

_Maar wat als het doelwit ergens anders staat?_ Aha! Hier komt dus het belang van goede training. Het model moet zoveel mogelijk variatie in de input krijgen, anders leert het alleen om _één specifiek ding te doen._ 

Je ziet ook vaak dat zo'n model leert met vallen en opstaan. Het gaat snel vooruit, maar dan komt het vast te zitten ... totdat het eindelijk realiseert hoe het met _generaliseren_ op een probleem.

En dat is ook wat mensen in het echt doen. 

{{% example %}}
Ik was al jaren aan het tafeltennissen, maar ik merkte dat ik bepaalde ballen altijd miste of verkeerd sloeg. Dus ik probeerde een andere houding en tactiek. Eerst werd ik veel _slechter_, want ik was dit niet gewend. Maar na genoeg training kwam ik terug op mijn oude niveau, en ging daar toen overheen, wat ik had een meer optimale (of algemeen toepasbare) manier van spelen gevonden.
{{% /example %}}

## Wat AI nu al kan

### Plaatjes

Neem zoiets als **DALL-E** (of de gratis beschikbare **Stable Diffusion**). Het is een algoritme dat heeft geleerd hoe kloppende plaatjes eruitzien én welke woorden daarbij horen.

Het is dus getraind op _een ongelofelijke hoeveelheid plaatjes van het internet_, inclusief woorden die beschrijven wat het plaatje laat zien. Het netwerk is zodanig opgesteld dat het is geoptimaliseerd voor _lokale patronen_ herkennen. (Dus het kijkt naar groepjes pixels, in plaats van elke pixel op zichzelf.)

Daardoor kan je nu iets typen (in het Engels) en je krijgt even later een paar plaatjes die het laten zien.

Maar je kan ook zelf een hele ruwe schets maken van iets en dan de computer vragen om het "mooier te maken". (In een bepaalde stijl, met bepaalde kleuren, met een achtergrond, wat dan ook.)

Waarschijnlijk zie je al de potentie. Ik kan in één minuut een semi-acceptabel karakter tekenen. Ik stop het in het algoritme, zeg dat de computer het afmaakt (volgens bepaalde criteria), en even later krijg ik een volledig uitgewerkte illustratie. 

_Er worden nu al websites, apps en spellen gemaakt die volledig plaatjes en icoontjes gebruiken van deze AI. Als goed toegepast, door iemand met een oog voor ontwerpen, is het verschil voor de gemiddelde kijker niet te zien._

Het netwerk is een soort _black box_. We weten niet _hoe_ of _waarom_ het dat plaatje maakt. Maar die biljoenen neuronen hebben precies de getalletjes die zorgen dat de computer begrijpt hoe het plaatjes maakt van dingen. (**Dit is ook belangrijk.**)

Daarom geven die algoritmes, bijvoorbeeld, geen bronnen of referenties. Het algoritme kopieert niet, het is niet eens "geïnspireerd", het is _getraind_ op basis van allerlei plaatjes. Het weet niet eens wat een bron is. (Hierover later meer.)

### Tekst

En hetzelfde kan je natuurlijk doen met andere data, zoals tekst.

De beste netwerken die we nu hebben (zoals ChatGPT) zijn "next word predictors". De input bestaat uit de voorgaande paar woorden, en de output is het volgende woord dat hij moet plaatsen.

Deze wordt getraind op een berg tekst. (Eén van die datasets heet letterlijk _the pile_.) Het voorspelt het juiste volgende woord? Geweldig. Het voorspeelt een verkeerd volgend woord? Pas de gewichtjes net een beetje aan.

Vervolgens lieten ze mensen kijken naar de resultaten. Het algoritme werd beloond voor menselijke, geloofwaardige teksten. Dit zorgde voor significante verbeteringen.

Het gevolg? Je kan die ChatGPT alles vragen en je krijgt waarschijnlijk een goed geschreven, (semi) passend antwoord. In elke taal, over elk onderwerp. Het begrijpt zelfs meer "menselijke" dingen, zoals sarcasme, humor, schrijfstijl, etcetera. Want ja, ook _dat_ heeft het gezien in diens training.

Er zijn nu al leerlingen die het gebruiken om hun essays en werkstukken te schrijven. En grotendeels komen ze ermee weg, zo goed is het.

Toen ik het vroeg om korte scenes te schrijven (voor een boek) met een bepaalde opzet of eerste zin, kreeg ik 50% van de tijd iets wat nog niet eens zo slecht is. 

{{% remark %}}
Ik ben uren kwijtgeraakt aan parodieën bedenken op Harry Potter titels en ChatGPT vragen om een samenvatting voor die verzonnen film te schrijven :p Harry Potter en de Half-Snoep Prins is een echte aanrader.
{{% /remark %}}

Maar het kan _alles_ dat met tekst werkt.

Het kan code schrijven. Toen ik vroeg hoe je een rijdende auto maakte in een heel specifiek spelprogramma, kreeg ik correcte uitleg en code terug.

Het kan spelregels bedenken voor verzonnen bordspellen. (Al is het daar niet al te best in, in het Nederlands. Het zal minder daarop zijn getraind. Engels heeft altijd betere resultaten.)

Het kan iteratief verbeteren: jij geeft een tekst en vraagt "maak dit meer emotioneel" of "schrijf dit in de stijl van Shakespeare", en het resultaat is vaak acceptabel.

### Conclusie

De huidige staat van AI is, in het _ergste geval_, een hulpmiddel of startpunt voor bijna elk vakgebied. Anders kan het je hele taak overnemen, en hoef je eventueel slechts te controleren en te verbeteren waar nodig.

Maar laten we nu eens kijken naar wat _niet_ kan. Of de redenen waarom niet de hele wereld al maandenlang in rep en roer is.

## De gebreken

De AI blijft een algoritme met cijfers. Het _leert_ over tijd om zichzelf niet te herhalen, om zinnen netjes te eindigen met een punt, om mensen vijf vingers te geven. Maar dit is geen harde regel, dus de AI is **inconsistent**. Het zal in sommige gevallen mensen vier vingers geven. Het zal soms zichzelf tegenspreken in een stuk tekst. Hoe meer het traint, hoe minder groot deze kans, maar je kan het niet _definitief weghalen._

Want het is een black box, weet je nog? Mensen kunnen niet precies kijken _waarom_ het bepaalde beslissingen maakt en daar, bijvoorbeeld, veiligheidsmaatregelen op zetten. Of anderzijds aan sleutelen.

Daarnaast is het dus **afhankelijk van de trainingsdata.** Als het nooit iets heeft gezien over hoe je een bepaald recept maakt, zal het dat niet op magische wijze kennen. Als je het relevant wilt houden, moet je het dus regelmatig updaten en de data alsmaar _uitbreiden en meer gevarieerd maken._

Als laatste, op dit moment, is het enorm **zwaar om uit te rekenen.** Je hebt "open source" alternatieven voor ChatGPT, zoals OPT van Facebook. Maar die vereisen dat je een hele lading aan supercomputers hebt als je die thuis wilt gebruiken. En zelfs dan kunnen simpele antwoorden een paar seconden op zich laten wachten. 

(De algoritmes voor _plaatjes_ werken anders en zijn veel kleiner, dus je kan Stable Diffusion gebruiken als je een semi-moderne computer hebt met wat videogeheugen. Ik heb deze getest op onze "goede computer" in de woonkamer.)

Maar zoals te verwachten, lost dit probleem zich over tijd op. Nieuwe manieren worden gevonden om de AI kleiner te maken, terwijl onze computers sterker worden.

## Over copyright

Het eerste probleem: zou dit illegaal moeten zijn? Is dit schending van copyright?

Het lijkt een duidelijke "ja" (voor veel mensen, op het eerste gezicht). Het is een duidelijke "nee".

Onthoudt dat de AI exact hetzelfde doet als wat mensen doen. Het doet het simpelweg sneller: het heeft een veel hogere capaciteit qua geheugen en rekensnelheid.

De meeste kunstenaars leren tekenen door 

  * Bestaande stijlen of tekeningen die ze mooi vinden te kopiëren
  * Veel kunst tot zich te nemen en zich daardoor te laten inspireren over tijd
  * Directe referenties te zoeken en raadplegen terwijl ze aan een nieuw project werken

Dit zien we niet als plagiaat of copyrightschending. Dit is normaal en dit is hoe mensen alles leren.

De AI **doet dit, maar dan nog minder erg.** Het kopieert niks en gebruikt geen directe referenties. Die AI om plaatjes te genereren, bijvoorbeeld, werkt als volgt:

  * Voor elk plaatje dat je geeft, leert het netwerk hoe je van dit plaatje naar "ruis" gaat. Oftewel, het leert bijvoorbeeld "met deze stappen ga ik van een hond naar een compleet willekeurig plaatje"
  * Dit gebeurt dus voor biljoenen plaatjes met biljoenen verschillende beschrijvingen.
  * Totdat het netwerk is getraind.
  * En stel nu dat je een plaatje van een hond wilt? Dan _begint_ het netwerk met ruis en voert deze stappen _in omgekeerde volgorde uit_. Dus het gaat van ruis naar iets dat op een hond moet lijken.

Het algoritme gebruikt dus niet de plaatjes. Het kopieert niks. Het "weet" niet eens wat een hond is of wat het doet.

Het leert de _algemene technieken om plaatjes te maken._ 

En als je met een andere willekeurige ruis begint, krijg je er dus een compleet andere hond uit. Eentje die nooit eerder is gezien. (Daarom kan je eindeloos veel _andere_ plaatjes halen uit dezelfde input. Als jij en ik hetzelfde vragen aan dit algoritme, krijgen we toch een ander eindresultaat.)

Dus nee, de AI is zelfs _minder een gevaar voor copyright_ dan mensen zelf.

## Over banen

En dan de tweede vraag: gaat iedereen hun baan verliezen? Waar gaat dit heen? Moet het alsnog worden verboden?

Ja, mensen gaan hun baan verliezen. Omdat die baan zal veranderen naar een andere baan.

Vroeger hadden we mensen die boeken met de hand kopieerden. Dat was de enige manier om van één exemplaar twee exemplaren te maken. Toen kwam de drukpers. Al die mensen verloren hun baan. De meeste zullen simpelweg hebben geleerd hoe je een drukpers bedient zodat ze sneller boeken konden kopiëren.

Dat is de goede uitkomst. Als je AI _verbiedt_ krijg je de negatieve uitkomst: je verhindert de mensheid om te ontwikkelen en te groeien naar meer efficiënte manieren van werken. Als de drukpers was verboden, had de helft van de wereld nu als taak om dingen met de hand over te schrijven :p

Zoals ik hierboven vertelde worden er nu al dingen uitgebracht die grotendeels zijn ontworpen of geschreven door de AI. 

Niet 100%. Zover zijn we nog niet. De mensen moeten beginnen met een eerste schets, een idee, een oog voor welke plaatjes wel of niet mooi samengaan. De mensen moeten de juiste, intelligente vragen stellen aan de AI.

Maar geef het een paar jaar en zelfs dat is steeds minder nodig. 

{{% remark %}}
Er zijn nu al websites die een simpele _prompt_, zoals "kasteel", voor jou uitbreiden naar allemaal creatieve opties die het algoritme beter begrijpt. Zoals "Sprookjeskasteel in een boslandschap met elfjes, schilderij in de stijl van Van Gogh".
{{% /remark %}}

Het is begrijpelijk dat men bang is, of klaagt, of roept om wetten. Maar het is de beste optie om vooruitgang niet tegen te houden en in plaats daarvan continu _aan te passen_. Schrijvers kunnen dit gebruiken als _hulpmiddel_ om efficiënter te zijn. Zij schrijven de tekst, maar vragen de computer om de samenvatting te maken, of een goede eerste zin te bedenken. Artiesten kunnen dit ook gebruiken als hulpmiddel. Hun "eerste schets" is nog altijd beter en passender dan die van iemand die voor het eerst Paint opent.

Zolang je AI omarmt en gaat gebruiken, zullen we simpelweg een nieuw tijdperk ingaan, waarin veel banen efficiënter en makkelijker worden. We hoeven boeken niet meer met de hand te kopiëren, we kunnen het een machine laten doen. We hoeven niet meer zelf de achtergrond van onze tekening in te kleuren, we laten het een machine doen.

Geef het tien jaar, en wat velen nu als "valsspelen" of "dit moet verboden" zien, is dan zo normaal dat iedereen het automatisch doet. Je wordt uitgelachen als je helemaal zelf, met de hand, die achtergrond gaat tekenen. Jeetje, waarom zou je dat doen? Geef je niks om je tijd ofzo?

## Over creativiteit

Ik heb vele YouTube filmpjes gezien waarin mensen met een creatief beroep heldhaftig zeggen: "Nee, AI kan _nooit_ creativiteit en verbeelding hebben. Wij zijn veilig."

Nee, dat is niet waar. Het is wederom begrijpelijk dat je zoiets denkt of zegt. Het is een comfortabele gedachte én die mensen weten niet hoe de algoritmes daadwerkelijk in elkaar steken.

Maar weet je nog toen ik (meermaals) zei dat het algoritme _precies denkt en leert zoals een mens?_ 

Het enige dat de computer mist is de _ervaring, herinneringen, en fysieke toestand van een mens._ (En met fysieke toestand bedoel ik emoties, of je vermoeid bent, etcetera. Speelt allemaal een rol in hoe jouw zintuigen en neuronen werken. Meestal op een negatieve manier, echter.)

Wat is creativiteit? Wat is verbeelding? Ons hoofd associeert twee dingen met elkaar---dingen die al los in ons hoofd zaten, anders kunnen we er niet aan denken---die nog niet eerder met elkaar waren verbonden!

Onze creativiteit komt van precies dezelfde plek als die van de AI. We kennen allerlei dingen, die zijn op mysterieuze manieren opgeslagen in ons hoofd, en als we een goed idee hebben dan verbinden we simpelweg een paar nieuwe dingen.

De AI kan dit dus ook. Het _doet dit al_. Weet je nog toen ik vroeg om een parodie op Harry Potter? Wat je krijgt is een stuk tekst met namen _die niet in een bestaande tekst voorkomen_, die dingen zeggen of doen die _nergens voorkomen_, en een plot dat _niet bestaat_. De AI is "creatief" geweest. Het heeft allemaal losse stukjes kennis (over Harry Potter, over hoe je een verhaal schrijft, over hoe namen werken) met elkaar verbonden.

De AI is net zo creatief als wij. En hoe meer het traint, hoe meer van die ervaringen en herinneringen het meekrijgt, hoe creatiever en menselijker het wordt. 

Dat is het _einddoel_: een AI die alles kan dat mensen kunnen. En er wordt hard gewerkt om dit te bereiken. Die ChatGPT begrijpt al dingen zoals context en toon, zoals het mengen van losse ideeën uit verschillende gebieden. Die DALL-E begrijpt al dingen zoals stijl, kleurenschema en lichtval, en kan dus creatief zijn door verschillende onderdelen te mixen.

Het is bijzonder om te zeggen dat AI niet creatief kan zijn, als het letterlijk, op commando, dingen kan verzinnen die er eerst nog niet waren. Het is daar zelfs beter in dan mensen, want het is efficiënter en weet meer. Wat is dan je definitie van creativiteit?

## Dus wat is er wel veilig?

Ik zie maar twee dingen:

  * Alles waarbij _absolute zekerheid_ nodig is.
  * Alles waarbij men altijd liever een _fysiek, echt mens_ spreekt.

Omdat deze vorm van AI inconsistent is, kan het zomaar hele domme keuzes maken. ChatGPT kan, als je het een beetje aanspoort, compleet foute of tegenstrijdige informatie vertellen alsof het de absolute waarheid is. (Zo schreef het voor mij een nogal overtuigend betoog over waarom iedereen Hoedjes van Papier zou moeten dragen. Het was, onder andere, goed voor het milieu.)

Dus als je zeker wilt zijn dat belangrijke keuzes consistent worden gemaakt, zal er een menselijke expert bij moeten zijn. (Zelfs als we uitvinden hoe je in die _black box_ gaat zitten en hier en daar extra regels toevoegt, heb je nog steeds kans dat je uitzonderingen mist of de AI er een onverwachte manier omheen vindt.)

Daarnaast blijven mensen ... mensen. Als jij ernstig ziek bent, wil je persoonlijk worden geholpen, wil je een echt mens zien. Studies hebben aangetoond hoe belangrijk fysiek contact, sociaal contact, praten, van locatie veranderen, etcetera zijn voor onze gezondheid en geluk. Ik heb bijvoorbeeld al een hekel aan mailen en bellen: als mogelijk, loop of fiets ik naar iemand toe om dingen live te bespreken.

Maar daarbuiten? Het spijt me, maar de groei van AI is exponentieel en binnen 5 tot 10 jaar zijn de meeste beroepen op z'n minst drastisch veranderd. 

{{% example %}}
Het is ook maar iets van 5 jaar geleden dat we online chatbots uitlachten. Ik weet nog dat er een periode was dat iedereen voor de grap zo'n bot opende en probeerde om het allemaal rare dingen te laten zeggen. Het was een nieuwe uitvinding. We vonden het knap en een hele prestatie, ook al zijn die bots echt _helemaal niets_ vergeleken met wat we nu kunnen. 

Op dezelfde manier kon je 10 jaar geleden écht niet ervan uitgaan dat iemand een (fatsoenlijke) smartphone had, en kijk waar we nu zijn.
{{% /example %}}

Waarom zou je iets nog zelf tekenen, als een computer een beter startpunt geeft in een minuut? Waarom zou je zelf je werkstukken schrijven, als de computer ze _beter_ schrijft in een minuut? Waarom zou je zelf iets programmeren, als de computer je de code geeft als je om de juiste onderdelen vraagt?

## De toekomst

Inmiddels hebben een paar middelbare scholen dit dus al gemerkt. Ineens is al het werk wel héél netjes en correct geschreven ... 

De eerste reactie is, zoals altijd, de meest domme: "we verbieden dit en straffen je flink als je het probeert" (Maar compleet voorspelbaar natuurlijk, want school blijft school.)

Gelukkig hebben enkele mensen in het onderwijs al de werkelijke reactie genoemd: "misschien moet het systeem af van feitjes in je kop stampen en naar _begrip_ en _kritisch nadenken_"

Ontwikkelingen leggen vaak ook pijnpunten bloot. Als een computer de schoolopdracht zonder enige moeite foutloos uitvoert ... is het misschien niet de juiste opdracht. Als leerlingen hun huiswerkvragen letterlijk kunnen overtypen, het antwoord opschrijven, en een 10 halen ... moet je nadenken over wat je aan het doen bent.

En dan is de reactie vaak: "maar ze moeten dit zelf kunnen voor hun toekomst!"

Huh? Welke toekomst? Die toekomst waarin AI nóg intelligenter is toegankelijker is? _Dat_ is het moment waarvoor ze dit in hun hoofd moeten stampen? Je bedoelt dat over tien jaar alle kaarten, apparaten, internet, alles verdwijnt en dat _dan_ hun leven afhangt van wat de hoofdstad van Madagaskar is?

Het doel van school moet zijn om kinderen te leren _logisch nadenken_ en _communiceren_. (Ik heb dit nu al zo vaak geschreven, ik word er zelf een beetje ziek van. Het zijn de enige twee vaardigheden die iedereen moet kunnen en goed ook.) Zodat ze elk probleem kunnen opbreken in de logische stukjes, en deze communiceren aan de AI die het voor hen doet. 

{{% remark %}}
Ik heb vaak gemopperd over hoe enorm scholen achterlopen. Ze hadden allang informatica een examenvak moeten maken. Die boot hebben ze gemist, en nu gaan ze ook de volgende boot missen: omgaan met AI. Ik denk dat wij al een deel van het heelal hebben gekoloniseerd voordat ons onderwijssysteem besluit om hun vakkenpakket eens te heroverwegen.
{{% /remark %}}

Ik ben enthousiast én bang voor de toekomst. Mijn werk loopt enorm veel gevaar. Ik ontwerp, schrijf en programmeer ... precies de dingen die dit artikel steeds noemt. Het gevaar van dingen zoals _fake news_ of _deepfakes_ groeit exponentieel mee met AI.

Tegelijkertijd weet ik dus ook hoeveel tijd je kwijt bent aan dingen die een computer zou kunnen doen. Deze _tools_ zouden dit veel minder pijnlijk maken. Ik probeer ze nu al te gebruiken om ideeën te genereren als ik vastzit. (Misschien wil ik een belangrijk voorwerp beschrijven in mijn fantasy boek, maar ik heb geen inspiratie. Dus ik laat een paar plaatjes maken en beschrijf de mooiste in woorden.)

En daarnaast vind ik dus rust in het idee dat ik altijd die twee vaardigheden heb aangehouden: logisch denken en communiceren. Ik _kan_ een spel opbreken in kleine stukjes en die heel duidelijk van een AI vragen. Ik _kan_ problemen spotten in scenes of plots die de AI bedenkt. Ik _heb_ ervaringen die een AI nu niet, misschien nooit niet, gaat vinden in diens trainingsdata.

Ik stel voor dat jij hetzelfde doet. Zo blijf je altijd relevant en kan je altijd aanpassen. Maar zo maak je ook ten volste gebruik van deze geweldige ontwikkelingen, die alleen maar sneller zullen gaan.

{{% remark %}}
Ik heb dus een lading hilarische screenshots van die parodieën op Harry Potter. Maar ik vond ze niet passen in dit verder serieuze artikel, dus die publiceer ik later wel. Ik zoek nog een plekje.
{{% /remark %}}