---
title: "How I created TiamoPastoor.com"
author: tiamopastoor
date: 2024-11-12
language: en
categories: ["Updates"]
---

Welcome to this "diary" or "devlog" about how I created this website. Why would this be interesting? Because I didn't create this website from scratch.

Years ago, my online presence started with a _Dutch_ blog called "Niet Dat Het Uitmaakt" (English: _"Not That It Matters"_). I'll abbreviate that to NDHU. It was a **WordPress** website meant to practice writing or just write about thoughts I was having at the moment. It was always meant as a quick, experimental, personal project.

Well, over the years it grew into a website with more than a _thousand_ posts. For a while, it was my biggest website, both in terms of content and visitors.

The problem?

* It was Dutch. (Once I started writing English fiction, 99% of my work was in English.)
* It was setup as a blog, not as a proper website to display my books or writing portfolio. (In fact, the "book page" was just a single page on the whole website!)
* It used WordPress. After using it for almost a decade, I've decided that I hate it with all my heart. (More practically, it just took a lot of space on my server, and there were regular outages.)

And so I had a challenge.

* Maintain the old design and content of NDHU ...
* ... but put it into a completely new website template that is much better.

All my websites use the fantastic **Hugo** static website generator. This was the only ugly duckling; the only one still using another system such as WordPress. 

Additionally, the blog needed to be just a _part_ of the overall website. Just one _section_. The main website---especially the front page---should be focused on my books and my writing work.

And that's how this whole project started. Below, I will explain 

* How I transferred my WordPress website to a Hugo website.
* And how I built that website into something better, including problems I faced and design decisions I made.

{{% update %}}
I completely forgot to actually publish this article! Stupid me finished writing it, launched the website, then just completely forgot this article. So here it is, one year too late. Which does allow me to give some interesting "in hindsight" comments at the end.
{{% /update %}}

## Wordpress -> Hugo

The main steps here are to ...

* Prepare your content. (No errors, no problems converting, no posts suddenly lost or forgotten.)
* Then extract the content into a usable format (by Hugo).
* Then clean up afterwards.

## Preparing content

This was a big one. I'll give you the biggest tasks applicable to my situation, but you surely need to check your own setup for potential issues.

### Jetpack

I used the JetPack plugin, which automatically caches your images on a WordPress server for faster loading times.

What does that mean? When your content is extracted, it has the wrong links to images or videos. It has a bunch of HTML linking to the JetPack services. Well, if I stop using WordPress, those links obviously become invalid.

From now on, the media is just stored within the Hugo project (on the website itself).

So I had to disable that whole plugin first.

### Table of Contents

Similarly, I had a TOC plugin enabled. Those TOCs were automatically picked up and burned into the exported Markdown files.

I don't want that. Such things will be handled automatically by Hugo from now on.

At this point, I decided to just deactivate almost all my plugins. All of them, obviously, mess with the website and the articles in some way. This leads to the export being wrong or changed in an unhelpful way.

I want the raw content in simple and clean Markdown files. So all the extra stuff should be disabled or kept to a minimum.

### Unpublished Posts

In my case, it _did_ export unpublished _posts_, but not unpublished _pages_.

Also, because they were unpublished, it couldn't give a proper name to their folder. So the folder names were just the _date_ of my final edit (to these drafts), which is hopeless if you want to find those articles later.

(Any other special drafts, such as "private" posts, or "deleted" posts, were ignored altogether.)

To fix this, I went through all of them and ...

