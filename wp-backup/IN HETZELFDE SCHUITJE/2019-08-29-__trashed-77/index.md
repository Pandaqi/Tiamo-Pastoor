---
title: 'Privé: [Speldagboek] "In hetzelfde schuitje" #11'
author: tiamopastoor
date: 2019-08-29T13:51:00+00:00
language: nl
draft: true
private: true
categories:
  - Games

---
Welkom bij het 11e dagboek ("devlog") voor mijn spel "in hetzelfde schuitje".

Eindelijk is het zover. Ik praat al meerdere devlogs over mijn "backstory simulator": een systeem dat een hele achtergrond kan bedenken voor mijn spelwereld, inclusief verborgen schatkisten en gezonken piratenschepen. Nu komt het systeem eindelijk af!

(Het zal misschien nog even duren voordat het helemaal in het spel zit. Het is één ding om een geschiedenis te bedenken, het is iets anders om deze op te slaan en te gebruiken door het spel heen.)

{{% update %}}
Tiamo uit de toekomst hier. Rond dit punt werd duidelijk dat dit spel te groot en te moeilijk was, zeker op dat moment met mijn gezondheidsproblemen en studie om af te ronden. Dus ik laat al deze dagboeken op het blog staan voor wie het interessant vindt, maar dit project gaat vrijwel zeker nooit meer worden opgepakt of afgemaakt.
{{% /update %}}

## Backstory simulator

Met die problemen opgelost, kan ik verder werken aan de backstory simulator!

Er zijn nog twee grote onderdelen die moeten worden ingebouwd: de piraten (en de schatkisten die ze begraven) en de zeemonsters. Die zeemonsters ga ik waarschijnlijk weinig aandacht aan besteden, maar de piraten zijn een cruciaal onderdeel van dit systeem.

Als zij zich niet realistisch en actief gedragen, hebben we geen schatkisten op logische plekken, en valt zodoende het hele spel uiteen.

MAAR,

## 

=== Oude stukken om te gebruiken ===

## Piraten

Lala

Piraten ontstaan altijd vanuit een slechte situatie. Hun eerste actie is het overnemen/controleren van een haven of stad. Van daaruit breiden ze hun territorium uit.

Binnen een piratenterritorium ontstaan steeds meer piraten. Piraten zullen doorgaans niet met elkaar vechten. Alleen als ze in een oorlog/conflict meedoen, gaan ze ook tegen elkaar.

Een piratenterritorium is afhankelijk van het aantal schepen. Eén piraat kan slechts een klein territorium aan => een cirkeltje rondom zijn "home base", de haven waar alles begon. Als er meerdere piraten bijkomen, kan dit territorium groeien.

OOOOF, blijft dat individueel? Dat is misschien handiger. Dat elke piraat zijn eigen kleine territoriumpje heeft.

MAAAAR, dit wordt dan te voorspelbaar. Een piraat is altijd te vinden rondom zijn woonplaats, en zal daar ook zinken/sterven/zijn schatkist verstoppen.

Piraten hoeven zich niet te houden aan de regels van computerspelers. Ze willen gewoon anderen verslaan, een paar haventjes bezitten, en hun opbrengsten begraven in schatkisten. (Rare mensen eigenlijk.)

<FILMPJE>

## Monsters

Monsters zijn erg simpel. Een van de "main events" is **"new monster type"**. Daarmee wordt een nieuwe monstersoort ontdekt.

Vervolgens zit dit monster in de wereld. Het zal ronddolen en hier en daar probleempjes stichten, maar meer niet. De simulatie bepaalt enkele belangrijke dingen van de monsters:

  * Hun startpositie. Elk monster heeft een _spawn point_, waar ze beginnen en het meeste te vinden zijn. Het is zeg maar hun thuisbasis, de plek waar ze worden geboren.
  * Wat elke soort voor eigenschappen heeft. Het ene monster is snel, het andere vooral sterk. Door dit mee te nemen in de simulatie kunnen spelers ontdekken wat de sterke en zwakke kanten van monsters zijn.
  * _Monster rampages_. Eens in de zoveel tijd wordt een monster helemaal wild en gaat het de boel terroriseren. De pechvogels verliezen hiermee vaak enkele havens en schepen. (In dit geval kunnen ze dus om hulp roepen. Als die niet wordt gegeven, verslechtert de relatie.)
  * Hoeveel en waar ze voorkomen. Als het spel eenmaal begint, worden de monsters direct overgenomen. Als de simulatie ervoor heeft gezorgd dat er nauwelijks monsters over zijn, geeft dat een ander spel dan wanneer de wereld BOMVOL zit met monsters. Hopelijk is dat interessant.

LALA

