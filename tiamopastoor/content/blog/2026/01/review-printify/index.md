---
title: "Review: Printify"
author: tiamopastoor
date: 2026-01-20
language: en
thumb: "printify-review-header.webp"
categories: ["Reviews"]
---

This article will discuss my experiences using [Printify](https://printify.com). I used this service on two different online stores---my small Dutch webshop (now gone) and my [larger international webshop](https://thewaywardmelody.com)---to provide automatic fulfilment of merchandise (or "physical goods" in general).

This article is not sponsored, there are no affiliate links, I have no bias, nothing of the sort. I _reluctantly_ created online stores because I needed some way to earn money as an artist and creative person.

Additionally, I don't like being beholden to a _single_ platform. (What if that platform suddenly raises all their prices? Or goes out of business? I'd lose my entire shop at once!) I tried ~8 different POD platforms behind the scenes, which means I'll be drawing a lot of comparisons.

For more information, check out my [longest (and first) review about Printful](/blog/2026/01/review-printful/)

As such, I believe my thoughts on this platform will be the most brutally honest out of any reviews you can find.

As always, I'll try to keep it brief and practical! However, actually using multiple POD (print-on-demand) platforms on multiple large webshops that I custom-built myself ... is bound to give me a _lot_ of nitty-gritty in-depth experience with every part of it. And I don't want to leave anything out.

{{% update %}}
My small Dutch webshop, which was always meant as a "small first step" anyway, has since been removed. All its products moved to my bigger store!
{{% /update %}}

{{% update %}}
This will be an interesting one! Because I ended up _removing_ all my products from Printify and completely leaving them, for reasons that will hopefully become clear as you read. I might return one day, and maybe I am just trying to be too minimalist and financially "safe", but I still found it worth mentioning that this was the only platform I "cut off" like this after already using it for a bit.
{{% /update %}}

## What is Printify? 

Printify is one of the biggest POD platforms, if not _the_ biggest. It provides a massive and diverse product catalog, many different print providers to choose from (in different continents, though mainly focused on North America and Europe), and often the lowest prices on them all.

When you start researching this world and setting up your (first) online store, this is probably the platform you find first. Or the one that's recommended to you first.

Its layout is modern, fast, and user-friendly. Its pricing looks _very_ attractive. As such, this was my very first entry into this world too.

Printify actually offers both ways to run a POD business:

* They can be your _platform_ only. You need a separate storefront (your own website, a Shopify website, WooCommerce, whatever). Once you receive orders there, they are sent to Printify and they automatically create and ship the products.
* Or they can be your _shop_ too. They call this a "Printify Pop-Up Store". In this case, they handle _everything_ for you, and you merely get the profits. But, of course, you're stuck in their ecosystem and your shop is at some hard-to-find subdomain of theirs.

At time of writing, the Pop-Up Store is only available in select countries and I couldn't test it unfortunately. Because, honestly, having a platform do _everything_ for you at _no cost_ is obviously the best possible deal for a starting merchandise seller.

## How does it work?

You go to their website, create an account, and link it to your store. They have clear documentation on every integration, and it's usually just one or two steps. 

{{% example %}}
To integrate with WooCommerce, just install the Printify plugin and press the button to connect. Once done, it will list it as one of your "stores" and everything is handled automatically. 
{{% /example %}}

{{% example %}}
If you have some custom website (not an existing integration), use their API. In that case, you must register an API store manually in the dashboard, and then generate public/private API tokens for it. Those tokens are needed in all communication with Printify (from your custom storefront) to tell it who you are.
{{% /example %}}

There is no upfront cost and you technically don't even need to enter any billing (or other) details to get started designing and sending products to your store.

In practice, though, I recommend configuring things immediately. I'll explain my personal tips after explaining the general philosophy of how Printify works.

The general workflow for **creating a product** is as follows:

