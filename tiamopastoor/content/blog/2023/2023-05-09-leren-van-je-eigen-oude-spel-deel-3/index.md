---
title: 'Leren van je eigen oude spel: deel 3'
author: tiamopastoor
date: 2023-05-09T14:00:00+00:00
language: nl
thumb: /uploads/2020/08/starry_skylines_naamlogo_result.webp
categories:
  - Games

---
Een paar dagen geleden zei ik dat ik eindelijk mijn laatste ("kapotte") spel van vroeger had geüpdatet. Dat was een leugen :p

Ik was helemaal vergeten dat dit spel ook nog bestond: [Starry Skylines][1]. Waarschijnlijk omdat het als enige compleet buiten de rest van de website staat. Wederom weet ik niet _waarom_ ik dat 4 jaar geleden heb gedaan. Volgens mij was dit mijn _allereerste_ spel dat echt een eigen webpagina kreeg en gespeeld werd met dat digitale onderdeel, dus ik was alles nog aan het uitvogelen en was al blij dat het werkte.

Maar het gevolg is dus dat ik dit spel steeds compleet vergeet, want het is niet verbonden met andere delen van de website, en draait geheel op z'n eigen stukje (_zeer matige_) code.

{{% remark %}}
Alle andere onderdelen---plaatjes, regels, presentatie, gebruiksgemak, etcetera---zijn allemaal behoorlijk goed. Beter dan de paar spellen die ik erna heb gemaakt. Daarom vind ik het ook waardevol om een dag te besteden aan dit oude spel updaten, in plaats van het laten verstoffen tot het niet meer te redden is.
{{% /remark %}}

## Het probleem

Wat was het probleem?

  * Dit spel is dus inefficiënt en gedateerd, want het wordt steeds niet meegenomen met andere updates. (Het is niet zo vreselijk als ik het nu laat lijken, maar ik ben dan ook een perfectionist.)
  * Het spel probeert twee dingen tegelijkertijd te doen, op dezelfde pagina. Inmiddels weet ik dat je dit nooit wilt: splits het in twee losse onderdelen, die sterk staan op zichzelf.

_Wat bedoel je met "twee dingen tegelijkertijd doen"?_ Het oude systeem werkte als volgt.

  * Je kiest een paar instellingen. (Zoals of je wilt beginnen met een leeg papier, of de computer een bord laat genereren.)
  * Je start het spel.
  * Als je een bord liet genereren, ga je eerst langs die stap, _op dezelfde webpagina._
  * Zo niet, dan start het spel direct, _middenin dezelfde webpagina._ (Waardoor je regelmatig heen en weer moet scrollen. En het hele spel lang staat er dus van alles _omheen_ wat je niet nodig hebt.)

