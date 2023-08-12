---
title: '[Speldagboek] "In hetzelfde schuitje" #3'
author: tiamopastoor
date: 2019-07-08T16:00:13+00:00
language: nl
thumb: /uploads/2019/06/playInterfaces_result.webp
categories:
  - Games

---
Welkom bij het derde speldagboek ("devlog") voor mijn spel "In hetzelfde schuitje".

De vorige keer vertelde ik meer over wat alle rollen deden, de leuke en stomme dingen van online spellen, en wat de voorbereidingsfase inhoudt (waarin één van de rollen een zeemonster mag bedenken).

Voor deze keer had ik de volgende dingen beloofd: hoe elke rol eruitziet (qua interface, knopjes, informatie, etc.), meer opbouw in de spelwereld (met o.a. havens) en een stukje over _upgrades_.

En ja, dat is ongeveer wat ik gedaan heb afgelopen tijd :p So let's dive in.

## De rol-interfaces

(Ik weet niet of daar een streepje tussen moet. Als je het aan elkaar doet, _rolinterfaces_, kun je het lezen als een soort "roll in the feces", maar dan met een raar accent. En dat willen we natuurlijk niet.)

Hieronder staat een overzicht van hoe elke rol eruitziet:

[<img decoding="async" loading="lazy" class="alignnone size-full wp-image-8907" src="/uploads/2019/06/playInterfaces_result.webp" alt="" width="972" height="942" />][1]

Dit zijn natuurlijk niet de uiteindelijke versies, maar zo gaan ze er ongeveer uitzien. Hoewel de interface "werkt" (je kunt op de knoppen drukken en aan de sliders draaien enzo), gebeurt er verder nog helemaal niks.

Ik zal kort uitleggen wat elke interface precies doet.

**<span style="text-decoration: underline;">Captain</span>:** hij krijgt een lijst met dringende taken, zoals "er zijn tegenstanders in de buurt" of "je bent nu bij een haven, wil je onderhandelen?" Hij kan deze negeren of op de knop drukken en de actie in gang zetten. Helemaal onderaan ziet de kapitein als enige de resources van het schip.

  * Normaal gesproken zal een kapitein niet zo druk zijn en dus de resources kunnen zien zonder naar beneden te scrollen.
  * Ik zal dadelijk wat meer vertellen over die icoontjes die ik heb gemaakt voor de resources.

