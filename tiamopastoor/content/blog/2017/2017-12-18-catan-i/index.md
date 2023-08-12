---
title: Catan I
author: tiamopastoor
date: 2017-12-18T16:08:42+00:00
language: nl
categories:
  - Miscellaneous

---
Ik was laatst heel erg verbaasd. Ik las een forum (in het Engels) over hoe je andere mensen kunt enthousiasmeren voor het spelen van bordspellen, en kwam meerdere keren hetzelfde bericht tegen:

> "Introduceer ze anders tot _Catan_. Dat is een strategisch complex spel, maar toch leuk en te begrijpen voor beginnelingen."

Strategisch complex spel? Introduceren? _Catan_ is een van de _eerste_ bordspellen die ik (en menig ander persoon in Nederland) ooit heb gespeeld. Als je voorstelt om het spel te spelen, zegt men meestal "_nee die heb ik al zo vaak gespeeld"_ of "_nee, ik heb meer zin in een ander/beter spel"_. (Althans, dat is wat _ik_ altijd zeg.) Blijkbaar is het in Amerika slecht gesteld met de hobby van bordspellen spelen.

Ik heb dan ook een rare haat-liefde relatie met het spel. Het is inderdaad duizendmaal beter dan ganzenbord of mens-erger-je-niet (of het vreselijke kwartet), maar nog steeds niet bijzonder enerverend.

(Even terzijde: kwartet is geen spel. Het is een algoritme waarbij iemand die geluk heeft met zijn beginkaarten en zijn gokken altijd wint, en de rest een slechte tijd heeft. Als je kwartet een spel noemt, is vragen of iemand anders de appelmoes wil doorgeven aan de eettafel ook een spel.)

Daarnaast is een groot deel van Catan ook persoonlijke vendetta's.

  * "Oh, jij bouwt je straatje waar ik hem wilde bouwen? IK STEEL VOORTAAN ALLES VAN JOU."
  * "Oh, jij denkt dat je de langste route van mij kan stelen? IK BOUW ALLEEN NOG MAAR STRAATJES."
  * "Oh, jij steelt voor de tweede keer op rij een kaart van mij? IK BOUW MIJN HUISJES PRECIES OP ZO'N MANIER DAT JIJ HELEMAAL NIKS MEER KAN BOUWEN."
  * "Oh, je gooit weer een getal waar ik niks aan heb? DEZE DOBBELSTENEN ZIJN VALS. IK EIS NIEUWE DOBBELSTENEN."
  * "Oh, jij steelt op het allerlaatste moment de grootste riddermacht van mij? IK EIS NIEUWE VRIENDEN."

Zoals gewoonlijk ga ik daarom het gelukselement uit het spel halen door het te _simuleren! _(En hopen dat daarna niemand het meer met mij wil spelen! Jeej!)

Als je niet hoeft te weten wat ik precies heb gedaan, maar alleen de resultaten wilt bekijken, [KLIK DAN HIER][1]


## De Spelregels

... zijn lang. Hier is een incomplete samenvatting. Ter herinnering, zo ziet het zeshoekige bord eruit:

![Hoewel blauw heel lang leek te winnen, heeft geel dit potje op het laatste moment binnengesleept. Way to go, yellow. Rood was hopeloos.](/uploads/2017/12/output_state_000.png)

Om de beurt doet elke speler het volgende:

  * **Gooit dobbelstenen.** Voor elk gebouwtje dat iemand heeft aan een veld met het gegooide aantal, krijgt iemand de grondstoffen van dat veld.
  * **Ruilt.** Je kunt met de bank ruilen (vier kaarten voor één naar keuze), of andere spelers (op afspraak), of met een haven aan de rand van het bord (twee of drie kaarten voor één)
  * **Bouwt.** Met de grondstoffen die je in je hand hebt kun je straten, dorpen, en steden bouwen. Je gebouwtje moet natuurlijk aan een straat van jezelf zitten, en mag niet grenzen aan een punt waar al een ander gebouwtje staat.

De speler die als eerste 10 overwinningspunten behaalt, wint.

