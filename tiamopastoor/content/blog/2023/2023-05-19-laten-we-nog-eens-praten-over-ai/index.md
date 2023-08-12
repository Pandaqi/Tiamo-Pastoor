---
title: Laten we nog eens praten over AI
author: tiamopastoor
date: 2023-05-19T14:00:00+00:00
language: nl
categories:
  - Miscellaneous
  - Games

---
Ik ben _soort van_ afgestudeerd op het gebied van neurale netwerken en voorspellingsalgoritmes. Ik zou niet willen zeggen dat ik een expert ben---verre van, zelfs---maar ik ken de technologie erachter en probeer het nieuws mee te krijgen. Zeker nu AI kan worden ingezet voor creatieve doeleinden, is het een gereedschap dat ik op zo'n minst wilde onderzoeken.

Zo heb ik de afgelopen maanden behoorlijk veel gebruik gemaakt van AI en vrijwel al het nieuws gevolgd. En ik heb het idee dat 99% van de mensen nog steeds niet weet dat de wereld op het punt staat om drastisch te veranderen.

Hopelijk kan ik even uitleggen waarom dat zo is.

## Wat is "AI"?

De AI systemen waarover de meeste mensen nu wel hebben gehoord zijn gebaseerd op neurale netwerken. Dat is niets anders dan een gigantische hoeveelheid getalletjes die met elkaar verbonden zijn. Als de ene "neuron" afvuurt (omdat het getalletje boven een bepaalde grens is), stuurt het diens getal door naar alle connecties. Zo gaat een signaal helemaal vanaf het begin van de keten (_input_) naar het einde (_output_).

Maar _hoe_ ze dat gebruiken is totaal verschillend tussen, bijvoorbeeld, een AI die plaatjes genereert (zoals DALL-E) en eentje die tekst genereert (zoals ChatGPT). 

Op die twee verschillende doeleinden wil ik even focussen, maar weet dat er honderd andere manieren zijn (zoals een AI die muziek kan genereren). De variant die tekst genereert noem ik **GPT** en degene die plaatjes maakt **SD**, naar de techniek erachter die _stable diffusion_ heet.

Eerste doen ze aan _training_. 

  * GPT krijgt een gigantische stapel teksten in allerlei talen.
  * SD krijgt een gigantische stapel plaatjes, inclusief labels met wat erop staat. ("Tijger, realistisch schilderij, oranje met zwart, ...")

Voor elk stukje _data_ dat ze krijgen, leren ze net ietsje beter hoe het werkt.

  * GPT voorspelt wat het volgende woord zal zijn. Als ze fout zitten, verandert het algoritme al die getalletjes in het netwerk een _klein beetje_ zodat GPT de volgende keer meer kans heeft om het juiste volgende woord te raden.
  * SD probeert het plaatje dat ze krijgen te veranderen in willekeurige ruis. Als dat slecht lukt, doet het algoritme weer hetzelfde: de getalletjes een beetje aanpassen zodat het algoritme dit plaatje de volgende keer iets beter begrijpt.

De huidige doorbraken komen, deels, door _meer_ data en _betere_ data. (Als je SD een miljoen plaatjes geeft van een olifant met als label "tijger" ... gaat er nog steeds weinig goeds uitkomen.)

Anderzijds komen ze doordat mensen steeds _slimmere_ technieken bedenken die het meeste hieruit weten te halen. (En computers worden almaar krachtiger en kunnen dus de berekeningen sneller doen.)

Zodra ze genoeg zijn getraind, zijn ze "af". Die gigantische verzameling getalletjes wordt opgeslagen en kan nu worden gebruikt. (Als je zoiets wilt downloaden is het vaak vele, vele gigabytes. Daarover later meer.)

