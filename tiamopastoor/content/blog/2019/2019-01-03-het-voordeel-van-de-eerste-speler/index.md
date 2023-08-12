---
title: 'Speltip: Het voordeel van de eerste speler'
author: tiamopastoor
date: 2019-01-03T15:00:17+00:00
language: nl
categories:
  - Games

---

Vroeger moest ik altijd met de zwarte stukken spelen tijdens schaakpotjes. Mensen wilden best tegen mij schaken, maar alleen als zij wit mochten zijn, want die ging eerst en had dus een voordeel. Of is dat wel zo? Schaken is een extreem strategisch spel zonder willekeurige elementen. Het wordt zelfs voor veel geld op professioneel niveau gespeeld. Het zou toch stom zijn als één kleur gewoon veel beter is?

De pagina van [Chess Stats][1] meldt het volgende:

  * Winpercentage **wit**: 37.41%
  * Winpercentage **zwart:** 27.75%
  * Percentage **gelijkspel:** 34.84%

Als je begint heb je gewoon 10 procentpunt meer kans om te winnen! Er is dus wel degelijk een significant _eerstespelervoordeel_ ("first player advantage"). (Volgens mij mogen die woorden allemaal aan elkaar. Bovendien is _eerste-speler-voordeel_ lelijk.)

Ik ben natuurlijk niet de eerste die dit een probleem vindt. De schaakwereld heeft al heel lang twee systemen om dit probleem te verzachten:


  * Men houdt bij hoe vaak een schaker begint en probeert dit te balanceren. Zo zal men, binnen een toernooi, ongeveer even vaak met wit spelen als met zwart. (Hoewel sommige grote schakers uit het verleden, achteraf gezien, een disproportionele hoeveelheid potjes met dezelfde kleur hebben gespeeld. Ik weet niet of dat een foutje was ... of corruptie :p)
  * Schaken heeft een andere puntentelling dan de meeste sporten. In veel sporten krijg je 0 punten voor verlies, 1 punt voor gelijkspel, en 3 punten voor winst. _Waarom?_ Om mensen aan te moedigen voor de winst te gaan, in plaats van op gelijkspel te spelen. _Wat doet schaken?_ 0 punten voor verlies, 0.5 punt voor gelijkspel, 1 punt voor winst. Als je met zwart speelt, is de kans gewoon veel groter dat een gelijkspel het beste is dat je uit een potje kunt halen. Daarom is het percentage gelijke spelen ook zo hoog. Er zijn zelfs mensen die beweren dat, als wit perfect speelt, zwart nooit meer dan een gelijkspel kan halen.

Voor schaken is dit genoeg. Maar hoe zit het met andere spellen? Schaken is zo transparant, duidelijk, en logisch als maar kan. Als het _eerstespelervoordeel_ zelfs daar al een probleem is, moet het andere spellen ook lastigvallen. (Natuurlijk heb ik het hier alleen over spellen waarbij men om de beurt speelt---zogenaamde "turn-based games".)

Aangezien ik veel spellen maak (en speel) vind ik dit heel interessant om te weten. Hoe maak je een spel of systeem zo eerlijk mogelijk voor alle partijen? Daar wil ik het in dit artikel even over hebben.

_Opmerking:_ in het spel **dammen** is wél [aangetoond dat het eerstespelervoordeel verwaarloosbaar is][2]. Zolang de tweede speler perfect speelt, kan de eerste nooit winnen.

## Twee soorten spellen

Voor dit onderwerp helpt het om een onderscheid te maken tussen _statische_ en _dynamische_ spellen.

  * **Spellen met volledige informatie** ("statische spellen"): alle spelers hebben alle informatie al vanaf het begin van het spel. 
      * _Voorbeeld_: Schaken. Je weet met welke stukken je tegenstander begint, waar ze staan, hoe groot het bord is, etc.
  * **Spellen met veranderende informatie** ("dynamische spellen"): informatie wordt gaandeweg onthuld of gegenereerd. 
      * _Voorbeeld: _Kaartspelletjes. Je leert pas gaandeweg welke kaarten andere spelers in de hand hebben/hadden, en gedurende het spel trekt men weer nieuwe kaarten van de stapel.

