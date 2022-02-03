---
title: "API key"
date: "2022-02-03T23:26:00.322Z"
coverImage: "/img/cover.jpg"
ogImage:
  url: "/img/cover.jpg"
---

1. Don’t store your API key directly in your code. 

2. Don’t store your API key on client side.  
If you are developing a web app, remember to always store your credentials always on backend side. Fetch the API results from there and then pass them to the frontend. 
If you’re a mobile developer, try to store your API credentials on a separate server that you own and use that same server to fetch the API results before then passing them on to the client. 

3. Don’t expose unencrypted credentials on code repositories, even private ones.  
Even private repositories can leave you vulnerable to hacks, so you should consider any API key exposed in any repository, public or private, as compromised. Instead, remove your API key and secret before publishing by using a gitignore file to specify files for Git to ignore or simply remember to hash your credentials before publishing. 

4. Consider using an API secret management service.  
Storing your API credentials as environment variables will save you a lot of pain, but if you are working on a project with a big team you may find that’s it hard to keep everyone in sync. One solution for convenience and peace of mind is to use a secret management service like AWS Secret Manager. This will not only protect your keys but help you retrieve and manage the credentials of your entire team. 

5. Generate a new key if you suspect a breach.
