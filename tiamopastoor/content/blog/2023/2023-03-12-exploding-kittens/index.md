---
title: Exploding Kittens
author: tiamopastoor
date: 2023-03-12T15:00:00+00:00
language: nl
thumb: exploding_kittens_cover
layout: horizontal
categories:
  - Games

---
_Exploding Kittens_ is een van de meest bekende en populaire spellen van het afgelopen decennium. Bij kinderen, bij studenten, bij families.

Ik heb dit spel _redelijk_ veel gespeeld, in allerlei verschillende groepen, en elke keer wist ik niet wat ik ervan moest denken. 

Nu weet ik het. Ik vind het een slecht spel. In dit artikel leg ik kort uit waarom, maar ga vooral een simulatie schrijven om te testen _wat de beste strategie is_! Want ik betwijfel dus of er überhaupt een strategie is voor dit spel. Maar wie weet bewijst de simulatie mijn ongelijk en blijkt het een geweldig spel dat écht niet afhangt van geluk.

Wil je alleen de resultaten? Scroll dan naar **Resultaten / Conclusie** onderaan de pagina.

Deze simulatie werd dermate ingewikkeld dat ik ook _filmpjes_ ben gaan maken van hoe de computer potjes speelt, die vind je ook onderaan. (Het is niet zo indrukwekkend als het lijkt. Je ziet simpelweg welke kaarten er worden gespeeld, wie er afvalt, etcetera.)

De simulatie is geschreven in Rust en is hier gratis te downloaden: [Exploding Kittens (Source Code)][1]

## Wat is het idee?

Tijdens je beurt speel je zoveel kaarten als je wilt en trekt dan een kaart van de stapel.

Als je een "Exploding Kitten" trekt (die je niet kan tegenhouden), explodeer je en ligt uit het spel. Als je hem wel tegenhoudt, mag je hem zelf terugleggen in de stapel _op een geheime plek_.

Alle andere kaarten hebben allerlei speciale acties die helpen met, tja, niet opblazen.

## Waarom is het een slecht spel?

De uitleg hierboven is simpel en klinkt leuk, toch? Jij probeert andere spelers _Exploding Kittens_ aan te smeren en jezelf veilig te stellen.

Als het spel daadwerkelijk daarover zou gaan, zou het een goed spel zijn geweest! Maar het doet eigenlijk niks met dit concept.

### Helemaal niet simpel

Men noemt dit spel vaak "super simpel om te leren en te spelen". Dat klinkt wederom redelijk, _maar het is helemaal niet simpel_.

De spelregels staan bomvol uitzonderingen en extra regeltjes. 

De "Aanvalskaart" zorgt dat de volgende speler twee beurten moet doen ... maar als _zij_ een aanvalskaart spelen, hoeven ze maar één beurt te doen en moet de _volgende_ speler twee beurten doen.

Je kunt bepaalde kaarten combineren. Een paar doet iets anders dan een trio, doet iets anders dan vijf verschillende.

Een Nope kaart kan gespeeld "voordat de actie begint" wat absoluut de _meest vage_ spelregel is die ik ooit heb gezien. Wat telt als "actie"? Sommige beurten hebben uiteindelijk meerdere "acties"? Is het spelen van de kaart zelf niet een actie? Wat als je een Favor kaart speelt, waarbij je dus iemand moet kiezen om van te stelen: als je jouw slachtoffer al hebt aangewezen, mag je kaart _dan_ nog worden ge-nopet?

Er zijn _nog steeds_ constant discussies online over wat specifieke kaarten nou precies doen, en hoe je ze precies wel of niet mag gebruiken. En zelfs als de makers een officieel antwoord geven, zitten daar vaak gaten in, of snappen mensen het niet. (Elke uitbreidingen zorgde voor méér uitzonderingen en vage combinaties als je bepaalde kaarten na elkaar speelde.)

Tijdens het programmeren van deze simulatie heb ik minstens vijf keer een heel stuk opnieuw moeten schrijven. Want ik dacht dat een regel op een bepaalde manier werkte---zo had ik het misschien altijd gespeeld---totdat ik kritische vragen ging stellen en online discussies nalezen.

Het is echt _géén simpel gestroomlijnd spel._ Elke keer als we het weer erbij pakten, vergaten we de helft van de regels, totdat iemand na een mislukt eerste potje nog eens lang naar de spelregels keek. En een paar potjes later opnieuw, als we zo'n uitzondering tegenkomen.

