---
title: 'Pandaqi Tutorials: het jubileum van twijfels'
author: tiamopastoor
date: 2023-12-15T03:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Zo rond 2015 lanceerde ik de website **Pandaqi Tutorials.** Het was mijn eerste grote, afgemaakte, professionele website. Het stond vol met Engels geschreven "tutorials" of "gidsen" die uitlegden hoe je dingen deed, van programmeren, tot tekenen, tot adviezen voor je gezondheid.

Bij lancering stond er al heel wat op. De zes maanden daarna werkte ik héél hard en voegde de tien grootste, beste, meest professionele gidsen toe die ik ooit maakte. Daarna stopte ik volledig.

Sindsdien heb ik deze website als een soort vraagstuk meegesleept.

_Moet ik ermee doorgaan? Moet ik het updaten? Moet ik het online houden? Moet ik het überhaupt nog bewaren_?

Het ene moment was ik positief. De website werd veel bezocht, de laatste gidsen zijn echt van heel hoge kwaliteit, dus natuurlijk moet dit project voorgoed online blijven!

Het andere moment was ik negatief. De kwaliteit van de website is op veel delen best matig. Zoveel bezoekers zijn het nou ook weer niet. En het levert me, voor zover ik kan zien, helemaal niks op. Het kost me alleen tijd en geld om online te houden.

Laatst wilde ik definitief mijn online aanwezigheid ( = de vele websites die ik heb) opruimen en regelen. Dus dit vraagstuk moest beantwoord. 

Is het waardevol om regelmatig tijd te blijven steken in deze website? Om hem online te houden, mee te gaan met de moderne ontwikkeling van het internet, en relevant te blijven?

Of ben ik verblind door het argument "ik heb hier zes maanden van mijn leven in gestoken, dit moet voor eeuwig bewaard"?

In dit artikel wil ik uitleggen waarom ik uiteindelijk _toch_ de website heb bewaard en helemaal geüpdatet. En hoe dat ging, met veel vallen en soms opstaan.

Hieronder wat voorbeelden van hoe de oude website eruitzag.

![](/uploads/2022/11/pandaqi_header_clicked.webp) 

![](/uploads/2022/11/pandaqi_tutorial_heading_and_quick_contents.webp) 

## Stap 1: objectief kijken

Ik dacht dus dat deze website me niks had opgeleverd. Het was een grappig "eerste serieuze project" dat inmiddels langzaam beschamend werd.

Maar gedachten zijn altijd gekleurd, dus ik ging objectief de voordelen en nadelen op een rijtje zetten.

En toen zag ik dat deze website me misschien wel meer had opgeleverd dan al mijn andere werk.

Bijvoorbeeld, ik heb meegeschreven aan een boek over de software waarmee ik games maak (Godot Engine). Dat was een van mijn eerste serieuze inkomens én natuurlijk naamsbekendheid. Hoe vonden ze mij? Via een spelletje dat ik had gemaakt en mijn tutorial website. Daardoor wisten ze dat ik goed Engels kon schrijven en dingen uitleggen.

Op dezelfde manier heb ik een stuk of tien aanbiedingen gehad over de jaren om mee te helpen met soortgelijke projecten. Of om simpelweg informatie uit te wisselen of te netwerken. Ik moest veel daarvan afslaan, want ik studeerde nog en mijn gezondheid was slecht. Maar mensen vonden de website en waren genoeg onder de indruk om mij een betaalde baan aan te bieden.

Als ik de statistieken bekijk van mijn websites, dan zie ik dat _al mijn andere websites bij elkaar_ nog steeds _minder bezoekers hebben dan Pandaqi Tutorials in z'n eentje_. Ergens heb ik iets goed gedaan.

Tja. Als je het eens objectief bekijkt, zou het achterlijk zijn om deze website weg te gooien.

## Stap 2: hoe gaan we het veranderen?

Maar dat was slechts de eerste stap. Het bleef een _verouderde, rommelige website_ waarvan minstens 50% van de inhoud _een flinke opschoonbeurt mocht krijgen._ Het gebruikte systeem maakte het heel moeilijk om dingen toe te voegen of te veranderen, zowel per artikel, als over de gehele website.

Het duurde niet lang voordat ik zeker wist: **ik moet alles overzetten naar een veel beter systeem**. 

