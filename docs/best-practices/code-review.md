---
id: code-review
title: Code Review
---

A must-have step in your software development process is code review. It enables developers to improve code quality, safety and can also be a knowledge transfer tool. As any process it could be either bad or good and DB1 has gathered some characteristics of a good code review process.

When you start reviewing a code, remmember that you will always be looking for:
- **𝗱𝗲𝘀𝗶𝗴𝗻** (does this integrate well with the rest of the system and are interactions of different components make sense)
- **𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝗮𝗹𝗶𝘁𝘆** (does this change is what the developer intended)
- **𝗰𝗼𝗺𝗽𝗹𝗲𝘅𝗶𝘁𝘆** (is this code more complex than it should be)
- **𝗻𝗮𝗺𝗶𝗻𝗴** (is naming good?)
- **𝗲𝗻𝗴ineering 𝗽𝗿𝗶𝗻𝗰𝗶𝗽𝗹𝗲𝘀** (solid, kiss, dry), 
- **𝘁𝗲𝘀𝘁𝘀** (are different kinds of tests used appropriately, code coverage), 
- **𝘀𝘁𝘆𝗹𝗲** (does it follow style guidelines)
- **𝗱𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻**

In addition to that consider doing the follow practices:

𝟭. 𝗧𝗿𝘆 𝘁𝗼 𝗿𝗲𝘃𝗶𝗲𝘄 𝘆𝗼𝘂𝗿 𝗼𝘄𝗻 𝗰𝗼𝗱𝗲 𝗳𝗶𝗿𝘀𝘁

Before sending a code to your colleagues, try to read and understand it first. Search for parts that confuse you.

𝟮. 𝗪𝗿𝗶𝘁𝗲 𝗮 𝘀𝗵𝗼𝗿𝘁 𝗱𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗼𝗳 𝘄𝗵𝗮𝘁 𝗶𝘀 𝗰𝗵𝗮𝗻𝗴𝗲𝗱

This should explain what was changes at a high level and why are those changes made.

𝟯. 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗲 𝘄𝗵𝗮𝘁 𝗰𝗮𝗻 𝗯𝗲 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗲𝗱

Leave to the system everything that can be automated, such as checking for successful builds (CI), style changes (linters), automated tests and some code smells and bugs (SonarQube).

𝟰. 𝗗𝗼𝗻'𝘁 𝗿𝘂𝘀𝗵

You need to understand what is changed. Every line of it. Read multiple times if needed, file by file.

𝟱. 𝗖𝗼𝗺𝗺𝗲𝗻𝘁 𝘄𝗶𝘁𝗵 𝗸𝗶𝗻𝗱𝗻𝗲𝘀𝘀

Never mention the person (you), always focus on changes as questions or suggestions and leave at least one positive comment. Explain the "why" in your comments and give a suggestion on how to make it better. You will see a recommendation for "how to make good comments" latter in this post.

𝟲. 𝗔𝗽𝗽𝗿𝗼𝘃𝗲 𝗣𝗥 𝘄𝗵𝗲𝗻 𝗶𝘁𝘀 𝗴𝗼𝗼𝗱 𝗲𝗻𝗼𝘂𝗴𝗵

Don't strive for perfection, but hold to high standards. Don't be a nitpicker.

𝟳. 𝗠𝗮𝗸𝗲 𝗿𝗲𝘃𝗶𝗲𝘄𝘀 𝗺𝗮𝗻𝗮𝗴𝗲𝗮𝗯𝗹𝗲 𝗶𝗻 𝘀𝗶𝘇𝗲

We should try to make limit the number of lines of code for review in one sitting. Our brains cannot process so much information at once. The ideal number of LOC is 200 to 400 lines of the core at one time, which is usually 60 to 90 minutes of time. 

![The Code Review Pyramid](/img/best-practices/the-code-review-pyramid.jpeg)

So, now you know what to be looking for in a code review process as well as good practices while doing it, now you will see a suggestion of how to make comments in your colleague's code.

1. Create different categories of comment, for example:
    - [Fix] Something is wrong and need to be fixed. Your colleague must change it.
    - [Question] You didn't understand the business process or implementation strategy and you need more information to finish your review
    - [Suggestion] There is another way to do the same thing and you wanna show how to do it. It's not necessarily wrong and it is not mandatory to change (knowledge transfer)
    - [Improvement] It will work, but there's a better way of doing it and your way will bring real imrpovement to the code, your colleague should do it
    - [Compliment] Your colleague did something really nice and perhaps tought you something new. Don't forget to congratulate him and reinforce that good behavior
2. Define and document your code review process in your team's Wiki
3. When you comment something in your colleague's pull request don't forget to provide references that support your change request (if you don't find one, maybe your change request is a matter of taste and not an improvement and then you shouldn't request changes)

You can use those categories above or create your own, the goal here is to have objective visual meaningfull pilars to determine your intention. You can even replace the categories names with emojis. It's fun!

Credits:
- Image (Code Review Pyramid): Gunnar Morling
- Text (𝗛𝗼𝘄 𝘁𝗼 𝗱𝗼 𝗰𝗼𝗱𝗲 𝗿𝗲𝘃𝗶𝗲𝘄𝘀 𝗽𝗿𝗼𝗽𝗲𝗿𝗹𝘆): Dr. Milan Milanović