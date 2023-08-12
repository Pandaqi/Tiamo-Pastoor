---
title: '[Ontwikkelingsproces] Naïvigatie'
author: tiamopastoor
date: 2019-09-07T13:23:46+00:00

---
Deze pagina vertelt over het ontwikkelingsproces van mijn zelfgemaakt bordspel **Naïvigatie**.

## Wat heb ik geleerd?

Ten eerste heb ik het een en ander geleerd over het _zelf uitprinten van kaarten_.

  * Houdt rekening met de "margins" van jouw printer. De meeste printers kunnen ongeveer 1cm van de rand van het papier _geen_ inkt drukken. Als je kaarten alsnog in dat randgebied zet, wordt dus maar een deel geprint en krijg je afgesneden kaarten. Ook hebben sommige printers wisselende randen (links is groter dan rechts, bijvoorbeeld). Dat is héél vervelend :p
  * De _achterzijde_ van kaarten moet _gespiegeld_! Een dubbelzijdige PDF heeft afwisselend een pagina met _voorkanten_ van kaarten en eentje met _achterkanten_ van kaarten. Je denkt misschien: die achterkanten kunnen gewoon op exact dezelfde volgorde als de voorkanten. Dat is niet zo. Je moet ze verticaal spiegelen ("om de y-as") als je de juiste achterzijde bij de juiste voorzijde wilt.
  * Het is handig om kaarten extra rand/uitloop te geven, om onnauwkeurigheden bij het printen of knippen onzichtbaar te maken. (Deze uitloop mag best flink zijn.)
  * De kleur die je op je _scherm_ ziet, is niet perse de kleur die uit de _printer_ komt. Er zijn verschillende "color spaces" (of "color profiles"), en als jouw ontwerpen en jouw printer niet overeenkomen, heb je een probleem. In mijn geval had de eerste uitdraai van mijn spelregels véél donkerdere kleuren, waardoor sommige tekst haast onleesbaar werd.

Ten tweede is het spel een aantal drastische veranderingen ondergaan, elke keer als het gevolg van een testpotje. Daarom zal ik mijn bevindingen aan de hand van elk potje beschrijven.

## Oefenpotje 1

Het eerste oefenpotje was met **3 spelers**. Het duurde ongeveer **45 minuten**, inclusief uitleg. De gebruikte spelregels waren **versie 1.04**

Wat was mijn conclusie? Het werkt best goed, maar is té makkelijk en saai. Bovendien zitten hier en daar gaten in de regels (waardoor we ter plekke regels moesten bedenken voor situaties die best wel vaak voorkwamen).

In de spelregels stond dat iedereen één kaart uit zijn hand mocht weten (en vertellen). Bovendien mocht de startspeler ál zijn kaarten weten. Ik dacht dat dit genoeg onduidelijkheid zou scheppen, maar niets bleek minder waar. Meestal kon men een perfecte route uitstippelen door de kaarten te gebruiken die al bekend waren. Daardoor was het eigenlijk geen spel meer.

Dus ik besloot de regels als volgt te veranderen:

  * Men krijgt nog maar 3 kaarten (ipv 4).
  * De startspeler weet al zijn kaarten, verder weet _niemand_ zijn kaarten aan het begin van de ronde.
  * Als men de aanwijzingen voor de auto neerlegt, weten vrijwel alle spelers dus niks over elkaars kaarten. Dit is geen héél groot probleem, aangezien men van tevoren een plan mag bedenken, en je soms kunt gokken/afleiden wat anderen hebben neergelegd.
  * Om de spelers toch een beetje te helpen zijn er een paar acties die men mag kiezen. Deze acties zijn eenmalig: als iemand actie X al heeft gebruikt, mag die deze ronde niet meer worden gebruikt.
  * _Welke acties zijn dit?_ Dingen zoals "bekijk alle aanwijzingen die tot nog toe zijn opgelegd" of "bekijk andermans hand". Omdat men niet over het spel mag communiceren tijdens deze ronde, helpt elke actie alleen (eventueel) de persoon die het uitvoert.

Op deze manier kan men het spel strategisch en slim spelen, maar is het niet té makkelijk of voorspelbaar. Men kan informatie vergaren en goede keuzes maken (zoals "welke actie kies ik" en "welke kaart speel ik waar"), maar nooit perfect spelen.

Ten tweede was het speelbord ("grid") erg klein. Ik dacht eerst dat het grid moest groeien met het aantal spelers (hoe meer spelers, hoe groter de route). Dat blijkt niet helemaal zo te zijn. Een grid van grootte 6&#215;6 is prima voor 3 spelers, en naar mijn beste inschatting ook voor elk ander speleraantal.