Het duurde ook niet lang voordat ik wist dat dit hetzelfde systeem moest zijn dat al mijn websites (behalve dit blog) gebruiken. Het is veruit het beste dat ik kan vinden, zeker voor zulke projecten. Daarnaast is het natuurlijk fijn als _alles_ hetzelfde systeem gebruikt. Ik kan code uitwisselen. Ik kan over tijd alle websites gezamenlijk updaten.

Dit systeem is een _statische website_ met behulp van de gratis _Hugo_ software. Dat betekent het volgende:

  * Alle inhoud van de website zijn simpele tekstbestanden. Je kan ze overal openen en ze lezen/editen makkelijk, want er is nauwelijks code of opmaak.
  * Maar dankzij een _thema_ (code op een andere plek, los van de inhoud) kan ik precies zeggen hoe deze tekst uiteindelijk op de website moet komen. 
  * Dit is zo krachtig dat ik met één regel code werkelijk de hele website een andere structuur of lay-out kan geven.
  * Als ik tevreden ben, exporteer ik dit. Hugo bouwt de folder om tot een website, ik upload die in drie seconden naar de server, en klaar is kees.

Bij de originele website moest ik _zelf, handmatig_ elk artikel typen en coderen. 

Als ik bijvoorbeeld een stukje voorbeeldcode wilde laten zien, moest ik in het artikel zelf alle _tags_ typen die daarvoor nodig zijn. (En mocht er iets veranderen, moest ik dit dus _door de hele database_ handmatig veranderen.)

Nu hoef ik alleen te zeggen "{{/*< highlight >*/}}" en daarna de code te plakken. Ergens anders zeg ik (eenmalig) precies _hoe_ code moet worden _gehighlight_. En we zijn klaar!

Dus ja, het nieuwe systeem zal duizend keer sneller en beter zijn. Het zal ook zorgen dat ik in de toekomst veel makkelijker dingen kan toevoegen of veranderen. 

Maar ja ... nu komt de lange stap van het overzetten zelf.

## Stap 3: overzetten

De originele website gebruikte dus een _database_. Dat is niets anders dan een _tabel_ op de server. Elke rij heeft een paar eigenschappen: titel, categorie, inhoud, en andere eigenschappen voor elk artikel.

Ik heb lang gezocht naar een manier om dit automatisch te exporteren naar _losse_ bestanden met de juiste instellingen. (Hugo gebruikt _Markdown_. Dat is praktisch alsof je een artikel typt in Word, maar met kleine tags die je kan toevoegen om dingen meteen de juiste structuur en opmaak te geven.)

Ik heb niks gevonden. Niet eens iets dat in de _buurt_ kwam.

