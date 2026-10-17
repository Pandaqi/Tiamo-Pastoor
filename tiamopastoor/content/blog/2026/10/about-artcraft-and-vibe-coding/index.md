---
title: "About ArtCraft & Vibe Coding"
author: tiamopastoor
date: 2026-10-16
language: en
layout: "vertical"
categories: ["Miscellaneous"]
--- 

Most of us are familiar with **(Adobe) Photoshop**. In fact, it has become a verb that basically refers to any form of _image editing_.

Some may also be familiar with tools like **Adobe InDesign** (for editorial/print design), **Adobe Illustrator** (for illustrations/vector art), or even **Adobe Premiere Pro** (for video editing).

For some 30 years now, these have been the industry standard for all creative work. All major studios use them, most smaller artists use them too. These were the first tools I installed and learned. The first time I was awed by what a computer could do and tried to teach myself how to illustrate and create movies.

These tools are _massive_. Adobe is an industry giant with a monopoly on (digital) creative work. Everyone and their dog has used them at some point.

At the same time, everyone hates them. Because Adobe abuses their monopoly by being as hostile and greedy as possible towards all users. This is no exaggeration. They are constantly raising their prices. You _have_ to subscribe for a longer period, and if you want to cancel earlier, you are hit with a "cancellation fee" of $100. 

At the same time, they make no effort to actually make their software as lean, accessible, and functional as possible. **I haven't been able to launch any Adobe software on my old laptop for almost 10 years.** They're too big, too slow, too clunky, too resource intensive. I used to do _all_ my work in Adobe Illustrator, even when it lagged, until it crashed so often that it was just impossible. The few times I've edited a video (such as a trailer for a new video game), I've had to borrow someone else's computer.

