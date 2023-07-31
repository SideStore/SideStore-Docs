---
layout: home
title: FAQ
nav_order: 6
---

# Table of Contents
1. [What is SideStore?](#paragraph1)
2. [Can I activate JIT?](#paragraph2)
3. [When will SideStore release?](#paragraph3)
4. [Can you sideload apps at the moment?](#paragraph4)
5. [Does this have AltStore beta features?](#paragraph5)
6. [Will having the VPN on drain my battery?](#paragraph6)
7. [Will the VPN track me?](#paragraph7)
8. [I cannot connect to the internet when the VPN is on!](#paragraph8)
9. [Updating SideStore hangs towards the end.](#paragraph9)
10. [Can I sign more than 3 apps to be active?](#paragraph10)
11. [I have a problem or bug or request for a feature or quality of life improvement.](#paragraph11)
12. [I am a developer, how does this affect me?](#paragraph12)
13. [Do I need to update my app to support this?](#paragraph13)
14. [As a user, I’m having trouble logging into SideStore. I get an error.](#paragraph14)
15. [Is SideStore going to have a Storefront?](#paragraph15)
16. [Why does my app have an update called "pacer test"?](#paragraph16)
17. [Why do my JIT based apps not automatically activate JIT?](#paragraph17)
18. [Does SideStore have an iPadOS UI?](#paragraph18)
19. [I saw an iMac or MacBook Pro get added to my account. Is it safe, and is it a real Mac?](#paragraph19)
20. [Why is my account getting locked when I use SideStore?](#paragraph20)
21. [Why do I get error -36607?](#paragraph21)
22. [Can I transfer my AltStore/Sideloady apps?](#paragraph22)
23. [Why do I need to refresh SideStore first thing after login?](#paragraph23)
24. [Can I do OTA updates?](#paragraph24)
25. [I want to test a SideStore version, and I want my data to stay when switching to a test version. Do I remove my app or sideload the test version via SideStore?](#paragraph25)
26. [My apps disappeared and I don't know what to do!](#paragraph26)
27. [I’m unable to select my pairing file with any file type.](#paragraph27)
28. [Cannot start DebugServer.](#paragraph28)

# FAQ
This is a list of frequenty asked questions for SideStore. This has a list of common questions we get with our development of SideStore, and some questions that might want to be answered for different types of people, or for people having problems.

### What is SideStore? <a name="paragraph1"></a>

SideStore is an iOS application that allows you to sideload apps onto your iOS device using only your Apple ID. SideStore resigns apps with your personal development certificate, and then uses a specially designed VPN in order to trick iOS into installing them. SideStore will periodically "refresh" your apps in the background, to keep their normal 7-day development period from expiring. SideStore's goal is to provide an untethered sideloading experience. It's a community driven fork of AltStore, and has already implemented some of the community's most-requested features. You only need a computer once during installation.

(Contributions are welcome! 🙂)

### Can I activate JIT? <a name="paragraph2"></a>

Yes! Currently via the SideStore app, under the "My Apps" tab, tap and hold on the app you wish to enable JIT for and tap "Enable JIT".

### When will SideStore release? <a name="paragraph3"></a>

SideStore will release soon, and include apps such Deltroid and Clippy in the SideStore Community Store.

### Can you sideload apps at the moment? <a name="paragraph4"></a>

Yes you can, just like AltStore!

### Does this have AltStore beta features? <a name="paragraph5"></a>

We do have AltStore beta features, but it isn't always latest. We try to keep up to date, or implement them in our own way if it's necessary.

### Will having the VPN on drain my battery? <a name="paragraph6"></a>

It does not, as it's only connecting to your own device. No remote servers are used, meaning no external connections, meaning no extra battery drain.

### Will the VPN track me? <a name="paragraph7"></a>

It does not, as there is no remote server used.

### I cannot connect to the internet when the VPN is on! <a name="paragraph8"></a>

Make sure you don't have an alternate DNS set up in your Wi-Fi and WireGuard configuration. If you know the DNS IP address works, then try removing it from your Wi-Fi configuration and adding it into the WireGuard config under DNS. 

### Updating SideStore hangs towards the end. <a name="paragraph9"></a>

Go to the homescreen for it to finish. We don't know why this happens, but it might have to do with using a VPN to direct `installd` to refresh SideStore (itself).

### Can I sign more than 3 apps to be active? <a name="paragraph10"></a>

No, as that’s an iOS and developer account limitation.

### I have a problem or bug or request for a feature or quality of life improvement. <a name="paragraph11"></a>

Please make a GitHub issue on our GitHub page to make a bug report or feature request (with appropriate labels)!

### I am a developer, how does this affect me? <a name="paragraph12"></a>

It doesn’t affect you directly, other than maybe an update to AltKit when/if we get our additions.

### Do I need to update my app to support this? <a name="paragraph13"></a>

Nope, as currently it acts like AltStore while signing.

### As a user, I’m having trouble logging into SideStore. I get an error. <a name="paragraph14"></a>

There is many reasons this can happen, but the most common issue is that we are using Sideloady as our default Anisette server, and they get login problems at times, but it's also one of the biggest servers so it’s well known. You can currently change the Anisette server on your device’s Settings app in SideStore under “Anisette URL”.

### Is SideStore going to have a Storefront? <a name="paragraph15"></a>

We currently have a Community Source! Source URL: https://community-apps.sidestore.io/sidecommunity.json

### Why does my app have an update called "pacer test"? <a name="paragraph16"></a>

This was a test update to see if there were problems between major versions, and shouldn’t be seen during normal use. If you see this issue and it’s after release, then reinstall SideStore or report it as a bug.

### Why do my JIT based apps not automatically activate JIT? <a name="paragraph17"></a>

We currently don’t have an automatic JIT activation method, and if we do you would need the SideStore VPN on.

### Does SideStore have an iPadOS UI? <a name="paragraph18"></a>

We sure do!

### I saw an iMac or MacBook Pro get added to my account. Is it safe, and is it a real Mac? <a name="paragraph19"></a>

These Macs are not real, and they are automatically generated by the Anisette server to assist with login. No private data is sent to the Anisette server either, as the data the server gives is used on SideStore only.

### Why is my account getting locked when I use SideStore? <a name="paragraph20"></a>

This can happen because the Anisette server used has too many accounts attached to the server's fake Mac. This is currently being investigated on how to solve the problem. We aren’t ones doing the locking, as that’s what Apple is doing. Changing Anisette servers solves this, and so does self hosting one for the moment. Unlocking your account is as easy as resetting the password for the account.

### Why do I get error -36607? <a name="paragraph21"></a>

This is a login issue with the Anisette server. There isn’t really much of any info about it other than changing Anisette servers sometimes helps, or you can keep trying to login until it does.

### Can I transfer my AltStore/Sideloady apps? <a name="paragraph22"></a>

Yes, just don’t remove the original app on your device. Go into SideStore and sideload the same or updated IPA, and it should be added to your list of apps within SideStore with your data still intact.

### Why do I need to refresh SideStore first thing after login? <a name="paragraph23"></a>

This is because AltServer or other programs sideload SideStore with their own app groupID, while we use our own. Refreshing SideStore changes it to ours, which makes apps disappear as their groupIDs are not updated. It’s best to not sideload anything before refreshing SideStore on a clean install if it's not installed via SideServer, which we recommend using anyway.

### Can I do OTA updates? <a name="paragraph24"></a>

Yep! Just click the update button!

### I want to test a SideStore version, and I want my data to stay when switching to a test version. Do I remove my app or sideload the test version via SideStore? <a name="paragraph25"></a>

You can sideload via SideStore and your data should be the same. We don’t have an enrollment toggle to go to other versions. We also cannot guarantee your data transfers when testing an unofficial or nightly build.

### My apps disappeared and I don't know what to do! <a name="paragraph26"></a>

Don't panic! Re-sideload the apps without removing them from your device, and your data should be fine. Unfortunately it's possible that your deactivated apps are gone, but to confirm that just refresh SideStore to see if they come back.

### I'm unable to select my pairing file with any file type. <a name="paragraph27"></a>

Apple's file system isn't exactly perfect, and sometimes it will just not allow you to select files from within apps. You can try moving the pairing file to the root directory of the SideStore folder in the Files app in "On My iPhone/iPad", and naming it `ALTPairingFile.mobiledevicepairing`. Note that it is case sensitive.

### Cannot start DebugServer <a name="paragraph28"></a>

There is times where the Debugserver doesnt work. However there are different fixes that can be done.

**Fix one: Manually install Developer disk image.**

Sometimes when out there in the world. you have slow Wi-Fi and that can interfere with the fast speed of sidestore and you might have to manually install a developer disk image. To do this you need to do.

1. Find your ios version or closest one and then Download and extract the zip file.

[Link to github](https://github.com/jawshoeadan/Xcode_Developer_Disk_Images/releases)

If you cannot find your dmg try checking ouf the list of dmg version for each ios. 

[List of DMG versions SideStore and JitStreamer uses.](https://github.com/jkcoxson/JitStreamer/blob/master/versions.json)

3. Rename the files inside to the current ios version you have. for example 16.6.dmg and 16.6.dmg.signature for ios 16.6.

4. Go to files and go to sidestore open or make folder called DMG.

5. Place the files in the DMG file.

**Fix Two: Make a new pairing file**

To start the process of using a new pairing file you go to settings tab and click Reset Pairing file and you accept the prompt. Then you just follow the [Pairing File instructions](https://wiki.sidestore.io/guides/install#pairing-file).
