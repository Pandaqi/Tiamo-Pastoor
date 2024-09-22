---
title: "We Don't Need More Data Centers (Part 1)"
author: tiamopastoor
date: 2024-10-20
language: en
categories: ["Miscellaneous"]
---

Once every season, I do one "big backup". I save the entire Documents folder on my PC, which contains everything I ever made, to multiple different locations.

Don't worry, I backup my work _every day_, as you should! But only the work I've done that day, backed up to an external hard drive and (if applicable) GitHub. I don't have the hardware or Wi-Fi to do a bigger backup every day, nor do I think it's worth the time and energy.

Lately, however, this has become impossible. The pile of work I've done, or projects I'm doing/investigating at the moment, is just too large. On top of that, I have personal files I want to keep, important administration for my company, and much more that also needs a solid backup.

The backups needed too much storage space. It took an entire _day_ to push them to multiple backup locations. I had to cut it into parts, because there was no free cloud storage solution that had enough space for me ;)

I was getting annoyed. I was wondering why, in this day and age, we still get "only" 10 or 15 GB of free space. Surely SSDs are cheap enough now that I should be able to store a few projects of mine for free anywhere online!

Then I realized I was being stupid and it was my own fault.

Once I finished a project, which is hard enough as it is, I never did any cleanup. I just moved the folder to "Done", zipped it, and that was that.

This means all my old projects are filled with loads of nonsense. Stuff I never needed, stuff I don't need anymore, duplicates that I eventually moved to other projects, things I _accidentally_ placed there, the list goes on. Any time I do a backup, I'm dragging all that dead weight with me.

This problem exploded in size once I started using generative AI for some projects a few years ago. To get the exact image you want, you're sometimes prompting 20 times, saving all the in-progress results and tweaking them. Doing that process for the many illustrations you need for a _single game_ quickly yields a folder that's 1 GB in size ... for a simple card game.

And in a way, I knew this already. But I ignored it. I told myself that I had to save every file, every AI results, every version/iteration of an idea. What if, one day, I _needed_ that specific file again!? Better keep it all in the same project folder!

Silly, I know.

The solution wasn't to demand more storage space. The solution was to simply _not be stupid_ with the data I wanted to save.

As such, I write this article for three reasons: give some life lessons, make a point, and explain my current "storage management" process (which might help some other people).

Let's do that in reverse order, because that's the easiest way to explain it all.

And let's do it in three separate (shorter) articles, to prevent overwhelming readers. Because, as usual, I had more to say about this than I expected when I started writing.

Here are links to all the articles.

* Tips for back-ups and storage management (this article)
* [YouTube is running out of space](../we-dont-need-more-data-centers-part-2/)
* [A Life Lesson: Upper Limits](../we-dont-need-more-data-centers-part-3/)

## Tip #1

All my work is inside a single root folder (`Documents`). I never, ever, save something in another place on the computer, which means I have no other locations I ever need to back up. That's **tip number 1**.

You can probably guess why. When I was younger, I used to place stuff wherever. If I downloaded something, it would automatically land in the downloads folder ... and I'd never move it, just working from that folder all the time.

Until, some time later, I had completely forgotten where the project was. Either I wasted time finding it again ... or I completely lost it on accident later.

{{% remark %}}
A "subtip" is to back up your stuff to three locations. One offline, one online, one unrelated to the other two. But that's not really the point of this article.
{{% /remark %}}

## Tip #2

Within that folder are a few subfolders per category of work. This is quite unique to me---most people will not be mad enough to try and work in 5 different creative areas at once. In your case, just try to identify the biggest groups or subdivisions for your projects, and create folders for those.

{{% remark %}}
In my case, there is: `Writing`, `Programming`, `Design`, `Music`, `Administration` and `Personal`. Which is slightly cheating, because Programming really contains two root folders: Games and Websites. But that's my perfectionism talking.
{{% /remark %}}

For years now, I've backed up those subfolders. Because backing up the entire `Documents` folder just isn't going too work. Too big, too slow, no cloud service allows that for free.

This is **tip number 2**: have clear subfolders so you can back up stuff in _smaller chunks_. This is faster, makes you more likely to actually do it, and allows you to only back up what's actually changed.

## Tip #3

**Tip number 3:** When done with a project, zip it, and put it in a "Done" folder. This has several reasons.

* In its compressed state, it takes up way less space.
* It's a clear sign your done. The project is finished; you can forget about it.
* You're less likely to (accidentally or not) leave stuff in there or tweak stuff in there, then forget about it later. Because the project is "closed" by zipping it.
* All those finished projects---a list that will only get longer over time---will be _out of the way_ of current projects or upcoming ideas.

