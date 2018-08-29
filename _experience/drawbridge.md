---
layout: projectPost
title: Drawbridge
role: Data Engineer Intern
start: May 2017
end: August 2017
image: drawbridge.jpg
location: San Francisco, California
brief: Developed system to prevent click fraud and improved the granularity of the bidding algorithms
date: 2017-06-30 00:00:00
---
# A Summer in Silicon Valley

### Drawbridge
Even after signing my offer letter for the summer I didn't have crystal-clear idea of what Drawbridge did or why it was so sought after by various clients. In a nutshell, there's two products: ads and the graph. The ad product (the team where I worked) was basically a platform that would serve as a mini stock-exchange in terms of advertisers, allowing targeted advertising to be served to users with the data we have from our graph as well as data that is made public by other entities.

On the other side was the graph product, which is the core innovation that differentiate's Drawbridge from it's competitors, i.e. *cross-platform device identification*. Basically this allows an advertiser to know that the same person is viewing a certain page/product on their phone as their laptop and thus be able to provide more accurate targeted advertising. The crazy part is that it's 97.3% accurate, as verified by Nielsen.

### What I Learned
I think the biggest thing I learned over my summer at Drawbridge was what *scale* actually meant. I thought I had some semblance of it from past projects where I'd have to deal with an upwards of 500 concurrent users but that pales into comparison considering the literal *BILLIONS* of requests that came to the ads platform by the hour. I remember at one point spawning too many mappers for one of my queries and bringing the requests to a halt for ~10 minutes and seeing that I had stopped 100s of millions of requests from coming through and feeling like my internship was gonna come to an anticlimactic end. Thankfully it was an easy fix and no real harm was done.

Needless to say, this experience and the overall experience of working at a company that scales as such was very valuable for me in terms of being more careful and intentional about how I design my code, making sure that I double-check and not have any wasted resources.

### What I Made
One of the biggest unsolved problems affecting the ad industry is that of click-fraud. Click-fraud is basically when bots repeatedly click on an ad pixel and give a false sense of the effectiveness of an ad campaign, skew the data, and potentially screw an entity out of a lot of money. One of our clients was having this issue and having fraud siphon thousands of dollars from their campaigns so this issue was brought to our attention a few weeks before my start date and lined pretty well to become the problem that I would tackle.

The solution I built was pretty simple but surprisingly effective. Basically what my system did was query the requests every 20 minutes in a rolling window to see if there were any ip addresses with an excessive amount of click to conversion ratio (around 5% to start) and monitor them to see if this was persisting. If so, I would add them to a blacklist that would prevent them from even receiving requests at the first level of defense. Based on estimates from previous data this was saving ad campaigns around *$20,000* every month. So that's pretty cool.

### Learning Areas
* Scaling to billions of requests
* The wonders of big data (Hadoop, Hive, etc.)
* Better understanding of dev-ops
* How much analysis is involved with data engineering
* I *don't* enjoy 3 hour daily commutes
* I *do* however enjoy living in SF
