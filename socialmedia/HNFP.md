In my job technical writer / marketer, the most common question I get from companies I work with is “how do we get to the front page of Hacker News?” And as someone whose writing has been on said front page many times, I’ll tell you: I have no clue! Sometimes it seems like good, high quality writing always finds its way to the front page; other times, it feels like the mods are out to get you. So I started (very manually) collecting data on what the top 30 posts on HN are at the end of any given day.

Here are the highlights (FP = Front Page):

-   Blog posts (45%) are the most popular type of content on the FP
-   A blog post from a corporate entity only has a 8% shot at making the FP
-   25% of FP posts are blog posts from engineers on their personal blogs/sites or OSS
-   36% of FP posts are news articles, and the (slight) majority of them are actually not about software/hardware
-   ShowHN posts almost never make the front page (<2%)

Here’s the breakdown more visually:

![](https://assets-global.website-files.com/632ad1f1775a87699cc63d14/649dba3c5d9dbb92ed11bc93_Z5T0qVsqRJJHDVwOV6IqoVUYoGsasx82_e5N_7T2yQ7ESol-NukShE7DciI-QhdI8CF0lus_Z2CYxkKwJFvm6fJZI6NvhKnumRxlnHeOg3BYi57gam377a5uI8nenaMOw73D18AmbOzEhgS0FzE4mwI.png)

Before some more analysis and a few more charts, I want to preface this post by saying that I don’t mean to comment on the _inherent value_ of getting your content to the front page of Hacker News. Whether this is the right goal, or if perhaps you should pursue a different goal like number of upvotes, or maybe comments, or maybe _angry_ comments, is not a discussion that this post intends to weigh in on. The goal of this post is just to answer a common question.

## **How I gathered and categorized the data**

The way I gathered this (small) data set was by manually combing through the top 30 posts on Hacker News using the [\`past\`](https://news.ycombinator.com/front?ref=backend.readamplified.com) feature. For each post, I clicked on the link to see what the content was about, who published it, and where. Partially in advance, and then partially on the fly the more stuff I saw, I classified each post into a category. Since my main focus is technical writing and marketing, the categories I chose relate to that lens:

-   News / opinion articles in media publications
-   Academic journals and papers
-   Blog posts (personal blog vs. a corporate blog vs. an open source entity)
-   Hiring announcements
-   ShowHN
-   Misc. (tweets and the like)

These categories have excellent coverage (Misc. <5%) despite them being oddly specific. You can see that I wasn’t particularly concerned with the _subject matter_ per se (everything is about Rust anyway) but more the format and the authoring entity.

The astute reader will note several limitations of the data set. 

First, the data I collected represents what _finished_ the day on the front page of Hacker News. But many items will _be_ on the front page over the course of a given day, and then end the day somewhere else (perhaps number 35, or 67). What “gets to” the front page – a group that contains, and exceeds the size of, what “ends” on the front page - is a richer data set but I do not have access to it / it may not exist.

Second, and perhaps more importantly, the dataset doesn’t record the _attempts_ made to get to the front page, i.e. all posts on Hacker News in a given day. It’s possible that there are orders of magnitude more blog posts _posted_  but fewer that _make_ the FP, whereas 95% of any academic paper submitted makes the front page (extreme figures used for illustrative purposes). So for simplicity, I’ll say “the likelihood of making the FP” which assumes a constant rate of conversion from post to FP across different categories.

Limitations aside, the results started to converge very clearly after only 5 or 6 days of data, although there were a few outlier days with spikes in a particular category. In total I collected and sifted through 30 days worth of data, and hope to add more in the future.

## **What kinds of blog posts get to the front page?**

Statistically, your best shot of getting your writing to the front page of Hacker News is by writing something (with nothing to promote) on your personal website or blog. 26% of total FP posts are blogs like this, while only 11% of total FP posts (or 24% of FP _blog_ posts) came from corporate entities on their corporate blogs or websites. 20% of blog posts are from some sort of open source entity (usually launches).

On the subject of what to post[, the Hacker News guidelines](https://news.ycombinator.com/newsguidelines.html?ref=backend.readamplified.com) say:

"O_n-Topic: Anything that good hackers would find interesting. That includes more than hacking and startups. If you had to reduce it to a sentence, the answer might be: anything that gratifies one's intellectual curiosity."_

and this is pretty much the story with what blog posts make the FP. 

![](https://assets-global.website-files.com/632ad1f1775a87699cc63d14/649dba3c9fef83bbff90eea4_kXTOQooDccBJfhuR2YAkHH32teTDP41Bzo9oecbA3EwQGyT0Zpo5xdAK18XGGL-CUlXjpOyqFMFpoosUnLfOSOLrzJUGWVjnRta7cVEeMw53kd9OCEh33Wpv3ljoYEPaX-Y79iLckeBMU4s_1WMVnZg.png)

Of those corporate blog posts, about 40% of them are product announcements or launches; the rest are less promotional content formats like technical tutorials. A common question I get is “how do we get our product launch on the front page of HackerNews?” and the answer is that it’s statistically highly unlikely (~4%) for that to happen. And of those product announcements that made the FP, a good deal of them are (a) from established companies and products like Apple, (b) posted organically by the community, and © about hardware and gaming. Not your software startup.

 Personal blog posts, though, are highly popular on the FP. They span the gamut from tutorials to “how I built \_\_\_” type posts, and of course the perennial “I made a thing.” Here are a few examples of personal blog posts that made the FP:

-   [You could have invented Futexes](https://tavianator.com/2023/futex.html?ref=backend.readamplified.com)
-   [Use Gröbner Bases To Solve Polynomial Equations](https://jingnanshi.com/blog/groebner_basis.html?ref=backend.readamplified.com)
-   [My ultimate shell setup with Fish shell and Tmux](https://www.milanvit.net/post/my-ultimate-shell-setup-with-fish-shell-and-tmux/?ref=backend.readamplified.com)
-   [Writing portable ARM64 assembly](https://ariadne.space/2023/04/13/writing-portable-arm64-assembly/?ref=backend.readamplified.com)

The common thread is that they’re non-promotional, and typically focus on a personal pursuit of the author.

My personal experience writing for corporate entities says that useful tutorials and interesting stories do the best. The most recent post I wrote that made it to #1 was a tutorial for PlanetScale about how database sharding works (HN post [here](https://news.ycombinator.com/item?id=35476518&ref=backend.readamplified.com)). A few others I wrote that made the FP were all non-promotional:

-   My two stories for Retool about why Accenture ([link](https://news.ycombinator.com/item?id=26969364&ref=backend.readamplified.com)) and Oracle ([link](https://news.ycombinator.com/item?id=29004597&ref=backend.readamplified.com)) are worth so much money
-   My blog post for WorkOS about best practices for building webhooks ([link](https://news.ycombinator.com/item?id=26401838&ref=backend.readamplified.com))
-   My “thought leadership” for PlanetScale about DBA experience ([link](https://news.ycombinator.com/item?id=28330297&ref=backend.readamplified.com))

These successes live next door to a massive graveyard of blog posts I’ve written that _I_ thought were really good, but Hacker News did not. Or perhaps randomness just reared its ugly head. 

The second biggest category of posts that make the front page of Hacker News is (shocker) news, which I define here as a story or opinion piece published by a media organization. 36% of FP items are news, which is a lot!

While almost all of the news that makes the FP is STEM related, the majority of it (well, by a few percentage points) doesn’t relate to software or hardware. There are a lot of articles about space exploration and rockets, biology and chemistry, and physics, but fewer about code and SaaS and things like that. 

![](https://assets-global.website-files.com/632ad1f1775a87699cc63d14/649dba3ca8ed824bd79ba8d3_pjdKS6A4o27kEYtwlnZgM6VxUAXoGgowy75MPKKiNrGbBzVFLpni_8hxcfq-loZH96NKAdeTnnyvUNK_-0NtLcMZgJDMKHT7X28kWriVJUgMvMOxY1_hEtCceLie_V0tmXAA-TfY8PcfLw_IJes1GkQ.png)

It’s worth noting that I didn’t see a single article from TechCrunch in the entire dataset I gathered, despite there being plenty of articles for places like the Verge, Wired, etc. A cursory search using [Algolia’s Search HackerNews tool](https://hn.algolia.com/?dateRange=all&page=0&prefix=true&query=techcrunch&sort=byPopularity&type=story&ref=backend.readamplified.com), ordered by number of upvotes, reveals that HackerNews really does not like TechCrunch very much.

![](https://assets-global.website-files.com/632ad1f1775a87699cc63d14/649dba3cba56aaf52dcddc00_KRYt7_07ST-0C8_iA08dax5grWML5tBb7RYfsAl70_3hTSKOHX50Vb1UiCdZB5tB2GcmpqKI6oFllaJA8J4iC6FdAQKe2vVuulk4eGGU3w98wEHQfY9MFzU8sUck3ygvcAJ3gW3-c3lTaxc-hOB9Vto.png)

## **Miscellaneous findings and notes**

6% of items on the front page are academic papers, which is more than I thought.

ShowHN is very valuable, but is not likely to land your product on the front page.

Tweets and tweet threads sometimes make the front page.

It’s uncommon for hiring or launch posts - the two types of posts that are reserved for YC companies, and “artificially” promoted by moderators - to make the front page.

You can access the underlying dataset [here](https://docs.google.com/spreadsheets/d/1iUYmm4PRFbRi6KmDztRyCDiaHOLjsze4zT6Ts4-qbxk/edit?usp=sharing&ref=backend.readamplified.com).

I want to thank [Max Woolf](https://github.com/minimaxir?ref=backend.readamplified.com) (who may recall interviewing me for a Data Science job at Buzzfeed that I thankfully did not take) for the excellent [“Hacker News Undocumented”](https://github.com/minimaxir/hacker-news-undocumented?ref=backend.readamplified.com) resource. It was tremendously helpful.