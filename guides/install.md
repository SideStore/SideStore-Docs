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

<!--
With SideStore downloader installed (and it's requirements met), simply connect your iOS device physically to your internet enabled PC. Then using the SideStore downloader, enter your Apple ID credentials (read more about creating a "burner" Apple ID to prevent lockouts) and wait until SideStore is installed on your iOS device homescreen.

You must then enable "Developer Mode" in your iOS security settings. Additionally, you must *Trust* your personal developer certificate.

Finally, open the SideStore app on your homescreen, re-enter the Apple ID credentials used previously, and refresh to ensure that everything is working correctly.
-->

# Pairing Process

Using Jitterbugpair (not jitterbug app) allows us to create a pairing file for program like sidestore to talk to your device and is required to use sidestore or it will not function. (Windows and MacOS requires iTunes)

Jitterbugpair Downloads:

[Windows (x64)](https://github.com/osy/Jitterbug/releases/download/v1.3.1/jitterbugpair-win64.zip)

[MacOS](https://github.com/osy/Jitterbug/releases/download/v1.3.1/jitterbugpair-macos.zip)

[Linux](https://github.com/osy/Jitterbug/releases/download/v1.3.1/jitterbugpair-linux.zip)

Generic Pair Instructions:

Unzip the Jitterbugpair program zip file. Plug your idevice into the computer and execute the program. Your idevice might get asked to trust this computer just trust it as it can be part of pairing process.

Windows users might have to execute the program in the command prompt or powershell window as it can sometimes not open. All you have to do is in file explorer go into the folder where the jitterbugpair folder is and in the top bar where the file location is you click empty spot and type powershell and it should open a blue colored window called powershell. In there you just type ```./jitterbugpair.exe``` and the pairing process should begin.   
