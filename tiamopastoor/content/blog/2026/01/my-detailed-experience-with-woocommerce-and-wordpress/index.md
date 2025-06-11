---
title: "My Detailed Experience With WooCommerce and WordPress"
author: tiamopastoor
date: 2026-01-10
language: en
categories: ["Miscellaneous"]
---

When this article launches, I _should_ have officially launched my big webshop project. A new website connecting _all_ my work, allowing you to buy escape rooms, quizzes, games, merchandise, and more. Hopefully a cozy home for the long-term future, which both gives me an outlet for everything I make _and_ allows me to earn an income.

Launching such a large webshop obviously isn't a simple task. Multiple articles will release about the entire journey towards building it. Because _of course_ I had to pick a custom solution that I almost entirely _built from scratch_. Of course my hyperactive brain wanted to actually _know_ how all of it worked, and to code most of it myself, and to keep full freedom and ownershop over my store.

I did research and created a plan for about a week, then I started actually building this new website. I had already learned that it was impractical to attach a small webshop to every existing website of mine. Because of the way my hosting is set up, I had also already "accepted" that I simply _could not_ use any pre-made webshop solutions.

A few days into that process, however, I realized something. 

I still _had_ a running WordPress installation. I still _had_ a server that _could_ simply install an existing webshop system for free.

This server was a simple shared hosting, which had served my old Dutch blog (_Niet Dat Het Uitmaakt_) for nearly 10 years. That blog has been completely supplanted by my newer website---the one on which you're reading this article. There has been no reason for it to exist for a while now, but I'd paid for hosting annually, so I still had some months left before it was shut down.

You know what's the _one_ advantage of WordPress? You can install "WooCommerce" on it for free, which is a completely functional webshop integrated with any provider you'll ever find. In other words, I was quite certain that I could set up an experimental webshop on that old domain in less than a day.

_Why?_ Well, to experiment, and learn, and gain experience with _selling merchandise_ and _integrating a webshop with other platforms_. Any step I'd need to take for this one would be (nearly) the same as for my own webshop. But because I get an existing system (WooCommerce), there's no real risk or hard challenges that could stump me.

