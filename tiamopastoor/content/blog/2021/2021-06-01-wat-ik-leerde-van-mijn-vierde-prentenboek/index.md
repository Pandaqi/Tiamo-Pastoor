---
title: Wat ik leerde van mijn vierde prentenboek
author: tiamopastoor
date: 2021-06-01T14:00:00+00:00
language: nl
categories:

thumb: /uploads/2021/05/OmslagSingle_Verkleind_result.webp
---

Onlangs publiceerde ik mijn prentenboek [Het Rijk van Wondersteboven][1]!

Het is een _pixelprentenboek_. (Dat woord heb ik zelf verzonnen, want het bestond nog niet.) 

Dat betekent dat alles is getekend in "pixel art", een stijl die begon uit noodzaak omdat computers vroeger maar een paar pixels hadden, maar inmiddels in héél veel computerspellen wordt gebruikt omdat het gewoon een simpele stijl is waarmee je prachtige dingen kan bereiken.

Het heeft 34 full-color illustraties, met daarachter nog 10 pagina's bonusinhoud (met tips voor het maken van _pixel art_, achtergrondinfo, etcetera).

Zoals altijd, heb ik veel geleerd van dit project, en ik wil de belangrijkste lessen hier met jullie delen.

## #1: Hoe doe je Pixel Art in boeken?

Het idee van _pixel art_ is, niet geheel verrassend, dat elk plaatje slechts bestaat uit een gering aantal vierkantjes. Voor dit boek heb ik een héle lage resolutie gekozen, omdat dit van belang is voor het verhaal en de boodschap daarin.

Dit betekent dat de meeste pagina's _slechts_ 32 bij 45 pixels zijn. Oftewel, 32 vierkanten breed, en 45 vierkanten hoog.

Boeken (en printers) hebben een véél hogere resolutie dan dat. Maar, als ik mijn plaatje gewoon _groter maak_ in mijn programma ... dan wordt hij wazig (en heel lelijk).

Waarom? Nou, computers gebruiken een standaard algoritme om plaatjes te vergroten of verkleinen, die de pixels een beetje verandert. Met normale foto's werkt dit _zo goed_ dat je het niet eens merkt. Het algoritme weet precies welke kleuren het moet veranderen, hoe het dingen moet schalen, om het originele plaatje op een ander formaat te recreëren.

Maar bij pixel art willen we dat niet. We willen dat het blijft zoals het is, niet dat de vierkanten ineens van kleur veranderen, of rechthoeken worden.

![](/uploads/2021/05/DevlogVoorbeelden_Verkleind_result.webp) 

Oftewel, **stap 0: maak je plaatje in een pixel art programma.** Niet alleen is dat _handiger_ (want je hebt alle juiste tools en instellingen), het is dus ook _sneller en foutlozer_ (want die gaan je plaatjes nooit wazig maken, bijv.)

Ik heb **Aseprite** gebruikt, omdat ik die altijd heb gebruikt voor pixel art (hoewel ik moet toegeven daar nog behoorlijk weinig afgeronde projecten mee te hebben gemaakt). Voor alle andere dingen (tekst, layout, uiteindelijke PDF samenstellen, etcetera) gebruikte ik **Affinity Designer**.

{{% remark %}}
Veel programma's, zoals Designer en Photoshop, hebben wel een "pixel tool" of "pixel mode". Maar dat is vaak onzin. Dat doen ze alleen omdat ze er reclame mee kunnen maken en misschien nog wat extra mensen kunnen aantrekken. Die modes zijn vaak incompleet, onpraktisch, en houtje-touwtje geïmplementeerd. Dus gebruik gewoon pixel software, je hebt ook prima gratis software.
{{% /remark %}}

