---
title: Over AdBlocker en vrienden
author: tiamopastoor
date: 2022-12-23T15:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Het begon allemaal met een aankondiging van Google. Vanaf begin volgend jaar veranderen ze iets achter de schermen waardoor veel extensies/plugins stoppen met werken.

De groep die het meeste wordt getroffen zijn de AdBlockers (en verwante extensies). Dat is niet toevallig, natuurlijk. Google verdient bijna al zijn geld door advertenties. Bijna _alle_ browsers werken op het browsersysteem dat zij beheren (Chromium). Dus met deze verandering die ze verkopen als een "update voor veiligheid en privacy", schakelen ze in één klap de AdBlocker uit bij 85% van de browsers.

(Overigens is dit een regel die je in het algemeen kan hanteren. Als Google zegt dat iets voor veiligheid is, dan weet je dat het supervervelend gaat zijn en waarschijnlijk niet voor veiligheid was. 

Ik heb _zo vaak_ problemen gehad met mijn websites die niks meer deden in Chrome, omdat ik ergens _een obscuur regeltje_ had geschonden die zij hadden ingesteld om deze reden. Mijn websites gebruiken een beveiligde verbinding, slaan geen informatie op, vragen/gebruiken geen informatie van gebruikers, _ik zie het veiligheidsprobleem niet_ :p)

De enige grote browser die _niet_ werkt op Chromium is Firefox. Toen dit nieuws naar buiten kwam, zeiden zij meteen: "Wat dom. Wij gaan ook die nieuwe versie inbouwen, maar we blijven de oudere versie ondersteunen."

Dus mocht alles misgaan, kan je altijd overstappen op Firefox. Het is net zo goed als Chrome. De enige reden dat ik het vijf jaar gebruikte en nu niet meer, is omdat er een bug was die het héél langzaam liet opstarten op mijn oeroude laptop.

## AdBlocker is essentieel

Want ik zie AdBlocker niet als een extensie. Niet als een vervelend dingetje dat sommige mensen aanzetten, niet als iets slechts. Ik zie het als **een essentieel onderdeel voor het functioneren van elke browser.**

Ik snap niet hoe anderen het doen. Het internet gebruiken zonder AdBlocker. Heel soms gebruik ik andermans computer, of vergeet ik dat mijn extensies uitstaan, en schrik ik me de pleuris van alle aandachttrekkende reclames links, rechts, voor en achter. Ik kan nergens op focussen. Je klikt er steeds per ongeluk op. Websites laden 10x zo langzaam en zijn een visuele chaos die niks goeds oplevert.

Dus ik vind AdBlocker essentieel. Het zou ingebouwd moeten zijn. Net zoals _tabbladen_ en een _zoekbalk_ en _developer tools_ voor als je websitebouwer bent. (De _Brave_ browser doet dit en is tevens een goed alternatief. Ik gebruik dit op mijn mobiel. Het is gebaseerd op Chromium, maar omdat de AdBlocker is ingebouwd heeft het geen last van deze verandering.) 

En dan kom je terecht in de eindeloze touwtrekwedstrijd tussen de mensen die online met advertenties hun geld proberen te verdienen en mensen (zoals ik) die niet zien waarom ze daaronder moeten lijden.

In dit artikel wil ik eigenlijk vooral uitleggen hoe je die wedstrijd kunt winnen. Ook als het gaat om het omzeilen van andere blokkades of restricties. En waarom ik vind dat je daarover geen ethische twijfels hoeft te hebben.

(Ik kan [uBlock Origin][1] ten volste aanraden. Het is de beste AdBlocker die ik ken en ik heb nooit meer een andere nodig gehad.)

## Is AdBlocker slecht?

Ik zie en hoor vooral deze twee reacties:

  1. Je bekijkt iemands content, je zou ervoor moeten betalen
  2. Oh, als je dit YouTube kanaal zo leuk vindt, bekijk dan ook alle advertenties om ze te steunen!

En het _klinkt_ op het eerste oog als een goed moreel streven, maar het slaat eigenlijk nergens op.

**Reactie 1:** Als iemand wil dat ik betaal voor hun content, dan moeten ze mij vragen om te betalen. En het pas laten zien als ik dat heb gedaan. (Niet eerst iets laten zien en dan achteraf advertenties eroverheen plakken.)