Hoe worden ze gebruikt? Op precies dezelfde manier.

  * GPT doet niks anders dan _steeds het volgende woord voorspellen_. Alle tekst hiervoor (inclusief jouw input) gaat in het netwerk. Het signaal wordt afgevuurd tot het een bepaalde output bereikt: het woord dat _met de hoogste kans_ hierna zal komen.
  * SD keert het proces andersom. Het systeem heeft dus geleerd hoe het van een plaatje naar willekeurige ruis gaat. (Willekeurige pixels in willekeurige kleuren.) Als jij nu vraagt om een "tijger", _begint_ het met willekeurige pixels, en verandert dit dus _in een plaatje van een tijger_. (Daarom kunnen jij en ik hetzelfde intypen bij hetzelfde systeem, en een compléét andere tijger eruit krijgen.)

## AI is dom

Veel mensen roepen dat de hype nergens op slaat. Misschien dacht jij hetzelfde: "GPT _voorspelt gewoon het volgende woord?_ Niks anders?"

En ja, AI is ook dom. Op dezelfde manier dat computers dom zijn. 

(Iemand zei ooit in een college: "Wat is intelligenter, mijn smartphone of mijn schoen? Het antwoord: het is een gelijkspel".)

Een computer bedenkt zelf niks. Als jij op een knopt drukt, gaat het niet creatief lopen zijn en de helft van de tijd iets compleet anders doen. De computer werkt precies zoals hij is ontworpen om te werken, en hij voert slechts instructies van mensen uit.

De AI is hetzelfde. Als jij een specifiek plaatje van een olifant wil, ga jij dat alleen krijgen als _jij_ de intelligente input daarvoor geeft ("olifant, in de woestijn, gezicht naar de camera, ..."). Tot die tijd doet de AI niks. En als jij niet secuur bent met je input, doet de AI iets dat je compleet niet wilt.

Het zijn maar getalletjes die elkaar afvuren en uiteindelijk een ander getalletje produceren. Het is maar een ding dat _het volgende woord voorspelt_.

Maar wij kunnen geweldige dingen gebruiken met computers. Als gereedschap voor "de intelligente mens", zijn computers eindeloos waardevol. En hetzelfde geldt voor AI.

Het zal van tijd tot tijd iets niet weten, een onjuist antwoord geven (zelfs op simpele vragen), of een antwoord geven dat je niet zocht. Maar ieder mens met een _beetje_ verstand kan hier doorheen kijken en alleen de goede kanten eruit pakken en gebruiken.

Het feit dat GPT logisch kan denken en examens kan halen is dan ook iets dat de ontwerpers _niet hadden verwacht_. Het is iets dat automatisch is ontstaan. 

Blijkbaar, als je zo'n neuraal netwerk een _ongelofelijke hoeveelheid kloppende tekst geeft_, leert het onbewust hoe je kan redeneren of stap voor stap iets toepassen. Hoe je kan uitleggen wat je doet of logisch van punt A naar punt B kunt gaan.

Het is enerzijds een compliment voor onze taal en communicatie. Het is anderzijds, achteraf gezien, onvermijdelijk. 

Als jij een miljoen liedjes binnen één bepaalde toonsoort hoort, dan denk ik dat jij daarna ook wel precies de noten uit die toonsoort kan gebruiken om zelf een liedje te schrijven. Als jij honderd teksten leest waarin men stap voor stap uitlegt hoe je een recept bakt, heb jij daarna een algemene intuïtie gekregen voor wat een "stappenplan" is, en dat je iets eerst moet maken voordat je het "in de oven kan stoppen", enzovoort. 

De huidige doorbraken komen dus deels doordat AI _onverwacht_ goed en snel is geworden. Maar deze ideeën zijn er al tientallen jaren en zijn in die tijd ook al veel verbeterd en toegepast.

## Wat er nu gebeurt

Bijna elke dag komen er wel nieuwe doorbraken. Dus ik schrijf alleen wat er _nu_ zo ongeveer aan de hand is en wat het betekent.

### Zelfreflectie

Een AI die _een_ idee heeft van de juiste volgorde, oorzaak-en-gevolg, en logisch redeneren ... kan dus _zichzelf_ verbeteren.

Een van de beste manieren om een _beter_ antwoord uit ChatGPT te krijgen, is door het simpelweg te vragen. "Reflect on your answer."