Dan, **stap 1: gebruik een "Pixel Upscaler".**

  *   * Voor een "spread" in het boek (dus twee pagina's naast elkaar), had ik uitgerekend dat de grootte 5120 bij 3600 pixels was. 
      * Hoe? Volgens deze héle wetenschappelijke methode:
      * Ik maakte twee pagina's aan in mijn tekenprogramma, zette ze naast elkaar, en plaatste iets in de linkerbovenhoek en rechteronderhoek. Vervolgens keek ik naar de afstand tussen die twee dingen in pixels :p
      * Hierbij wordt de _bleed_ ook meegerekend! Dat is een "reserverstuk" dat je altijd erbij moet tekenen, omdat printers niet _exact_ kunnen printen, en altijd een piepklein beetje ernaast zullen zitten.
  * Ik sla het uiteindelijke plaatje op en stop het in het programma. (Het hoort dus precies te passen, geen vergroten/verkleinen meer nodig.)

Maar dat is niet alles. Want, als je dit exporteert naar een PDF (of gewoon een plaatje, JPEG of PNG) ... dan maakt hij het weer wazig! Stop daarmee!

Dus **stap 2: zoek in de "exporteer" instellingen naar "Nearest Neighbour" (onder _resampling_ of _algorithm_).** Zet het daarnaartoe. Exporteer opnieuw.

  * Je weet dat dit gewerkt heeft als het uiteindelijke plaatje een véél _kleinere_ bestandsgrootte heeft dan de wazige.
  * Waarom? Een PNG, bijvoorbeeld, gebruikt een "kleurentabel" om zo klein mogelijk te worden. Als je pixel art opschaalt, zou er geen kleuren bij moeten komen (het blijft zoals het is), dus die tabel blijft even klein. Maar als je het wazige algoritme laat werken, komen er ineens honderden andere kleuren bij, en wordt die tabel gigantisch. 
  * Je weet ook dat dit werkt als het plaatje er niet meer wazig uitziet :p Maar mijn laptop is oud en slecht, en ik kan dat soort dingen oprecht slecht beoordelen. Meestal stuur ik het naar mijn telefoon, die heeft een beter scherm.

Zo, dat scheelt. 

Maar je bent nog steeds niet klaar. **Stap 3: de printpuntjes op de i.**

  * Als het plaatje in je programma gepositioneerd is op een _niet-gehele pixelwaarde_ (dus bijvoorbeeld: X = 104.3 px, ipv 104px), dan gaan de meeste programma's automatisch de boel wazig maken. Want ja, het plaatje begint _halverwege_ de pixel! Dat kan niet! Dus dat moeten we oplossen.
  * Op dezelfde manier, snijden printers dus niet perfect af. Oftewel, de randen van de plaatjes zouden zomaar halverwege de pixel kunnen ophouden. Ik heb geprobeerd dit te minimaliseren, en sowieso geen belangrijke dingen bij de randen geplaatst, maar verder _heb ik hier eigenlijk weinig controle over._
  * Ik overwoog aan het begin om de _tekst_ ook binnen deze resolutie te houden. Maar een snelle test wees uit dat dit _een belachelijk idee was_. Dus de tekst die over de plaatjes gaat gebruikt wél een pixel lettertype, maar is verder op volledige resolutie. (Sterker nog, individuele letters zijn vaak kleiner dan één individuele pixel in een plaatje.)

Het was even zoeken, passen, en meten. Maar hiermee heb ik redelijk snel, redelijk foutloos, een heel prentenboek in pixel art kunnen maken. (Met consistente kleuren, resolutie, afmeting, afsnijding, etcetera.)

## #2 De One-Week Challenge

Dit hele prentenboek, van begin tot eind, script tot prenten, is in één week gemaakt.

Waarschijnlijk denk je nu "oh, zou wel niet veel voorstellen dan" of "pff, zal wel een slecht boek zijn". En dat is een logische gedachte.

Maar ook weer niet, want juist **hoe beter je bent in iets, hoe sneller je het kan.** 

Dit is mijn vierde prentenboek. Dit is misschien wel het duizendste verhaaltje dat ik in mijn leven schrijf, de zoveelste keer dat ik met pixel art werk, de zoveelste keer dat ik iets vormgeef. 

Ik denk dat dit boek goed is geworden, professioneel, zijn prijs waard. Maar dat komt alleen omdat ik met alle onderdelen al veel ervaring had en een hele snelle _workflow_ had opgebouwd. Als dit mijn eerste prentenboek was---ja, dan had ik na een week alleen maar de eerste paar hoofdstukken geschreven, en waarschijnlijk nog slecht ook.

De laatste jaren leer ik steeds meer dat het juist **goed is** om **hele snelle, korte projecten te maken**. Want de grootste tegenstander van kunstenaars, of kunst in het algemeen, is een gebrek aan _motivatie_. Een eindeloos _perfectionisme_, projecten die almaar _groter en groter worden_, tot ze nooit meer afkomen.

Dus ik raad iedereen aan om óók de **one week challenge** te doen. Het is heel simpel: maak een kunstproduct, van begin tot eind, "uitgeefbaar", in één week. Dat kan een album zijn, een novella, een schilderij, wat dan ook.

Maar als je het in een week doet, ga je productief zijn, je gaat je motivatie niet verliezen, en je wordt gedwongen om het constant _simpel te houden_. Nog belangrijker, je wordt gedwongen om constant _keuzes te maken_.

En als jij in een maand 4 prentenboeken hebt gemaakt, heb jij véél meer geleerd (en véél meer bereikt), dan als je een maand hebt lopen werken (en twijfelen, en uitstellen, en uitvergroten) aan één prentenboek die perfect, en groots, en succesvol moest worden.

Daar gaat het prentenboek zelf ook over. Houdt het simpel. Wees tevreden met weinig. Leef minimalistisch. Dat brengt mij bij ...

## #3 Je hebt weinig pixels nodig

Ja, de resolutie in dit boek is _heel laag_. Met meer pixels, hadden de plaatjes gedetailleerder kunnen zijn, unieker. Ik had echt een heel rijk kunnen neerzetten, in plaats van slechts een paar kleine (soortgelijke) stukjes te laten zien.

Maar tegelijkertijd ... is dit verhaal prima te volgen met de huidige resolutie. Slechts zelden had ik écht te weinig ruimte om iets zinnigs te laten zien, of te tekenen wat bij de tekst (op die pagina) paste. En als het al gebeurde, werd ik gedwongen om creatiever te zijn en "out of the box" te denken, waarvan ik veel kleine lesjes heb geleerd.

Hopelijk kan ik voortaan deze instelling vasthouden.

Hopelijk kan ik bij volgende boeken het óók simpel houden. Een paar kleuren, een paar pixels, een paar terugkerende elementen ... als je ze creatief samenstelt, kan je alles maken. En vaak is het nog _beter_ ook, want het is makkelijk te volgen, en tegelijkertijd heel _samenhangend_.

(Datzelfde geldt ook voor alle andere projecten. Zo ben ik al een maand bezig met elke dag stukjes opnemen voor mijn eerste muziekalbum. Maar hoewel ik nu zes gitaren heb die geweldig samenklinken en een groots geluid maken ... merk ik steeds meer dat ik het eigenlijk niet wil. Ik ben een singer-songwriter, ik schrijf schattige kleine liedjes, misschien moet ik het dan ook gewoon _klein_ houden!)

Het komt allemaal neer op een uitspraak die ik ooit tegenkwam en die mijn wereld veranderde**: Expertise is about restraint.**

Een goede ontwerper kent niet meer kleuren dan anderen, of meer vormen. Geweldige prentenboeken hadden geen supercomputer nodig die sneller en beter was, of meer pixels had, of wat dan ook. Nee, het is juist omgekeerd: een expert in diens vakgebied weet precies wat hij nodig heeft, en kan met _een paar elementen_ iets geweldigs neerzetten.

Oefen daarmee. Blijf daarmee oefenen. Het is denk ik één van de snelste wegen naar "expertise" in je vakgebied.

## #4 Contrast, contrast, contrast

Och, hij blijft maar terugkomen.

Ik heb een stuk of drie keer de schaduwen op de voorkant van dit boek _donkerder gemaakt_. Want elke keer als ik even uitzoomde (of wegliep van de tekening en later terugkwam), zag ik de tekst en dacht: "dat is niet leesbaar genoeg---er moet meer contrast bij!"

De kleuren waarop ik uiteindelijk ben uitgekomen zijn véél beter dan de originele. Maar bij de eerste versie dacht ik dat het té donker zou zijn, wat aangeeft dat ik _nog steeds_ niet goed contrast kan inschatten (en de waarde daarvan).

Op diezelfde manier, heb ik uiteindelijk meerdere keren de bonuspagina's (in zwart-wit, aan het einde van het boek) opnieuw gedaan. Veel onderdelen waren origineel in kleur getekend. Toen ik ze omzette naar zwart-wit, werd pijnlijk duidelijk hoe weinig contrast erin zat. (In kleur, was het een licht beige tekst over een donkerbruine achtergrond. Maar in zwart-wit, werd het lichtgrijze tekst over iets donkerder grijze achtergrond.)

Oftewel: **onze ogen houden van contrast! En het verhoogt leesbaarheid/structuur/begrip van wat we zien!** 

Dus wees niet bang om van de belangrijkste onderdelen een tweede versie te doen, of zelfs een derde en vierde versie, waarin je alleen maar kleuren iets extremer maakt. (Dus bijv. schaduwen donkerder en lichten helderder.)

## #5 Maak vantevoren een bibliotheek

Stiekem ... is het geen _one week prentenboek_ :p 

De week ervoor was ik namelijk begonnen met een _one week game_ genaamd "Kingdom of Duckside Down". Echter, ik liep enorm vast. Ik had al veel dieren getekend, ik had al het algemene _idee_ vastgelegd, maar de dingen werkten gewoon niet.

Dus toen besloot ik om (tijdelijk) van medium te switchen. Ik gebruikte al mijn schetsen vooraf, mijn pixeldieren, het algemene idee (en de naam) om dit prentenboek te maken!

(Dat heeft het proces natuurlijk ook versneld.)

En dat beviel me eigenlijk wel. Elke keer als ik dacht: "hé, ik heb hier een dier nodig van formaat X, en het liefst kleur Y"---kon ik gewoon naar die bibliotheek van _sprites_ voor het spel gaan en een leuke uitkiezen!

(Achteraf gezien had ik misschien toch meer diversiteit in dieren en locaties willen maken. Maar ach, voor een volgend pixelprentenboek.)

Dus waarschijnlijk ga ik voor de volgende prentenboeken ook eerst een wat grotere collectie schetsen maken die ik, zo nodig, direct kan overnemen in plaatjes. 

## #6 Laat je inspireren

Enerzijds hangt dit samen met het vorige punt. Inspiratie kan uit rare hoeken komen. Toen ik begon met het _computerspelletje_ had ik geen idee dat het uiteindelijk een prentenboek over dieren in een rijk vol pixels zou worden.

(Sterker nog, het project heette eerst _Kingdom of UpsideDown_, en ik heb een berg pixel _personen_ die in eerste instantie gewoon ondersteboven zouden gaan lopen in het spel. Het idee van _dieren_ kwam pas toen ik merkt dat ik een sterke _visuele indicator_ nodig had van de _leeftijd_ van elk poppetje. En ja, een eend heeft een duidelijk proces: ei -> kuiken -> eend)

Dus sta open om je project compleet van koers te laten veranderen. En sta open voor het proberen van andere media.

(Dit wordt ook steeds populairder in de spellenwereld. Steeds meer _computerspeldesigners_ maken een _bordspel_ prototype van hun spel, die ze live met anderen spelen, en van spelregels voorzien. Want vaak vind je daarmee fouten die je anders over het hoofd zag. En het maakt je spel simpeler, want spelregels mogen niet veel langer worden dan een paar pagina's :p)

Anderzijds kan die inspiratie natuurlijk van buitenaf komen. Een aanal tekeningen in dit boek zijn direct geïnspireerd door een _screenshot_ dat ik maakte. Dan keek ik een _devlog_ van iemand die een pixel art spelletje aan het maken was en zag, bijvoorbeeld, in de hoek ineens iets voorbijkomen dat ik wel schattig vond. Dus ik maak een screenshot. 

Sommige dingen heb ik weken geleden gezien, andere dingen (zoals het schattige icoontje om mezelf uit te beelden op de _cover_) heb ik letterlijk ontdekt toen ik even _pauze_ nam van het tekenen aan dit boek.

## Conclusie

Zo, dat was het! Ik vind het weer een mooi en uniek prentenboek. (Serieus, ik kon nergens iets vinden dat ook maar _leek_ op een pixelprentenboek. Maar als ik iets over het hoofd heb gezien, laat het vooral weten.)

En ik heb er weer veel van geleerd. Het is gewoon een andere stijl, een andere manier van denken. Waar ik normaal gesproken uit de losse pols een schaduw teken, of misschien een hoofdpersonage wat gedetaillerde kleding geef, had ik nu ... alleen een paar pixels. Je moet keuzes maken. Je moet je kleuren goed kiezen.

En ik heb nog veel te leren in dat opzicht. Ik ben helemáál geen geweldige pixel artist en heb waarschijnlijk zeventien pixeldoodzonden begaan in dit boek.

Maar je moet ergens beginnen. Ik heb wel mooi in een week een prentenboek gemaakt en met al deze onderdelen geëxperimenteerd.

Dus dat is, zoals altijd, de conclusie: _ga het doen!_ Ga gewoon dingen maken, zo snel als je kan, zo veel als je kan. Je gaat lelijke dingen maken, je gaat dingen maken die niet "perfect" zijn, maar je leert er zoveel van dat je volgende project véél meer kans heeft om perfect te zijn.

Tot het volgende prentenboek,

Tiamo

 [1]: /books/rijk-van-wondersteboven
 [2]: /uploads/2021/05/DevlogVoorbeelden_Verkleind_result.webp