{{% update %}}
That big, international, custom-made online store has indeed launched! You can find it at [The Wayward Melody](https://thewaywardmelody.com).
{{% /update %}}

## A Wild WooCommerce Suddenly Appeared

And so, at the start of 2025, I "cleansed" the old domain (removing all posts, media, etcetera) and installed WooCommerce. 

* This is a simple as looking up the plugin and pressing "install".
* Then I could simply go to my merchandise platform (in this case, Printify) and pick Integrations > WooCommerce. It automatically connected.
* As soon as I made a quick test product, it automatically sent it to WooCommerce. It appeared a few seconds later, with all the right images and metadata attached!
* I installed a free basic theme (_Storefront_) ... and a webshop existed! 

Not very pretty, of course. Barebones. Only one (ugly) product. But it was _fine_ and it _worked_.

As expected, this was _really quick and easy_. Compared to building your own system from scratch, this is obviously much smoother sailing.

Was I making the wrong choice for my _actual_ online store? Should I just stay subscribed to this hosting and use WordPress for my webshop instead? I was really doubting myself now.

Once the initial satisfaction wore off, I stoically continued my plan. Add more products. Make the webshop more alive. Actually make sure I can receive payments and I comply with requirements for that. This is where I hit my first snags.

## First Issues

**Snag #1:** WooCommerce _really_ wants you to use their integrated system for accepting payments and managing that. This is fine, of course, except for the fact that this is _not straightforward_.
* You have to make an account ... and then another account (with Stripe) ... to do this.
* If you stop halfway, it will stay in limbo forever and keep bugging you, unless you manually choose to "reset everything" (risking losing other progress).
* It's not really clear on whether it costs money and/or how much of a cut it takes from your profits. 

Maybe it's _great_, I don't know. Many people use WooCommerce, and many use their integrated system, and they seem happy. But I heavily dislike having to make multiple financial accounts, accept multiple sketchy terms or checkboxes, jumping through hoops without actually knowing the cost of all of that.

I decided to bail out. I wanted to use a different provider anyway for my "real shop", so I decided to just use _that_ as the only thing. This was much easier.

* All these providers have their own plugins that directly integrate with WooCommerce.
* I installed it, added the secret token from my payment provider, and it was done.
* (Though, at that moment, the website wasn't verified yet so I could only use it in _test mode_ with fake payments. But the fact that _test mode_ worked instantly and flawlessly was a good sign.)

**Snag #2:** WooCommerce wants you to install even _more_. But one of these other things, I discovered, is something you _really want_. That's the WooCommerce Tax integration. It automatically calculates and handles tax calculations for you, which would otherwise be a royal pain in the butt---I know, because I made a webshop by myself, remember? :p

Also, it took me a while to get confirmation for this, but the Printify integration (and I suppose others too) automatically submits and handles shipping fees too. I'd have expected some settings here to turn that on/off, or override it, but I couldn't find anything. It's just ... whatever the platform decides is the shipping fee at the final moment of checkout, I guess that's it!

**Snag #3:** The (free) default themes for WooCommerce are very, very barebones. Both visually and functionally. The one I picked, for example, gave me _one_ extra page called "Refund & Return Policy" with some boilerplate text about it. 

A webshop needs much more than that. A Privacy Policy. Terms & Conditions. Shipping Fees and Methods. All these things need to be defined on some page, if not for the user---most never read any of that shit---then for legal/corporate purposes.

Similarly, the visual design was just black-and-white with more whitespace than actual design elements. I don't think it looks appealing at all, but all the other themes were somehow _worse_. I guess that's my problem. I don't like such "modern" and "stark" looks, I like things with rough edges, with some live to it, with more natural tones and curvy shapes. 

That's another reason I wanted to fully design my webshop myself. Despite having a solid chunk of customization options within WordPress _and_ WooCommerce, it's still far from enough. It's just way too hard to make things look better, consistently, improving upon a given base theme. I decided to let things be for this experimental webshop.

But with those steps taken ... it is done! People could visit the website. My first few merchandise products appeared without issue. Everything could be searched, bought, changed to different variants (such as different colors/sizes of the same shirt), all the usual stuff.

This took me a single evening. Granted, I am a very experienced web developer, WordPress developer, server manager, and---since a few weeks ago---deep into research on webshops and payment gateways :p But if you were to find the absolute cheapest WordPress hoster possible, you could have a fully functional webshop for almost no yearly fee at all.

{{% remark %}}
For example, this system could run on a hosting plan that costs 50 cents per month. You'd only need to upgrade once you start hitting serious numbers of visitors and sales, but, well, then you'll have the funds!
{{% /remark %}}

Despite the restrictions, some ugly design, and some uncomfortable tactics here and there ... I was pleasantly surprised by this. It all just works. At no point did I need to give my credit card, or pay anything, while I was able to design whatever merchandise I wanted and then place it in the shop.

As such, I feel I can actually recommend this setup. A cheap hosting, with WordPress and WooCommerce, and then a payment provider you trust and understand in the backend. Certainly much easier than creating your own custom webshop from scratch. 

At this point, I wrote down a "backup plan" to actually continue this setup if all else failed.

## New Issues!

Or, well, they're not really _issues_. They were things I had to keep in mind, or some settings I had to change, to follow regulations or make the system work.

I'll list the most notable ones.

* Certain payment methods _require_ certain fields to be given (by the customer) on checkout. As such, you have to make sure these fields appear in the form, and they are set to "required". _Klarna_, for example, requires all of them. (In the case of Mollie, a warning about these requirements was helpfully given in the dashboard.)
* **You can support multiple print-on-demand providers**. I don't know why, but I half expected this to be disallowed or really hard for some reason. But no, you can just install the plugin of a platform, and it works, and WooCommerce doesn't care about how many different ones you use.
  * I ended up using Printify, Printful and Gelato. These were the most popular ones, with the most offerings that I might care about, with a wide spread of where they can produce/deliver (cheaply). 
  * Some people had like 5 or even 10 of these connected, but that's just overkill if you ask me. Takes more work setting up + maintaining than any possible benefit you could get from that.
* HOWEVER, some integrations are ... less well-developed (or "outdated"). The Gelato one, for example, still requires some very old "Legacy REST API" that WooCommerce dropped some time ago. You have to track down how to install and enabled it again, which is just a thing you never want to do in general. (Without it, the entire Gelato connection juts doesn't work and becomes useless.) 
  * For a platform that calls itself a "technology platform" (not a printer), this is obviously a bad sign and very disappointing.
  * But okay, the Legacy API hasn't been gone _that long_. And by enabling "Compatibility Mode" between old and new (which WooCommerce informs you about), this worked fine.
* I ended up modifying that default theme, but only in two ways.
  * I added **custom fonts**. The default ones are just really bland, and thin, and lifeless. I had picked some bold and nice fonts for the first few pieces of test merchandise I made, and they looked really good when used on the whole website. I used the "Extra CSS" bit in the customizer for this.
  * I had to _create_ a new front page (from the customizer) again called "Homepage". When I did, it _automatically_ populated it with the correct WooCommerce shortcodes to display useful lists like "Bestsellers" or "Most Recent Products". I enhanced this page by adding a welcome text + some images for different "brands" I wanted to maintain.
* To verify your webshop, Mollie (and I presume all reputable payment providers) needs to be able to check you're authenticity. They need to be able to visit your website, see your products, see you have the right contact information listed, etcetera. This obviously can't be done ... while your website is "in development" and just shows a basic "coming soon" page.
  * The easiest way to circumvent this, I found, was to simply change the "checkout" page to "draft". This way, the entire website is visitable and exactly as it should be. But that final step---actually buying things---is impossible. 
  * You don't _want_ that to be possible, probably. But it also _can't_ be, because without verification, you can't set payments to "Live"; only "Test", which does nothing.

Step by step, I simply took the webshop further towards a fully professional and functional state. Along the way, I quickly sketched some logos and general design, but also worked out a few "brands" I could sell. (And their fonts, color scheme, general products/gimmick/marketing, etcetera.)

I didn't hesitate too much. This was a testing ground---a playground---so I mostly let my unbridled creativity (and 10+ years of experience) loose on this thing.

## Where do we start?

Now I was finally able to make the first proper products and then launch the new website.

And we get to the first real moment of "hesitation": _what to make?_ There's so much! T-shirts, notebooks, caps, hoodies, posters, etcetera.

I didn't want to just design one thing and then slap it on _everything_. It's a waste of time, the same design most likely doesn't fit/work on other things, and it's just overwhelming to customers.

I looked up the "Bestsellers" on the most common platforms. These were quite consistent, and not too surprising. This seemed to be the most sold items, in roughly this order.

* Shirts & Hoodies
* (Ceramic) Mugs / General Drinkwear (really sell well, I suppose)
* Tote Bags
* Phone Cases
* Canvas/Posters/Wall Art
* Caps & Beanies
* (Smaller things like business cards, greeting cards, stationary, kiss-cut stickers)

Okay. Still a lot of options.

I realized I had basically two ways to tackle this:

* Either make something for EVERY BRAND/IDEA using only ONE PRODUCT ( = "all T-shirts for now")
* Or make something for A SINGLE BRAND using all the different PRODUCT TYPES ( = "all Devil-branded stuff for now")

If I wanted to launch my store as quickly as possible, and make it look professional, I had to pick the _first one_. I needed to test my ideas and have something for every brand proudly marketed on the front page. I needed that breadth of portfolio as the website launched. Additionally, T-shirts _are_ easily sellable everywhere for roughly the same prices (regardless of delivery destination, for example).

And so I started designing at least one T-shirt, preferably two, for every brand I had. Though, if I got a _"very quick/good idea"_ for something else, I allowed myself to jump to that for a bit. I've learned it's important to somewhat follow what interests your mind at this moment, instead of always fighting it with discipline or following carefully laid plans :p

## There is so much to learn

As expected, when I actually started seriously designing and presenting products, that's when I learned the most (in a very short timespan).

### Lesson 1

**Lesson 1: Prices are "from"**. This is most egregious on Printify, but applies to other platforms too. When showing an item, it shows the lowest cost and shipping fee it _could possibly have_. In practice, however, you are always higher than this. For example, a T-shirt only had such a low retail price if you _only added something to the front_. When I added some nice design at the back too, and a neck label, the retail price suddenly **doubled**.

This isn't terrible per se---it's quite understandable that printing more/doing more steps cost more. But this becomes horrible when it is _not mentioned anywhere_. I've read a _lot_ of articles and documentation from Printify when I wrote my own webshop, because I needed to connect to their API of course. And in all that time I read _nothing_ about prices working this way. If I didn't have a "scientist's mind-set" of trying all different T-shirt configurations and checking prices, I would have no clue. (As in, I edited the same T-shirt to have front+back, only front, only back, etcetera.) The exact "cost" of every step or change is also not listed anywhere.

Since I learned that, I got into the habit of very closely watching that original advertised price and seeing if it went up sneakily. I also become more parsimonous, I guess, with my designs. A T-shirt with front+back+label is just _way too expensive to sell_.

The same is true for shipping fees of course. Printify just always shows the "absolute lowest", even though it knows my location and it's _not there_. Gelato, on the other hand, always gives the shipping fee for the Netherlands specifically, which is much more helpful and more fair. At first, I thought Gelato was a lot more expensive than the others, but once I realized these things, it turned out cheaper on several products.

### Lesson 2

**Lesson 2: One design, many variants.** Let's say positive and mention a _good_ thing now. All the platforms I tried (Printify, Printful, Gelato) allow you to upload a single design and then apply it to all the different variants automatically. For example, I only need to upload a single image and it can be used on T-shirts of all sizes and all colors I selected. (Obviously, one and the same design _can't_ look great on _all_ colors.)

Similarly, when designing a phone case, you can just pick all the phones it should support and it will auto-scale to match. This is obviously a big deal, because there are hundreds of different phone dimensions out there, and you surely don't want to have to create each one manually.

### Lesson 3

**Lesson 3: All integrations are different in subtle ways.** I'd have expected the basic stuff to be done in the same way by all integrations. How hard can it be to just copy-paste my description into the expected Wordpress format? Well, pretty hard, it turns out. Every platform has a few things it weirdly does or does not copy into WooCommerce, while having at least _one_ thing I know I'll always need to set/change manually now.

I'll give the biggest differences/lessons per platform.

* **Printify**: their mockups are great, but there are waaaay too many of them. I have to make sure to tone it down, otherwise my website is flooded with useless images wasting space. They have no way to set Categories or Tags from within the interface. Their default description is English only and pretty worthless. The only data they copy behind the scenes (at least for my website theme) is the _weight_ of the product. Their auto-add GSPR function is really nice, though. Also, _prices excluding VAT_.
* **Printful**: their mockups are almost non-existent. They give me a nice list of details in the description ... but it's not actually a list, so I have to manually type it _as a list_ in WordPress anyway. They can read my installation and allow me to directly set a known Category, nice. Their auto-add GSPR is confusing and pretty worthless. Also, _prices including VAT_.
* **Gelato**: just the right number of mockups. Default descriptions are Dutch too and I don't need to do a thing, nice. I can directly said Categories and Tags within _their_ interface. A bit more "extra info" is sent along. They don't even _mention_ the required GSPR information, though. Also, _prices excluding VAT_.

Looking at it like this, Gelato---despite using their Legacy API with a workaround---is clearly the most friendly one to use. It sends the most (useful) data along and doesn't require me to do much manual tweaking.

## My thoughts about the 3 main platforms

And now ... **the weird stuff per platform**. There is no common theme among these. It's just a list of odd stumbling blocks for me as I made my way through the first ~10 products.

### Printify

**Printify**: the biggest issue I have with this platform is its shady pricing practices. It seems deliberate how they obscure what things will _eventually_ cost, when all is said and done, which always makes you second-guess yourself.

* One of my products (a children's shirt) _forced_ me to incorporate shipping fee into the price. No mention of that anywhere. No way to turn it off.
* Its editor is very nice. Clear instructions, clear size guide when you start a new design, clean, easy-to-follow steps, easy to select variants.
* When you just start out, though, it does something unhelpful (if you ask me): the button to "save design" is replaced by "publish". To bail out of that, you need to get out of the designer and save the product some other way. Because if you publish then, you'll _likely_ have the wrong price, wrong description, things not set, etcetera---and all that automatically turns up in your store. After a few designs, it just becomes "save design" (and you can publish once you're really done with it), which is more intuitive.
* Copying to WordPress is slowest of all platforms, but that's probably because of the sheer number of mockups it wants to upload to my website :p

### Printful

**Printful**: this one started as a tech company, and it shows. It has the most automatic functionality and surprising functions for ease of use.

* The mockups are 3D. As you design, you can rotate, resize, and basically look at your product already as if it were in front of you.
* If there's anything to look out for, it gives clear and helpful warnings about it. (For example, when I designed a notebook, it informed me that paper sizes differ between EU and USA and how I had to take that into account.)
* As stated, it connects a bit more with my store and allows me to directly choose things (such as a known Category from my WordPress installation)
* It actually has a file/folder system behind the scenes. So aaaall the designs I upload can actually be neatly categorized and reused later, instead of them disappearing in some hard-to-reach void.
* They are absolutely the fastest to send the data to my website and get it all synced.

### Gelato

**Gelato**: I'm not sure what I think of them. 

* On the one hand, they provide all the necessary options (in the product designer) _and way more_. They have more buttons in the interface, more customizability, more possible actions, etcetera.
* On the other hand, they have _fewer types of products_ and they are often clearly _more expensive_ than the other platforms.
* The weirdest wrinkle I discovered was about where to find the "dimensions" or "template" to use for your designs. It's not, you know, in the editor itself as you work on the thing. It's also not generally available somewhere. 
  * You have to be _logged in_, 
  * and _through your dashboard_ go to a _product page_,
  * then you can press the arrow (next to "create a design with this"),
  * and pick the "print template" option!
  * If you figure that out---which took me a while---you get a PDF which tells you the size. Which is sometimes _wrong_ or _without units_ :p
  * I've been designing long enough to figure stuff out anyway, but I imagine this is just needlessly hard for most people to use.

## Simplifying my approach

After playing around with all the platforms (and ~15 products) for about a week, I had learned even more and decided to change some things again. 

{{% update %}}
Also, for those interested, this was about the time that Mollie verified and accepted my online store. It was public, everything functional except final checkout of course, and had about ~10 products which were NOT "test" anymore but their final designs and prices and all. This means verification took about 4 business days. Make of that what you will.
{{% /update %}}

First of all, I made the "definitive" choice that this WordPress website would be entirely _Dutch_. Which means 99% of its customers would live in the Netherlands. Which means using American platforms (mostly Printify; Printful and Gelato are registered in Europe) makes things needlessly difficult and expensive.

I decided to stop using anything not located in Europe and switch to more local platforms. In my case, the best and closest ones were _Spreadshirt_ and _Prodigi_. 

{{% remark %}}
At least, that's what I used for _this_ webshop. My bigger one will be English and international from the start, and my gained experience with these services will be very helpful then.
{{% /remark %}}

Additionally, my hyperactive brain had _completely_ overlooked checking possible payment methods. With print-on-demand, you get billed for the _cost_ of producing the item first, and then a few days later (or hopefully faster) you hopefully get the total money that the customer paid on your bank account. The difference between the two is obviously your _profit_.

But they delay here, or rather "potential time difference", isn't great. It means that you need to have funds _in advance_ to pay for orders, which is especially risky if you just happen to have a really good day and get dozens of orders at once.

I had assumed all these services would support PayPal. Most of them did, but not Printify. That's another reason why I basically dropped them.

Yes, I have a (prepaid) credit card. I have it precisely for companies that refuse to support any other payment methods!

But I've also learned over the years that you want everything in _one place_. I don't want to check and update _multiple_ financial accounts in multiple places all the time. It's a lot of stress, a lot of work, and introduces the very reasonable chance that you make a mistake or forget this. In which case you'll have insufficient funds to pay for the orders placed in your webshop.

And ... what happens then? I didn't know! I realized I'd been completely blind to that part. I guess I assumed that the order would just _fail_ if it couldn't reach your credit card or whatever.

In reality, this is what happens (on _all_ platforms I checked):

* When an order is placed, it is "on hold" or "draft" by default.
* At specific times (configurable by you), it collects all orders "on hold" and makes them "confirmed". 
  * _That_ is when it immediately charges you for the cost of production, and starts producing it.
  * If your funds are lacking, the order simply remains "on hold".

As such, having insufficient balance isn't the end of the world. It just means an order is slightly delayed, I get a message, and I can fix it. 

{{% remark %}}
I absolutely despise things like "wallets" or "credits". Instead of charging your card/PayPal/whatever _directly_, you can often pay in advance for credits. Platforms like these always sell this as a big feature: you can be certain you have enough credits, you might get some other tiny benefits, etcetera. 

In reality, of course, this just leads to _you_ doing more work, putting _more_ money than needed into that wallet ("to be sure", "to save myself work"), while they charge a fee for taking it out again or whatever. And that's exactly what they're counting on. Ugh! One of the reasons I wanted to leave my old hosting provider, frankly.
{{% /remark %}}

Still, I wanted it all in one place, so I moved to platforms that supported PayPal and that's that. I've had a business bank account there for ages and use it for almost everything. This means I have all finances in one place, yes, but also that it most likely never runs out (because there's regularly money coming on _or_ me personally checking it).

The biggest downside is that every platform has its _own_ stupid process for proving that you're a business and such. The number of times I've had to resubmit the same details (business name, tax ID, vat ID, business ID, address, whatnot) ... But it's worth it, because it saves you so much money---and effort in the long run---to have all of this done through an official company.

Also, some notes about the new platforms.

## Spreadshirt

### No, wait, Spreadconnect

First of all, you don't actually want "Spreadshirt", as I thought initially. You want **Spreadconnect** :p 

Very confusing, not clearly handled. (Spreadconnect _connects_ with other installations; Spreadshirt/Spreadshop is its own ecosystem you're locked into. But they link to each other and allow creating an account at both while using basically the same branding, wording, etcetera.)

Once I figured that out, though, signing up and connecting with WooCommerce was very fast. It doesn't give you any more options or settings, though, with its WooCommerce plugin. You basically have to use whatever settings you get from them. There are a few more settings within their own dashboard, but that's equally limited.

Their interface for designing products is more barebones than the others, but that's fine. As stated before, I design the whole thing myself anyway and only use the "creator" for uploading that final file and I'm done. I do wish these platforms would indicate the necessary requirements (size + which areas you can customize) more clearly and _before_ entering the creator/product creation mode.

After making a product, it almost instantly appeared on my webshop, exactly as intended. Though the details here are, too, a bit barebones. It doesn't automatically send size, or weight, or legal stuff, or anything else.

It also **dynamically shows stock**. This is really nice. Getting an exact number of units in stock at any time gives the webshop an even more professional feel, and of course prevents people buying things out of stock that get delayed/canceled/lost in the system somehow.

### Shipping Success

I guess the **biggest benefit** of this service is that its shipping fee is **reasonable**. What an invention! 

> Spreadconnect simply asks a flat shipping fee depending on the price range.

{{% remark %}}
Which also means there is no automatic shipping fee calculated, or live fee being polled. So you have to watch out and actually set a different (default) shipping method for these products. Otherwise the interface either displays "no shipping available to your address" or you accidentally give free shipping to EVERYONE :p
{{% /remark %}}

This means I could move my webshop to a structure that, to me, feels simpler and fairer. 

* I can incorporate part of the shipping fee into the _product prices_.
* And then, if you order above a certain threshold (say 35 euros), you have _free shipping_.

Products are still _cheaper_ (for the consumer) than they would've been with Printify, for example, if you look at the final price (including shipping + taxes). At the same time, they have no "surprise shipping fee" at the end, which is absurdly high and seems completely random.

In fact, I like this so much more that I started switching ENTIRELY to these other platforms ...

## Prodigi

### WordPress > Prodigi

They do something **really weird**: they import ALL your products (even those from other stores, even those already in your WordPress installation). Then you can decide which ones to fulfill with Prodigi by clicking their toggle.

At first I thought: "What the fuck were they thinking? Why would you ever want Prodigi to try and fulfill orders from other services? Why would you make a _clone_ of the _entire website_ into Prodigi?"

As I used the system more, however, I could see the reasoning behind it ...

**The consequence of this is that product creation works the other way around.** 

You create a new product _in WordPress_, then tell Prodigi it should fulfill that. It will copy some settings you were able to set in WordPress, and then you can add the other settings from within its interface. This, also, took a while to figure out because it doesn't clearly state this "philosophy".

{{% remark %}}
Really, I've noticed that almost ALL documentation/guides in the world do this wrong. They explain your goal and your highly specific steps ... without actually starting with the general philosophy and problems this guide aims to solve. Something as simple as this would've done wonders: "At Prodigi, the workflow for a product is A>B>C. If you struggle with Y or Z, this guide explains how to do that." And _then_ those specific steps start to actually make sense.

I only figured things out by finding [some obscure article by them](https://support.prodigi.com/hc/en-us/articles/13133663883164-Do-you-have-a-Woocommerce-integration), on their USA version, in the "question-answer" format here. That's just not very findable or searchable.
{{% /remark %}}

On the one hand, this approach has some benefits. I can _start_ a product's life within WordPress, setting all the right values already. This ensures that I only need to do that once and that the product is published while already having all the right details. Once done, Prodigi picks it up and I actually set _their stuff_ on _their platform_.

On the other hand, this means you need to make a product publically available for at least ~10 minutes before it can actually be fulfilled. Because, in the time span, you're still busy setting up the Prodigi side. Is this a problem? Not sure. The chances of someone finding and buying it in that time frame are quite slim.

I tested if it also copied my "concept" or "draft" products, but it didn't. Or maybe that was an error, because the very first product to sync took veeeeeery long. Afterwards, though, any newer products appeared almost immediately in the Prodigi overview.

### Why so hard to find?

My biggest gripe with their system is the fact they're almost hilariously secretive with their core information (such as pricing, shipping, templates).

To see prices + shipping rates, you must ...

* Visit the "Pricing Sheets" tab.
* Visit the specific product category in which you're interested.
* Pick your destination Country.
* And then you can download the `.csv` file with all the information.

This is an "okay" system, I guess. You get everything in one place _and_ clear numbers on shipping to the Netherlands. Because you get the entire spreadsheet with _all_ mugs and their _exact_ costs (price + shipping), you can easily compare and pick the best one for you.

Still, a price attached to the actual product as you browse would've been nice. Or simply downloading all data at once, or data for multiple countries.

Similarly, you don't get mockups automatically, _because_ your product's life starts in your WordPress. You need to set the product image there already, and it's simply copied into Prodigi when it syncs. 

Like most, I don't actually want to have the physical product + a nice camera + a nice space and lighting before I can make each mockup myself :p Fortunately, Prodigi provides a tool to generate one. It's a bit clunky. You have to find the link below the product listing, then reupload the same designs/image, and then download the final mockup. Why not just add a button at the product itself? "Download mockup"?

### Pricing & Integration

Connecting with WooCommerce was simple again, though the steps are a bit hidden. See my earlier remark about _actual_ documentation being hard to find or in weird formats. (The "home page" for such integrations is always just useless marketing blabber that asks you to sign up now ... even if already logged in.)

They're a bit pricey on some core items ... and very cheap on other core items. The same with every platform really. That's why you use multiple, I've learned, and pick the best one for a specific product.

Besides all that, they have a very solid interface, offerings, speed, etcetera. They feel a bit more clean and "professional" than the other platforms.

_What do you mean by that?_ Something like Printify is clearly working hard to appeal to amateurs who just want to put a personal photo on a shirt for fun. It has bright colors, fancy stuff, all information easily available even when not logged in. But when you actually want to use it for a shop, you get the nasty exceptions and realize how this setup is _not_ very helpful if you want to run a larger shop. 

Once I saw Prodigi's spreadsheet approach, I quickly realized how much faster I could compare prices and pick the best thing. All the information was there, in front of me, in a nice table. With Printify, I'd need to tab back and forth between lots of things, then _still_ be completely surprised by extra charges or fees when I was done designing---ruining that research entirely.

Prodigi basically tells you "log in first and show you mean it", and then you get the tools that scale to a larger webshop in the long run. I guess that's what I mean when it feels more professional and serious business.

Like Spreadconnect, their **shipping** was another major reason to choose them.

* They have clear and definitive rates per country, though it doesn't change much between countries. (And they show both WITH and WITHOUT tax, which, in my opinion, every darn store should always do!)
* And these rates are _usually_ lower than something like Printify or Printful.

After looking at it for a bit, I saw that I could use the exact same setup as with Spreadconnect. Same slight markup in base prices, same "free shipping if order large enough" policy.

That's nice, because it streamlines the webshop (for both me and visitors).

## Comparing Prices & Shipping

I've basically explored 5 completely different POD platforms now. I've made and launched a few products with each, which means I have a much clearer view of pricing and costs now. Especially the parts about shipping fees (and taxes, to a lesser extent) obfuscated a lot of this information.

So, as a nice summary to illustrate my final findings, let me give you the current prices for a specific item on ALL these platforms.

As the product, we pick an 11oz mug with color (handle and inside). This was actually my "quick test product" for all platforms, because I happened to have an image (with doodle drawings) that perfectly wraps around such a mug. And it was marked a "bestseller" on several of them, so, yeah, guess people like mugs.

I give all prices _without_ VAT ( = tax), because, well, most platforms don't actually communicate this (clearly). And when registered as a business in the EU, this tax part falls away when shipping between most countries.

Finally, this isn't a completely fair comparison, because prices also change depending on _color_, and some of them offer more colors/more printable area in the first place. But for such a simple mug that's clearly the same ("bestselling") base product in all these shops, the comparison is as fair as you can possibly get.

Anyway, here it is.

* **Spreadconnect**: after some searching => BASE = 7.52, SHIPPING = 3.45** / no extra cost for multiple. Buying 3 mugs = €26.01
* **Prodigi**: clearly states => BASE = 4.25 (+0.85 VAT), SHIPPING = 6.95 (+1.39 VAT) / no extra cost for multiple. Buying 3 mugs = €19.70
* **Printify**: after some searching => BASE = 5.17, SHIPPING = 6.54 / 1.86 additional. Buying 3 mugs = €25.41
* **Printful**: clearly states => BASE = 7.48, SHIPPING = 4.49 / 1.75 additional. Buying 3 mugs = €30.43
* **Gelato**: clearly states => BASE = 7.11, SHIPPING = 5.86 / 1.57 additional. Buying 3 mugs = €30.33

The "**" at Spreadconnect refers to their flat shipping fee depending on total order size. I picked the shipping fee in case these few mugs were all you bought. The nice thing here, though, is that adding different types of products to the order would _not_ significantly raise this. Because shipping is not _per product (type)_.

Also note that not _all_ products can ship multiple for free at Prodigi. This is only true for, as a rough guess, half their products. You can see this information in those weird `.csv` files you get :p

Finally, note that this is the COST price. This is what I pay to the platform to make it. I have to add extra margin on top. (At least 20%, to make enough profit and to guard against slight price changes in the future without selling these at a loss.) 

## Are we FINALLY done now?

Yes. Kind of. I switched some products to other providers to completely cut out Printify. That was the only platform I needed fully gone before launching.

{{% remark %}}
Sorry, Printify. If you read this, I quite like your interface and everything actually, but it's just too darn expensive and far away for a completely Dutch webshop. Also, please support Paypal and stop with the ridiculous shipping fees.
{{% /remark %}}

This actually made some products _better_, while all of them became much _cheaper_ (even without taking shipping fees into account sometimes).

It also fixed my issue with waaay too many mockup images being blasted to my server. I can just manually set one or two as I need now, and that's that.

### Lessons about branding

I also learned some more lessons about "branding" along the way.

* Use a consistent **label** and make it **big**. If your brand signature is _not_ actually on the products, or quite small, or slightly different each time ... then the entire idea of having a memorable brand sign is lost. (I realized this when I showed one of those first _Safarilly?_ T-shirt designs to my mother and she was like "What's that text below? _Safe very_? I can't read it.")
* Make it **smaller**. I was constantly tempted to add another wrinkle to the brand, another thing "I could do with it", but every time I realized this weakened the entire idea of a brand too. So, yeah, pick a clear focus/vibe/color scheme/font for your brand and _do not deviate_.
* Try to use the **same platform/supplier** for all items within the same brand. Most likely, people will buy multiple items from the same "category" at once, so if they're all from the same place this saves a lot of money. Additionally, you can be more certain that colors/sizes/final look will be consistent.
  * As I explained, I would have _liked_ to switch to only 1 or 2 platforms behind the scenes. But all of them simply have a few products they don't make at all, or that are waaay more expensive then elsewhere, so I couldn't reduce platforms for the entire webshop.
  * For example, only Printful offers a _sheet_ of stickers. Which is far more sensible than selling _single stickers_ (which cost like 1 euro, but 4 euro in shipping). => Though, of course, the workaround would be to sell a HUGE sticker size where my design is simply cut into parts. But that kind of large sticker also isn't available on my other platforms (at the moment).
  * And so, the second best option to streamline things was to reduce platforms _per brand_ :)

And so, going forward, I had a much better approach for figuring out "what products to use". Instead of going "I have brand idea X > let's check aaaall possible products for it", we go the other way around.

> "Let's pick one platform that matches what I need for brand X the most. Whatever types of things they offer, I can use for products, and nothing else."

Self-imposed restrictions like this are often quite _useful_ for making decisions and not getting overwhelmed or stuck.

### Lessons about mockups

Once I used a few platforms that DON'T generate and deliver lots of mockups automatically ... I started to miss them, obviously. How would I get a product image now? It's no good to just show the _design image_---people need to see it on the shirt, or on a wall (in a room).

After a few tries, however, I learned two ways to achieve mockup images myself.

* Even if there is no "mockup generator", there are still example image of the product. I could often copy them, erase/cut out some part, then plaster my design on top.
  * Sometimes this is really easy. Sometimes this is too much work, as there are so many tine parts to cut out. (For example, with a ringed notebook/calendar, it takes a lot of work to keep the rings but remove anything around it.)
* I could ... let AI generate some basic mockup backgrounds for me! As I expected, it's _really good_ at this, because its dataset is probably filled with the same types of mockup/product images.
  * The prompt would be something like "A background for a product mockup image. It should show a wooden table from above top-down view, and perhaps some mugs, books or pencils for decoration."

I spend 30-60 minutes generating mockup backgrounds for all sorts of situations, which I imagine I'll be able to (re)use for almost all future products.

### Lessons about security

Of course. Within a few days of launching the store, the first hackers arrived. It's WordPress _and_ a webshop, which means two major targets for hackers that overlap.

I had a security incident some years ago on that old blog. My password hadn't been compromised. All my files were still there---the hackers had just plastered their own japanese webshop on top.

At the time, I thought the server itself might have been hacked, as I saw absolutely NO proof anyone got inside the WordPress installation.

Looking back, though, I think I figured out how they got in. 

{{% remark %}}
Not sharing the details, of course. But when I completely reset the installation to start the webshop, I realized something inside the installation was subtly connected to another account, which I made when I was like 14, and completely forgot it used a _very guessable password_.
{{% /remark %}}

Anyway, the blog was already very well protected since then. I modified the login URL, chose some weird username for my admin, I changed passwords, I added two-factor authentication, etcetera.

But ... when I launched the webshop, and the first hackers came, they _used my weird username_. This freaked me out a bit. How did they know? It shouldn't be visible anywhere! Well, that's how I discovered that old account connection which would reveal that username if you got in!

The hackers didn't actually get in. Even if they would, still not a huge deal. Every part of this installation requires _two_ parts---my site and the other platform---so it's not like anyone could do anything financially damaging, like place loads of orders for free. I would never ever store a credit card or something on a WordPress installation.

But after getting hacked once, I just don't want to ever visit my website again and be greeted by some _other_ webshop :p I wanted to tighten security before handling any money on this website.

I know enough about `.htaccess` to start blocking and redirecting some things. But after a while, I realized this just wasn't worth it, and I was too much at risk of accidentally blocking good requests/communication (such as those with the merchandise platforms). Also, I use CloudFlare to proxy requests, which means the IP addresses coming in were unreliable anyway.

And so I replaced the mess of tiny plugins I had collected over the years, and most of my custom code, with one plugin instead (Wordfence). Login page can't be found. Limit login attempts. Require two-factor authentication. Etcetera. Many people online will say "don't worry about all that nonsense, just use strong username and password" and they are WRONG.

The biggest deal, though, was that _weird username that the hackers knew somehow_. So I also made a harder switch:

* I made a _new_ admin account (with weird username and password), then deleted the old one entirely. This was some work to do well (without breaking stuff), but an added benefit is that it required going through all plugins/connections and ensuring there wasn't some dangling security hole this time.
* I set it up so that anyone _trying_ that old username for logging in would be instantly blocked for a while. This caught all the hackers' attempts for a few days until they seemed to have given up.

### Transparency (and simplicity) first

As I input these initial products, I became a bit annoyed at having to go back and forth between prices, calculations, taxes, shipping, etcetera. Even when I settled on a price and thought I was done ... something would change, such as my switch to using one platform per brand, and I'd need to do it aaaaall over again.

In other words, I needed an easy place to _write down_ my research into a product (price, cost, specifics about production, etc).

Initially, I defaulted to just keeping a file for each product (on my computer, in my webshop project folder). But then I realized: **why not share this info with the customer?**

The entire setup of my webshop is "I don't care about money, but I have to earn a bit, so we're going to be completely transparent and honest about everything"!

And so I updated my workflow to add this information _publically, to the product itself_. I had already learned where I could find different attributes/variations of the same product, and how to add more myself. So I decided to use that space.

* Platform = platform used for production
* Production = country/method of production
* Base Cost = raw cost for one unit
* Shipping Cost = average shipping cost for it ( + for next items)
* Margin = the profit margin (excluding taxes, fees, etcetera)
* (Brand = the name for my personal brands, Google likes this info)
* (Material = material used, again, mostly Google likes this info)

Yes, this is more manual work for me _when launching a new product_. But at all other times, it's less work. No more updates, no more re-finding the same info, and the website itself is my "bookkeeping" for most things.

In any case, I learned that a bit more manual work before launching a product is good. It forces you to slow down, catch mistakes, and don't create new products in too much of a hurry. For example, this is how I caught a single product (out of 10+ by now) for which I forgot to incorporate shipping fees properly.

## It's a launch!

Once I had about 10 final products, and everything else sorted out (home page, info pages, those custom fonts that look way better, etc), I set the website to public. 

That was just the start of it, of course. I now had to market it from my other websites. I had to create more. I had to get verified for payments/support a few more methods, and more.

But, of course, the real interesting data comes over time. Did people _find_ this webshop? Did I have any sales? What else did I learn by being able to freely experiment with a shop and its products?

Well, through this process of quick iteration and pumping out products, I mostly arrived at the general wisdom you can also find online.

* Offer the customer choice, but not too much. When I accidentally enabled _all_ variants on a T-shirt, I was completely overwhelmed by how much stuff was added to the shop. How many options, buttons, dropdown lists, and more this single product page had. It was just _too much_. And if I think that, then surely customers think that. 
  * Lesson? Provide 2--5 versions of the same thing, but don't go overboard.
* At the start, I created whatever merchandise came to me. And it led to a disjointed shop with no clear reason to buy here, or what the products were even trying to accomplish. Then I found a few "gimmicks". A simple idea that could attract certain people and around which I could "brand" multiple items. Things went far more smoothly then, and the shop looked more professional. 
  * Lesson? Merchandise follows the same rules as books, and films, and any other "franchises". Try to establish a certain brand identity, a certain gimmick or rule, then create multiple things around that. Like, well, literally like a _brand_. 
* This might be personal preference, but I kept my descriptions really succinct and left it at that. Nobody is reading the endless platitudes about how _amazing_ this fabric is and how incredibly _sustainable_ this one fiber is.
  * Lesson? Less is more. Just state why you made the thing and why it might excite someone else, leave it there.

Over the course of the few months I had left, the number of products was increased from 10 to ~80. Some had really strong designs, some were just experiments by me to figure something out. I fixed issues with the website, added more images and a consistent use of language, and by the end of it, it looked like a professional online store that had been running for a while.

And then ... **I shut it down.**

It felt like a waste of money to extend my subscription to this domain and server hosting. It also made my life needlessly difficult, as it was the _only_ website running completely different systems, with a different service, for prices I don't agree with, compared to all my other websites.

During those months, I managed to get registered in the usual places (such as the Google Merchant Center), and the statistics WordPress collects automatically shows that this actually brought visitors. But the number of visits _decreased_ compared to my old blog, and rapidly so. (Please remember: that old blog had not been updated in two years and provided nothing besides free articles I wrote over the course of ten years.) 

Only a single purchase was made. All the systems worked as intended, WooCommerce did exactly what it should do, so that's a _positive_. But I actually hate it, because it turns out you can't "close/destroy" a merchant account if it has had _any payment at all_. So, that single purchase ensured I will have a unused garbage profile on that banking platform for the rest of my life :/ A pretty stupid system, if you ask me, but it is what it is. Let's hope it never interferes with my main profile that contains the main online store.

So, in the end, what did all of this bring me? Besides the experience gained and lessons learned, besides making the best use of server space that I'm losing anyway, what did this little experiment do for me _financially_?

Well, it cost me nothing. WooCommerce is free, WordPress is free, all the platforms and plugins are free, and I had the domain running on a server anyway.

But I only sold _one_ thing. Which, after taxes and what not, would not even have been enough to pay for keeping the domain name for one more year. (And `.nl` domains, for The Netherlands, are much cheaper than `.com` and others ...)

Most of all, I saw---again---that the saying "build it and they will come" is obviously not true. Without marketing, without other things already linking to your products, without getting through _somewhere somehow_ ... nobody is finding your shop. And you need at least hundreds of visitors to make a few sales, if you have "normal" conversion rates.

This is not the fault of WooCommerce or WordPress. Though these tools are very inefficient and flawed, and potentially a huge security risk or functionality breakdown waiting to happen, they are also _free_ and take _almost all the work off your hands_ when starting your first small online store. But please see this as your reminder that simply building something, even if it has a wide variety of great merchandise, does not guarantee that _anyone_ will visit the store or be convinced to buy something.

Those were my thoughts on this little experiment. This article became _way_ longer than initially intended. I also wrote it 6 months before publishing it, because I wanted to wait for more data and the release of my actual main online store. In fact, I was about to publish this article (~1,500 words) ... when I had this annoying feeling like "didn't I write MUCH MORE about this journey!?". After some searching, I indeed discovered the file "woocommerce-article-part-2-continuation", which contained the other ~8,000 words with the specifics of my actual practical experiences :p 

Hope this helped,

Tiamo