Hoe krijg je overwinningspunten?

  * Elk dorp geeft 1 punt, elke stad 2 punten
  * De persoon met de langste handelsroute (langs aaneengesloten stuk van straatjes) krijgt 2 punten
  * De persoon met de grootste riddermacht (meeste ridderkaarten) krijgt 2 punten
  * Er zijn vijf ontwikkelingskaarten in het spel die je direct 1 punt geven

Als iemand **7** gooit, verplaatst deze de dief (of hoe je dat zwarte poppetje ook wil noemen) naar een veld naar keuze. Hij mag dan één grondstof stelen van één speler die aan dat veld staat met een gebouwtje. Ook moet iedereen die meer dan zeven grondstofkaarten heeft de helft weggooien.

## Wat gaan we doen?

We gaan de computer heul veul potjes tegen zichzelf laten spelen. We pakken vier spelers, en geven elke speler een eigen strategie, en dan kijken we wie de meeste potjes wint.

Aangezien een groot deel van het spel gebaseerd is op kans, hoeven we alleen strategieën te bedenken voor een aantal losse spelonderdelen:

  * Het bepalen van je startpositie.
  * Straten bouwen
  * Dorpen bouwen
  * Steden bouwen
  * Ontwikkelingskaarten kopen
  * Wat je ruil-strategie is.
  * Hoe je met de dief omgaat.
  * Wat je sociale instelling is.

Hieronder komen alle specifieke strategieën. Onthoud dat er altijd de "0"-strategie is: gewoon willekeurig wat doen. In dat geval krijgt de computer alle opties in een lijst, en kiest er eentje willekeurig uit de lijst zonder verdere logica of consistentie.

### Het bepalen van je startpositie

  1. Plaats beide huisjes op de best mogelijke velden. (Dit betekent: velden met een getal zo dicht mogelijk bij de zeven, omdat deze het vaakst zullen worden gegooid.)
  2. Plaats beide huisjes op havenlocaties aan de rand. (Dit zorgt dat je heel makkelijk kan ruilen, én je bent een stukje uit de buurt van andere spelers.)
  3. Plaats beide huisjes bij de meest nodige grondstoffen. (Dit zijn hout en klei. Beide zijn nodig voor straten en dorpen.)
  4. Plaats beide huisjes zo ver mogelijk uit de buurt van andere spelers.
  5. Plaats beide huisjes zo dicht mogelijk naast elkaar (verbonden met de twee straten die je aan het begin krijgt)

Natuurlijk kan je ook twee strategieën combineren. (Bijv: het ene huisje gaat volgens 2, de ander volgens 1.) Dat zijn echter 20 mogelijkheden, dus die ga ik niet allemaal noemen hier.

Hoewel de spelregels niet echt heel duidelijk zijn, ga ik ervan uit dat je niet twee straatjes bij hetzelfde huisje mag zetten aan het begin. Dus elk huisje krijgt één straatje om zich heen in de startpositie.

### Straten bouwen

  1. Langste handelsroute: check altijd eerst of je een straatje kan bouwen---zo ja, doe dat.
  2. Coin flip: met vijftig procent kans bouw je een straat, met vijftig procent kans probeer je iets anders.
  3. Alleen straten bouwen als het écht nodig is. (Je wilt een gebouw bouwen, maar kan het niet.)
  4. Probeer altijd eerst een ontwikkelingskaart te kopen of stad te bouwen. Kijk daarna pas of een straat mogelijk is.

### Dorpen bouwen

  1. Zodra een gat opent, bouw meteen een dorpje.
  2. Bouw alleen dorpen op plekken die minstens 2 grondstoffen leveren
  3. Bouw alleen dorpen op plekken die 3 grondstoffen leveren
  4. Bouw alleen dorpen op kruisingen die iets nieuws opleveren. (Dus, stel je hebt al een huisje aan een veld staan, dan wil je niet nog eentje aan hetzelfde veld.)
  5. Bouw alleen dorpen die grondstoffen opleveren die je mist/het minste krijgt. (Stel je krijgt alles behalve erts, bouw dan je dorpje aan een veld met erts.)
  6. Bouw alleen dorpen aan velden met veel kans dat ze gegooid worden.
  7. Wanneer je de keus hebt, kies altijd voor een havenlocatie

