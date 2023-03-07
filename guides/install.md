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

You must enable "Developer Mode" in your iOS security settings on iOS 16+. Additionally, you must *Trust* your personal developer certificate after installing with your Apple ID.

**You will need the Wireguard VPN app and use the Wireguard config provided and share it to the wireguard app.**

Downloads are at https://sidestore.io

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

# Pairing Process

Using Jitterbugpair (not the Jitterbug app) allows us to create a pairing file for programs, like sidestore to talk to your device and is required to use sidestore or it will not function (Windows requires iTunes). If you have SideServer for MacOS,Windows,Linux,etc. This doesnt apply to you as SideServer automatically pairs during the installation process.

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

## Install via AltServer (Windows/Mac)

Currently SideStore isn't available for Windows, so you have to use AltServer to install SideStore on your device, if you have a Windows computer. You can also use these steps if SideServer isn't working on Mac. Preceeding these steps, make sure you have everything in the generic install requirements, and make sure you've generated a pairing file following the above steps. If you are on a Windows PC, make sure to have iCloud and iTunes from Apple's site (NOT from the Microsoft Store).

1. Download AltServer via <https://AltStore.io>
2. Launch AltServer
   * If on MacOS, you will need to setup the Mail Plugin for AltServer to work. Follow the instructions in AltServer's window.
3. Download the SideStore IPA from <https://sidestore.io>
4. Sideload the SideStore IPA
   * (MacOS): Options/alt + click on altserver icon on menu bar on top and click "Sideload .ipa" and select the SideStore IPA file.
   * (Windows): Go to system tray and hold Shift then click on the AltServer tray icon, then in the menu click "Sideload .ipa" and select the SideStore IPA file.
5. Login into SideStore on your iDevice, setup WireGuard and refresh SideStore before installing apps.

1. All you have to do is in file explorer go into the folder where the jitterbugpair folder is 
2. In the top bar where the file location is you click empty spot and type `powershell` and it should open a blue colored window called PowerShell. 
3. In there you just type `./jitterbugpair.exe` and click enter while your idevice is plugged in and the pairing process should begin!   

## Install via AltServer (Linux)

To install SideStore (or any other IPA) on Linux, make sure you have the following installed:

* Docker
* Docker-Compose

1. Download the Docker-Compose file locally.

```bash
wget https://raw.githubusercontent.com/Macleykun/Altcon/main/docker-compose.yml
```

2. Run the docker-compose file.

```bash
docker-compose run --rm altcon
```

Anisette will be setup for you, use the IP of the host with port 6969 as your custom Anisette server for SideStore.

Altcon will start to pair with your device, plug it in if you haven't. Press trust and enter your pin.

3. Install SideStore using the Apple account of your choice.

```bash
./AltServer -u thiswillbeyourUUID -a myemail@mail.com -p myapplepass SideStore.ipa
```

Once you've installed SideStore on your idevce, do CRTL + D or type exit.

Anisette will continue to run in the background, Altcon not.