In het algemeen geldt de volgende regel:

Eerstespelervoordeel is _klein_ in statische spellen en _groot_ in dynamische spellen.

We nemen weer schaken als voorbeeld. Stel jij speelt met de zwarte stukken. Als jouw tegenstander een zet heeft gedaan, heb jij _informatie_ over je tegenstander. Je kunt beter gokken wat hij van plan is. Hij heeft het initiatief, jij hoeft alleen maar te reageren. Afwachten en dan toeslaan. De eerste speler moet zijn hand tonen, met de billen bloot, terwijl jij meer tijd hebt om na te denken.

Vergelijk dit met een dynamische schaakvariant. Stel we vervangen de stukken door gedekte fiches. Op de onderkant staat welk stuk het is, maar jij weet dus niet van de tegenstander wat waar staat. Je hebt geen perfecte informatie aan het begin van het spel. Wat gebeurt er? Je verliest de hierboven beschreven voordelen. Aangezien je niet weet wat de eerste speler precies heeft gedaan, weet je niet wat zijn plan is, en kun je nergens op reageren. Je loopt _het hele spel_ één beurt achter zonder iets ervoor terug te krijgen.

Hiermee komen we op het volgende onderwerp ...

## Het niet-eerstespelervoordeel

Het voordeel voor een eerste speler bestaat doorgaans uit het volgende:

  * Hij loopt altijd een beurt voor op de rest
  * Hij kan mogelijkheden kiezen (kaarten, fiches, grondstoffen, etc.) die niet meer beschikbaar zullen zijn voor latere spelers.

Maar _niet_ de eerste speler zijn heeft ook voordelen:

  * Je hebt minder keuzes. Hierdoor hoef je minder mogelijkheden af te gaan en kan je meer tijd aan elke keuze beseteden. Hierdoor is de kans groter dat je een optimale keuze maakt. (Bovendien bevriezen veel mensen mentaal als ze teveel keuzes voorgeschoteld krijgen. Ook wel bekend als "keuzestress" of "analysis paralysis".)
  * Je weet wat de anderen hebben gedaan of van plan zijn. Als de speler voor jou in de eerste ronde meteen voor strategie X gaat, kun jij een meer geinformeerde keuze maken. Of je loopt die persoon uit de weg en kiest strategie Y, of je ziet dat je er beter voorstaat en zet ook vol in op strategie X.

Dat tweede punt moet men niet onderschatten. Ik heb veel spellen gehad waarin ik dacht: "ik kan de _perfecte zet_ doen ... als ik toch eens wist wat de speler naast mij van plan was". De speler na mij daarentegen wacht glimlachend af totdat ik een fout maak en slaat vervolgens toe met zijn perfecte zet.

Dit is dan ook de eerste methode om het eerstespelervoordeel te verzachten:

**Zorg voor veel interactie (tussen spelers) en dat een _gebrek_ aan interactie wordt bestraft**

De personen die als eerste gaan kunnen nog nergens op reageren. Dat moet een handicap worden die hun voordeel van "een beurt voorlopen" moet doen verdwijnen.

Bovendien maakt deze regel een spel vaak beter. In de spellenwereld heb je een gezegde dat ongeveer luidt: "stuur je spelers in de meest leuke/avontuurlijke/spannende richting met behulp van je regels". Je moet niet in de spelregels zetten: "jullie moeten veel interactie hebben!" Nee, je moet de regels op zo'n manier schrijven dat "reageren op wat andere spelers doen" automatisch de beste strategie is.

## Kingmaking

In de spellenwereld bestaat een veelvoorkomend gedrag genaamd "kingmaking". Het betekent het volgende:

Een speler die _geen kans meer heeft om te winnen_, kan wel met zijn acties _bepalen wie de winnaar wordt_.

Bijvoorbeeld: je speelt Kolonisten van Catan. Spelers A en B hebben nog allebei maar één punt nodig om te winnen. Een derde speler (C) staat tien punten achter en gaat nooit meer winnen. In zijn beurt maakt hij een compleet onzinnige zet waarbij hij speler B extreem lastig valt (door de rover ergens neer te zetten, of rare dingen te ruilen/kopen, ofzo). Hierdoor kan B een paar beurten niks doen en wint uiteindelijk A.