Maar dat doen ze niet. Waarom? Omdat ze weten dat hun content niet sterk genoeg is om mensen daadwerkelijk te laten betalen. Omdat ze niet die moeite kunnen of willen doen. 

Je had bijvoorbeeld een goed boek kunnen schrijven met de kennis die je hebt. Iets met veel waarde dat je verkoopt voor geld. In plaats daarvan praat je tien minuten tegen een camera en plakt er advertenties overheen. 

**Reactie 2:** ik heb een hekel aan advertenties kijken. Het is een verspilling van tijd en energie. Je kunt niet verwachten dat mensen vrijwillig de verspillende vervelende optie kiezen. 

Bovendien is het een hele indirecte manier van betaling: jij verspilt een beetje tijd, zodat ik een halve cent krijg. Jij kijkt een halve minuut naar iets dat je niet wilt zien en nooit gaat kopen, zij krijgen een kwart cent.

Nogmaals, een systeem waar je _direct betaalt_ voor dingen is veel efficiënter en minder vermoeiend.

## Is het te verplichten?

Er zijn genoeg websites die weigeren om pagina's te laten zien als je AdBlocker aanstaat. Dat is al meer het juiste idee. _Je moet er nooit van uit gaan dat mensen zich zullen gedragen zoals je wilt, je moet hen subtiel die kant op sturen_ _of geen keuze laten._

Maar als er een weg omheen is, dan zal ik die nemen. Want ik vind tijd/energie waardevol en wil het niet verspillen; en ik denk dat de meeste mensen hetzelfde vinden. (Meestal verlaat ik de website en kom nooit meer terug.)

  * Zet JavaScript uit en probeer opnieuw.
  * Als ze een pop-up/overlay over de website plakken, zoek je deze op in de _dev tools_ en verwijdert deze. (Als je geluk hebt, kan je klikken op de overlay met je rechtermuisknop en "Inspecteren" drukken.)
  * Als je meer verstand van computers hebt, plaats je een stukje tussen jouw apparaat en je Wi-Fi verbinding (vaak een Raspberry Pi/Pi-Hole). Of je doet dit via de [hosts file][2], dat is vrij simpel, maar iets minder krachtig. Deze blokkeert de urls van advertentie aanbieders voordat ze überhaupt binnenkomen.

Op dezelfde manier houden websites je locatie bij, of hoeveel artikelen je al hebt gelezen, of iets in die trant. Meestal ook niet succesvol:

  * Probeer wederom zonder JavaScript.
  * Bezoek de website in een _incognito venster_.
  * Verwijder je cookies en/of opgeslagen website data.
  * Gebruik een (gratis) VPN, zoals Windscribe of ProtonVPN.
  * Als je meer verstand van websitetaal hebt, kan je vaak in de broncode direct lezen _hoe_ ze jou deze restrictie opleggen, en dit weghalen of omkeren.

Dit is wat ik bedoel met de touwtrekwedstrijd. Zij die vasthouden aan advertenties zullen steeds nieuwe manieren zoeken om je te verplichten, zij die er geen zin in hebben vinden vrij snel een manier eromheen. Je moet het maar zien als een spelletje.

Nee, het is niet te verplichten. Want advertenties zullen moeten worden opgevraagd en geladen door _de persoonlijke browser/computer van iemand_. En dan is er _altijd_ een manier om dit uit te zetten of te omzeilen.

Herhaal na mij: _je moet er nooit vanuit gaan dat mensen vrijwillig gaan doen wat jij wilt. Ofwel je bedenkt een systeem waarin ze geen keuze hebben, of je accepteert dat mensen doen wat hen het minste moeite kost._

## Is AdBlocker goed?

