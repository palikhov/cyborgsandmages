---
title: 'World Anvil Guide'
date: '2018-12-23'
categories:
  - 'articles'
tags:
  - 'proverit-rubriku'
---

BBCode (Bulletin Board Code) is a simple way of adding some spice to your content. It will allow you to add headers, images, links, make text bold, italic or underline it and many other cool things. In order to use it. Use the list of available BBCodes below in your text fields.

For example if you wanted to make part of your text bold you can use \[b\]This text is bold\[/b\]. Anything in between \[b\] and \[/b\] will become bold.

Typographic

<table class="wp-block-table"><tbody><tr><td>[h] ... [/h]</td><td>Main Header</td></tr><tr><td>[h2] ... [/h2]</td><td>Secondary Header</td></tr><tr><td>[h3] ... [/h3]</td><td>Tertiary Header</td></tr><tr><td>[h4] ... [/h4]</td><td>Quaternary Header</td></tr><tr><td>[b] ... [/b]</td><td>Bold text</td></tr><tr><td>[i] ... [/i]</td><td>Italics text</td></tr><tr><td>[u] ... [/u]</td><td>Underlined text</td></tr><tr><td>[br]</td><td>Line break, use to leave multiple lines space.</td></tr><tr><td>[hr]</td><td>Horizontal line used to break content.</td></tr><tr><td>[s] ... [/s]</td><td>Strikethrough text</td></tr><tr><td>[sup] ... [/sup]</td><td>Superscript to be used for footnote references and exponents</td></tr><tr><td>[sub] ... [/sub]</td><td>Subscript to be used for footnote references and chemical formulas</td></tr><tr><td>[in] ... [/in]</td><td>Paragraph indentation. To use, wrap your whole paragraph using the tags.</td></tr><tr><td>[dc] ... [/dc]</td><td>Dropcap. Like in all the snazy manuscripts. A large bold letter.</td></tr><tr><td>[left] ... [/left]</td><td>Aligns text left</td></tr><tr><td>[right] ... [/right]</td><td>Aligns text right</td></tr><tr><td>[center] ... [/center]</td><td>Aligns text center</td></tr><tr><td>[justify] ... [/justify]</td><td>Justifies text</td></tr><tr><td>[small] ... [/small]</td><td>Small text to be used for footnotes etc.</td></tr><tr><td>/* ... */</td><td>Comment/note in the article hidden from presentation. [guild feature]</td></tr><tr><td>[redacted:X]</td><td>Create a pressumably hidden text like that ██████ where X is the number of characters.</td></tr><tr><td>[youtube:URL]</td><td>Embed any YouTube video into your page. The URL is the url on your address bar.</td></tr><tr><td>[spotify:URL]</td><td>Embed any spotify song, playlist or album. Use the URI or sharing link as the URL.</td></tr><tr><td>[user:USERNAME]</td><td>Use the above to link to another user's profile page.</td></tr><tr><td>Advanced</td><td>&nbsp;</td></tr><tr><td>[roll:1d20+3]</td><td>Rollable dice! You click on the Roll it will appear on the bottom right of the screen. Click again to remove.</td></tr><tr><td>[tooltip:TOOLTIP TEXT]DISPLAYED TEXT[/tooltip]</td><td>Create a tooltip adding more information on the text inside of it. To be used for explanations and abbreviations.</td></tr><tr><td>@...</td><td>Autocomplete link to any of your articles. Just use @ followed by a minimum of any 3 characters on the title of any of your articles. e.g. @Longsw (will autocomplete Longsword if an article exists and create a link to it.)</td></tr><tr><td>@TITLE(TEMPLATE)</td><td>Link to uncreated article. Replace TITLE with the title you want to have Replace TEMPLATE with the template you want to use. Check below for a list of available templates. examples: @Captain John Redbeard(person) @Wickham Valley(location)</td></tr><tr><td>[url=LINK]TITLE[/url]</td><td>Link to page e.g.</td></tr></tbody></table>

