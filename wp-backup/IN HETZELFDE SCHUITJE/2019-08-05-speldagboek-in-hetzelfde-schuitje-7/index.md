---
title: '[Speldagboek] "In hetzelfde schuitje" #7'
author: tiamopastoor
date: 2019-08-05T16:00:01+00:00
language: nl
categories:
  - Games

---
Welkom bij het zevende speldagboek ("devlog") voor mijn spel "in hetzelfde schuitje"!

In het vorige artikel had ik _eindelijk_ de eerste werkende versie. Zoals te verwachten, werkte het spel _technisch gezien_ wel, maar klopte het van geen kant :p Sommige delen waren heel leuk, andere delen veel te moeilijk/makkelijk/onduidelijk, en er miste gewoon veel diepgang en het gevoel van een duidelijk doel.

In dit artikel ga ik uitleggen wat ik zag als de grootste problemen en hoe ik deze heb opgelost (of geprobeerd op te lossen).

Je kunt dit zien als "de weg naar versie 2.0", aangezien er gigantische veranderingen gaan plaatsvinden in het spel.

_Opmerking:_ dit artikel heeft niet zoveel plaatjes of grote dingen, sorry. Het is vooral tekst, aangezien ik (minstens) een week ben beziggeweest met het hele spelconcept herschrijven. Maar het is hele interessante tekst als je meer wilt leren over spellen maken!


## Verplaatsen 2.0

Op dit moment heb je 3 rollen die samen voor de verplaatsing zorgen. De _First Mate_ stuurt het schip, de _Cartographer_ leest de kaart, en de _Sailor_ hijst de zeilen (of zet mensen aan het roeien).

Op zich werkt dit goed. De cartograaf zegt "links zie ik een eiland", en vervolgens regelt de stuurman dat ze naar links varen, en de zeilpersoon (??) zet de zeilen naar een bepaalde snelheid.

Maar het kan veel beter en interessanter.

Voertuigen kunnen niet zomaar uit stilstand naar topsnelheid. Ze hebben een bepaald momentum: een vaste snelheid die ze kunnen versnellen of afremmen. Dit systeem geeft een spel automatisch een tactische laag:

  * Hoge snelheid: je beweegt snel, maar je kunt moeilijker sturen of uitwijken voor gevaren.
  * Lage snelheid: je beweegt weinig vakjes per beurt, maar je kunt goed manoeuvreren.

_Fun fact:_ ik heb 10 MINUTEN LANG geprobeerd om het woord manoeuvreren juist te spellen. Google wist bij _manoevererede_ ook geen zoekresultaten meer te geven.

Je moet dus vooruit kijken, goed opletten en timen. Er komt een zekere vaardigheid bij kijken.

### Sailor 2.0

Oftewel, de rol van de **Sailor** wordt ingrijpend veranderd. Hij kan niet meer zomaar een slider naar een willekeurig getal zetten.

  * In het midden van het scherm staat (lekker groot) de huidige SNELHEID van het schip
  * Links staat een pijltje waarmee je het schip kunt afremmen
  * Rechts staat een pijltje waarmee je het kunt versnellen.

Een schip beweegt, aan het einde van zijn beurt, met zijn huidige snelheid.

Op het eerste niveau kan je de snelheid maximaal één ophogen of verlagen. Ook kun je alleen zeilen gebruiken (en geen roeiers). De _upgrades_ van de Sailor zorgen ervoor dat:

  * de maximale snelheid van het schip omhoog gaat
  * dat je meer kunt afremmen/versnellen per beurt
  * dat je naast zeilen ook roeiers kunt gebruiken

Zoals eerder uitgelegd zijn de "roeiers" vooral nodig voor latere varianten (waarin je een bepaalde windkracht en waterstroom kunt hebben). Nu zijn ze vooral een "reserve" waarmee je het schip nét even een extra boost kunt geven, ten koste van veel mankracht.

<div style="width: 408px" class="wp-caption alignnone">
  <img decoding="async" loading="lazy" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1561902256/sailor-interface-v2.png" alt="" width="398" height="599" />
  
  <p class="wp-caption-text">
    Je ziet ook al enkele andere veranderingen die ik heb aangebracht. Rechtsboven heb je het vraagtekenknopje, en onder de "upgrade" knop staat nu wat de upgrade precies doet. Daarover dadelijk meer.
  </p>
</div>

### Cartographer 2.0