<FILMPJE>

BELANGRIJK: Het is een _big deal_ als een schip ten onder gaat. Van elk schip wordt de naam en de historie opgeslagen, evenals de plek waar het is gezonken (en waarom/door wie). Achteraf kan men deze informatie namelijk vinden en gebruiken om bijv. goederen te vinden die in deze wrakschepen zitten.

_Hoe zit het met monsters en piraten_? Monsters zullen je altijd aanvallen als je in de buurt komt. Ze zijn de simpelste en meest voorspelbare wezens in de hele wereld.

Piraten hebben wel loyaliteit, maar in mindere mate. Als jij met piraten vecht, maar je wint, krijg je hun respect. Als er oorlog uitbreekt, zijn piraten er als de kippen bij om misbruik te maken van de situatie. Als jij de oorlog wint, vinden de piraten je ook aardig. Dit soort dingen kunnen je later helpen: hoe beter je relatie met de piraten, hoe meer gebieden waar je veilig doorheen kunt varen. (Maar je zal door alle andere spelers worden gehaat :p)

===== UIT VORIGE DAGBOEK =====

Uit vorige dagboek:

### De amateursvariant

Deze variant draait helemaal om **vechten**. Er komen 3 rollen bij (bovenop de eerdere 4):

  * _Cannoneer_: de persoon die de wapens moet kopen, opladen en upgraden. (Deze zat eerst in de beginnersvariant.)
  * _Mechanic/Engineer:_ als je boot schade oploopt, kunnen verschillende instrumenten beschadigen. Een beschadigd instrument kun je niet gebruiken. De engineer moet ervoor zorgen dat de juiste dingen worden gerepareerd en dat het schip heel blijft.
  * _Special Forces:_ deze persoon heeft wat apartere wapens. Deze vergen meer vaardigheid om te gebruiken, hebben meer risico, maar kunnen ook meer schade doen.

In deze variant is vechten dus niet meer gesimplificeerd, maar volledig uitgewerkt. Je moet zelf de kannonnen opladen, het schip de juiste kant op draaien, etc.

Bovendien komt natuurlijk de grondstof van "kanonskogels" terug.

Ik vind het eigenlijk lelijk om een rol maar één grondstof te laten zien, maar ook lelijk om de kapitein ineens een 5e grondstof te laten beheren. Dus ik zoek nog een goede plek voor deze informatie.

**Uitwerking Cannoneer:** al voldoende uitgewerkt.

**Uitwerking Engineer:** hij heeft alle andere rollen (=instrumenten) in een lijst, met daarnaast een knop om datgene te repareren (inclusief hoeveel dat zou kosten).

Vraag 1: Er moet iets extras zijn. Kan hij _voorspellen_ wanneer iets kapotgaat? Kan hij bepaalde onderdelen _beschermen_ voor toekomstige aanvallen?

Vraag 2: Wat doet de "upgrade" knop van de Engineer? Idee 1: het schip meer levens geven in het algemeen. Idee 2: die speciale krachten geven, zoals één instrument beschermen, of één instrument tijdelijk een boost geven?

Opmerking: haal inspiratie uit _Captain Sonar_. Daar MOET de engineer elke ronde iets afbreken en staan systemen in verbinding met elkaar.

**Uitwerking Special Forces:** als je op dit moment niks doet, krijg je een overzicht van alle wapens die je kunt inzetten. Als je eenmaal een wapen hebt ingezet, hangt je interface/systeem af van dat ene wapen.

  * **Mijn:** deze drop je op je huidige plek. De eerste persoon die naar die tegel toekomt (niet als die er al stond en blijft staan), krijgt die mijn op zijn dak. 
      * Alternatief (of gewoon een ander wapen): je moet zelf kiezen wanneer je een mijn laat exploderen. Maar dat kan de interface moeilijk maken (héél veel knopjes) => één knop voor ALLE mijnen die je hebt geplaatst
  * **Bom:** Lala
  * 

IDEE (Special Forces): Een bom die je van het schip moet gooien, of X aantal beurten moet vasthouden. Als je niet goed gooit of te lang vasthoudt, ontploft hij op je eigen schip!

IDEE: Als jij een schip van een andere groepering vernielt, komt hij terug als een schip van jouzelf. Die valt automatisch de andere spelersschepen aan, als ze in de buurt komen.

"Schepen van jouzelf" gebruiken gewoon dezelfde tekening als jij voor je eigen schip hebt gemaakt. Jouw schip kun je herkennen aan een eigen schaduwkleur en een ballonnetje waarin de inzittenden worden weergegeven.

IDEE: Zwaardvechtrol

IDEE: Zelf je schatkist verstoppen