In zekere zin maakt de kansloze speler dus uit wie er de "king" wordt. Dit is vervelend, omdat de winnaar van een spel uiteindelijk wordt bepaald door willekeur/persoonlijke voorkeur, in plaats van wie het beste heeft gespeeld.

Ik wil het hebben over het omgekeerde van kingmaking. Ik noem het: "kingshitting". Dat betekent:

Wanneer men kan _kiezen_ wie men lastig valt, kiest men altijd voor de _speler die eerste staat of meer beurten heeft gehad_

Bijvoorbeeld: je speelt Risk. Jij kunt het leger van speler 1 aanvallen, of het leger van speler 4. Je kiest voor speler 1, want "ja hij is begonnen" of "hij staat voor (denk ik)"

Sommige mensen zullen dit als vervelend zien. Wanneer één iemand het hele spel wordt lastig gevallen, _zonder_ dat deze voorstaat, is het ook echt vervelend. Mensen zijn elkaar aan het opjutten, vallen jou de hele tijd aan terwijl je al laatste staat, en uiteindelijk is er geen plezier meer voor jou in het spel.

Maar veel spellen gebruiken kingshitting juist op een goede manier! Het is namelijk een automatische, intuïtieve manier om te balanceren. De persoon die is begonnen heeft een voordeel, dus dat is de eerste persoon die je aanvalt. Veel alom geprezen spellen functioneren alleen maar _omdat_ ze kingshitting gebruiken.

De volgende techniek is dan ook:

**Maak een openbaar scorebord waarop alle spelers tijdens het spel worden bijgehouden.**

Zo ziet iedereen meteen wie eerste staat en wie dus moet worden lastiggevallen. Doorgaans zullen dat de spelers zijn die het spel waren begonnen.

Er is ook nog een tweede techniek om in de gaten te houden:

**Zorg dat spelers de eerste speler makkelijk kunnen bereiken** **met hun "aanvallen"**

Risk doet dit goed. Bij de start van het spel worden ALLE willekeurig verdeeld over de spelers. Geen enkel land is leeg, geen enkele speler is afgeschermd van de anderen. Daardoor kan men meestal---als men daarvoor kiest---alle medespelers aanvallen in hun beurt.

Vergelijk dit met het spel _Hoogspanning_ (geen zorgen, ik verwacht niet dat alle lezers dit kennen). Hierbij heb je een grote kaart waarop men "steden" bouwt die men van stroom gaat voorzien. Het spel is leuk, maar richting het einde wisten we al wie er ging winnen: de persoon die het hele spel afgelegen van de rest heeft gebouwd. Het was haast onmogelijk om hem lastig te vallen, want hij was zo ver weg. Daardoor zag je de winst aankomen ... maar je kon er niks meer aan doen.

_Opmerking:_ ik wil er even bijzeggen dat als ik 2 euro meer had gehad in de laatste ronde, _ik_ gewonnen had omdat ik hem had kunnen blokkeren. Zo, dat je het weet.

## Meerdere potjes spelen

Vaak zeggen mensen: "ja, maar als de eerste speler een voordeel heeft, moet je gewoon meer potjes spelen en zorgen dat iedereen even vaak begint."

Ja, dat kan dus niet. Het idee is leuk, en wordt natuurlijk ook gebruikt bij sporten, maar er is één probleem: als je wilt bepalen wie _in het algemeen_ heeft gewonnen moet je een oneven aantal potjes doen. Beste uit 3, beste uit 5, beste uit 7, zoiets. Maar, als het aantal potjes niet overeenkomt met het aantal spelers ... kan dus nooit iedereen even vaak beginnen.

_Voorbeeld:_ bij veel 1-tegen-1 sporten moet je 3 sets winnen om door te gaan. Dan móét een van de spelers dus wel vaker beginnen dan de ander (2 keer tegenover 1 keer).