Toen ik de cartograaf maakte, dacht ik "het moet niet te makkelijk worden". Je moet niet te veel kunnen zien.

Nou, ik ben van een koude kermis thuisgekomen, en vervolgens 180 graden gedraaid in mijn ideeën over deze rol :p

> Het wordt _juist_ moeilijker en spannender als je meer kunt zien.

Nu zie je (in de lage levels) geen monsters en slechts één of twee vakjes in je omgeving. Je weet dus niet of er iets aankomt. Je weet niet of je in gevaar bent, welke opties je hebt, wat er buiten je zicht schuilt.

Dat gaat veranderen.

  * Vanaf nu kun je, zelfs op het laagste level, alle verschillende eenheden in het spel zien (havens, monsters, schepen, etc.)
  * Hoe hoger je level, echter, hoe meer _details_ je ziet van die ander. (Hoe snel ze gaan, uit welke richting ze kwamen, hoeveel "loot" er aan boord is, etc.)
  * Bovendien wordt je bereik sneller opgewaardeerd. (Nu heb je, op het maximale level, een cirkel van 5 tegels die je kunt zien. Dat gaat naar 10 denk ik.)

Je ziet meer, je weet meer, en moet daar dus op inspelen. Tegelijkertijd heeft het wel zin om te blijven upgraden, want met dat extra beetje informatie kun je zeeslagen winnen. (Als je weet dat de tegenstander een hoge snelheid heeft en vanaf links komt, weet je dat hij niet ineens kan omdraaien of afremmen.)

### Bemanning is hip

Ik dacht eerst "goud is overduidelijk de belangrijkste grondstof in een piratenspel".

Dat bleek niet zo te zijn :p (Sterker nog, na wat onderzoek, blijken piraten inderdaad vooral _nuttige_ dingen te hebben gestolen, zoals medicijnen, stoffen, voedsel, etc. Ze hadden zelfs een redelijk goed zorgstelsel, voor wie ziek werd of letsel opliep.)

Nee, **bemanning wordt het belangrijkste goed**.

Het staat vanaf nu vooraan in de lijst. Het verdelen van je bemanning wordt misschien wel de hoofdtaak op het schip: de sailor kan veel man gebruiken, maar kannonen afvuren en tegels onderzoeken (voor een schatkist) vragen óók bemanning.

Ik moet natuurlijk hiermee rekening houden. Bemanning moet op _veel plekken verkrijgbaar zijn_, maar _niet goedkoop zijn_.

## Upgrades 2.0

Zoals je ziet gaat de meeste complexiteit zitten in de _upgrades_ die rollen kunnen doen. Daarom vind ik het belangrijk dat meteen duidelijk is wat een upgrade doet (en waarom dat belangrijk is).

Ik moet dus, voor elk level, ergens opslaan wat er precies gebeurt. (Bijv: "bereik gaat 1 omhoog". Maar dan met codetaal natuurlijk.)

Vervolgens zie je, onder de upgrade knop, heel duidelijk iets in deze trant staan.

> **Max Speed: 2 (↑3); Max Change: 1 (↑2)**

Dit voorbeeld is voor de _Sailor_. De huidige maximumsnelheid is "2" en je mag maximaal "1 snelheid" veranderen per beurt (afremmen of versnellen). Ná de upgrade gaat de max snelheid naar "3" en mag je "2 snelheid" veranderen per beurt.

Duidelijk, simpel, efficiënt. (Ik zeg dit nu wel leuk, maar misschien kom ik er over 3 weken achter dat dit wéér beter kan.)

<img decoding="async" class="alignnone" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1561902353/interface-upgrade-help.png" /> 

Daarnaast krijgt elke knop dus een "helpknop". Als je daarop drukt, komt er een soort pop-up over je interface heen, waarin kort de beschrijving van de rol staat en waarom je wilt upgraden. Dit kan helpen bij het aanleren van de rollen, maar ook functioneren als snelle herinnering.

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1561902332/interface-general-help.png" /> 

## Mythologie

Ah, het meest lastige, maar ook meest interessante idee voor dit spel.

Ik heb constant gehamerd op een "bruisende wereld" en "zeeën die je wilt ontdekken". De beste manier om zoiets te doen is door te leren van de kunst van het verhalen schrijven. Oftewel: **backstory.**

Als je de wereld inkomt, moet het voelen alsof hier al honderden jaren van alles is gebeurd. Het landschap is veranderd, er zijn steden en havens gesticht, er zijn zeeslagen geweest (inclusief wrakschepen op de bodem van de oceaan). Je komt binnen in een levende en realistische wereld.

