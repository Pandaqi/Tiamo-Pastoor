---
title: "How To Create A Good Pub Quiz?"
author: tiamopastoor
date: 2026-01-15
language: en
categories: ["Miscellaneous"]
---

Not so long ago, I launched my online store where I sell pub quizzes (among many other things). Or, rather, I sell "trivia experiences" around specific topics. Some of those quizzes are educational (meant to be used in the classroom), but most are meant for pub quiz evenings and (thematic) parties.

This means that I made over 25 full-scale trivia experiences last year. These are not short quizzes. These are not just a bunch of questions in a Word document. These quizzes can take 1--3 hours, use my own interactive system (which allows playing digitally, physically, any way you like really), and use a wide variety of media (images/video/audio) to support questions sorted into neat rounds. It's _a lot of work_ ;)

{{% remark %}}
That's because I chose this category as my "highest-quality category" for the first year of the online store. I'll explain what that means soon.
{{% /remark %}}

After finishing the last one, and comparing it to the first one, I noticed how many tips and tricks I learned along the way.

I wanted to write this article to share what I've learned!

## My Quiz System

You can skip this part if you want. I'll just explain the general idea behind these quizzes and my "system".

I'm a programmer. If anything can be automated, I will do it. If anything can be made open source, so that customers buying my quizzes can _customize them_, I will do it.

And so I created a huge system that **automatically turns a folder with questions + media into an interactive pub quiz experience**. 

* You simply write your questions using a simple syntax. (Question, Answers, Any hints/comments, How many points is it worth, etcetera.)
* You reference any media needed, then throw those files in the same folder.
* The main file of the quiz is just a _webpage_ that you can open in any browser.
* And it will magically transform this input into a randomized, colorful, responsive, correct quiz.
* (And I made it so that I can turn the quiz into another format if wanted, such as a PDF for printing the questions, with one line of code.)

It was a lot of work. But it kind of grew organically, based on what I _needed_ in practice, so I worked on it a few hours once in a while to create the next version.

It's also very, very useful. I only have to make sure I invent interesting questions and provide the media needed. Eeeeeverything else is a standard feature of my system and taken care of.

I intend to do the same thing for the _other_ categories of my webshop. Create a powerful and unique _system_ that can easily take everything I make (within that category) to a higher level, making it both more automatic and more customizable. But because this is a lot of work, I only create one such system a year. My "trivia" system was simply the first one I chose, because I had already started with it years prior.

Anyway, this allowed me to really get good at _creating the content of the quiz_. Because everything else (presentation, executing it, getting a PDF, etcetera) was taken care of, forever. 

This article is only about all the lessons I learned about how to **come up with better questions and make the quiz more exciting**. 

It is _not_ about how to use PowerPoint (which most providers of pub quizzes do, and I hate it), or how to crop an image, or technical presentation details like that. Though there's a lot to say about that, too. With my terrible laptop, I have to jump through quite some hoops to cut audio/video and such. An article for another day!