And then, at the start of this week, I stumbled upon [ArtCraft](https://getartcraft.com/). More specifically, I somehow found myself reading the source code of the project on [GitHub](https://github.com/storytold/).

It's completely _free_. It's _open source_. It runs on _all_ devices and operating systems. And it basically aims to make all of Adobe's flagship software completely obsolete---to replace all of it. To "copy" all its features, its layout and tools, and give them away to everyone for free.

Most of all, it is **"vibe coded"**. It means they use AI to code the software. (I'll give a better explanation of what this means soon.)

So on the one hand everyone is like "fuck Adobe, let's go!". On the other hand, many people think this is unethical or just a fool's errand (because "AI can never produce functional software at this level of complexity").

Seeing this development, and reading everyone's views on it, has been _interesting_. **Very interesting.** It made me think and try some new things myself. That's why I wanted to talk about it here.

## The Good

First of all, being completely free and open source is obviously _good_. Anyone can read the code, check if there aren't any viruses, modify it to suit their needs. Even if the project dies soon, anyone else can just copy it and continue in a new direction.

Their choice of programming language (_Rust_) is also good. That language is known for being pretty hard for _humans_ to write, but extremely nice for _computers_ to execute. So ... if we let computers ( = AI) _write it_, then we get the best of both worlds.

This choice proves itself immediately. 

* All these "clones" of Adobe apps are much smaller in file size (0.05GB versus 5GB).
* They launch and close much more quickly.
* And all major actions that would hang Adobe apps (for me) happen immediately too. (Think of stuff like "create new document" or "import this massive image".)
* To someone familiar with Rust (like me), the codebase is pretty self-documenting and nice to read. 
  * It's much easier to contribute to a project like this than, say, the Godot Game Engine. I've _wanted_ to help out there ever since I started using the engine, but the code is just a mess that I don't feel like untangling.

The creator(s) claim they're experienced Rust programmers. I don't know if that's true, but I am inclined to believe them. Because they didn't just tell AI "make me Adobe Photoshop but in Rust". There's a massive pipeline _around_ these "vibe coded" apps, with roadmaps, documentation, testing suites, and more. Everything you would use in a professional setting if you were to develop such software. 

It's a lot to set up and configure, you need to _know_ that you need this and whether something is beneficial to the project. But if you can set it up like that, you clearly get much better results from the AI and have a much better shot at getting functional, stable software. (Also, more on this later.)

The other obvious advantage is that **it works**. It launches. My use cases for some of these apps are very simple, and those workflows are already completely functional. I can launch "Filmcraft" (their Premiere variant) and actually edit a small video on my broken ass old laptop again. It's _enough_ for creating simple trailers for my video games, which is all I really need.

So instead of paying Adobe, being stuck in their ecosystem, and getting these massive apps that crash and don't work on older hardware ... I can get a small, fast, free alternative that works everywhere.

I hope you agree that this is a massive win. For me. For everyone.

## The Bad

Obviously, lots of **functionality is missing and parts are broken**. Their own documentation, although this is written and updated by AI as well, states "feature parity" of between 65% to 85% at the moment. This is across all the nine apps they're currently developing.

I think this number is in the right ballpark. Most _core_ functionality is available already, but each software has a few _major_ systems (that I would also consider core/crucial) that are completely absent. 

Besides that, the devil is in the details. Missing icons, missing shortcuts, some actions are needlessly slow, things just feel a little _less_ nice to use than they would in a finished piece of software.

{{% remark %}}
For a silly example, when editing a number in Filmcraft, the fastest way is to do CTRL+A (select all) and then start typing the new number. It will replace the old selection. But this _doesn't work_ at the moment: it will just _add_ whatever I type to the back of what's already there. This made my experiments with effects/light editing just a _bit_ more annoying.
{{% /remark %}}

How long will it take to fix this? Will this happen? Or will the project become too big for AI to make sensible choices? I don't know!

Compared to the start of this week, development progress has already slowed down a bit. But then again, it's only the second week, and the pace at the start was stupidly fast.

This software could keep growing for months and months until it's a full replacement for Adobe. Or it could stay broken and buggy and be abandoned.

## The Discussion

Most people online who had a negative opinion of ArtCraft used such arguments. 

* "The apps are broken, completely utterly unusable."
* "They will be abandoned / they will never be as good as what Adobe has been making for 30 years."
* "Adobe will just sue them in a month or so and everything disappears."
* "As much as I hate Adobe, this is unethical. They're stealing their software."

I try to see everyone's perspective, but I really don't understand how so many people can say such nonsense.

* This software was _just released_. They clearly state, everywhere, that it is in _pre-alpha state_. Lots of stuff missing, lots of stuff broken, including exact percentages and roadmaps of what is or isn't there. Nowhere do they claim to be finished and perfect. Developers or digital artists, of all people, should understand how software is never done and keeps being updated over time.
* I also find it odd that people claim this ... while also claiming they'll never catch up to Adobe because they have a 30 year head start. So they're mad that a week-old software isn't perfect while, in the same sentence, arguing that software needs 30 years to perfect itself!?
* "Utterly unusable" ... they work for me? My laptop is ~13 years old. Its keyboard, screen, and half the USB ports are not functional. Its built-in clock isn't even functional anymore. But all ArtCraft software I tried launched quickly and worked well enough. That's all I can say. (And I think people ignore what a MIRACLE it is that AI can just do that now! Where's the wonder and amazement in everyone's lives?)

Adobe has no grounds for suing. This project is not _stealing_ anything. Its instructions specifically forbid the AI (over and over, in many different ways) to even _look for_ Adobe software on the computer. Precisely because that's what you need to stay on the legal side of the fence. 

Basically, there are three things to look at here: code, functionality, and look. 

* No code was stolen. It's in a different programming language + the source code for all Adobe Apps is secret (well, unknown to AI and developer alike)
* Functionality can't be copyrighted.
* You _can_ argue that a look is one of your trademarks, but this can be broken by simply changing one or two things in your UI. As such, being sued for that would just mean the project moves a few buttons around and continues.

I would be _very_ surprised if Adobe actually has a strong case and shuts it down. Surprised and ... disappointed. But, well, we've seen how far the American justice system has fallen.

And then there was another group of people who said: **"We've had good alternatives for Adobe products for years! Use those instead of vibe-coding new ones!"**

For example, ArtCraft is also cloning **Microsoft Office** software such as **Microsoft Word**. People are quick to mention that _LibreOffice_ and _OpenOffice_ have existed for years.

{{% example %}}
The EU is developing its [own alternative for Microsoft Office](https://github.com/Euro-Office), to depend less on USA solutions. Look at it. Its look is almost _identical_ to Microsoft Word. It has copied the look even more than ArtCraft did. If the EU expects to not get sued for that, why would ArtCraft?
{{% /example %}}

I tried. I really tried. When I lost my Word license (when I finished my degree at university), I had to find an alternative. But, respectfully, they suck :/ I tried and tried to like them, to use them, to figure out if I was missing something. But it wasn't working. The interface was ugly. (Yes, if I am going to stare at something for 5 hours a day, I want it to look pretty!) The things I needed most were somehow hardest to find/use or even buggy/inconsistent.

I thought I might be going mad, maybe it was just a personal thing, but lots of people had the same response to these suggestions. They didn't understand where all the praise for _LibreOffice_ came from and would not consider it for everyday serious work.

I am poor, I have a bad laptop, I am all about openness---so I tried _loads_ of open source alternatives for things. Even the weird ones. Even the abandoned ones. Even the ones I had to really really look for myself. 

ArtCraft is already ahead, in many ways, of all those things I tried. In such a short timespan, with so few people or manual work, it looks nicer and launches faster and everything. (Well, not _everything_, as discussed, lots of stuff is broken and missing for now.)

And that was the moment that made me think long and hard about my own future as a programmer.

## What is "Vibe Coding"?

I've brushed over the terms "AI coding" and "vibe coding". What are they, exactly?

Well, you are likely familiar with ChatGPT (or chatbots in general) now. You ask it something, it gives a specific answer. As the models improve, the answers get better, more context aware, more accurate.

Then, some time ago, this was extended to allow _completing code_. You could type something like `function add_numbers()` and the AI would fill in the actual code needed to ... make the function add some numbers! In a way, this is just the same as sending a prompt to ChatGPT. Only now it sent the prompt _for you_, behind the scenes, something like "Please code a function named X that does Y in language Z."

Then, as models got better again, they were able to read entire codebases. To take context into account. To not just _complete_ your function, but invent _which functions you need_ to begin with. On and on, until, since not so long ago, the models were good enough to just code on their own.

* Install some free AI client.
* Point it to the folder containing your project.
* Tell it what to do.
* It will create files, edit them, delete stuff, join stuff, write code, write tests, and so forth ...
* ... until it has made what you wanted.

This is "vibe coding". You're not actually doing much coding yourself. You're just sending your main ideas, vibes, thoughts to AI and it will code for you.

The ArtCraft project probably got a sort of jumpstart when the newest batch of models released some weeks and months ago. These models, like ChatGPT 6 (Astra), are another _massive_ leap forwards in capability.

So ... now you can just tell AI to clone an Adobe app, and if you tell it well enough, it will just _do it_. The evidence is there. ArtCraft is rapidly becoming a litmus test: are we at the point where this _actually works_? Where AI, in a short timespan, with little human interference, can create a viable alternative to decades old software? Or is it still too early / not possible / overhyped?

I am _interested_ to see where that goes. The current versions are good enough for me to do whatever I need on my laptop again. If they manage to get full feature parity with Adobe's software, I'd cheer for them, but I don't actually need or use that. 

{{% remark %}}
And, as everyone agrees, "fuck Adobe". Anything that disrupts capitalistic and monopolistic processes is good. Options are good.
{{% /remark %}}

In the same way, I've seen "vibe coded" games pop up more and more over the past 6 months. Whenever a successful game releases on Steam, someone has "cloned" it within two weeks (hoping to get a share of that pie). Half the posts on game development subreddits are now from people who never made a game before, have no clue what they're doing, but they have a somewhat functional thing to show off.

Like with ArtCraft, it is broken and buggy. It's not great. It's not winning game of the year or even selling a copy. But it's vastly better than anything I could have made _in one hour_. It's like a shortcut to a prototype, a scaffolding, that you can build on top of.

{{% example %}}
This is, by the way, why the number of "cyber security incidents" has skyrocketed. Just this week, the largest supermarket chain in the Netherlands was completely unavailable and out of stock everywhere because of another hack. (In fact, the shelves are still mostly empty here.)

It used to take months and expert knowledge to find _one_ tiny weakness in a server or computer or company's website. But now you can just ask AI to try everything and within a few hours it will say: "oopsie already hacked them".
{{% /example %}}

## The Turning Point

**I have never used AI for coding.** Never, not even once, not a tiny bit. Not in hobby projects, not in stuff released.

I have never used AI for writing, or editorial design, or fleshing out my board game ideas. At my online store, I give away the source files/original files for (almost) all work. Because it might be valuable to customers, but also to prove/show that it was manual work.

The only AI I ever used was for certain _illustrations_ that I couldn't make myself. (Because of bad laptop _or_ lack of time/skill/resources.) 

I didn't see the point. As AI rose to prominence the past few years, I checked in once in a while, and decided: "It's not good enough. I am faster and better on my own, and I get more fulfilment out of it."

But now ... now I can't make that decision anymore. I can't tell myself that I am faster or better programming completely manually. It's just not true anymore.

ArtCraft shows it, vibe coded games show it, the multitude of succesful websites and web projects that were completely made by AI show it.

I decided that I needed to update my skills. Get with the times. Most companies nowadays are hiring for AI skills too. 

I should At least _check out_ how AI works now and what it can do. Verify myself if it's all hype or not.

Thus, I spend a day or two learning all about it. How to actually do it. What (free) tools are available. How to make it work _better_ by telling AI more specifically what you want and what you don't want. 

Mind you, I was actually finishing other projects at the time. I just Googled a few things whenever I took breaks. I took a few notes on what I needed to remember before going to bed.

But it was enough. I got it working, asked AI to make me some random tiny game ideas, and **it did**. 

* When it was done, I had a functional game, which hit (almost) all the requirements I had communicated. 
* It was a bit ugly and there were bugs/mistakes. But _most_ of that was my own fault: I hadn't considered it and hadn't told AI what to do.
* It always took between 5 to 15 minutes on the different AI models I tried.
* It was able to follow strict requirements on coding style, variable naming, how I always liked my folders/files/scenes set up, etcetera. In other words, it did not just create a functional game, it created a nice clean codebase that reads as if _I_ coded it.
* Thanks to years of experience, I was able to very quickly fix issues, understand the codebase, and add extra features myself.

Granted, I had blown through half my budget on the free plan. I would only be able to run a few of these prompts per week. But imagine what people can do when they have money and can subscribe to a Pro plan ...

## Conclusion

I wanted to let people know about ArtCraft. It's not a replacement for Adobe's software just yet. But I hope it will become one, and I am reasonably confident it will. Having free, open source, faster, smaller alternatives to these crucial apps should help all poor creatives around the world (like me). Most arguments against it don't hold any weight, which means only lots of positives remain.

But despite this positivity, I must also admit with a heavy heart that I can't ignore AI much longer. 

It has surpassed my ability in many ways. In surveys, a staggering number of developers now report using AI all day every day. And they are faster. They don't need to spend three days trying to understand some complex algorithm they might need for a game. They get things done, and maybe those things are worse and coded in a stupid way, but they only spent a day on it whereas I would take at least a week.

My little experiments with "vibe coding" did not soothe my worry but merely increased it. Yes, inexperienced coders will only create more rubbish with AI. But people like me, people who have _any_ sense of what they're doing, can steer AI in the right direction and get the current best models to perform miracles with just a good idea and a few prompts.

I actually wanted to continue this experiment. Try it for a _bigger_ project, something more long-term with more prompts, instead of just tiny prototypes that I was never going to seriously develop. But ... when I thought about it ... I was just overwhelmed. _Any_ idea was possible now. Even the massive "dream games" I thought about as a child, but which I dismissed because they were impossible to make (for a solo developer). I even asked others for ideas, and they blanked too.

When _everything_ is possible, and you don't need to do the work _yourself_, it seems we can't really handle that. We can't make decisions anymore. We're overwhelmed, without a goal, without a guide.

It changed my feelings from "wow I can make ANY of my game ideas now in way less time!" from "I don't know what to make or why to even make it anymore".

We'll see what the future holds. Right now, I'm just trying to keep my skills relevant, and doing these little experiments. I don't actually feel like vibe coding a full game/website/framework ... but maybe this changes in another six months.

Those were my thoughts for today,

Tiamo Pastoor