Ten derde begint het bord met te weinig tegels rond de starttegel. Daardoor kan de auto nergens heen en zijn de eerste rondes erg gelimiteerd. Ook is het onmogelijk om veel navigatiekaarten te volbrengen. Ik denk dat ik dit oplos door met meer starttegels te beginnen óf elke beurt meer tegels te laten trekken.

Hieraan gerelateerd: **het navigatieprobleem**! Soms is het _onmogelijk_ om een navigatiekaart te volbrengen. Als de kaart zegt "tweede afslag rechts", maar je hebt maar één afslag op de route voor je, wat dan? Er zijn een paar mogelijkheden:

  * Deze kaart faal je sowieso.
  * Je moet omdraaien en naar een plek rijden waar je nog wél een tweede afslag kunt nemen.
  * Je pakt een nieuwe navigatiekaart.
  * Deze kaart is sowieso succesvol.

Ik weet niet welke goed is; dat zal uit volgende testen moeten blijken. Ik denk dat dit nog het grootste probleem is, omdat er ook andere problemen mee verbonden zijn. (Stel er bestaat wel een "tweede afslag", maar na de afslag ligt geen tegel meer. De regels zeggen: als ergens geen tegel ligt, volg je de huidige aanwijzing niet op. Dus die tweede afslag kun je nooit nemen ... maar je kunt wel _proberen_ hem te nemen. Telt dat ook? Zie je, dat geeft allemaal verwarring. En dat wil niemand. Dus ik ben op zoek naar de meest simpele en elegante oplossing.)

_Opmerking:_ het is belangrijk om de aanwijzingskaarten op volgorde te leggen. Ik was vergeten om daadwerkelijk een manier te geven om dat te doen :p Waarschijnlijk teken ik op de voorkant van de spelregels een paar nummers aan de zijkant. Als je het spel speelt, leg je de kaarten onder die nummers om de volgorde aan te geven.

## Oefenpotje 2

Dit potje was met **3 spelers** en duurde ongeveer **20 minuten**. De gebruikte spelregels waren **versie 1.12**.

Conclusie? Het spel werkt nu een stuk beter en gestroomlijnder! Beurten gaan sneller, er hoeft minder geregeld te worden, en de uitleg is sneller/makkelijker. (Om een idee te geven: het aantal fases per ronde is van 7 naar 5 gegaan. Bovendien zijn enkele van die fases drastisch ingekort: de fase "kaarten pakken" is letterlijk één zin.)

Het is nog steeds iets té makkelijk. Het gebeurde nu wel vaker dat we in spanning moesten afwachten wat mensen hadden gespeeld, of dat onze auto besloot een hele beurt lang alleen maar op dezelfde plek rondjes te draaien :p Dat was heel leuk! Dat is waar het spel voor bedoeld is! Jammer genoeg zijn de overgebleven 25%-50% van de zetten nog steeds te saai en voorspelbaar.

Ten eerste wil ik een oude regel terugbrengen: als de navigatiekaart eenmaal is opengedraaid, mag men _niks_ meer zeggen over het spel (of hun kaarten). Als je die communicatie wel toelaat, zoals in dit potje, kun je van tevoren al snel een perfect plan bedenken.

Ten tweede ga ik de fase **Tegels Leggen** veranderen. Ik dacht dat ik geniaal was. Door spelers te verplichten één tegel aan het begin en één tegel aan het eind te leggen, dacht ik dat het moeilijker werd om de wegen uiteindelijk op elkaar aan te sluiten. Dat is niet zo: het is juist makkelijker. In plaats daarvan trekt men vanaf nu _3 tegels_ die men allemaal _aan het begin_ moet leggen.

Bovendien moeten de tegels één afstand hebben van de oude tegels. Dit voorkomt dat men "toevallig" een paar rechte wegen trekt en in één beurt al bijna op het eindpunt is belandt.

Er zijn twee mechanismes waarover ik twijfel: de _handlimiet_ en de _speciale acties_.

Ik heb een handlimiet van 3 kaarten getest en eentje van 2 kaarten. Met 2 kaarten is de kans veel groter dat je niet kunt opleggen wat je wil. Dat is leuk en laat het spel goed werken! Maar soms heb je daardoor géén keuze, waardoor het voor sommige spelers geen spel meer is. Hmm. Voor nu doe ik de handlimiet naar **2 kaarten**, met uitzondering van de startspeler die evenveel kaarten heeft als spelers.