BELANGRIJK: Het spel moet niet "bestuur een hele vloot" worden. Het gaat echt om dat ene schip waar je met meerdere spelers inzit.

VRAAG: Kan ik in de beginnersvariant ook al toestaan dat je het schip op/af gaat (maar dan versimpeld)? Of kun je alleen naar schatten zoeken op het water, en blijft het daar maar even bij?

### De professionele variant

Deze variant draait helemaal om het **schip op en af** **gaan**. Er komen 3 rollen bij:

  * _Explorer:_ deze persoon beweegt extra snel en is extra vaardig over land, waaronder graven naar schatten en tegels onderzoeken.
  * _Merchant:_ deze persoon kan onderhandelen met andere schepen (zelfs medespelers), meedoen met de globale economie, diplomatische relaties sluiten, de grondstoffen en voorraden beïnvloeden
  * _Oceanographer:_ deze persoon kan duiken om onderzeese schatten/wrakschepen/etc te onhullen, heeft veel kennis van de zeeën en hoe ze werken, en kan monsters beïnvloeden (... hoe?)

Nu is het concept van "graven naar schatten" of "een tegel exploren" volledig uitgewerkt. Zowel de Explorer als de Oceanographer moeten deze rol vervullen.

VRAAG: Wat kan men precies OP eilanden doen? Waarom is dat interessant? Kan men er iets veranderen? **Een stad stichten**? Iets opbouwen?

### De expertsvariant

Deze variant draait helemaal om **voedsel**. Er komen 2 rollen bij:

  * _Fisherman:_ moet zorgen dat er genoeg vis binnenkomt
  * _Cook:_ ziet de voedselvoorraden aan boord, moet eten klaarmaken en goedhouden
  * ??

Nu is het concept van "bemanning" niet meer versimpeld. Je moet je bemanning gewoon te eten geven (en betalen??). Zo niet, lopen ze weg. In het ergste geval doen ze dit na een muiterij: ze maken je schip kapot en nemen een deel van je grondstoffen mee.

VRAAG: Waar komt schoon water vandaan? Ik denk dat ze die gewoon van havens meenemen, van andere schepen stelen, of zelf opvangen uit regen.

IDEE: De kok, als we die in een eerdere variant stoppen, kan misschien de kanonskogels bijhouden? (Of wil ik dat varianten "los van elkaar" kunnen bestaan? Als een soort verschillende "modules"?)

**Uitwerking Kok:** De kok heeft drie taken:

  * De voorraden bijhouden. (Hij kan ze als enige zien en moet dus zorgen dat ze gevuld zijn.)
  * Eten succesvol afmaken (op tijd begonnen, op tijd klaar, etc.) en zodoende het hele schip voeden.
  * Recepten ontdekken en op de juiste manier klaarmaken

IDEE: Te weinig vitamines maakt je bemanning ziek :p

IDEE: Voorraden hebben iets extra's nodig om ze goed te houden. (Zout erbij doen? Bepaalde specerijen/kruiden?)

Dit speelt dan weer in op het idee van handelsroutes en handelshavens. Je kunt veel geld verdienen door een "klusje" voor iemand te doen en dure specerijen op te halen en af te leveren.

IDEE: Veel recepten kun je alleen maken met hele specifieke ingrediënten, die je misschien maar in één deel van de wereld kan vinden. Dus je moet goed voorbereiden óf weten waar je naartoe moet.

PROBLEEM: Je wilt eigenlijk dat de kok een beetje gevarieerd eten moet maken. Maar gewoon zeggen "ze moeten gevarieerd eten!" is ook weer zo stom.

Misschien een algehele "bemannings tevredenheid/happiness" maken. Verschillende recepten boosten die tevredenheid meer dan als ze elke keer hetzelfde eten.

JAAAAA => dan kan ik het thema hiervan veranderen van "voedsel" naar "bemanning" of "zorgen voor je schip" Geeft meer opties voor rollen en dergelijke.

PROBLEEM: Het moet niet gaan voelen alsof je een keuken in de zee aan het bijhouden bent. De kok moet niet té ingewikkeld worden.

### Nog een variant

Deze variant draait geheel om het **ecosysteem/wereld/magie en mythologie**. Dit betekent vooral _weersomstandigheden._ Er komen 2 rollen bij:

  * _Weatherman:_ heeft instrumenten om verschillende dingen te meten, moet daarmee aan zien komen dat er een storm komt (bijvoorbeeld)
  * _Psychic:_ krijgt inzichten over belangrijke plekken, posities van tegenstanders, etc. (**vind ik een zwakke rol eigenlijk**)
  * ??
  * ?? Iemand die de wereld kan veranderen/beïnvloeden?