Dus ik moest het zelf doen. Ik heb de database gedownload als één bestand met _alles_ erin. En toen heb ik urenlang allerlei "Zoek en Vervang"-opdrachten daarop uitgevoerd :p Bijvoorbeeld ...

  * Een database kent het concept van "witregels" niet. Die worden automatisch omgezet in de symbolen daarvoor: "\r\n" (return + newline). Dus die zocht ik op en verving ik met een echte witregel.
  * _Om een of andere reden_ had ik alle bijzondere symbolen in de artikelen omgezet in _HTML entities_. (Bijvoorbeeld, je kan een quote normaal typen ("), of je kan `&quot;` typen.) Dus die mocht ik weer terug omzetten naar wat ze voorstellen, want voor Markdown hoeft dit niet.
  * Het beste exportformaat dat ik kon vinden, plaatste alsnog allemaal extra symbolen links en rechts. Voor elke quote kwam een slash. Drie streepjes naast elkaar (dat vormt een em-dash:---) moesten ook ineens slashes erdoorheen krijgen. Die gingen allemaal weg.

Nu had ik een gigantisch bestand vol losse artikelen, vol _code_. Gelukkig bestaan er online website die HTML code omzetten in Markdown. 

Eerst gooide ik het hele bestand erin, maar dat crashte elke website die ik probeerde :p Het zijn dan ook bijna duizend artikelen. Dus ik splitste het in stukjes en zette het zo om.

Nu hebben we vijf grote bestanden vol losse artikelen, die _grotendeels_ kloppende Markdown bevatten. Maar ze staan in willekeurige volgorde. En andere cruciale data (zoals in welke categorie ze zitten), klopte niet meer, want dat had ik allemaal veranderd.

Tja, geen enkel script gaat de juiste volgorde terughalen hieruit. Dat kan alleen een mens handmatig doen. Een mens dat nog herinnert hoe de website origineel in elkaar stak.

Dus hier hield de pret op.

Vanaf dit moment moest ik:

  * Elke "course" handmatig aanmaken: folder + hoofdbestand
  * Daarin voor elk "artikel" een folder + hoofdbestand aanmaken
  * En de inhoud van het artikel uit dat gigantische bestand knippen-plakken naar het nieuwe bestand
  * En vervolgens _de honderden fouten en missende onderdelen fiksen_

## Stap 4: de website opnieuw opbouwen

Ik hoopte, in eerste instantie, de originele websitecode te kunnen gebruiken. Met wat aanpassingen kon ik het dan aan Hugo voeren. (Wie niet weet wat dat is denkt waarschijnlijk dat ik over een programmeervriend van mij praat ofzo :p) De website zou precies hetzelfde blijven, en ik zou er geen extra tijd aan kwijt zijn.

Dat bleek dus een illusie. En eigenlijk was dat goed.

Want op de originele website had ik vaak _honderden regels code_ nodig om iets te bereiken. Ik had allemaal gekke ideeën voor opmaak, structuur, dingetjes die bezoekers misschien handig zouden vinden. Het internet was er toen nog niet helemaal klaar voor. 

Inmiddels wel! Vrijwel al die "hacks" konden nu vervangen door een paar regels moderne websitecode. Het werkte nog beter ook. Een paar voorbeelden:

  * Vroeger moest je doen alsof iets een _tabel_ was, als je netjes een grid wilde hebben dat de hele pagina vulde. Zoals de oude voorpagina met blokken waarop je kon klikken. Inmiddels heb je gewoon het _grid_ element (of _flexbox_).
  * Ik had een heel ingewikkeld systeem geschreven om elke pagina te scannen en stiekem _hyphens_ (-) toe te voegen. Zo konden browsers woorden aan het einde van de zin afbreken op logische plekken, zoals bij boeken gebeurd. Inmiddels kan je typen `hyphens:auto;` en een kind kan de was doen.
  * Ik had een hack om zeshoekige figuurtjes te maken. Inmiddels kan dat ook met één regel code. (Op twee manieren zelfs, afhankelijk van wat jou uitkomt!)

Van sommige ideeën was het logisch dat het internet er niet klaar voor was---want het waren slechte ideeën.

  * Onder sommige codevoorbeelden stond een knop "Try it in the editor!" Dan werd je doorgestuurd naar een andere pagina waar je meteen kon spelen met de code. Maar ik kreeg dit alleen werkend voor websitecode, terwijl ... tja, als je een browser hebt, dan kan je websitecode schrijven en testen. Daar heb je mijn krakkemikkige website niet voor nodig.
  * Om ruimte te besparen, had ik alle filmpjes omgezet in GIFs. En vervolgens wéér een ellenlang stuk code geschreven om deze af te spelen (inclusief pauze/terugspoel knop) _alsof het een filmpje was._ Dat was nooit een goed idee.
  * Er waren maar liefst _twaalf hoofdcategorieën._ Twaalf! En de helft was leeg. Natuurlijk, want dit is veel te veel.

Ik had echt _veel_ tijd gestoken in het menu bovenaan. Het was een golvend grid van zeshoeken, twee onder elkaar. De bovenste had de _hoofdcategorieën_ en de onderste de _subcategorieën_.

In de praktijk betekende dit duizenden regels code. Zodat ik een groot blok bovenaan de website had dat constant in de weg zat en ruimte opnam. En grotendeels leeg was, omdat niet alle categorieën (veel) inhoud hadden. Als ik zelf de website gebruikte, sloeg ik het menu ook altijd over.

![](/uploads/2022/11/pandaqi_header.webp) 

Kortom: ik bouwde de website helemaal opnieuw. Dankzij moderne technologie kon de code nu veel korter en beter. Alle onderdelen die achteraf gezien achterlijk waren, gingen weg. En waar mogelijk voegde ik verbeteringen toe.

  * Inmiddels vind ik dat _headers/menu's bovenaan de website_ grotendeels een slecht idee zijn. Bij al mijn websites plaats ik de navigatie in de structuur zelf of helemaal onderaan. Het is zinloos om op elke pagina eerst langs dat hoofdmenu te moeten scrollen/kijken. Dus ook bij deze. 
  * Ik kan nu een veel mooiere highlighter maken voor de code voorbeelden.
  * Ik liet vaak code + plaatje naast elkaar zien. Maar soms is de code te lang, of het plaatje te groot, waardoor ze allebei onleesbaar zijn. Nu kon ik daar makkelijk een variant van maken: als ik het aangeef, dan veranderen ze van grootte, of gaan onder elkaar staan.
  * De originele website had veel plaatjes _in de artikelen zelf_, maar niet daaromheen. Daar was alles saaie blokken tekst. Dat loste ik op door veel icoontjes te gebruiken. Bovendien ondersteunen alle browsers al lange tijd HTML entities die _emojis_ zijn. Dus zonder werk van mijn kant, kan ik links en rechts icoontjes gebruiken. Zowel in de tutorials als in de lay-out.
  * Elke categorie had z'n eigen kleurenschema. Maar ... die werd alleen gebruikt op _drie_ plekken en verder niet! De nieuwe website gebruikt subtiel het kleurenschema van je huidige tutorial over de _hele_ lay-out.
  * Op dezelfde manier kwam dat _zeshoekenthema_ eigenlijk nergens meer terug. Nu zit het voor kopjes, subtiel in de achtergrond, achter icoontjes. Ik wist zelfs de voorpagina een _zeshoekig grid_ te maken! (Met wat kunst- en vliegwerk, dat wel.)

![](/uploads/2022/11/pandaqi_general_article.webp) 

![](/uploads/2022/11/pandaqi_special_boxes_inside.webp) 

De conclusie? 

  * De website heeft slechts een paar grote stijlonderdelen. Die worden overal hergebruikt. Het is meer consistent en tegelijkertijd sneller om te laden voor de browser. (De originele website was echt _gigantisch_ in dat opzicht.)
  * De website hangt niet meer af van externe onderdelen. Al die oude systemen hingen af van _andere_ bestanden of websites. (Zoals mijn code voor _hyphens_ toevoegen. Die moest de lijst---die zegt hoe je Engelse woorden opbreekt---ergens anders vandaan halen.)
  * Ik kan alles bereiken met simpele tags in de Markdown. (Bijvoorbeeld, code+plaatje naast elkaar krijg ik door `{{/*< double-view >*/}}` te typen. Met eventueel wat argumenten daarna om dingen aan te passen.)
  * De website is veel schoner, professioneler, strakker. Het maakt het een beetje "kaal", dat wel. Maar aan het einde van de dag zullen mensen die de tutorials zoeken vooral de _informatie_ willen, zo duidelijk en snel mogelijk. Dat zou ik nu willen, in ieder geval. Dat de website mooi en levendig is ... dat is een bijzaak.

![](/uploads/2022/11/pandaqi_double_view.webp) 

![](/uploads/2022/11/pandaqi_image_and_sidenote.webp) 

## Stap 4: schrijven kan altijd beter

Dit was het moment waarop ik opnieuw twijfelde.

Ik herinnerde dat ik zeer content was met de schrijfkwaliteit. Ik vond het professioneel, ik dacht geen enkele fout meer te maken qua Engelse grammatica, ik was tevreden.

Nou, dat viel ook tegen.

Het is niet _slecht_. Er zijn inderdaad nauwelijks spel- of taalfouten. Het is redelijk professioneel en duidelijk.

Maar als ik iets de afgelopen 10 jaar heb gedaan (sinds lancering van de website), dan is het _schrijven_. Schrijven in het Engels en het Nederlands. Schrijven om te publiceren, schrijven om geld te verdienen, schrijven elke dag.

Dus "niet slecht" is natuurlijk niet genoeg. Terwijl ik de artikelen overzette, kon ik mezelf niet inhouden en ging automatisch redigeren. Dit ging over zowel hele kleine als hele grote dingen.

**Voorbeeld van iets kleins:** de eerste course die ik overzette was die over _LaTeX_. (Dat is degene die het meeste wordt bezocht. Ik heb zelf LaTeX niet meer gebruikt sinds ik van de studie af ben.) _Alles_ in die tutorial gaat over de "commands" die je gebruikt om LaTeX te laten doen wat je wilt.

Desondanks schreef ik duizenden keren zinnen als deze "To accomplish X, use the Y command."

Die zin kan ingekort naar: "Use Y to X" 

Het is al duidelijk dat het over commands gaat. Door de zin om te schrijven kan je de definitie en de uitleg kort achter elkaar krijgen.

Als je dit over een hele website toepast, win je ineens 25% van je woorden terug. Zonder informatie te verliezen!

Veel zinnen heb ik op die manier drastisch ingekort. Aan elkaar geplakte zinnen heb ik ook meestal gesplitst. Deze zijn te herkennen aan meerdere komma's die allemaal net zo goed een punt hadden kunnen zijn. En dan is een punt duidelijker en efficiënter :p

**Voorbeeld van iets groots:** op veel plekken vond ik het leuk om de tutorials te schrijven als naslagwerk. Ik zei: "je moet altijd dit en dit doen" Zonder uit te leggen _waarom_. Zonder iets eromheen zodat je _begrijpt_ wanneer en hoe je dit doet.

Dus als ik een stukje teruglas waarin ik weer commando's schreeuwde van een hoge toren, paste ik het aan naar een fatsoenlijke uitleg en redenering.

**Dit duurde zo lang dat ik dus weer twijfelde.** Ik had gehoopt in een paar dagen de website over te zetten, als ik doorwerkte. Toen ik realiseerde dat alles opnieuw moest en handmatig gekopieerd, gaf ik mezelf een week.

Toen ik realiseerde dat ik niet kon leven met de kwaliteit van de helft van de tutorials, werden het minstens twee weken.

_Heb ik dat ervoor over? Houd ik dat vol? Is dit wel het beste om te doen?_ Na een paar dagen twijfelen bleef ik toch bij dit project. 

  * Ik kan het inderdaad niet verkroppen om 6+ maanden full-time werk weg te gooien
  * Het is ook slecht voor mijn merknaam (Pandaqi) als een hele matige website met hele matige inhoud online blijft staan
  * Ik schrijf nog steeds veel tutorials, maar nu krijgen ze vaak geen plekje _omdat de oude website zo vervelend was om te updaten_. 

Zodra dit project af is, kan de website weer _jarenlang_ mee. Het zet mij niet voor schut, maar brengt hopelijk meer mensen enthousiast naar mijn andere werk. En ik heb geen hoge drempel meer om nieuwe inhoud toe te voegen.

Dus we beginnen het lange proces van overzetten én redigeren.

**Een fijne bonus** is het feit dat ik nu daadwerkelijk ervaring heb en _goed_ ben in de dingen waarover ik schrijf :p Bijvoorbeeld, ik kan nu zeggen "ik heb 5 boeken in eigen beheer uitgegeven, en daarvan leerde ik ..." Of ik kan zeggen "ik heb tientallen spelletjes gemaakt en uitgebracht, en mijn ervaring leert ..."

Ik weet nu dat de dingen die ik zeg écht waar zijn en diep inzicht geven in de vaardigheid. En ik heb de projecten en de prestaties om het allemaal gewicht te geven.

## Stap 5: nog meer overzetten

Hieronder een greep uit de serie "achterlijke keuzes die jonge Tiamo maakte waardoor hij nu dagen kwijt was"

  * **Tabellen.** Ik voerde ze in met HTML code, met de hand. Maar ik weigerde blijkbaar de officiële specificatie te volgen en de kolommen in de tabel een _kop/heading_ te geven. Daardoor konden ze niet automatisch overgezet naar Markdown! Jippie! Dat moest deels met de hand!
  * **Kopjes.** Normale mensen gebruiken de grootste kop (h1) voor de titel van het artikel, de subkopjes (h2) voor alle secties, en eventueel een subsubkopje (h3) als het echt nodig is. Ik wisselde de kopjes h3-h6 _willekeurig met elkaar af_. 
      * Het duurde even voordat ik herinnerde waarom: ik had de originele tutorials allemaal in Word geschreven en daarna overgezet, maar in dat proces zat een fout waardoor de kopjes "verschoven" qua getal. In plaats van de oorzaak oplossen, schreef ik toen code om dan maar te _doen alsof_ h3-h6 hetzelfde zijn.
  * **Slug.** Om URLs mooier te maken krijgen artikelen vaak een "slug". Dat is een verbasterde versie van de titel van het artikel die makkelijker te lezen/typen is in de browserbalk. Ik had dit woord blijkbaar verkeerd gelezen en noemde dit **slur** door de hele database xD
  * Ik had **drie manieren** om code te laten zien: in de tekst zelf (minimale opmaak), als een los blok (maar zonder opmaak), als een volledig gekleurd en opgemaakt blok (vooral voor lange codevoorbeelden). 
      * Dit hoort simpelweg één manier te zijn: de laatste. Maar omdat het nu drie andere methodes zijn, dwars door elkaar, kon ik niet met één "Zoek en Vervang" operatie alles in de juiste vorm gieten ...
  * Ik gebruikte vaak voor de grap rare namen of woorden uit andere talen in voorbeelden (zowel code als plaatjes). Het komt nu soms wat kinderachtig over. Sommige woorden zijn gewoon _compleet fout_. Maar in de helft van de gevallen kan ik het niet meer aanpassen ...

Uiteindelijk is hierover weinig te zeggen. Het zijn van die klusjes die nou eenmaal moeten gebeuren. Je hebt het idee dat er toch _iets_ moet zijn zodat de computer het voor je doet. Maar na lang zoeken kon ik niet genoeg vinden om te voorkomen dat ik dagenlang handmatig van alles kopieerde en aanpaste.

Ik vraag me soms af hoe andere mensen naar het internet kijken. Ik heb van jongs af aan begrepen hoe het werkt en mijn eigen websites gemaakt. Ik _weet_ hoeveel werk erin zit, hoe ongelofelijk moeilijk veel onderdelen ervan zijn, hoe weinig gebruikers je ooit feedback geven of een bedankje. 

Hoe kijken mensen ernaar die hiervan geen enkele weet hebben? Denken zij dat ik de website in een dagje in elkaar heb geflanst? Denken zij überhaupt niet na over de persoon achter de website, maar alleen aan wat zij er gratis uit kunnen halen?

Dat moet ik een keertje gaan onderzoeken denk ik. Maar niet nu, nu was het tijd om bijna duizend artikelen over te zetten. (Nee, dat is niet waar, uiteindelijk heb ik een flink stuk definitief in de prullenbak gegooid. Het was slecht, het was niet af, het was gedateerd, en ik had geen énkel probleem met de prullenbak opzoeken.)

## Stap 6: pauze en prioriteiten

### Writing

Ik had besloten om alle tutorials in **"Writing"** als eerste over te zetten. Want deze werden veel bezocht en vond ik zelf nog wel aardig. Maar bovenal: bijna alles kwam erin voor. Tabellen, code voorbeelden, losstaande plaatjes, opmerkingen, tekst voorbeelden, subkopjes, etcetera.

Dus zo kon ik gaandeweg alles weer tegenkomen en inbouwen in de nieuwe structuur. 

Toen deze eindelijk allemaal waren overgezet, nam ik even een pauze. Even afstand. Even kijken of alles nog wel in de goede richting gaat.

Ik merkte dat andere tutorial websites een paar nuttige features hadden die ik misschien wilde overnemen. Tegelijkertijd wilde ik niet _nog_ meer tijd kwijt zijn aan dit overzetten ... dus ik liet het voor nu even zitten.

### Visual

Daarna waren de **"Visual"** tutorials aan de beurt. Deze werden hierna het meeste bezocht. Sterker nog, sommige websites gebruiken al jarenlang _mijn_ plaatjes om dingen zoals kleurentheorie uit te leggen. Soms verwijzen ze naar mij, soms niet. Ach ja.

Deze hadden 4 courses, net zoals Writing, maar deze waren _veel langer en uitgebreider_.

Sterker nog, de Graphic Design course had _30 hoofdstukken_. Gelukkig had ik ze toen al (soort van) ingedeeld in drie secties. Met mijn nieuwe systeem kon ik er makkelijk gewoon _drie losse courses van maken_.

Hier en daar voegde ik wat "quizjes" toe. Maar ik vond het nu echt te lang duren, dus voor het grootste deel zette ik simpelweg de tekst over en verbeterde de stukken die ik moeilijk vond lezen.

Ook hierna nam ik een paar dagen pauze.

### Life Skills

Ik heb dus een hoop categorieën weggehaald. Daardoor kwamen veel tutorials nu in deze categorie terecht (of _general knowledge_).

Deze tutorials worden praktisch nooit bezocht. Het zijn ook de eerste die ik schreef, dus niet al te best. Daarom wilde ik ze juist snel overzetten: ze zijn niet zo lang en hebben weinig plaatjes.

Een andere reden was omdat ik hier iets wilde _toevoegen_. Ik heb _zoveel_ geleerd de afgelopen tien jaar over productiviteit, hoe je dingen leert, hoe je nieuwe projecten aanpakt. Er zijn een paar skills die ik graag wil uitleggen en beschrijven, omdat ze helpen bij _al het andere_.

Dus dat heb ik gedaan. De andere tutorials overzetten; een paar korte nieuwe met handige skills.

(Nou, ja, _kort_. Als je gewend bent om boeken van 100,000 woorden te schrijven, is alles al vrij snel kort. Maar mijn gids over "How to Learn (Anything)" is bijvoorbeeld meer dan 20,000 woorden in totaal geworden.)

### Audio

Dit viel in hetzelfde straatje als de categorie hierboven. Het had slechts twee tutorials, erg kort en vol informatie waarvan ik nu weet dat het niet (helemaal) klopt. 

Dus overzetten was vrij makkelijk: alle onzin gaat weg en je houdt een paar korte artikelen over.

Het probleem was alleen dat ik wat extra gidsen wilde toevoegen. Muziek is toch hetgeen waarover ik nog het meeste passie heb en, als je mijn gezondheidsproblemen vergeet, waarin ik het beste ben.

Dus uiteindelijk heb ik vier hele nieuwe gidsen geproduceerd. En om dat goed te doen heb ik zelfs een tool geschreven om muziekvoorbeelden makkelijk te _laten zien_ en _afspelen_ in de tutorials. Soms haat ik dat ik alles goed wil doen.

### Programming

Als laatste waren de **"Programming"** tutorials aan de beurt. 

Deze waren het gros van de website, met maar liefst 10 _nogal lange_ courses. 

Hier kwam weer een stukje twijfel. Veel delen van de courses waren inmiddels voorbij gestreefd. Het internet beweegt snel, computers bewegen snel.

Tegelijkertijd is de inhoud van hoge kwaliteit en de fundamentale vaardigheden van programmeren blijven altijd hetzelfde. En dat is toch 90% van deze courses.

Dus dit is hoe ik het verbeterde:

  * Van sommige concepten weet ik nu dat de prioriteit anders ligt. Dingen die ik veel aandacht gaf in de course, heb je eigenlijk maar héél zelden nodig---dus die kunnen weg. Andere dingen gebruik ik juist 99% van de tijd en behoeven meer uitleg.
  * Waar mogelijk voegde ik nieuwe ontwikkelingen toe. Tegelijkertijd stond ik minder lang stil bij dingen waarvan ik verwacht dat ze snel verdwijnen. (Of waarvan al bekend is dat ze sowieso binnen 5-10 jaar uit de specificatie gaan.)
  * Maar ik plande vooral om een keer een paar courses te schrijven over programmeren in het algemeen. Dat is veel interessanter en bovendien tijdloos. (Wat is een goede structuur? Hoe maak je code snel, leesbaar, flexibel? Hoe pak je grote lastige problemen en algoritmes aan?)

Ik heb meerdere keren pauze genomen. Want dit besloeg dus 200+ artikelen, waarvan de meeste niet konden overgezet met knippen-plakken. Ik moest ze teruglezen, codevoorbeelden en tabellen omzetten, verouderde delen weghalen, etcetera.

{{% example %}}
Een goed voorbeeld van hoe technologie vooruitgaat. Toen ik deze website opzette, waren "JavaScript Promises" echt nét geïntroduceerd. Ik heb dus een hoofdstuk hierover snel aan het einde van die cursus geklakt, om in ieder geval compleet te zijn. Ik begreep zelf niet wat ze waren en gebruikte ze nergens voor. 

Inmiddels is dit concept _overal_, is het supergoed ondersteund, en gebruik ik het uitvoerig in mijn eigen websites/tools omdat het zo handig is. Ik zou het nu als een van de eerste dingen uitleggen over JavaScript. (De naam zegt het al: als je de browser vraagt om iets te doen dat tijd kost, krijg je een _promise_ terug. De belofte dat het ergens een keer gedaan zal zijn. En zodra dat gebeurt, zodra je jouw resultaat hebt, gaat je code pas verder met uitvoeren.)
{{% /example %}}

## Stap 7: profit?

Uiteindelijk heb ik hier _het hele jaar_ op en af aan gewerkt. (Meestal deed ik een hele nieuwe cursus of meerdere cursussen overzetten in het _weekend_. En als ik dat had gedaan, wilde ik zeker een week deze hele website niet meer zien :p)

De nadelen?

  * Dat is echt _veel werk_ en het is _saai werk_
  * Sommige delen van de website zijn nog steeds niet geweldig geschreven, maar een mix tussen mijn oudste werk en een snelle revisie.
  * Ik ga hier nog steeds nooit direct geld aan verdienen (of ander persoonlijk nut uit halen)

De voordelen?

  * Alle inhoud is overgezet in een structuur die véél beter is. Kleiner, werkt in elk systeem, makkelijk in te zien en aan te passen.
  * De website is veel mooier, duidelijker en sneller. Het staat tevens netjes samen met mijn andere Pandaqi werken. 
  * Veel van de inhoud is zwaar verbeterd. Nieuwe dingen zijn toegevoegd die ik belangrijk vind. De schrijfkwaliteit leest nu professioneel, in plaats van "hmm dit klinkt als advies van een 18-jarige"
  * Ik heb nu de ervaring en prestaties om daadwerkelijk (vele) voorbeelden te geven uit mijn eigen werk, wat indirect werkt als een geweldige tool voor marketing.

## Conclusie

Uiteindelijk blijft dit project een jubileum van twijfels. Het is te groot en waardevol om weg te gooien of te laten verwateren. Het is tevens niet goed genoeg---en ik sta er niet meer genoeg achter---om er ook een _inkomen_ uit te halen of een _serieus professioneel project_ van te maken.

Het ontwerp van de website is enerzijds heel duidelijk, modern, kleurrijk, speels en professioneel tegelijkertijd. Aan de andere kant is het niet zo efficiënt of rechttoe rechtaan als veel andere tutorials, zeker als het gaat om _programmeren_. Dit kan een voordeel zijn ( = het spreekt meer aan bij mensen met weinig computerervaring), of een nadeel ( = het is dus minder efficiënt).

Maar ik ben er klaar mee. Het project is nu op een niveau dat ik kan accepteren. Een niveau waarbij iedereen veel nut kan halen uit de tutorials, een niveau waarbij ik me niet ervoor schaam, een niveau dat waarschijnlijk de komende 10+ jaar geen enkele aanpassing behoeft.

Het is het eeuwige probleem van digitale projecten. Afmaken is al lastig. En zelfs als je het afmaakt, is er een verwachting en/of verplichting om ze te blijven updaten naarmate technologie vordert. 

{{% remark %}}
Het is zo erg dat veel computerspellen nu gewoon uitkomen terwijl ze maar 50% af zijn, en de jaren daarna bouwen ze wel naar die 100% toe met updates. En zelfs als ze af zijn en super goed: als ze niet vaak genoeg updaten, krijgen ze negatieve recensies en zeggen mensen dat de ontwikkelaars lui zijn.
{{% /remark %}}

En tegelijkertijd is het _internet_ zo vrij, dat iedereen alles gratis verwacht. En anders zoeken ze deze informatie wel ergens anders.

{{% remark %}}
Ik heb dus sinds het begin donatieknoppen gehad op de oude website. Zoals ik al zei, de website werd 10,000 keren bezocht per dag. Andere websites linken naar mij of gebruiken mijn tekeningen. Ik heb ... een wereldschokkende ~5 euro aan donaties gekregen in 10 jaar tijd. Nee, daarvan moet je het niet hebben.
{{% /remark %}}

Zo, nu kan ik weer de volle tijd besteden aan _nieuwe dingen_ en _leukere dingen_ dan tekstbestanden knippen-plakken. En hopelijk hoor je mij het komende decennium nooit meer over problemen met deze website.