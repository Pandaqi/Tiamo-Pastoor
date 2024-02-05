---
title: "All my websites have changed!"
author: tiamopastoor
date: 2024-06-28
language: en
categories: ["Miscellaneous"]
---

I didn't know where else to write this "news", so here it goes on my personal blog / author's website. It's slightly technical, but mostly gives a general overview of what happened for any reader.

As a reminder, these are all my websites:

* [Tiamo Pastoor](https://tiamopastoor.com/) => this one, of course
* [The Saga of Life](https://thesagaoflife.com/) => free short story reading website
* [Pandaqi Studio](https://pandaqi.com/) => game studio, including blog and tutorials, board games and video games
* [ElTroubadour](https://eltroubadour.com) => musician website
* [Rode Panda](https://rodepanda.com) => my official portfolio (or just a crossroads that connects all my work and shows you where to find each)

Most of them are pretty huge and important. (To be honest, only my musician website is very small and at risk of being removed altogether, because health issues prevent me from making any more music.)

For the longest time, my websites used traditional "shared hosting". This means you pay for space on a big server somewhere, just like the other hundreds of people sitting on that same server with their little websites.

Almost 8 years ago, I joined an upcoming Dutch hosting company (with very good offerings and reviews). Since then, my hosting plan and number of websites have only grown (both in number and how expensive it all was).

## What went wrong

In recent times, however, I had some bad experiences with them. They didn't necessarily do anything wrong. But they switched their systems to one that works in a way that I despise, and their customer support became less and less helpful to me.

In short, they switched to a subscription model. They sent out one email a long time ago that, from now on, 

* Everything _automatically_ renewed
* It did so about 2 months before its actual deadline
* And once this happened---once you suddenly received an invoice for it---there was no way to undo or fight it.

As expected, I missed that email. (I am pretty sure it never graced my screen, but can't be 100% sure of course. Then again, a single email for such a _huge_ change is weird.)

Then the invoices started coming in. Domains I didn't want to renew. I never _said_ I wanted to renew them. I was about to let them expire, as I'd done countless times before.

Well, after some words with customer support, I was forced to pay up for something I never wanted and never explicitly agreed to, and that was that. It wasn't a lot of money, sure, but it's about principle and how things are run. 

I despise subscriptions. Anything that works "automatically" or renews "unless you do something about it way ahead of time" is just a scam to get more money out of people. Even if well-intentioned, perhaps because people like such a system more than prepaid, it ends up stressing people out and drawing more money from those who didn't want to spend it. 

I will not participate and I recommend everyone else to do the same. Almost everything in my life works on the simple model of "I pay for something when I need it", and nothing else, and it reduces tons of stress and has saved me tons of money.

Time to leave, I guess.

## Good Choices

This decision was easy to make because of two "good choices" I had made recently.

### Good Choice 1

I'd already switched all my websites to a shared, simple, minimal system. They are all "static websites", which even share some configurations and code behind the scenes. This means they are ...

* Simply plan folders and files with my content
* But I can write a single command to "build" that into a beautiful website. (Using all sorts of templates, code, styling, etcetera automatically.)
* Then push the whole thing to my server in one go.

The old blog---that is now just a _part_ of this website---was the toughest one to transfer. It used to use WordPress and was absolutely _huge_. Updating, moving, _any_ operation was slow and prone to error on that thing.

I was already happy with the switch. Now, updating all my websites---while checking for correctness---only took 30-60 minutes. I usually updated them twice a month, because I release new stuff twice a month.

### Good Choice 2

In my neverending effort for openness, transparency, sharing I had already made all my websites completely public and open source. You can find the GitHub repository for all and find the latest updates, including things that aren't visible yet on the public website. 

(If you know where to look, for example, you can find Saga of Life stories I am still writing at the moment.)

This meant that all my websites already had a well-organized GitHub repository under the same account.

### The Consequence

Now I realized I could host the websites for free!

There are countless website hosts that provide a free plan, as long as your websites are small and you don't need special features. After some research, the best one (especially for my system, Hugo) seemed to be Netlify.

All I had to do was ...

* Create an account (and connect it with my Pandaqi GitHub)
* For each major website, 
  * Add a `netlify.toml` file (that says how the website should be build)
  * Push this latest update to GitHub
  * Tell Netlify to use that as the source for deploying a new website

Within 30 minutes, literally my entire online presence had found a perfect duplicate on Netlify. (Well, Pandaqi was giving trouble, but it was minor trouble due to an accidental bump in Hugo version.)

For now, they were all on obscure web addresses, like `pandaqi.netlify.app`

But the entire website was right there. For free. Even faster than before.

Even better, they now build on the spot. I don't even need to manually write that command anymore and manually push it to the server (via SSH). Whenever I commit a new update to the repository, it builds and launches the new version.

{{% remark %}}
This was another reminder about how old and broken my laptop is. My TiamoPastoor website, for example, takes about 60-90 seconds. Sometimes it takes so long that it crashes due to timeout on CSS transpilation. On Netlify? Yeah, 5 seconds tops.
{{% /remark %}}

## What else needed to change?

### Use the right domains!

I needed to point my actual domain names to these websites. 
* First, I moved my domain names to a new registrar that was cheaper.
* Then, I updated their (DNS) records to point to the right location.

There are plenty guides about this, fortunately. When you follow the right one, this is a one minute process.

### Forget about custom email!

This is perhaps the **biggest change on the outside**.

Previously, each website of mine had a custom email address. For example, 

* Pandaqi had `askthepanda@pandaqi.com`
* Most of my work refered to my "business" or "freelance" email address, which is `tiamo@rodepanda.com`

Now that I didn't actually have hosting, I also didn't have a server to receive and store emails. 

Now, there are three things you could do here.
* Pick up a dedicated email service. (These are not free, but cheap, as they ONLY do email.)
* Use an email forwarder. This essentially fakes the email address and just sends them to another one---your real one.(These are free if you have only a few addresses/don't need 100 mails a day.)
* Forget all that and just point everything to my GMail address.

For years, I've been annoyed about having to manage all those different email addresses. I've always wanted to reduce them to just one, and this was a great time.

Additionally, my main email has always been extremely easy to guess (literally my name), so I'm not afraid of some insurgence of spam or whatever if I point all locations to _that_ email.

As such, I spent a day updating _all_ locations with my email to point to `tiamopastoor@gmail.com` or `schoolofpanda@gmail.com` (for games work). Those are the only two I kept, everything else was removed.

To reduce the whiplash, however, I did use the email forwarder to keep the other addresses running for a little longer. At some point, though, I'll ditch those too.

### Be more mindful about updates!

In the past, I updated the websites a bit willy-nilly. Because they only needed to be "correct" when I actually, manually, built and updated them.

Now they build and push the new update whenever I update that GitHub repository. So I need to make sure I only push updates that make sense. 

This was just a reminder for myself.

There are some details I left out of this article, but they are mostly technical and not that interesting.

For example, the Saga of Life website always needed a _second_ step. After building it, I also had to run a program to create the "search index" so that you could search through the stories in powerful ways. This also happens automatically now! (After I painfully figured out how to update the building commands to do so ...)

The Pandaqi website, as stated, is so large and diverse that this transition revealed some minor bugs or broken links. The new build process used a later version of Hugo and was more strict, so all sorts of things came out of the woodwork now.

## Conclusion

So, what's the new situation?

* I have completely left my old hosting + domain name provider.
* All my websites now automatically build from the open source repository (which anyone can visit) and host for free on Netlify
* All my domain names have moved, which makes them slightly cheaper to maintain.
* There might be some bumps in the road, but I'm sure I can work those out in the coming weeks.
* **Don't trust my custom email addresses anymore.** They're all gone, replaced by just my single email.

All in all, this saves me 100+ euros per year. For a poor starving artist like me, that's a big deal.

Additionally, I am back to a prepaid model where I explicitly pay for things, or they go away. The safer way to live!

Frankly, I can understand why my old hosting made the switch and why many people would want that. It's just not for me. I'd rather put the responsibility to renew in time on my own shoulders, than run the risk of receiving surprise invoices for anything.

This was my quick update about how everything completely changed behind the scenes. And how you'll probably only notice it because of the email change.

Hopefully this system won't need changing for a while,

Tiamo