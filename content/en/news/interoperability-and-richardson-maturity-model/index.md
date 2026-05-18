---
title: "Interoperability and Richardson Maturity Model"
date: 2015-02-17
translationKey: "interoperability-and-richardson-maturity-model"
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

Because of my job at [INGV](http://www.ingv.it/), where I am involved in the major [EPOS European Project](http://www.epos-eu.org/), I spend a lot of time reading papers, blog posts, and other resources, not to mention discussing with [great colleagues](https://pbs.twimg.com/profile_images/1291448219/max.jpg), all dealing with the central subject of **system interoperability**.

Actually, the real topic for me is **interoperability**, whose meanings vary across the fields of knowledge, and life, in which we use the concept. In the social sciences we may call it [interculturality](http://en.wikipedia.org/wiki/Interculturality) or [interculturalism](http://en.wikipedia.org/wiki/Interculturalism). In economics, we might call it **price**, the mechanism that enables exchange of goods. But that is another story, and I think the idea is clear.

Some more concrete interoperability-related topics I deal with include [microservices](http://microservices.io/index.html) and everything related to **[web services](http://it.wikipedia.org/wiki/Web_service)**. **Web services are one of the main concepts, and technologies, that enable system interoperability.**

[RESTful](http://en.wikipedia.org/wiki/Representational_state_transfer) web services are now widely used. They basically rely on HTTP, are reasonably human-readable, and are certainly machine-understandable. Their main advantage is ease of use. In the following example, by copying and pasting the URL into your browser, you access a free weather service through a RESTful API request:

```
http://api.openweathermap.org/data/2.5/weather?q=London,uk
```

You then receive a somewhat unusual but fairly human-readable response, perhaps with a few line breaks, telling you what the weather is like in London. Just for fun, [here is a list of public RESTful API providers](http://www.publicapis.com/). By the way, Facebook and Twitter require you to be logged in to use their RESTful APIs.

When creating a RESTful web service, it is useful to know that it can reach different degrees of maturity depending on how much it exploits the power of HTTP.

> These different levels of maturity were modeled by L. Richardson in the **Richardson Maturity Model**, which is well described and analyzed in this [excellent post by Martin Fowler](http://martinfowler.com/articles/richardsonMaturityModel.html).

According to this model, a RESTful service can be graded from 0 to 3, where 3 designates a truly RESTful API. In Martin Fowler's words,

> [**Richardson Maturity Model**](http://martinfowler.com/articles/richardsonMaturityModel.html) provides a good step by step way to understand the basic ideas behind restful thinking,

and what is really interesting is

> its relationship to common design techniques.
> 
> 1. Level 1 tackles the question of handling complexity by using divide and conquer, breaking a large service endpoint down into multiple resources
> 2. Level 2 introduces a standard set of verbs so that we handle similar situations in the same way, removing unnecessary variation
> 3. Level 3 introduces discoverability, providing a way of making a protocol more self-documenting.

Reading the full article helps you become more familiar with HTTP concepts and understand the real nature of HTTP. I was also surprised by the **power and richness of HTTP** itself, including verbs and hypermedia controls. It is a communication protocol that deserves special attention because of its widespread use in so many kinds of communication.

Last but not least, **I discovered that Leonard Richardson is quite a unique person: programmer, musician, and writer with a hacker mindset. Have a look at [his eclectic website](http://www.crummy.com/).**

**Link to the article: [Richardson Maturity Model by Martin Fowler.](http://martinfowler.com/articles/richardsonMaturityModel.html)**