I changed to this system after the _last_ backup. It saved a lot of space and made my workflow even cleaner, but zipping is not a panace. Certain files compress really well, others barely make a difference.

## Tip #4

If you use version control like _Git_---which is highly recommended---this keeps the entire history of the project inside a hidden `.git` folder. This is great, but also takes _a lot of space_. Like, a lot a lot, without ever warning you.

There are more instances like this, such as my music software (Studio One) creating a `Cache` folder and a `History` folder that basically keep copies of your project at previous points in time. Again, nice, but it takes _a lot of space_.

All these things are not necessary to back up. If anything goes very very wrong, the worst thing that happens ... is that you lose the exact detailed history of a project. Not the project itself.

Almost every night, I back up my work to my external SSD. I do so using _FreeFileSync_, which has a handy feature where I can set _filters_. By excluding all those folders that aren't _necessary_ for backup, I could reduce the size of every subfolder by multiple gigabytes.

That's **tip number 4:** identify automatic folders that eat space but aren't actually necessary to back up, then exclude them.

## Tip #5

But now we get to some more advanced stuff. Things I only realized after that last failed backup, and a very boring (but necessary!) day cleaning up my act.

**Tip number 5:** cleaning up your project is _part of finishing the project_. Whatever it is you've worked on, no matter the state it's in, cleaning up those files is simply a necessary step before you're allowed to call something "done".

When I went back into those older projects, it wasn't hard at all to identify what I should throw in the trash.

* I often had loads of _fonts_, both zipped, and unzipped, and converted (to `.woff2` for web). What's the point? I reduced it to just the zipped version of the fonts I used.
* I often had loads of _images_ in multiple versions (original, converted to `.webp`, compressed, cropped) I only kept the most important one, which is usually the original.
* I often had folders literally labeled "temporary_put_this_elsewhere" or just "inspiration" with random resources of things that looked cool or books I wanted to read. At the time, I just had to stash this somewhere. It's not a part of the project and shouldn't be in there.

If I'd cleaned up the projects _back then_, this would've been a far less painful (and error-prone) process. Because now I had to be very careful and "re-familiarize" myself with those old projects to see what could be thrown away.

Now, by repeating this step for my current projects, I've made it a habit to always do this. To make "clean up the folder and files" a basic step in the process of 100% finishing something I worked on.

This, again, saved several gigabytes. Without actually losing anything in the back-up.

## Tip #6

This is perhaps the most controversial one, but it's a hard lesson/realization that you need to get at some point in your life.

**Tip number 6: No, you will not need all those files, and you will probably not ever look back at the older projects.**

I've made board games where I _explored_ the usage of AI, but never actually used it. That entire folder, filled with hundreds of images that were never used, takes up 0.5 GB. If I just remove it, the entire project stays intact, and is just, like, 10 MB.

Even in my projects that used generative AI the most, 99% of the generated stuff is garbage nonsense and will never be useful for anything. Why keep it around? What am I hoping for? That one day I get a new idea, and I realize "wow that project 3 years ago has EXACTLY the 10 images I need!", and then I'm slightly more efficient?

More likely, I've forgotten all the content inside an old project after only a week, and I will never ever open them again. 

I am a big proponent for maintainability and sustainability, don't get me wrong. Don't treat everything as "abandonware". Keep all your work, keep it around. Maybe _you_ will never need it, but perhaps others can learn from what's inside. Maybe 10 years later you _do_ remember you wrote some algorithm for that game 10 years ago, and you can now open up that old folder and copy-paste your old work.

But there's this clear divide between "this is the actual project" and "this is dead weight I'm lugging around for no other reason than nostalgia or some misplaced hope to ever use it".

And so I did the following for all my old projects.

* When I have a clear feeling that something can be used for a current or upcoming project, I move it out of that old project and to its new home.
* I remove all other unused images/fonts/inspiration/whatever. It's just too unlikely I'll ever need it. And when I do, I won't remember it's in this folder anyway, and it's probably faster to just re-do or re-discover it.

This shaved off a few more gigabytes---with pain in my heart, yes. It always feels like a waste to throw away anything you "worked on" or "spend time on", even if it was a few years ago, and the only time you spent was typing a prompt and then downloading the resulting image.

But it really isn't. I've been making projects at breakneck speed for 15 years now. Many of those projects explicitly build on older ideas or earlier attempts. 

And yet, the number of times I've ever went back into an old project folder could be counted on one hand, maybe two. The number of times dragging all those old files with me turned out actually useful is equally low.

After these steps, the backups were small enough again to quickly push to multiple locations. Without losing anything! 