Nou is "realistisch" niet altijd "goed" of "leuk" in een spel. In het echt is het gewoon hard werk om een boot te besturen, zeegevechten te winnen en winstgevend te handelen :p

Vanaf het begin wilde ik iets magisch of uitzonderlijks toevoegen aan het spel, zoals de zeemonsters.

Daarom noem ik het de **mythologie** van de wereld.

Aan het begin van elk spel, wordt er een backstory gegenereerd. Ik ga hier niet precies uitleggen hoe, omdat het lastig is en ik nog niet precies weet hoe ik het ga doen. Maar ik ga wel uitleggen wat het idee is.

Van elk object in de wereld---of het nou een monster is, of een stad, of een haven---wordt bedacht _wanneer_ het is ontstaan en _waarom_ (of _in welke omstandigheden_). Ik bedenk gewoon een vaste lijst aan redenenen en kies daar willekeurig uit. (Bijvoorbeeld: "deze schepen zijn gemaakt om te vechten tijdens oorlog X")

Vervolgens heb ik allerlei gebeurtenissen bedacht, zoals die "oorlog X", die ik opsla en hun invloed laat uitoefenen op de wereld. Misschien is één van de groeperingen enorm verzwakt omdat ze die oorlog hebben verloren. Misschien heeft één eiland geen haven, omdat die is verwoest.

Uiteindelijk moet deze mythologie enkele interessante situaties en plekken opleveren.

  * Schatkisten om te vinden.
  * Wrakschepen op de bodem van de oceaan, waarin misschien nog goud zit, of een deel van de puzzel.
  * Bijzondere steden op de kaart (waar je dus iets bijzonders kunt doen of te weten komen)

Als we dit weten, verspreiden we de informatie hierover door de hele wereld.

Ik zal een voorbeeld geven. Stel we hebben bedacht dat er ooit een hele gevaarlijke piraat was (met een willekeurig gegenereerde naam, zoals "Purati"). Hij is verslagen door een bepaalde groepering. Zijn schip ligt ergens op de bodem van de oceaan.

  * Eerst wordt deze plek bepaald. Als ik iets heb wat de plek beïnvloedt (zoals een plek waar deze piraat veel te vinden was), kies ik natuurlijk iets in die richting.
  * Vervolgens worden X eigenschappen uitgerekend voor deze plek. 
      * _Aantal havens in een straal van 10 tegels?_
      * _Diepte van de zee?_
      * _Meer naar links of meer naar rechts?_
      * _In de buurt van een monster "spawn point"?_
      * _Hoeveel is de afstand naar <een andere belangrijke plek in de wereld>?_
  * Deze eigenschappen worden verdeeld over alle verschillende plekken. Deze haven krijgt misschien 1 deel van de puzzel, de andere haven krijgt 2 stukjes, en een andere schat onthult de laatste stukjes.
  * Vervolgens kunnen de spelers deze informatie dus te weten komen door op de juiste plekken op onderzoek uit te gaan. (Je kunt graven naar een schat, maar ook "rondvragen" in de haven, of een ander schip gevangennemen.) 
      * Je klikt op de knop "rondvragen"
      * Je krijgt een berichtje terug met iets van: "Well, I did hear some rumors about a ship. It sank 50 years ago, not too far away from _Tortuga Bay_"
      * Nu weet je: het gaat over een schip dat 50 jaar geleden is gezonken en deze ligt in de buurt van de genoemde haven.

Hoe beter je oplet, en hoe meer je logisch nadenkt over de hints, hoe sneller je schatkisten gaat vinden. Het is een leuke en organische manier van "quests" opzetten.

(In andere spellen vallen vaak zomaar quests in je schoot die zeggen van "op deze plek ligt een schat; ga erheen en versla de monsters eromheen". Punt 1: waarom zou iemand je zomaar de locatie van een kostbare schat toevertrouwen? Punt 2: tja, dan hoef je zelf niet meer te zoeken en te ontdekken.)

Dus zo'n soort systeem wil ik implementeren. Ik heb het nog nooit gedaan. Ik weet niet of iemand het ooit gedaan heeft. Dus ik ben benieuwd hoe goed de computer is in leuke backstories bedenken.

## De 4 varianten

Vanaf het begin van het spel had ik het idee van "de 4 varianten". Deze varianten liepen op in moeilijkheidsgraad en voegden steeds meer rollen (en systemen) toe aan het spel.

