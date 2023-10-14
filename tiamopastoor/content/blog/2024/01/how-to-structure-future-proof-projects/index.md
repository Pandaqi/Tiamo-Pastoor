---
title: 'How to Structure Future-Proof Projects'
author: tiamopastoor
date: 2024-01-12
language: en
categories:
  - Miscellaneous
---

The past few years, more and more of my projects have turned out to be "ongoing" ones. It's not enough to do the project in a few weeks, finish it, and move on. No, these projects have many parts or depend on some digital component, and we all know how technology likes to progress relentlessly.

For example, I write [The Saga of Life](https://thesagaoflife.com). This project aims to tell the history of life on earth, across hundreds of interconnected short stories. Quite a big project. Will take many years to finish. As such, we're only at cycle 2 (starting on 3), and I'm already feeling the weight of my initial haphazard project structure.

Similarly, I create many board games over on [Pandaqi](https://pandaqi.com). So many, in fact, that I recently had to buy storage boxes to keep all my (paper) prototypes organized ;) 

Over the years, I've tried many different systems and approaches to structuring large projects or sets of notes/ideas. 

In this article I want to explain what I've learned and what I'm using now. This applies to both hobby/solo projects as well as large-scale projects with a team.

In summary, the answer is: **store everything in plain text files and folders** and **write everything down (as specifically as you can)**

## What NOT to do

### No "productivity" software

My earliest notes and ideas were written inside "note-taking apps" (in the broadest sense of the word). I've used _Scrivener_ for a bit, I used _Evernote_, I had a short stint with _Trello_.

I never _really_ used them though. Because I always felt they weren't the best approach and hindered more than they helped.

Why?

* Everything is locked inside that system. It's near impossible to get it out, transfer it, change it in some other way (outside of the app), **easily search it**.
* I've always had cheap and old devices, and soms of those apps are coded so horribly that they have issues on those.
* Many of them lock features behind a paywall, or require you to always be online, or employ other shenanigans.
* There's no version control, or a very weak version of it.
* That software is _so focused_ on note-taking that it encourages you to spend 80% of your time tagging things or making them look pretty or categorized, and only 20% actually being productive.
* (And if you don't have the energy for that, you dump all ideas of the last week in _one_ file, making it absolutely impossible to find at some later moment in time.)

Being "locked" into that system is perhaps the biggest issue.

This website had that exact issue until half a year ago. It used to be a WordPress installation, which means all the articles and pages were locked into their database and their formatting. It was a **pain** to get it all out and transfer it to a new system. I could only perform fixes and global searches (on the content) _after_ this whole conversion was done.

Now this website is just a bunch of folders and markdown files on my computer. I can immediately perform _any_ operation, using _any_ tool or software, on the whole website. (In fact, I can do operations across _all_ my websites at the same time!) We'll come back to that later.

### No proprietary format

So, at one point, I moved _everything_ into **Word documents**. One document per idea/project/concept.

Moreover, they were sorted into folders based on their general _category_. An idea for a card game? It goes in the `boardgames > cards` folder. Idea for a fantasy story? It goes in the `books > fantasy` folder.

This was already a big improvement. Consistent and standardized. Folders helped keep things clean and made it easy to find a specific thing.

But it was far from ideal.

For example, take my Saga of Life. All ideas for future stories are in their own folders based on time period. This means the first time period, for example, has ~20 Word documents inside currently.

Recently I thought "hmm, do I already have a story planned about the origins of Hinduism?"

The problem is ... how do I figure this out?

There is no way to search for a term (like "Hindu") in a bunch of folders with a bunch of Word documents. Even if there were, it would be impossible to do anything more advanced (like replace, move, copy, search on a regex, ...)

Sure, I write general notes to myself about what is and isn't already planned, but I can't do that in much detail. They mostly say stuff like "world war 2 has these 6 stories dedicated to it: ..."

Word documents can only be opened by Word (and some other programs who _try_ to open them). If they ever break compatibility, or I lose my license which I still have from university, or I want to work on a device that doesn't have it installed ... we're in trouble.

## What to do

### Plain-Text and Version Control

After some hesitation, I bit the bullet and converted the whole Saga of Life project folder to **plain text files**.

* Each story idea is one markdown file.
* Overarching files (such as one that lists all the _cycles_ and which stories should be in them) are as well.
* Any other files, you guessed it, are plain text.

Why is this an improvement?

* I can open/edit any file in any software (on any device).
* I can use **Git** to get version control for free.
* It's all stored locally and offline. (Faster, safer, no internet required.)
* I can easily perform operations (such as search-and-replace) on the _whole_ project, with a high level of control.

In the new structure, I can just 

* Open Visual Studio Code (in my case)
* Saga of Life is already added as a "Workspace"
* So I right-click, search in folder, type "Hindu"
* And tada! Any matches are returned, which I can instantly read/edit/use.

_What is version control?_ It means that any changes to the project are tracked. It means that, if I make a mistake, I can easily go back to an older version. Maybe I accidentally delete part of a story. Maybe I restructured some ideas, then realized I liked the earlier approach beter. It's like a backup on steroids. 

Git is the most popular (free) tool that's used worldwide. Even better, you can store your projects _for free_ on services such as GitHub. Any time you made a change, you "commit" that change, and your project (and its full history of changes!) is also saved online.

Somehow, I've always used Git and GitHub for my _programming_ ... but never considered using it for everything else as well! For years, my video games and my websites had version control and were stored online, but I never considered doing it for my books, board games, notes, etcetera.

Well, the idea is that you not only _can_, but that you _should_.

I also converted my other folders full of notes, such as my boardgame ideas. I receive all the same benefits for free.

* Hmm, didn't I already have a game themed around space? ---I do a quick search for `space` and find the old idea---
* I feel like I've been doing too many card games. Have I? ---I do a quick search for `card` and realize that I'm correct and should try steering some ideas into a different genre---

Remember that this searching and opening can be done in basically any text editor, on any device, quickly.

Some projects (such as code) can easily be converted to 100% text files. Other projects might need a bit more work or restructuring. For example, I'm still searching for music recording software that plays nice with plain text files. The one I've used all my life---while a nice piece of software---locks everything into its own unusable structure.

In the end, it should simply be your goal to have _as much as possible_ represented as simple _plain text files_.

That's already great. But we can go one step further.

### Markdown and Obsidian

First of all, I recommend writing plain text files in _Markdown_. It takes one minute to learn the few symbols. Once you know them, you can write text _and_ structure it (adding headings, lists, etcetera), quickly and without needing any software.

In Word, you need to find the button and click it to turn text into a heading.

In Markdown, you just write `# My heading here` and continue.

You could open those files in 30 years time, with random software, and they'd still be exactly the same and exactly as readable.

That's our goal here.

* Expect your project to have a longer lifetime than a few weeks.
* Expect technology to change and progress in ways you cannot predict.

In my view---and that of basically anyone else---Markdown files in simple folders is _the_ most future-proof and simple way to store any information. You can't go wrong with it. You'll never waste time on ... anything else. It's all about being productive, getting the ideas or concepts out, saving every thought in a structured way.

Of course, there _is_ some value in note-taking software. They do come with nice buttons or functionality or tools that are designed to _help_ you. So, what if there was some "productivity software" that _didn't_ lock you into their system? That _didn't_ use some proprietary format, or require you to be online, or make version control impossible?

There is!

There are multiple and their number will probably grow. But the one I know and use is [Obsidian](https://obsidian.md/).

It's basically a thin layer on top of those plain-text Markdown files.

* It gives you all the tools for project management. (Linking between ideas, canvases for sketching and brainstorming, quick searching, etcetera.)
* But at any time, you can ignore the software and just open/edit/do whatever with the actual content. Because ... say it with me ... they are just _plain text files_!

This also means that any project organized this way is perfectly suited for version control, GitHub, switching to any other system without any hassle, etcetera.

{{% remark %}}
The files store all their extra data and tags and stuff as **frontmatter**. That's a section at the top of a Markdown file where you can store any information or "metadata" you want _about the content_. This is, again, widely supported and the standardized way to do it. 

Every article on this website, for example, has frontmatter at the top with the title, the date, the category and a link to the thumbnail image. When I had to transfer this website from WordPress to Hugo (my current system), I could do one huge search-and-replace to fix all thumbnails and automatically put them in the frontmatter. Because, again, it's just plain text in a consistent format.
{{% /remark %}}

## General note-taking principles

This is really a topic for another time. But I wanted to give a quick summary of _what_ you'd want to put inside those text files. How to take notes and structure files well.

### Structure based on completeness

The only thing that matters is "what needs to be done?" (and thus "what's already done?")

This matters more than category, or tags, or whatever. When you wake up in the morning and go to work on something, what do you ask yourself? "What's the next thing that needs to be done?"

So structure things based on that. When I moved away from Word documents (to Markdown), I also moved away from categorizing things. Instead, I created folders from `0; Barebones` to `5; Done`. (I like the word barebones, others might use something else to represent "this is a vague idea that basically needs 100% work".)

As a project (or part of a project) moves along, things are moved from one stage to the next. Whenever I have doubts about what to work on next---be it a small task or picking a new project---I simply check the thing that is "most done" (but not already done, of course).

Ongoing projects, such as The Saga of Life, are put into `6; Ongoing` as an exception.

{{% remark %}}
Notice I talk in past tense. I'm currently figuring out if I can replace this system using frontmatter in the Markdown files that states how "done" something is.
{{% /remark %}}

This especially helps if your brain is hyperactive (like mine) and can never decide anything (like mine). I don't _have_ to decide! In this structure, there is always a clear list of tasks that are "most urgent" or "closest to being done". I work on those.

As a side note, I might `.zip` projects that are completely done and will not change anymore. This frees up space and makes things faster, but it also adds some "finality" to the project. I purposely make it hard to edit it again, suppressing my need for perfectionism and never finishing things :p This is a bit controversial and personal, though, so only do this if it helps you.

### Write everything down

Our memory is absolutely rubbish. Write down every little idea, every time your head goes "oh X might be a problem actually", or it goes "it might be useful to add this and this to the code".

If you don't write it down, you will forget it. Or you'll remember you had _some_ idea, but the specifics that made it good or important are lost. 

Crucially, if you work with other people, writing it down allows _them_ to see it and perhaps take it further.

I consistently ...

* Find back old ideas I'd completely forgotten, then read my notes, and instantly see how great they could be and thank myself for writing it down.
* Think to myself "let's quickly write down idea X, get it out of my head" ... then spend the next 45 minutes fleshing it out, coming up with even more ideas, until I basically have a clear implementation ready to go.

Writing is thinking. Writing down an idea both gets it out of our head _and_ makes us think about it more deeply, adding extra ideas or more specific building bricks. 

When I think "wouldn't it be fun to create a game around theme X?", it's worth nothing. It's just a vague thought. When I have to write it down, I have to ask myself about the mechanics, the setup, the approach, etcetera. Trying to write down answers for those questions, forces me to think further and flesh out the idea while it's fresh and exciting (in my mind).

If I come back to it---in a week, a year, or ten years---I can instantly read it and act on it if I still think it's good.

Be specific. Clarify exactly what's in your head right now. Future you will _not_ know what you mean with "great idea! we should add carrots that explode!", unless you also explain exactly _why_ that's a great idea and _how_ you came up with it.

### But don't write down too much

This is the flipside. The danger I talked about when using those note-taking apps. _Spending too much time writing stuff down instead of actually doing stuff._

To me, there are three clear areas of a project.

* Ideas
* Progress
* Future

Ideas is where you write down the initial idea, but also anything that randomly pops in your head. (Which, as you now know, needs to be written down!)

Progress are the things you're working on _right now_. Your to-do list for today and the next few days. This should be as detailed and specific as possible. You'll need that to actually get the work done.

Future is for, well, anything further ahead than perhaps a week. (Depends on the scope and duration of the project.) Write a _summary_ of what needs to be done. The general gist of it. But don't write anything more.

Why not? It's ...

* Overwhelming. (It's easy to look at a thousand tasks for next week and completely lose all motivation and energy. Stay focused on the now and perhaps the tomorrow. Our puny human brains just can't handle more, no matter how much we wish that to be so.)
* Useless. (The future is unpredictable. When next week comes around, the project has changed. You've found new requirements or new possibilities. It's highly unlikely that a detailed plan for the future will _actually work_ and _doesn't need to drastically change_.)

Stay lean. Stay flexible. If you find yourself spending hours writing plans/notes/ideas/to-do lists ... stop yourself, and if possible, just go _do_ those things.

{{% remark %}}
This is a true danger for me, as I write diaries and devlogs for all my projects. I often spend 30+ minutes writing about "here are the issues, and here is how I will solve them" in a lot of detail. Guess what? When I'm done with that, my mind thinks I've already done the work, and _rarely_ have the motivation to do those things now!

I leave it. I might only come back to it a few weeks later. And guess what? In the meantime, I've received better ideas or realized something doesn't work, so that whole plan _is never executed anyway_.
{{% /remark %}}

## How to apply this to your project or team?

### Common objections

You might read this and object with phrases like ...

* Well, this doesn't scale to a team working on the same project!
* Well, this is only for people with computery knowledge!

The first argument is simply not true. This is _designed_ to scale and be future-proof. 

* There is no limit on how many people can work on, you know, text files on their own computer. 
* Git version control has simple built-in tools to handle merging multiple edits by different people on the same file(s)---it was _made_ for that kind of thing! 
* Plain-text files are incredibly small (in terms of storage)
* There's nothing stopping you from adding tools _on top_ of this solid layer, such as the Obsidian I mentioned, or the structures that GitHub gives you (with wikis, issues, milestones, etcetera)

As I said, I've always had to work on cheap, old and broken devices. I have barely any storage and can barely open multiple programs at the same time.

Even my biggest projects are no issue at all for that horrible setup.

* They don't take up much space.
* I can open and edit all those files instantly with any half-decent text editor
* I am regularly forced to suddenly work on a project on some other computer or network. Also no problem: clone the GitHub repository on the new device, any device has a text editor, so I'm already working.

The second argument is also not true. It takes much _more_ work to teach people some proprietary software or some system that completely locks you in. 

If people can click and open a Word document, they can click and open a text file.

If people can learn there is a button to create headings, and where it is, and that they must select text and then click it to get the heading ... yeah, they can learn to type `#` in front of a heading.

The benefits are far too great and the required knowledge absolutely minimal. (Only the specifics of Git merging and branches might require a longer explanation and some more experience. But even then, you can set things up in such a way that the non-computery folk never need to know that.)

I do understand the objections, though. I wish I'd known and used these structures far earlier ... but I didn't, because I thought "well Word documents works I guess" and didn't spend any energy on trying something new. Only when projects became huge or prolonged, and issues became too large to ignore, was I forced to try new things.

### How to "plainify"?

Here are some recommendations for how to make anything work in plain text.

* **Notes, Ideas and Communication**: already works, as these are just text + images
* **Code**: already works, code files are plain text.
* **Writing**: already works, obviously.
* **Data**: already works, there are many formats for saving data that you can open with any text editor. (Doesn't necessarily mean it's readable or fun to look at ...)
* **Games**: the _Godot Engine_ already saves everything as plain text files, so use that.
* **Music**: the _Studio One_ DAW does a great job separating all components into separate files in clear folders. It's not perfect, but you also don't get one "huge audio project" and that's it.
* **Graphics**: I have not found graphics software that plays nice with this system. I've used _Affinity Designer_ for the longest time, simply because it's smaller and creates smaller files. But it's still _one_ file with everything inside.

The general idea is that you prevent "big files" (one file with everything inside), especially if they're in some proprietary format. Prefer many smaller files that do one clear thing.

In the early days, I might create one Affinity file called "My Awesome New Game" and do _everything_ inside that. Sketches, game assets, marketing assets, color scheme, _all_ graphics work for that project. 

Nowadays, I split it into multiple files. Each has a clear purpose and will only be edited if I actually _work_ on that aspect of the game. (If I worked on the "marketing assets", only that file will be changed in the eyes of the version control, while "assets" or "sketches" remains untouched.)

Additionally, lots of software has two ways to add other media: **embed** or **link**.

* **Embed** means that the media is completely _copied_ and saved inside this new file. (This means the file becomes much larger, but there's no dependency on that external file anymore.)
* **Link** means that it merely saves where the _actual file_ is located. (Nothing is saved inside the file, but if you move the external file, it can't find it anymore.)

If possible, prefer linking over embedding. Yes, you run the risk of having to re-link one or two things that were moved. But it means your project remains separated into small files that do one thing.

### Conclusion

So, in conclusion, how do you use these ideas in a professional project?

* Create a git repository for the project.
* Do as much work as possible as plain text files, preferably Markdown. (Notes from meetings, roadmap, wiki, whatever.)
* Everybody knows how to sync this folder. (Get the current state on your local computer + push your changes back to the repository)
* Now everyone can just _be productive_, offline and on their own device, using whatever software or setup they desire, at the same time.
* (Some people might use that Obsidian tool, or the extra functionality of Github, because they like it or need it. Others might never need to know they exist. It's all up to the individual.)
* Anything can be discussed _in writing_. If something is discussed verbally (such as during a meeting), _write it down_. Any deal or promise not written down and added to the project ... might as well not exist.
* And what if the requirements change? What if the project radically changes? What if the company is bought and some evil overlord forces everyone to change their ways? It's no issue. All the information is in plan text files, so nothing actually needs to change.

Of course, you might want to do a daily check to see where everyone is and whether things are on track. You might want more structure, or multiple repositories separated by division or task, or whatever is needed for your specific team or project.

As I mostly do solo projects, most of those are really simple and don't need anything else. Simpler is usually better.

## Conclusion

Hmm, it wasn't my intention to sound like I'm selling you some snake oil, but it does feel like it :p 

I have been creating small and large projects for 15 years now and this system is simply the best I can find. Nothing trumps simple plain-text files inside folders, with good write-stuff-down discipline and version control enabled. It has a myriad of advantages and almost no disadvantages.

I've "upgraded" my workflow in this way several times over the years. So maybe I'll find something even better the next 5 years. 

Each upgrade can feel like only a minor step. But if I compare my workflow 10 years ago with my workflow now (roughly what I described in this article), it's a difference of night and day.

Back then, many things had no backup. I regularly lost something or couldn't find it. It was so much hassle to transfer notes or projects to other systems, that I only remember painful days and even left some things behind. Conversely, I didn't write down many ideas I thought were brilliant, because I got stuck waiting for some app to open or finding out where on earth to put it.

Nowadays, I can find anything I need almost instantly, everything has a backup and clear version history, and my 10-year old broken laptop still chugs along nicely. 

That is not a given. That's the result of conscious effort to _keep things simple_. 

{{% example %}}
A looong time ago, I used to do graphics in Adobe Illustrator. Until that bloated software just failed to start or work without serious lag on my laptop. In my estimation, 90% of people would think "well, time for a new computer!" They'd spend a lot of money while their current device is _fine_ and get more and more stuck inside a complex ecosystem.
{{% /example %}}

Too many parts of this world are build upon the idea that change is impossible. Changing from your current workflow to a new one is impossible. Swapping software for something simpler or cheaper is unthinkable. Radically changing a system that just doesn't work well is impossible. The fact that the world might change, and your highly specific chain of apps might stop working in a year's time, is completely ignored. 

I suggest people start building projects with the expectation that _everything will change tomorrow_. This requires you to keep things stupidly simple and let go of any dependencies. This requires plain-text files and folders!

You can all laugh at me if, somehow, in ten years time the whole concept of files, folders and text on a computer is somehow abolished completely. But if _that_ happens ... I'm pretty sure every other website, app, software and workflow---which all rely on this core idea of structure---will have been destroyed way before that ;)