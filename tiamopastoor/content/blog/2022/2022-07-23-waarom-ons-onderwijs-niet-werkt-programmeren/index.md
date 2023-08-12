---
title: 'Waarom ons onderwijs niet werkt: programmeren'
author: tiamopastoor
date: 2022-07-23T14:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Het is vaak moeilijk om een concreet voorbeeld te vinden waarom ons onderwijssysteem zo zinloos is. En gek genoeg, als je geen voorbeeld kan geven, gaan mensen er standaard van uit dat je geen gelijk hebt.

Daarom was ik blij toen ik onlangs nadacht over mijn tijd aan de universiteit en besefte dat "leren programmeren" een geweldig voorbeeld is!

Toen ik het verplichte "programmeervak" kreeg aan het begin van mijn studie, waren _comments_ een van de eerste dingen die we leerden.

Een _comment_ is niets meer dan een opmerking die je voor jezelf achterlaat in de code. De computer negeert dit compleet, en je mag alles schrijven wat je wilt, het is simpelweg zodat _jij_ nog weet hoe de code werkt en waarom.

Bijvoorbeeld: "Hier slaan we de gebruikersnaam en wachtwoord samen op in een database, door A en B te doen."

Dit ziet er in de praktijk zo uit:

Elke "tutorial" of "cursus" over programmeren zal comments meteen uitleggen. 

Het zal direct vertellen dat je _zoveel mogelijk opmerkingen moet achterlaten_ en zo _specifiek mogelijk_, want anders wordt je code over tijd een grote warboel die je niet meer begrijpt.

Mijn studie deed hetzelfde. Het ging zelfs nog een stapje verder, want het blijft een studie: veruit het belangrijkste onderdeel van je tentamencijfer was of je wel _genoeg_ documentatie achterliet (door middel van uitgebreide comments dus) van _goede kwaliteit_.

Logisch, toch? Code moet begrijpelijk zijn en blijven. Je moet uitleggen wat al die rare woordjes en cijfertjes doen.

Het probleem is alleen dat het **niet waar is.**

Ik programmeer nu al vijftien jaar en kan met 100% zekerheid zeggen dat _comments alleen zijn voor uitzonderlijke omstandigheden, verder moet je ze niet gebruiken._

Hetgeen het eerste wordt aangeleerd, hetgeen het meeste wordt getoetst om te kijken of je kan programmeren, is in mijn ogen iets dat juist aangeeft dat je nog geen goede programmeur bent. 

(Daarnaast is het natuurlijk arbitrair. Wat zijn comments van "goede kwaliteit"? Wat is "genoeg"? Compleet afhankelijk van je docent en diens maatstaven. Dan heb je een vak dat 100% bestaat uit _logica_, dingen die _exact te bewijzen/controleren zijn_, en dan weet het onderwijs er alsnog een vage arbitraire rotzooi van te maken. Maar dat is nu niet eens belangrijk, we gaan door.)

## Waarom zijn comments een slecht idee? 

Er zijn een aantal simpele redenen die iedereen kan inzien:

  * Het kost veel tijd en energie om bij te houden
  * Het maakt je code twee keer zo lang: grotere bestanden, langer scrollen voordat je vindt wat je zoekt, etcetera.
  * Comments kunnen verouderd raken. Als de code eronder net ietsje verandert, maar je vergeet de comment 100% te updaten, staat er nu simpelweg een _leugen_ die alles in de war schopt. (Een bekende uitspraak is "_a comment is a lie waiting to happen_").

Maar de belangrijkste reden vergt wat meer uitleg.

**Comments geven je een excuus om _hele slechte en vage code te schrijven_ en daar blij mee te zijn.**

Je kan alles toch netjes uitleggen! Wat maakt het uit dat de code zelf een warboel van tekens is met onnavolgbare logica? Ik leg het daarboven toch netjes in een paar paragrafen uit?

Het is veel beter, sneller, makkelijker, flexibeler, om de code te schrijven _zodat het zichzelf uitlegt_. Elke comment die je nodig hebt betekent dat je meer tijd had moeten steken in de code zelf.

## Een voorbeeld 

Ik zal een voorbeeld geven.

We programmeren een stukje code om te controleren of inloggegevens op een website correct zijn. (Dit is niet precies hoe je dat in het echt doet, het is een versimpelde weergave natuurlijk.)

Ja, zelfs als je nooit hebt geprogrammeerd, weet je wat deze code doet dankzij de comments!

Maar deze simpele code heeft al 4 extra regels vanwege comments. Stel de website verandert en even later checken we het _emailadres_ in plaats van de _gebruikersnaam_. Het kan zomaar gebeuren dat we dan die comment vergeten aan te passen, waardoor hij niet eens meer klopt.

Er zijn (onder andere) twee simpele dingen die je kan doen om de comments weg te halen. 

De code wordt alleen maar duidelijker. Je kan het alleen maar _beter_ begrijpen, zelfs als je nooit hebt geprogrammeerd.

