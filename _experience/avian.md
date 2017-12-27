---
layout: projectPost
title: AVIAN
role: Java Developer
categories: extinct
image: avian.png
start: February 2017
end: May 2017
brief: Created JavaFX GUI to connect to a radio receiver with UDP and interact with 10 traffic light controller & autonomous car rigs.
date: 2017-05-20 00:00:00
siteURL: http://avian.essie.ufl.edu/
---
AVIAN is an interdisciplinary [team](http://avian.essie.ufl.edu/team/) of researchers developing methods and tools for jointly optimizing signal control and vehicle movement to improve mobility by exploiting capabilities of connected and autonomous vehicles. The project is [funded](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1446813&HistoricalAwards=false) by the National Science Foundation and is expected to be completed by 2019.

The vast majority of the team members were Ph.D candidates and those who have had extensive experience in academia, and I was an undergraduate way in over his head with a bit of CS experience. Needless to say it was a very valuable experience as I learned from very smart people how the research process works, with the very slight iterations and improvements made over time. I joined the group and my initial responsibility was to visualize the speed data for the drivers of the semi-autonomous vehicles... simple right?

Unfortunately due to the nature of the technology being used (20 year old radios) I couldn't simple transfer data from the receivers to an Android tablet due to the limitations of libUSB. Later on, we decided to have the radios transmit UDP signals and have that being picked up by a JavaFX application running on a laptop that would do the data processing and visualize the proper speed limit to go every 1-2 seconds.

### Learning Areas
* User Experience Research
* Multithreading in Java
* JavaFX UI creation
* libUSB and its limitations
* UDP and TCP Networking
* The tedium involved in the academic research process

### Status
The project is still being worked on. The first major system integration test was conducted at the traffic test facility in Tallahassee, FL and it was mostly a success. There were some issues with the autonomous vehicles which will be worked on and demoed in the future. For the web application, development has been taken over by someone else, and future work includes making the user interface more polished, improve the threading efficiency, and providing more granularity for the driver's options.
