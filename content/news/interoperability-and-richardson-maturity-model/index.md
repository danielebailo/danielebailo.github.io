---
title: "Interoperability and Richardson Maturity Model"
date: 2015-02-17
categories: 
  - "job"
  - "technology-ict"
tags: 
  - "integration"
  - "interoperability"
  - "restful-services"
  - "richardson-maturity-model"
  - "web"
  - "webservices"
cover:
  image: "images/overview.png"
  alt: ""
  caption: ""
  relative: true
---

Because of my job at [INGV](http://www.ingv.it/), where I'm involved in the huge [EPOS European Project](http://www.epos-eu.org/), I'm daily diving into lots of information from papers, blog posts and other resources (not last, some discussions with [great colleagues](https://pbs.twimg.com/profile_images/1291448219/max.jpg)) which all deal with the main subject of **interoperability of systems.**

Well, actually the real main topic to me is **interoperability**, whose inflections can be as many as the fields of knowledge (and life) where we use such concept: we may call it [Interculturality](http://en.wikipedia.org/wiki/Interculturality) or [Interculturalism](http://en.wikipedia.org/wiki/Interculturalism) in social sciences, we may call it **price,** which allows the goods exchange in Economics... but well, that's another story and I think you get the idea. 

Some interoperability specific - more concrete - themes I have to deal with, are stuff like [Microservices](http://microservices.io/index.html) and everything which is related to **[web services](http://it.wikipedia.org/wiki/Web_service).** **Web services are one of the main concept (and technology) which enable interoperability of systems.** 

[RESTful](http://en.wikipedia.org/wiki/Representational_state_transfer) web services are at the moment widely used. They basically rely on HTTP technology, are quite human readable and surely machine understandable. The advantage of such services is their ease of use. In the following example, copying/pasting it to your browser, you access to a free weather services by a RESTful API request:

```
http://api.openweathermap.org/data/2.5/weather?q=London,uk
```

Then you get a weird response, pretty human readable (maybe with some newline...) which tells you how's the weather in London. Just for fun, [here is a list of public RESTful APIs providers](http://www.publicapis.com/). BTW, Facebook and Twitter needs you to be logged in to user their RESTful APIs.

When creating RESTful web service, it is interesting to know that it can reach different degrees of Maturity according to how much you exploit the power of HTTP.

> Such different levels of maturity have been modelized by L. Richardson in the **Richardson Maturity Model, well described and analyzed in this [wonderful post by Martin Fowler](http://martinfowler.com/articles/richardsonMaturityModel.html).**

According to this model, your RESTful service can be "graded" from 0 to 3, where 3 designates a truly RESTful API. using M. Flower words,

> [**Richardson Maturity Model**](http://martinfowler.com/articles/richardsonMaturityModel.html) provides a good step by step way to understand the basic ideas behind restful thinking, 

and what is really interesting is

> its relationship to common design techniques.
> 
> 1. Level 1 tackles the question of handling complexity by using divide and conquer, breaking a large service endpoint down into multiple resources
> 2. Level 2 introduces a standard set of verbs so that we handle similar situations in the same way, removing unnecessary variation
> 3. Level 3 introduces discoverability, providing a way of making a protocol more self-documenting.

Reading through all the article, you can get more and more familiar with HTTP concepts and understand "the real nature of HTTP". Also, I was surprised by the **power  and richness of all HTTP**  (e.g. verbs, hypermedia controls), a communication protocol which deserve a special attention because of its widespread use in any kind of communication.

Last but not least, **I discovered Leonard Richardson to be a quite unique person, programmer, musician and writer with a hacker mindset... have a look at [his eclectic website](http://www.crummy.com/).**

**Link to the article: [Richardson Maturity Model by Martin Fowler.](http://martinfowler.com/articles/richardsonMaturityModel.html)**
