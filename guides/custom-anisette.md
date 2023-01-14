---
layout: page
title: Custom Anisette Server
---

You may have found using one of the built-in anisette servers, that your account becomes locked and you may see the error message "Field to Log in. Unable to sign you in to your Apple ID. Try again later. (-36607)." 

To circumvent this issue in the future (and maintain more privacy and security over your data), you can host your own anisette server for free.

## Serving it on [Render](https://render.com/)

1. Go to https://dashboard.render.com/register and register for an account.
2. Click on the "New Web Service" button.
3. In the "Public Git Repository" field at the bottom, enter the URL:
> ```
> https://github.com/Dadoum/Provision.git
> ```
4. Click "Continue." and follow on-screen instructions.
5. Enter a name for your service and choose a region.
6. Scroll to the bottom and click "Create Web Service."
7. Wait for the build to complete.
8. Click "Manual Deploy" button on the top right and select "Deploy latest commit".
9. Once the build is finished, check if your service works.

## Other services

It is also entirely possible to build and create an anisette server on other web services
due to the nature of the Provision server.
