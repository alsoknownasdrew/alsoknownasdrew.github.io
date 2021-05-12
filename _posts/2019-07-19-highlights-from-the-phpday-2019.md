---
title: "Highlights from the phpDay 2019"
published: true
---

One of the biggest surprises I found when I joined the [Facile.it](https://engineering.facile.it/) engineering team was the education budget. The company invests in the developers' professional growth by covering the costs of books or participation at courses, workshops, and conferences. This year my team and I decided to use a part of this budget to attend together [phpDay](https://2019.phpday.it/), The Italian PHP Conference organized by GrUSP association.

PhpDay is a two-day conference that covers all topics about PHP, its community and ecosystem. This year the conference was held on May 10th and 11th, in a terrific Verona at the San Marco Hotel.

The conference featured 3 keynotes and more than 20 talk sessions on 2 parallel tracks and some really useful workshops.

**Disclaimer:** The following list of keynotes and talks is not complete. They’re just the ones that I attended and found interesting enough to highlight.

## Day One

### Welcome to the PHP community | [Nara Kasbergen](https://twitter.com/xiehan)

Nara's keynote was all about the PHP community(duh!) and a lot of ways we can give something back to it. She talked about how to grow our involvement, including how to support local user groups, take a more active role in the conference scene, and start making meaningful contributions to the open-source ecosystem.

[Slides](https://speakerdeck.com/xiehan/phpday-welcome-to-the-php-community)

### From helpers to middleware | [Marco Pivetta](https://twitter.com/Ocramius)

In this talk, Marco guided us through the evolution of PHP applications' architecture, use of frameworks, good practices, anti-patterns and generally styles of coding of the last years. This session aimed to show us the recommendations to keep pushing forward for a better future for our software.

[Slides](https://ocramius.github.io/from-helpers-to-middleware/)

### From 0 to Continuous Deployments with Kubernetes, Helm, and GitLab | [Stefano Torresi](https://twitter.com/storresi)

A live demonstration on how to get up and running an application with Gitlab CI/CD pipelines on Kubernetes cluster, with per-branch automatic releases and manual environment promotion. The topics of the talk also included a short introduction to containerization with Docker, Kubernetes, and Helm which helps to manage K8S resource manifests and install third-party components.

[Slides](https://stefanotorresi.it/talks/k8s-cd/#/)

### Xdebug 3.0 | [Derick Rethans](https://twitter.com/derickr)

If you work with PHP applications you use [XDebug](https://xdebug.org/), period. Derick, the creator, and maintainer of one of the most popular and useful tools of PHP developers talked about some challenges he faces during its development and support. He showed us its internal structure and all of the configuration settings. The talk also included plans for XDebug 3 and ways to support it. Spoiler alert: there's a [Patreon](https://www.patreon.com/derickr) page where you can show your love.

[Slides](https://derickrethans.nl/talks/xdebug-phpday19.pdf)

### Hunting Down Memory Leaks with PHP Meminfo | [Benoit Jacquemont](https://twitter.com/bjacquemont)

Benoit Jacquemont talked about the internals of PHP memory management and gave us a better understanding of the origins of memory leaks. His open-source [PHP Meminfo](https://github.com/BitOne/php-meminfo) extension gives a synthetic view of the number of class instances in memory, the full list of objects and other structures, as well as the relations between them. Having access to this information allows understanding why an item has not been removed from memory and how to resolve this issue.

[Slides](https://speakerdeck.com/bitone/hunting-down-memory-leaks-with-php-meminfo)

## Day Two

### Software Management Lessons from the 1960s | [Larry Garfield](https://twitter.com/Crell)

The second day of the conference started with Larry Garfield's keynote. Larry talked about how some of the lessons from “The Mythical Man-Month”, a book about software project management written in the 1960s turned out actually relevant even in the present days of software development. Technology may have changed dramatically but people have not 😉.

[Slides](https://www.garfieldtech.com/presentations/slides-management-60s/phpday2019/#/)

### Serverless PHP applications with Bref | [Matthieu Napoli](https://twitter.com/matthieunapoli)

Serverless and FAAS are definitely the buzzwords of 2019. And how do they can be integrated with PHP ecosystem? Matthieu answered these questions and illustrate the answers with case studies and [Bref](https://bref.sh/), an open-source solution for deploying PHP applications on AWS Lambda.

[Slides](https://mnapoli.fr/presentations/serverless-php/serverless-php.pdf)

### MySQL 8.0 - Not Only Good, it's GREAT | [Gabriela D'Ávila Ferrara](https://twitter.com/gabidavila)

Gabriela's session covered new features and improvements of the newest version of MySQL. She did an awesome job explaining window functions, common table expressions, performance enhancements, and better charset support of the most used database in the world.

[Slides](https://www.slideshare.net/gabidavila/php-day-2019-mysql-8-not-only-good-great)

## Final Thoughts and Thanks

There were many other great talks including the closing keynote by Rasmus Lerdorf, the creator of PHP language himself, so I suggest you check out the full list of the speakers. You can also view videos for all of the presentations on the GrUSP [YouTube channel](https://www.youtube.com/channel/UCdWnwC8nz_CCFQrmLBrLCVw).

I'm very grateful to all of the organizers, sponsors, speakers, and volunteers that organized the conference. PhpDay was a lovely event with a lot of interesting topics and brilliant people. I hope to be back next year!