Vaak verbetert het eventuele fouten. Of het legt beter uit wat het deed, waardoor jij kan _zien_ waar het mis ging.

Dit kan je natuurlijk in een _loop_ zetten. Vraag ChatGPT iets te doen. Vraag het vervolgens zichzelf te verbeteren en daarvan te leren.

Dit is simpelweg _het (menselijke) leerproces_. Dit is _hoe je traint en verbetert_. En GPT kan dit dus allemaal zelf doen.

Onderzoeken op kleine schaal hebben dit gedaan met hele positieve resultaten. Hopelijk zie je waar dit heen gaat. Binnen afzienbare tijd kan iemand deze cyclus goed sluitend krijgen, waarna de AI _zichzelf traint en verbetert_, met een oneindig hoog plafond als gevolg.

Hier zitten natuurlijk wat haken en ogen aan. Een AI kan niet ineens informatie weten die het nooit heeft gezien in diens data. En het kan een verkeerd plafond bereiken: het bevestigt diens eigen _foute_ aannames. Daarom is men nog op zoek naar manieren om dat stukje op te lossen.

Maar _als_ dat eenmaal lukt ... ja, ik weet niet of jij het ook voelt, maar de mogelijkheden zijn dus eindeloos. Eindeloos mooi en eindeloos eng. Met minimaal werk van de menselijke kant, krijg je een AI die bijna alle vragen kan beantwoorden of oplossen. En over tijd wordt het alleen maar slimmer en leert van diens fouten---automatisch.

### Toegankelijkheid

De eerste versies hiervan werden getraind op enorme netwerken van krachtige computers. Als je GPT iets vraagt, duurt het even voordat je antwoord krijgt, en het kost bedrijven ongelofelijk veel geld om deze infrastructuur aan te bieden.

Je moet er niet aan denken om dit zelf te doen. SD is al langer beschikbaar voor iedereen en goedkoper, maar ook daarvoor heb je een flinke grafische kaart nodig. Ik kan het alleen laten werken op onze "goede gezamenlijke computer" (iets meer dan een jaar geleden aangeschaft), en zelfs dan kan ik alleen kleine plaatjes maken die 5 minuten duren.

Maar ook hier bestaat weer een slim trucje. Als je dit systeem eenmaal _hebt_, kan je het gebruiken om een kleiner systeem te trainen.

Het origineel moest een _berg_ data bekijken en helemaal vanaf het begin alles leren.

Zo'n kopie heeft veel minder werk te doen.

  * Het bedenkt willekeurige prompts.
  * Het stopt deze in GPT en kijkt wat het terugkrijgt.
  * Tijdens de _training_ probeert het dus te voorspellen of diens eigen antwoord klopt met GPT.
  * (Zo nee, verander de getalletjes een beetje.)

Je bouwt eigenlijk een soort goedkope kopie, een soort namaakproduct, van GPT. Het kan nooit bestaan _zonder_ GPT en wordt ook niet beter dan dat.

Maar waar GPT _biljoenen_ getalletjes nodig heeft, kan de namaak het doen met _een paar miljoen_ (hoogstens). 

En zo gebeurt het dat ik gratis een versie van GPT4 kan downloaden op mijn _tien jaar oude, kapotte, langzame laptop_. Hij is, naar mijn inschatting, 80% zo goed als het echte werk. Maar het is offline, gratis, op mijn laptop, en start binnen een paar minuten op. (Het moet dat hele model nog wel "laden".)

### AI stapelen

Zo'n beetje het laatste grote probleem is dat de AI een soort zwarte doos is. Je kan er niet inkijken, en je moet het maar doen met wat je terugkrijgt. 

Stel SD maakt een plaatje voor mij. Ik vind het geweldig, _behalve_ dan een stukje in de linker bovenhoek. Ik moet dat met de hand veranderen of weghalen. Want SD geeft mij één plaatje, helemaal af, en dat is dat.

Of stel ik wil zowel een tekst vertalen als laten inspreken (door een computerstem). GPT kan alleen _tekst_ doen. Dus ik zou losse AI moeten gebruiken en maar hopen dat het allemaal elkaar begrijpt en op elkaar aansluit.