Met 3 spelers is er maar één speciale actie beschikbaar: iemands kaarten bekijken en één kaart aantikken als "suggestie". Deze is best wel krachtig. Misschien is het beter als ik deze opbreek in twee acties: "iemands kaarten bekijken" en "iemands kaarten bekijken en één suggestie aantikken". Met 3 spelers mag je alleen de eerste doen. De andere variant mag alleen als je met veel spelers bent (6 of 8, ofzo).

De laatste kwestie is het **geen-tegel-probleem**. Als de auto een richting op wil waar geen tegel ligt, wordt de aanwijzing genegeerd en gaat het spel gewoon verder. Dat is eigenlijk wat flauwtjes. Ik wil spelers straffen als ze de auto naar een lege plek sturen. (Want het is 100% hun fout als dat gebeurt.) Er zijn enkele opties:

1) Als de auto naar een lege tegel wordt gestuurd, beweegt de auto wél naar die plek. De auto kan deze ronde niet meer bewegen. Alle aanwijzingen die nog in de rij liggen worden weggelegd. Volgende ronde moet men dus een tegel onder de auto plaatsen; dan kan hij pas weer doorrijden.

2) Als de auto naar een lege tegel wordt gestuurd, wordt die specifieke aanwijzing niet opgevolgd. De kaart die deze beweging veroorzaakte wordt direct op de tijdstapel óf schadestapel gelegd. (Spelers mogen zelf kiezen?)

Uiteindelijk heb ik voor een combinatie gekozen: de auto gaat van de tegels af en beweegt niet meer verder, maar spelers moeten als straf wel één kaart op de tijd- of schadestapel leggen. (Ik twijfelde of ik de auto buiten het grid moest laten, maar koos uiteindelijk om het spel simpel en onder controle te houden :p Als de auto buiten het grid zou rijden, wordt die aanwijzing gewoon niet opgevolgd en is er verder niks aan de hand.)

Zo, met deze veranderingen kan ik weer even vooruit denk ik. Er zijn nog wel andere plekken waar ik vraagtekens heb, maar die worden misschien al automatisch opgelost met bovenstaande aanpassingen. Op naar het volgende testpotje!

_Opmerking:_ het is nu soms een beetje lastig om de auto fysiek te verplaatsen. Het is immers maar een velletje papier, bovenop tegels die óók velletjes papier zijn. Ik ga kijken of ik de auto 3D kan maken, zoals van die dobbelstenen die je kunt uitknippen en dan in elkaar plakken. Dat lijkt me wel gaaf.

## Oefenpotje 3

Dit potje was met **3 spelers** en duurde ongeveer **30 minuten**. (Dit is inclusief uitleg, want ik speelde met nieuwe spelers). De gebruikte spelregels waren **versie 1.20**. We hadden voor het eerst niet gewonnen---nét niet. (Het scheelde één tegel.) Dat zie ik als een overwinning! Het spel lijkt steeds meer in balans te zijn en steeds meer strategie te vragen. Bovendien had men plezier en was men actief bij het spel betrokken, wat toch het allerbelangrijkste is.

Hieronder staat alles wat mij is opgevallen.

De startspeler heeft erg weinig kaarten bij 3 spelers. Misschien moet ik zeggen dat, als de startspeler minder dan 4 kaarten heeft (of iets dergelijks), hij bij mag trekken tot 4.

Daarover gesproken: de 2 kaarten per speler zijn ook nét te weinig als je met 3 spelers speelt. (Ik verwacht dat het prima is met meer spelers, omdat er dan in het algemeen meer kaarten zijn, dus meer variatie en mogelijkheden.) Misschien dat ik in dit geval---bij uitzondering---3 kaarten per speler hanteer. Hmm, twijfelpuntje.

Men rijdt te makkelijk van de tegels af, want de straf is klein. Het idee is dan "met één aanwijzing zijn we op de rand van ons huidige veld ... dus ja, dan maar van de route afrijden met de andere aanwijzingen" Dat is niet de leukste/meest interessante manier van spelen. Daarom maak ik de straf iets groter: als je van de tegels afrijdt moet je één kaart op de **tijdstapel** leggen én één kaart op de **schadestapel**.

Hoewel, de _keuze_ was wel interessant. Waar kunnen we het beste een kaart neerleggen? Waar verwachten we nog de meeste kaarten te krijgen? Ik kan de regel ook veranderen naar: "2 kaarten erbij, zelf kiezen hoe je ze verdeeld over de twee stapels"

