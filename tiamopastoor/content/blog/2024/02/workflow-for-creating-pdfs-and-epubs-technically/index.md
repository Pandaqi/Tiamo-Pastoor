---
title: 'My workflow for easily creating PDFs and EPUBs'
author: tiamopastoor
date: 2024-02-28
language: en
categories:
  - Miscellaneous
---

This is a short article that gives a general overview of how I go from creating a story to publishing it (digitally or physically), in terms of file formats and layout. It is _not_ in-depth at all. I've simply noticed many are not aware of these tricks and ideas, while they hugely simplify your life and speed up this process, so I just wanted to share them quickly.

## Step 1: Plain Text Files

All my stories are **plain text files**. More specifically, they are ...

* Markdown files. (The `.md` extension. Markdown is a simple way to mark up your text---which means adding headings, lists, **bold**, etcetera---you can learn in 30 seconds.)
* Where each chapter is called `chapter-X.md`, where X is obviously its number. (I tried naming them according to content, so I could reorder later. This quickly revealed itself as impractical and unnecessary.)

Why? Why do I stand by this and recommend anybody to try it? Well,

* Plain text files can be easily stored, read, opened, whatever by anything. They are as lightweight as can possibly be.
* This means I do not need any extra software or setup---certainly not paid software---to read and write my stories at any time, on any device.
* This means my broken, old laptop can still load and edit all my books at lightning speed. (Because each chapter is its own file, the total length doesn't matter, as I will only open the chapter I am working on.)
* This means I can use Git version control, and the free services of GitHub, to automatically store, backup, and "version control" the book.

It is now-proof and future-proof. It is a simple and minimalist as I can get, with absolutely no downsides. All formatting for text and images you might want to do, has an easy syntax in Markdown you can instantly use.

## Step 2: Turning them into books

### My first approach

This step took me longer to figure out. I tried a few things, learned better ways to do it, and eventually settled on the following. (I've been writing and publishing stories from plain text files for almost 2 years now.)

At first, I tried some unified process for both EPUB and PDF. This seems logical, but it's a mistake. They are different media. You can unify them only insofar as their common elements.

For example, take my first system. I used a static website generator (Hugo) with _two_ themes.
* One was my "PDF theme"
* One was my "EPUB theme"

To generate one, I merely had to switch to the right theme.

Sounds nice, right? And yes, it _was_ nice enough to successfully publish some books with this.

In practice, however, much more work was needed.
* It takes some black magic to generate an EPUB from a Hugo website. There were many errors, many simple things that turned out to be impossible, many restrictions on where files could be or what name/extension they could have.
* This means I also had to move around files, or keep duplicates of certain files, or change _other_ lines of code besides just switching a theme.
* All of which turned into so much frustration that I purposely put off generating my final files until the very last day for each book.

### My better approach

Instead, I sought a new approach with the following requirements.
* I can just drop my plain text files (all those chapters) into a folder.
* Then press one button, or type one command, or do one _thing_ ... and it just works.
* (Also, I want to be able to use the full strength of website design language and interactivity. I plan to release some "choose your own adventure" books in the future, for example.)

Which ultimately led to the following system.

* For EPUB, I use `pandoc`. This is a universal, extremely common tool that can basically convert any text format into any other text format.
* For PDF, I use `Paged.js` on that static website I just mentioned. But because it now only serves one purpose, it is _much_ simpler and never needs changing.

As expected, when I want to generate the files, I dump my chapters into a folder, do _one_ thing, and we're done. Ah, bliss. Let's dive deeper into all of this.

## Using Pandoc for EPUBs.

### The basics

Okay, imagine you've finished a story. What do you have? A bunch of plain text files, called `chapter-1`, `chapter-2`, and so forth.

We're looking for a way to "concatenate" all these files into _one_ valid EPUB. Pandoc has a simple command for this: `pandoc -o NAME.epub chapter-1.md chapter-2.md ...`

Yup, that's it. The only downside is that I need to type all my chapters in the command. I could automate that too (read the folder contents and build the command string automatically), but meh---didn't feel the need yet. I've just written this command manually per project and saved that, so I can copy-paste it into the command line when needed.

The `-o` stands for output. It tells Pandoc that we want an epub file with the given name.

### Metadata

Of course, you also want to add some _metadata_ to this book of yours. The title, the author, the genre, etcetera.

We expand the command:

`pandoc -o NAME.epub metadata.yaml chapter-1.md ...`

In the same folder, I have a `metadata.yaml` file with all this metadata. YAML is, again, a very easy syntax you can learn in a minute. (The Pandoc website also has many examples of what you can do and what values it expects.)

Now this is a crucial point. Everything so far are just tiny _text files_ in the same folder. This means the folder is **self-contained**. I can move it around, throw it on another computer, do whatever, and it can still build a valid book. Because all that will ever be needed is inside the book folder.

{{% remark %}}
One thing you can do in the metadata is link to a `style.css` file. This is the file that determines the LOOK of your EPUB. In my case, it just contains some simple rules to get indented paragraphs, the right amount of spacing, etcetera. Nothing too fancy. 

Again, this is a plain text file inside the very same folder. Not shared across multiple books, as that would ruin my self-contained utopia!
{{% /remark %}}

### Finishing touches

As expected, a title page is also a `title.md` file in the same folder, added at the start.

`pandoc -o NAME.epub metadata.yaml title.md chapter-1.md ...`

One pain in the ass when creating EPUBs is the table of contents. Pandoc has you covered again! Just add `--toc` to the end of the command.

In the end, I can
* Open the default command line application of my OS.
* Visit the book folder.
* Then copy-paste that command.
* And a few seconds later I have a valid, finished EPUB I can immediately publish anywhere. (With correct table of contents, correct order, correct metadata, etcetera.)

### But wait, how does Pandoc _know_?

How does it know your book structure? How can it build the table of contents?

In fact, maybe your book links to other chapters. Are those links preserved? How do we do that?

After being stumped myself for an hour or so, I learned the following.

* Behind the scenes, Pandoc literally concatenates your files: it throws them all into one huge file---aka the entire book.
* Then it turns all of that into valid HTML. (The language of the internet, and also the language behind ebooks. Yes, an ebook is just a simplistic website.)
* In HTML, you can give elements an `id`. This allows you to find them by referencing this ID.
* You can do this yourself. For example, in your Markdown chapter, you can type an HTML element and give it an id. This will not be necessary for most, though.
* Pandoc automatically adds IDs to _chapter titles_. Crucially, IDs cannot contain special characters such as spaces or slashes. So it "urlizes" your ID.
  * "The Mysterious Letter" becomes "the-mysterious-letter".
  * "A Peace Offering?" become "a-peace-offering".

Knowing all this, how do we get table of contents and hyperlinking for free?

* At the start of each chapter, use a first-level heading with the chapter title. In Markdown, this is a pound sign (`#`) followed by the title.
* When linking to that chapter, use `[Hey, this is a link.](#chapter-title-urlized)`.

If you do that consistently, the final EPUB is completely valid and connected how you want.

### How do I make the EPUB ... fancier?

You don't. Please don't. I tried this, I tried so hard, but the EPUB format is literally "a terrible simplistic website". 

Want to use custom fonts? You'll probably break 90% of your reader's devices.

Want to add interactivity? A game inside your ebook!? Same thing.

In theory, you can do all this.

* You can write HTML, CSS and JavaScript inside your Markdown files. This is simply copied by Pandoc and inserted into the epub.
* You can open your EPUB and manually add or change things, using free software like Calibre.

But as I said, I tried so hard and it's just not worth any of your time. Keep your EPUB simple: simple styling, simple structure, make sure the content works and reads comfortably. Nothing more.

So, in the end, I type this Pandoc command and get a plain but fully functional EPUB, and call it a day.

## Using a Hugo website for PDFs

Here you'll (hopefully) see the reason for splitting these two systems. 

A physical version of your book is different because it has _pages_. The benefit is that you have a fixed layout, so you can do more fancy design stuff. The downside is that you must somehow correctly divide your book into those _pages_, with page counters, a table of contents, etcetera.

If you don't have much requirements, you can simply convert your EPUB to PDF (using, for example, that Calibre program). It should lead to an acceptable result. If you dive into it, you even get some control over font, page numbers, etcetera.

If you want anything more, this will not do. That's why I keep a simple static Hugo website for this conversion process.

### What is Hugo?

_What is that?_ A static website means you ...

* Create content in plain text files (as we've been doing all this time)
* And write code that dictates how that content should be handled. (How should it display? What pages should it create?)
* When ready, you type one command to "generate" the website, and a few seconds later you have a website folder you can drag-and-drop to your server. (Or, for those who know what I talk about, you can remote sync the folder and update your website in 5 seconds.)

The point is that it's a simple and fast way of using the enormous power of websites and browsers to handle _content_. All offline, for free, on your computer. Hugo is simply the fastest out there and the one I know best, but there are plenty.

Hopefully you can see where I'm going with this.

### The PDF pipeline

In Hugo, I can create a page. (Which I've called `to-pdf` when I started, and I'm sticking with that name.)

When I visit that page, it executes its script. What does it do?

* It reads all the content.
* It generates a title page (from the title of my project and its cover image)
* It automatically inserts some other stuff (such as copyright disclaimer)
* It creates a Table of Contents from it (with the correct names, page numbers, links to it)
* And then it just loops through all the chapters and displays them.

In other words, this page is just a simple way to do what Pandoc does for EPUBs: concatenate all the content in a useful way.

At this point, it is just a _looong_ web page with the whole book.

For years now, the "web standard" has contained loads of functionality to create printable documents from websites. Unfortunately, browsers are slow to adopt these standards. 

Fortunately, though, others stepped in and created `Paged.js` It fills in the gaps and supports all those features that _should_ be supported by browsers, but often aren't.

The most useful features are ...

* Pagination => correctly divide this long web page into pages.
* Page numbers
* Running headers / footers

But it can do much more. Remember we're talking about a _web page_ here. I can use all the power of online graphics design to make the PDF look however I want. I can design fancy page number decorations and tell Paged.js to place them at the bottom of each page.

Simply loading this script (the usual way, with a `<script>` tag in the header) is enough to make this happen.

Once it's done loading (which is a few seconds on a full-length book), I hit `CTRL+P` (the native print command of the browser), and it outputs the PDF for me.

### Getting a little fancier

Now, remember that I want a one-step-process. I want to drop my book into this website, visit `to-pdf`, and we're done.

This means I need a few lines of code to imitate what Pandoc does in Hugo.

* Each chapter should also have frontmatter that contains its `title`. (The thing we already set with a first-level heading, remember?)
* When creating the Table of Contents in `to-pdf`, I use `{{ .Title | urlize }}` to urlize this thing myself for each chapter. Now I can set this as the ID on chapter headings, and use the same syntax (`#chapter-id-name`) to link to it from within the document.

Any images within the book get dropped into there together with the files. Hugo should be able to pick them up properly. (Always check, though. Ya never know.)

Anything else I can accomplish with scripting, or HTML + CSS (using the advanced features that Paged.js gives me).

I will give two examples of things that matter to me.

**Spacing around headings (a minor gripe).** Somehow, it is really hard/annoying to add empty space _above_ a chapter heading in Microsoft Word. Because the headings demand a page break before them, any empty space you auto add through settings is also ignored. (And I'm not manually adding Enters before each chapter, thank you very much.)

Now? I can simply use CSS to say `margin-top: 50px` (for example) on all headings, and boom it's done.

**Interactive stories (a bigger deal).** In EPUB format, an interactive story can obviously just _link_ to the other pages or chapters. You get a decision? Well, press _this link_ or _that link_, and continue reading.

There is no clicking on a physical book, of course. You need to supply the **page number** where the reader must continue.

As usual, do not be tempted to do this manually. At the same time, I had no clue how to achieve this. How ... do I automatically know _and_ display ... the page number of a given chapter ... on my "printified" web page?

Then I discovered Paged.js has a CSS property called `target-counter`. It returns the value of a counter _at the position of that element_. In other words, I can say `target-counter(#some-chapter-id, page)`, and it returns the page number of that chapter heading.

More generally, I can use `target-counter(attr(href), page)` on all links to make this work. It automatically reads its `href` attribute (which links to some chapter ID) and then gets its page number. Once I have that value, I can display and style it however I want.

With three lines of CSS, _all_ links inside the book now automatically have a `(page XX)` added to the end, which is always _correct_. For free!

## Conclusion

So, yeah, that's how I do it. It took me a while to figure this out. I certainly don't expect anyone to just be able to understand this: I needed knowledge of websites, the command line, Hugo, Paged.js, general publishing formats, etcetera.

But now that I _know_, writing books and converting them to a valid file to publish/print has become a breeze. One self-contained folder. Copy-paste somewhere, type one command, and we're done. All of that with the power of HTML, CSS and JavaScript to help me automate or design whatever I want.

I can see why many stick with something like Microsoft Word, or even InDesign, or some paid online novel writing software. Especially if you're less technically inclined or want to focus entirely on writing and hope a publisher will soon take care of all this.

But I never will. I've learned, time and time again, how future you will _hate_ you for locking your work into an ecosystem. For requiring software that's slow to boot, or a huge folder on a specific device, to work on something. It inhibits you and demotivates you to even try and write that next chapter. 

I've created many rulebooks in InDesign---heck, I did paid projects in it---and I hate it with a passion and don't understand how they could design something that is so unhelpful when it comes to designing. Website languages are simpler and more powerful. They have been for 10+ years. 

As such, this system is ideal to me. And I think, if you give it a try and try to switch to all plain text files, you'll love it too. You don't even need to do what I did. Find your own path, your own setup that works for you. Just stop locking your work into proprietary software, remove any obstacles getting in your way of just being productive, and realize you never 100% _need_ to pay or _need_ a publisher/editor to handle formatting and layout.

{{% remark %}}
What if you lose your license for Word? What if that format ever changes again and old files become unusable? What if you want a certain layout or design that's simply not possible in your current software? What if you realize you need to make sweeping changes to the project? You simply _can't_ write a tiny script to automatically update and fix issues across entire projects or even multiple books---not in Word, not in any "writing software".
{{% /remark %}}

That's why I wanted to quickly write this article. If requested, and I have time, I'll go more in-depth with specifics on how to do all this and how to solve certain issues. As books made using this system slowly roll out over the year (2024), I might find flaws or changes to make as well.

Keep writing,

Tiamo

### A bonus example of why this matters

Okay, I feel the need to give an example here. I realize not everyone is on the same page as me.

My Saga of Life project is already _huge_. It will only become bigger and bigger each year. Just before first launching it, I realized a mistake. Because they were older stories, I'd used a _hyphen_ with space (`something - something`) where I should've used an _em dash_ hugging the words (`something---something`). 

I knew by now that the latter was correct, prettier and easier to maintain. What to do? These were 10+ entire stories.

Well, do not fret. They're all plain text files! I could open any capable text editor, do a search-and-replace on this pattern for the entire folder, and five seconds later it was all fixed. (Reminder: my laptop is 10 years old and takes 10 minutes to boot to desktop.)

This happened several times. Making sweeping changes (or searches) across multiple stories, books, sets of notes is _possible_ and even _so fast I do it all the time_. Plain text files for the win.

What if I'd used Word? These stories would each be inside their own Word file. I'd need to open up each one individually, search for this mistake by hand (because it doesn't support regular expressions), then fix each instance.

My notes and ideas would be spread around different Word documents. I'd need to open up each one of them and hope to find what I was looking for inside it. Same for Google Docs or any other "system" surrounding your work.

What if I wanted to change their _appearance_ last minute? (Which I actually did several times for the Saga of Life.) Same thing. I'd have to go and fiddle with settings in multiple Word files. Or, I'd need to keep one file with _all_ combined stories, which would just grow ridiculously long and slow. And if my software simply _couldn't_ make this design happen ... well, I'd be screwed.

As stated, plain text files work wonderfully with Git. I have a free, fast, secure backup of all my writing just by pressing a button to commit my changes to GitHub each night. (The Saga of Life, in fact, is openly available on GitHub. You can search the entire website and see updates as I work on the stories.) Not only that, it gives _version control_. So I can go back to earlier versions if I make a mistake somewhere.

Learning to program and understand computers---just a little bit---isn't just for nerds or web developers. It's a skill that will save you thousands of hours now and in the future. The same is true for the skill of keeping things simple, free, and within your own control.

I wish I'd learned that 10+ years ago. It would have saved me much pain and wasted energy. Yes, this also refers to lost projects due to nonexistent backups or discontinued software :p