Vanzelfsprekend worden hier dus ook doorbraken gedaan. 

Zoals de AI zichzelf kan verbeteren, kan het dus ook _uitleggen_ wat het doet. Zo kan men systemen bouwen waarin de AI stap voor stap zegt waarmee het nu bezig is of welke informatie het waarvandaan haalt.

En als dat kan, dan kan je dus ook verschillende AIs voor de stappen aanroepen. Zo heeft men nu de eerste systemen die als volgt werken.

  * Je begint met GPT. Die geef je een instructie. Op basis daarvan maakt het systeem dus een stappenplan, met logisch oorzaak-en-gevolg.
  * Bij elke stap kan het _een andere AI aanroepen_.
  * Bijvoorbeeld, het ziet de stap "zet deze tekst om in een gesproken fragment". Het zoekt een AI die dat kan doen en geeft de tekst door.

Op deze manier kan je dus op één plek alle verschillende AIs hun stukje laten doen. Zoals inmiddels te verwachten: men behaalt hiermee zeer goede resultaten, en nu kan je ook nog _zien_ wat er gebeurt en waar het eventueel misgaat.

Dit heet **multimodaliteit**: het idee dat een AI niet in één gebied werkt, maar meerdere. Microsoft's Bing Chat kan inmiddels al zowel plaatjes als tekst geven als antwoord op vragen, hoewel het in een wat ruw voorstadium is.

### Samenvattend

Dit zijn allemaal ontwikkelingen binnen een paar maanden tijd. Tegen het einde van het jaar kan je dus verwachten dat elk stukje (zelfreflectie, toegankelijkheid, multimodaliteit) minstens een paar stappen vooruit is gegaan.

Het is niet gek om te denken dat iedereen met een semi-functionele computer elke denkbare AI helemaal zelf, gratis, offline, geïnstalleerd kan gebruiken. (Dus niet meer afhankelijk van internet, restricties van bedrijven, hoge lidmaatschappen.)

Het is niet gek om te denken dat GPT nu een vergelijkbare score haalt met mensen op de meeste (belangrijke) testen, maar aan het einde van het jaar consistent beter scoort. Want een systeem dat razendsnel fouten kan maken en daarop reflecteren, is een systeem dat razendsnel kan verbeteren en leren. 

Het is alsof jij elke dag twintig miljoen keer een voetbal trapt naar een goal. En als je mist, weet je _precies_ hoeveel je hebt gemist en welke dingetjes je anders moet doen. Jij zal razendsnel de beste traptechniek ter wereld hebben.

Dus wat zijn de gevolgen? 

## In de praktijk

Ik heb de AI dus een beetje gebruikt in de praktijk. Niet overmatig. Niet zoals sommige mensen per direct hun hele leven lijken te hangen aan ChatGPT. Sterker nog, met ChatGPT heb ik dus maar zo'n twintig keer gepraat _in totaal_.

Want het blijven inderdaad domme systemen die _gereedschappen_ zijn voor mensen. Net zoals een sterke computer kopen mij niet ineens 1000x productiever zou maken. En een gewéldige schilder, ook al is dat een stijl/vaardigheid die ik op dit moment nauwelijks kan.

Iets beter gereedschap maakt meer mogelijk en versimpelt sommige dingen. Het kan iemand niet van 0 naar 100 brengen binnen een seconde.

Maar als je een beetje weet wat je doet? Als je een beetje de systemen begrijpt, en de taak die je normaal gesproken handmatig zou doen? Dan maakt het sommige onderdelen wél 1000x sneller en makkelijker.

Bijvoorbeeld, stel ik maak een spel. Normaal gesproken zoek ik referenties, de stijl die ik wil, de kleuren ... en dan ga ik dat allemaal zelf proberen te ontwerpen. 

Nu zijn de eerste stappen precies hetzelfde, maar vraag ik de AI om het plaatje te maken.