But now, risking your surprise and shaking of the head, let's go _one_ step forther.

## Tip #7

Though we don't want to accept this, everything we do in our life will be outdated at some point. Everything moves forward. Once an idea is executed, others can _build_ on that idea and "supersede" it. At some point, you have 5 projects that do something much better than the original idea from 20 years ago.

At which point you can ask the question: is it worth keeping that old project around anymore?

It is now 5 years ago (I think?) that I invented "One Paper Games". A full board game you can play by just printing a paper and grabbing one or more pencils.

By now, I've made dozens of them, each one better than the last. The technology behind it on my website is far more powerful, flexible, and fast than when I made the first one. My understanding of how to make them _good_ is much better now.

In other words, I don't see a reason anyone would ever play my first attempt. It's just a worse game in all aspects. With a single click, you can download a newer and better OPG instead.

These terrible first attempts are still online, but with a warning that they're "deprecated". At some point, I will just find all deprecated projects and ... remove them.

**Tip number #7: accept that newer work supersedes older work. All work has a limited lifespan, and it's better to kill things when you should, then let them linger.**

Those old projects that I would never play, and I wouldn't recommend anyone else play, are still taking up valuable storage space and internet bandwidth. Whenever I do a major update to my website, or clean up my system again, I have to check if those projects didn't break and my eyes have to scan over that dead folder all the time.

I don't know _what_ the threshold is. But there _is_ a threshold, and once crossed, those older projects should just be either _removed_ or _minimized_. (Removed if it's a tiny project that's just terrible or outdated; Minimized if it's a large project that you can still reason has clear value.)

With _Minimized_, I simply mean that I'd take the game off of my website and do a very strict cleanup of its folder. For example, I'd only keep the final product ("output"), not individual versions or original files ("input"). I'd still have the game and the work, it'd still be playable, but it's "minimized".

{{% remark %}}
Perhaps it's a better metaphor to say I "put the projects to sleep". Though that just sounds like a euphemism for destroying them :p
{{% /remark %}}

Given enough time, I think anyone will stop thinking of every project as "their baby". Given enough time, I think anyone will come to this realization.

When I made that first One Paper Game, it obviously took me many hours, lots of energy, and a big spoonful of optimism and hope that this would be "an amazing masterpiece". Now, many years later, I'm fine with deleting that first attempt because it's been superseded and surpassed in every way by dozens of other projects.

All of this to say: deprecate outdated and surpassed work. Keeping it around forever will waste precious storage space and energy, at no practical or tangible benefit. 

In fact, it might hurt you. It's a common wisdom that you don't want your portfolio to show _all_ your work, just your _best_ work. Because if anyone happens to arrive on one of your older/worst projects first, they immediately get a bad impression of you and won't even consider the rest. And _you_, as the creator, are by far the best judge of what you should deprecate and when.

## Where do we end up?

My entire life's work---with some notable exceptions---can be backed up on the free 15 GB storage from Google Drive. 

{{% remark %}}
I only have two Google accounts: one personal and one work. The backups go on personal; the work one contains my many games and nothing else. All those "Download" links from Pandaqi.com link there.
{{% /remark %}}

I can access any of the old files within a few clicks (go to backup > go to subfolder > go to Done > double-click to open zip file), either online or offline. I only lose a few hours every season to do some final cleanup and push the "big backup".

I'm not losing anything. All the old projects are still available, playable, usable. But as long as I don't actually use them, they're heavily minimized.

We're not talking about a few hobbyist projects either. These are hundreds of board games, video games, completed books and even series of books, musical albums, and more.

In a sense, my total footprint for online storage is only 30 GB or so. This includes all other accounts, as I've only ever made an account when _really needed_, and closed/deleted data when not needed anymore. If everyone did that, we wouldn't be running out of storage space any time soon.

So no, you don't need more storage space. Be smarter about how and what you store instead. It takes effort now, but is actually sustainable and saves you immense effort in the long run.

_What are the notable exceptions?_ There are a few old albums for which I recorded _loads_ of audio in highest-resolution format. I never published those albums, because I had no clue what I was doing, and I hadn't learned about proper mic placement (making all the recordings noisy and washed-out). I need to find the time someday soon to propery sort those out, keeping what's needed and writing down what needs to be (re-)recorded.

And there's one 3D game I worked on a lot, but never finished because my computer stopped being able to handle 3D. And, well, 3D models+textures eat a lot of storage space. Once I can actually open those models/run that project again, I can sort out that project too.

Those projects were simply too large and done before I had any sense of proper project structure, but they're the exception.

This is the end of the first article. This story continues at the second part!