\[url=http://www.google.com\]Go to Google\[/url\]

or \[url=#ID\]Go to a header on the page\[/url\]

\[quote\]QUOTE|AUTHOR\[/quote\]

Quote and author Author is optional, just don't add the "|" To break your text in to multiple lines use the \[br\] BBcode e.g. \[quote\]To be or not to be|Hamlet\[/quote\]

\[img:IMAGEID\]

Image from World's image gallery

Options:

\[img:id\] (Auto scale)

\[img:id|left\] (Float left)

\[img:id|right\] (Float right)

\[img:id|center\] (Align center)

\[img:id|ANYABOVE|WIDTH\] (example: \[img:60449|right|200\])

\[img:id|ANYABOVE|WIDTH|nolink\] (with no link to image page)

Replace IMAGEID with the ID of the image as shown on your image gallery

e.g. \[img:20|left\]

\--KEY::VALUE--

Key/value lists Use it to create lists of items with key and value like Age: 23, Str: 17 etc. e.g. --STR::17--

\[row\]

\[col\] COLUMN-1-CONTENT \[/col\]

\[col\] COLUMN-2-CONTENT \[/col\]

\[/row\]

2-columns layout By using the structure above you can create content which is separated in two parallel columns. It is very important that you don't forget the \[row\] and \[/row\] or this can cause chaos to your article's presentation.

\[row\]

\[col3\] COLUMN-1-CONTENT \[/col3\]

\[col3\] COLUMN-2-CONTENT \[/col3\]

\[col3\] COLUMN-3-CONTENT \[/col3\] \[/row\]

3-columns layout By using the structure above you can create content which is separated in three parallel columns. It is very important that you don't forget the \[row\] and \[/row\] or this can cause chaos to your article's presentation.

\[anchor|ID\]

Use anchor in conjuction with \[url=#ID\]...\[/url\] To create a jumping point to that place of your text. Anchors are the targets for url tags with a #ID link \[h1|ID\] (Or any other header from 1 - 6). Use anchor in conjuction with

\[url=#ID\]...\[/url\]

To create a jumping point to that place of your text. Anchors are the targets for url tags with a #ID link

\[spoiler\] CONTENT | TITLE \[/spoiler\]

Anything in between it will be hidden and a "show spoiler" button will appear. When clicked it will display the hidden content.

\[aloud\] \[/aloud\]

A simple box to be used for "read-aloud" boxes mostly to be used for RPG adventure authoring.

\[ul\]

\[li\]ITEM1\[/li\]

\[li\]ITEM2\[/li\]

\[/ul\]

List You can add as many \[li\] .. \[/li\] in between the \[ul\] tags.

\[noparse\]

Any content including WABBC \[/noparse\]

Using noparse will allow you to print on the screen for the readers the actual WABBC you used. This is great if yu want to create a guide for your co-authors or the community.

\[genesysdice:TYPE\]

setback

boost

difficulty

ability

challenge

proficiency

advantage

threat

failure

success

triumph

despair

Add the symbol for any dice of the Genesys system

Guild-Only & Advanced

<table class="wp-block-table"><tbody><tr><td>[section:CSS_CLASS] ... [/section]</td><td>Grandmasters and above can use the above BB code to create custom SPAN html elements using the class they desire. You can nest up to 1-level deep.</td></tr><tr><td>[container:CSS_CLASS] ... [/container]</td><td>Grandmasters and above can use the above BB code to create custom DIV html elements using the class they desire. You can nest up to 1-level deep.</td></tr></tbody></table>

Templates list

Use the value in the brackets when using the templates in order to create a link to a not-yet-created article. e.g. @London(settlement)

Character (character) or (person)

Conflict (militaryConflict) or (conflict)

Condition (condition)

Document (document)

Ethnicity (ethnicity)

Formation (formation)

Geographic location (location)

Generic article (article)

Item (item)

Language (language)

Law (law)

Location, Settlement (settlement)

Locations, Landmark (landmark)

Material (material)

Myth / Legend (myth) or (legend) or (prophesy)

Organization (organization)

Prose (prose)

Profession (profession)

Rank/Title (rank) or (title)

Spell (spell)

Species (species)

Technology (technology)

Tradition / Ritual (ritual) or (tradition)

Vehicle (vehicle)

Title  
The title of your title is displayed in the table of content and the top of your article page. In addition to that it is used in order to mention (@name-of-article) your content when you write and when you search for it.

Content  
Write the main body text of your article here. You can use our BBCode to make your text bold or italic or add heading and separate it into columns and much more. In addition you can use the @ sign and write any 3 letters from the title of any of your aricles in order to mention them. When in view mode these will become links to the articles you mention!  
Once you have submitted your article you will be able to add notes, secrets, historical entries and much more information to it.

PLOTS  
Plots are articles dedicated to outlining a story.

Once you add a plot in your campaign you will be able to have quick access to it via the Digital Storyteller's Screen (DSTS)

You can use them in order to write your thoughts about the over arching story of your campaign AND/OR each of its sub-parts like Acts, sideplots and sessions.

Adding a parent plot here will automatically add all children of that plot here in a tree-like structure.

That means that if you add your "MASTER" plot you will never have to add anything else again since all plost having it, of any of it children as parents will automatically be added to your campaign

FAQ  
Do you have questions? So does the Sphinx! We understand that World Anvil is a new way of doing things, so  
if there is anything you need to ask then write to us on Twitter, Facebook or Discord.

What does it mean that my world or articles are Public?  
A public world can be accessed by people visiting the website if they find their way to your page. Private worlds, which are available to guild members are worlds that can only be accessed by their owners, their co-authors and their assigned-by-the-owner subscribers.  
A public worlds does not mean at any way that it is part of the public domain. Owners/Authors of public or private worlds hold exclusive and non-negotiable copyright of their work unless they state otherwise in their writing in their worlds. World Anvil will do its best to prove the ownership of said worlds if need be and will provide evidence of when any article was created and by which user (username/email). We take privacy and ownership very seriously. We are creators as well and we believe that a creator's work should be protected by any mean possible within the letter of the law. You can read more about this on our ToC and Copyright policy on our footer.

How is World Anvil different from Scrivener?  
World Anvil has little resemblance to Scrivener! Scrivener is an amazing tool for authors to write their work and organize it structurally. World Anvil is a system that allows you to keep information about your world’s content in an abstract and thematically organized way, and to cross-reference content.

Why use World Anvil and not OneNote or Google Docs for my world?  
Both World Anvil and online editors provide a cloud-based accessible-from-everywhere service, but that’s where the similarity ends. World Anvil provides the creator with a structured, easy-to-link, and easy-to-search-through platform which guarantees fast and controlled access to their world. It also provides an attractive presentation mode for readers. The templating system is designed to be inspiring and thought-provoking, leading you to create more detailed and more complete worlds. Whereas a simple word processor might give you ‘blank page syndrome’, World Anvil will stimulate your creativity.

What if I want to copy someone else’s work for my world?  
World Anvil was designed for writing your own original work. You are also free to use World Anvil to collect, post or edit material which is licensed as Creative Commons (as long as you observe the tenants of the specific license - attribution, remixing, etc.) or is in the Public Domain. This might include material from books which are out of copyright, or Wikipedia articles. It’s a good idea to mention which material is not your own in the Author’s Notes section, so as to avoid any confusion about authorship.

If you put up content which belongs to someone else and is their Intellectual Property - be that images, text or anything else - World Anvil reserves the right to take it down. We feel very strongly about Intellectual Property, and we will observe take down notices from content producers who have their rights infringed upon by our users, as per the Digital Millennium Copyright Act (DMCA) and the World Intellectual Property Organization (WIPO).

Submitting verbatim copying of other people’s texts - regardless of licensing - in a World Anvil competition entry will get you disqualified from that competition.

What happens when my Guild membership account expires?  
If you let your Guild membership expire your private articles remain as they are, private. You will not be able to edit them unless you make them public or renew your membership. You will still be able to see them.

Do my co-authors need a Guild Membership as well?  
No! Only the owner of the world needs to have a guild membership. The only thing a co-author needs is a World Anvil account and the desire to write with you!

How is World Anvil different from Obsidian Portal?  
Obsidian portal is geared towards allowing Storytellers and players to track a single RPG campaign. World Anvil is a tool for Storytellers who build their own worlds to present them and organize them the same way that a campaign setting book would. It tracks the overarching history and cosmology of a world in its entirety, rather than the adventures of a single group of characters.

Can I tell you my cool idea for a new feature?  
Yes! Of course! We are planning to be completely transparent in regards to the future features and also allow our Guild Members to vote on which they feel would be more useful to them.

Is there a limit on articles, images or anything else?  
No limits on articles or images, you can have as many as you want. The only limitation is the size of files you can store, and that can be extended, "…for a price - mwhahaah!"

What is the difference between a follower and a subscriber?  
Followers are members of the community that will get updated anytime you post something publically. Subscribers will be able to view more tailor-made content, you can allow them access to secrets, private content etc. In the future, the plan is that you will be able to ask your subscribers to pay a one-time or monthly fee to have access to your ever-growing world!

Can I export my work?  
Yes, you will be able to export everything you wrote. Your work is your work - period.

What about copyright?  
Once again, your work is your work. We do not and will not in any way claim ownership over it. In fact, we plan and explore ways to make sure you can prove the ownership of your world. We value your intellectual property and we are here to protect it.

Do you have a question you couldn't find the answer to?  
Drop us a line at hello@worldanvil.com and we will be happy to answer it and update the FAQ.

RPG CAMPAIGN AND ADVENURE PLOTS THE GREAT GM STYLE

- These will appear on the top of the page and are visible to only yourself.  
   OBJECTIVE

This is your objective to be achieved during the adventure - The PCs learn about the rise of the Dark Lord, or The PCs find a ring in a lake.

THEME

You should carry the theme of your Master Plot through, write it here to remind yourself of it.

TYPE

There are four types of adventures, make sure to mix them around to create different adventures one after another!

FOCUS

Is this adventure part of the Master Plot, a Character development adventure or an emergent/other adventure. Remember to Focus on making it just that!

MAIN ADVERSARY TYPE

Depending on whether this is a Master Plot adventure, a side adventure, or some other kind of adventure you may need the Nemeis, a villain, just some henchmen.

WHAT DO WE EXPECT?

List what we expect from this kind of adventure and then work out how you're going to make it different.

WHAT MUST THE PLAYERS LEARN?

LIST 10 NAMES

Consider names for races and genders most likely to be encountered in this adventure. Avoid similar sounding names - Bryan, Brin, and Bryl.

HOW DOES THE OUTCOME CHANGE YOUR MASTER PLOT?

If there is no impact on the Master Plot then you need not log anything. If there is a major change make a note here to remind yourself later.

Act I  
INTRO GOAL

Tell your players what their goal is quickly and clearly - Save the prince, rescue the fireman, or arrest the police officer.

INTRO ENEMY

Give your players someone or something to hate early on in the adventure so they can track them down.

INTRO SITUATION

Do not delay to establish the situation the PCs find themselves in. A battle, a robbery, a cooking competition.

Act II  
SET-UP JOURNEY

As this is the bulk of your adventure, fill it with encounters, NPCs, and other curious events and moments.

FIRST ATTEMPT

The PCs must have a crack at resolving the situation, and should fail. That way they can learn how to really win and try again!

Act III  
FALSE ENDING

Make it appear as if the PCs have won, and then reveal there is more to it! A surprise.

FINAL SHOWDOWN

Make sure to conclude your adventure with the enemy defeated and the heroes victorious.

WHAT HAVE I SEEDED WITH MY PLAYERS

Storyteller's private notes.  
What do your players know about this? What information was given to them about this location by NPCs or other means? Who/what gave this information and when? Learn how to fill this section click here for the Great GM's Advice

SIDEBAR CONTENT  
Sidebar: Over panel content

This text will appear on the top of the sidebar of your article. It's a great place to use the \[img:123\] BBCode to display a portrait or a tagline.

Sidebar: Panel content (top)

This text will appear inside the sidebar panel at the top of the rest of the data. It is a great way to use the --KEY::VALUE-- BBcode to add additional formatted information to your article. It is also great for using the \[img\] tag for Wikipedia like sidebar display.

Sidebar: Panel content (bottom)

This text will appear inside the sidebar panel at the bottom of the rest of the data. It is a great way to use the --KEY::VALUE-- BBcode to add additional formatted information to your article.

Sidebar: Under panel content

This text will appear under the sidebar of your article.

FOOTNOTES

This content will appear at the bottom of the left column of your article. It is made so you can display your footnotes but it can be also a way to keep on writing on your article like a secondary vignette under the rest of the content.

FULL FOOTER

This content will appear at the very bottom of your article under both the left and right columns.