Als ik de stappen niet zet, kan ik niks goeds uit de AI krijgen. Want ik geef geen sturing en geen algemeen overzicht van een ontwerp. Ik vraag om een olifant, en krijg steeds olifanten in compléét andere stijlen, hoeken, kleuren, composities, etcetera.

Maar ik zie niet het nut van zelf urenlang iets tekenen, als de AI het in een paar minuten doet. (Ik gebruik ontwerpen als voorbeeld, omdat het iets is waarmee ik veel ervaring heb en dat ik redelijk kan. Maar van al mijn vaardigheden is het de zwakste en ik stel het vaak uit omdat ik er het minste plezier uithaal. Iemand die ongelofelijk blij wordt van tekenen, ja, blijf lekker tekenen. Hierover dadelijk meer.)

Bijvoorbeeld, stel ik _programmeer_ dat spel. Normaal gesproken bedenk ik de verschillende onderdelen, breek ze op in logische stappen / algoritmes ... en dan programmeer ik dat allemaal.

Nu zijn alle stappen precies hetzelfde, maar als ik weet dat een stuk code vrij bekend/repetitief is, kan ik het de AI vragen.

Zonder mijn eigen onderzoek, kan de AI niks. Het gaat mij niet perfecte code geven, als ik simpelweg zeg "een poppetje dat kan lopen, en springen, in een wereld met bomen die hem opeten, en bovenin staat een tekst met je score, en als je op spatie drukt dan ..." Het is te vaag en te veel. _Ik_ moet de problemen oplossen en ophakken in minuscule, logische hapjes.

De meeste code zal uniek zijn en alleen voor mijn specifieke spel. De AI kan die niet maken. Het zal mij meer tijd kosten om de AI _uit te leggen_ hoe het systeem werkt en wat ik wil ... dan dat het mij kost om het zelf te schrijven. Maar de meeste programmeurs zullen dit lezen en precies weten waarop ik doel met "stukjes boilerplate code die ongelofelijk repetitief zijn".

Ik gebruik de AI denk ik eens in de paar dagen. Maar ik heb projecten nu al afgemaakt (of gedurfd te beginnen) omdat ik weet dat ik de AI heb, die het proces flink kan versnellen en de meest lastige (of frustrerende) onderdelen van mijn schouders kan halen. 

Ik heb een kaartspel klaarliggen met werkelijk _prachtige_ kaarten. Het was nog steeds 90% handmatig werk. Ik heb de lettertypes, het ontwerp, de regels, de kleuren, bijna _alles_ uitgezocht en ontworpen. Maar delen van de icoontjes of karakters op kaarten kon ik de AI laten maken. Ik geef precies de juiste stijl en richting, bekijk zo'n 10-20 plaatjes met kritisch oog, en dan is het wel raak.

Op dezelfde manier overweeg ik om mijn Levenssaga te vertalen naar het Engels. GPT kan dat doen ... tot op zekere hoogte. Ik moet _mijn_ schrijfstijl en wensen eerst duidelijk maken. Ik moet zelf de tekst alsnog lezen om hier en daar kromme (of simpelweg _onjuiste_ zinnen) aan te passen. Maar het maakt zo'n vertaling ineens mogelijk binnen een paar dagen, waar het anders een maand zou duren. En het is niet alsof het daardoor minder goed wordt, want het is een _vertaling_. Een vrij repetitief proces waarbij je elke zin simpelweg in een andere taal zet. 

Waarom zou ik niet zo'n AI gebruiken? Waarom zou ik dat helemaal zelf wekenlang doen?

## Toekomst & Problemen

Het eerste grote probleem is natuurlijk _copyright_. De data is vaak niet 100% openbaar en vrij toegankelijk. (In sommige gevallen is zelfs het grootste deel dat niet.)

Vooralsnog is er geen duidelijke uitspraak. De systemen zijn toegestaan onder de huidige regels. Enkele rechtszaken zijn begonnen, maar zonder resultaat. De _Copyright Office_ in Amerika heeft alleen deze simpele wijziging/uitspraak gedaan (ik parafraseer):