De lijst met argumenten hiervoor is een stuk langer.

  * Advertenties zijn zwaar om te laden. Dus door ze te blokkeren, laadt je pagina sneller, kan je beter browsen op een ouder apparaat, en verbruik je minder bandbreedte.
  * Advertenties bevatten vaak trackers of proberen informatie op je computer op te slaan. (In erge gevallen bevatten ze virussen of iets dat in die richting komt.)
  * Advertenties zijn aandachttrekkend en afleidend. Hierdoor is de inhoud (waarvoor je kwam) minder goed te consumeren en word je overprikkeld.
  * Advertenties gebruiken smerige trucjes om je te laten klikken. Als ik AdBlock niet aan heb staan, ben ik bang om ook maar ergens mijn muis over te bewegen, laat staan erop klikken. Soms komen de advertenties pas na een paar seconden, waardoor de hele pagina verschuift.
  * Advertenties _bepalen_ de inhoud. Bijvoorbeeld, veel YouTube video's zijn 10 minuten puur en alleen omdat ze dan meer en betere advertenties kunnen laten zien. Het komt de inhoud niet ten goede, want die had misschien maar 1 minuut nodig. Door dit systeem te steunen---door advertenties te kijken---steun je dus ook dat inhoud wordt veranderd en vaak verslechterd.
  * (Advertenties breken je mentaal af. Ze schreeuwen constant naar je dat je dingen moet kopen, dat je dom bent of iets mist als je het niet doet. Genoeg blootstelling hieraan verandert hoe je hersenen werken en over dingen denken. En waarschijnlijk niet op een positieve manier.)

Al deze dingen worden opgelost met een AdBlocker. Het kost drie seconden om te installeren en je krijgt al deze voordelen, terwijl er eigenlijk geen nadelen zijn.

Dus natuurlijk ontwikkelen mensen zulke extensies. En natuurlijk gebruikt iedereen ze.

Ja, je kan uit morele overweging kiezen om advertenties te bekijken om iemand te steunen. Maar dat is niet de enige vraag. De vraag is ook of je alle nadelige effecten wilt accepteren. En als je dat meeneemt, is de keuze mijns inziens overduidelijk.

## Advertenties die niet te blokkeren zijn

Dus de touwtrekwedstrijd gaat door. YouTubers gingen op zoek naar _sponsoren_ die ze _in hun video stopten_. "Ha! Dat kan niemand blokkeren! Nu winnen we!" dachten ze.

Toen kwam YouTube met de functie om met je muis over de tijdlijn te bewegen om alvast previews te zien van andere momenten in de video. Zo kan je precies skippen tot ná het sponsorsegment.

Nog leuker: inmiddels hebben ze de functie "vaakst opnieuw bekeken toegevoegd". Waarschijnlijk hoopten ze gebruikers een reden te geven om de leukste delen van de video opnieuw te zien. In plaats daarvan gaven ze gebruikers een manier om meteen te zien wanneer de sponsor ophoudt :p

Dus vaak genoeg verliest men het touwtrekken puur doordat ze innoveren of nieuwe functies voor gebruiksgemak inbouwen.

Maar het kan nog beter. Iemand begon jaren geleden het idee van [SponsorBlock][3]**.** Dit is een extensie waarin gebruikers kunnen aangeven waar video's een sponsor/advertentie hebben. Vervolgens wordt dit deel automatisch geskipt.

Sinds installatie heb ik vrijwel nooit meer een sponsor hoeven aanhoren. (En ja, je kan dit aan/uit zetten, hij laat zien _dat_ hij een sponsor skipt, dus het is allemaal goed geregeld.)

Alle advertenties zijn te blokkeren. Want het is een inferieur systeem waarbij de advertentie een tijdverspillend laagje is dat eromheen is geplaatst. Ofwel je breekt door het laagje heen en kan de inhoud lezen---zonder advertenties. Ofwel je breekt er niet doorheen en je gaat gewoon ... naar een andere website.

Dus laten we als laatste over dat _laagje_ rondom de inhoud praten.

## Restricties & beschermingslagen

Regelmatig heeft iemand in mijn omgeving zich ingeschreven voor een evenement. Die plaatsen dan bijvoorbeeld video's die maar een dag of een weekend beschikbaar zijn. Of video's ingesloten in hun eigen pagina.

En altijd zetten ze dan de downloadfunctie uit. Ze doen heel veel moeite om het zo lastig mogelijk te maken de video te downloaden of op een andere manier te bekijken.

Wat nogal irritant is, want er komt regelmatig iets tussen waardoor ze de video niet die dag kunnen bekijken. Of ze willen hem bewaren voor later.

Dus het touwtrekken gaat door. "Ha! Zonder downloadknop, zonder duidelijke link naar de video, kan _niemand_ hem opslaan!" dachten ze.

Nou, dan heb ik nieuws voor jullie. Het project [yt-dlp][4] (YouTube download program) bestaat al jarenlang. Je download het bestand. (Klik op de grote groene download knop en dan op "Windows x64".)