_Hoe zit het bij schaken?_ Leuk dat je het vraagt. Laatst was het wereldkampioenschap, welke bestond uit 12 potjes tussen de wereldkampioen en zijn uitdager. Dat is een even aantal potjes, ja. Dus de kans bestaat dat uiteindelijk gelijkspel optreed, wat dit jaar ook gebeurde. (Nou was het dit jaar wel heel bijzonder: _alle_ potjes werden gelijk gespeeld.) Dus dan heb je nog steeds geen winnaar.

Als je dit systeem toepast kun je dus nooit bepalen wie het spel gewonnen heeft. Je kunt slechts bepalen wie individuele potjes heeft gewonnen, maar daar heb je dan weinig aan, want er is een zwaar eerstespelervoordeel.

## Beginopstellingen

Sommigen van jullie zullen bekend zijn met het computerkaartspel _Hearthstone_. Hierbij speel je tegen een andere speler (over het internet) een kaartspel, net zoals bijv. _Pokémon_ of _Magic: The Gathering_.

In dit spel kun je alleen kaarten uitspelen als je daarvoor genoeg _mana_ hebt. Elke ronde wordt je hoeveelheid mana eentje meer. De eerste speler loopt dus altijd één mana voor op de tweede speler. De mana blijft groeien ... tot beide spelers aan hun maximum van 10 mana zitten.

Dit is een dynamisch spel: het eerstespelervoordeel is gigantisch.

_Hoe wordt dit opgelost?_ Door de tweede speler iets extras te geven. Hij krijgt een kaart die hij op elk moment (gratis) kan inleveren om één mana te krijgen. Dit lost, voor die specifieke ronde, de achterstand op. Maar dat is niet genoeg: totdat de mana op 10 zit blijft de tweede speler achterstand hebben. Dus krijgt de tweede speler ook nog een kaart meer dan de eerste speler.

Hoewel het winpercentage nog steeds niet perfect verdeeld is, zijn er genoeg spelers die overtuigd zijn dat _tweede speler_ zijn beter is dan _eerste speler_, en vice versa. Het is vrij simpel, maar werkt toch goed.

Hiermee komen we bij de volgende techniek:

**Verander de startopstelling van spelers op basis van beurtvolgorde**.

Misschien krijgen latere spelers steeds meer kaarten aan het begin van het spel. Of de eerste speler kan een bepaalde actie niet doen, die de rest al wel deze ronde kan doen. Of bepaalde stapels worden halverwege de ronde aangevuld, in plaats van aan het begin, waardoor de eerste speler juist een kleinere keuze heeft.

Een andere veelgebruikte techniek hangt hiermee samen:

**Gebruik de "normale richting"+"omgedraaide richting" truc**

Eerst doe je een ronde in de normale richting (met de klok mee); daarna doe je een ronde andersom (tegen de klok in). Over twee rondes verspreid heeft iedereen dan ongeveer evenveel voordeel en nadeel.

Je moet dan wel nog steeds opletten dat het spel goed werkt. In het spel _Terra Mystica_ plaatst men hun fiches volgens deze truc. Ik was de laatste speler, en mocht dus in de eerste ronde als laatste plaatsen, maar in de tweede ronde als eerste. Dit bleek een gigantisch voordeel (ik won uiteindelijk)! In het spel is het heel belangrijk om plekjes op tijd in te pikken, mensen af te snijden en dwars te zitten. Doordat ik twee beurten direct na elkaar kreeg, kon ik dat makkelijk doen. Het hele spel kon ik teren op mijn recreatie van de Berlijnse muur waarmee ik in de eerste ronde het speelbord in tweeën had gedeeld :p

Er zijn nog wel meer trucjes zoals deze. In _Hoogspanning_ (daar is ie weer) heb je 5 fases per ronde, en 2 daarvan lopen in omgekeerde volgorde, terwijl de rest normaal verloopt. In een artikel van de ontwikkelaar las ik dat het directe argument hiervoor was om het eerstespelervoordeel weg te halen. Je mag misschien als eerste iets kopen ... maar vervolgens pas als laatste iets neerzetten.

## Maak startspeler een actie

Deze is heel bekend. In plaats van de startspeler willekeurig te kiezen en dan het hele spel hetzelfde te houden, kan iedereen tijdens zijn beurt de startspeler claimen. Hij/zij wordt dan vanaf de volgende ronde startspeler. Dit blijft zo totdat iemand anders besluit de startspeler weg te stelen.