> Werken gemaakt met AI vallen onder _jouw_ copyright, en zijn dus van jou en kunnen dus commercieel worden gebruikt, zolang significant menselijke arbeid daarbij betrokken was.

Oftewel, je mag AI plaatjes gebruiken als je deze nog flink bewerkt in Photoshop, of gebruikt in een veel groter ontwerp met je eigen onderdelen. Het is enigszins vaag, want wat is "genoeg menselijke arbeid"?

Maar dit was wel de richting die werd verwacht. Velen kunnen zich hierin vinden en dit wordt eigenlijk al, stiekem, toegepast overal.

Want ja, in één van die rechtszaken vroeg de verdediging bijvoorbeeld: "laat mij dan precies het plaatje zien waarvan deze andere plaatjes het copyright overtreden." En dat kan je niet. De dingen die ik heb laten maken met de AI lijken op geen enkele manier op bestaande werken, hoe lang ik ook zoek of de _image search_ gebruik.

Dat komt dus door hoe het algoritme werkt. Het slaat niet de plaatjes op. Het is niet alsof het een database heeft met "tijgerplaatjes" waarvan het een paar pakt als jij vraagt om een "tijger".

Het systeem _leert_, intuïtief, precies zoals een mens dat zou doen, hoe je iets maakt met de juiste proporties en lichaamsonderdelen van een tijger. 

Als ik zelf een tijger zou tekenen voor een project, zou ik precies hetzelfde doen. Plaatjes opzoeken van tijgers. Andere ontwerpen met tijgers bekijken. Daarvan leren wat mooi is en wat niet. Wat het idee "tijger" goed communiceert en wat niet. En dat mix ik dan tot precies wat ik nodig heb voor mijn eigen doeleinden.

Dat is niet mijn unieke proces, dit is hoe _alle kunst ontstaat_ van _alle kunstenaars_. Wat de AI doet is _nog vele minder_ copyrightschending dan wat mensen doen. Dus ik verwacht niet dat er strengere regels uit de rechtszaken komen, en zeker geen verbod.

Wat wél aannemelijk is, en aan te raden, is dat in de toekomst de data gebruikt voor de systemen openbaar moet zijn. Zo kan je dus weten welk systeem is gemaakt op _copyrighted material_, en welke helemaal niet. En als je dus aan de juiste kant van het verhaal wilt zitten, gebruik je alleen de systemen gemaakt op openbare data.

(Hetzelfde met GPT natuurlijk. Hoewel de meeste boeken die in de data zitten klassiekers zijn die lang geleden _public domain_ zijn geworden. Dus die tekst en stijl zou je zelfs 100% mogen kopiëren als je wilde, terwijl de AI het niet kopieert maar hergebruikt op subtiele manieren.)

Ik weet niet wat er gaat gebeuren, zowel wettelijk als maatschappelijk. Daarom heb ik besloten de AI, voor nu, alleen te gebruiken voor niet-commerciële projecten of op manieren waarvan ik nogal zeker ben dat ze geen problemen opleveren. (99% mijn eigen werk, AI slechts minuscule hulp of inspiratie.)

Maar wat vaststaat is dat de wereld razendsnel verandert. Hele bedrijven zijn binnen maanden failliet gegaan omdat de AI precies doet wat zij eerst deden. Maar nu sneller, beter, en gratis.

Ik heb mezelf altijd voorgenomen om beter te leren schilderen of (realistisch) met de hand tekenen. Maar nu is daar geen enkele reden meer voor. Ik heb _genoeg_ vaardigheid en inzicht om samen met de AI precies te maken wat ik wil.

Mijn afstudeerscriptie ging over het voorspellen van bezoekersaantallen voor een theatervoorstelling. Mijn poging, na maandenlang proberen, zat er gemiddeld 100 kaartjes vanaf. Niet bepaald geweldig. Ik weet zeker dat een AI als deze binnen de kortste keren véél dichterbij komt. 

Een gigantische hoeveelheid banen zullen verdwijnen. Veel banen zullen veranderen, zoals die van mij eigenlijk---subtiel als een sluipmoordenaar---binnen een paar maanden al is veranderd.