Zet het ergens neer en [voeg het toe aan de PATH.][5] (Dit is een functie binnen Windows die opslaat waar het hulpprogrammaatjes kan vinden.)

Vervolgens kan je alles downloaden dat je wilt. 

  * Je opent de _Command Prompt_ (standaardprogrammaatje)
  * Typ "yt-dlp <link naar de video>" (zonder haakjes)
  * En waarschijnlijk komt alles goed.
  * (Probeer als nodig "yt-dlp---referer <website die de video insluit> <link naar de video>" Dan doet het programmaatje _alsof_ je bent verwezen door die website, wat de beveiliging vaak doorbreekt.)
  * (Soms kan dit programma zelfs door strengere beveiliging heen breken, maar niet altijd.)

Het programma doet simpelweg hetzelfde als een browser: de video in stukjes opvragen. Maar in plaats van de oorsprong vervolgens te verbergen en moeilijk vindbaar te maken, slaat het de video op in een bestand op je computer.

Dit kan je niet tegenhouden. Zolang men een video _kan bekijken in de browser_, is hij dus _downloadbaar_. De vraag is alleen of mensen dit beseffen en of ze even vijf minuten de tijd nemen om dit in te stellen.

Dus al die moeite is voor niets. Het kost hen veel tijd, het kost ons een beetje tijd, maar de uitkomst is hetzelfde.

Er is maar één laag die werkt. Als je ergens voor betaalt, mag je het permanent zien/downloaden. Zo niet, kom je nergens in. Het is verborgen achter een persoonlijk account/wachtwoord/identificatie.

Alles waarbij je de inhoud toch laat zien, maar met een advertentie of een restrictie, kan per definitie worden omzeild. Dus je vernielt de kwaliteit van je inhoud ... en waarvoor?

(Nog leuker: je kan sponsorblock aanzetten binnen dit programmaatje door "---sponsorblock" toe te voegen. Dus je kan zelfs de video downloaden _met de sponsoren er al uitgeknipt_. De mensen die zulke extensies maken zouden werk moeten vinden om gebruiksgemak van andere applicaties te verbeteren :p)

## Mijn eigen keuze

Om al deze redenen besloot ik lang geleden om nergens advertenties te plaatsen. Check het maar. Al mijn websites hebben niet één advertentie. Zo kon ik de websites ontwerpen zoals ik wilde, vullen met inhoud zoals ik dacht dat het beste was, en zo snel en toegankelijk mogelijk maken.

Ik probeer mijn geld te verdienen met werk dat ik _verkoop_. Omdat ik de moeite erin heb gestoken en durf om er geld voor te vragen. Omdat ik weet dat ik anderen er iets waardigs voor teruggeef. Waar mogelijk benoem ik dit: steun mij door werk te kopen, niet door te zeggen dat ik advertenties moet toevoegen, of door dingen van mij alleen maar te _delen_.

Daarnaast zijn er slechts knoppen waarmee je kan doneren. Maar die zijn toegevoegd in de wetenschap dat vrijwel niemand gaat doneren en dat ik er niet op kan rekenen. 

Ze zijn vooral prominent op mijn [tutorial website][6]. Als ik een constante geldstroom wilde, had ik deze betaald moeten maken. Maar ik weet dat de kwaliteit daarvoor niet hoog genoeg is. En dat ik geen tijd/zin heb om dat te veranderen, want het is een oudere website met vele gebreken.

## Conclusie

Ik neem het mensen niet kwalijk als ze wél volledig inzetten op advertenties. Je kan er goed geld mee verdienen. Of misschien ben je al blij met die paar extra centen als aanvulling op iets anders.

Maar we moeten niet doen alsof dit een goede weloverwogen keuze is. Ook niet alsof je een slecht persoon bent als je het blokkeert. En zeker niet alsof het moeilijk is om eronderuit te komen.

Advertenties en restricties zijn makkelijke dingetjes om aan te zetten en over je content te gooien, niets meer. Het touwtrekken gaat door, maar je hoeft niet hard te trekken om in een wereld zonder advertenties, sponsoren en blokkades te leven.

En dat weten de bedrijven ook. Hun doel is niet om te winnen door harder te trekken. Hun doel is om te winnen door zoveel mogelijk mensen te overtuigen om het op te geven en het touw los te laten.