Op deze manier los je het probleem (deels) op én krijg je een extra tactische laag cadeau. Ik heb vrij veel spellen gewonnen omdat ik als enige de waarde inzag van die startspeleractie. (Vaak levert zo'n actie nauwelijks iets op buiten dat je startspeler wordt. Daardoor lijkt hij heel zwak/onaantrekkelijk, maar dat wordt dus zwaar onderschat.)

Een voorbeeld van een spel die dit doet is _Agricola (Familie Editie_). Eén de vele acties is dat je de "haan" krijgt en volgende ronde mag starten. (Je krijgt ook 1 voedsel, maar dat is heel weinig vergeleken met de vis-actie die ernaast ligt, waar je soms wel 5 of 6 voedsel van kan krijgen.)

## Overschakelen naar simultaan

Een optie die men vaak vergeet is:

**Bij veel spellen kunnen beurten prima _tegelijkertijd_ worden gespeeld, in plaats van om de beurt**

Dit heeft zelfs mijn voorkeur. Het zorgt dat je niet hoeft te wachten op anderen, houdt het tempo in het spel, en maakt het makkelijker voor mensen om in het spel te komen. (Als mensen een spel zien waarbij tegelijkertijd wordt gespeeld, begrijpen ze het sneller en willen ze meteen meespelen. Als ze om de beurt mensen een kwartier diep zien nadenken en moeilijke dingen prevelen, is dat enthousiasme doorgaans minder.)

Je hoeft ook niet het hele spel tegelijkertijd te maken, gewoon _zoveel mogelijk onderdelen_. Een rare gewoonte van mensen, bijvoorbeeld, is dat ze pas hun kaarten bekijken en/of hun beurt bedenken als ze daadwerkelijk aan de beurt zijn. Dat hoeft niet. Moedig ze aan---door middel van spelregels---om tegelijkertijd te spelen en denken. Sta toe dat ze tegelijkertijd hun scores verzetten/bijhouden, tegelijkertijd kunnen hun beurt kunnen voorbereiden, etc.

## Het gaat eigenlijk om iets anders

Al deze theoretische praat is heel leuk ... maar uiteindelijk gaat het om de praktijk. Het is schokkend dat wit veel vaker wint dan zwart bij het schaken ... maar toch hoor je daar geen professionele schakers over zeuren. Waarom niet? Dat is toch belachelijk?! Het komt vanwege het volgende:

_De kans dat een spel wordt bepaald door een (eerste)spelervoordeel is véél kleiner dan de kans dat een spel wordt bepaald door hoe goed men heeft gespeeld._

Iemand met de zwarte stukken verliest niet omdat hij als tweede aan de beurt is; hij verliest omdat hij bij zet 10 een blunder maakte en daarna nog drie fouten. Andersom wint iemand met de witte stukken niet omdat hij toevallig als eerste ging; hij wint omdat hij het hele potje lang supergoed heeft gespeeld.

Natuurlijk moet je het eerstespelervoordeel zoveel mogelijk minimaliseren. Maar er komt een punt waarop het verschil verwaarloosbaar is. Waarop je niet meer met zekerheid kunt zeggen wie nou eigenlijk een voordeel heeft en waarom. Waar het misschien enorm afhangt van de samenstelling, het aantal spelers, de gebruikte tactieken, wie er een eerstespelervoordeel heeft.

En dan zie je bij elk goed ontworpen spel dat _vaardigheid_ wint van  _geluk_. Een écht gemotiveerde speler zal zeggen "maakt me niks uit dat jij een voordeel hebt, ik ga wel als laatste, en tóch ga ik winnen! Puur op wilskracht en vaardigheid!" En de persoon die eerste ging zal zich schamen na zijn verlies :p

## Toepassingen in andere gebieden

(Ik overwoog om dit kopje, en die hierna, in een "appendix" te zetten. Maar dat werd me te formeel voor een blogpost.)

De besproken oplossingen kunnen ook in andere gebieden (die "turn-based" zijn) van pas komen. Denk bijvoorbeeld aan een wachtrij. Zouden mensen achterin een wachtrij hiervoor gecompenseerd kunnen worden? Dat ze een snoepje krijgen, of vermaakt worden, of iets dergelijks? Vaak zie je ook dat de eerste mensen in de rij beter behandeld worden dan die achterin, omdat tegen die tijd medewerkers het helemaal zat zijn. Dat is ook een soort "eerstespelervoordeel". Hoe zou je dat kunnen oplossen?

Of, 's avonds aan de eettafel, wanneer iedereen om beurten eten moet opscheppen, heb je ook een eerstespelervoordeel. De eerste persoon kan meer pakken, of juist de lekkere dingen ertussenuit scheppen. Vaak genoeg kwam ik te laat thuis/aan tafel, en waren de paar lekkere dingen al verdeeld over de eerste mensen. Zouden de oplossingen daarvoor ook gelden? (Misschien dat je binnen het gezin de "startspeler" kunt afkopen, waarmee jij bij het eten als eerste mag opscheppen :p Bonuspunten als degene die _kookt_ of _de tafel dekt_ de startspeler wordt. Dat is nog eens een speelse manier om kinderen op te voeden en klusjes te laten doen.)

_Opmerking:_ terwijl ik hierover las kwam ik een leuke uitspraak tegen. Iemand zei dat hij altijd spellen speelde met zijn vriendin, en dat ze echt de wereld voor hem is, maar dat ze _altijd_ betere kaarten heeft en beter gooit met de dobbelstenen. Toen zei iemand daaronder: "they say you can be lucky in cards or lucky in love but not both." Vond ik geinig. Is ook een opsteker voor al die mensen die altijd schijtkaarten krijgen bij elk kaartspel: je gaat tenminste ooit je droomvrouw vinden.

## Overige ideeën

Een ander interessant idee is "accept-or-swap". (Ook wel bekend als "splitting the cake".) Wanneer de eerste speler zijn beurt heeft gedaan, mag de tweede speler kiezen:

  * Of hij _accepteert_ de beurt (van de eerste speler) en doet vervolgens los daarvan zijn eigen beurt.
  * Of hij _wisselt_ de beurt (van de eerste speler) met zijn eigen beurt.

Als de eerste speler een té goed zet doet, wordt die gestolen door de tweede speler. Dus hij moet iets doen wat niet té voordelig is. Op zich interessant, hoewel het lastig te implementeren is voor veel spellen.

Als laatste noem ik de "vertraagde beloning". In veel spellen voeren spelers meteen hun acties uit en krijgen spelers ook meteen hun beloning. Hierdoor ontstaat een groot eerstespelervoordeel: hij kan immers dingen gebruiken die mensen later niet meer kunnen gebruiken. Hij kan alle goede grondstoffen van tafel pakken, of alle bonussen opstrijken, voordat de rest überhaupt een kans heeft.

Om dit op te lossen kun je de _acties_ en/of de _beloning_ uitstellen.

**Actie:** stel je kunt grondstoffen kopen op de markt. In veel spellen krijg je de grondstoffen direct in je beurt ... maar dat kan oneerlijk zijn. Misschien kun je spelers een fiche laten plaatsen (zo van "ik wil hier dingen van hebben"), en pas _aan het einde van de ronde_ worden de grondstoffen verdeeld. Als meerdere fiches bij hetzelfde ding liggen, wordt dat verdeeld onder de spelers. Eerlijker én strategisch interessant.

**Beloning:** stel er is een bonuskaart in het spel met "de speler die als eerste 10 huizen heeft krijgt direct 10 punten". Je kunt die bonuskaart meteen aan een speler geven wanneer deze 10 huizen bereikt ... maar dat zou oneerlijk zijn. Het is beter om bonuskaarten _aan het einde_ van de ronde te verdelen, wanneer iedereen evenveel beurten heeft gehad. Als dan toevallig twee mensen tegelijkertijd de 10 huizen bereiken, krijgen ze allebei de beloning.

 [1]: https://www.chessgames.com/chessstats.html
 [2]: https://science.sciencemag.org/content/317/5844/1518