<span style="text-decoration: underline;">**First Mate:**</span> hij krijgt een kompas te zien waaraan hij kan draaien. Als hij het kompas loslaat (met z'n muis of vinger op een touchscreen), wordt de nieuwe richting opgeslagen, en gebruikt om het schip te bewegen (aan het begin van de volgende beurt)

  * Op de achtergrond zien we een schip. Deze geeft de "huidige richting" van het schip aan. Zo weet je precies wat het betekent om aan het kompas te draaien.
  * Daaronder staat een upgrade knop. _Wat kun je upgraden aan een kompas!?_ Nou, aan het begin van het spel is je schip niet zo wendbaar. Je kunt het kompas maar een klein beetje naar links/rechts draaien. Door te upgraden, kun je het kompas verder draaien. Als het kompas level 5 is (ofzo), kun je het hele kompas gebruiken, en zelfs in één beurt 180 graden draaien (en praktisch uit het niets achteruit varen :p)

**<span style="text-decoration: underline;">Cartographer</span>:** wat ben ik blij dat ik deze werkend heb gekregen. De cartograaf kijkt "door een verrekijker" naar de wereldkaart. Door met je muis/vinger te swipen kun je over de kaart bewegen. Het voelt echt alsof je de wereld stukje bij beetje ontdekt 🙂

  * De cartograaf ziet _zeker_ niet de hele wereld---alleen het kleine stukje rond zijn schip.
  * _Wat kun je hieraan upgraden!?_ Twee dingen. 
      * Aan het begin van het spel zie je slechts 2 tegels afstand rond je schip. Als je de verrekijker upgradet, kun je steeds meer rondom je schip zien (tot misschien wel 8 of 10 tegels afstand).
      * Aan het begin zie je alleen de wereldkaart: je weet wat de zee is en wat eiland is, meer niet. Met een betere verrekijker, kun je zeemonsters en tegenstanders van afstand herkennen, zien waar bepaalde grondstoffen verstopt zijn, etc.
  * Wat je in het plaatje hierboven ziet is al ver uitgezoomd---dit zal een level 10 verrekijker zijn.

**<span style="text-decoration: underline;">Sailor</span>:** deze rol is wat minder voor de hand liggend dan de anderen, maar ik denk dat het in deze vorm het beste werkt. De sailor bepaalt de snelheid van het schip. Er zijn twee manieren om snelheid te maken: _zeilen hoog heisen_ en _roeien_. De verticale slider gaat over de zeilen (daarom loopt hij langs de zeilen van het schip), de horizontale over het roeien.

  * Zeilen kunnen hoogte 0 t/m hoogte 4 hebben. Zeilen vertalen zich direct naar hoe snel je gaat: als je zeilen op hoogte 4 staan, ga je 4 vakjes per beurt.
  * Roeien gaat ook van 0 t/m 4. Roeien gaat twee keer zo snel: op roeistand 4 ga je 8 extra vakjes per beurt. Met roeien kun je veel snelheid aan je schip toevoegen, maar het kost _ongelofelijk_ veel mankracht.
  * _Wat kun je hieraan upgraden!?_ Je voelt hem al aankomen. Aan het begin heb je een prutzeiltje dat slechts hoogte 1 kan hebben, en geen roeispanen. Door te upgraden krijg je meer zeilen/roeispanen en zijn die ook een stuk beter.

_Waarom heb je deze rol zo gemaakt?_ Deze rol is ingesteld op de toekomst. In de toekomst wil ik weersomstandigheden toevoegen, waardoor zeilen heisen soms juist heel dom kan zijn. Ook wil ik schade aan onderdelen toevoegen, waardoor het handig is om sterkere zeilen te hebben, die tegen meer schade kunnen voordat ze breken.

Daarnaast kost het dus veel _bemanning_ om deze acties uit te voeren. Bemanning is een erg belangrijk goed in dit spel, en de _Sailor_ is eigenlijk de persoon die de baas moet spelen hierover. Hij moet zorgen dat er genoeg bemanning binnenkomt en dat ze naar de juiste dingen toegaan, anders komt het schip niet meer vooruit. Deze rol is véél belangrijker dan je denkt :p

**<span style="text-decoration: underline;">Weapon Specialist</span>:** deze rol beheert de kannonnen op het schip. In elke richting (links/rechts/boven/onder) is één kanonmogelijkheid---het plaatje geeft aan welk nummer bij welke richting hoort.

  * Je begint met één kanon die vooruit wijst.
  * Nieuwe kannonnen kun je kopen. (De volgende beurt krijg je dat kanon, met level 1, op die plek.)
  * Bestaande kannonnen kun je _upgraden_ en moet je _opladen_. (De zwarte streepjes bij het eerste kanon geven de lading aan: 4 kogels. Het is nu nog heel lelijk, want ik zoek naar een goede manier om dat te laten zien.)
  * _Wat kun je hieraan upgraden!?_ Betere kannonnen kunnen verder schieten en hun schoten meer verspreiden. Een level 1 kanon kan maar 2 tegels schieten, recht vooruit. Een level 5 kanon kan 5 tegels ver schieten, maar in een "waaier", waardoor je ook schepen kunt raken die niet recht op je af komen.

_Waarom heb je deze rol zo gemaakt?_ Er waren vele opties. De eerste was dat elk schip één kanon had wat in alle richtingen kon schieten. (Dus jij koos gewoon een vakje in je omgeving, en daar schoot je op af.) Dit was saai, onrealistisch, en bovendien moeilijk werkend te krijgen op een klein telefoonschermpje.

Uiteindelijk moest ik denken aan het bordspel _Galaxy Trucker_. Daar bouw je een eigen ruimteschip, waarna je op avontuur gaat en van alle kanten wordt beschoten door piraten en bekogeld met meteorieten. Eén belangrijk onderdeel in dat spel is _in welke richting je kannonen wijzen_. Als je alleen naar voren kunt schieten, ben je kwetsbaar van de zijkant.

Dit leek me leuk om toe te voegen. Vechten wordt nu echt iets waarvoor vaardigheid en samenwerking nodig is:

  * De juiste kannonnen moeten opgeladen zijn.
  * Deze kannonnen moeten _bemanning_ hebben om af te vuren.
  * Het schip moet in de juiste richting wijzen.
  * De cartograaf moet doorgeven waar de tegenstander precies zit.
  * De kapitein drukt uiteindelijk op het knopje "FIRE!"

Geen enkele rol hoeft zich te niet bemoeien met een zeeslag!

## Wat mist er nog aan de interfaces?

Ik zei dat ik de rollen kort ging uitleggen. Uiteindelijk had ik een vrij lange uitleg nodig.

Oftewel, de interfaces moeten wat meer informatie/clues/hints bevatten.

Bijvoorbeeld, de _Sailor_ heeft nu wel twee leuke sliders, maar je weet niet precies wat het voorstelt (en welke waarde je kiest). Als ik de slider in het midden zet ... is dat dan zeilniveau 2? Of niveau 3?

Alle rollen moeten duidelijke icoontjes en getallen krijgen die precies aangeven wat de huidige stand van zaken is.

Dit is hard nodig voor de uiteindelijke versie ... maar nu nog niet. Nu moet ik verder werken aan het spel zelf.

## Upgrades

Upgrades heb ik pas in een laat stadium bedacht. Inmiddels is het een van de onderdelen waar ik het meest enthousiast over ben!

Ik denk dat het écht lastig is om de grondstoffen te verzamelen voor een upgrade en te kiezen wie de upgrade krijgt. Je kunt wel eerst de kaart upgraden ... maar als je schip nog steeds maar één vakje per beurt kan, helpt dat niet echt. Je kunt wel de kannonnen upgraden, maar als de stuurman zijn kompas niet goed kan draaien, sta je bij elk gevecht aan de verkeerde kant.

In de toekomst worden die upgrades alleen maar belangrijker. Denk aan een rol als de "fisherman". Deze moet de bemanning van voedsel voorzien door zijn hengels uit te gooien en vis te vangen. Betere hengels = meer vis in minder tijd, zelfs op moeilijke plekken zoals ondiep water. Dan ineens wordt dát misschien wel de eerste upgrade die je wilt doen, voordat je bemanning van de honger sterft en gaat muiten :p

Daarom wil ik er nu wat extra aandacht aan besteden.

De "upgrade" knop ziet er nu precies uit zoals elke andere knop---dat moet anders! Het moet duidelijk zijn of iets een _actie_ is of een _upgrade_. Aangezien upgrades vrijwel altijd hout kosten (en misschien wat geld of bemanning), wilde ik de knop naar het icoontje van hout (oranje-bruinig) veranderen.

Daarnaast laten ze nu niet zien _hoeveel de upgrade kost_ en _naar welk level/niveau je_ toegaat.

  * Ik denk eigenlijk dat deze "kosten" op de knop zelf passen, als ik ze iets kleiner maak. Ik laat het icoontje van de benodigde grondstof zien, met daaronder een getal als je er meerdere nodig hebt.
  * Je gaat altijd één level omhoog, dus het lijkt me genoeg om te laten zien dat je nu "level X" bent. De precieze voordelen van de upgrade ga ik niet eens proberen te laten zien. Daarvoor is te weinig ruimte en is de tekst vaak te ingewikkeld. Deze voordelen moet je zelf onthouden, lezen op de Wiki van dit spel, of makkelijk kunnen afleiden uit de context. ("Als elke vorige upgrade één extra tegel zicht aan de cartograaf gaf, zal deze dat ook wel doen.")

Dit is het ontwerp waarop ik uitkwam:

<div id="attachment_8910" style="width: 286px" class="wp-caption alignnone">
  [<img aria-describedby="caption-attachment-8910" decoding="async" loading="lazy" class="size-full wp-image-8910" src="/uploads/2019/06/Upgrade-button.png" alt="" width="276" height="65" />](/uploads/2019/06/Upgrade-button.png)
  
  <p id="caption-attachment-8910" class="wp-caption-text">
    Deze knop zegt "Buy" ipv "Upgrade". Als je iets nog niet hebt, is een "upgrade naar level 1" natuurlijk dat je het koopt. Hieronder komt een plaatje waar "Upgrade (lvl 1)" opstaat.
  </p>
</div>

De precieze instellingen van de upgrades ("kosten" en "opbrengsten") ga ik nu niet teveel aandacht aan besteden. Dat kun je toch alleen maar uitvinden door het uit te testen en te zien of dingen makkelijk of moeilijk te kopen zijn. Ik doe nu een beste gok (eerste upgrade is meestal een handjevol hout, tweede upgrade iets meer hout, derde upgrade wat hout en goud, etc.).

## Belangrijke update!

Ik was druk bezig met het programmeren van alle rollen, en het toepassen van mijn upgrade-knop-stijl, toen ik me steeds meer begon te irriteren aan de rol van de "Weapon Specialist". Het was te ingewikkeld. Ik moest allemaal uitzonderingen maken in de code en gekke trucjes uithalen om alles op het telefoonscherm te krijgen.

Dus toen heb ik de rol veranderd.

Eerst kon je elk kanon individueel upgraden. Dat kan niet meer. Onderaan de lijst staat één knop, net als bij alle andere rollen, waarmee je alle kannonnen die je hebt in één keer upgradet. (Alsof je ineens hebt ontdekt hoe een beter kanon werkt, en dan meteen jouw nieuwe uitvinding op alle kannonnen kunt toepassen.)

  * De upgrade kost evenveel, ongeacht hoeveel kannonnen je al hebt.
  * Als je een kanon nog niet hebt gekocht, blijft deze "onbeschikbaar", en gaat deze natuurlijk niet mee in de upgrade.
  * Als je een kanon koopt, schiet deze meteen naar je huidige level, wat betekent dat nieuwe kannonnen steeds duurder worden.

_Waarom werkt dit beter?_ Het klopt met de andere rollen, wat het spel consistenter en intuïtiever maakt. Elke rol heeft één grote upgradeknop onderaan de interface---dat is nu de regel. Daarnaast geeft het meer ruimte en maakt het de rol simpeler en overzichtelijker.

_Maar is dit niet oneerlijk? Met één knop alles updaten?_ Nou, kijk. Deze rol heeft nu ineens een extra strategische keuze erbij.

  * Of je koopt eerst alle kannonnen, zodat je ze daarna "goedkoop" allemaal kunt upgraden.
  * Of je upgrade eerst de kannonnen die je hebt, en koopt daarna de rest erbij.

Bij de eerste optie vaart je schip _superlang_ met hele slechte kannonnen die nauwelijks iets gaan raken. Pas na lange tijd kan je in één klap véél sterker worden.

Bij de tweede optie wordt je schip gedurende het spel al steeds sterker en sterker, maar kost het meer grondstoffen.

Dus ja, er is wat asymmetrie en ongelijkheid qua upgradekosten, maar dat zal (in mijn ogen) alleen maar toevoegen aan het spel. Als je te lang wacht met nieuwe kannonnen kopen, zijn ze ineens te duur. Als je ze te snel koopt, vaar je heel lang rond met kannonnen die nog niet eens 2 tegels ver kunnen schieten :p

Zo ziet de interface er nu uit:

[<img decoding="async" loading="lazy" class="alignnone size-full wp-image-8911" src="/uploads/2019/06/playInterface-05-v2_result.webp" alt="" width="417" height="769" />][2]

## Over de icoontjes

Ik had tot nu nog steeds geen (visuele) stijl voor het spel.

Ik zei tegen mezelf "even in een half uur icoontjes in elkaar flansen, want dan kun je tenminste zien wat wat is". Anderhalf uur later was ik pas op de helft, maar had ik wel een idee over leuke grafische stijlen :p (Soms haat ik mezelf. Ik kan nooit gewoon accepteren dat iets even lelijk is en later wel kan worden opgeleukt.)

Het idee is als volgt.

Er zijn twee verschillende dingen die icoontjes nodig hebben: _grondstoffen_ en _rollen_. Hoe krijgen we hier vanaf het eerste moment onderscheid tussen? We maken de grondstoficoontjes **rond** en de rolicoontjes **vierkant.**

Daarnaast wilde ik de grondstoffen hun eigen kleur geven---iets wat ik niet ga doen voor de rollen. (Omdat het niks toevoegt en er in latere versies teveel rollen zijn om nog onderscheidende kleuren te gebruiken.)

De icoontjes zijn alsnog in een half uur in elkaar geflansd (nadat ik mijn stijlgids een beetje had bedacht), dus ze zullen nog wel veranderen. Voor nu is het duidelijk en ziet het er wel oké uit.

Verder heeft het spel al een redelijk duidelijke stijl. Veel bruintinten met wat zwart en roodbruin (wat heel erg dat gevoel geeft van hout/schepen/piraten). Alle knoppen en blokken zijn vierkant. Het piratenlettertype is heel duidelijk, leuk en thematisch. (Dit was een toevalstreffer: het lijkt steeds beter en beter te werken.)

Ik zal hier gewoon mee doorgaan, tenzij ik tegen problemen aanloop. Pas als het spel helemaal werkt kan ik kijken naar visuele decoraties, zoals een textuur die wat meer "grit" en "grunge" toevoegt aan de interface. Of wat sierlijkere decoraties, met goudkettingen, diamanten, schatkisten, van die leuke patronen die je op piratenmunten enzo ziet. Voor nu allemaal nog niet belangrijk!

## Intermezzo

Op dit moment heb ik een hele tijd hard geprogrammeerd om de rollen daadwerkelijk iets te laten _doen_. Signalen worden verstuurd naar de server en de server probeert zinvolle dingen terug te sturen.

Dit heb ik zo ver mogelijk uitgewerkt, totdat ik niet verder kon. Althans, niet zonder aandacht te besteden aan de wereldkaart!

(Ik heb hier een nieuw artikel voor gemaakt, want deze werd al veel te lang. Op naar dagboek numero 4!)

&nbsp;

 [1]: /uploads/2019/06/playInterfaces_result.webp
 [2]: /uploads/2019/06/playInterface-05-v2_result.webp