(Hetzelfde met games beveiligen tegen piracy. Ze bouwen niet een ingenieus systeem dat nooit kan worden gekraakt. Ze gooien een gigabyte aan complete willekeurige onzin bovenop hun spelbestand zodat hackers er té lang over doen om erdoorheen te waden. En vaak geven ze het dan maar op.)

Er zijn nog steeds veel mensen zonder AdBlocker, zeker op mobiel. De meeste kennen niet alle trucjes die ik hierboven noemde. Ze zoeken er niet eens naar.

Hopelijk legt dit artikel uit waarom jij _niet_ het touw moet loslaten of moet opgeven. Waarom het essentieel is om niet te accepteren dat het internet een ervaring vol nare advertenties moet zijn. 

Ik ben niet eens zo _extreem_ ertegen. De dingen die ik noem zijn heel simpel en basic. Paar minuten uitzoeken, installatie, en je bent klaar. Er is nog veel meer dat je kan doen als je er even naar zoekt.

Geef om je tijd, energie en aandacht. Verwijder advertenties uit je leven. Geef het signaal af, aan onder andere Google, dat je dat niet accepteert.

Een samenvatting van wat ik heb verteld:

  * uBlock Origin als algemene AdBlocker.
  * SponsorBlock API om sponsoren uit video's te halen.
  * yt-dlp programma om alle vindbare videos als bestand op je computer op te slaan. (Je hebt soortgelijke programma's om bijvoorbeeld webpagina's permanent op je computer op te slaan, maar daar heb ik nauwelijks ervaring mee.) 
  * Gebruik de **Brave** browser op je mobiel. **YouTube Vanced** voor YouTube zonder advertenties.
  * Algemene trucjes om dingen te omzeilen: VPN, JavaScript uit, incognito venster, cookies/data legen
  * En anders ga je weg als iets je te veel lastigvalt. Jouw tijd, aandacht en energie is waardevol.

### P.S. Over _piracy_

Elk systeem is vatbaar voor piraterij. Want ja, die ene persoon die je video heeft gekocht en mag zien/downloaden? Die kan het prima naar anderen doorsturen. Die kan het prima uploaden naar andere websites. (Dit gebeurt zelfs met inhoud die achter een Patreon account zit, zij het in mindere mate.)

Dus hier geldt hetzelfde idee: niemand denkt dat hun inhoud tegen piraterij is bestand. Ze proberen het alleen zo lastig mogelijk te maken om zoveel mogelijk mensen af te weren. Andersom proberen ze het zo makkelijk mogelijk te maken om iets legitiem te kopen en/of een maker te ondersteunen.

Meer kan je niet doen. En als je dan toch keuzes moet maken, zou ik vooral gaan voor _dingen maken die zo goed en fijn zijn dat mensen ze massaal kopen_. In plaats van al die tijd steken in _zoveel mogelijk advertenties erop plakken_ of _zoveel mogelijk vervelende blokkades opwerpen_.

### P.S. Over illegaliteit

Sommige mensen zouden willen dat deze extensies of programma's illegaal worden. Bedrijven hebben het regelmatig geprobeerd. Maar buiten dat de extensie misschien een maand uit de lucht moet ... zijn ze nooit ergens gekomen.

Want wat wil je aanwijzen als illegaal? Dat mensen sommige dingen die het internet naar hun apparaat stuurt _niet_ accepteren? Dat mensen een script aan hebben staan, op hun eigen computer, los van alles en iedereen, dat vooruit kan skippen in video's? Dat mensen een video downloaden waarvan ze het recht hebben om die te downloaden? Dat mensen met een beetje computerkennis de informatie, _die een website zelf en vrijwillig naar hen toestuurde_, gaat manipuleren zodat het fijner leest?

Dus het is niet illegaal en dat wordt het hopelijk nooit. Want dat zou een hele specifieke restrictieve regel betekenen die meer kapot maakt dan dat het repareert.

Ik toost op nog tientallen jaren van touwtrekken.

 [1]: https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
 [2]: https://privacyinternational.org/guide-step/4345/windows-setup-dns-level-ad-blocking
 [3]: https://chrome.google.com/webstore/detail/sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone
 [4]: https://github.com/yt-dlp/yt-dlp
 [5]: https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/
 [6]: https://pandaqi.com/tutorials