### Steden bouwen

  1. Zodra je de grondstoffen hebt, bouw meteen een stad.
  2. Coin flip: vijftig procent kans op een stad bouwen, vijftig procent kans op het niet doen.
  3. Bouw alleen een stad als je geen andere opties hebt.
  4. Bouw eerst al je dorpen, en begin dan pas aan steden.
  5. Bouw nooit een stad.

### Ontwikkelingskaart kopen

  1. Grootste riddermacht: check altijd eerst of je een ontwikkelingskaart kan kopen---zo ja, doe dat
  2. Coin flip: vijftig procent kans op ontwikkelingskaart kopen, vijftig procent kans van niet.
  3. Koop alleen een ontwikkelingskaart als je niks anders kan.
  4. Koop nooit ontwikkelingskaarten.

### Wat je ruil-strategie is

In de simulatie wordt bijgehouden wat iemands directe doel is (een straat bouwen, voor ontwikkelingskaart sparen, etc.) Afhankelijk hiervan wordt bepaald welke kaarten die persoon nog nodig heeft.

Wanneer een speler geen direct doel heeft, gaan we ervan uit dat die speler op zoek is naar het type kaart dat hij het minste heeft. (En anders gaat het willekeurig.)

  1. Voet bij stuk: nooit méér ruilen dan je wil
  2. Meegaand: altijd meegaan met die ander zodat je tenminste iets geruild krijgt
  3. Willekeurig kiezen of je voet bij stuk houdt, of meegaat. (50/50)
  4. Nooit met andere spelers ruilen

Als je ervoor kiest nooit met anderen te ruilen, ruil je automatisch met de bank zodra je vier dezelfde kaarten hebt. (Als je dit niet doet, is de kans zeer zeer groot dat je vast komt te staan en het hele potje niks kan, omdat je nooit de juiste kaarten krijgt.)

Als je wél met andere spelers ruilt, ruil je alleen met de bank als geen van de spelers je kan helpen. Als jij een havenlocatie in je bezit hebt, wordt natuurlijk ook eerst gekeken of dat niet voordeliger is.

### Hoe je met de dief omgaat

De straf van de _dief_ best wel groot. Stel je hebt acht kaarten, en iemand gooit zeven, dan eindigt jouw beurt ineens met maar vier kaarten. Mag je helemaal opnieuw beginnen. Als je meer kaarten hebt, wordt het allemaal nog dramatischer. Wat kun je eraan doen?

  1. Als je meer dan zeven kaarten hebt, probeer je zo snel mogelijk iets te bouwen om er weer onder te komen.
  2. Als je meer dan acht kaarten hebt, ...
  3. Als je meer dan negen kaarten hebt, ...
  4. Als je meer dan zeven kaarten hebt, probeer je er vanaf te komen. Echter, als je maar één kaart verwijderd bent van je doel, doe je dat niet. (Bijvoorbeeld, je hebt nog maar één graan nodig en je kunt een stad kopen.)
  5. Je geeft niks om de dief en verzamelt vrolijk alle <del>pokémon</del> kaarten.

### Wat je sociale instelling is

  1. Defensief: je blijft uit de buurt van anderen, blokkeert anderen niet, valt willekeurig mensen lastig met de dief.
  2. Neutraal: je doet je eigen ding, wat de rest er ook van vindt, maar neemt geen wraak op mensen.
  3. Agressief: als iemand in jouw buurt komt, of jouw straat onderbreekt, of voor de tweede keer bij jou kaarten steelt, is diegene de rest van het potje jouw aartsvijand. 
      * Dit betekent specifiek: elke dief die je mag verplaatsen, val je die persoon lastig. Je stelt bizarre eisen als je ruilt met die persoon, en ruilt dus praktisch niet met diegene. Je probeert zoveel mogelijk expres in de buurt van die persoon straten en dorpen te bouwen.

### Voordat we beginnen

