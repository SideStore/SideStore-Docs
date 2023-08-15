---
layout: home
title: Installation
nav_order: 2
---

# Installation

The process of installing SideStore onto your device requires the **one time use** of a computer. Following the initial installation, SideStore can be indefinitely refreshed without the use of a local computer.

## Install Requirements

* Personal Computer running Windows, macOS, or Linux
* Apple device running iOS or iPadOS 14+
* Apple ID
* [WireGuard](https://apps.apple.com/us/app/wireguard/id1441195209) installed on your Apple device.

A separate "burner" Apple ID is recommended when using Anisette servers created by others. An issue that only happens on servers that use older methods of hosting an anisette server have a locking account issue, locking accounts is just a forced password reset and **its not forever**. To see more about [creating your own Anisette server.](/guides/custom-anisette)

If you are running iOS or iPadOS 16 or higher, you must enable Developer Mode.

1. Open Settings
2. Tap "Privacy & Security"
3. Scroll to the bottom, and toggle Developer Mode on.

<!--
With SideStore downloader installed (and it's requirements met), simply connect your iOS device physically to your internet enabled PC. Then using the SideStore downloader, enter your Apple ID credentials (read more about creating a "burner" Apple ID to prevent lockouts) and wait until SideStore is installed on your iOS device homescreen.

You must then enable "Developer Mode" in your iOS security settings. Additionally, you must *Trust* your personal developer certificate.

Finally, open the SideStore app on your homescreen, re-enter the Apple ID credentials used previously, and refresh to ensure that everything is working correctly.

-->

## Setting up WireGuard

Regardless of which installation method you use, you will have to set up WireGuard, as SideStore relies on it for operation.

1. If you have not already, download [WireGuard](https://apps.apple.com/us/app/wireguard/id1441195209) to your device.
2. Download the WireGuard [config file](https://github.com/SideStore/SideStore/releases/download/0.3.1/SideStore.conf) to your device.
3. Open the WireGuard app, and tap on "Add a tunnel", or the `+` in the top right.
4. Tap "Create from file or archive", then select the `SideStore.conf` file you downloaded.
5. If iOS asks you to allow WireGuard to add VPN configurations, tap Allow.
6. Toggle the switch for the newly added SideStore to on.

If your iOS device restarts, you will have to toggle SideStore's VPN on again.

# Install via SideServer (Mac)

Currently, this method is only available for macOS. To install via Windows, or if this method is not working, see the next section. Before you start, make sure to [setup WireGuard](#Setting-up-WireGuard) and is within the [install requirements](#Install-Requirements)!

1. Download and install SideServer for [macOS](https://github.com/SideStore/SideServer-macOS/releases/latest/download/SideServer.dmg).

* The Windows version is still in development.

2. Plug your device into your computer, or connect it via Wi-Fi. 

* If you enabled Sync over Wi-Fi in Finder or iTunes, it should already be connected.

3.  Launch SideServer, and select "Install SideStore" from the SideServer icon in the menu bar or System Tray.

4. Follow the instructions until SideServer confirms that SideStore was installed.

5. Approve the "Developer App" with your Apple ID's email.

* You can find this in Settings, under "General", and then "VPN & Device Management".

6. Open SideStore and sign in with your Apple ID. When you finish, then follow the [finishing instructions](#Finishing-up). Enjoy!

# Install via AltServer (Windows/Mac)

Please note that if you use this method, you will have to generate a [pairing file](#pairing-file) yourself. As well, make sure that the non-Microsoft Store versions of [iCloud](https://updates.cdn-apple.com/2020/windows/001-39935-20200911-1A70AA56-F448-11EA-8CC0-99D41950005E/iCloudSetup.exe) and [iTunes](https://support.apple.com/en-us/HT210384) are installed, if you are running Windows. Before you start, make sure to [setup WireGuard](#Setting-up-WireGuard) and is within the [install requirements](#Install-Requirements)!

The non-Microsoft Store version of iCloud was removed from Apple's website sometime in mid-September, 2022. The above link directs to an older version of iCloud that is still compatible, and still available directly from Apple's servers.

1. Download and run AltServer from [AltStore's website](https://AltStore.io).
   * If you are on macOS, you will need to setup the Mail Plugin for AltServer to work. Follow the instructions that AltServer provides.
3. Download the SideStore IPA from [our website](https://sidestore.io).
4. Sideload the SideStore IPA.
   * On macOS, hold option/alt and click on the AltServer menu bar icon. Click "Sideload .ipa", and select the SideStore IPA file.
   * On Windows, hold shift and click on the AltServer tray icon. Click "Sideload .ipa", and select the SideStore IPA file.
5. Approve the "Developer App" with your Apple ID's email.

* You can find this in Settings, under "General", and then "VPN & Device Management".

6. Open SideStore, select your pairing file, and sign in with your Apple ID. When you finish, then follow the [finishing instructions](#Finishing-up).

# Install via AltServer (Linux)

To install SideStore (or any other IPA) on Linux, make sure you have docker installed. Before you start, make sure to [setup WireGuard](#Setting-up-WireGuard) and is within the [install requirements](#Install-Requirements)!

1. Run altcon

```bash
docker run --rm -it -e ALTSERVER_ANISETTE_SERVER="https://ani.sidestore.io/" -v ${PWD}/:/mnt/ -v /var/run:/var/run ghcr.io/sidestore/altcon
```

* Altcon will start to pair with your device, plug it in if you haven't. Press "trust" and enter your passcode.

2. Install SideStore using the Apple ID of your choice.

```bash
./AltServer -u thiswillbeyourUUID -a myemail@mail.com -p myapplepass SideStore.ipa
```

Once you have installed SideStore on your device, press CTRL+D, or type `exit`.

* In your current directory, you'll find a *.mobiledevicepairing file. You can use that to complete the installation of the SideStore app on your device.

# Pairing File

Using Jitterbugpair (*not* the Jitterbug app) allows us to create a pairing file for programs like SideStore to talk to your device. This is required to use SideStore, or it will not function. If you have used SideServer, these instructions do not apply to you, as SideServer automatically creates a pairing file for you during the installation process.

Download Jitterbugpair for [Windows (64-bit)](https://github.com/osy/Jitterbug/releases/download/v1.3.1/jitterbugpair-win64.zip), [macOS](https://github.com/osy/Jitterbug/releases/download/v1.3.1/jitterbugpair-macos.zip), or [Linux](https://github.com/osy/Jitterbug/releases/download/v1.3.1/jitterbugpair-linux.zip).

## Pairing Instructions:

1. Extract the Jitterbugpair zip file.
2. Plug your device into your computer, and open your device to its home screen. Once done, execute the program.

* Your device may ask you to trust your computer. Make sure to accept this prompt, as it is required for the pairing process.

3. Once it is done, you will get a file that ends with `.mobiledevicepairing`.
4. Transfer this file to your device using iTunes, or any other method.

* Transferring using cloud storage may change the file's extension (most likely turning into a .txt file), so be careful. It is also possible to change the extension to `.plist` for use with older SideStore versions, like `0.1.1`.

On Windows, you might have to execute the program using Command Prompt or Powershell, as it can sometimes not open by double clicking the `.exe` file.

1. In File Explorer, navigate to the folder where jitterbugpair is located.
2. In the navigation bar where the folder location is, click an empty spot and type `powershell`. It should open a blue colored window called PowerShell.
3. From there, type `./jitterbugpair.exe` and press enter while your device is plugged in.

## Finishing up

The last step to installing SideStore is to refresh SideStore, within itself.

To do this, you need to:

* Connect to the WireGuard VPN.
* Open SideStore.
* If you haven't already, select the pairing file.
* Go to "My Apps".
* Select the "x DAYS" button, where x is the number of days until expire.
  * If successful, this will open a blank Safari tab or go to your home screen. You will get a notification also telling you to do this.

If SideStore is not refreshed, a bug causing early expiry will require you to reinstall SideStore. There is a plan to have this done automatically, but for now it needs to be done manually.