{{% update %}}
Anyone with a bit of computer knowledge can now use my [PQ-Trivia](https://github.com/Pandaqi/pq-trivia/) system, for free, however you like. If you don't understand or run into issues creating your own quiz with it, don't hesitate to contact me! I intend to release all other systems I create for the webshop for free, too, in the future.
{{% /update %}}

## Lesson #1: Where to start?

Say you have an idea for a pub quiz. Maybe your little sister is a fan of soccer, and she has a birthday coming up, so you want to surprise her with a fun quiz about the sport.

Where do you start? Where do you find questions?

In any creative pursuit, you have "architects" and "gardeners". After 20 years of making creative projects, I've learned that this is simply a personality thing. Either approach is fine, you just need to know which one suits _you_ most. 

**Architects** like to build a blueprint first, then actually build it. Start small, then expand. So, you would ...

* First invent a general structure for the quiz. For example: one round about famous soccer players, one round about famous matches, one round about the rules of soccer.
* Then, they purposely look for information for each round. So you look up a list of "unbelievable soccer matches". You look up a summary of the rules of soccer.

**Gardeners** like to just collect as many divergent ideas as possible, then add structure and keep only the best ideas later. Plant a seed, let it grow wild, then cut stuff later. So, you would ...

* Go wild writing down any idea you have. Read articles about soccer. Watch parts of random matches. Whenever you see something about soccer in the news, cut out the article.
* Then, you look at what you have and start noticing patterns. Hey, we have 10 questions about refereeing. Hey, those 6 questions are all about our national team's recent achievements.

I am personally a gardener, an improviser, a go-with-the-flow type. Might keep that in mind while reading the rest of this article.

As stated, both are valid. Architects can be great at inventing an overall "theme" or "fun gimmick", then turn that into an entire quiz. (Like, I don't know, you actually cut out a soccer field and players, and any time you get a question right, you may move your players/the ball.) Gardeners can be great at letting organic themes and unexpected questions appear over time. 

{{% example %}}
Every quiz I made has had at least one round that I would've never added if I had "planned" it beforehand. But it was a theme that simply appeared in the research I'd done.

My quiz for Mother's Day has one round I called "Animal King-mom". It contains questions about how long certain animals are pregnant and/or how many children they get. I certainly didn't see that at first. It simply appeared when I read a list of facts about mothers and one of them was about elephants being pregnant for a looooong time. 

In the end, this round had the most engagement and surprise when testing the quiz (on Mother's Day). The cute animal pictures might've helped here, too.
{{% /example %}}

## Lesson #2: Finding Questions

This has been my process for most of the quizzes.

* **Ask AI** (e.g. ChatGPT) for questions. It will return **absolute rubbish**, but it will give me some starting points. (I usually end up using only one or two of its questions, after verifying them. I'll explain more below.)
* Look up **publicly available quizzes** or "fun facts" about the topic. If the topic is common enough, there will be one or two available. (I never buy a paid pub quiz and use any of its content. I even actively avoid it, to prevent copying their work or unintentionally leading myself down the same path.)
* Then, **chase down leads**. Like that old Wikipedia game. Research something about the topic, click a link and research that, click a reference and read that, and so forth. This is how you build a web of associations with the theme/topic, and end up at unexpected but fun places. 

I usually start chasing leads when my other methods have yielded maybe 20 to 30 possible questions. Chasing leads can easily bump it to 100 possible questions over time. I _know_ that not all of those questions are good. I often write down a bit of information, while saying to myself "most likely won't use this". But it's better to write it down anyway. Just as often it becomes the first step to finding something you _can_ use.

I think you must change your mind-set from "finding questions" to "finding interesting information". If you want to find ready-made questions and answers, you're going to find nothing, or you're just copying someone else's finished work. Instead, look for information that people might know or might be interested in knowing. **Find the extraordinary.**

I'll talk about turning those into _questions_ later.

**Is AI that bad?** So I've been trying for a year, with multiple AIs, but it's just not good at coming up with quiz questions (of a quality that I deem sufficient). 

* Half the time, it is just _wrong_. It's hallucinating. Which is a very bad thing in a quiz. 
* Its questions are either too easy or too hard. I've had results like "Who is the main character in Harry Potter?" or "The Caribbean islands are located in the ___ sea (_Caribbean_)"
* And telling it to rate the difficulty, or come up with fun gimmicks, rarely makes sense. It will never suggest a question that needs a video fragment, for example, because it can't assume that you'd be able to find that or include that. (How could it? How could it know what humans find a difficult question?)

It's more work to check the AI's work than to do it yourself. But what AI can do _really well_ is summarize the most common things out of its wealth of data. So if I ask for fun rounds for a "Soccer Quiz", it will give a good list of the general sub-topics inside it. It gives me a first starting point, a first Wikipedia article to check for information.

## Lesson #3: Patterns, Patterns, Patterns

Humans looooove patterns, and themes, and common threads.

That's why I would **always** recommend chopping a (longer) quiz into **rounds**. Every round has a nice self-contained theme, a pattern to the questions, maybe even a rhythm if you want to be poetic. A round of ~10 questions is doable for all players. When done, you can take a short break, stretch the legs, talk about the fun gimmick of that round. And then start the next round.

But I've learned to go even further.

My sister alerted me to some trick she once saw in a pub quiz: **secret themes**. Every round had a secret theme amongst the answers. This allows asking slightly harder questions. This also makes every question _more than just a standalone question_, because people will compare it to previous questions and try to see the pattern. And if you discover the theme? (Or you _think_ you did?) That's the best feeling, and you have a much larger chance of guessing the other answers correctly.

{{% example %}}
The theme might be "young". Then the answers might include people with last name "Young", it might include something about teenagers/kids, it might have a question about what the earth looked like when it was still young, etcetera.
{{% /example %}}

A secret theme like that is communicated to the players. They _know_ there is one. In fact, the final question of a round will usually be "What was the secret theme?"

But you can also add patterns that are _not communicated_. (Or more vaguely communicated) For example, 

* Start every question with the next letter of the alphabet.
* In every question that asks for a number, the number answer is equal to the number of the question.
* All multiple choice answers are either the first or the last option.
* Etcetera

Again, the idea here is to make the quiz more than a random pile of standalone questions. To make _every_ question mean _more_, because it has connections to the other questions. If you never see the pattern, no biggie. If you had communicated it, then the quiz would probably be slightly too easy (and people would spend too much time looking for it). But if you just say "There's a pattern to the quiz that can help find certain answers.", and include a fun gimmick like that, some people will notice and really enjoy that.

## Lesson #4: Turning Bad Questions into Good Questions

My first experiences with AI (and the first quizzes I tested) taught me this very clearly. Every bit of information can be quizzed in a fun and exciting way ... or in a very bad and boring way.

### A First Example

Let me give an example. 

* Question: "In what country is Father's Day celebrated in November instead of June?"
* Answer: Finland

A perfectly reasonable question. Also very boring and unlikely to score anyone points, unless you're from around there. 

{{% remark %}}
We're from the Netherlands. We certainly have more knowledge about Scandinavia than, say, an American. But still not enough to know this very specific fact.
{{% /remark %}}

How might we improve this? **Step 1: Give hints/more details in the question itself.**

* Question: "In what Nordic country is Father's day celebrated in November instead of June?"
* Answer: Finland

Nordic country reduces the options to make this basically a multiple choice question (for anyone who knows their geography a bit). But it's still not great, because how likely are people to know this?

How might we improve this? **Step 2: Give hints/more details through attached media.** If we add a random picture of Finland, people are more likely to recognize it and be steered in the right direction.

But it's still not great. How might we improve this? **Step 3: Make it multiple choice.** Multiple choice is much easier than open questions, of course.

* Question: "In what Nordic country is Father's day celebrated in November instead of June?"
* Media: that image
* Answer: Finland | Sweden | Norway

At this point, the question is ... okay. Some people might get it right. Some will just be lucky, others will know it or recognize something that helps them know it.

But in my view, this process is _the wrong thinking_ for most questions. It's fine. These steps will improve questions. Most of all, they will make questions "universal", allowing my quizzes to be played by people from different backgrounds/countries/generations.

Even better, though, is a more rigorous change of **question type** (or "approach").

### A Second (Better) Example

Say we find the following bit of information: "Charles Darwin had 10 children. He invented the Theory of Evolution after travels on his ship the Beagle."

You can ask a lot of questions about that. Think about each bit of information on its own. Think about connecting two bits of information. Think about asking the question in one direction, or asking it in the opposite direction.

* "How many children did Charles Darwin have?" (And then allow some error, like saying "you may be off by at most 2".)
* "Was Charles Darwin a father?" (Yes/No)
* "What famous biologist had 10 children?"
* "Who traveled on the Beagle and had 10 children?"
* "Which inventor of an important theory had a lot of children?"
* "Charles Darwin invented the Theory of ___" (a blank)
* "What made Charles Darwin come up with his Theory of Evolution?"
* Etcetera

If you ask AI, their questions usually put a bit of information in the _worst_ possible format. The one that is not interesting and nobody will know.

Many public/free lists of questions/trivia do the same thing. They are often _all open questions_ and the answers are _highly specific numbers/countries/names_. People likely don't know that. The question means nothing to most.

As such, I recommend **putting your information into ~5 different formats** and seeing which one feels the best. Try 

* An open question
* An open question with a lot more details given in advance.
* A multiple choice question
* A question with multiple steps/answers/partial points
* A number question (answer with a number, you may be off by at most X)
* A True/False or Yes/No question
* A question where the multiple choice answers are _images_ instead of text
* And so forth

By rearranging the information this way, you can find the best question to ask. This takes a bit of experience and trial-and-error, but if you're interested in making pub quizzes, you probably know when a question is too hard or too easy.

You can also find the format that fits the _theme_ or _pattern_ of your quiz the best.

* **Is your quiz about Father's Day?** Focus on that aspect. Ask if he was a father or how many children he had.
* **Is your quiz about Evolution?** Focus on that aspect. Maybe simply ask "Who came up with the Theory of Evolution?"
* **Is your quiz about Biology?** Focus on his _impact_ on biology. Asking if Charles Darwin had a lot of kids is not really relevant. It might "feel" relevant, because Darwin has such a tight connection to biology. But a more logical question would perhaps be "How did most biologists believe different species were created, before Darwin described Evolution?"
* **Is your quiz about the Age of Exploration?** Focus on his travels with the Beagle. Maybe show an image and ask the name of the ship. From a multiple choice? I think a good percentage of people will at least _recognize_ the name "Beagle".

There is no formula for this. At least, I haven't found it. Nothing like "Well if your info looks like X, then it MUST be a question Y, it's always the best!"

But I hope this put you on the right track. It's not interesting to ask raw facts and hope someone, somewhere, happens to know it. Ask questions that entice people to think about it, to prickle _something_ in the back of their mind, and that they might answer correctly (however they arrive at their conclusion). Rearranging what info you give and what info you ask, is _the_ way to do this.

If you need a one-liner to remember this, **make questions as much about "figuring it out" as "raw knowledge you just happen to have"**. 

Rewrite questions to unlock buried knowledge and associations. Rewrite them to find the right difficulty and keep them hyperfocused on the overall theme of the quiz.

### Some More Examples (To Help You Remember)

This is something ChatGPT gave me when working on a Quiz of Sims (for my little sister who plays The Sims every day).

* Question: The “Pleasant” family from The Sims 2 has twin daughters. What are their names and personality archetypes?
* Answer: Angela (good girl) and Lilith (rebellious).

What's the issue here?

* What does "personality archetype" mean? It would just be a guess for most.
* Including the game (The Sims 2) is irrelevant---this is a recurring family that stays the same---so it's noise that could be removed.
* Asking 2 questions in 1 question isn't great ...
* ... but giving 1 point for 4 bits of information is downright terrible.

A rewrite might be something like,

* Question: "The Pleasant family has twin daughters, one a good girl and one rebellious. What are their names?" (Angela / Lilith; 1 point for each)
  * Doable for Sims experts, too hard for those not in the know.
* Question: Which recurring Sims family has twin daughters called Angela and Lilith? (Pleasant)
  * Somewhat easy for Sims experts, still a guess for everyone else. Multiple choice (with 4 recurring families as options) is fairer.
* Question: "Angela Pleasant and Lilith Pleasant are clearly characterized as opposing personality types. What are those types?" (Good/Rebellious; 1 point for each; can be a bit loose with synonyms for this; **include image showing their look!**)
  * Doable for everyone, because the image gives a hint, and there's slight creativity/thinking involved instead of raw knowledge.
  
A question like this _seems_ useful, but it was so meh that I believe I ended up scrapping it.

Another example, this is what ChatGPT gave me when working on an Ancient Egypt Quiz.

* Question: What was the name of the capital city built by Akhenaten for the worship of Aten?
* Answer: Akhetaten (modern-day Amarna)

Will anyone know this? No, don't think so. It's an open question, it's a silly one consonant difference, and the modern-day city has a completely different name. It's a huge "you either know this because you're an ancient egypt expert, or you are lost"

A rewrite might be something like,

* Question: "Akhetaten was a capital city in Ancient Egypt." (Yes/No)
  * I'd do this as a very simple warm-up question, and only if other questions are also about ancient capitals and their (re)naming.
  * Otherwise, this is a guess for most.
* Question: "Akhenaten was built for the worship of ___." (Aten; multiple choice with other gods)
  * The similarity between city name and Aten might steer people that way.
* Question: "The modern-day city Amarna used to be called ___." (Akhetaten; multiple choice where the other options are only modern-day Egyptian cities)
  * You can know the answer outright, or you can know it by having _other knowledge_ about Egypt and eliminating the other cities.
* Question: "Who built the capital city of Akhetaten?" (Multiple choice with 4 slight variations like _Akhenaten_, _Akhitaten_, etcetera.)
  * This is just a funny one to include once in a while. It's basically a guess for everyone, but in practice it's still fun to see the question and debate about a minor consonant difference.
* Question: Which of these cities was built for the worship of Aten? (Akhetaten; the other options are other cities of ancient egypt)
  * Again, by rephrasing the question you can include other answers to be eliminated based on other knowledge.

I could do this all day ;) Every bit of information can be quizzed in a million ways. **Find the one that allows most people to answer it and feel smart about figuring it out.**

Also, no one solution will work for an entire quiz. **Variety is the spice of life.** If you've had many questions asking for a numeric answer, change the others to be _not that_. Otherwise it will grow stale and the questions will start to blend together in everyone's minds.

## Lesson #5: Simplify Your Writing

This is just a general lesson whenever you're working with text. It's really easy to write rambling run-on sentences that cram everything together. Especially when you believe the sentence must be a _question_.

For example, my first version of a question was something like: "When the Roman Emperor Tiberius was approached by a good friend and grieving father (Apronius) about a possible crime, he did something special (and surprisingly modern). What did he do?"

I had only just learned this information and tried to _write it down_. But this is a long-ass sentence if I've ever seen one. I had no time to rewrite before testing the quiz, and, well, my participants had to read it five times too.

**Find a way to rephrase questions. Find a way that cuts words, but keeps the important bits together.**

> "A grieving father approached Roman Emperor Tiberius about a crime. He responded in a unique way, by ___."

**Blanks are your friend.** (They're even a built-in feature of my system :p) They allow you to rewrite something as a statement, instead of some convoluted question.

A single long sentence can become 2 or 3 sentences, usually.

The same holds for the answers. Ideally, the answer should be 1--4 words, not more. Entire sentences aren't great. Having a one-word answer next to a superduper long answer is also weird. You can usually _rewrite the question_ to _simplify the answers_. If you _have_ to have complexity, put it in the question, not the answers.

Why?

* Long answers means more time writing stuff down for the players.
* Long answers makes it harder to check "correctness", because there are more ways to deviate from the correct answer, use different words, etcetera.
* With multiple choice, there will be _multiple answers_ on the screen. Multiple long answers probably don't even _fit_ the screen.
* Any hints or extra information should not be found in answer D to a question. People won't assume it's there, they will miss it. It should be in the question itself (and its media).

For example, this is a very simple mistake that can easily happen to anyone in a rush.

* Question: "Which statement is true?"
* Answers:
  * "The Mummy is not about Ancient Egypt"
  * "Gods of Egypt is not about Ancient Egypt"
  * "Night at the Museum is not about Ancient Egypt"
  * "Gladiator is not about Ancient Egypt"

You look up from the screen and---oh no! What have I done!? You've put all wordiness and complexity into the answers. And try to **avoid using (double) negatives**, which are harder to process by players. In fact, they frequently miss it completely and thus answer questions the wrong way.

This can easily be shortened to,

* Question: "Which of these movies is about Ancient Egypt?"
* Answers: The Mummy | Gladiator | Brave | Back to the Future

Remove the "not". Put it all in the question. Change the answers to match. Much cleaner, much more fun.

For more practice on this, simply write a lot and then edit your work to be shorter. Perhaps look up tips/guides/examples on how to shorten sentences and clarify meaning.

## Lesson #6: Foreshadowing / Priming

In writing, there's this idea called _foreshadowing_. It means that a good story should have subtle hints that readers can pick up about what will happen later. For example, if a story has a big _plot twist_ ("Oh no! That person IS the villain!"), it is ...

* Satisfying if the plot twist was logical and could have been guessed based on hints. (For example, _The Prestige_ has an amazing reveal at the end, which is completely obvious once you watch the film a second time and consciously notice all the hints and setup. That's why it's an _amazing_ twist.)
* Unsatisfying if it feels completely random and out of nowhere. (I once read a thriller where the killer was revealed to be a person that was mentioned in _one_ throwaway line---someone's brother we never see---and it was just the most infuriatingly stupid ending of a book I'd ever written.)

I've learned that many storywriting lessons are true in most other situations too ;) In fact, in most other disciplines this is used extensively and called **priming**.

Let's say you have a few really fun questions. But they're _really hard_ questions. Everyone will likely be stumped at first.

What do you do? You prime them. You give hints to the answer in _earlier questions_. You establish a theme, or a type of question, earlier in the quiz. Such that, when this _really difficult_ question arrives, people are ready for it. They are "primed". They're in the right headspace and thinking in the right direction for it.

{{% example %}}
In one of my quizzes, there were some early questions about Ancient Greece that were quite hard, and some later questions about Ancient Rome that were also quite hard. People like me, who had those subjects at school, would know the answers. Everyone else would not. So I didn't like it.

Instead, I changed those earlier questions to be about Ancient Rome too. And I made them much easier. They were mostly meant to reveal to people that Ancient Rome is part of this quiz, and drop the names that were relevant in the later questions. Then, with minor changes, the later questions suddenly became solvable! Players' first instincts would be to think about what they knew about the Romans, maybe remember reading those names earlier, which was enough to lead many to the right answer.
{{% /example %}}

As such, foreshadowing/priming is a tool to make harder questions possible. A necessity, sometimes.

It can also simply be a fun addition. A bonus. I use it like that more often. 

I prefer to simply rewrite bad questions to good questions---see lessons #4 and #5---when I think something is too hard. Maybe you already realized that my examples there could be improved _further_ with "foreshadowing". Anything I deemed too hard (such as names of Sims characters) can be simplified by mentioning them in an earlier question. Questions about capital cities of Ancient Egypt can be doable if I include more of them to set up the idea. Maybe add a map of Ancient Egypt in some earlier questions.

{{% example %}}
My Father's Day quiz had a question that played the Imperial theme from Star Wars, and asked which "famous fictional father" (Darth Vader) had this as his soundtrack.

Most people know this. Even people who have never watched Star Wars know both Darth Vader and that recognizable tune. It's not a "hard" question. But it's **buried knowledge** for many.

And so I added a second question. It showed Darth Vader and asked to whom he said the famous quote "No, I am your father" (Luke Skywalker). You might think "Oh no, you did two questions about the same thing! You gave away the answer! Don't do that!" But the opposite is true. Half the people doing the quiz had that moment of sudden realization, a smile as they turned over their page, scratched out their previous answer, and realized they knew whose soundtrack it was.
{{% /example %}}

## Lesson #7: Never Forget The Goal

The final example of the previous section already touched on this. We have this idea, from years wasted at school, that "exercises" should be hard, and unforgiving, and have all these strict rules, and what not.

Many take this with them when creating a quiz. Because, after all, it's just a list of "questions" to answer. A list of tasks to solve. It can easily feel like a written test or homework assignment, especially if the topic has something to do with school!

But school is wrong, as usual. 

The goal of the quiz is to have a fun time. A secondary goal is to learn something new and test how much you know. So, design the questions to achieve that purpose as much as possible.

The goal is _not_ to give people a grade at the end. To punish people for having too many wrong answers, or not getting their answer down fast enough, or whatever. It's not to harsly divide your players into people who are smart and people who are not.

So let me give some useful tips for avoiding the wrong approach.

* People are easily overwhelmed. Opt for fewer questions instead of adding more and more. Have a clear separation into short, digestible rounds. **If you feel a question reads like homework, it should probably be simplified.** Fewer words. Fewer details. One-word answers.
* Encourage people to **count scores per round** (and tally them for a total score). Even if you lose the entire quiz, you can feel good about scoring really well on "your round". (For example, musicians will get most of their points on a music round, and feel really happy about that. Even if they did terrible in the overall thing.)
* Write enough questions that allow scoring **partial points**. (Again, this is mostly meaningless for the overall score. But having no clue for 15 questions in a row feels terrible, while scoring a few points here and there for knowing part of the solution keeps people engaged.)
* In general, just **be kind to the player**. Every time I thought "oh no this would make the quiz TOO EASY", I was _wrong_. For example, whenever I ask about a specific movie/book/show, I usually include a blurred or edited image of its cover now. Even a little bit of blur is enough to make the title unreadable, but the general look still visible, which can really help out certain players.
  * In a way, it's always easier to make things _harder_ later, than to make them _easier_. If you notice a question is too easy ... you can just remove that helpful (maybe blurred) image. You can make it open instead of multiple choice. Easy! But if you notice a question is too hard ... well, this entire 6,000 word article talks about how hard it is to simplify that.
* **You can either set a clear timer on questions, or you can be loosey-goosey.** No dabbling in-between. 
  * It's no use telling people to "hurry up" while they're thinking about their answer; it's just annoying. It's no fun rushing through a quiz, never _really_ taking time to see if you know the answer, because others are harrassing you for being slow. 
  * Either say something like "This quiz takes an hour, you get a minute for every question, no exceptions", or be very flexible about giving people time, going back to an older question, repeating questions, etcetera. 
  * Some middle ground will just annoy everyone and achieve neither!
* Encourage everyone to **actively participate**. It saddens me how many people will just say "Oh music round? I know nothing about music." So they'll get up and leave, or just sit there in silence writing down nothing. You can still talk. You can still make jokes about the questions. You can still write down funny answers for others to find when grading your answers. And, in doing so, you'll usually discover you know a bit more than you do. I would be very much against allowing people to just leave willy-nilly, or to be so frightened of cheating that everyone is silent and protective of their answers.

It's a challenge, of course. A challenge to find questions that are not too easy nor too hard.

My personality is both a good thing and a bad thing here. 

I have a _very_ wide net of interests, and I've always read and absorbed a lot, so I have no trouble coming up with a wide variety of questions and extraordinary facts. My main job is writing books (where I dive into perspectives of characters that are completely unlike me) and creating games (where I have to simplify language/ideas absolutely as much as possible, or the rules are too hard). That's the positive side. I know how to simplify things and I won't get stuck asking only questions that would interest _me_.

The negative side is that it's easy to assume that others are as well-read and widely interested as I. This is just familiarity bias. Because _we_ know something, we assume others will know it (or easily learn it) too. But that's obviously not true. Just because others have a Monopoly set somewhere in their home doesn't mean they know the game's history and rules like I do. Just because someone has a vague idea about the Roman Empire, doesn't mean they would be interested in answering 15 questions about it.

I have surely done projects, especially when I was young, in which I completely got lost in my own tunnel vision. Just because I had been working hard on this for weeks, I assumed others would put in the same effort. And once I presented it to others (be it a story, a quiz, a game) they looked at me funny and didn't understand.

That's maybe the biggest challenge. But you only get better at that by getting more practice! Design a quiz, see if you judged the difficulty right, then learn from inevitably getting it wrong on a few questions.

As long as you never forget the goal. The goal is to have fun and maybe learn a thing or two. Design your questions, rounds, gimmicks, topics to get the most "aha!" moments, the most moments of pride as someone knows the answer, the most discussion and engagement. It's not a silly test, it's a pub quiz.

Pfew. As always, this ended up much longer than I planned. I think I covered all the major things I learned when making all these quizzes. Hopefully, if you were to buy and play all those quizzes in order (don't know why, but you could), you'd see the quality steadily increasing.

Until next time,

Tiamo