De meeste kaartspellen zullen simpeler zijn en minder uitzonderingen hebben. (_Uitzonderingen_ zijn erger dan _meer regels_. Want ze vragen je hoofd om iets te onthouden, maar met een soort asterisk naar een voetnoot die alleen soms relevant is. Dan kan je beter een extra duidelijke regel bedenken.)

### Geen enkele controle over wat dan ook

Je hebt _één moment van controle._ Het terug stoppen van die _Exploding Kitten_.

Alle andere kaarten manipuleren wel dingen (schudden, de bovenste drie bekijken, je beurt overslaan), maar niet op een interessante manier. Nadat je de stapel hebt geschud ... staat de volgende speler letterlijk voor een leeg canvas, alle informatie van daarvoor is waardeloos geworden. Er is geen andere manier om de stapel te manipuleren of kaarten van andere spelers te weten te komen. 

Vaak heb je geen idee of je dood gaat. Of je weet dat je dood gaat, maar kan niks eraan doen, en dat is op geen enkele manier _jouw schuld_. Je weet te weinig en je kan te weinig definitief beïnvloeden.

Dus je denkt dat je controle hebt---maar je bent eigenlijk een passieve figurant in een spel van kansen dat zichzelf speelt.

Uitbreidingen proberen dit ietsje te verbeteren. Maar dat is verre van genoeg, en het voegt _nog_ meer regels en uitzonderingen toe.

Veel potjes zijn gewoon ... saai en zielloos. Iedereen trekt kaarten, iedereen speelt willekeurige kaarten want het maakt toch allemaal niet uit, soms explodeert iemand en daar had diegene niks aan kunnen doen, totdat iemand _toevallig_ twee "Defuse" kaarten pakt en het spel toevallig wint.

### Hoe je zoiets zou kunnen verbeteren

Natuurlijk wil ik even ideeën geven over hoe je zoiets beter had kunnen doen.

Ten eerste, haal al die uitzonderingen weg. Vergeet dat idee van combo's: het is alleen maar bedoeld om het deck een beetje op te vullen. Nieuwe regels: elke kaart doet één duidelijk ding, altijd, en dat is het.

Ten tweede kan je de kaarten kleurrijker maken

  * "Leg deze kaart voor je neer. Als jij de eerste bent die vanaf nu ontploft, redt deze kaart jou. Als iemand anders eerder ontploft, ontplof jij met hen mee!"
  * "Vraag om een kaartsoort. Elke speler die deze heeft, moet deze aan jou geven. Maar als ze die kaart _allemaal_ hebben, moet jij elke speler een kaart van jezelf geven."
  * "Wissel zoveel kaarten met een andere speler als je wilt. Maar voor elke gewisselde kaart, moet je een kaart trekken aan het einde van je beurt."

Het zijn maar snelle ideeën. Als je hier langer over nadenkt, en het uittest en balanceert, weet ik zeker dat je honderden kaarten kan bedenken die je daadwerkelijk _strategie_, _variatie_ en _goede keuzes_ geven.

### Natuurlijk is het niet allemaal slecht

Het spel is natuurlijk populair geworden met een reden. De _art style_ is simpel, duidelijk, kleurrijk en uitnodigend. De kernregel is wel degelijk heel slim en goed. Er zijn natuurlijk veel _moeilijkere_ spellen dan dit. En niet iedereen speelt een spel voor diepgang of, tja, het spel.

Daarom twijfelde ik al die tijd. Maar ik heb nu toch besloten dat, mocht ik de keuze hebben, ik liever een ander kaartspelletje aan een groep introduceer. Eentje die beter en leuker is---en tegelijkertijd simpeler.

### Update! Nieuwe spelregels

Tijdens het schrijven van deze simulatie, kwam ik meerdere _verschillende_ versies van de spelregels tegen. Dus ik besloot om de _laatste versie_ op te zoeken---en die is behoorlijk anders, maar lost wel wat van mijn problemen op.

**Verandering 1:** Aanvalskaarten tellen op. Dus als jij een aanval speelt, en de ander speelt er ook één, dan moet de volgende speler ineens **vier beurten** doen.

**Verandering 2:** de "vijf verschillende kaarten"-combo is ... weg! Ik weet eigenlijk niet of dit een verbetering is. Het is in ieder geval een versimpeling.

**Verandering 3:** de combo's worden duidelijk neergezet als een _uitbreiding_. Leer ze pas nadat je bekend bent met het spel. Dat is goed.