Na lang denkwerk heb ik de regel veranderd naar het volgende: "als je van de tegels afgaat, worden _alle overgebleven aanwijzingen_ meteen strafkaarten" Dus, hoe eerder in de ronde je van de tegels afgaat, hoe groter je straf. Ook bewaart deze regel de keuze, aangezien spelers zelf kiezen op welke stapel ze de strafkaarten leggen.

Men bouwt iets té makkelijk naar de eindtegel toe. Daarom ga ik een oude regel opnieuw invoeren: als de _start-_ en _eindtegel_ eenmaal verbonden zijn, mag je nog maar één tegel trekken per ronde (ipv 3). Ik wil zelfs nog verder gaan en zeggen: als ze verbonden zijn mag je **géén tegels meer trekken**!

In de regels stond dat een nieuwe tegel horizontaal, verticaal of diagonaal moet grenzen aan een oude tegel. In ons potje hebben we de "diagonaal"-mogelijkheid weggelaten (dit was per ongeluk). Dit werkte ook prima. Met regelmaat kon men iets niet plaatsen waar men wilde, waardoor men creatief moest zijn. Het probleem is alleen: vaak werd zo'n tegel op een plek neergegooid die er toch niet toedeed. Als gevolg kon de auto nauwelijks ergens heen. Deze regel bereikt niks productiefs, dus ik laat de originele spelregels zoals ze waren op dit vlak.

De navigatie wordt grotendeels genegeerd. Dat komt omdat hij regelmatig gewoon niet uitvoerbaar is, en als de auto van de weg is kan het al helemaal niet. Daarom wil ik de definitie een beetje uitbreiden. Elke navigatieopdracht kan op twee manieren worden volbracht: _via de wegen_ en _vanaf het huidige punt_.

  * "Vanaf het huidige punt": je ziet de opdracht vanuit de huidige positie van de auto, of hij nou op de weg staat of niet. "Tweede afslag rechts" betekent in dit geval: twee tegels vooruit en dan afslaan, ongeacht of daar een weg loopt.
  * "Via de wegen": je ziet de opdracht met betrekking tot de wegen op de tegels. "Tweede afslag rechts" betekent dan: de route volgen totdat de tweede afslag verschijnt, en die neem je dan.

Dit werkt denk ik goed ... maar het kan ook té ingewikkeld zijn. Ik moet kijken of ik dit op een heldere, beknopte manier kan uitleggen in de spelregels.

Alle andere regels (en doorgevoerde veranderingen) werkten precies zoals ik wilde! Het spel wordt steeds beter en stabieler. Ik denk dat de volgende versie "zo goed als af" is voor 3 spelers. Het enige dat rest is het spel testen met andere spelersaantallen.

Zo, op naar het volgende potje!

## Intermezzo

Er gingen enkele weken voorbij zonder oefenpotjes, omdat ik bezig was met een hele grote update aan het spel. (En mijn speelgroep was druk.)

Ik heb in de tussentijd de spelregels mooi en netjes gemaakt. Ze zien er nu grotendeels uit als professionele spelregels (met een logo, opmaak, plaatjes, voorbeelden, goede structuur, etc.).

_Wat zijn andere grote veranderingen?_ Ik heb veel uitzonderingen en extra regels weggehaald. Toen ik de regels een paar keer doorlas en probeerde uit te leggen aan mensen (of aan mezelf, in mijn hoofd), kwam ik erachter dat het nog simpeler en eleganter kon. (De gouden regel is: "binnen 10 minuten moet men aan het spelen zijn")

Bijvoorbeeld: eerst betekende een "navigatiekaart" iets anders als de auto op de weg stond dan wanneer de auto NIET op de weg stond. Dat was veel te onhandig en ingewikkeld. Iedereen vergiste zich in wat de opdracht nou precies betekende, en het klopte thematisch niet.

Ik heb het veranderd naar: "als de auto NIET op de weg staat, draai je geen navigatiekaart open voor deze ronde". Dit maakte de spelregels ineens een halve pagina korter, terwijl het spel er niet minder op wordt. Nu kan het heel tactisch zijn om _expres_ van de weg af te rijden, omdat je dan niet meer naar de navigatie hoeft te luisteren. Het probleem? Je moet op tijd weer op de weg komen, anders loop je te veel schade op en verlies je het spel. Zo'n soort balans werkt vrijwel altijd goed voor bordspellen.

