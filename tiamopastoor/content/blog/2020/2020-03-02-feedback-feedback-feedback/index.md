---
title: Feedback, feedback, feedback
author: tiamopastoor
date: 2020-03-02T16:00:16+00:00
language: nl
categories:
  - Anecdotes

---
Vandaag was een zwarte dag.

Ik had extra hard gewerkt om al mijn studiewerk op tijd af te krijgen, en om mijn laatste mobiele spelletje helemaal klaar te zetten voor publicatie, zodat ik vandaag de hele dag kon werken aan mijn spannende nieuwe project!

Voor dit project wilde ik een nieuw programma uitproberen. Niks bijzonders, gewoon een nieuwe software om een creatieve impuls te geven aan mijn spelletjes.

Ik downloadde dit programma, opende een leeg project, typte een paar héle simpele regels code, klikte op "build and run" ...

... en er gebeurde niks.


Was ik dan gek geworden? Nee, deze code klopte sowieso, ik had dit al honderdduizend keer geschreven om iets te testen. En anders had hij wel een error gegeven.

Had ik misschien een verkeerde versie gedownload? Voor de zekerheid downloadde ik de laatste vijf publieke versies van het programma en testte ze allemaal uit. Nog steeds niks.

Had ik het verkeerde knopje te pakken? Nee, dit was letterlijk het enige knopje in de interface dat hiermee te maken had.

Had ik iets anders gemist? Tja, dan maar voor de derde keer de hele documentatie nalezen en de lijst van veelgestelde vragen afgaan. En, niet geheel verrassend, had ik niks gemist en was dit dus ook niet de oplossing.

Waarom gebeurde er niks? Als er iets mis was, zou hij dan niet iets van een bericht of _error_ moeten geven?

Ik heb _urenlang_ alles aangezet, uitgezet, opnieuw geïnstalleerd, opnieuw getypt, opnieuw opgestart, maar het programma deed gewoon helemaal niks. "Build & Run" betekende dat het programma eventjes een seconde iets leek te gaan doen ... om vervolgens het bericht "Program done" uit te spugen.

Maar het _program_ was helemaal niet _done_. Er was helemaal geen _program_!

's Avonds laat, toen mijn humeur al onder het vriespunt was gezakt en ik van plan was dit hele spel maar op te geven, kwam ineens het antwoord.

Ik bezocht een ander deel van de officiële website van dit programma, maar ik mocht er niet in. Mijn browser (Firefox) dacht dat het een onveilige website was, want het certificaat was verlopen.

(Voor wie niet weet hoe dit in elkaar steekt: websites kunnen een certificaat aanvragen dat ze kunnen gebruiken om hun verkeer te _versleutelen_, wat betekent dat hun gebruikers veilig zijn tegen veel soorten hackersaanvallen. Als dit certificaat niet klopt, op wat voor manier dan ook, dan wil de browser dus niks met de website te maken hebben en houdt je tegen.)

Hmm. Dat was vreemd. Deze website was sowieso te vertrouwen, mijn computer was niet gehackt (en anders lijkt het me sterk dat hackers me willen weerhouden van het maken van een computerspelletje), dus waarom mocht ik er niet in?

Na wat zoekwerk kwam ik bij een waarschuwingsbericht op diezelfde website:

> **Forum, build and download server down**

The forum, build and download servers are temporarily unavailable due to an expired SSL certificate. Click here for a workaround and more information.

Aha! Wat ik dus al dacht! Delen van hun servers (en dus website) zijn onbereikbaar vanwege een verlopen certificaat!

Maar ... ik wist helemaal niet dat het via servers moest. Waarom moet ik via een online server om een simpel stukje code (dat niks met Wi-Fi doet) uit te voeren?

Waarom heeft dit programma _op geen enkel moment_ tegen mij gezegd dat het een internetverbinding nodig heeft om het spelletje uit te voeren?

En waarom heeft het mij _bij al die pogingen_ niet ingelicht dat het geen verbinding kon maken met deze essentiële server?

**Dat, mijn beste lezers, is waarom feedback belangrijk is.**

Heel leuk zo'n berichtje op de homepage, maar dat is niet bepaald de eerste plek waar ik ga zoeken als iets niet werkt. ("Hmm, mijn spel wil niks doen---even kijken of de voorpagina vol marketingonderdelen precies het antwoord op mijn vraag bevat!")

Daarnaast heb ik geluk dat ik verstand heb van die SSL certificaten, anders was dit hele bericht überhaupt hocus-pocus geweest. (Ik had misschien gedacht dat het niet op mij van toepassing was, of dat het over iets heel anders ging.)

Wat was de "workaround"? Die vond ik dan wel weer grappig. Hun certificaat was 28 Februari verlopen, dus je moest gewoon de tijd op je computer terugzetten naar iets daarvoor. (Ik had 18 Februari gedaan, want toen was ik jarig, en dat---eh---is wat professionele programmeurs doen.)

... en toen werkte alles meteen! Precies zoals het hoorde! Binnen drie seconden het spelletje gebouwd! Geen enkele fout in mijn hele code of wat dan ook!

Feedback, feedback, feedback.

Deze hele (eerste) aanvaring met dit programma heeft me bijna in één klap voorgoed weggestuurd. Het programma schijnt verder heel goed te zijn, dus ik geef het nog een tweede kans. Maar het scheelde héél weinig.

(Je denkt nu misschien dat ik expres de naam van het programma weglaat, om ze niet in een kwaad daglicht te zetten of iets dergelijks, maar dat is niet waar. Waarschijnlijk plaats ik binnenkort nog meer over dit programma, dus het heeft geen zin om mysterieus te doen. Het programma is **Defold** (game engine), beheerd door **King** (de ontwikkelaars van Candy Crush en andere monstrositeiten). Ik heb een ongelofelijke hekel aan King en hun praktijken, maar Defold schijnt echt goed te zijn, dus daar moet ik me maar even overheen zetten.)

Wat leren we hiervan?

Als je een service ontwikkelt (app, website, product, game, etc.), geef dan over ALLES wat ook maar een BEETJE belangrijk kan zijn, genoeg feedback. Verwacht niet dat gebruikers je meteen mailen als iets mis is, of direct naar de juiste (voor)pagina gaan, want dat gaat niet gebeuren.

En als je programmeert, wees lief voor jezelf en doe hetzelfde. Zorg dat bij _elke mogelijke error_ een betekenisvol berichtje wordt achtergelaten, anders verlies je misschien ook een hele dag op zoiets kleins en onbenulligs.

Zo, dat wilde ik even mededelen. Nu ben ik mijn weekend kwijt en begint het nieuwe project jammer genoeg pas over een week :p

{{% remark %}}
Het is nu 2021 en ik kwam dit oude artikel van mezelf tegen. Ik kan mededelen dat mijn spellen inmiddels weer een stuk groter en professioneler zijn geworden. En waar denk je dat ik 50% van mijn tijd aan besteed? Precies. Feedback geven, dingen uitleggen, zorgen dat spelers over niks in verwarring raken. (Want dat heeft het grote risico dat ze het spel minder leuk vinden en misschien zelfs opgeven.) Want het is zinloos om een geweldig spel te maken, als niemand het begrijpt en niemand het gaat spelen. Dus dat getal van 50% is helemaal niet overdreven.
{{% /remark %}}