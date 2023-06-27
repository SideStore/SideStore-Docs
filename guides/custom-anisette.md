---
layout: home
title: Custom Anisette Server
nav_order: 3
---

# Custom Anisette Server

{: .important-title }
> Public anisette servers are now safe on SideStore 0.4.0
>
> SideStore 0.4.0 introduced _anisette-v3_ servers, which are creating custom anisette data for each device, and thus are not subject to locking as the older servers were.
>
> Thus, you can safely use SideStore without worrying about setting up a custom anisette server.
>

Anisette data is information used in the app signing process that needs to be generated each time you install or refresh apps. SideStore gets this information from a server that spoofs a Mac and sends you back the anisette data.

When many people use the same anisette server, it trips Apple's security and locks the accounts that were using that machine. This is why we recommend using a burner Apple ID instead of your main one. 

Our team worked on better approaches to avoid locked accounts (in the form of _anisette-v3_). But if for some reason, you are using some older versions of SideStore, hosting your own anisette server is a great way to avoid locked accounts. This is made incredibly easy thanks to our current server being open source and made for docker environments. This means we can deploy a server with nothing more than the GitHub link.

## Deploy on Render

[Render](https://render.com/) is a service for easily creating servers. It supports loading server sources from GitHub. The free tier is quite limited in terms of resources, but the server can run comfortably on it. All perfect for our needs.

1. [Register](https://dashboard.render.com/register/) for an account
2. Create a [New Web Service](https://dashboard.render.com/select-repo?type=web)
3. Scroll down to **Public Git repository** and enter this URL:
```
https://github.com/Dadoum/Provision.git
```
4. Hit **Continue** and fill in the form:
   - **Name** - Anything you want
   - **Region** - Closest to you
   - **Branch** - main (deafult)
   - **Root Directory** - Leave blank (deafult)
   - **Environment** - Docker (default)
   - **Instance Type** - Free
5. Wait for the server to build. You will see the following when it's done:
```
Machine requires provisioning... done !
Your service is live 🎉
```
*\*If the build fails for any reason, hit **Manual Deploy > Deploy latest commit***

6. Find the link for your new server at the top of the page:
```
https://[your-server-name].onrender.com
```

## Use your Server with SideStore

SideStore can be configured to use a custom anisette server. We will use the one we just created.

1. Go to the **Settings** app
2. Scroll down and tap on **SideStore**
3. Within the **Danger Zone**
   - **Use preferred servers** - Toggle off
   - **Anisette URL** - Enter your server URL

## Done

SideStore will now use your new custom anisette server, and your account should not get locked.
