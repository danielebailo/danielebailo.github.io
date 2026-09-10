---
title: "A new bridge between AI agents and seismological data: mcp-fdsnws-event"
date: 2026-09-10
description: "Our SoftwareX paper introducing mcp-fdsnws-event, an MCP gateway for querying FDSNWS-Event services from AI agents, is now out."
translationKey: "mcp-fdsnws-event-softwarex"
categories:
  - "job"
  - "technology-ict"
tags:
  - "artificial-intelligence"
  - "mcp"
  - "seismology"
  - "fdsn"
  - "softwarex"
  - "open-source"
  - "geoscience"
cover:
  image: "images/softwarex-mcp-fdsnws-event.png"
  alt: "SoftwareX paper page for mcp-fdsnws-event"
  caption: "The mcp-fdsnws-event paper published in SoftwareX."
  relative: true
draft: false
---

Our new paper has just been published in **SoftwareX**:

**"mcp-fdsnws-event: An MCP gateway for FDSNWS-Event web services"**, by Valentino Lauciani and Daniele Bailo.

The paper presents **mcp-fdsnws-event**, an open-source software component that creates a bridge between standard services used by the seismological community and the emerging ecosystem of applications based on Large Language Models and AI agents.

The starting point is simple.

For many years, the seismological community has used the **FDSN Web Services** standard to query earthquake catalogues and retrieve information about seismic events. These services are robust, interoperable and widely adopted, but using them normally requires knowledge of APIs, query parameters and formats such as QuakeML.

With **mcp-fdsnws-event**, the same services are exposed through the **Model Context Protocol (MCP)**, an emerging standard that allows AI systems to discover and use tools and data sources in a structured way.

In practice, an AI agent can use the software to answer requests such as:

*"Find earthquakes with magnitude above 3 in Central Italy during the last month"*

and transform that request into real queries against existing seismological infrastructures.

The server provides tools to search for events and retrieve detailed information about **origins, magnitudes, seismic phase arrivals and focal mechanisms**, using data from FDSN-compatible datacentres such as INGV, EMSC, GFZ and USGS.

## Why it is interesting

The innovative aspect, in my view, is not simply that we built a new interface to a seismic catalogue.

The point is rather to **connect two ecosystems that, until now, have spoken different languages**.

On one side, we have mature scientific infrastructures built over many years around shared standards such as FDSNWS and QuakeML.

On the other side, AI agents and conversational interfaces are emerging, with the ability to reason, use external tools and dynamically combine different sources of information.

MCP can be one of the mechanisms through which these two worlds meet.

The software does not replace existing standards and does not replicate data. On the contrary, it **makes existing scientific services directly usable by AI agents**, while preserving the connection with authoritative infrastructures and data sources.

A second important element is **interoperability**: the same interface can query different FDSN datacentres, avoiding the need to build specific integrations for each provider.

Finally, the project was designed as a reusable software component: it is containerised, also available through an OpenAPI/REST wrapper, and accompanied by unit tests, integration tests and tools to verify agent behaviour in multi-turn interactions.

## A small component of a broader transformation

This work belongs to a question that I find especially important for scientific infrastructures:

**how can we make scientific data FAIR and interoperable not only for people and traditional applications, but also for AI agents?**

If agents increasingly become a new interface through which researchers and citizens access data, it will be important to avoid having these systems rely only on knowledge embedded inside models.

They must be able to query **authoritative, up-to-date and verifiable scientific sources**.

mcp-fdsnws-event is a small step in this direction: enabling an AI agent not merely to "know something about earthquakes", but to **directly query the services of the seismological community**.

## Paper

**V. Lauciani, D. Bailo, "mcp-fdsnws-event: An MCP gateway for FDSNWS-Event web services", SoftwareX (2026).**

DOI: **[10.1016/j.softx.2026.103001](https://doi.org/10.1016/j.softx.2026.103001)**

The code is open source and available in the INGV **mcp-fdsnws-event** repository, distributed under the AGPL-3.0-or-later licence.

*Transparency note: the drafting of this article was supported by generative artificial intelligence. The content was subsequently reviewed, verified and approved by the author.*