Het was pas mijn tweede poging tot zulke professionele spelregels, dus het is niet perfect. De regels zijn ietwat kaal en saai, en het logo voor het spel is niet ideaal, maar ik merk dat ik nog te weinig ervaring heb om dat snel op te lossen. Als je al mijn spellen bekijkt, echter, zie je dat ik met gigantische sprongen vooruit ga, dus ik verwacht in de toekomst nog betere spelregels te maken!

## Uitbreidingen!

Bij het ontwerpen van het logo kreeg ik ineens een paar leuke ideeën. De titel en het concept van het spel zijn eigenlijk heel algemeen, dus waarom voeg ik niet andere "transportatiemiddelen" toe? Ik kan een uitbreiding maken met _boten_, eentje met _vliegtuigen_, eentje met _treinen_, en nog meer!

Ik moest van mezelf natuurlijk meteen beginnen met deze uitbreidingen uitwerken.

Zodoende ontdekte ik iets belangrijks. Ik hield me krampachtig vast aan een paar onderdelen van dit spel, terwijl dat helemaal niet hoefde.

**Voorbeeld 1:** vanaf de allereerste versie had dit spel het volgende mechanisme: "iedereen legt om de beurt een kaart op, maar de startspeler gaat twee keer (als eerste en als laatste)". Dit had ik bedacht om de spelers te helpen. De startspeler had namelijk de meeste informatie over de kaarten, en zo kon hij meer kaarten in de rij leggen.

Maar toen veranderde het spel. En nu is die regel eigenlijk een beetje verwarrend. Elke keer als ik het spel uitleg vergeten mensen dat de startspeler een tweede keer gaat, want in alle andere spellen ter wereld heeft iedereen gewoon evenveel beurten per ronde.

**De oplossing?** Simpel. Iedereen legt gewoon één kaart op in z'n beurt. (Eventueel, als je met weinig spelers bent, ga je twee keer rond de tafel zodat iedereen twee kaarten oplegt?)

**Voorbeeld 2:** vanaf de allereerste versie gold de regel "in fases 4.2 t/m 4.4 mag je NIET communiceren over het spel". Dit is super onhandig, want spelers moeten dus steeds bijhouden in welke fase ze zitten en of ze dan wel/niet mogen communiceren. (Ik weet niet waarom ik dacht dat dit een goede regel was.)

**De oplossing?** Ik maak de regel algemeen: "je mag tijdens de ronde NIET communiceren over het spel/de kaarten in je hand/etc." Vervolgens maak ik duidelijk dat je dus WEL mag communiceren _tussen rondes:_ aan het einde van de ronde, voordat de volgende begint.

**Verandert dit het spel niet enorm?** Ja, het is best een grote ingreep. Nu moet de startspeler alle keuzes maken, zoals waar hij routetegels neerlegt en welke kaarten hij op de tijdstapel gooit. Het maakt het spel ietsje moeilijker, maar daarvoor krijg je zwaar versimpelde spelregels terug.

**Voorbeeld 3:** de regel is nu dat de _startspeler_ elke ronde een keuze moet maken: zijn huidige kaarten houden, of nieuwe trekken. Als hij zijn kaarten houdt, omdat het goede kaarten zijn, is hij echter verplicht om ze op een vaste plek in de rij te leggen.

**Is dit een probleem?** Nou, toen dacht ik ineens: waarom laten we niet _elke speler_ deze keuze maken? Zo heeft iedereen iets te doen én kan iedereen een beetje invloed uitoefenen op de kaarten in zijn hand.

Als ik dit niet doe, hebben spelers geen enkele controle over welke kaarten ze in de hand hebben. Dat maakt het spel---in mijn ogen---te veel gebaseerd op geluk en toeval. En dat haat ik :p

**Opmerking:** in de huidige spelregels moet iedereen één kaart aan de startspeler geven aan het einde van de ronde, en de rest van de kaarten weggooien. Met deze nieuwe regel hoeft dat niet meer! Ik kan dit hele stuk uit de spelregels halen. Iedereen houdt gewoon zijn kaarten en trekt zonodig bij in fase 3. Simpeler is beter!

Dit zijn ingrijpende veranderingen, maar de spelregels zijn een stuk korter en simpeler geworden, en de essentie van het spel is niet veranderd. Ik sla dus een paar versies over en test vanaf nu de nieuwste spelregels.

## Oefenpotje 4a

Dit potje was met **2 spelers** en duurde **30 minuten**. De gebruikte spelregels waren **versie 1.7**. (We wilden met drie spelers een spel doen, maar de derde speler had ineens geen zin meer. Dat was het uitgelezen moment om de tweespelervariant van dit spel te testen.)

