---
title: Monopoly
author: tiamopastoor
date: 2017-02-21T15:00:39+00:00
language: nl
categories:
  - Games

---
Monopoly. Het spel waarvan iedereen de eerste keer denkt "mwah oké, ziet er wel leuk uit", de tweede keer denkt "ugh, oké dan, maar alleen als ik de bank ben, want jij speelt sowieso vals", en de derde en laatste keer denkt "de dobbelstenen haten mij en de gevangenis is mijn nieuwe thuis."

Daarom ga ik dit traditionele gezinsspel simuleren om erachter te komen wat de beste strategieën zijn. (Dit is de eerste post in een reeks simulaties van (bord)spellen. Je kunt ze allemaal vinden in de categorie _Zinderende Simulaties_, wat een gefaalde alliteratie is.)

De strategieën die ik ga proberen zijn:

  * Meteen kopen als je ergens op komt
  * Geen speciale dingen kopen (zoals treinstations)
  * Alleen de middelste dingen kopen
  * Alleen de duurste dingen kopen

(In alle gevallen hierboven zet je meteen een huisje erbij als je op iets komt dat al van jou is. Ook is de populaire huisregel gebruikt dat je alles uit de pot krijgt als je op "vrij parkeren" komt.)

Natuurlijk zijn hier en daar dingen gesimplificeerd voor de simulatie. Zo betaalt elke speler automatisch 50 euro om uit de gevangenis te gaan, zijn een aantal irritante kanskaarten weggelaten (als in, het is het niet waard ze in de simulatie toe te voegen), en is het niet mogelijk om dingen aan elkaar te verkopen of ruilen (afgezien van het feit of dat überhaupt wel mag of slim is). Maar verder zit alles er in.

Het enige probleem waar ik tegenaan liep was wanneer de simulatie moest ophouden. De spelregels zeggen dat je doorspeelt tot er nog maar één iemand geld heeft, maar dat kan eeuwen duren. In het echt speelt men daarom totdat er één of twee mensen blut zijn, of totdat men het zat is na een stuk of 50 rondes. Dus dat doe ik ook.


## Wat zijn nou eigenlijk de regels?

Ik heb met veel mensen hierover gesproken ... en iedereen kent andere spelregels. De spelregels die ik mijn hele leven gespeeld heb blijken niet de officiële regels te zijn. Sommige mensen staan het niet toe om iets te kopen tijdens ieders _eerste rondje_ op het bord. In de regels staat dat je pas huizen mag bouwen _als jij alle gebouwen van die bepaalde kleur hebt_. (Dus, je mag pas een huis op jouw groene veld bouwen, als jij alle groene velden bezit.) 