Zoals je ziet is er eigenlijk vooral veel keuzevrijheid bij het bepalen van je beginpositie. Daarnaast kun je veel kanten op als het gaat om wanneer en hoe je jouw straten/dorpen/steden bouwt.

In werkelijkheid is er in dit spel, echter, vaak een gebrek aan keuzevrijheid. Het bord is betrekkelijk klein, en de plaatsingsregels streng, dus vaak kun je niet krijgen wat je wilt. In dit geval ...

  * ... kiezen computerspelers altijd voor een tweede beste optie, als die er is. 
      * Bijvoorbeeld, je kunt een straat bouwen naar een veld met het nummer 6 en eentje met het nummer 5. Als die van 6 al bezet is, is die van 5 alsnog een goede optie.
  * ... kiezen computerspelers willekeurig, als er geen tweede beste optie is. 
      * Als jij geen huisje meer kunt bouwen aan het einde van een straat, omdat een medespeler al in de buurt iets heeft ingepikt, kies je toch lekker een willekeurig ander ding om aan verder te bouwen voortaan. (En je vervloekt die persoon binnensmonds.)

### Waarom dit spel moeilijk te simuleren is

In eerste instantie wilde ik computerspelers een vaste strategie geven aan de hand van een _doelwit_. Stel, de computer heeft als volgende doel om een nieuwe straat te bouwen. Dan spaart hij voor de straat (en doet niks anders), totdat hij hem kan bouwen, en zoekt daarna een nieuw doelwit.

Dit werkt in principe wel, maar is totaal niet handig. Welke grondstoffen je in eerste instantie krijgt hangt namelijk geheel af van de dobbelstenen, en zo kan het gebeuren dat je ineens de kaarten hebt om een stad te kopen, zonder dat je daar zelf iets voor hebt gedaan. Het zou ongelofelijk dom zijn om dan beurtenlang niks te blijven doen totdat je dat ene straatje kan bouwen dat je wilde.

Dus was het eigenlijk best een ramp om de simulatie goed te krijgen. Uiteindelijk heb ik beide werelden gecombineerd:

  * De computer volgt een vast patroon: 
      * Spaar voor je doelwit (mede door slim te ruilen enzo)
      * Zodra je de grondstoffen hebt, bouw dit doelwit.
      * Zoek nu een nieuw doelwit; 
          * Als er open plekken zijn voor gebouwen, maak dan een DORP je nieuwe doelwit
          * Zo niet, als er open plekken zijn voor straatjes, maak dan een STRAAT je nieuwe doelwit
          * Zo niet, pak dan een STAD of ONTWIKKELINGSKAART als doelwit. (Dit hangt af van welke strategie je kiest, en, eventueel, random kans.)
  * Meerdere strategieën gebieden dat de speler iets MOET doen als hij de grondstoffen heeft. Dus, vóórdat de computer bovenstaand patroon uitvoert, checkt hij of hij deze ronde toevallig de grondstoffen heeft gekregen voor iets dat hij kan gebruiken.
  * Nádat bovenstaand patroon is uitgevoerd, checkt de computer of hij te veel kaarten heeft, en bouwt (zo mogelijk) een willekeurig gebouw om onder de 7 kaarten te komen.

Hier en daar zijn wat uitzonderingen en nuances, maar dit is het idee. Het vaste patroon zorgt dat elke speler zo snel mogelijk door bouwt, terwijl de rest ervoor zorgt dat spelers zo slim mogelijke zetten maken (en zich aan hun gekozen strategieën houden). Want, wat je strategie ook is, uiteindelijk zul je straten en dorpen moeten bouwen om te winnen.

(Tenzij je, op de een of andere manier, via de ontwikkelingskaarten alle 5 de punten binnensleept, plus 2 punten voor grootste riddermacht, plús 2 punten voor langste handelsroute. Dan heb je, plus de 2 punten waarmee je begint, in totaal 11. Maar dat lukt je nooit, want zonder dorpjes krijg je elke ronde nauwelijks grondstoffen binnen.)

## Les resultates!

Omdat deze post veel te lang werd, staan de resultaten in een tweede post: [Catan II][1]

 [1]: /blog/2017/2017-12-18-catan-ii/