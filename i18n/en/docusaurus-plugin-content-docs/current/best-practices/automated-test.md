---
id: automated-test
title: Automated Test
---

If you are not convinced automated testing is a valuable asset for your software development strategy, this post isn't for you. From now on let's consider not only you know [what it is, the types of automated testing there is](https://www.atlassian.com/continuous-delivery/software-testing/automated-testing), but sees value on them.

When we talk about writing code testing there are pitfalls that needs to be considered. The code you create to execute tests are also code. This might seem obvious but how many times have you considered looking for [test smells](http://xunitpatterns.com/TestSmells.html) in your code ? The more you code tests, the more effort you have maintaining them.

So, if there's a trade-off here, what should i do? 

![Tests TradeOff](/img/docs/best-practices/test-tradeoff.png)

As we can see above the biggest trade-off is to balance quantity of tests versus the cost of having it and the pyramid above expresses what we think you should do. 

**Unit tests** are cheap, you can have a lot of them, they are quick to write ([there are even AI tools that generate them for you nowadays](https://code-gpt-docs.vercel.app/pt/)), quick to execute and validate your code's behavior. Not only that, writing unit tests will help you create better abstractions and follow [SOLID principles](SOLID.md).

**Contract tests** will help you ensure your interoperability is intact. Everything we do these days involve some kind integration. This is a valueable test strategy. It also means it will cost more to execute. We recommend you code contract tests for the software pieces that interacts with a third party agent, like other external systems. This way you will write less code and test what is worth testing.

**Integration tests** are more complex to write and maintain. You not only have to test your code but the pieces it connects to. Sometimes provisioning in-memory infrastructure to enable your test to execute is a wayout but sometimes you will have to rely on up an running infrastructure to execute them. We recommend you to write theses tests only for the main features of the system.

**E2E (end-to-end) tests** take a lot of time to implement and even more to maintain. The precision and reliability, on the other hand, are incredible, you will be actually doing what the user will. Pick only the critical path of your software, what needs to be executed in order to be usefull for your users and only that. 

If you are looking for a magic number for code coverage that is a very hard thing to set for every scenario, but 80% seems to be a reasonable number for most scenarios. If this well distributed you will be running a good way to guaranteen your software's quality.