* Finished the drafts. (Might as well do that while we're here. Usually I stopped because I ran out of time or just forgot I was working on it. Finishing took only a few hours.)
* Planned them at some reasonable point in the future. 

## Reading the database

Surely, you do not want to do this by hand. There are several "converters" or "migration plugins" available. After trying a few, I picked the one that suited me the best.

This article really helped me: [Step by Step WordPress to Hugo Migration](https://ma.ttias.be/step-by-step-guide-migrating-wordpress-to-hugo/)

Below is my summary of the steps. You need to know how to SSH into your server (find a tutorial on that, it's quite simple) and some very simple command line instructions.

First, we need to install the actual plugin. Download the GitHub zip, go to WP Plugins in your dashboard, then click the button at the top to manually upload a ZIP file with a plugin.

HOWEVER, I modified the plugin for my personal preferences. Normally, it places all posts as single files (`post-name.md`). I like to add them as _folders_, however, with an `index.md` inside. This allows me to place media that belongs to the post in the same folder. It's also a cleaner structure, especially when you reach near 1000 posts.

If you want to do the same, find the `write` function in the original `.php` file. The second branch of the if-statement is a one-liner that decides the post name. Change that to ...

{{< highlight php >}}
// original code (one line):
//$filename = $this->post_folder . date('Y-m-d', strtotime($post->post_date)) . '-' . urldecode($post->post_name) . '.md';

// my modification to put posts into their own folders
// concatenate DATE and POST NAME
$final_folder_name = date('Y-m-d', strtotime($post->post_date)) . '-' . urldecode($post->post_name);

// add this to the POSTS folder path to create the folder in there
$full_folder_path = urldecode($this->post_folder . $final_folder_name);
$wp_filesystem->mkdir(urldecode($this->dir . $full_folder_path));

// finally, we want the actual content to be an index.md file inside
$filename = urldecode($full_folder_path . '/index.md');
{{< /highlight >}}

Then we need to use that to do the export.

* Login to your website via SSH: `ssh <address> -p <port>` then enter the password when asked
* Go to the `wp-content > plugins` WordPress folder.
* Go into the newly installed plugin `wordpress-hugo-exporter-master`
* Type command: `php hugo-export-cli.php /tmp/`
* Wait until done

Finally, we need to actually _download_ this exported content from our server.

* Open a _new_ command window.
* Use the `scp` command: `scp -p <port> <address>:/tmp/wp-hugo.zip <path to folder on your pc>`
* Wait until the zip file is downloaded

Then you can simply extract it and you have everything you need.

Even for my huge website, this was a relatively quick process and small download (77M). Then again, I have always strived for minimalism and small systems. Years ago, when I just started, the website was probably even _bigger_ (with just 100 posts) because I was so wasteful with my image size and storage space.

## Cleaning up

This is already quite nice. Now I have my website as ...

* Folders with the right name, with a Markdown file inside.
* The _pages_ are all at the top level. The _posts_ are placed inside the `posts` folder.
* With all the media in the `wp-content/uploads` folder and linked correctly.
* And a `config.yaml` file with any properties about the WordPress installation that are worth keeping.

We're still not done. The tasks below were mostly a huge Find-and-Replace (using Visual Studio Code) on the whole content.

* The frontmatter receives a `url` with the old URL. In my case, I didn't want to keep those, so I removed all of that.
* It also receives a `type` setting (with `post` or `page`). I didn't need this, as I was going to put everything in different sections anyway, so I removed it as well.
* Any special characters are created as HTML entities. This is messy, to me, and Hugo doesn't need that. So I replaced them again with the original symbols.
* I renamed all my old (Dutch) categories/tags to English ones.

### Custom blocks

The biggest issue came from **custom blocks**. For example, I'd often use an "example" block to give, well, an example. It would be styled differently to make it nice and clear.

When exported, this is just some simple HTML. (`<p class="example">CONTENT</p>`)

In Hugo, we'd use a shortcode for this. As such, I needed some _Regular Expressions_ to find all these, replace them, but keep the original content between the tags!

This is what I'd SEARCH for.

{{< highlight >}}
<p class="example">
  (.+)
</p>
{{< /highlight >}}

This is what it'd be REPLACED with. (The $1 refers to the content we captured in the regex using the parentheses. The extra spacing in the search is just because the export added that and I don't want it.)

{{< highlight >}}
{{%/* example */%}}
$1
{{%/* /example */%}}
{{< /highlight >}}

@TODO: Give this regular expression I used

### Incorrect links

Finally, I needed to make sure the **links were correct**. Many links are _absolute_, which means I at least needed to remove the original domain name of NDHU. Even then, because the structure and urls changed, almost all links were guaranteed to be invalid.

I searched and found a _tool_ that automatically checks if all links are valid. (Which I, obviously, decided to run as well on all my other websites. Should've done that way sooner!)

@TODO: tool + how to use it and results

With this done, at least the _bulk_ of the conversion was taken care of. I'd still prefer images to be in the same folder as their markdown. I'll surely still have broken articles or unconverted pieces. But for now, I just wanted to make sure that ...

* All the pages (which were my BOOKS) were completely converted and correct.
* All the posts _existed_ and the recent ones were correct. Older ones can be removed or updated later.

## Creating the rest of the website

@TODO

### Improving my styling

The old WordPress website had one monolithic `style.css` file. These days, I prefer to use SASS and write the styling in much cleaner modules. As such, I had to rewrite and refactor that.

Fortunately, most of the rules were only a necessity because WordPress kept doing stupid things. Plugins would add styling all over the place. WordPress would add useless elements within widgets or menus.

Let me share a _comment_ I found in that file, written years ago by me.

> /* God damn fucking WordPress adding idiotic styles all over the place messing with my design. This is a HIDDEN element underneath the header for a SEARCH widget that wants to extend WIDER THAN THE ACTUAL SCREEN, causing horizontal scrollbars */

Yeah. Probably wasn't too happy after wasting a day tracking this issue. Anyway, all gone now!

Similarly, I've improved at styling websites since ~10 years ago.

* I properly rescale my root font-size based on screen size with one simple formula. Then I use the `em` unit to make sure everything else follows proportionally. (This looks great and removes almost all media queries).
* I've learned a lot of patterns to prevent repeating or overwriting myself. (No more adding the dreaded `!important` behind lots of properties!)
* The current website used three fonts. Although it works and is stylistically sound, I just want to simplify matters. So, the third font (the free and amazing _Pacifico_) was removed entirely.

### Giving the people what they're looking for

The _power_ of such a website system is that I can "tag" my books in all sorts of ways, and Hugo automatically creates overviews and connections based on that.

For example, now I can add the _genre_ to books, just like the _target age_ or the _length_ (in pages or words).

All that information is very useful for visitors. If they're looking for a Fantasy novel, now they can _immediately_ see if a book fits that description or not. Moreover, they can click on it to see an overview of _all_ my Fantasy novels.

This type of "metadata" is just incredibly useful. (Also for me as the writer, as I can easily find older work or see patterns in my work.) 

As such, I decided to put this front and center on the book pages. They're divided into several blocks.

* Introduction + Cover
* Where to buy it (or progress/pre-order if not available yet)
* Metadata
* Extra remarks

The introduction is just a short marketing blurb I set in the frontmatter.

Similarly, the links for buying the book and the metadata are frontmatter properties. Those are read and displayed automatically by my system, which is very clean and saves me a lot of typing/copying in the future ;)

The extra remarks is the actual content of the book's Markdown file. It's where I can actually freely write some interesting remarks or relevant ideas to the current book.

@TODO: IMAGE of this

### Giving it faster

The old design had quite a spacious _header_. Not too bad, but also certainly not small. This meant that the actual content (of the post/book) would often be off the page, requiring you to scroll before reading it. (Unless you were on a phone with a tiny screen.)

In some ways, this worked wonderfully. It looked good. It had space for three _huge_ buttons, which almost any visitor to the website seemed to click. (They led to my about page, portfolio, and the navigation/menu in the footer.)

But it just takes too much space. Additionally, it was a more ... frivolous and child-like header (with sheep dancing around :p). Now that I'm a bit older and my career is turning professional, I think it's wise to tone that down.

As such, the header is now just a _thin_ bar at the top, with simple clickable links for the main sections of the website.

I did notice that many websites (which I think looked good) put the author name or some _icon_ in the center of such a menu. I needed an icon anyway, so I decided to go for it.

I drew my name in a special way, including an icon, and put that in the _center_ of the header.

* On the _left_ side of this name, the menu is consistent and contains the most crucial pages.
* On the _right_ side, the links are randomized. (So one time it might link to an old Dutch book of mine, another time it might link to a newer series, Hugo just picks some existing page at random.)

This saves space (because I don't have to put _all_ pages on the header at _all_ times). It seemed like a fun and experimental thing. But most of all, I hope it invites people to click around in a very subtle and non-intrusive way.

On mobile, all of this collapses into the logo and a simple button to scroll to the footer. (Which, like with all my websites, contains most of the actual navigation. Hopefully you understand the reasoning now: a big or complicated header simply makes _every page visit_ slower and more annoying, as readers need to go past it. Moving all the navigation to the bottom is much more useful, as long as you provide a quick way to _get_ to the bottom.)

@TODO: IMAGE of this

### What I learned about thumbnails

Creating many websites over the years, I've learned the Aspect Ratio Dilemma of Thumbnails ;)

* Some images are "landscape" (more wide than tall), which looks great above text, but terrible next to it
* Some images are "portrait" (more tall than wide), which looks great besides text, but terrible above it

What to do? Support both. Most of my websites use a simple "double view" layout which can be set to "horizontal" or "vertical" (and can be inverted, so the image can be on the left or on the right). All of that is just simple CSS.

But the result is that I can display both summaries (such as on the front page) and the actual posts in a much prettier and more space-efficient way. 

Obviously, book covers are _always_ portrait. So for books, it defaults to that layout. For posts, it defaults to landscape, but I can just change that with a simple frontmatter property.

@TODO: IMAGE of this

### In fact, even more thumbnails

The second thing I learned ... is that it still doesn't look great if only _some_ posts have a thumbnail and others do not. 

Yeah, sure, I can just disable that bit of code if a post has no thumbnail specified. But there's no way to combine "posts with thumbnail" and "posts with no image" in a grid that looks great.

What do we do? I decided to create some "default images". 

* In the style of the website
* Related to the main category of the post/book
* But otherwise just a random drawing (both a landscape and a portrait version)

Whenever an entry has no thumbnail, it picks a suitable one at random and uses that. As long as I provide enough variety---and enough posts that _do_ have a unique image---this shouldn't look repetitive.

@TODO: IMAGE of this

### Dark mode? Themes?

For this website, I don't necessarily needed dark mode. But I was planning to incorporate it in other projects and saw this as a testing ground.

More generally, I wanted to code some possibility of "multiple themes" (not just light/dark). 

Why? When I started copying all my books into this website, I noticed how the book sometimes just didn't match the website. The colors wouldn't _really_ match, or the tone would clash. 

What I'd _really_ like, is to be able to pick a custom theme (per book) that fits it the best. To really make each book page as unique as possible, suited to the content and cover of the work.

Additionally, the old design used color a bit haphazardly. Again, it's _fine_. But when I do such an update, I really want to do it _well_. To clean up, minimize and perfect what came before. So I wanted to reduce the number of colors used to a pretty strict color scheme.

As a step towards all that, I implemented dark mode.

@TODO: IMAGE of this

### New Categories

One major issue with the old blog---and the reason I wanted to create a new website _only focused on my writing_---was the fact that it tried to do everything. It had ~15 categories, split across my four major areas of work (writing, games, music, design).

To make that work, I also needed 5 WordPress plugins (such as one that could show sheet music on the page and create an audio file to play in the browser). 

What to do?

* Everything that relied on a plugin had to go away. I stowed those posts at the proper websites (for example, the music posts went to my project folder for my music website), but left them as "maybe bring it back someday".
* Wherever possible, I merged categories into more meaningful ones, fully focused on _writing_.

This left me with the following set of categories.

* Updates (general updates about progress, work, website, etcetera)
* Releases (simple announcements of new releases with extra remarks)
* Free Fiction (links to free stories)
* Writing Diary (like this one)
* Reviews (with categories for Film, Book and Game Reviews---though newer Game Reviews will probably be in English and on Pandaqi Blog)
* Poems
* Anecdotes
* Cartoons (mostly a leftover that really doesn't fit anywhere else)
* Miscellaneous (whatever is left)

## Icon

@TODO: Write about the design and idea behind the icon?

## Images all around

Here's another reason why I wanted to step away from WordPress. My blog has been online for 8 years. In that time, WordPress has seen updates, downgrades, a complete restructure (Gutenberg Blocks), and so forth.

The result? There were about 15 entirely different ways in which images were stored in the export!

I hoped to do one regular expression (matching the classes and HTML structure WordPress used for images), replace it all with Markdown image structure, and done.

Instead, I had to crawl through all the files and find all the different ways in which WordPress tried to display ... _something_. Images, Audio, Video, YouTube links, the only recurring theme was the use of the `<figure>` element. So that's what I used to find it all and write a new Regular Expression for each.

{{% example %}}
All posts from a certain period (say 2021) would have the same structure. But then all posts from the period before (say 2020) would use different classes and tags. If I wasn't careful, one Find-and-Replace could completely mess up those _other_ structures.
{{% /example %}}

To make matters worse, even though I disabled plugins for a while before exporting ... some images were still linked to the WordPress JetPack servers. But that wasn't so bad: I could just completely cut out the domainname to make the link _relative_, and the image would immediately work.

No, the _real_ trouble was that I had used external images for a few years. When I just started the website, I was on a plan that cost about ... 1 dollar per year. Yeah, a full server for 1 dollar. That doesn't give you a lot of storage space. (1 or 2 gigabytes, can't remember which.)

As such, I stored all my images externally, and used external links (to book covers in other web shops, for example) wherever possible.

This is bad. Those links expire, the images break, you make yourself dependent on hundreds of sources you can't control.

So I had to manually ...

* Find all those images
* Download + convert/rename them
* Then put them back where they belong
* And update the Markdown to link to the new image

Yeah, not fun. But hey, I discovered that I _apparently_ had an account at Cloudinary which hosted all this stuff and was pretty essential to my site staying alive :p After extracting all content, I closed that account. Which was good, because I forgot that it existed in the first place.

### Updating Links

Because my WordPress links were all based on categories that didn't exist anymore (and would not come back), they were all invalid anyway. I knew I had to update this manually, which, as expected, took a few hours of boring work.

While doing so, however, I realized I wanted a slightly different structure. Once I updated all links to be _valid_ and follow the same _format_, this was fortunately very easy to change!

{{% remark %}}
That's the rule. Never change your pattern/structure _halfway_ a conversion. Keep going with the "bad pattern", so it'll be very easy to change it later to a better structure---with just one line of code.
{{% /remark %}}

The old structure was as follows.

* Posts were in `/blog/YEAR-MONTH-DAY-TITLE/`
* Diaries were _pages_ on the old blog, which meant they had no date, so they were just `/blog/TITLE/`

This meant that the `blog` folder ... contained over 850 entries already :p That was a bit much for my computer, and not really helpful in terms of structure.

I also didn't like that diaries would just "float around" somewhere in the folder. (Especially as that will certainly grow over time and become a staple of the website.)

As such, I created folders for all the **years** and moved the posts into the right one. (Because the YEAR was already in the title, posts were already sorted this way! So this was just a quick copy-paste action!)

Then, with one Find-and-Replace (`/blog/(20\d{2})` => `/blog/$1/$1`), I updated all links. (Apparently, there were 200+ links within the website.)

{{% example %}}
An old link could be: `/blog/2023-08-11-hey-a-post/`

The new link would be `/blog/2023/2023-08-11-hey-a-post/`
{{% /example %}}

Yes, the year is now double for old posts, but that's fine. This simple change gave the website a much cleaner structure, without breaking anything. (I keep using the `htmltest` tool to quickly test the whole website for invalid links.)

Diaries? They were placed in a new `diaries` folder. Links to them were updated the same way (`/blog/diary-` => `/blog/diaries/diary-`).

{{% example %}}
An old link could be: `/blog/diary-wildebyte-1`

The new link would be: `/blog/diaries/diary-wildebyte-1`
{{% /example %}}

Again, duplicate "diary", but that's fine. Especially because the older diaries were in Dutch, so it actually says the Dutch word for it in the title ("dagboek").

With that done, the website was **finally, completely, transferred**. It used a clean structure that's easy to maintain and follow. All images, post content, etcetera has been converted to simple Markdown.

Where possible, I even made quick improvements.

* If I came across some badly written paragraph or weird structure in an old article, I'd quickly update it.
* Some reviews had no picture, so I quickly downloaded the cover/poster for the thing I was reviewing and added it.
* Some posts were changed to the _horizontal_ layout, whenever it looked better or I wanted that variety.

## What now?

Now we launch the website!

And we make a time skip, to one year later, where I suddenly rediscover this diary and realize I never published it. 

{{% remark %}}
That's hyperactivity for ya. You actually do piles of work in a short timespan ... then completely forget about it forever because you were distracted by a fly or something.
{{% /remark %}}

The website has now been online and in use for over a year. What are the results? Has anything changed?

* Because my old (Dutch) blog is still up, Google still chooses that as the "main source" for many articles. Despite me telling it _not_ to do that and pick TiamoPastoor instead. This means the new website misses out on a lot of traffic, but that's fine, the old website is gone soon.
  * In general, the new website hasn't changed anything in terms of SEO/discovery/outreach. The same handful of articles that were most visited before, are still the only ones often displayed and clicked on. You'll discover my books faster when simply browsing Amazon (or whatever web shop) than landing on my website.
  * Can this change? Should this change? I don't know. I'll just wait until the old blog is gone and I have a bit of a larger bookshelf to promote. 
* Adding new articles (and books/diaries) to this website is _much easier_. I've been able to write more than before, with less hassle, and the website still looks far cleaner/better than the old blog to me.
  * Even better, I've been able to write articles _wherever_: on a tablet, on my phone, it doesn't matter. They're just plain text files (in Markdown), and as soon as I get to my laptop again, I copy-paste them and we're done.
* Similarly, I've been able to keep the _word counts_ and _open projects_ updated the entire year. I was afraid I might forget this or it might lag behind, but that hasn't really happened. It's just a habit now to write my word counts into this data file at the end of the week, which is also the moment I can quickly update the counters on current projects. At worst, we lag 2 weeks behind because I wasn't able to access my laptop during the weekend to do this.
* I updated the folder structure to go by **month** too. In other words, all articles from November 2024 are in `2024/11/`, instead of just `2024`. This required no change in the code; Hugo automatically picks this up by changing the folder structure. I simply realized I was still writing too many articles to have them all in a single folder, unstructured.

In general, this update has simply been great and effortless. The website is much faster and cleaner now, more professional, more filled with content and updated _at the worst_ once every two weeks. I can confidently point to this as my "writing home" for all my books and writing projects.

Normally, around the summer each year, I do a "big fat website update". I go through the long to-do list per website to fix bugs and add much-needed features. My Pandaqi website is so big and dynamic that I often spend weeks updating behind-the-scenes code per year.

But this website? The only update was to remove my dependency on Google Fonts and just load all the fonts myself (directly from the server). A change made in all my websites in a single day. Nothing else needs changing, as far as I can see, and I don't have anything on the to-do list either.

It's all about displaying blog articles, writing diaries, and all my actual books in the best way possible. For that I designed the website well, and it will continue to do so.

I just checked the front page. The number of _pages_ to navigate (displayed at the bottom) is currently 96. When 2025 rolls around, I suspect it will be exactly 100. That's 1000 articles in total. _One thousand articles_. Most of them pretty long and in-depth. Never just some short throwaway content to, I don't know, fill the space or show more ads, because I don't show ads and aren't interested in meaningless drivel. 

That just shows the power of doing a little bit every day. I started the blog in 2016 telling myself "don't hesitate, make no plan, just write something each day". I stopped doing that after only 1.5 months, because it wasn't needed. I noticed I would reliably come up with things to talk about, or announcements to make, or interesting thoughts to share (hopefully) every week or so. Since then, there has been absolutely no plan, schedule, rules or guidelines to my blog. I never force myself to do anything with it. I don't have any targets to hit and the blog might well accidentally fall silent for a full year, and I don't mind.

But now we've reached 1000 articles, and I'm pretty proud of most of them.

Until the next diary, which I hopefully don't forget to publish,

Tiamo