Nieuwe spelers konden beginnen met de eerste variant na slechts 1 of 2 minuten uitleg. Simpel, duidelijk, snel opgezet!

Als ze eenmaal bekend waren met de basisrollen, konden ze naar de volgende variant. Na 5 minuten extra uitleg, hadden ze weer een heel ander interessant spel om te spelen.

Ik heb deze varianten vooral genegeerd tijdens het ontwikkelen van de eerste versie. Die tijd is nu voorbij :p Het is tijd om vooruit te kijken en alles op elkaar aan te laten sluiten.

Nog belangrijker: het is tijd om alles weg te halen uit de _beginnersvariant_ wat daar niet thuishoort.

(Guess what? Het zijn uiteindelijk 5 varianten geworden. Ik kan ook nooit dingen van tevoren goed inschatten.)

### Hoe varianten eruitzien

Dit zijn de benodigdheden voor elke nieuwe variant:

  * Een duidelijk thema dat het toevoegt. (Bijv. "voedsel")
  * Zo'n 2-4 rollen die nodig zijn voor dit thema. (Bijv. "visser" en "kok")
  * Eén daarvan is een _hoofdrol_ waaraan alles wordt opgehangen. (Bijv. de "kok" kan niet alleen koken, maar ziet ook de voedselvoorraden aan het schip, en krijgt dus binnen wat de visser allemaal aan vis vangt.)
  * Waar nodig worden nieuwe systemen toegevoegd of bestaande systemen uitgebreid. (Bijv. in eerdere varianten hoef je helemaal niet voedsel te regelen voor je bemanning. Pas vanaf de "voedselvariant" zit dat systeem in het spel.)

### De beginnersvariant

Op dit moment heeft deze variant 5 rollen. Je kunt varen, vechten, en handelen (met havens). Elk van deze dingen heeft één of meerdere rollen die iets moet regelen.

Het is simpel ... maar niet gestroomlijnd.

Dat is een belangrijk verschil. De 5e rol, die van de "cannoneer" (de "wapenpersoon"), voelt meer als een bijzaak. Ohja, die rol hebben we ook nog. Ik heb hem binnen een minuut uitgelegd, maar iedereen vergeet dat hij bestaat. Het is nét te veel en te onduidelijk wat je ermee moet.

Dus deze rol gaat uit de beginnersvariant. Hierdoor houden we 4 rollen over en draait de beginnersvariant maar om één ding: **varen**_._

  * _Captain:_ regelt alle basic taken (kannonen afvuren, nieuw eiland ontdekken, etc)
  * _First Mate_: stuurt het schip
  * _Cartographer:_ leest de kaart
  * _Sailor:_ bepaalt de snelheid

Deze verzameling rollen is volledig ingesteld op het navigeren van de wereld en dingen kunnen ontdekken.

Om dit idee nog meer samenhang en structuur te geven, wil ik volle bak voor het "ontdekken" gaan. Dit is de samenvatting van mijn veranderingen:

  * De grondstof van "kanonskogels" gaat uit de beginnersvariant. Hiervoor komt de grondstof "schatkisten" (ofwel "treasure") in de plaats.
  * Wat is het eerste waar je aan denkt bij schatkisten? Precies, een verstopte kist, inclusief schatkaart om deze te vinden. 
      * Door de wereld heen komen "hints" naar de locatie van schatten. Slimme en oplettende spelers kunnen daarmee een schat vinden.
  * De wereld wordt minder eentonig en krijgt een voorgeschiedenis. 
      * Aan het begin van het spel zijn havens in handen van verschillende groeperingen.
      * Sommige delen van de wereld zijn moeilijk te bevaren, of afgesloten totdat je een bepaald "item" hebt gevonden.
      * Computerschepen horen ook bij een bepaalde groepering (wat bepaald hoeveel ze aan boord hebben en of ze je aanvallen of juist helpen)
      * Je hebt verschillende "monsterrassen", die consistent blijven. Als je een groen monster tegenkomt, en je komt erachter dat die heel snel is, weet je voor de rest van het spel "de groene monstersoort is snel".
      * _Het overgrote deel van de wereld wordt door de spelers zelf vormgegeven_. Dit maakt het meteen realistischer, leuker, en scheelt mij werk :p
  * Spelers moeten meer moeite doen om te ontdekken waar ze zijn én meer reden hebben om nieuwe gebieden te ontdekken. 
      * Een beloning voor het vinden van een nieuw eiland of nieuwe haven.
      * Ook zijn er verschillende dorpjes/steden aan de randen van eilanden. Deze kun je ook "ontdekken" en een naam geven. Bovendien hebben deze dorpjes vaak een verhaal, of een item om te geven, of een hint naar de schat, etc.
      * De kaart op de computer wordt op andere manier onthuld. (Hoe precies weet ik niet.) Je krijgt niet zomaar alle "interessante punten" te zien, en eilanden worden niet in één klap "onthuld".

