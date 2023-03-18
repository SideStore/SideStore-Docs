---
layout: home
title: Custom Anisette Server
nav_order: 3
---

# Custom Anisette Server

Anisette data is information used in the app signing process that needs to be generated each time you install or refresh apps. SideStore gets this information from a server that spoofs a Mac and sends you back the anisette data.

When many people use the same anisette server, it trips Apple's security and locks the accounts that were using that machine. This is why we recommend using a burner Apple ID instead of your main one. 

Our team is working on better approaches to anisette data that will avoid locked accounts and switching servers. In the meantime, hosting your own anisette server is a way to avoid locked accounts. This is made incredibly easy thanks to our current server being open source and made for docker environments. This means we can deploy a server with nothing more than the GitHub link.

## Deploy on Render

[Render](https://render.com/) is a service for easily creating servers. It supports loading server sources from GitHub. The free tier is quite limited in terms of resources, but the server can run comfortably on it. All perfect for our needs.

1. [Register](https://dashboard.render.com/register/) for an account
2. Create a GitHub account and [fork this repo](https://github.com/Dadoum/Provision).
3. Go back to Render and create a [New Web Service](https://dashboard.render.com/select-repo?type=web)
4. Paste the **FORKED** repo link at ‘Public Git Respository’ and click ‘Continue’
5. Give it a name and choose the region closest to you. *Leave everything else as it is.*
6. At the newly created web service, click on ‘Manual Deploy’ and choose ‘Deploy Latest Commit’. Wait until it's done.
7. If the web service is done and live, you can find the link to your new server at the top of the page:
```
https://[your-server-name].onrender.com
```

You are done and can proceed with setting up SideStore on the newly created server.

## Use your Server with SideStore

SideStore can be configured to use a custom anisette server. We will use the one we just created.

1. Go to the **Settings** app
2. Scroll down and tap on **SideStore**
3. Within the **Danger Zone**
   - **Use preferred servers** - Toggle off
   - **Anisette URL** - Enter your server URL

## Done

SideStore will now use your new custom anisette server, and your account should not get locked.
