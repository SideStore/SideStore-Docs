---
layout: home
title: FAQ
nav_order: 6
---

# Table of contents of FAQ
1. [What is sidestore?](#paragraph1)
2. [Can I activate jit?](#paragraph2)
3. [When will SideStore release?](#paragraph3)
4. [Can you sideload apps at the moment?](#paragraph4)
5. [Does this have AltStore beta features?](#paragraph5)
6. [Does having the vpn on drain battery?](#paragraph6)
7. [Will the vpn track me?](#paragraph7)
8. [When vpn is on I cannot connect to the internet!](#paragraph8)
9. [Updating sidestore hangs towards end.](#paragraph9)
10. [Can I sign more than 3 apps to be active?](#paragraph10)
11. [I have a problem or bug or request for a feature or quality of life improvement.](#paragraph11)
12. [I am a developer, how does this affect me?](#paragraph12)
13. [Do I need to update my app to support this?](#paragraph13)
14. [As a user I’m having trouble logging into sidestore I get a error.](#paragraph14)
15. [Is Sidestore going to have a Storefront?](#paragraph15)
16. [Why does my app have an update called pacer test?](#paragraph16)
17. [Why does my jit based apps not automatically activate jit?](#paragraph17)
18. [Does sidestore have an iPadOS ui?](#paragraph18)
19. [I see a iMac or MacBook Pro in my account get added. Is it safe and is it a real Mac?](#paragraph19)
20. [Why is my account getting locked when I use sidestore?](#paragraph20)
21. [Why do I get -36607?](#paragraph21)
22. [Can I transfer my AltStore/sideloady apps?](#paragraph22)
23. [Why do I need to refresh SideStore first thing I install it after login?](#paragraph23)
24. [Can I do OTA updates?](#paragraph24)
25. [I want to test a SideStore version and I want my data to stay when going to a test version. Do I remove my app or sideload the test version via SideStore?](#paragraph25)
26. [My apps disappeared and I don't know what to do!](#paragraph26)
27. [Unable to Select my pairing file.](#paragraph27)

# FAQ
This is an FAQ for SideStore. Has a list of common questions we get with our development of sidestore and some questions that might want to be answered for different types of people or people having problems.

### What is sidestore? <a name="paragraph1"></a>

SideStore is an iOS application that allows you to sideload apps onto your iOS device with just your Apple ID. SideStore resigns apps with your personal development certificate, and then uses a specially designed VPN in order to trick iOS into installing them. SideStore will periodically "refresh" your apps in the background, to keep their normal 7-day development period from expiring. SideStore's goal is to provide an untethered sideloading experience. It's a community driven fork of AltStore, and has already implemented some of the community's most-requested features. You only need a computer once during install.

(Contributions are welcome! 🙂)

### Can I activate jit? <a name="paragraph2"></a>

Yes currently via the app at the moment by holding on the app in `My Apps` tab and click enable jit

### When will SideStore release? <a name="paragraph3"></a>

ETA soon including apps called Deltroid and Clippy in the SideStore Community store.

### Can you sideload apps at the moment? <a name="paragraph4"></a>

Yes you can just like AltStore!

### Does this have AltStore beta features? <a name="paragraph5"></a>

We have AltStore beta features but isn't always latest but we try to keep up to date or do our own way or spin or if it's necessary.

### Does having the vpn on drain battery? <a name="paragraph6"></a>

It does not as it's only connecting to your device. No remote server just itself and all that goes through it is sidestore lan traffic.

### Will the vpn track me? <a name="paragraph7"></a>

No, because there is no remote server used and we wouldn't do that.

### When vpn is on I cannot connect to the internet! <a name="paragraph8"></a>

Make sure you don't have a alternate DNS setup in your WiFi and wireguard config. If you know the DNS ip works then try removing it from your WiFi and adding it into the Wireguaed config under dns. 

### Updating sidestore hangs towards end. <a name="paragraph9"></a>

Go to the homescreen for it to finish. We don't know why this happens but might have to do with using a vpn to direct installd to refresh sidestore (itself).

### Can I sign more than 3 apps to be active? <a name="paragraph10"></a>

No as that’s a iOS and developer account limitation.

### I have a problem or bug or request for a feature or quality of life improvement. <a name="paragraph11"></a>

Make a GitHub issue on our GitHub page to make a bug report or feature request (with appropriate labels)

### I am a developer, how does this affect me? <a name="paragraph12"></a>

It doesn’t affect you directly other than maybe an update to altkit when/if we get our additions.

### Do I need to update my app to support this? <a name="paragraph13"></a>

Nope as currently it is like AltStore while signing.

### As a user I’m having trouble logging into sidestore I get a error. <a name="paragraph14"></a>

There is many reasons this can happen but the most common thing is that we are using sideloady as our default anissete server and they get login problems at times but is also one of the biggest servers so it’s well known. You can currently change annisete on your idevice’s settings app in sidestore under “Anisette URL”.

### Is Sidestore going to have a Storefront? <a name="paragraph15"></a>

We currently have Community store! SourceURL: https://community-apps.sidestore.io/sidecommunity.json

### Why does my app have an update called pacer test? <a name="paragraph16"></a>

This is a test update to see if there is problems between major version and shouldn’t be seen in normal use. If you see this issue and it’s after release then reinstall sidestore or report it as a bug.

### Why does my jit based apps not automatically activate jit? <a name="paragraph17"></a>

We currently don’t have a automatic jit activation method and if we do you would need the sidestore vpn on.

### Does sidestore have an iPadOS ui? <a name="paragraph18"></a>

We sure do!

### I see a iMac or MacBook Pro in my account get added. Is it safe and is it a real Mac? <a name="paragraph19"></a>

These macs aren’t real and they are generated to assist with login. No private data is sent to the server either as the data the server gives is used on sidestore not given.

### Why is my account getting locked when I use sidestore? <a name="paragraph20"></a>

It’s because the anisette server you use has too many accounts attached to the server's fake mac. This is currently being investigated on how to solve the problem. We aren’t ones doing the locking as that’s what apple is doing. Changing anisette servers solves this and even self hosting one for the moment. Unlocking account is easy as resetting password for the account.

### Why do I get -36607? <a name="paragraph21"></a>

This is a login issue using a anisette server. There isn’t really much of any info about it other than changing anisette servers sometimes helps or keep trying to login until it does.

### Can I transfer my AltStore/sideloady apps? <a name="paragraph22"></a>

Yes, just don’t remove the original app on your idevice and just go into SideStore and sideload the same ipa or even a updated one and it should be added to your list of apps in SideStore with you data still intact.

### Why do I need to refresh SideStore first thing I install it after login? <a name="paragraph23"></a>

This is because using Altserver or other programs, sideloads SideStore with their app groupID which we use our own. Refreshing SideStore changes it to ours and this so happens to makes apps disappear so it’s best to not sideload before refreshing SideStore on a clean install if it's not installed via SideServer which we recommend using.

### Can I do OTA updates? <a name="paragraph24"></a>

Yep just click update button!

### I want to test a SideStore version and I want my data to stay when going to a test version. Do I remove my app or sideload the test version via SideStore? <a name="paragraph25"></a>

You can sideload via SideStore and data should be same. We don’t have an enrollment toggle to make this easy on the app to go to other versions. We cannot guarantee it transfers as they are testing a unofficial or nightly build.

### My apps disappeared and I don't know what to do! <a name="paragraph26"></a>

Don't panic just resideload the apps without removing them from your device and the data should be fine. But unfortunately it's possible the deactivated ones are gone but to confirm that just refresh sidestore to see if they come back.

### Unable to Select my pairing file. <a name="paragraph27"></a>

Apples file app system isn't exactly perfect and sometimes it will just not allow you to select files from apps. You can try moving the pairing file and having it named `ALTPairingFile.mobiledevicepairing`.