**Verandering 4:** je mag _alle_ kaarten (met hetzelfde icoontje) gebruiken voor combinaties, niet alleen de kattenkaarten. Dit is een versimpeling én verbetering van de regels die ik in geen enkele eerdere groep heb gebruikt---want we wisten het niet.

**Verandering 5:** je begint met 7 kaarten (+Defuse), dat waren er eerst 4.

Ik ga zeker deze laatste versie gebruiken voor de simulatie. Het is mooi om te zien dat ze blijven leren en de regels updaten naarmate ze meer informatie krijgen over wat werkt. (Maakt de code wel weer een stukje lastiger ... argh.)

## De simulatie

Hoe simuleer je zo'n spel? Hoe gaan we de beste strategie vinden?

Nou ...

  * Ik schrijf een programma dat potjes _Exploding Kittens_ kan spelen.
  * Elke speler krijgt een willekeurige lijst met (vooraf bedachte) strategieën toegewezen.
  * De _winnende strategieën_ van elk potje worden opgeslagen.
  * Zo speelt de computer miljoenen potjes.
  * Aan het einde hebben we een getal, per strategie, dat zegt _hoe vaak_ die heeft gewonnen. Degene met het hoogste aantal moet wel de beste strategie zijn.

De basis hiervan is relatief simpel. Je maakt een lijst met alle kaarten in het spel, deelt die uit onder de spelers, en gaat door de beurten heen (in een eindeloze _loop_) totdat één speler overblijft. (Dit heb ik al vaker gedaan bij eerdere simulaties, dus die code heb ik gekopieerd.)

Het probleem komt natuurlijk van ...

  * De juiste regels opvolgen bij het spelen van kaarten. (Al die uitzonderingen ... )
  * Strategieën bedenken die ergens op slaan en die opvolgen

## Strategieën

Toen ik begon met deze simulatie, zag ik drie keuzes: 

  * Welke kaart(en) je speelt in je beurt
  * Wie je als slachtoffer kiest (als je kaart dat toestaat).
  * Waar je een _Exploding Kitten_ terug stopt als die is geëxplodeerd.

Bij alle keuzes schrijf ik als eerste altijd de "willekeurig" optie. Want ja, dat kan altijd. En het is een goede meetlat om de andere strategieën langs te leggen.

Ook lijken sommige strategieën achterlijk. Maar ik voeg ze toch toe, want je weet maar nooit, en het doet nooit kwaad om alles te proberen. (Als spelontwerper kan ik bevestigen dat spelers nooit zo logisch denken als je zou willen :p En op andere momenten denken ze juist _superlogisch_ en bedenken iets dat jij nooit eerder had gezien.)

Maar zoals altijd, tijdens het simuleren leerde ik pas wat _echt_ belangrijk is, en hoeveel meer losse "keuzes" je hebt in dit spel. Dus hieronder staat in het kort dat proces van verbetering.

### Betere categorieën

Ik besefte dat ik de strategieën verder kon splitsen. Zo maak je ze specifieker en dat is altijd beter. Bijvoorbeeld, een strategie die alleen maar gaat over _hoe je jouw Nope kaarten gebruikt_ of een strategie die alleen maar gaat over _hoe jij combo's spaart (of niet)_.

Dus dat heb ik zoveel mogelijk gedaan.

De uiteindelijke categorieën zijn:

  * **Play:** of je kaarten speelt in je beurt, en zo ja, welke
  * **Nope:** hoe je met Nope kaarten omgaat
  * **Combo**: hoe je met combo's omgaat
  * **Kitten**: ****hoe je een Exploding Kitten teruglegt in de stapel
  * **Victim:** hoe jij een slachtoffer kiest (als een actie slachtoffers heeft, gaat vooral over _stelen_ van een kaart)

Ook gebruiken **alle** spelers een paar algemene principes die elke speler automatisch zal doen bij dit spel. (Als je het niet doet, is elke andere strategie toch zinloos :p)

  * Als je wéét dat er een Kitten aankomt, en je hebt een kaart om dit te omzeilen, doe dit.
  * Speel geen Future kaart als je die toekomst toch niet kan veranderen.
  * Als je zelf nog X beurten moet doen, leg dan niet de kitten terug op de eerste X plaatsen van de stapel.
  * Volgens de regels mag je katkaarten doodleuk op zichzelf spelen, maar ja, ze doen dan niks. Dus doe dat niet. Wacht tot je ze kan gebruiken in een _combo_. => Op dezelfde manier, geef de voorkeur aan _kattenkaarten_ gebruiken voor combo's, in plaats van andere actiekaarten die op zichzelf waardevoller zijn.

