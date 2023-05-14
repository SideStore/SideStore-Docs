---
layout: home
title: Create a burner Apple ID Account
nav_order: 4
---

# Using a burner Apple ID account with SideStore
The recommended way to use SideStore is with a burner Apple ID account. This avoids temporarily losing an important account due to logins falsely flagged as malicious.

## Create an Apple ID account using iTunes | No MFA

### Requirements

- Email address (must not be a temporary or non-common email).
- A computer to download and run [iTunes](https://www.apple.com/itunes/download/win64).

Please note that this method allows you to setup a **2FA-less Apple account**. There are reports of 2FA codes not appearing via SMS when hosting SideServer on Linux, which can be resolved by logging into an Apple device with the given account.

### Creating an Apple ID
1. In iTunes, click Account, then Sign in.
![create account](https://user-images.githubusercontent.com/26381427/233845327-7d6e00f7-ddf7-449b-af93-c33cd32cd80d.png)

2. Fill in the email and password you wish to use. Remember that non-common email addresses will not work.
![registration](https://user-images.githubusercontent.com/26381427/233845386-4daa2804-63dd-4b87-aa58-10abfb52cff9.png)
* Continue until you are asked to fill in payment details.

3. Choose "None" as a payment option, and fill in some random location details.
![choose no bill](https://user-images.githubusercontent.com/26381427/233845475-6e1d07df-db40-40a4-b4c9-6ad667da7e0c.png)

4. After verifying your email, you should see this screen, confirming that you have created a burner account.
![important conformation](https://user-images.githubusercontent.com/26381427/233845507-2174ec64-34f1-44bd-a6af-6e55f5ee6944.png)

You can continue to use this account to sideload SideStore anyway you like, you do not need to follow the rest of this page.

## Create an Apple ID account using your device | No Email

### Requirements

- An Apple device to create the account and receive MFA prompts when installing IPA files.
- A phone number.

### Creating an Apple ID

1. Open Settings on your device, and go into either Calendar or Mail, then tap on Accounts.
* If you don't see either one, install the associated system app from the App Store.
![235302406-b68d47e6-4060-4ca7-9760-c6b1b52fa3c6](https://user-images.githubusercontent.com/26381427/235302819-cb1ed077-a953-4267-a1ce-711a7e15a31a.png)

2. Tap on New account.
![20230429_120131000_iOS](https://user-images.githubusercontent.com/26381427/235302454-3793f11e-b3b9-432f-b67b-8871e4a3dc75.png)

3. Choose "Create new Apple ID".
![20230429_120154000_iOS](https://user-images.githubusercontent.com/26381427/235302471-61aae593-8623-4490-9fef-c4abba2697d9.png)

4. Add a first and last name, and enter a date older then 18 years.
![20230429_120218000_iOS](https://user-images.githubusercontent.com/26381427/235302503-bfee3f63-4537-4d5c-b199-78cef1b616e6.png)

5. Choose the option to create a new iCloud email, you don't need to create a Gmail account for this method.
![20230429_120328000_iOS](https://user-images.githubusercontent.com/26381427/235302540-b95168b4-a513-4fdc-b530-b701e594e3ea.png)

6. Fill in the Email of your choosing.
![20230429_120343000_iOS](https://user-images.githubusercontent.com/26381427/235302557-92580d73-82bb-4819-852e-70b1aa474d47.png)

7. Agree to the prompt to create this iCloud email.
![20230429_120348000_iOS](https://user-images.githubusercontent.com/26381427/235302571-83ad2add-8027-4ec9-88cd-3c7b8c4b095f.png)

8. Create a password.
![20230429_120418000_iOS](https://user-images.githubusercontent.com/26381427/235302587-15704a70-ef13-43dd-becb-4e32b3015ea2.png)

9. Enter in a phone number if it asks.
![20230429_120608000_iOS](https://user-images.githubusercontent.com/26381427/235302632-738d71e2-7a8b-4962-bd40-b54d8040b597.png)

You can continue to use this account to sideload SideStore anyway you like, you do not need to follow the rest of this page.

## Create an Apple ID account (Online Method) | Not Recommended

### Requirements

- An email address
- A phone number
- An Apple device

### Creating an Apple ID

1. Go to the [Apple ID website](https://appleid.apple.com/account) to create a new account.

2. Go through the steps as prompted. Log in with your new Apple account on your device to receive MFA prompts!

## Configuring your Apple ID for use with SideStore

Log out of your existing Apple ID on your Apple device and log in using the newly created Apple ID account. During this process, you'll be asked to reauthenticate using a 2FA code, if 2FA is set. You'll be receiving it on the device you receive SMS messages on, or the Apple device logged in to your burner Apple ID.

### Signing in to SideServer or AltServer

If SideStore was not installed yet, follow the instructions that SideServer provides. 

### Signing in to SideStore

Simply open SideStore and log in! When you're done logging in to SideStore, you can log your device out of your burner Apple ID account.
