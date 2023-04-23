---
layout: home
title: Create a burner Apple ID Account
nav_order: 4
---

# Using a burner Apple ID Account with SideStore
The recommended way to use SideStore is with a burner Apple ID Account (to avoid temporarily losing an important account to log-in's falsely flagged as malicious).

## Create an Apple ID account (iTunes methode) | Best

### Requirements

- Email address (must be a common one, like @gmail.com, not one from temp-mail.org).
- A computer to download and run [iTunes](https://www.apple.com/itunes/download/win64).

NOTE: This methode allows to setup a **2FA-less Apple account**. There are reports of 2FA codes not appearing via SMS when hosting SideServer on Linux, which can be resolved by logging into an iDevice with the given account.

#### Steps to create an Apple ID account
1. First, go into Account > Sign in:

![create account](https://user-images.githubusercontent.com/26381427/233845327-7d6e00f7-ddf7-449b-af93-c33cd32cd80d.png)

2. Fill in the email and password you wish to use (NOTE: use a @gmail.com or other common email! Others don't work!)

![image](https://user-images.githubusercontent.com/26381427/233845386-4daa2804-63dd-4b87-aa58-10abfb52cff9.png)

Continue until you have to fill in payment details.

3. Choose None as a payment option and fill in some random location details.

![choose no bill](https://user-images.githubusercontent.com/26381427/233845475-6e1d07df-db40-40a4-b4c9-6ad667da7e0c.png)

4. After verifying your email, you should see this screen, confirming that you have created a burner account.

![important conformation](https://user-images.githubusercontent.com/26381427/233845507-2174ec64-34f1-44bd-a6af-6e55f5ee6944.png)

### Installation
You can continue to use this account to sideload SideStore anyway you like, you don't need to follow the rest of this document.

## Create an Apple ID account (Online methode)

### Requirements

- Email address (must be a common one, like @gmail.com, not one from temp-mail.org).
- An iDevice to recive MFA prompts when installing ipa's.

#### Steps to create an Apple ID account

Go to the [Apple ID website](https://appleid.apple.com/account) to create a new account.

## Configure for use with SideStore

Log out of your existing Apple ID on your Apple device and log in using the newly created Apple ID Account.

### Signing in to SideServer/AltServer

If SideStore was not installed yet, follow the instructions that SideServer provides (You'll be asked to reauthenticate using a 2FA code. You'll be recieving it on the device you recieve SMS messages on or the device logged in to your burner Apple ID).

### Signing in to SideStore

It's as easy as just whipping out your Apple device with SideStore installed on it, and logging in! (You'll be asked to reauthenticate using a 2FA code. You'll be recieving it on the device you recieve SMS messages on or the device logged in to your burner Apple ID). When you're done logging in to SideStore, you can log your secondary device out of your burner Apple ID Account.