Dit zijn dingen die mij _niet_ werden geleerd bij dat officiële vak op mijn studie, en meestal ook niet in andere cursussen. 

**Het eerste trucje** is dat je die checks opslaat onder een zinnige naam. Je maakt een _variabele_ (de bouwsteen van programmeren, leer je meteen) en stopt de check daarin.

Tada! Twee comments weg. Maar je kan nog exact lezen wat er gebeurd. Nog beter, je kan diezelfde variabele hergebruiken ergens later in de code, en je hoeft alleen maar de naam aan te passen als de functionaliteit verandert.

Het idee is dus dat je een naam kiest die zegt wat jouw _bedoeling_ was met dit stukje code. Waar staat het voor? Wat wilde je checken/uitrekenen/controleren?

**Het tweede trucje** is natuurlijk dat je code omzet in functies die je hergebruikt, _met een zinnige naam_. 

Dit is niet zozeer een trucje: ergens halverwege dat programmeervak leerden we al over functies. 

Het enige probleem is dat wederom niet wordt geleerd dat je functies op deze manier kan en moet gebruiken. Je leert wat een functie _is_ en hoe je het _aanroept_. Maar dat je het echt voor _bijna alles_ moet gebruiken en hoe je het goede namen geeft laten ze achterwege.

Laten we kijken.

De comments zijn weg. De code zegt nu _zelf_ precies wat het doet. Het is zelfs sneller en we herhalen onszelf minder.

En dit zijn maar een paar hele simpele regels code. Als je dit toepast op een heel programma is de winst _gigantisch_.

## Je geeft nu expres een stom voorbeeld 

Nee. Dit is wat programmeurs massaal doen. Dit is wat _ik_ jarenlang heb gedaan. Dit zijn de voorbeelden die je ziet in alle cursussen, in allerlei openbare projecten van ontwikkelaars.

Er staan genoeg projecten online van mij, met broncode, waar je kan zien dat alles tot in den treure comments krijgt. Toen ik daarmee ophield ging ik niet ineens meer fouten maken of vol verwarring naar mijn oude code staren: mijn werk werd juist duidelijker en foutlozer.

En dat is precies mijn punt. Dat allereerste voorbeeld, dát wordt geleerd, geprezen en getoetst in ons onderwijs als het om programmeren gaat. De hele simpele, extreem praktische manieren om véél beter te programmeren worden nergens genoemd, misschien wel gestraft.

{{% example %}}
Ik had geen 10 voor mijn tentamen bij programmeren, maar een 9,4. Al mijn code deed wat het moest doen, snel en foutloos, dat kan je ook met zekerheid controleren natuurlijk. Ik programmeerde toen al járenlang. Dus ik heb punten aftrek gekregen omdat ze de manier waarop niet leuk vonden.
{{% /example %}}

## Een stapje verder 

Voor wie wil kunnen we het voorbeeld nog een stapje verder nemen. Om het punt duidelijk te maken dat je géén comments wilt, maar slimmere en duidelijkere code.

Als ik voor dat vak een functie schreef, moest ik daarboven de documentatie voor die functie uitschrijven. Dat betekent vaak een hele rits aan regels om elke "parameter" die je in de functie kan stoppen een naam te geven en precies te omschrijven. Ik ben daar véél tijd aan kwijt geweest, meer dan het programmeren zelf.

Laten we binnen hetzelfde voorbeeld blijven: je wilt een "error message" laten zien aan de gebruiker, maar dat bericht kan op allerlei plekken, of in verschillende kleuren, dus dat moet je allemaal doorgeven aan die functie. 

Maar ook dat is niet ideaal. Véél comments. Tevens moet je _onthouden_ of constant _refereren_ wat deze eigenschappen zijn, in welke volgorde ze staan, en wat je moet invoeren als je eentje overslaat.

**Het derde trucje:** geef de parameters zinvolle namen, stop ze dan in één "genoemd object", en dat gaat de functie in. Alle talen hebben zoiets, maar meestal is het een van de laatste dingen die je leert.

Je kan makkelijk eigenschappen overslaan als je er niks mee doet (en/of ze zijn de standaardwaarde). Je stopt dingen erin _met naam erbij_, dus je weet wat je aan het doen bent. Geen extra regels uitleg nodig, geen lange lijst van losse parameters.

Wederom kan je nu denken: maar wat als ik vergeet wat elke parameter precies doet? Wat als ik vergeet wat de functie allemaal kan gebruiken? De oplossing lijkt dan altijd om toch dat hele blok uitleg erbij te doen. 

Maar de oplossing is, uitzonderingen daargelaten, om je code beter op te schrijven. Zodat je even tien seconden de _functie_ bekijkt en precies weet wat je moet doen, in plaats van dat je tien seconden besteed aan het _lezen_ van de comment erboven. 

Dit word je niet geleerd. Je krijgt strafpunten als je niet die lange comment erbij zet. Maar het maakt al je code honderd keer beter als je het weet.

