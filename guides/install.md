---
layout: home
title: Installation
nav_order: 2
---

# Installation

The process of installing SideStore onto your device requires the **one time use** of a computer. Following the initial installation, SideStore can be indefinitely refreshed without the use of a local computer.

## Generic Install Requirements

* Personal Computer (Windows, Mac, Linux)
    * _See individual install guides for specific distributions and OS versions_
* iOS device
    * iOS/iPadOS 14+
* Apple ID account

"Burner" Apple IDs are **highly** recommended when using anisette servers created by others. See more about [creating your own anisette server.](/guides/custom-anisette)

You must enable "Developer Mode" in your iOS security settings. Additionally, you must *Trust* your personal developer certificate after installing with your Apple ID.

**You will need the wireguard vpn app and use the wireguard config provided and share it to the wireguard app.**

[Wireguard](https://apps.apple.com/us/app/wireguard/id1441195209)

[Wireguard Config](https://github.com/SideStore/SideStore/releases/download/0.1.1/SideStore.conf)

<!--
With SideStore downloader installed (and it's requirements met), simply connect your iOS device physically to your internet enabled PC. Then using the SideStore downloader, enter your Apple ID credentials (read more about creating a "burner" Apple ID to prevent lockouts) and wait until SideStore is installed on your iOS device homescreen.

You must then enable "Developer Mode" in your iOS security settings. Additionally, you must *Trust* your personal developer certificate.

Finally, open the SideStore app on your homescreen, re-enter the Apple ID credentials used previously, and refresh to ensure that everything is working correctly.

-->

## Installing SideServer for MacOS and Windows 10/11 (soon).

1. Download and install SideServer:
   
[Download for MacOS](https://github.com/SideStore/SideServer-macOS/releases/latest/download/SideServer.dmg)

2. Plug your iDevice into your computer or connect it via Wi-Fi if you enabled Sync over Wi-Fi in Finder or itunes, Launch SideServer, Click the SideServer icon from the menu bar or System Tray (Windows) and select "Install SideStore". then, follow the instructions until SideServer confirms that SideStore was installed.

3. Go to Settings on your iDevice, go to "VPN and Device Management" under "General" and approve the Profile with your Apple ID email.

4. Open SideStore and Sign in with your Apple ID in-app, Enjoy!