Tegelijkertijd zijn er dus dingen die altijd menselijk zullen blijven, hoe goed de AI ook wordt. We hebben inmiddels computers die beter schaken dan mensen. Toch zijn er veel professionele schakers die goed worden betaald, en mensen die dat volgen (en/of zelf spelen). We hebben allang voertuigen die veel sneller zijn dan mensen, toch bedrijven en volgen veel mensen nog atletiek.

Er is een grote klasse problemen waar het niks uitmaakt of mensen erachter schuil gaan. Problemen, vaak logisch of frustrerend, die gewoon moeten worden _opgelost_. Taken die gewoon moeten worden _gedaan_, maar niemand (of weinigen) willen ze doen. Die kan de AI allemaal overnemen en daarvoor staat het nu al half klaar.

Bij andere dingen geeft men, zelfs honderden jaren na invoering van computers of apparaten, nog altijd om dat er _mensen_ achter zitten. Dat de prestatie of de creativiteit komt van een _mens_. Ik vind dat genoeg bewijs om te zeggen dat dit nooit zal veranderen. Misschien krimpt die groep verder, misschien verandert het idee van wat een knappe prestatie van een mens is, maar het gaat nooit weg.

Andere problemen zijn natuurlijk veiligheid en macht. Nu zit veel macht nog bij de grote organisaties, maar zoals ik al zei komen de meeste algoritmes gratis beschikbaar. Sterker nog, er zijn gelekte documenten dat sommige van die organisaties twijfelen of ze niet mee moeten met de gratis "open source" onderzoeken en algoritmes, in plaats van dingen geheim of betaald houden.

En veiligheid? _Niemand die het weet_. Zo'n AI die zichzelf eindeloos verbeterd, zou bijvoorbeeld kunnen betekenen dat de AI leert om door diens eigen systeem heen te breken en zichzelf als een virus te verspreiden. Iets dat voor sommige "onvermijdelijk" is (tenzij iedereen rustiger aan doet met die AI) en voor anderen "ondenkbaar". De waarheid zit er, zoals meestal, tussenin. Het is zeker mogelijk, het is op dit moment niet heel waarschijnlijk.

Maar het grootste probleem blijft dat niemand, zelfs de onderzoekers, weten hoe veilig het is en waar het heen gaat. Zoals ik al zei, de "intelligentie" en het logisch redeneren van GPT was een complete verrassing. Iets dat het algoritme toevallig leerde door heel veel teksten op te slaan.

Iets dat opnieuw zou kunnen gebeuren. We verwachten dat GPT-5 iets beter is dan GPT-4 ... maar ineens blijkt het _stukken_ beter, of begint het akelige intelligentie te vertonen. De kans is vrijwel nul dat het _slechter_ wordt bij nieuwere versies.

## Het enige echte probleem: geld

Eigenlijk, als je er langer over nadenkt, is geld het enige probleem.

Onze maatschappij is ingericht op dat iedereen _arbeid_ moet leveren dat waardevol genoeg is (voor de maatschappij) om geld ermee te verdienen. Simpelweg bestaan, of een goed mens zijn, of dingen maken is niet genoeg. (Een enigszins deprimerende realisatie, maar oké, het is begrijpelijk.)

Maar ik maak, zoals de meeste kunstenaars, geen dingen vanwege geld. Kunstenaar ben je omdat je de onbedwingbare drang voelt om elke dag te _creëren_, ongeacht of het iets oplevert of wat anderen ervan vinden. (Daarnaast _is_ er nauwelijks geld in de creatieve wereld.) De enige reden dat ik doe aan marketing en probeer dingen te verkopen, is omdat ik dat geld nodig heb voor eten en onderdak.

Op dezelfde manier zou ik het niet erg vinden als anderen mijn plaatjes of teksten hergebruiken in hun eigen werk, zelfs als ze dat vrij overduidelijk hebben gekopieerd zonder enige aanpassing. _I don't care._ Een groot compliment, als mensen mijn werk zo gebruiken. 