Om dit mogelijk te maken, worden veel systemen (uit latere varianten) ernstig versimpeld.

  * De kapitein krijgt een knop met "FIRE!" als er tegenstanders in de buurt zijn. Als hij op deze drukt, schiet hij automatisch een kanonskogel in alle richtingen. 
      * Kannonnen zijn dus altijd opgeladen en klaar voor gebruik, _iets wat je in latere versies zelf moet regelen_.
      * Belangrijke verandering: je kunt havens ook aanvallen. Als je een haven "kapot" schiet, wordt die haven van jou! Op die manier kun je havens in je macht krijgen.
  * De kapitein krijgt een knop met "SEARCH!" (of "EXPLORE!") of iets dergelijks. Als je die indrukt---wat héél veel bemanning enzo kost---doorzoek je jouw huidige vakje voor schatkisten. 
      * Je kunt dus altijd je huidige vakje doorzoeken, _iets wat je in latere versies zelf moet regelen_.

Als laatste is de winconditie natuurlijk anders.

> **Je wint als je als eerste 3 schatkisten oprakelt.**

Hiermee test je namelijk de belangrijkste vaardigheden: je kunt de wereld navigeren, nieuwe gebieden ontdekken, van verschillende plekken grondstoffen/hints halen, en uiteindelijk de juiste plek van de schatkist vinden.

Ik denk dat deze versie behoorlijk spannend kan zijn, bijvoorbeeld als twee mensen allebei hebben uitgevogeld waar de laatste schat is, en naar dat punt racen. Of, wanneer je denkt te weten waar de schat is, en in spanning afwacht of je gelijk had. Het wordt zo echt een zoektocht, een avontuur, een ontdekkingsreis.

Als dit er goed in zit, gaan we door naar de volgende variant. Deze varianten ga ik alleen héél kort uitleggen, aangezien ik nog niet precies weet wat ik ermee moet (en dit artikel is al vrij lang).

### De amateursvariant

Deze variant draait helemaal om **vechten**. Er komen 3 rollen bij (bovenop de eerdere 4).

In deze variant is vechten dus niet meer gesimplificeerd, maar volledig uitgewerkt. Je moet zelf de kannonnen opladen, het schip de juiste kant op draaien, etc.

### De professionele variant

Deze variant draait helemaal om het **schip op en af** **gaan**. Er komen 3 rollen bij.

Nu is het concept van "graven naar schatten" of "een tegel exploren" volledig uitgewerkt. Je moet zelf van het schip af en over het eiland "exploren".

### De expertsvariant

Deze variant draait helemaal om **voedsel**. Er komen (waarschijnlijk) 3 rollen bij.

Nu is het concept van "bemanning" niet meer versimpeld. Je moet je bemanning gewoon te eten geven (en evt. betalen). Zo niet, lopen ze weg. In het ergste geval doen ze dit na een muiterij: ze maken je schip kapot en nemen een deel van je grondstoffen mee.

### Nog een variant

Deze variant draait geheel om het **ecosysteem/wereld/magie en mythologie**. Dit betekent vooral _weersomstandigheden._ 

Deze is nog het meest onduidelijk. Ik denk dat weersomstandigheden en bovennatuurlijke elementen héél interessant kunnen zijn, maar ik weet nog niet precies hoe of wat.

## Conclusie

Er is veel te doen :p

Het belangrijkste is nu om die historie van de wereld ("backstory") te genereren. Dit zal niet makkelijk zijn en wel een aantal weken in beslag nemen voordat het enigszins werkt.

Maar als het werkt, dan is de volgende versie van het spel al meteen bijna af. Als je de historie hebt, weet je dus waar precies de havens zijn gebouwd, welke schepen er in de wereld zijn, etc.

Het volgende artikel zal waarschijnlijk gaan over het algoritme/idee dat ik hiervoor gebruik. Tot dan!