### Opmerking over betere code

Ook heb ik eindelijk geleerd hoe je dingen beter structureert in mijn nieuwe programmeertaal (Rust). En hoe je "tests" schrijft: een snelle manier om op elk moment te testen of de belangrijkste stukken code nog wel werken zoals ze horen.

Dat was namelijk het probleem bij vorige simulaties. Dan ging er _iets_ mis---maar ik had geen idee wat. En geen snelle manier om de "usual suspects" uit te sluiten. Voor je het weet zoek je een half uur op de verkeerde plek, omdat je ervan uit ging dat een ander stuk code sowieso werkte (want dat deed het gisteren nog wel!) ... en dat was natuurlijk je grootste fout.

Nu kan ik na elke grote verandering alle tests runnen, die binnen een paar seconden checken of alle onderdelen van de simulatie nog wel werken. Ja, ik voel me nu écht een professionele programmeur :p En ja, het heeft grote fouten gevonden _voordat_ ik er last van kreeg. 

(Zoals dat de code om de Exploding Kitten terug te stoppen in de stapel één stapje te ver ging. Dus de strategie "leg hem bovenop", legde hem juist als tweede (onder de bovenste kaart). Vrij cruciaal dat ik dat snel ontdekte.)

### Voorlopige resultaten

Terwijl ik bezig ben, maak ik graag al links en rechts grafieken. De _Nope_, _Kitten_ en _Play_ strategieën waren al (grotendeels) ingebouwd, de rest was totaal willekeurig (en "dom").

{{% image-gallery %}}
 ![](/uploads/2023/01/first_test_combo_result.webp) ![](/uploads/2023/01/first_test_kitten_result.webp) ![](/uploads/2023/01/first_test_nope_result.webp) ![](/uploads/2023/01/first_test_play_result.webp) ![](/uploads/2023/01/first_test_victim_result.webp) 
{{% /image-gallery %}} 

Wat zien we dan? 

  * De Kitten terug bovenop leggen loont toch het meest (_Top_). De tweede beste (_TopCond = Top Conditional_) betekent alleen bovenop leggen als de speler na jou bijna geen kaarten heeft.
  * Alle Nope tactieken liggen dicht bij elkaar, maar de winnaar is "_Direct_": gebruik ze alleen als jij _direct_ wordt aangevallen. De tweede beste strategie is als je de Nope kaarten "zelden" gebruikt. Dit suggereert dat je dus in 't algemeen voorzichtig moet zijn met je Nopes.
  * De Play strategieën zijn het meest teleurstellend. Alles verliest van "_Willekeurig_": besluit met 50% kans of je een kaart speelt of niet, steeds opnieuw, tot je beurt voorbij is. Gemiddeld speel je dan twee kaarten per beurt (0.5 \* 1 + 0.25 \* 2 + 0.125 * 3 + ... = 2). Maar dat is alleen als je potentieel oneindig kaarten hebt, in de praktijk is het eerder ~1.5 kaart per beurt.
      * Hopelijk is dat anders zodra alles in de simulatie zit.