Het spel werkte helemaal prima! We hadden uiteindelijk nét verloren. (We hadden kunnen winnen als mijn medespeler begreep wat ik aan het doen was. Maar dat was niet zo, en dat maakte het einde van het spel alleen maar spannender :p) Onze teller stond op 20 tijdkaarten en 3 schadekaarten, wat aangeeft dat de limiet van 5 schadekaarten ook lijkt te kloppen.

De spelregels waren heel snel en makkelijk uit te leggen. Er was geen enkele onduidelijkheid. (Bij de vorige versies waren er altijd nog vragen na de uitleg of tijdens de eerste paar rondes van het spel.)

Wel was ik één regel vergeten bij de uitleg: als de start- en eindtegel verbonden zijn, versnelt de klok en leg je elke rond nóg een kaart op de tijdstapel. Deze regel is eigenlijk best goed en brengt het spel mooi in balans, hij is alleen erg makkelijk te vergeten. Ik weet dus niet wat ik daarmee moet.

Verder kan ik geen enkele fouten of verbeterpunten meer vinden aan het basisspel. (Natuurlijk, het kan altijd beter, leuker en gekker. Maar de basis is goed.)

_Opmerking:_ achteraf gezien was er nog een regel die ik niet had uitgelegd. Als de auto in dezelfde beurt over _verschillende onveilige ondergronden_ rijdt, krijg je schade voor elk van hen. Dit had geen invloed op dit oefenpotje, omdat we slechts over dezelfde onveilige ondergrond reden. Desondanks twijfel ik of deze regel wel iets toevoegt aan het spel.

## Oefenpotje 4b

Dit potje was met **2 spelers** (dezelfde spelers natuurlijk) en duurde **45 minuten**. Deze keer testten we **variant 2**! (Dat is de competitieve variant waarbij je tegen elkaar naar hetzelfde eindpunt racet.)

Deze variant is duidelijk minder getest en heeft grote veranderingen nodig.

Ten eerste: het grid is nu 6&#215;6 ... maar dan heb je geen "midden" voor de eindtegel. Dat was heel dom van mij :p Dus het grid moet 7&#215;6 worden.

Ten tweede: omdat beide spelers ver uit elkaar beginnen, is er eigenlijk nauwelijks interactie. Ik overweeg om de spelers naast elkaar te laten beginnen.

Ten derde: er zijn nu **vijf** acties die een speler kan doen in z'n beurt. Dat wil ik verminderen. Gelukkig heb ik de perfecte kandidaat gevonden: actiekaarten. Nu is "speel een actiekaart" een aparte actie, maar dat is raar, want sommige actiekaarten hebben invloed op de aanwijzingen (die je gedekt op een stapel legt.)

Bijvoorbeeld: de kaart "spookrijder" zegt dat alle aanwijzingen die hierna gespeeld worden, omgekeerd worden. (Dus "vooruit" wordt "achteruit", "links" wordt "rechts", etc.)

Dus in de nieuwe regels leg je actiekaarten ook gewoon gedekt in de aanwijzingenstapel. Zo, da's weer een actie minder.

Als gevolg van deze verandering, moet ik de betekenis van sommige actiekaarten aanpassen. Sowieso vond ik de actiekaarten erg "zwakjes" in deze variant.

Ten vierde: de auto van mijn tegenstander ging op een gegeven moment van de tegels af ... en bleef vier beurten lang van de tegels af. _Waarom_? Omdat "nieuwe tegels neerleggen" een actie is, en die werd maar niet gedaan. Dat kan natuurlijk niet. Vanaf nu is de regel: "als je auto van de tegels af is, moet je als eerstvolgende actie een nieuwe tegel onder de auto leggen"

Mijn laatste opmerking is ook de belangrijkste: **navigatiekaarten zijn zinloos in deze versie**. De huidige regels zeggen het volgende:

Als je een navigatiekaart volbrengt, mag je 3 kaarten stelen van het andere team.  
Als je de navigatiekaart NIET volbrengt, gebeurt er niets.

Als gevolg hiervan werden navigatiekaarten het hele spel compleet genegeerd. Dat kan natuurlijk niet in een spel dat "naïvigatie" heet.

_Hoe lossen we dit op_? We maken de regels meer zoals het basisspel. (Dat lijkt me altijd een goed idee als je een variant opstelt.)

