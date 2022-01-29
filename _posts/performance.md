---
title: "Performance"
date: "2022-01-29T21:15:00.322Z"
coverImage: "/img/cover.jpg"
ogImage:
  url: "/img/cover.jpg"
---

Web performance is the objective measurement and perceived user experience of a web site or application. This includes:

###  Reducing overall load time: 
How long does it take the files required to render the web site to download on to the user's computer? 
Make your files as small as possible, reduce the number of HTTP requests made as much as possible, and employ clever loading techniques (such as preload) to make files available sooner.

### Making the site usable as soon as possible: 
The measurement of how long it takes the site to get to a usable start after it has started loading is called **time to interactive**.
Load your web site assets in a sensible order so the user can start using it, and gets on with primary tasks, while any other assets continue to load in the background, and when possible only load assets when they are actually needed (this is called lazy loading). 

### Smoothness and interactivity: 
Does the application feel reliable and pleasurable to use? Is the scrolling smooth? Are buttons clickable? Are pop-ups quick to open up, and do they animate smoothly as they do so? Best practices in making apps feel smooth, for example CSS animationsrather than JavaScript, and minimizing the number of repaints the UI requires due to changes in the DOM.

### Perceived performance: 
Perceived performance is not a metric, however how a user perceives your performance is as important, than any objective statistic. Even if an operation is going to take a long time (because of latency, etc), keep the user engaged while they wait: show a loading spinner, useful hints and tips, or jokes, etc. Show nothing will make it feel like it is taking a lot of time, and possibly lead to your users thinking it is broken and giving up.

### Performance measurements: 
Web performance involves measuring the actual and perceived speeds of an application, optimizing where possible, and then monitoring the performance, to ensure that what you've optimized stays optimized. This involves a number of metrics (measurable indicators that can indicate success or failure) and tools to measure those metrics.

Many features impact performance including latency, application size, the number of DOM nodes, the number of resource requests made, JavaScript performance, CPU load, and more. It is important to minimize the loading and response times, and add additional features to conceal latency by making the experience as available and interactive as possible, as soon as possible, while asynchronously loading in the longer tail parts of the experience.  
Note: Web performance includes both objective measurements like time to load, frames per second, and time to interactive, and subjective experiences of how long it felt like it took the content to load.

### How content is rendered  
To understand web performance, you must understand how browsers work. This includes:

#### How the browser works. 
When you request a URL and hit Enter / Return , the browser finds out where the server (that holds that website's files) is, establishes a connection to it, and requests the files. 

#### Source order. 
Your HTML index file's source order can significantly affect performance.   
The download of additional assets linked to from the index file is generally sequential, based on source order, but this can be manipulated and should definitely be optimized, realizing that some resources block additional downloads until their content is parsed and executed.

#### The critical path. 
Once the files have been downloaded from the server, the browser follows a well-defined set of steps to construct the web document. Optimizing the critical rendering path, prioritizing the display of content that relates to the current user action, will lead to significant improvements in content rendering time. 

#### The Document Object Model or DOM. 
The document object model, is a tree structure that represents the content and elements of your HTML as a tree of nodes. This includes all the HTML attributes and the relationships between the nodes. After the pages has loaded, extensive DOM manipulation (e.g., adding, deleting, or moving of nodes) can affect performance, so it is important to understand how the DOM works.

#### Latency. 
Latency is the time it takes for your website assets to travel from the server to a user's computer. To reduce latency, you can reduce the number of HTTP request you make by downloading less files, use a CDN to make your site more universally performant across the world, and use HTTP/2 to serve files more efficiently from the server.

## Links

Article: [What is web performance, Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/Performance/What_is_web_performance)  
Article: [Analyze and optimize your website with PageSpeed tools, Google Developers](https://developers.google.com/speed)   
Tool: [Webdev Measure](https://web.dev/measure/)  
Tool: [WebPageTest](https://www.webpagetest.org/)  
Tool: [Pagespeed](https://pagespeed.web.dev/)  
