---
title: "A new bridge between AI agents and seismological data: mcp-fdsnws-event"
date: 2026-09-10
description: "È uscito su SoftwareX il paper che presenta mcp-fdsnws-event, un gateway MCP per interrogare servizi FDSNWS-Event da agenti AI."
translationKey: "mcp-fdsnws-event-softwarex"
categories:
  - "job"
  - "technology-ict"
tags:
  - "intelligenza-artificiale"
  - "mcp"
  - "sismologia"
  - "fdsn"
  - "softwarex"
  - "open-source"
  - "geoscience"
cover:
  image: "images/softwarex-mcp-fdsnws-event.png"
  alt: "Pagina del paper mcp-fdsnws-event pubblicato su SoftwareX"
  caption: "Il paper mcp-fdsnws-event pubblicato su SoftwareX."
  relative: true
draft: false
---

È stato appena pubblicato su **SoftwareX** il nostro nuovo paper:

**"mcp-fdsnws-event: An MCP gateway for FDSNWS-Event web services"**, di Valentino Lauciani e Daniele Bailo.

Il lavoro presenta **mcp-fdsnws-event**, un software open source che crea un ponte tra i servizi standard della comunità sismologica e il nuovo ecosistema di applicazioni basate su Large Language Models e agenti AI.

L'idea di partenza è semplice.

Da anni la comunità sismologica utilizza lo standard **FDSN Web Services** per interrogare cataloghi di terremoti e recuperare informazioni sugli eventi sismici. Questi servizi sono robusti, interoperabili e largamente adottati, ma il loro utilizzo presuppone normalmente una conoscenza delle API, dei parametri di interrogazione e di formati come QuakeML.

Con **mcp-fdsnws-event**, gli stessi servizi vengono esposti attraverso il **Model Context Protocol (MCP)**, uno standard emergente che permette ai sistemi AI di scoprire e utilizzare strumenti e sorgenti dati in maniera strutturata.

In pratica, un agente AI può utilizzare il software per rispondere a richieste come:

*"Find earthquakes with magnitude above 3 in Central Italy during the last month"*

e trasformare questa richiesta in interrogazioni reali verso infrastrutture sismologiche esistenti.

Il server mette a disposizione strumenti per cercare eventi e recuperare informazioni dettagliate su **origini, magnitudo, arrivi delle fasi sismiche e meccanismi focali**, utilizzando dati provenienti da datacenter FDSN compatibili come INGV, EMSC, GFZ e USGS.

## Perché è interessante

L'aspetto innovativo, a mio avviso, non consiste semplicemente nell'avere costruito una nuova interfaccia verso un catalogo sismico.

Il punto è piuttosto **collegare due ecosistemi che finora hanno parlato linguaggi differenti**.

Da una parte abbiamo infrastrutture scientifiche mature, costruite nel corso di molti anni intorno a standard condivisi come FDSNWS e QuakeML.

Dall'altra stanno emergendo agenti AI e interfacce conversazionali capaci di ragionare, utilizzare strumenti esterni e combinare dinamicamente diverse fonti di informazione.

MCP può rappresentare uno dei meccanismi attraverso i quali questi due mondi possono incontrarsi.

Il software non sostituisce gli standard esistenti e non replica i dati. Al contrario, **rende direttamente utilizzabili dagli agenti AI i servizi scientifici già esistenti**, mantenendo il collegamento con le infrastrutture e le sorgenti autorevoli.

Un secondo elemento importante è l'**interoperabilità**: la stessa interfaccia può interrogare diversi datacenter FDSN, evitando di costruire integrazioni specifiche per ogni singolo provider.

Infine, il progetto è stato pensato come componente software riutilizzabile: è containerizzato, disponibile anche tramite un wrapper OpenAPI/REST ed è accompagnato da test unitari, test di integrazione e strumenti per verificare il comportamento degli agenti nelle interazioni multi-turno.

## Una piccola componente di una trasformazione più ampia

Questo lavoro si inserisce in una questione che considero particolarmente interessante per le infrastrutture scientifiche:

**come rendere i dati scientifici FAIR e interoperabili non soltanto per le persone e per le applicazioni tradizionali, ma anche per gli agenti AI?**

Se gli agenti diventeranno sempre più spesso una nuova interfaccia attraverso cui ricercatori e cittadini accedono ai dati, allora sarà importante evitare che questi sistemi lavorino soltanto sulla conoscenza incorporata nei modelli.

Dovranno poter interrogare **sorgenti scientifiche autorevoli, aggiornate e verificabili**.

mcp-fdsnws-event è un piccolo passo in questa direzione: permettere a un agente AI di non limitarsi a "conoscere qualcosa sui terremoti", ma di **interrogare direttamente i servizi della comunità sismologica**.

## Paper

**V. Lauciani, D. Bailo, "mcp-fdsnws-event: An MCP gateway for FDSNWS-Event web services", SoftwareX (2026).**

DOI: **[10.1016/j.softx.2026.103001](https://doi.org/10.1016/j.softx.2026.103001)**

Il codice è open source ed è disponibile nel repository INGV **mcp-fdsnws-event**, distribuito con licenza AGPL-3.0-or-later.

*Nota di trasparenza: la stesura di questo articolo è stata supportata dall'intelligenza artificiale generativa. Il contenuto è stato successivamente revisionato, verificato e approvato dall'autore.*