Het is natuurlijk véél simpeler om te zeggen ...

  * Wil je een bord genereren? Hier is een knop. (Je krijgt meteen zo'n bord om te gebruiken, maar tot die tijd neemt dit geen ruimte op van de pagina.)
  * Wil je het spel spelen? Hier is een knop. (Je gaat naar een aparte pagina die _alleen maar voor het spel is._)

Dus dat is (opnieuw) de eerste les. Meerdere dingen tegelijkertijd proberen te doen, betekent vrijwel altijd dat je meerdere dingen slecht doet. Probeer projecten altijd te hakken in zo klein mogelijke (onafhankelijke) stukjes die op zichzelf kunnen staan. Het is veel makkelijker voor jou als maker, maar het is ook sneller te begrijpen of gebruiken voor anderen.

Daarnaast zijn die speelborden (die de computer maakt) behoorlijk lelijk, want ik herinner nog specifiek dat ik pas op het laatste moment bedacht "_hé ik kan natuurlijk de computer speelborden laten maken!_". Ik wist niet wat ik deed én ik raffelde het af omdat ik een tentamenweek had die al mijn tijd opslurpte. 

(Hmm. Nu ik ermee bezig ben, kom ik erachter hoeveel specifieke, negatieve herinneringen ik heb aan dit project ...)

![](/uploads/2023/04/starry_skylines_old_boards-1.webp)

## De oplossing

De code voor zowel de borden als het spel is zo goed als helemaal herschreven. Het is nu opgedeeld in twee losse stukken:

  * Het bord maken
  * Het spel spelen (aparte pagina)

Ik heb vaak getwijfeld of ik het genereren van die borden niet _ook_ naar een aparte pagina moet laten gaan. Maar dat gaat waarschijnlijk nooit gebeuren, want ...

  * Borden genereren gebeurt alleen als de gebruiker de knop indrukt. Dus wat is dan het nut van een aparte pagina? Eentje die _leeg_ is totdat iemand op de enige knop drukt die er is?
  * Als gevolg daarvan, is dit proces dus heel consistent en voorspelbaar. Altijd één blok instellingen, altijd één knop, en er komt één PDF uit. Dus dat hele systeem gebeurt nu met exact hetzelfde stukje code _over de hele website_---waarom zou ik dat opbreken?
  * Je wilt dat gebruikers heel snel instellingen kunnen veranderen en opnieuw, en opnieuw, en opnieuw genereren. Als ze daarvoor steeds naar een andere pagina moeten, werkt het niet.
  * Dit is, in mijn ogen, een van de beste "verkooppraatjes" voor mijn website. Het feit dat je op een knop drukt en meteen een mooi, uitgewerkt, speelbaar plaatje (of PDF) krijgt voor het spel dat je bezoekt. Iedereen begrijpt dat, iedereen kan er direct mee spelen.

Bovendien kwam ik natuurlijk, tijdens het testen, allerlei teksten van het spel tegen. Veel daarvan kon ik nu korter of simpelweg _duidelijker_ opschrijven. Dit is best significant, want de uitleg van wat verschillende "gebouwen" betekenen is letterlijk het hele spel.

  * Elke ronde krijg je drie opties (die zo'n 1 tot 3 dingen hebben die je mag plaatsen). 
      * Bijvoorbeeld: _Theater_ en _Park._ 
  * Elke speler kiest een optie en plaatst alles dat erin zit op het bord. 
      * Bijvoorbeeld: je plaatst het Theater in een vakje dat jou veel punten scoort, en het Park ernaast.
  * Om te leren wat elke vakje doet, klik je erop! (Of je leest de lange lijst, maar dat doet sowieso niemand.) 
      * Het "leren" van het spel bestaat dus bijna 100% uit het klikken op nieuwe gebouwen die verschijnen om hun beschrijving te lezen.

Dit is het spel. Nu kan je het spelen. (Je hoeft alleen nog twee regeltjes te leren over de niet-gebouwen, namelijk _mensen_ en _cijfers_, en natuurlijk hoe je aan het einde punten telt.)

Als alles hangt op die teksten op de website, kon ik ze maar beter zo perfect mogelijk maken.

Dit was _extreem leerzaam_, eigenlijk :p Over hoe je korter en duidelijker kan schrijven, deels door om te denken. 

Bijvoorbeeld, bijna alle gebouwen waren geformuleerd op deze manier.

  * Een _Garden_ maakt elk aangrenzend gebouw 4 punten waard.

In eerste instantie lijkt hier niks mis mee. Maar dit is een hele passieve manier van formuleren, bijna afstandelijk. De belangrijkste informatie---die 4 punten---staat helemaal aan het _einde_! 

De betere manier is ...

  * _Garden_: voegt +4 punten toe aan elk aangrenzend gebouw.

Door alles zo om te schrijven, werden alle beschrijvingen zo'n ~25% korter, maar vooral véél duidelijker en directer.

Ook was ik inconsistent qua volgorde, als er meerdere onderdelen waren. Bijvoorbeeld,

  * _Mansion_: __moet verbonden zijn met een _Pool_ en een _Garden_. In dat geval is het vijf punten waard.
  * _Villa:_ 2 punten waard. Maar alleen als het is verbonden met een _Park._

De ene keer staan de punten vooraan, de andere keer achteraan. Het wordt nog gekker als er 3+ onderdelen zijn. (Wat ik bijna overal heb weggehaald, want dat is gewoon te ingewikkeld.)

Door dat consistent te maken, is het nu heel makkelijk om beschrijvingen te lezen. Want je weet precies de volgorde van de elementen. En vaak wil je alleen de punten weten, dus kan je daarna stoppen.

Het was een fijne oefening in kwaliteit van schrijven.

## De nieuwe borden / interface

Ten slotte een plaatje van de nieuwe versie.

{{% image-gallery %}}
 ![](/uploads/2023/04/starry_skylines_new_boards.webp) ![](/uploads/2023/04/starry_skylines_new_interface.webp) 
{{% /image-gallery %}} 

Ja, de borden zijn niet héél veel "mooier" geworden. Ik wist niet hoe en het was al middernacht geweest, en ik wilde niet langer dan één hele dag aan deze update werken. Maar de planeten rechtsonder (waarmee je speelt) zijn leuk, de resolutie is veel hoger, en het lettertype klopt nu.

De interface ziet er van buitenaf hetzelfde uit als vroeger. (Daarmee was weinig aan de hand.) Maar zoals je ziet, is het nu helemaal z'n eigen pagina en niets anders.

{{% remark %}}
Haha, ik zie net een opmerking in de code "one global variable, mwah, not bad". Een globale variabele is eentje die vanuit **overal** beschikbaar is. Dat klinkt misschien handig, maar dat is het juist niet. Het kost de computer meer tijd om die op te vragen, terwijl het gevaarlijk is, want alles kan dus met je data klooien. Je wilt juist géén globale variabelen. 

Maar wat ik niet door had ... was dat de oude code per ongeluk **alles** globaal maakte :p Dus ik dacht maar één globale variabele te hebben, en was tevreden met mezelf. Het bleken er meer dan honderd. Nog een reden waarom ik de code echt opnieuw wilde doen.
{{% /remark %}}

## Conclusie

De nieuwe versie is 84 kB om te downloaden (in je browser). De oude versie was 78 kB. _Waarom is het niet kleiner geworden?_ Omdat het als twee losse onderdelen is geprogrammeerd, had elk onderdeel z'n eigen code eromheen nodig (om het op te starten, op de pagina te plaatsen, de instellingen te lezen). Maar ja, zo'n minuscuul verschil is natuurlijk niet belangrijk :p

Het spel is nu in ieder geval modern, sneller, makkelijker bij te houden en makkelijker op te starten voor (nieuwe) spelers.

Of het een goed spel is? Ik weet het nog steeds niet. Net zoals ik het 4 jaar geleden niet wist.

Elk (oefen)potje dat ik speelde, werkte en was leuk! Mensen waren enthousiast over het spel. Het is _extreem_ snel uit te leggen en te leren, terwijl er heel veel diepgang is en je echt flink moet nadenken.

Tegelijkertijd heb ik het spel zelf een beetje de das omgedaan. Ik vond het niet genoeg om, tja, 3 of 5 gebouwen aan te bieden (per uitbreiding). Nee, het spel heeft 8 "planeten" (zoals je ziet in het logo) die allemaal zo'n 20 gebouwen toevoegen volgens hun eigen thema.

Zo heb je de voedselplaneet (_Yumpiter_, diegene die eruit ziet als een kok) die natuurlijk dingen toevoegt zoals: Restaurant, Graan, Boerderij, Supermarkt.

Je hebt de eerste planeet (_Learnth_, de aarde natuurlijk) die de basale dingen toevoegt: Huis, Weg, Park, School.

Maar als zo'n planeet _twintig gebouwen toevoegt_, wordt het een beetje overweldigend. Je moet het spel minstens een paar keer spelen voordat je alles kent dat kan verschijnen, en dus strategie kan toepassen (en voelt alsof je controle hebt). En als je dus alleen met Yumpiter speelt? Tja, dan mis je variatie, dan mis je allerlei gebouwen die je zou verwachten in zo'n spel.

Dus het is zowel een _heel goed spel_ als een _haast onspeelbaar spel._ Zowel heel simpel als overweldigend. Voor sommige speelgroepen geniaal, voor anderen raar en nietszeggend. Ik zei toch dat dit een rare snuiter was tussen al mijn projecten? :p

Tijdens het updaten keek ik nog of ik wat kan verbeteren. Misschien de lijst wat bijschaven? Misschien een slimme regel die deze tweestrijd zou wegnemen? Misschien een andere presentatie? Maar ik vond niks. Het spel werkt---en het werkt niet. 

Nu is het tenminste achter de schermen solide en verbeterd _waar mogelijk_.

Ik beloof dat dit écht het laatste oude spel is dat ik compleet herschrijf. In ieder geval de komende paar jaar, want ik ben hélemaal klaar met bestanden maken, verplaatsen, hernoemen, en oude code proberen te ontcijferen :p

{{% remark %}}
Inmiddels heb ik uitgevogeld hoe je de computer het materiaal voor je spel kan laten genereren, zoals een PDF met kaarten om te printen en knippen. Dat wil ik in de toekomst nog wél toevoegen aan dit spel. Want nu moet het gespeeld met de website op één smartphone, terwijl veel spelers nog liever traditioneel en fysiek spelen. Dus ergens schrijf ik vast een artikel over hoe je nu speelkaarten kan genereren om dit spel mee te spelen.
{{% /remark %}}

 [1]: https://pandaqi.com/starry-skylines