{{% example %}}
sterker nog, richting het einde van mijn studie deed ik nog een ander "leenvak" van informatica waarbij we programmeerden. (Ik heb zelf Wiskunde gestudeerd.) Ik heb tweemaal géén punten gekregen voor een huiswerkopgave, omdat mijn oplossing niet degene was die zij wilden. 

Mijn oplossing werkte. Ik kon het bewijzen, zowel theoretisch (tekst en uitleg) en praktisch (schrijf de code en je ziet het resultaat). Ik had deze techniek al honderd keer gebruikt in mijn vorige projecten. Ik was _blij_ dat deze kennis eindelijk van pas kwam en dat ik iets heel goed kon!

Maar nee, je doet niet exact wat zij willen, dus dan maar geen punten en ze weigeren er verder nog naar te kijken. (Natuurlijk heb ik dit laten weten. Dat verandert vrijwel nooit iets.)
{{% /example %}}

## Wanneer zijn comments dan wél goed? 

Die situaties zal je uit ervaring leren. Dat kan een schoolboek je ook zeker niet vertellen, en als dat al gebeurt, ga je dat echt niet allemaal onthouden en herkennen in je eigen werk.

Een voorbeeld: verschillende browsers doen soms dingen op verschillende manieren. Dus code die werkt voor alle browsers ... werkt misschien nét iets anders in Firefox. (Nah, meestal is het Internet Explorer of Safari die de boel verpest. Als je websites maakt leer je die te haten met een passie.) Die andere browser doet iets raars, heeft een uitzondering nodig die je ontdekt na urenlang zoeken en dingen proberen.

Ja, dit ga je niet superduidelijk opschrijven. Niet op een manier dat je een half jaar later begrijpt waarom je het in hemelsnaam zo hebt gedaan. Niet op een manier die logisch is en waar anderen begrip voor hebben. (Comments worden nuttiger zodra je in teams aan dezelfde code werkt.)

Dus je laat een comment achter over _waarom_ het zo raar is, over _welk deel_ essentieel is en dus niet moet worden veranderd. 

## Conclusie 

Deze dingen maken echt een wereld van verschil. De paar trucjes die ik heb verteld maken je code minstens duizend keer beter, korter, duidelijker, flexibeler, noem het maar op. Je gaat van "ik kan een beetje programmeren" naar "hé ik kan best wel heel professioneel programmeren". (Er zijn natuurlijk nog véél meer trucjes.)

En al die dingen worden _niet geleerd_ of juist _actief afgeleerd_ door hoe ons onderwijs werkt en programmeren probeert aan te leren.

Je kan een informaticadiploma hebben met goede cijfers en geen reet bereiken bij je eerste serieuze programmeerproject. Want jij besteedt 80% van je tijd aan het schrijven van ellenlange paragrafen uitleg die een week later zijn omgezet in leugens die verwarring zaaien. Maar je weet niet beter, want dit heb je geleerd, en dit trucje moest je keer op keer herhalen voor een acceptabel punt.

{{% remark %}}
Een groot deel van een informaticastudie gaat natuurlijk over logisch denken, algoritmes, oplossingen bedenken en (theoretisch) bewijzen dat ze ook echt een oplossing zijn. Dát is allemaal super nuttig en maakt je potentieel een hele goede programmeur. 

Eigenlijk is het heel simpel: programmeren bestaat voor 99% uit beter leren nadenken. Gelukkig zijn er steeds meer mensen die de eerste 10 weken van hun cursus programmeren niet eens de computer erbij pakken, want de woordjes uiteindelijk intypen is maar bijzaak.
{{% /remark %}}

Een uitspraak die ik fijn vind is: "_write code that expresses intent"_ 

De code moet zeggen wat het _hoort te doen_. Niet wat het _denkt dat het misschien doet_. Het moet zeker niet _niks_ zeggen over zichzelf (waardoor je dus al die comments nodig hebt).

Maar je raadt het al: deze filosofie, deze insteek, moet je al helemáál niet mee aan komen zetten op school.

Ons onderwijssysteem brengt mij gewoon in de war. Enerzijds denken ze héél ver vooruit ("je moet al deze dingen nu leren, want heeeeeel misschien heb je het over twintig jaar een keer nodig!"), anderzijds lijkt het gemaakt door peuters die alleen willen doen wat het eerste in hen opkomt ("programmeren is stom, met comments kan je tenminste jezelf dingen duidelijk maken, dus daar gaan we 100% op inzetten!). 

Het huidige systeem, met al z'n fouten, _kan_ alsnog de dingen leren die ik hier noemde. Of minstens toestaan dat mensen het gebruiken. Makkelijk zelfs. Maar ze doen het niet, want daadwerkelijk nadenken over de praktische toekomst van een programmeur gaat te ver.

Dat was mijn betoog dat enerzijds ging over het onderwijssysteem en anderzijds probeert om je te leren hoe je goed programmeert :p 

Ik moet mijn blog/artikelen meer focussen op één ding, ik weet het.