---
title: "EPOS Data Portal: una piattaforma FAIR per l'accesso a dati e servizi multidisciplinari delle Scienze della Terra solida"
date: 2021-10-07
translationKey: "epos-data-portal-una-piattaforma-fair-per-laccesso-a-dati-e-servizi-multidisciplinari-delle-scienze-della-terra-solida"
categories: 
  - "job"
  - "technology-ict"
tags: 
  - "database"
  - "epos"
  - "ict"
  - "ingv"
  - "research-infrastructure"
  - "scienza"
cover:
  image: "images/Schermata-2021-10-06-alle-16.27.59.png"
  alt: ""
  caption: ""
  relative: true
---

**Arrivano dei momenti in cui, magari in maniera quasi inaspettata, ci si ritrova a tirare le somme di tutto il lavoro fatto negli anni precedenti.**

Quel tipo di lavoro certosino, fatto di piccole limature quotidiane, di microscopici avanzamenti di cui forse nemmeno ci si rende conto. Anzi, a volte sembra di rimanere fermi. Poi arrivano queste occasioni in cui.... BUMM.... tutto viene illuminato da una nuova luce e il puzzle si ricompone.

E quello che esce fuori è un bel mosaico, con migliaia di tessere minuscole ma piazzate con pazienza e costanza.

Questo è quanto è successo oggi durante la presentazione del lavoro degli ultimi anni presentato al meeting ICT INGV 2021. Presentazione di un lavoro fatto con colleghi fantastici. Alcuni presenti sin dall'inizio, altri arrivati e partiti, altri appena imbarcati... **Un lavoro di squadra non indifferente, di cui possiamo andare fieri.**[](https://doi.org/10.5281/zenodo.5552787)

Ma quindi cosa è stato fatto? Qui sotto riporto abstract e presentazione, come presentate alla conferenza.

La presentazione è dispobile qui: [https://doi.org/10.5281/zenodo.5552787](https://doi.org/10.5281/zenodo.5552787)

**Abstract**

L'integrazione di risorse distribuite su diversi data center  e infrastrutture di ricerca Europee è diventata, nell'ultimo decennio, un passaggio necessario per svolgere in modo efficiente la ricerca multidisciplinare nell'ambito delle Scienze della Terra.

L’integrazione di risorse eterogenee richiede da un lato un “accesso trasparente alla conoscenza e ai dati condivisi” – che è una delle definizioni di “Open Science” \[1\] – dagli "open data provider", dall'altro richiede ai data provider di gestire i dati con infrastrutture tecnologiche sviluppate in accordo con i principi FAIR \[2\].

![](images/Schermata-2021-10-06-alle-16.41.28.png)

In questo quadro EPOS ([www.epos-eu.org](http://www.epos-eu.org/)), European Plate Observing System, si propone come un'infrastruttura di ricerca paneuropea nella roadmap ESFRI (European Strategic Forum on Research Infrastructures) a cui è stato recentemente concesso lo status ERIC (European Research Infrastructure Consortia).

EPOS ha l'obiettivo di integrare secondo i principi FAIR le diverse infrastrutture di ricerca europee per la scienza della Terra solida.

L'architettura per realizzare questa integrazione è costituita da due livelli principali: da una parte un nodo di integrazione accessibile tramite l'EPOS Data Portal, dall’altra i TCS (Thematic Core Services) che forniscono i dati di specifici domini scientifici (Sismologia, Vulcanologia, Dati Satellitari, Geodesia, Rischio Antropogenico, Geoelettromagnetismo, Geologia, Osservatori Near Faults).

![](images/Schermata-2021-10-06-alle-16.45.22.png)

Il nodo di integrazione accessibile dall'EPOS Data portal, è stato progettato secondo i principi FAIR. Esso è facilmente manutenibile e scalabile, grazie all’adozione di un approccio a microservizi modulari, atomici e interoperabili. In particolare una delle chiavi per promuovere l'interoperabilità è l'utilizzo di "rich metadata", che viene implementato con  l'utilizzo di due standard: EPOS-DCAT-AP \[3\], per il trasferimento dei metadati, e CERIF\[4\] per lo storage dei metadati. L'approccio ai microservizi è stato effettuato utilizzando tecnologie come RabbitMQ \[4\] per abilitare la comunicazione tra i singoli microservizi, e Docker per la virtualizzazione nell'ambito di un metodo di distribuzione DevOps, effettivamente implementato con GitLab CI/CD11 \[5\].

In questo contributo presentiamo accenni ai i principali aspetti tecnici dell'architettura EPOS, l'approccio generale alla gestione dei dati, come sono stati implementati i principi FAIR e un caso d'uso multidisciplinare che dimostra l'integrazione di dati e prodotti tramite l’EPOS Data portal.

 

\[1\] R. Vicente-Saez, C. Martinez-Fuentes, Open Science now: A systematic literature review for an integrated definition, J. Bus. Res. 88 (2018) 428–436. doi:10.1016/j.jbusres.2017.12.043

\[2\] [https://www.force11.org/group/fairgroup/fairprinciples](https://www.force11.org/group/fairgroup/fairprinciples)

\[3\] Luca Trani, Malcolm Atkinson, Daniele Bailo, Rossana Paciello, Rosa Filgueira Establishing Core Concepts for Information-Powered Collaborations,.. Future Generation Computer Systems, Volume 89, 2018, Pages 421-437, ISSN 0167-739X, [https://doi.org/10.1016/j.future.2018.07.005](https://doi.org/10.1016/j.future.2018.07.005)

\[4\] CERIF – the Common European Research Information Format – is a conceptual model describing the Research domain [https://www.eurocris.org/eurocris\_archive/cerifsupport.org/cerif-in-brief/index.html](https://www.eurocris.org/eurocris_archive/cerifsupport.org/cerif-in-brief/index.html)

\[5\] [https://www.rabbitmq.com/](https://www.rabbitmq.com/)

\[6\] Bailo D. et al., (2018). Integration of heterogeneous data, software and services in Solid Earth Sciences: the EPOS system design and roadmap for the building of Integrated Core Services. Rapp. Tec. INGV, 393: 1- 22, ISSN 2039-7941.