Het kan zijn dat het spel inderdaad zo willekeurig en "strategieloos" is zoals ik hierboven uitlegde. Het kan ook zijn dat de missende onderdelen (combo's, kaarten stelen, slimmer zijn met _welke_ kaarten je speelt) cruciaal zijn voor het spel.

### Nog meer voorlopige resultaten

Inmiddels zijn de _victim_ en _combo_ strategieën (en onderliggende mechanismes) toegevoegd. Ook waren enkele foutjes in de simulatie opgelost, hoewel dat geen grote dingen waren.

Daarom zijn zulke tussentijdse resultaten best handig.

{{% image-gallery %}}
 ![](/uploads/2023/01/second_test_combo_result.webp) ![](/uploads/2023/01/second_test_kitten_result.webp) ![](/uploads/2023/01/second_test_nope_result.webp) ![](/uploads/2023/01/second_test_play_result.webp) ![](/uploads/2023/01/second_test_victim_result.webp) 
{{% /image-gallery %}} 

Wat zien we hier?

  * Ja, de _Play_ strategieën krijgen nu meer variatie. De winnaar is om _niks te spelen_ zolang je nog veilig bent (je hebt een Defuse kaart). Willekeurig spelen, echter, blijft het goed doen.
  * De keuze voor je slachtoffer is ook vrij logisch. De winnaar is _DefuseProb_. Vraag een Defuse van de speler met de meeste kans ( _= probability_) om er één te hebben ( = nog niet ontploft).
  * De _Nope_ strategieën liggen dicht bij elkaar. Maar elke directe aanval tegenhouden, zeker als je geen Defuse hebt, wint toch weer.
  * En je combo's _meteen gebruiken_ (en dus veel vragen naar _combokaarten_) loont!

### Nog betere categorieën

Maar hoe meer _Play_ strategieën ik inbouwde, hoe meer ik het gevoel had dat ik nog verder moest splitsen.

Bijvoorbeeld, het feit dat "de Kitten bovenop terugleggen" altijd zo geweldig scoort vond ik verdacht. Totdat ik realiseerde dat heel veel spelers _niks (intelligents) doen met hun "bekijk de toekomst" kaarten_, want dat is slechts één strategie van velen.

Nu ik langer dit spel analyseer, en potjes kan laten printen door de computer, zie ik beter welke dingen echt losse (cruciale) beslissingen zijn. Zoals dat Combo's en Nope kaarten stiekem de kern van het spel zijn (gemiddeld genomen).

Dus dat soort categorieën probeer ik dan los te trekken. De nieuwe toevoegingen zijn:

  * **Future:** hoe je omgaat met de toekomst bekijken. Altijd? Alleen als je geen Defuse hebt? Alleen als je de toekomst kunt veranderen?
      * _Als_ je kiest om hem te spelen, doe je dat altijd meteen (als eerste in je beurt). Dat leek me een algemene regel die elke speler volgt, want er is absoluut geen reden om dit later te doen.
      * Dit beïnvloedt ook de kans dat je de Future kaart van andere spelers steelt.
  * **Answer:** hoe je reageert op de situatie dat de speler _voor jou_ een kitten heeft teruggelegd.
  * **Combo** is gesplitst in drie.
      * Kans op gebruiken/vragen
      * Voorkeur voor 2 of 3
      * Voorkeur voor katkaarten of alle kaarten. (Ik dacht dat alle kaarten gebruiken voor combo's dom was ... maar die strategie scoort vooralsnog vaak als de beste.)
  * **Nope** is gesplitst in vier.
      * Kans op gebruiken
      * Specifieke override (situatie waarin je het sowieso doet, of echt niet, etcetera)
      * Verdedigend nopen (hoe direct moet jij worden aangevallen voordat je de actie nopet)
      * Kans op multinope (hoe groot is de kans dat jij lekker meedoet als men begint te Nopen door meer olie op het vuur te gooien?)

In eerste instantie was het ook mogelijk om Nope kaarten te vragen (als je kaarten stal van een andere speler). Totdat ik dus de regeldiscussies online las, waarin 90% het erover eens was dat je een steelactie kunt Nopen, _zelfs als iemand al heeft gezegd welke kaart ze van wie willen hebben._ Tja, als je dan een Nope kaart hebt, dan Nope je die hele steelactie natuurlijk.

Dus die optie is geheel verdwenen uit de simulatie. Maakte toch al niet zoveel verschil, omdat het met de huidige regels dus een bizarre keuze was om te maken.

## De game loop

Uiteindelijk werd de simulatie dermate complex dat ik een schets moest maken van de algemene gameplay loop. Deze deel ik hier ter verduidelijking van hoe alles samenwerkt in de simulatie.![](/uploads/2023/01/Exploding-Kittens-Algorithm-Sketches_result.webp) 

Het moeilijkste deel was:

  * Hoe zorg je ervoor dat spelers geen 100% achterlijke zetten doen ...
  * ... zonder afbreuk te doen aan de gevarieerde strategieën die ze moeten volgen?

Bijvoorbeeld, als iemand een "See The Future" kaart heeft, is het alleen zinvol om die te gebruiken als je die toekomst ook kunt _veranderen_. Anders speel je een kaart zonder reden en zonder consequentie. Dat is een simpele regel, makkelijk te programmeren.

Maar ... je kan natuurlijk andere spelers gaan vragen om zulke kaarten. Misschien heb je wél 3 "Favor" kaarten, waardoor je drie kansen hebt om een actiekaart van iemand te krijgen (die de stapel verandert). Zodra je die hebt, speel je jouw Future kaart en doet een geweldige zet.

Andersom, als iemand de strategie heeft waarbij hij Future kaarten héél belangrijk vindt, zal diegene zijn "Favor" dus willen inzetten om zo'n Future kaart te vragen bij anderen.

Ik zocht een simpele, schone manier voor de simulatie om hier wijs uit te worden. Dat werd bovenstaand diagram.

Bij volgende simulaties maak ik dit waarschijnlijk vanaf het begin. Dat zal de kwaliteit van de code ook ten goede komen :p

## Resultaten

Eindelijk, eindelijk. Alles ingebouwd, alles getest, de simulatie speelt razendsnel geweldige potjes _Exploding Kittens_.

Wil je dit zelf ervaren? Run dan zelf de code en zet in de _config_ "print_gameplay" naar "true". (Moet je wel maar één potje simuleren, anders print hij wel _heel veel._) Dan noemt de computer precies wie aan de beurt is, wat ze doen, of ze ontploffen, etcetera.

Wat krijg je dan als resultaat? 

### Winnende strategie (individueel)

In de volgende plaatjes zoeken we dus steeds de grafiek die het _hoogste_ is: die gemiddeld het meeste potjes heeft gewonnen.

_Klik op een plaatje om deze fullscreen te bekijken._

{{% image-gallery %}}
 ![](/uploads/2023/01/final_answer_result.webp) ![](/uploads/2023/01/final_combo_pref_result.webp) ![](/uploads/2023/01/final_combo_result-1.webp) ![](/uploads/2023/01/final_combo_type_result-1.webp) ![](/uploads/2023/01/final_future_result.webp) ![](/uploads/2023/01/final_kitten_result.webp) ![](/uploads/2023/01/final_nope_custom_result.webp) ![](/uploads/2023/01/final_nope_defend_result.webp) ![](/uploads/2023/01/final_nope_result.webp) ![](/uploads/2023/01/final_play_result.webp) ![](/uploads/2023/01/final_victim_result.webp) 
{{% /image-gallery %}} 

### Winnende strategie (combinatie)

Vervolgens kunnen we dit dubbel checken door speler 0 al deze "beste strategieën" te geven (elk potje opnieuw) en de grafiek te maken _per speler_. We hopen dat speler 0 flink vaker wint dan de rest.![](/uploads/2023/01/fixed_strategy_per_player_check_result.webp) 

Jup, dat is vrij overtuigend.

Ook zie je bijna altijd bij spellen dat de spelers rondom speler 0 (1 en 3) hierdoor worden beïnvloed. Meestal is de speler _na_ de goede speler de pineut.

### Beste startkaarten

We slaan op met welke kaarten de winnende speler begon. Zo krijgen we een idee welke kaarten je graag wilt hebben vanaf het begin. Of zien we dat het niet uitmaakt.![](/uploads/2023/01/frequency_for_winner_per_starting_card_result.webp) 

Ah, eindelijk iets interessants! 

  * De beste kaart om te hebben aan het begin is de **Favor.**
  * Daarna komt **Attack.**
  * Daarna komt **Skip**, en de **Kattenkaarten** (allemaal ongeveer gelijk natuurlijk).
  * Daarna **Nope**.
  * En dan de rest.

Ja, deze grafiek compenseert voor hoe vaak een kaart voorkomt in de stapel. (Hoe vaker hij voorkomt, hoe meer kans je sowieso hebt om hem in je hand te hebben.)

## Filmpjes

Ik kon moeilijk zien of alles definitief goed ging in de simulatie. (Er zijn _zoveel_ strategieën en _zoveel_ verschillende regels / kaartsoorten, dat allemaal printen op het scherm is te onoverzichtelijk.)

Dus ik besloot weer te doen wat ik vroeger ook leuk vond: filmpjes maken van hoe de computer een potje speelt!

Dit werkt als volgt:

  * Na elke beurt laat ik de computer een _plaatje_ maken van de huidige toestand. (Dus ik teken gekleurde vierkanten om te laten zien welke kaarten elke speler heeft. Ik schrijf naast de speler wat ze hebben gedaan op hun beurt.)
  * Uiteindelijk krijg je zo ~30 plaatjes. (Het gemiddelde potje met 4 spelers duurt zo'n 30 beurten.)
  * Die speel ik na elkaar af in een filmpje.

Zo _zie_ je een potje gespeeld worden door de computer. Deze filmpjes bleken essentieel in het ontdekken van enkele zeldzame (maar grote) fouten in mijn simulatie 🙂

Hieronder staan de eerste vijf filmpjes die ik liet maken.

En ja, ze zijn niet adembenemend mooi. Dit is de eerste keer dat ik met Rust plaatjes maak. In de toekomst kan ik misschien het _plaatje_ van de kaart gebruiken in plaats van gekleurde vierkanten, maar ach.

{{% remark %}}
Als je zelf filmpjes wil maken, run je de simulatie één keer en zet `create_gamestate_video` aan in de config. Onderaan de config staat ook een FFMPEG commando om van die plaatjes een filmpje te maken.
{{% /remark %}}

### Filmpje 1

{{% video src="/uploads/2023/01/exploding_kittens_game_1.mp4" %}}

Goed voorbeeld van de willekeurigheid van dit spel. De bovenste speler trekt meteen aan het begin _twee keer een Exploding Kitten_. Dat kon diegene totaal niet zien aankomen. Dit voorkom je alleen met een hele agressieve strategie (speel gewoon al je kaarten op elke beurt). 

Maar ja, met zo'n strategie ben je na twee rondes uit je kaarten, dus dat doet niemand. Dus ligt diegene na een paar rondes al compleet uit het spel ... en daar kan niemand iets aan doen.

### Filmpje 2

{{% video src="/uploads/2023/01/exploding_kittens_game_2.mp4" %}}

In het algemeen zie je dat mensen die toevallig een Defuse stelen of van de stapel trekken, vrijwel altijd winnen. 

Ook zie je een speler soms iets semi-doms doen. Bijvoorbeeld, eerst de stapel schudden, en dan _alsnog_ een tweede kaart spelen om zichzelf te verdedigen tegen een Kitten---waarom dan überhaupt schudden? :p 

Maar onthoudt dat de computer simpelweg z'n strategieën precies opvolgt, wat dat dan ook is. Écht domme dingen heb ik er uitgehaald.

### Filmpje 3

{{% video src="/uploads/2023/01/exploding_kittens_3.mp4" %}}

Nog een voorbeeld van die willekeurigheid. De onderste speler komt toevallig aan _drie Defuse kaarten_. Tja, je kon echt wel voorspellen wie er ging winnen vanaf dat moment :p 

Ook zie je hier hoe sommige strategieën wat met elkaar botsen. De linkerspeler wil "Always" een combo spelen, maar tegelijkertijd "Never" een kaart spelen. Die tweede is leidend, dus de speler speelt geen enkele combo het hele potje. 

In toekomstige simulaties ga ik kijken hoe ik dit soort dingen voorkom, want het is vrij zinloze data in zo'n simulatie.

### Filmpje 4

{{% video src="/uploads/2023/01/exploding_kittens_4.mp4" %}}

Dit vind ik meer een gemiddeld potje. Er gebeurt niet zo veel, er zijn geen geweldige zetten, en uiteindelijk eindigt het vrij snel in een anti-climax. Maar dat is dus te verwachten, met zoveel strategieën die mogelijk hele domme acties tot gevolg hebben.

### Filmpje 5

{{% video src="/uploads/2023/01/exploding_kittens_5.mp4" %}}

De onderste speler heeft een grote voorkeur voor combo's, en dat zie je ook meteen als ze rond ~20 seconden een combo van 3 spelen. Maar ... ze krijgen geen kaart! Huh? Wat? De meeste mensen zouden in deze situatie een Defuse vragen van wie dan ook, want _iedereen moet nog een Defuse hebben_. 

Maar ik kan dat soort aannames niet maken in zo'n simulatie. Het hele idee is juist om te _testen_, uit zoveel mogelijk ideeën, wat de beste is. Als ik de simulatie vol stop met honderd van dit soort regeltjes, doe ik niets anders dan een AI schrijven die _in mijn ogen_ redelijk Exploding Kittens kan spelen. (De speler vroeg een andere kaart die de speler niet had, daarom kreeg diegene niks.)

Dit gebeurt richting het einde opnieuw met de speler rechts. Die heeft als strategie om agressieve kaarten te vragen ... maar diens slachtoffer heeft dat niet, dus die krijgt niks voor z'n 3 cattermelons :p

## Conclusie

**Dus hoe win je een potje Exploding Kittens?** 

Met onmeetbare teleurstelling moet ik zeggen dat mijn hypothese waarheid is gebleken. 

Het spel is **nogal willekeurig** en beloont vooral **niks doen en afwachten.**

Bijna alle strategieën, hoezeer ze ook uiteenlopen, hoe _dom_ sommige ook lijken, scoren nagenoeg hetzelfde.

  * **Play?** Speel geen enkele kaart zolang je een Defuse hebt. (Dus gebruik je andere strategieën voor kaarten spelen pas zodra je "onveilig" bent.)
  * **Combo's?** Geef de __voorkeur aan combo's vragen en gebruiken, het liefste van twee kaarten. Kattenkaarten of alle kaarten maakt niet uit.
  * **Nope?** Gebruik ze met grote kans als je direct wordt aangevallen, anders nooit. (Tja, hét moment waarvoor de kaart gemaakt lijkt.) Wachten met inzetten tot de laatste rondes van het spel loont ook.
  * **Kittens?** Stop ze bovenop terug. Ga ook _altijd_, voor de zekerheid, ervan uit dat de speler voor jou dat heeft gedaan.
  * **Future?** Vaak of altijd de toekomst bekijken loont. Op willekeurige momenten de toekomst bekijken staat op de tweede plek ...
  * **Stelen?** Vraag naar een Defuse (als je een kaart mag noemen). Kies iemand die nog niet is ontploft, of kies steeds een _verschillend_ slachtoffer. (Deze is het meest interessant. Ik heb geen idee waarom, maar deze strategie heeft _consistent_ hoog gescoord gedurende de ontwikkeling.)

Maar zoals de grafieken aantonen, kies een andere strategie, of "kies willekeurig", en het maakt weinig uit. Je hebt gewoon té weinig informatie en té weinig controle over welke kaarten je krijgt (of wat andere spelers jou aandoen). 

Daardoor zien deze grafieken er ook wat stom uit. Er zijn niet echt uitschieters naar boven of beneden. Dus je kijkt naar allemaal staafgrafieken waarbij je moet inzoomen om überhaupt verschil te ontdekken.

Ach ja, al die moeite was niet voor niets. Nu heb ik tenminste data om mijn gevoel over dit spel te ondersteunen 🙂

## Bronnen & Discussie

De uitslag suggereert nu dat Exploding Kittens inderdaad simpelweg een heel willekeurig spel is, waarbij een paar "overduidelijke" tactieken werken (zoals "vraag om een Defuse kaart van de speler met de meeste kans om er eentje te hebben"), en de rest niks uitmaakt.

Het nadeel van deze techniek is dat _bluf_ en het vermogen om je _aan te passen_ tijdens het spel niet echt bestaan. Ook worden alle strategieën los getest en opgeslagen, dus we weten minder over hoe sterk specifieke _combinaties_ zijn.

Dus in een toekomstige simulatie zou ik kunnen kijken naar tactieken die meer _inspelen_ (en veranderen) op wat andere mensen doen, hoewel de huidige tactieken dat ook al vrij geavanceerd doen.

Ook zou ik de uitbreidingen erbij kunnen simuleren. Ik heb 99% van de code toch al: het zou vooral betekenen dat ik de nieuwe kaarten toevoeg.

Ik doe deze simulaties ook vooral om te oefenen met een nieuwe programmeertaal én om meer te leren over _game design_. Immers kan je zo vlug testen of je spel last heeft van problemen zoals ...

  * Té veel geluk
  * Eén overduidelijke winnende strategie
  * Een groot voordeel voor de eerste (of laatste) speler 
  * Grote variatie in hoe lang potjes duren

Mijn simulatie was retesnel ... tot vlak voor het einde. Toen heb ik heel veel code toegevoegd voor debuggen (zoals de filmpjes maken, tekst printen van spelverloop, etcetera) en is het ergens een stuk langzamer geworden. Ooit heb ik meer verstand van Rust en zal ik weten wat ik daar fout heb gedaan. Ach ja, hij speelt alsnog 100,000 potjes in iets meer dan een minuut, dus ik vind het acceptabel.

Dit vond ik waardevolle bronnen tijdens dit project:

  * [https://www.reddit.com/r/ExplodingKittens/comments/k4fcfi/new\_card\_ideas\_looking\_for\_feedback\_on_mechanic/][2]
  * [https://startyourmeeples.com/2019/05/24/how-to-win-exploding-kittens/](https://startyourmeeples.com/2019/05/24/how-to-win-exploding-kittens/)
  * [https://samdecrock.medium.com/7-rules-to-excel-at-exploding-kittens-7034c48b36e1](https://samdecrock.medium.com/7-rules-to-excel-at-exploding-kittens-7034c48b36e1)

 [1]: https://drive.google.com/drive/folders/1jOTmsvTvHqqXFGfwH3TjWe8-3-o1oGPq
 [2]: https://www.reddit.com/r/ExplodingKittens/comments/k4fcfi/new_card_ideas_looking_for_feedback_on_mechanic/