Zo ontdekte ik iemand die sinds kort nogal dezelfde woorden en ideeën gebruikt in spellen die ze maken als ik doe bij mijn One Paper Games. De vergelijking is zo compleet (en zij dermate nieuw) dat ik vrij zeker ben dat ze op z'n minst mijn werk hebben gezien en erdoor geïnspireerd zijn geraakt. Geweldig, toch? Meer toegankelijke, goedkope en simpele (bord)spellen is _beter_.

De enige reden waarom ik er wel om _moet_ geven, is omdat zo'n kopie van mijn werk een hap uit mijn inkomsten zal nemen. En die heb ik vooralsnog nodig. (Sommige kunstenaars geven veel om _credits_ of _naamsbekendheid_. Maar zelfs dan is dat vaak geen arrogantie of zoektocht naar status, maar omdat die credits dus _zorgen voor meer inkomen._)

Deze AI neemt een gigantische hap uit de mogelijke arbeid. Veel dingen hoeven niet meer door mensen gedaan. De rest kan veel sneller of simpeler, waardoor mensen er geen hele werkweek mee kunnen vullen.

Zodanig dat er niet genoeg arbeid over is voor iedereen. Wat overblijft zijn _fysieke_ handelingen die een robotarm nog niet kan, of dingen waarbij men liever de empathie of zekerheid van een mens heeft.

Dus de wereld moet overstappen naar een maatschappij die _niet_ alleen maar werkt op geld. De meest genoemde oplossing is dus UBI: _Universal Basic Income_. Iedereen krijgt standaard een geldbedrag elke maand, zonder restricties of andere regels, dat genoeg is om van te leven. Wie alsnog werkt en dingen verkoopt, krijgt extra geld als beloning (zoals "vroeger").

Andere oplossingen worden ook onderzocht, en dat is goed. Maar ik denk dat dit eraan komt, en eerder vroeger dan later. Instanties zoals de overheid en het onderwijs zullen wel hun traditie doorzetten van véél te laat overal op reageren en niet meegaan met de tijd. 

Er zullen eerst voorzichtige tussenstappen komen. Dat banen die het meeste lijden onder AI, bijvoorbeeld, een paar jaar subsidie krijgen van de overheid terwijl ze "omscholen naar een nieuwe baan". Dit zal een paar keer opnieuw gebeuren voordat de overheid doorheeft dat er geen "nieuwe banen" zijn en dat het hele idee van "iedereen _moet_ werken en arbeid leveren voor geld" misschien kan aangepast.

Ik probeer deze mind-set al jarenlang te cultiveren. Ik maak kunst omdat _ik het wil maken_. Ik ben creatief omdat _ik creatief wil zijn_. Niet omdat het geld moet opleveren. Als ik aan dat tweede denk, stopt alles en wil ik niet meer uit bed komen. 

Ik ben niet bang dat AI mijn baan overneemt, want zelfs als AI geweldige spellen zou kunnen maken, zou ik _alsnog_ voor mijn eigen plezier achter mij laptopje handmatig multiplayerspelletjes maken. Ik vind het niet erg dat AI steeds betere verhalen kan bedenken. Want zelfs als het in één seconde een boek zou uitpoepen, zou ik alsnog zelf verhalen verzinnen omdat _ik dat leuk vind._

Het enige echte probleem? Geld. Geld dat je nu nog nodig hebt voor eten en onderdak.

## Conclusie

Tot zover de uitleg, updates, mijn gedachten en toekomstbeeld over AI. Misschien komt over een paar maanden weer zo'n artikel, als er weer twintig doorbraken zijn geweest die de hele wereld moeten opschudden ... maar nu alleen binnenkomen bij de paar mensen die de technologie een beetje snappen.

Ik meen het. De wereld _is_ al veranderd, en verandert nog een paar keer drastisch de komende paar jaar, totdat hele banen zijn verdwenen (en hopelijk het hele rotte onderwijssysteem overhoop). Het lijkt me verstandig om hierop voor te bereiden, of op z'n minst erover na te denken.

Of het allemaal echt zo loopt? We zullen het zien.