Ook schijn je te kunnen ruilen van bezit (op zo'n beetje alle denkbare manieren) en besef ik nu waarom geld geven wanneer iemand op "vrij parkeren" komt een slecht idee is. Het stopt méér geld in de economie van het spel dan eruit gaat, dus daarom duurden potjes bij ons altijd eeuwig. 

_Conclusie_: ooit doe ik nog een simulatie, maar dan met de officiële regels. Desondanks zijn veel van mijn resultaten nog gewoon geldig, gelukkig.

Ondanks dat alles blijft monopoly een spel dat ik voor eeuwig zal haten. Toegegeven, de officiële spelregels (die ik nu voor het eerst leer) maken veel goed, maar zeker niet alles. Er is te veel geluk bij betrokken. Een speler kan halverwege het spel al gedoemd zijn en praktisch "geëlimineerd" zijn. Vaak hebben die er dan geen zin meer in en verpesten het alleen maar voor de rest. 

Bovendien is elk spel met _geld_ een hel met jongere spelers (ze zijn ineens extreem competitief en worden verdrietig/boos), en een ander soort _hel_ met oudere spelers (want iedereen doet alsof ze afgestudeerde wiskundigen zijn en allemaal belasting- en rentesystemen kunnen gaan invoeren).

## Vraag 1: Hoe lang duurt een potje monopoly?

Met 4 spelers...

  * Als je doorspeelt tot één iemand definitief blut is, kun je zo'n 93 rondes verwachten.
  * Als je doorspeelt tot twee mensen definitief blut zijn, kun je zo'n 152 rondes verwachten.
  * Als je doorspeelt tot één iemand overblijft, kun je 343 rondes verwachten.

Dat zijn veel rondes. Ik kan me oprecht geen enkel potje Monopoly herinneren dat op deze manier is uitgespeeld: de meesten stopten gewoon toen niemand meer zin had, of toen duidelijk werd wie er uiteindelijk zou gaan winnen. Mijn laatste potje Monopoly duurde zo'n 25-30 rondes voordat iemand al zoveel geld en huizen had dat we diegene gewoon de winst gaven. Ik schat dan ook dat 93 rondes een realistisch aantal is, hoewel ietwat aan de hoge kant.

## Vraag 2: Welke vakjes worden het meest bezocht?

  * De eerste 10 en de laatste 5 vakjes worden veruit het minst bezocht.
  * Daar tussenin hebben alle vakjes iets van een halve procent meer kans.
  * Maar, we zien duidelijk een piek rond de vakjes 18, 19 en 20.

<div id="attachment_4029" style="width: 704px" class="wp-caption aligncenter">
  <img aria-describedby="caption-attachment-4029" decoding="async" loading="lazy" class="wp-image-4029 size-full" src="/uploads/2017/02/monopoly_visits.png" alt="monopoly_visits" width="694" height="505" />
  
  <p id="caption-attachment-4029" class="wp-caption-text">
    Eerste keer simuleren
  </p>
</div>

<div id="attachment_4074" style="width: 704px" class="wp-caption aligncenter">
  <img aria-describedby="caption-attachment-4074" decoding="async" loading="lazy" class="wp-image-4074 size-full" src="/uploads/2017/02/monopoly_visits_two.png" alt="monopoly_visits_two" width="694" height="505" />
  
  <p id="caption-attachment-4074" class="wp-caption-text">
    Tweede keer simuleren
  </p>
</div>

Dit is op zich niet verrassend. De middelste vakjes worden immers het meest bezocht. Maar het is wel sneaky, want, "vrij parkeren" is vakje 21. Dus je hebt een hele grote kans om op vakje 20 te komen, maar je kunt met twee dobbelstenen nooit één gooien, dus de kans dat je vrij mag parkeren is relatief klein (zoals te zien is als je naar het bolletje bij nummer 21 kijkt).

Dit betekent wel dat ik verwacht dat de strategie van middelste vakjes kopen succesvol is, omdat alle vakjes in de eerste rij, en die felbegeerde donkerblauwe vakjes in de laatste rij, nooit winstgevend kunnen zijn. Tenzij je er vroeg bij bent en erg veel geluk hebt :p

## Vraag 3: Ligt het aan mij, of zit ik de helft van het potje in de gevangenis?

Dat ligt aan jou. Toegegeven, de kans dat je naar de gevangenis wordt gestuurd is het grootst van alle vakjes, namelijk rond de 4 procent. (In het plaatje hierboven zien we dat vakje 18, als beste, zo'n 3.2 procent kans heeft.) Maar dat is geen dramatisch verschil. Ik zie geen reden om de gevangenis als vervelender te bestempelen dan de vakjes waarop je 200 of 100 euro belasting moet betalen.

## Vraag 4: Ja hé, de persoon die het meest op vrij parkeren komt wint sowieso het potje!

Dat is geen vraag. Maar je hebt wel gelijk. In een 4-speler spel heeft de persoon die het vaakst vrij mag parkeren **40% kans** om te winnen (tegen de 25% die je zou verwachten). In een 6-speler spel is dit 25% (tegen normaal gesproken 16.7%), en in een 2-speler spel heeft diegene 67% kans (tegen 50%).

Gewoon voor de grap heb ik het ook geprobeerd met een 12-speler spel; dan heeft die persoon 15% kans (tegen 8.3%) . Dus het lijkt af te nemen met het aantal spelers, maar je hebt wel degelijk een voordeel als je op vrij parkeren terecht komt. (Overigens, een 12-speler spel duurt maar zo'n 52 rondes. Dus, als je niet wil dat je potje te lang duurt, weet je wat je moet doen.)

## Vraag 5: Heeft de startspeler niet gewoon de grootste kans om te winnen?

Half. Het is niet per sé dat de speler die begint veruit de grootste kans heeft, maar meer dat het _groepje spelers dat als eerste mag_ een grotere winkans heeft dan _het groepje spelers dat steeds als laatste mag_.

<div id="attachment_4062" style="width: 704px" class="wp-caption aligncenter">
  <img aria-describedby="caption-attachment-4062" decoding="async" loading="lazy" class="wp-image-4062 size-full" src="/uploads/2017/02/monopoly_wins_4player.png" alt="monopoly_wins_4player" width="694" height="505" />
  
  <p id="caption-attachment-4062" class="wp-caption-text">
    Aantal winstpartijen spelers 1-4
  </p>
</div>

<div id="attachment_4065" style="width: 704px" class="wp-caption aligncenter">
  <img aria-describedby="caption-attachment-4065" decoding="async" loading="lazy" class="wp-image-4065 size-full" src="/uploads/2017/02/monopoly_wins_6player.png" alt="monopoly_wins_6player" width="694" height="505" />
  
  <p id="caption-attachment-4065" class="wp-caption-text">
    Aantal winstpartijen spelers 1-6
  </p>
</div>

Het probleem is natuurlijk dat je volgens de spelregels niet echt kan _kiezen_ of je mag beginnen. (Iedereen gooit dobbelsteen, hoogste mag starten.) Maar je kunt het altijd proberen. ("Kijk, een paarse vogel!---Goh, wat raar, staat mijn poppetje ineens vooraan")

## Vraag 6: Welke strategie is het beste?

Ah, de meest belangrijke, spannende, intrigerende, alomvattende vraag! Hoe doen we dit? Nou, we laten alle spelers dezelfde standaard strategie doen (strategie 1: alles meteen kopen kopen kopen), maar één speler geven we een speciale strategie. Vervolgens kijken we of die persoon haar winstkansen heeft verhoogd met deze strategie.

Ik kies voor het vervolg speler 1 voor de speciale strategie, omdat het makkelijk is. Natuurlijk zal ik dan wel een beetje moeten corrigeren voor het feit dat speler 1 een kleine voorsprong heeft. De resultaten:

<div id='gallery-2' class='gallery galleryid-3975 gallery-columns-2 gallery-size-medium'>
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='/superieure-spellen/proberen-programmeren/monopoly/attachment/monopoly_strategy_1/'><img width="694" height="505" src="/uploads/2017/02/monopoly_strategy_1.png" class="attachment-medium size-medium" alt="" decoding="async" loading="lazy" aria-describedby="gallery-2-4087" /></a>
    </dt>
    
    <dd class='wp-caption-text gallery-caption' id='gallery-2-4087'>
      Eerste keer simuleren strategie 2; een duidelijke voorsprong voor onze speler
    </dd>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='/superieure-spellen/proberen-programmeren/monopoly/attachment/monopoly_strategy_1_2/'><img width="694" height="505" src="/uploads/2017/02/monopoly_strategy_1_2.png" class="attachment-medium size-medium" alt="" decoding="async" loading="lazy" aria-describedby="gallery-2-4088" /></a>
    </dt>
    
    <dd class='wp-caption-text gallery-caption' id='gallery-2-4088'>
      Tweede keer simuleren, de voorsprong blijft nadrukkelijk aanwezig.
    </dd>
  </dl>
  
  <br style="clear: both" />
</div>

Oké, dus, geen miezerige treinstations en speciale dingetjes kopen lijkt voordelig. Strategie 3, echter, valt vies tegen:

<div id='gallery-3' class='gallery galleryid-3975 gallery-columns-2 gallery-size-medium'>
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='/superieure-spellen/proberen-programmeren/monopoly/attachment/monopoly_strategy_2/'><img width="694" height="505" src="/uploads/2017/02/monopoly_strategy_2.png" class="attachment-medium size-medium" alt="" decoding="async" loading="lazy" aria-describedby="gallery-3-4096" /></a>
    </dt>
    
    <dd class='wp-caption-text gallery-caption' id='gallery-3-4096'>
      Eerste keer simuleren strategie 3; twee heeft zelfs zijn voordeel gedaan ten opzichte van speler 1!
    </dd>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='/superieure-spellen/proberen-programmeren/monopoly/attachment/monopoly_strategy_2_2/'><img width="694" height="505" src="/uploads/2017/02/monopoly_strategy_2_2.png" class="attachment-medium size-medium" alt="" decoding="async" loading="lazy" aria-describedby="gallery-3-4097" /></a>
    </dt>
    
    <dd class='wp-caption-text gallery-caption' id='gallery-3-4097'>
      Tweede keer simuleren; één komt nu wel als winnaar uit de bus, maar niet met veel verschil.
    </dd>
  </dl>
  
  <br style="clear: both" />
</div>

Het is geen slechte strategie per sé, maar het levert ook weinig voordeel op. Wat wél een bagger strategie is, is de laatste: alleen maar dure dingen kopen. Achter de felbegeerde dure dingen aanjagen is de slechtste keuze die je kan maken.

<div id='gallery-4' class='gallery galleryid-3975 gallery-columns-2 gallery-size-medium'>
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='/superieure-spellen/proberen-programmeren/monopoly/attachment/monopoly_strategy_3/'><img width="694" height="505" src="/uploads/2017/02/monopoly_strategy_3.png" class="attachment-medium size-medium" alt="" decoding="async" loading="lazy" aria-describedby="gallery-4-4105" /></a>
    </dt>
    
    <dd class='wp-caption-text gallery-caption' id='gallery-4-4105'>
      Eerste keer simuleren; het gaat slecht met numero 1.
    </dd>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='/superieure-spellen/proberen-programmeren/monopoly/attachment/monopoly_strategy_3_2/'><img width="694" height="505" src="/uploads/2017/02/monopoly_strategy_3_2.png" class="attachment-medium size-medium" alt="" decoding="async" loading="lazy" aria-describedby="gallery-4-4106" /></a>
    </dt>
    
    <dd class='wp-caption-text gallery-caption' id='gallery-4-4106'>
      Tweede keer simuleren; het gaat niet veel beter.
    </dd>
  </dl>
  
  <br style="clear: both" />
</div>

Voor de grap laat ik speler 1 nu strategie 2 en 3 combineren: alleen de middelste dingen kopen, en géén speciale dingen (uit het midden). Het resultaat:

<div id="attachment_4110" style="width: 704px" class="wp-caption aligncenter">
  <img aria-describedby="caption-attachment-4110" decoding="async" loading="lazy" class="alignnone size-full wp-image-4110" src="/uploads/2017/02/monopoly_strategy_extra.png" alt="monopoly_strategy_extra" width="694" height="505" />
  
  <p id="caption-attachment-4110" class="wp-caption-text">
    Meh, valt tegen. Hou het toch maar bij strategie 2.
  </p>
</div>

## BONUS

Voor wie het leuk vindt, heb ik grafiekjes van de hoeveelheid geld die elke speler heeft gedurende een spel:

<div id='gallery-5' class='gallery galleryid-3975 gallery-columns-1 gallery-size-large'>
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='/superieure-spellen/proberen-programmeren/monopoly/attachment/monopoly_4player_overview/'><img width="1013" height="515" src="/uploads/2017/02/monopoly_4player_overview.png" class="attachment-large size-large" alt="" decoding="async" loading="lazy" aria-describedby="gallery-5-4453" /></a>
    </dt>
    
    <dd class='wp-caption-text gallery-caption' id='gallery-5-4453'>
      4 Spelers
    </dd>
  </dl>
  
  <br style="clear: both" />
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='/superieure-spellen/proberen-programmeren/monopoly/attachment/monopoly_6player_overview/'><img width="1013" height="515" src="/uploads/2017/02/monopoly_6player_overview.png" class="attachment-large size-large" alt="" decoding="async" loading="lazy" aria-describedby="gallery-5-4454" /></a>
    </dt>
    
    <dd class='wp-caption-text gallery-caption' id='gallery-5-4454'>
      6 Spelers
    </dd>
  </dl>
  
  <br style="clear: both" />
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='/superieure-spellen/proberen-programmeren/monopoly/attachment/monopoly_12player_overview/'><img width="1013" height="515" src="/uploads/2017/02/monopoly_12player_overview.png" class="attachment-large size-large" alt="" decoding="async" loading="lazy" aria-describedby="gallery-5-4455" /></a>
    </dt>
    
    <dd class='wp-caption-text gallery-caption' id='gallery-5-4455'>
      12 spelers (vergeef me, ik had geen zin om 12 kleuren te bedenken)
    </dd>
  </dl>
  
  <br style="clear: both" />
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='/superieure-spellen/proberen-programmeren/monopoly/attachment/monpoly_3player_overview/'><img width="1013" height="515" src="/uploads/2017/02/monpoly_3player_overview.png" class="attachment-large size-large" alt="" decoding="async" loading="lazy" aria-describedby="gallery-5-4456" /></a>
    </dt>
    
    <dd class='wp-caption-text gallery-caption' id='gallery-5-4456'>
      3 spelers
    </dd>
  </dl>
  
  <br style="clear: both" />
</div>

## 

## De Code

Geschreven in R, onderaan staan parameters die je kan aanpassen (zoals het aantal spelers, of maximaal aantal rondes). Ook maakt hij leuke plotjes over gemiddeld aantal huizen per vakje, bijvoorbeeld.

De code is hier te vinden (Google Drive folder): [Monopoly Simulatie][1]

 [1]: https://drive.google.com/drive/folders/1C2RHTQMOuwGWooJr3g2cK1YdpkG5J9-l?usp=sharing