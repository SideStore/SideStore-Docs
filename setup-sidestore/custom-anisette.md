---
title: Custom Anisette Server
nav_order: 3
description: >-
  SideStore 0.4.0 introduces anisette-v3 servers, creating custom anisette data
  for each device, eliminating locking issues. This allows users to safely use
  SideStore without a custom anisette server.
---

# 🔑 Custom Anisette Server

> Public anisette servers are now safe on SideStore 0.4.0
>
> SideStore 0.4.0 introduced _anisette-v3_ servers, which are creating custom anisette data for each device, and thus are not subject to locking as the older servers were.
>
> Thus, you can safely use SideStore without worrying about setting up a custom anisette server.

Anisette data is information used in the app signing process that needs to be generated each time you install or refresh apps. SideStore gets this information from a server that spoofs a Mac and sends you back the anisette data. No account info is sent to the server ever in this process.

When many people use the same Anisette server, it trips Apple's security, and locks the accounts that were using that machine. This is why we recommend using a separate burner Apple ID instead of your main one.

Our team worked on better approaches to avoid locked accounts (in the form of _anisette-v3_). But if for some reason, you are using some older version of SideStore, hosting your own anisette server is a great way to avoid locked accounts. This is made incredibly easy thanks to our current server being open source and made for docker environments. This means we can deploy a server with nothing more than the GitHub link.

## Use your server with SideStore

SideStore can be configured to use a custom Anisette server.

1. Open Settings.
2. Scroll down and tap on SideStore.
3. Within the Danger Zone:
   * **Use preferred servers** - Toggle off
   * **Anisette URL** - Enter your server URL

## Done

SideStore will now use your new custom anisette server, and your account should not get locked.