Elke keer als je de actie "bewegen" kiest, wordt één kaart op de tijdstapel erbij gelegd (zoals in het basisspel). Ook wordt gekeken naar de bovenste navigatiekaart (zoals in het basisspel).

  * Als je deze (met je gekozen bewegingen) goed opvolgt, wordt je beloond! (Steel 3 kaarten van het andere team.)
  * Als je deze NIET goed opvolgt, krijg je een grote straf! (Leg twee extra kaarten op je tijdstapel.)

Net zoals in het basisspel, verliest een team het spel als deze 20 kaarten (of meer) in de tijdstapel heeft zitten.

Met deze regels wordt het spel makkelijker te leren (vanwege de consistentie richting het basisspel), maar tegelijkertijd moeilijker uit te voeren, omdat je heel goed op je navigatie moet letten.

## Oefenpotje 5

Dit potje was met **4 spelers** en duurde **60+ minuten**. De gebruikte spelregels waren **versie** **1.7** (met wat aanpassingen).

Ik speelde dit spel met een nieuwe groep die veel verstand heeft van bordspellen. De langere speelduur komt dan ook van het feit dat er veel discussies waren en momenten waarop spelregels werden besproken/aangescherpt. (Daarnaast was één van de spelers ondertussen avondeten aan het voorbereiden, dus die liep soms even weg naar de oven.)

Ten eerste: in de huidige spelregels staat "als je 4 of minder spelers hebt, ga je twee keer de tafel rond (iedereen doet dus twee beurten)". Voor 2 en 3 spelers werkt dit supergoed. Voor 4 spelers is het onhandig, want 8 kaarten opleggen brengt het spel een beetje uit balans. Dus ik koos om met 4 spelers gewoon één keer rond de tafel te gaan.

De nieuwe regel "als je **3 of minder spelers** hebt, ga je twee keer de tafel rond.

Ten tweede: in de huidige spelregels staat dat je de de speciale actie "bekijk alle tot nog toe gespeelde aanwijzingen" mag spelen met 4+ spelers. Dit maakt het spel, echter, veel te makkelijk. Als je maar 4 kaarten oplegt, heb je deze hulp echt niet nodig.

De nieuwe regel: je mag deze speciale actie pas vanaf **5+** spelers gebruiken.

**Wat is het alternatief?** Het alternatief is dat we wél 8 kaarten opleggen bij 4 spelers, en dat je dus die extra hulp krijgt. Dit maakt het spel iets moeilijker, maar je kunt wel meer bereiken in je beurt, wat de kans vergroot op navigatieopdrachten halen. _Ik twijfel hierover_.

Ten derde: de actie "bekijk andermans kaarten" is vrij zinloos in de bewegingsfase. _Waarom_? Als jij aan de beurt bent, zijn er waarschijnlijk al enkele kaarten opgelegd, en kun je nauwelijks meer zinnige informatie krijgen uit die 1 of 2 kaarten die nog niet zijn opgelegd.

De nieuwe regel: je mag in je beurt een (nog niet gebruikte) speciale actie kiezen, ongeacht in welke fase je zit.

Hierdoor kon men in de fase daarvoor, waarbij je kiest welke kaarten je wilt houden, veel strategischer spelen en nuttige informatie verkrijgen.

Deze regel werkte heel goed. _Waarom?_ Hij werd voorgesteld door een medespeler die zei: "ik zou nu eigenlijk graag X willen doen, want dat helpt mij bij dat en dat." Het is altijd goed om een spel te modelleren naar wat spelers _zouden willen_ _doen_. Dat maakt een spel plezierig: je wilt iets bereiken en voilà---het spel geeft je precies de actie die je nodig hebt!

Ten vierde: de navigatiekaarten zijn nog wat onduidelijk. Bij mijn vorige testpotjes werden de kaarten allemaal direct goed begrepen, maar deze spelers stelden een stuk kritischere vragen :p (En ze hadden gewoon gelijk.) Ik moet een makkelijke en goed onthoudbare regel bedenken om alle navigatiekaarten duidelijk te krijgen.

De nieuwe regel (waarschijnlijk): "een navigatiekaart telt altijd vanuit het startpunt van de auto"

Stel je hebt de navigatieopdracht "rechts". Dan moet de auto _ergens in deze beurt_ op een tegel terechtkomen die rechts van de auto ligt.

Stel je hebt de navigatieopdracht "eerste afslag links". Dan volg je de weg waarop de auto staat, totdat je bij de eerste afslag links aankomt. Die moet je nemen om de opdracht te volbrengen.

Het _enige probleem_ hiermee, is dat de opdrachten soms nóg moeilijker worden om te volbrengen. Als ik zeg "je neemt gewoon de eerste afslag links die je tegenkomt", kun je nog draaien, achteruitrijden, etc.

