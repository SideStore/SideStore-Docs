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

Using Jitterbugpair (not jitterbug app) allows us to create a pairing file for programs, like sidestore to talk to your device and is required to use sidestore or it will not function (Windows requires iTunes). If you have SideServer for MacOS,Windows,Linux,etc. This doesnt apply to you as SideServer automatically pairs during the installation process.

Jitterbugpair Downloads:

[Windows (x64)](https://github.com/osy/Jitterbug/releases/download/v1.3.1/jitterbugpair-win64.zip)

[MacOS](https://github.com/osy/Jitterbug/releases/download/v1.3.1/jitterbugpair-macos.zip)

[Linux](https://github.com/osy/Jitterbug/releases/download/v1.3.1/jitterbugpair-linux.zip)

Generic Pair Instructions:

1. Unzip the Jitterbugpair program zip file. 
2. Plug your idevice into the computer and the idevice needs to be on the home screen and execute the program. (Your idevice might get asked to trust this computer, just trust it as it can be part of pairing process.)
3. After pairing you get a file that ends with `.mobiledevicepairing`.
4. You can then transfer to your idevice via iTunes or other forms of transportation. Transferring via cloud storage might have inconsistencys with file name (most common is turning into .txt) so be wary of that. It is also possible to change the extension to `.plist` for support with older sidestore versions like (0.1.1).

Windows users might have to execute the program in the command prompt or powershell window as it can sometimes not open by double clicking the `.exe` program.

1. All you have to do is in file explorer go into the folder where the jitterbugpair folder is 
2. In the top bar where the file location is you click empty spot and type `powershell` and it should open a blue colored window called PowerShell. 
3. In there you just type `./jitterbugpair.exe` and click enter while your idevice is plugged in and the pairing process should begin!   


# Install via Altserver (recommend using SideServer)

Follow Pairing instructions and make sure you have what's in Generic install Instructions above before proceeding with these instructions. Make sure to have iCloud and iTunes from apples site not via the Microsoft store if on windows. If your on macOS get the mail plug-in for altserver.

1. Launch Altserver
2. Download SideStore ipa from https://sidestore.io
2. Sideloading ipa

(MacOS): Options/alt + click on altserver icon on menu bar on top and click "Sideload .ipa" and select SideStore ipa.
(Windows): Go to system tray and Shift + click altserver  and click "Sideload .ipa" and select SideStore ipa.

3. Login into sidestore on idevice and refresh sidestore before installing apps.
