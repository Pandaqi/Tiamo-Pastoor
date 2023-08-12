---
title: Waarom doet Windows dit?
author: tiamopastoor
date: 2022-05-10T14:00:00+00:00
language: nl
categories:
  - Anecdotes

---
Ongeveer toen ik aan mijn studie begon, en dus mijn studielaptop kreeg, kocht mijn broer precies dezelfde laptop voor zichzelf. 

Dat is nu bijna acht jaar geleden.

Onlangs wilde ik die laptop gaan gebruiken, maar toen ik hem opstartte was hij tergend langzaam. Iets dat niet zou moeten gebeuren. De laptop is namelijk nauwelijks gebruikt én hij had een versie met meer geheugen en snelheid en alles. (Zeg maar de "premium" versie, waar mijn universiteit de "basic" versie aan studenten gaf :p)

Natuurlijk waren er tal van programma's die automatisch opstartten, en dus alles vertraagden, maar dat zou een laptop niet _zoooo_ langzaam maken. Toen ik ze allemaal had uitgezet en gedeïnstalleerd, gebeurde het inderdaad nog steeds.

Na een uur _proberen_ iets gedaan te krijgen, zie ik ineens de melding: "Gefeliciteerd! U heeft nu de nieuwste versie van Avast Antivirus!"

Aaaargh. Altijd hetzelfde. Achter de schermen had dit programma besloten zichzelf op te starten, een gigantische update uit te voeren, en de gehele computer te scannen op virussen, _zonder dit te laten weten of te vragen_. Antivirus programma's zijn verschrikkelijk. Dus nadat ik het programma had overtuigd dat ik het toch écht weg wilde, kon ik het verwijderen.

{{% remark %}}
Pro tip! Je hebt geen antivirus nodig. Zolang je geen hele domme beslissingen maakt online, heb je sowieso weinig problemen. Anders lost de standaard antivirus van Windows het wel op. Antivirus maakt je computer vooral langzamer en instabieler, omdat ze zich letterlijk _overal_ mee gaan bemoeien, volgens hun eigen regels en patronen.

Als je erachter komt dat er écht iets mis is, gooi je snel je internet uit en wist je hele computer. Lost alles op, kost niet veel tijd, voorkomt erger. Want je maakt backups, toch? Toch?
{{% /remark %}}

Maar het loste niet alles op. Nog een uur dingen proberen, maar alles loopt vast, gaat langzaam, het is onmogelijk. Dan krijg ik het volgende bericht: "Updates succesvol geïnstalleerd."

_Waarom doet Windows dit!?_ Een laptop is minstens een jaar niet gebruikt. Het start super langzaam op, kan bijna niks, wordt al van voor naar achter gescand door een programma. En dan besluit Windows om _zonder het te vragen maar even gigantische updates te downloaden en uitvoeren_.

Het wordt nog stommer als je bedenkt dat ik van plan was om de hele computer leeg te maken en te upgraden naar de nieuwste versie. Deze laptop werkte namelijk nog op _Windows 7_. Die wordt inmiddels al niet meer ondersteund door Microsoft, dus al die "updates" waren van 2019 ofzo.

En zodra ze _eindelijk_ geïnstalleerd waren? Toen mocht ik eindelijk beginnen met _al die updates weer van de computer gooien_.

Maar gaat dat zo makkelijk? Natuurlijk niet!

Microsoft heeft een "tool" gemaakt om van oudere versies naar een nieuwere te gaan. Hartstikke tof. Maar wat ik ook probeerde, het wilde niet opstarten, en gaf als enige error "er is iets misgegaan, maar we weten niet wat"

Top. Ik zoek het op en vind alle standaardoplossingen: verwijder de folder waar Windows stiekem backups van updates opslaat, start de computer op in "safe mode"

Het werkt allemaal niet. Dat zeggen al die anderen ook op al deze suggesties. Totdat iemand het volgende zegt: "De tool heeft een folder genaamd _eHome_ nodig. Maar Windows maakt die folder aan met de verkeerde hoofdletter, namelijk _ehome_. Dus het mag de folder niet gebruiken en crasht!"

Iedereen blij. Dit lost het probleem op voor al die anderen: verwijder die verkeerde folder (of hernoem hem) en alles is prima.

Maar niet voor mij! Wat ik ook probeerde, ik mocht het niet verwijderen. Eerst omdat _ik_ (de enige gebruiker van de computer met 100% rechten) blijkbaar _niet_ de baas was van dit bestand, dat was _"TrustedInstaller_", wat eerlijk gezegd helemaal geen vertrouwen wekt en klinkt alsof je wordt gehackt.

Toen ik dat had opgelost, mocht ik het niet verwijderen omdat de folder door _iets anders in de computer wordt gebruikt_.

Aan het einde hiervan had ik twee vragen:

  * Waarom is Windows "case insensitive"!? Waarom zijn de folders "eHome" en "ehome" voor Windows  _op sommige momenten precies hetzelfde_, maar op andere momenten _andere folders die problemen veroorzaken_!? Wie heeft deze geweldige _design decision_ gemaakt?
  * Hoe moeilijk was het om, in plaats van vage errors, even te _laten weten waardoor het bestand wordt gebruikt!?_ Hiermee kan je niks! Het is alsof je naar een winkel gaat en vraagt of ze nog iets in het magazijn hebben, de medewerker loopt weg, je wacht een kwartier terwijl het klinkt alsof allemaal dingen kapotgaan en exploderen achter de deur, en het enige wat ze doen is een briefje op de deur plakken met "er ging _iets_ mis, _ergens_, dus ga weg" en de winkel sluiten.

Nou, goed, wat doe je dan? Je download Windows 10 zelf, gebruikt een hulpprogrammaatje om het bestand te openen alsof er een CD in je computer zit (had ik al gezegd dat de laptop en het systeem oud zijn?), en installeert het op die manier.

Ik wacht. En ik wacht nog langer. 

En dan komt het bericht: "We kunnen niet verdergaan totdat je programma A verwijderd. Het is niet compatibel met Windows 10."

Wat was programma A? _Een of ander hulpprogramma voor Windows antivirus dat ze zojuist met al die ongevraagde updates hadden geïnstalleerd!_ Aaaaaah. Aaaaaah.

Ik heb uren gewacht totdat Windows rotzooi op de computer had gezet, dat me vervolgens weer urenlang _tegenhield_ om Windows te gebruiken en updaten!

Soms snap ik niet hoe beslissingen worden gemaakt bij Microsoft.

De computer is inmiddels geüpdatet. Iets dat een uurtje had moeten duren werd een dagenlang proces. Ik koos ervoor om gewoon alle bestanden/programma's compleet te verwijderen en vers te beginnen. De laptop is nu retesnel en als nieuw. Was dat nou zo moeilijk, Windows?