* Go to the store where the product should be displayed. (Printify separates everything by store, but it's relatively easy to share information or duplicate/copy products between stores.)
* Visit the catalog and pick the product you want to customize. 
* Now pick the **printing provider** that should make that product. This is a step completely unique to Printify, and one I will explain in detail later!
* Press the "Start Designing" button to, well, start designing something for this chosen product.
* The interface gives you many options, both for designing on the fly and for simply uploading premade designs you made locally. 
* Once saved, you move to a different screen with the product _details_. This includes the title, description, which mockups to use, which price to list, etcetera.
* This product will now be listed in the full list of products available on this store, in the Printify interface. It is NOT on your storefront yet! It is, as of now, "unpublished".

The general workflow for **selling a product** is as follows.

* Once a product is both designed AND has details, you can _send_ it to the connected store. This is called "Publishing". (You can unpublish or remove that product later if you want.)
* Once it's on your storefront, people should be able to put it in their cart and buy it. (The money paid by the customer goes through _your_ storefront and your payment provider, never Printify.)
* When that happens,
  * Printify immediately gets a signal that the order is placed. Nothing happens yet, though.
  * By default, it "auto-confirms" orders after 24 hours.
  * That is, 24 hours later, unless you cancel, Printify now **charges you the product cost** and **starts fulfillment** (automatically).
  * (If you don't have enough credits available when it tries to charge you, the order is put on hold until you do.)

The crucial thing here is that this is a two-step process. It charges you immediately for the order. Some time later, you get the money that your customer paid from your storefront. As such, you need to make sure you have some reserves ready to pay for a sudden influx of orders (or delayed payment of the money owed to you). If not, no harm done, it just means all orders placed will _not_ move forward yet---not until you then manually pay them and "continue" them.

My recommended configuration for the general settings is as follows.

* If you have a business, give that information (most importantly, your tax ID) to Printify. It means they don't charge separate tax on top of their production costs in most cases.
* Set the entire interface/store to your intended shipping zone and currency. It will help show the right prices and hide the options that probably won't work for you. (This is not perfect, though, as I will explain later.)
* Set order fulfillment to **manual** while still testing stuff! Otherwise, orders are automatically accepted and created, which can easily be abused (by others or accidentally by yourself) if not careful.
* Determine if you want to enable **order routing**. This is, unfortunately, a complex topic that I will explain later. It is _not_ as simple as Printify make it out to be, and what many people believe it to be.
* You might check out **branding** to automatically add branded messages/labels to all orders. This is quite easy to do, but creates an air of polish and professionalism right from the start. (What I'm trying to say, is that it's _far_ easier to enable/disable things and change settings _before_ your shop is live, so use this moment to look around.)

But, as always, just play around, try things, and see/experience what works for _you_ and _your shop_.

## Designing

The Printify designer is probably the **best** out of all that I've tried. It made it very easy to start designing my first products and get a feel for how all of this works. Accessible, looks good, clean design, easy-to-follow steps, easy to select variants or options.

{{% remark %}}
Sometimes I really, really wonder what other platforms are doing. It takes <1 hour to simply update a few colors, add some more whitespace, have some junior web designer go over their stylesheet. But they don't, and now their website looks ugly, and clunky, and needlessly outdated. Printify grabs way more people simply by virtue of _looking_ like they care about their design and their look.
{{% /remark %}}

Let's go over the most relevant advantages and disadvantages

### Advantages

* As stated, looks good, works well, easy and intuitive steps.
  * Their product pages are also nice. Clear information, well-designed, not too minimal nor too busy. 
  * Though a platform like Printful has way more information, such as live availability of specific variants at specific printers, and I do really _miss_ that at other platforms.
* It has many tools for designing (or changing an existing design) on the fly to make it exactly as you need. This includes things like **having AI generate something** for you, or remove a background, or change colors. 
  * In the ideal world, people use this as a handy tool. Why erase something by hand, for example, if AI can do it faster?
  * But of course, I know that many people just let AI generate garbage 50 times a day and sell that without a shred of shame. Is that working for anyone? I believe most can instantly tell it's AI, and it's often even the wrong aspect ratio and resolution. 
  * So ... I'll let you decide whether this is an advantage.
* Their **mockups** are excellent quality and offer a lot of (diverse) customization/choice. That is, some platforms only give you one mockup ("T-shirt on white background from front"), or only provide 1 or 2 different "environments" for the product. Printify provides much more, which makes any product listing immediately more professional and interesting.
* Their **auto-add GPSR** function is really nice. (This is a regulation in the EU requiring you to add information to every product about warranty, origin, care guidelines, etcetera.) I ended up copying that general structure for all other platforms manually, that's how much I liked it.
* They clearly show the **requirements** for your designs while designing. (And you can also easily hide that information when you don't want to see it anymore.) 
  * This might seem obvious, but almost no other print provider does this! Too many times, I had to just figure out through trial-and-error what resolution and aspect ratio their system expected. 
  * At other times, on those other platforms, the requirement was only listed in some weird location. Or just flat-out _wrong_.
* Printify gives you **choice** of printing provider. Even within the same product, you can choose where something should be made. This allows you to print things locally (depending on your webshop's locality), and the one with the lowest print/shipping cost for the specific things you need.
  * Some printers, for example, are cheaper but only support 3 different color shirts. Or only the front side of the shirt, not the backside.
  * Some printers have only a single location, some are present in many different places. If such a product is ordered, it will just pick the one closest to the destination ... in the ideal world.

### Disadvantages

When you just start out, Printify seemingly does something unhelpful (if you ask me): the button to "save design" is replaced by "publish". 

To bail out of that, you need to get out of the designer and save the product some other way. Because if you publish then, you'll likely have the wrong price, wrong description, things not set, etcetera---and all that automatically turns up in your store! 

After a few designs, it just becomes "save design" (and you can publish once you're really done with it), which is more intuitive.

That said,

* Their mockups are great, yes, but it generates **way too many of them**. That's just a waste of space and bandwidth, especially if you have a minimalist website setup and host on a cheap server.
* The way it handles and displays pricing is ... meh. More about that in the next section.
* While it's nice that they show the requirements (e.g. an image this large for the front, an image this large for the back) in the designer, they don't communicate it _before_ starting the designer. People like me, who fully use premade designs made offline with my own software/tools, don't like that. Because we need the exact dimensions BEFORE adding that new product.
* They only calculate/invoice prices in the **dollar currency**. This means, even when you set the right zones and desired currency, some parts are still in dollars and numbers are often wrong unless you constantly convert them in your head. 
  * I'd like to write this up to "Printify is an American company, they are simply mostly focused on doing things in dollars".
  * But other platforms had no such issues. And Printify is actually a European company with its headquarters in Latvia :p
* Similarly, if your desired currency is not dollars, they will invoice you _for every single individual order_ (instead of bundling it into a single invoice once in a while). This is a lot of noise and extra transactions. It might also flag your bank/credit card and temporarily lock your account because of suspicious transactions.

## Templates & Listing

Okay, so you finished your product design. You selected the product and desired printing provider, then you uploaded the right images for the custom parts. 

This means your base product is saved, but you still need to add the details: title, description, price. (As a reminder, once that is done, hit publish to send it to your store and you're done!)

In some of my reviews, I could skip this section entirely. It's just a press of a button, it automatically lists the product in your store as you intended, and you're done.

With Printify, however, I have some more things to say.

The biggest issue I have with this platform is its **shady pricing practices**. It seems deliberate how they obscure what things will eventually cost, when all is said and done, which always makes you second-guess yourself. 

Their "how much profit will you make!?" widget/example on their front page---or general marketing pages---is just wildly disingenuous. It only considers retail price minus cost. Yes, of course, if that were the reality we'd all be swimming in money! Such an example _completely_ ignores shipping fees, taxes payment gateway fees, different costs for different print areas within the same design, or even different costs depending on print provider!

At first, their prices may seem **really good** and much lower than their competition. But once you actually start designing things, start seriously selling, you'll discover that this is just a trick.

Additionally, **prices are "from"**. This applies to other platforms too, but is most egregious on Printify.

When showing an item, it shows the **LOWEST cost and shipping fee it could POSSIBLY have**. 

In practice, however, you always end up higher than this. For example, a T-shirt only has such a low retail price if you only added something to the front. When I added some nice design at the back too, and a neck label, the retail price suddenly more than doubled.

This isn't terrible per se---it's quite understandable that printing more/doing more steps cost more! But this becomes horrible when it is **not communicated**. 

I read a lot of articles and documentation from Printify while I build my own webshop. For research, for interest, or simply because I needed to connect to their specific API. And in all that time I read _nothing_ about prices working this way. 

If I didn't have a "scientist's mind-set" of trying all different T-shirt configurations and checking prices, I would have no clue. (As in, I edited the same T-shirt to have front+back, only front, only back, etcetera, and meticulously tracked pricing.) The exact "cost" of every step or change is also not listed anywhere.

Since I learned that, I got into the habit of very closely watching that original advertised price and seeing if it went up sneakily. I also become more parsimonous, I guess, with my designs. A T-shirt with front+back+label is just way too expensive to sell.

This has been my general feeling and explanation of their shady pricing. I will get into the nitty-gritty details in the next section, when I have also explained things like shipping fees and order routing.

To finish this section, here are a few smaller snags I encountered.

* One of my products (a children's tee) forced me to incorporate shipping fee into the price. No mention of that anywhere. No way to turn it off. It was one of many frustrations that piled up and eventually made me move those products away from Printify and to some other platform.
  * Yes, I tried everything. All other products simply displayed the shipping fee, and I could _choose_ whether/how to incorporate that into the price. This one, without a warning or special information, made that impossible. Shipping _had_ to be 0 dollars, and that fee was automatically added to printing cost.
  * For a few days, I added a message on my website: "This particular product has NO shipping fee, as opposed to all others from this platform." But that's just convoluted and silly!
* Copying to WordPress is slowest of all platforms I tried. That, however, might simply be because of the sheer number of mockups it wants to upload to my website ;)
* They have no way to set Categories or Tags from within the interface. The only data they copy behind the scenes, when sending the product to your storefront, is the _weight_ of the product.
* Their default description is English only and pretty worthless. I had to rewrite my own list of details / more detailed information, in Dutch, for every product, and it just became annoying.

## Pricing & Payment

This is going to be a long section. I cut it up into the smallest possible pieces, but I have a lot to say AGAINST Printify's way of pricing things and why it's terrible.

### Payment

As stated earlier, you're free to decide your own price. Printify will just invoice their _costs_ for making the product; they don't care how you get your profit or where it comes from. As such, it's up to you to price your products high enough to cover shipping, taxes, any other costs for running your webstore, and the slight risk of damages or returns.

In my case, I found that a profit margin of 20%-30% on "Printify price + MAXIMUM POSSIBLE shipping fee" gave me some sustainable margins without creating ridiculous prices for products. (Remember that this allows _free shipping_, but this price is _excluding VAT_.)

You can create products and even add them to your store without entering any financial information. BUT, as stated, those orders will be put on hold when the system realizes it can't invoice the costs. You _cannot_ get anything printed or shipped without _paying first_.

Printify allows connecting a **credit card** ... and nothing else. This was a **deal breaker** for me, and I suppose many others in Europe. Credit cards are just not common here. In fact, many of them regard them as an easy way to get into crippling debt or be taken advantage of financially, and will not go near them.

I have one digital prepaid credit card for extraordinary situations. But, as a general rule, I don't use it for things like this. I want to use one and the same bank account for paying and receiving payment, for all POD platforms (i.e. "all transactions around my store") at the same time. That's the only way to keep it manageable and prevent costly mistakes. Printify makes this impossible by being needlessly restrictive with how you pay them.

This was the final drop in the bucket that made me completely leave Printify.

### Taxes

Also, as usual, Printify will add extra tax fees on top of the product costs _unless_ you have verified yourself as a business. In that case, you buy their services without paying tax, but are now responsible for handling tax matters with your local government yourself. It's what you want to do, probably. 

{{% remark %}}
I believe this is called "transfering the tax burden". When you are a registered business, the "tax burden" is moved from Printify to _you_. You never actually get rid of tax. It's not like this is some loophole where you don't have to pay tax anymore. But your Printify costs are lower and simpler, without tax, while _you_ have to work out what you owe your own government later.
{{% /remark %}}

My tax ID was verified and accepted rather quickly. But because I eventually completely left their system, I can't say for sure whether this made me tax exempt everywhere or whether there were more hiccups.

### Print Providers & Order Routing

One of my biggest frustrations with Printify is that you **pick a print provider at the START** (of designing a new product). And, as a consequence, you **pick only one** and **can't change it later**.

I cannot fathom why this is the way it is. Printify has this enormous system, with many providers all over the world, and they use it in a way that's the most restrictive, inefficient and obscure possible.

Let me give an example.

* Say I want to sell product X, for my webshop that services both Netherlands and UK (or Europe in general).
* I see one print provider that's in the Netherlands, and another one that's in the UK.
* ... which one do I choose? Picking _one_ is guaranteed to make shipping fees (and shipping times) much higher for the OTHER zone I do not choose.
* Even though Printify CAN print locally for ALL my customers, I am restricted to making things more expensive and more inefficent for MOST of them.

A much better system would be to select a range of providers. Even better, to select "for this zone, use provider A; for that zone, use provider B". 

{{% remark %}}
Also, because of this, you need to take a good look at the EXACT properties of a print provider before picking them. There are subtle differences. They all support a slightly different set of sizes, colors, print areas, print sizes, etcetera. And they can sometimes have wildly different product costs or shipping fees, _even if_ the printer is in the same country as you.

Always press "Provider Info" to get the full rundown.
{{% /remark %}}

_But wait! There is "Order Routing"!_ you might say. It's a prominent setting that it asks you to turn on/look at from the start. 

Yes, on the surface, this seems like the answer. Many people believe this means "it will print your product at the nearest facility to the receiver", but that is **not true**.

This is how it actually works.

* Printify will use the provider you selected.
* But if something _goes wrong_ (it's delayed, it can't ship to the target for some reason, etcetera), it doesn't cancel your order but routes it to another facility.
* By default, it switches to one that provides the same product and is closest to the receiver.
* But you can configure things, such as how much more expensive the product is allowed to become at most (because of the switch), or whether swapping for a _similar_ product is also allowed.

So, in practice, 99% of the time it will just use that single printing provider that you selected. Even if they have another perfectly fine printer down the street of the recipient, they will gladly print your T-shirt all the way at the other side of the world and ship it from there.

Even worse, **they will charge you the same shipping fee**. In other words, Order Routing is only going to _sometimes_ help the climate and help Printify's bank account---everything else/everyone else is worse off.

This is just blatant greed or incompetence, if you ask me. 

Think about it. 

* You're paying 6 dollars to print a shirt, and 12 dollars to _supposedly_ ship it from a UK provider to, say, the USA.
* Printify routes the order to a USA print facility that ships for only 3 dollars. Also, the shirt costs 8 dollars to make here, which is within your allowed maximum change.
* Now you paid Printify 8+12=20 dollars, for what should have cost you 11.
* And what do you get out of it? Nothing. Perhaps slightly faster delivery of perhaps the same product.

Every other POD platform, even those with fewer connections/providers than Printify, just prints as close as possible to the destination. Shipping fees are _much_ lower, costs are predictable, no shady practices.

Printify presents itself as the one with the biggest network, the most choice, the most local printing because of the providers. In practice, unfortunately, they are the absolute _worst_ and it made me leave them behind.

Unless they improve things, such as I proposed earlier (assign provider per zone, make order routing less greedy and more transparent, etcetera), this is a _major_ no-no for me.

{{% remark %}}
And want to change the provider later? Because your webshop's shipping zones changed, or you made a mistake, or a better provider was added? Impossible! Just remove the product and redo it, including all possible errors or desyncs that might come from it!
{{% /remark %}}

### Shipping Fees

With all that explained, you can now hopefully understand the biggest scam of all. The thing that Printify is known for, but many people look past it because of the friendly interface, the diverse catalog, the lower "cost" prices of products.

After using nearly 10 different POD platforms (seriously) _and_ doing manual shipping, I can confidently say that **Printify's shipping fees are ludicrous**. They're just a made-up high number. They change on the fly. They're whatever Printify thinks they can get away with. 

It is absolutely not that expensive to ship something, and absolutely not that expensive to ship _multiple_ items of the same type/from the same place.

For example,

* Another POD provider can print mugs in the same country as Printify, and ship them for €4.95 a piece, with _no_ added cost for additional items. (So, shipping 1 mug is the same cost as shipping 5 mugs within the same order: €4.95)
* Printify asks €8.95 shipping fee ... _per mug_. Shipping 5 mugs at once, even though they'll arrive in the same small box from the same location, would cost €44.75 in FUCKING SHIPPING FEES ALONE.

I have the same suspicion as many people. Printify makes a loss on the cost price of most of their products, that's how they can be so cheap. They make it up, in spades, with incredibly high shipping fees (per item).

This is, again, disingenuous, but also simply **practically unusable**.

OPTION 1) If I put shipping fees on the customer, they will be surprised at checkout by the fact their order cost has suddenly _doubled_. Or not. It's out of my control. Unless I lock down the range of my webshop severely (to just the Netherlands, for example), I might _lose_ money on most orders because it charged a ludicrous shipping fee for someone located in Asia.

OPTION 2) If I provide "free shipping", I have to mark up all my products to cover the shipping fee. But by how much? I don't know! The fee changes wildly. If I take the "maximum possible", if I can even be sure of that, I am soon selling mugs for 40 euros.

I saw no pricing and shipping structure that actually worked in practice. One that was viable and didn't feel like stealing from my customers---while Printify stole even more from _me_. Can you guess why I didn't give them my credit card details?

Even worse, in the interface, Printify just always shows the **"absolute lowest" shipping fee**. Even though it knows my location and it's not there. It will display shipping for 2 euros ... even though I set my location to Europe and that cheapest shipping only applies to, I don't know, Japan. Again, I can only call that either wildly incompetent or actively evil.

{{% remark %}}
At first, I really thought Printify was at least the _cheapest_ option, and other platforms I was trying would just be for products that were allowed to be more expensive. But when you actually design things, and you get to the end of the line and see all final prices, Printify is _way more expensive_ while being _more risky and lower quality_. Because now you have a shirt with the quality of a 5 dollar shirt, instead of a 10 dollar shirt, but because of shipping fees the customer actually paid more for it in the end. A lose-lose situation, if you will.
{{% /remark %}}

### Shipping Methods & Times

Printify does offer a few different **"shipping methods"**: Economy, Standard, Priority, Express. You guessed it, these become even _more_ expensive further down the list, for the chance of your delivery arriving slightly earlier. Many print providers only _support_ one or two of these, too, so that's another thing for which to watch out.

As I've said at other reviews, for 99% of online stores the cheapest shipping option is really the ONLY viable one. The others are so expensive that they seem made purely for people selling golden paintings and state secrets or something.

Their shipping times, I must admit, are relatively fast and consistent. Delivering anywhere within a week, even on the slowest method, is slightly faster than most other providers that give themselves a 1.5 or 2 week cushion.

This part is not that different from other platforms, and I don't see much issue with it. I would personally never use fast shipping, because I think it's completely unnecessary and harmful to the climate. But I can see use cases for others.

In conclusion, the only way Printify works, in my view, is if you ...

* Cut your webshop into distinct zones, as small as possible.
* Create a _new_ product for each zone, picking a provider that prints and ships within it. (To make it as fast, consistent and cheap as possible.)
* And disable Order Routing completely.

This is far too much work for most people, especially if you want to support international shipping. The alternative, asking 50 euros to send a mug or two and that money almost entirely going into Printify's pockets, is not something I want to support.

### Paid Subscriptions

Finally, finally, a small note about their paid subscriptions. 

Like most POD platforms, using them is free forever, with no upfront cost. However, you can buy a paid membership (usually 20 dollars per month) to get extra benefits.

* Lower cost price for all products
* Lower shipping fees
* Special deals, discounts, or products only paid members can design
* Better/Personalized Support

I'll say again what I said in other reviews. This is _not_ worth it when you're just starting out or getting a few orders once in a while. The lower pricing you can provide if subscribed is _not_ a deciding factor for people considering buying your product. (If they like your design, they will buy your shirt at 19 dollars just as well as they'd buy it at 17 dollars. If they don't like your design, they're not buying it for any price.) 

Unless you are _certain_ you're earning way more profit than the cost of the subscription, don't bite. But once you _are_ successful, then yes, this is a low price to get large (accumulative) benefits on basically _everything_. If nothing else, you pay 20 dollars per month to earn 20% more profit on every sale.

## And what if we care about things other than money?

Ah yes! The most important part that every other review leaves out!

How **sustainable** is Printify? How ecologically sound? Does it use best practices in terms of labor, local production, etcetera?

Let this be a ... somewhat more positive part of this review. They actually produce detailed and polished _reports_. They are easy to explore and understand---I read the latest one---and show they are doing some good things and making an effort. 

The data also shows they have a _long way to go_. It's actually quite funny. They honestly admit that some numbers are not great, adding the sentence "this is okay, but we're working on improving this" regularly.

For example, a **good** aspect (in terms of climate/sustainability) is their Order Routing. They are able to fulfill most orders (93%) in the same country as they are delivered.

A **bad** aspect is the stat right after it: only 5% of all products in their catalog have a sustainability attribute. One attribute, not even something like "100% ecologically sourced and biodegradable". 

Their stats on emissions don't include shipping, which they admit is actually by far the bulk of emissions. But I feel this is left out by _all_ POD platforms. They tout themselves as being oh so sustainable because they "only print when ordered", and thus have no inventory and no waste thrown away. Buuuut the obvious consequence is that loads of items are shipped one by one, at odd order times, instead of bundling huge orders and shipping them at once to warehouses/physical shops, which probably offsets any benefits from POD. 

You never hear the platforms about that, funnily enough ;)

All in all, from the information I could gather, Printify mostly shines in their treatment of workers and labor conditions. That has clearly been a target for them, and if their data is to be believed, they do great.

Local printing is nice. As for actually sustainable materials and production, and perhaps things like working on 100% renewable energy, I find them lacking.

{{% remark %}}
Their report is really quite detailed and honest! But some other stats, such as "employee gender representation", seem irrelevant to this section. 

My personal opinion is that these are silly things to be chasing, as having more or fewer workers of a specific gender has no proven inherent benefit or downside to your operations or sustainability. In fact, it's conscious discrimination and denial of equal opportunity that's somehow twisted to be morally just. Ironic, really.

However, as this section is about "caring about other things than money", I guess it's good to at least _care_ about social policies without perceived monetary gain.
{{% /remark %}}

I have to give them a big "meh". Some very good things, some very bad things. It seems they were _certainly not_ founded with sustainability in mind, like some other POD platforms were. (Several of them were created precisely because they hated the fast fashion climate, how many clothes became waste, how bad materials were, etcetera. Printify, from the looks of it, seems founded on the question "how much profit can we make by scamming people on shipping fees?" :p)

But, Printify realize that now and are _trying to make up for it quickly_, which is to be commended.

## Conclusion

The lingering feeling I have is "it could have been so nice".

Printify has a clean, intuitive, well-made interface. It supports basically everything you need, including personal branding and lots of configuration. It has good articles, good support, and the best designer. It has the widest and most diverse catalog of products, competitive pricing, and a great network of print providers and choice.

Why, oh why, did they have to mess up their pricing? And instead of using their network for the cheapest and most climate-friendly shipping, use it in the _inverse_ way to make things harder and more expensive for all their clients while fattening their own profits?

As I hopefully explained well, it's not just a matter of taste. It's **practically impossible** to use them in any serious business. Unless your clientele can pay through the nose. Or you are fine with sometimes selling at a loss, burning through funds, or keeping your web shop nothing more than a tiny side hustle. 

If you want to sell a wide variety of products to a wide variety of customers, in an online store that's supposed to be around for a while and be a main source of income, Printify makes that impossible. The prices you'd need to ask would drive away customers. How little profit remains is not enough to pay recurring costs, such as hosting the server or actually designing new products.

I would only return to Printify if ...

* They provided more payment methods, which are friendlier to European clients.
* They implemented _actual_ Order Routing.
  * You can assign which print provider should handle which zone. If not, they help you by automatically choosing this, which they can _easily_ do.
  * You only pay the ACTUAL cost of printing and shipping.
  * They stop with ludicrous shipping fees, by simply asking a product price that's fair and not trying to make a large profit on the shipping too.
* In all of this, they were less shady, sleazy and secretive. Communicating exactly what you pay for, and why, clearly, goes a long way. Giving a fair example of expected profits (and other fees to take into account) will prevent misleading a lot of people, possibly ruining them financially. 

For now, I stopped using them, and they left a sour taste in my mouth.

Those were my thoughts, until the next review,

Tiamo Pastoor