Het lijkt hiermee misschien alsof het spel voor geen meter werkt, maar dat is niet zo. Het ging prima en iedereen had plezier, we willen het spel alleen nóg beter maken!

Daarom zijn er ook nog enkele details om te verbeteren:

  * De actiekaart "glazen bol" is zinloos in de huidige versie. Die wordt veranderd naar: "leg deze kaart open neer; alle aanwijzingen vóór deze kaart worden open neergelegd."
  * Nu staat dat spelers zelf kiezen welke kaarten ze als "strafkaarten" wegdoen. Dit is vaak een betekenisloze keuze die niks anders doet dan het spel langer maken. Daarom zeg ik gewoon: "je legt kaarten van links naar rechts weg naar de tijd- of schadestapel".
  * Nu staat dat je alleen _tussen rondes in_ over het spel mag communiceren. Dat is nog steeds waar, maar het moet eigenlijk nog specifieker, want je mag nog steeds niks zeggen over de kaarten in je hand. (En dat is niet duidelijk uit de huidige spelregels.)
  * De regel "je krijgt 1 schade per andere ondergrond" is alleen maar verwarrend voor beginners en vaak niet eens van toepassing. Daarom gooi ik deze regel uit het basisspel en zet het neer als een "gevorderde variant".
  * Het spel is nu goed gebalanceerd (qua hoe vaak of makkelijk je wint/verliest), en er kunnen best wel gekke dingen gebeuren in een potje, maar in mijn ogen kan er nog meer verschil tussen potjes zitten. Ik wil nog nét een tandje gekkigheid erbij. Dit wordt deels opgelost met mijn andere varianten (waarbij je bijvoorbeeld met meerdere auto's racet en kunt botsen), maar niet helemaal.

Ik ga deze veranderingen allemaal doorvoeren en dan hoop ik binnenkort met **versie 1.8** te spelen. (Deze versie staat inmiddels op Dropbox.)

## Intermezzo 2: alweer uitbreidingen

Eerder op deze pagina spreek ik over de mogelijkheid van uitbreidingen die hetzelfde kernmechanisme gebruiken, maar dan met een ander voertuig (en ander spel eromheen).

Ik vergat om een ander soort uitbreiding óók te noemen: uitbreidingen die specifiek bedoeld zijn voor dit basisspel (met de auto). Daarvoor had ik namelijk ook ideeën. Geheel toevallig kwam mijn vriend naar mij toe met _bijna precies dezelfde ideeën_. ("Hé, kan je niet X en Y doen?" "... dat is exact wat ik in mijn notities had opgeschreven")

Dus het is óf heel voorspelbaar, of het zijn gewoon de beste ideeën voor dit spel :p

Deze uitbreidingen zijn bedoeld om twee "problemen" op te lossen:

  * Het huidige spel voelt wat themaloos. Natuurlijk, het thema is "navigatie", maar als je het spel speelt heb je niet het idee dat je daadwerkelijk ergens naartoe gaat. Om dat te verhelpen, wilde ik routekaarten maken waarop locaties stonden, zodat het hele spel voelt alsof je door een dorp/stad rijdt. (**Uitbreiding 1: De dorpen door**.)
  * Na enkele potjes kunnen de routes hetzelfde aanvoelen, omdat er niet zoveel smaken zijn. We kunnen maar vier richtingen op (boven, onder, links, rechts). Om dat te verhelpen, wilde ik "verkeersbord"-fiches maken. Deze fiches geven bepaalde verkeerssituaties aan (stoplicht, drempel, voorrangsweg, wegwerkzaamheden, eenrichtingsverkeer, etc.) en worden op de tegels gelegd om de situatie een klein beetje te veranderen. (**Uitbreiding 2: Weg werken**.)

Deze uitbreidingen vergen _nieuwe componenten_ en toch zeker een hele pagina aan _nieuwe spelregels_, dus het voelde niet juist om ze achterop het basisspel te plakken.

_Opmerking:_ dit ene spel kent, inclusief uitbreidingen, dadelijk al een stuk of 5 varianten. Het spijt me, maar het gaat even duren voordat ik die allemaal uitvoerig heb getest en professionele spelregels enzo heb gegeven. Ik hoop dat jullie me vertrouwen en ook het spel willen proberen met kale spelregels met hier en daar een foutje!

## Oefenpotje 6

Lala

&nbsp;

<TO DO: Dit potje ga ik binnenkort spelen>