---
title: "Principi e Dati F.A.I.R.: cosa sono? (Perché) ne abbiamo bisogno?"
date: 2020-11-04
categories: 
  - "job"
  - "technology-ict"
tags: 
  - "data-science"
  - "fair"
  - "fairdata"
  - "integration"
  - "interoperability"
cover:
  image: "images/1570195415_featured.jpeg"
  alt: ""
  caption: ""
  relative: true
---

Da qualche anno a questa parte - diciamo circa tre anni - nel mio ambito si sente spesso parlare dei **principi F.A.I.R: a**mati dai funzionari Europei, guardati con sospetto dagli ingegneri informatici, approvati in parte dagli scienziati, **questi principi hanno un consistente impatto negli ambiti della ricerca che in qualche modo hanno a che fare con i dati** e la loro condivisione.

_Domanda_: quale ambito della ricerca non ha a che fare con i dati e loro distribuzione? _Risposta_: quasi nessuno. _Inferenza logica_: i principi FAIR (“evviva!" oppure “ahimé") riguardano un po’ tutti i ricercatori.

Cerchiamo allora di capirne qualcosa in più e vediamone alcune caratteristiche. E cerchiamo di farlo in maniera semplice. Per chi fosse interessato a documenti più dettagliati rimandiamo a [WikiPedia](https://en.wikipedia.org/wiki/FAIR_data), ai [documenti di FORCE11](https://www.force11.org/fairprinciples) oppure ai [Report Europei.](https://ec.europa.eu/info/sites/info/files/turning_fair_into_reality_0.pdf)

<!--more continua a leggere-->

## Benvenuti al mondo, principi FAIR!

Quando ero bambino ebbi le mie prime crisi intellettive di crescita, quelle che ti portano a superare concetti semplici con una comprensione più profonda della realtà, quando mi imbattei con il concetto di "data di riferimento”. Le citiamo continuamente e quotidianamente: la fondazione di Roma (21 Aprile 753 a.C.), la nascita di Cristo (25 Dicembre anno 0), l’inizio del primo conflitto mondiale (28 luglio 1914). Eh sì, noi esseri umani abbiamo bisogno, per orientarci, di fissare punti di riferimento semplici che ci permettano di individuare un prima e un dopo. In realtà, certi processi bollono in pentola da tempo, e poi ad un certo punto - indefinito nel tempo - puff: accadono.

![](images/laptop-notebook-computer-work-person-people-1250101-pxhere.com_.jpg)

Anche per i principi FAIR vale la stessa logica. C’era nell’aria l'odore di FAIR da qualche tempo, specialmente nella comunità [FORCE11](https://www.force11.org/about), poi qualcuno ha scoperchiato il calderone scrivendo un bell’articolo su Nature Scientific Data: “[The FAIR Guiding Principles for scientific data management and stewardship](https://www.nature.com/articles/sdata201618)”. E così, il 15 Marzo del 2016, nascono ufficialmente i principi FAIR.

## Belli. Ma di che trattano?

_..._ verrebbe da dire _"_della vita, dell’universo e tutto quanto". \[[Libro fuori tema](https://www.amazon.it/s?k=la+vita+l%27universo+e+tutto+quanto&adgrpid=52987666496&gclid=Cj0KCQjw_absBRD1ARIsAO4_D3tCc_syft3Zzcqjx3GFQCS74KIu3kZ5UtQ8iux6lNPAwEcdEDFFCwEaAlChEALw_wcB&hvadid=255188146990&hvdev=c&hvlocphy=1008736&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=13782611458205053370&hvtargid=kwd-420296793356&hydadcr=28371_1800957&tag=slhyin-21&ref=pd_sl_25ln8nu514_e), ma comunque carino\]. La risposta, chiaramente faceta, contiene tuttavia qualche elemento di verità, nel senso che i principi sono piuttosto generici e - visti dalla prospettiva di chi implementa sistemi di distribuzione dati - potenzialmente ambigui. D’altro canto hanno il merito di non prescrivere tecnologie e di lasciare libertà tecnica ed implementatitva. I principi ci dicono che i dati devono essere:

- **Findable**: ricercabili nella loro interezza;
- **Accessible**: deve essere possibile accedere ai dati stessi e non solo ricercarli;
- **Interoperable**: l’interoperabilità dei dati intesa come la possibilità di diversi sistemi di leggere e "capire" i dati, deve essere assicurata;
- **Reusable**: i dati devono essere strutturati in maniera tale da essere riutilizzabili, aspetto che include elementi legali quali le licenze d’uso.

> Ecco quindi l’acronimo **F.A.I.R.: Findable, Accessible, Interoperable, Reusable.** Un insieme minimo di principi per rendere consistenti e riutilizzabili i dati della ricerca.

<!- -nextpage- ->

## E in pratica?

Tutto parte dalla constatazione che **siamo sommersi dai dati e li vogliamo usare**. Ma i dati sono un po’ come gli abitanti del pianeta terra, e dire “diamo da mangiare a tutti” è bello, ma se dai il Chili con Carne a mia nonna, le verze lesse al messicano e les onduillettes a mio fratello, entrambi i tre (come diceva la barzelletta sui carabinieri) te le tirano dietro.

Avere tanti dati da usare è interessante, ma se sono diversi, difficili da trovare e processare, se vengono forniti in formati diversi e con significati diversi, è impossibile trarne profitto (scientifico, sociale ed economico). E bisogna allora fare un po’ di ordine nella giungla di dati, strutture, modi di condividerli. Scienziati e ricercatori hanno infatti delle fissazioni che ci possono cambiare un po’ la vita, ad esempio quella di trovare dei pattern ricorrenti su grandi moli di dati provenienti da sensori sparsi per il pianeta. Analizzare il dato per prevedere cosa succederà e trarne vantaggio. Già succede nella ricerca, ad esempio in ambito climatico, dove l’analisi di dati atmosferici permette di stabilire schemi frequenti e prevedere e circoscrivere - sempre con un margine di errore - oscillazioni climatiche o eventi catastrofici come [El Nino](https://www.carbonbrief.org/extreme-el-ninos-double-frequency-under-one-point-five-celsius-warming-study). Non è fantascienza, e in ambito commerciale se ne fa largo uso. Uno degli esempi più semplici è quello delle heat maps, vale a dire tonnellate di dati raccolti da holding come Amazon che descrivono l'utilizzo dei servizi sui siti web. I dati vengono elaborati per creare mappe delle zone più cliccate di una pagina (guardate che carine [quelle di wikipedia](https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiBzI-R1YLlAhUCr6QKHXt1CrMQjRx6BAgBEAQ&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AEyetracking_heat_map_Wikipedia.jpg&psig=AOvVaw0Rcr1yA09GLAFRFr8GAQqt&ust=1570280569943051 "Wikipedia page heat maps")), e vengono poi sfruttate per capire dove convenga - ad esempio - inserire banner pubblicitari. Ecco bene, ma se i dati arrivano oggi i ASCII, domani in formato binario, dopodomani in tabelle excel, la settimana prossima su documenti word, come si fa ad armonizzare tutto e a darli in pasto ad un software (che tipicamente ha bisogno di dati di input standardizzati)? E allora ecco lo _sforzo enorme, intellettuale ed economico, per dare una ratio ai dati scientifici._

Qui la parola d’ordine per i dati è **machine-readable:** i dati devono poter essere letti da una macchina, che poverina non sa distinguere tra maiuscole e minuscole, non sa che “temperatura” e “gradazione” significano la stessa cosa per il ricercatore Arnolfo e per la ricercatrice Berenice.

Queste ed altre più profonde (e serie) considerazioni hanno portato a

> specificare il dato come un **Data Object,** vale a dire una tripla che contiene: 1. il dato stesso (es. file word), 2. il metadato, 3. un identificativo univoco
> 
> **Data Object <dato, metadato, PID>**

Quindi concretamente produrre dei dati FAIR significa fare uno sforzo di armonizzazione, di descrizione dei dati e di progettazione dei sistemi che li rendono disponibili che permetta di avere:

- formati di dati comuni e standard
- formati di metadati comuni e standard
- identificativi univoci dei dati (e metadati) che mi permettano di ritrovarli
- licenze aggregate nei metadati
- schemi semantici definiti che mi permettano di capire a cosa si riferiscono i valori dei dati e dei metadati
- sistemi informatici per accedere e ricercare i dati
- ...e altri aspetti che possiamo approfondire più tardi

## Due, proprio due, cosine tecniche

Magari tre, che se poi non interessano si può sempre saltare il paragrafo. Per **metadati**, qui utilizziamo una definizione generica di “**dati che descrivono i dati**”.

![black-and-white-technology-wheel-gear-industrial-machine-818429-pxhere.com.jpg](images/black-and-white-technology-wheel-gear-industrial-machine-818429-pxhere.com_.jpg) Sono quelli associati per esempio ai file mp3: artista, produttore, data e ora di produzione del file. Sui metadati c’è una comunità piuttosto attiva che si scervella per trovare gli schemi più adatti in un certo ambito. Penso ad esempio a [DCAT-AP](https://joinup.ec.europa.eu/release/dcat-ap/11), un specifica di termini basata sul vocabolario del catalogo dati W3C ([DCAT](https://www.w3.org/TR/vocab-dcat/)) che ha come scopo la descrizione dei cataloghi di dati pubblici in Europa. Seguendo questo schema, si ha una chiara definizione di tutto ciò che un file contiene. Se quindi ad un certo punto io, povera macchina nonpensante che so solo leggere i file riga per riga e confrontare le parole con stringhe di riferimento già in memoria, leggo:

```
dct:title
```

allora so che chi ha compilato il file (essere umano oppure altra macchina, poco mi interessa) fa riferimento al titolo del dataset nello standard “dct", e posso quindi metterlo in grassetto, in rosso al centro della pagina, perché è un titolo. È un esempio semplice ed apparentemente banale, ma le cose funzionano proprio così.

Altra informazione: quando si parla di **standard** in questo ambito, ci si riferisce generalmente a sistemi accettati dalle comunità o da organismi di standardizzazione (la famosa ISO - **International Organization for Standardization** oppure il [W3C](https://www.w3.org/), cioè gli inventori e i “manutentori” del web**).** Un dato con un formato standard è quindi un dato che può essere interpretato in maniera univoca poiché si conosce in anticipo la sua struttura.

Altra cosina importante: i **principi FAIR non sono solo filosofie o un acronimo, ma vengono dettagliati** al fine di specificarli meglio. Quindi ci sono dei sotto-principi per ognuna delle lettere dell’acronimo. Solo per la _Findability_ abbiamo i seguenti (in inglese per semplicità):

- F1. (Meta)data are assigned a globally unique and persistent identifier
- F2. Data are described with rich metadata (defined by R1 below)
- F3. Metadata clearly and explicitly include the identifier of the data they describe
- F4. (Meta)data are registered or indexed in a searchable resource

Ho quasi mantenuto la promessa. Sono solo tre. Poi certo, se ci sono domande nei commenti si può espandere.

## I principi F.A.I.R. sono davvero “fair"?

Innanzitutto, se siete arrivati fino a qui, complimenti. Avete pelo sullo stomaco. Oppure siete semplicemente interessati all’argomento. Approfondiamo quindi ancora un po’ la tematica FAIR utilizzando qualche domanda. L’acronimo FAIR gioca sulla polisemanticità de termine. FAIR infatti è una parola inglese che significa anche “giusto”, “equo”, suggerendo che questi principi sono imparziali.

> Domandiamoci allora: davvero i principi FAIR sono equi? Se li consideriamo come un insieme minimo di direttive che può essere applicato a tutti, certamente sì.

Se inoltre vengono applicati a tutti in maniera imparziale - possono dare vita a degli ecosistemi “informatici" in cui tutti i produttori di dati sono allo stesso livello, stabilendo una sorta di equità informatica. Un concetto affine al più popolare [peer to peer](https://it.wikipedia.org/wiki/Peer-to-peer).

Il sogno è quindi quello di avere centri di distribuzione dati intelligenti sparsi sulla rete mondiale che integrano funzionalità di ricerca e accesso ai dati, che sono auto-descrittivi poiché fanno uso di standard e metadati. E poi avere una serie di agenti (umani o macchine) che utilizzano (“_to consume_” è il termine tecnico inglese utilizzato) questi dati, per farci… quello che vogliono: analisi, produzione di nuovi dati correlando quelli esistenti, processamento etc.

Ma poiché il diavolo sta nei dettagli - adesso va di moda questa frase - bisogna fare considerazioni su dati di realtà. E’ ad esempio legittimo chiedersi: chi decide quando un dato è “Findable”? Quali sono le specifiche tecniche che possono determinare univocamente la Findability di un dato? E ancora: la Findability è un principio “booleano”, vale a dire “si/no”? Oppure ci sono diversi gradi di “Findability”?

![](images/diving-biology-fish-shark-dive-nassau-496028-pxhere.com_.jpg)

Pensiamo assieme ad un caso d’uso. Supponiamo che il dato in questione sia la vostra foto. Una bella immagine .jpeg di voi alle Bahamas che vi immergete con lo squalo caricata da qualche parte.

Su Facebook, sul vostro blog personale, sul profilo di qualche servizio a cui siete iscritti o altro. Bene, quando cercate su Google il vostro nome, esce fuori una serie di risultati. Forse cliccando qua e là troverete anche la vostra foto. E quindi? La vostra foto è “trovabile”? _Risposta:_ Si! _Domanda:_ Sicuri? E se foste una macchina? Non vorreste dei metadati che descrivono che il contenuto della foto siete proprio voi? (e non lo squalo...). _Risposta_: ehm.. _Domanda incalzante:_ e se invece la trovate, ma magari voi stessi non avete la licenza per usarla perché Facebook decide di considerare suo tutto il materiale che uploadate sul social network, possiamo dire che la vostra foto è “Accessible”? _Risposta:_ ehm … ehm...

Che è poi la conclusione giusta. Perchè quando si scende nel dettaglio si accede ad un grado di complessità in cui dare risposte chiare e perentorie diventa difficile, se non si tengono in considerazione i molteplici aspetti della quesitone. Specialmente se si parla con le macchine. E qui mi viene da dire che [James Cameron](https://it.wikipedia.org/wiki/James_Cameron) ci ha preso in “Terminator”, dove rappresenta macchine sceme e per questo inesorabili e disumane. Ecco, un _agente intelligente_ (un software in rete) che analizza i dati di temperatura prodotti dalla vostra caldaia collegata all’_Internet of Things_ è decisamente un piccolo terminator: se non gli date i dati nel formato che vuole lui, o non li descrivete in quel modo preciso e pedante che solo le macchine sanno avere, vi termina. Click. Non esistete più. I vostri dati non hanno senso. Si scollega. Povera caldaia. Lei che invece continua a funzionare (inesorabile anche lei, visto che è stata programmata per girare fino a che il gas non finisce o qualcuno non chiude il rubinetto…).

Un dato quindi risulta FAIR anche in funzione della precisione e del dettaglio con cui la “FAIRness” viene valutata.

> Più la definizione di FAIR è condivisa, tecnicamente significativa e poco soggetta ad interpretazioni, e più i principi saranno applicabili in maniera equa a tutti.

## Perché hanno avuto successo?

È legittimo chiedersi a questo punto il motivo per cui i principi riassunti dall’acronimo FAIR abbiano avuto successo. Pensandoci bene, la storia poteva andare diversamente. Ad esempio si potevano espandere ulteriormente best practices e regole implementative dell’open Data. Oppure si poteva spiegare e pubblicizzare meglio solo l’interoperabilità (come la concepiscono gli ingegneri informatici) e i metadati per la ricerca. Altre strade erano possibili, ma invece gli eventi ci hanno condotto ai principi F.A.I.R. Perché?

Ci sono considerazioni da fare su diversi piani. **Dal punto di vista comunicativo**, i principi FAIR sono vincenti. L’acronimo è infatti semplice da ricordare ed ha questo significato aggiuntivo di “equo”, che fa pensare a regole ugualmente ed equamente applicabili. **Dal punto di vista di endorsement,** hanno avuto l’appoggio di personaggi e centri di ricerca importanti. Quindi è un po’ la solita storia: se il contadino di Velletri dice che piove, lo ascoltiamo e magari ritiriamo anche i panni dentro casa, per sicurezza. Ma se me lo dice il colonnello Bernacca (chi non lo conoscesse - ma anche chi lo ricorda - può vedere il suo fantastico [video sulle previsioni](https://www.youtube.com/watch?v=CUzEiwI6YgU) dopo l’uragano David - 1979) allora è legge vergata su marmo. **Dal punto di vista di sostegno finanziario**, i principi sono diventati un criterio fondamentale per l’Unione Europea, specialmente per il finanziamento dei progetti H2020 in ambito European Open Science Cloud (acronimo EOSC, che ha [grandi ambizioni](https://it.wikipedia.org/wiki/European_Open_Science_Cloud) ed un [certo grado di complessità](https://ec.europa.eu/research/openscience/index.cfm?pg=open-science-cloud)). E quindi - ca va sans dire - tutti i progetti adesso prevedono che quando vengono usati, prodotti o gestiti dati, queste attività seguano FAIR.

## Lo stato attuale: principi FAIR e realtà

I principi sono affascinanti. Ma per rendere tangibile la visione, bisogna calarla nella realtà.

Difficilissimo riassumere la realtà dei dati pubblici di ricerca Europei in maniera breve e rigorosa. Certamente non da fare in questo post. Ma una considerazione molto generale si può fare: i dati prodotti dall’amministrazione pubblica e dalla ricerca, in Europa, sono una grande giungla dove si sta cercando di fare ordine, con fatica, implementando policy appropriate, pensando alla sostenibilità delle infrastrutture, creando un cross-fertilization di competenze, finanziando progetti cluster,  etc. etc.

E quindi in pratica?

Bhé dal punto di vista ingegneristico e informatico non è facile dare direttive poiché in Europa si è sempre molto inclusivi e si tenta di trovare un equilibrio per rispettare le istanze di tutti.

Ma è chiaro che adesso, su vari fronti, ci sono persone che cercano di sporcarsi le mani dichiarando apertamente cosa è necessario fare dal punto di vista tecnologico per implementare i principi FAIR.

Anche l’Europa si è data da fare, sia pubblicando documenti come [Turning FAIR into reality](https://ec.europa.eu/info/publications/turning-fair-reality_en) (Report of the Commission FAIR Data Expert Group (FAIR Data EG)), sia aprendo i rubinetti dei finanziamenti per sostenere varie iniziative, come ad esempio [GO-FAIR](https://www.go-fair.org/), [ENVRI-FAIR](http://envri.eu/envri-fair/). Fuori dall’Europa si trovano anche altre iniziative, una per tutte [FAIRSharing.org](https://fairsharing.org/).

La difficoltà più grande è non solo definire in maniera chiara ma allo stesso tempo generica ed inclusiva sistemi che distribuiscano dati FAIR, ma anche utilizzare un approccio che sia comprensibile dai Data Manager e dai dirigenti di ricerca, che spesso hanno un background scientifico in ambiti diversi dall’informatica.

L’architettura client-server, che uno studente della triennale di Informatica è in grado di spiegarti anche in situazioni estreme - ad esempio se svegliato in piena notte con una secchiata d’acqua urlandogli in faccia, a bruciapelo, la richiesta “porta un esempio di protocollo client-server con handshaking!” \[cit. Renato Spigler, il mio prof di Analisi ai tempi dell'università\] - non è una roba che biologi, filosofi e altri possono digerire facilmente. **C’è bisogno di frullare, omogeneizzare, impacchettare e vendere bene.** **Per questo abbiamo pensato alla piramide FAIR.**

## La piramide FAIR e la pace del cervello

Il nostro gruppo di lavoro si è trovato proprio all'intersezione dell'ambito scientifico e tecnico, dove i principi diventano realtà, a dover lavorare su questa FAIR-mess, e adesso che abbiamo qualche annetto di esperienza nello sviluppo di una architettura pienamente compatibile con FAIR, nel progetto [EPOS](http://www.danielebailo.it/epos-integrated-core-services-architecture-basics-tutorial/), abbiamo pensato di creare un prodotto digeribile. Una specie di citrosodina (o Brioschi, per par condicio) FAIR.

**Si tratta della piramide FAIR.**

 

\[caption id="attachment\_3668" align="alignnone" width="3000"\][![FAIR Four-stages Roadmap PYRAMID](images/FAIR-Four-stages-Roadmap-PYRAMID.png)](https://www.frontiersin.org/articles/10.3389/feart.2020.00003/full) Dall'articolo: [Perspectives on the Implementation of FAIR Principles in Solid Earth Research Infrastructures](https://www.frontiersin.org/articles/10.3389/feart.2020.00003/full) DOI: https://doi.org/10.3389/feart.2020.00003\[/caption\]

La piramide descrive un approccio comune da parte degli scienziati e di chi fa il lavoro quotidiano sui dati e i sistemi, basato su quattro livelli:

1. _livello dei dati,_
2. _livello dei metadati,_
3. _livello di accesso_
4. _livello di (ri)utilizzo._

**I dati sono di solito l'attività principale e la ricchezza di scienziati e professionisti dei dati nelle Infrastrutture di ricerca.** Di conseguenza, il primo passo concettuale per ogni scienziato è preoccuparsi dei dati: formati, struttura, descrizione etc. (Liv 1). Una volta che i dati sono gestiti correttamente, si tende ad affrontare concettualmente la sfida della descrizione e dell'identificazione dei dati, al fine di creare le premesse per la ricerca e la contestualizzazione (Liv 2). Poi una volta che i dati sono gestiti, descritti e contestualizzati correttamente per mezzo di metadati, si affronta il problema di come renderli accessibili agli utenti (Liv 3). C'è poi un quarto livello, che va un po' oltre i principi FAIR, che si occupa ad esempio dell'analisi e l'elaborazione dei dati. Qui si aprono scenari interessanti, riassunti dalla domanda: come fa un servizio di processamento a garantire che dati FAIR in input producano in output dei prodotti che sono ancora FAIR?

Appurato che nell'ambito dei ricercatori e delle infrastrutture di ricerca l'approccio è basato su queste quattro fasi, l'esercizio che abbiamo fatto è stato di rimescolare l'ordine dei principi FAIR e di assegnarli ad ognuno dei quattro livelli della piramide. In questo modo sarà più facile per chi deve implementare i principi FAIR capire a quale livello deve agire nella progettazione o nell'upgrade del sistema.

## The End

Insomma, FAIR capita a fagiolo in un'epoca in cui siamo sommersi dai dati e dove, soprattutto in ambito pubblico e di ricerca, c'è bisogno di fare un po' di ordine per realizzare questa visione di un internet dei dati dove le informazioni sono davvero accessibili e analizzabili su larga scala (Big Data).

Implementare FAIR però è davvero complicato quando si tratta di farlo davvero e di sporcarsi le mani con codice, dati, metadati, architetture di sistemi.

Noi per facilitare un po' le cose abbiamo prodotto questa piramide, in cui i principi vengono associati a delle attività più definite.

Ora manca il seguito: chi proverà ad applicarli e a produrre dati davvero FAIR?

Lasciamo la domanda in sospeso... in attesa di un altro post sull'argomento (il cui taglio e contenuti sono influenzabili lasciando un commento qui sotto...).

## Acknowledgements

Images in this post were provided courtesy of [pxhere](https://pxhere.com/)

- Baby & Computer [https://pxhere.com/en/photo/1250101](https://pxhere.com/en/photo/1250101)
- Gears [https://pxhere.com/en/photo/818429](https://pxhere.com/en/photo/818429)
- Header img: [https://pxhere.com/en/photo/1451251](https://pxhere.com/en/photo/1451251)
- Bahamas Shark img: [https://pxhere.com/en/photo/496028](https://pxhere.com/en/photo/496028)

\[jetpack\_subscription\_form subscribe\_text="inserisci la tua email"\]
