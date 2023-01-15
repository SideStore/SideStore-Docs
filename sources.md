# AltStore Sources

This document provides all the details that describe how to make your own AltStore Source. There are five important sections to read:

* Creating the JSON
* Releasing apps
* Updating apps
* Sending out news
* New features coming soon

So lets dive right in.

## Creating the JSON file

If you have never directly handled a JSON file, it stands for "JavaScript Object Notation" and you can learn more about if from the [official website](https://www.json.org/) and [documentation.](https://jsonapi.org/)

There are three basic properties that belong in the primary object, everything is required unless otherwise stated.

```json
{
  "name": "My Source",
  "identifier": "com.myname.mysource",
  "sourceURL": "https://mysource.com/apps.json",
```

**name**

This can be any valid string and can always be changed later if necessary.

**identifier**

This is a bundle identifier AltStore uses to keep your Source separate from every other source. For this reason, it is recommended to follow Apple's standard for an identifier \(it is demonstrated above\).

It's important to note here that changing this identifier down the road will have **consequences.** Users with the Source already installed will suddenly have conflicting identifiers with the online Source and will cause an error in AltStore that will require them to **completely remove** the Source before they can add it back.

**sourceURL** _\(optional\)_

If your user adds your Source using a URL shortener or you have the link to file stored on CDN, it is recommended that you include this property. This allows AltStore to save the exact link to the file which speeds up retrieval time.

## Releasing apps

```json
"apps": [
  {
    "name": "My App",
    "bundleIdentifier": "com.myname.myapp",
    "developerName": "My Name",
    "subtitle": "The newest and greatest app around.",
    "versions": [
      {
        "version": "1.1",
        "date": "2020-04-21",
        "localizedDescription": "Bug fixes.",
        "downloadURL": "https://myapp.com/myapp-1.1.ipa",
        "size": 87129
      },
      {
        "version": "1.0",
        "date": "2020-03-30",
        "localizedDescription": "First AltStore release!",
        "downloadURL": "https://myapp.com/myapp-1.0.ipa",
        "size": 79821
      }
    ],
    "localizedDescription": "Features include:\n\n• Cool graphics\n• Top notch performance\n• Satisfying interactions",
    "iconURL": "https://myapp.com/assets/icon.png",
    "tintColor": "8A28F7",
    "permissions": [
      {
        "type": "photos",
        "usageDescription": "Allows you to use your photo library to set your profile image."
      }
    ],
    "screenshotURLs": [
      "https://myapp.com/assets/screen0.png"
    ],
    "beta": false
  }
],
```

![Delta App Listing](https://github.com/noah978/AltStore-Docs/raw/master/assets/delta-app-listing.png)

**name**

Rather self-explanatory, this is the name of your app as it should appear in the AltStore.

**bundleIdentifier**

AltStore uses this to separate apps as individual listings.

This **must** be the same as your application's `"CFBundleIdentifier"` \(located in `info.plist`\) in order for AltStore to be able to open the app after installation. Technically, it can be any unique string, but for all AltStore functionality to work, it should be the same as the application.

**developerName**

Also self-explanatory, this is just the name of the developer/developers that will appear in the AltStore app listing.

**subtitle** _\(optional\)_

This should be a very short description of your app that will appear in the browse tab of AltStore. It should give a quick one sentence explanation of your app and why a user wants it. The most effective subtitles tend to around 6-10 words long.

**localizedDescription**

This is where you can include every feature and detail about your app. The user will see the first 5 lines of text then they can click "More" to expand to the full section. So you should think of the first couple sentences as a quick pitch for your app.

**iconURL**

This should point directly to wherever you host the icon for your app. Note that this doesn't have to be the same as the icon used for the actual application, but it is recommended to maintain consistency.

**tintColor** _\(optional\)_

This might take some experimentation, but the best tint color is usually choosing one of the darker colors represented in your app icon. The tint color will be used in two places:

* For the install button
* As a background color for the larger app listing bubble \(but this will be a lighter shade\)

The tint color must be in the 6 character Hex format, with the '#' before the 6 characters as optional.

**size**

This is an integer value that should be set equivalent to the size of your IPA in bytes. This gives the user an idea of how large the application is before they install.

**permissions** _\(optional\)_

This is to show the user what various permissions your app requires. Create an entry for each separate permission your app requires. The accepted permission `types` are the following:

* photos
* camera
* location
* contacts
* reminders
* music
* microphone
* speech-recognition
* background-audio
* background-fetch
* bluetooth
* network
* calendars
* faceid
* siri
* motion

Your `usageDescription` should explain what the permission is and why your app needs it.

It is _highly_ recommended to include these permissions if your app uses them as this disclosure provides additional trust with the user.

**screenshotURLs** _\(optional\)_

These should point directly to any number of screenshots/images that display your app's functionality. The first two will be displayed under the app listing in the browse tab, and the rest will be visible on the app's page.

**beta** _\(optional\)_

Here you can specify whether apps should be classified as a beta application and receive a special beta tag on its app listing.

Currently, this is also tied in with the Patreon app locking system used with AltStore/Delta betas. But it is not recommended to attempt to use it for this purpose since it will ultimately be changing in the future.

### **versions**

```json
{
  "version": "1.0",
  "date": "2020-03-30",
  "localizedDescription": "First AltStore release!",
  "downloadURL": "https://myapp.com/myapp-1.0.ipa",
  "size": 79821,
  "minOSVersion": "12.0",
  "maxOSVersion": "14.3"
}
```

A list containing the version(s) of your application. *New with AltSource v2.0 API.*

Important note: AltStore will display the first version (with compatible min/max iOS versions) in the list as the "latest" release, regardless of version or date. So keep in mind that the order that versions appear **must** be in reverse chronological order.

**version**

This **must** match your application's `"CFBundleShortVersionString"` \(located in `info.plist`\) in order for AltStore updates to work properly. More on this later in the **Updating apps** section.

**versionDate**

This should be the date that you are releasing your application, and should be written in the format `YYYY-MM-DD` (other formats standard formats will work as well, but this is the only info required and shown to the user).

If you are planning on releasing your application in the future, after everyone has installed your Source, there is an additional format available: `YYYY-MM-DDTHH:MM:SS`

Using this format will create an automatic timer countdown to the release time specified. Please note that the time is automatically assumed to be UTC and uses a 24 hour clock.

If you would rather use the time in your timezone, add `-08:00` to the end of the `versionDate`, where that -08 corresponds to the number of hours difference between UTC and your timezone. It is also important to note that UTC does not change with daylight saving time, so be careful if you are releasing around that time of year as it can be easy to miscalculate.

**localizedDescription** _\(optional\)_

Use this to tell the user what new features you introduced or what bugs you squashed with the latest version.

**downloadURL**

This should point directly to wherever your IPA is hosted.

If you are planning on releasing your app in the future, this property is still required but it doesn't have to actually point to a valid file.

**minOSVersion** and **maxOSVersion** _\(optional\)_

These are used to indicate the iOS version restrictions that your app may have (**inclusively**). It also allows you to support multiple different versions of your app that can support different iOS version ranges.

## Updating apps

AltStore will automatically notify users about updates to your app and will prompt them to install the update. This occurs specifically when the version number listed in the Source is higher than the currently installed version number.

The AltStore team recommends that you simply create another object in the `versions` list with the following properties changed to reflect the updated app:

* version
* date
* localizedDescription _\(optional\)_
* downloadURL
* size

And of course you can change any other property outside of the `versions` list if you would like to update the way your app appears in AltStore.

### Deprecated versions API

{% hint style="danger" %}
**IMPORTANT!** All the deprecated properties (excluding `versionDescription`) are still **required** for AltSources to be valid on both Beta and Stable versions of AltStore.
{% endhint %}

The following properties are still usable with the v1.0 API as properties of an app object, but are deprecated and subject to discontinuation as soon as March 2023 (final date to be announced).

* version
* versionDate
* versionDescription
* downloadURL
* size

If there is not a `versions` list in the AltSource app, these properties will be required instead and used by AltStore to display the release information.

## Sending out news

Please note that the "news" array is not required to be a valid AltStore Source.

```json
"news": [
  {
    "title": "My App Now Available!",
    "identifier": "my-app-available-download",
    "caption": "The app to beat all apps.",
    "date": "2020-04-21",
    "tintColor": "8A28F7",
    "imageURL": "https://myapp.com/assets/news.png",
    "url": "https://myapp.com",
    "appID": "com.myname.myapp",
    "notify": false
  }
]
```

![Delta News Item](https://github.com/noah978/AltStore-Docs/raw/master/assets/delta-news.png)

**title**

Fairly straightforward, this will be the headline for your news item.

**identifier**

This **must** be a unique identifier that should not be used by any other news items in AltStore.

**caption**

Similar to the caption for your app listing, this should be about a sentence. While there is technically no limit to the caption size, no one wants a giant text blob in their news feed. If there is more to your news than a couple sentences can deliver, try using an image or link to a website.

**date**

This date should follow the same format as the `versionDate` for app listings: `YYYY-MM-DD`.

Please note that the date does not currently display on any news items and neither does the time \(if provided\). Instead, it is required for AltStore to organize the news into chronological order.

**tintColor** _\(optional\)_

This has the same function as the `tintColor` for app listings. The only difference is that now it will be used as the background color for your news item. Keep in mind that it does not apply to the app listing if you supplied an `appID`. The app listing that appears below the news article will use the `tintColor` specific to that app.

**imageURL** _\(optional\)_

This should be a direct link to any image you want to feature on your news item. The recommended size for this image is 960x540 or any image with a 16:9 aspect ratio. AltStore will also take whatever image you provide it with, then crop and center it to the correct aspect ratio. Be careful not to put any important information in the corners since the AltStore rounds the images corners by default.

**url** _\(optional\)_

This should be used to link users to a website when they click the news item. The link will open in AltStore's built-in web browser \(based off safari\).

**appID** _\(optional\)_

This **must** be an exact match to the `bundleIdentifier` of the app listing in order for it to work properly.

This is required if you want an app listing to appear below the news item for quick installation.

It also makes it so that when a user click on the news item, it will take them to the specified app's page. This will be overridden if a `url` is also specified.

**notify** _\(optional\)_

When set to true, AltStore will send all users of the Source a notification with the `title` of the news item.

Note that the notification will not be instantaneous: it will occur whenever AltStore attempts a background refresh \(the same time that update notifications occur\) and it does require users to leave AltStore running in the background.

## New features on the horizon

Not entirely sure what these will look like and they are not set in stone yet. But these should give you any idea of what future features AltStore Sources might have.

### Patreon support

Included at the root of the AltSource:
```json
"userInfo": {
  "patreonAccessToken": "afjbsafasfvsjdgfjhkouohjkledjyrqwfgse"
}
```

Included within any app that is to be Patreon locked:
```json
{
  ...
  "name": "Example App",
  "patreon": true,
  ...
}
```


This will allow you to set certain apps to only be available to your Patrons. Other similar capabilities to this will available to specify in the `userInfo` section in future.

**⚠ Warning**: This is currently implemented in AltStore so that if a patreonAccessToken is provided, any apps with the ``"beta": true`` property will be hidden from users and no longer update/refresh unless the linked Patreon account in AltStore settings is subscribed to the account the token is associated with.

### Multi-device screenshot support

```json
"screenshotURLs": {
  "iphone-standard": [
    "https://myapp.com/assets/screen0-standard.png"
  ],
  "iphone-edgeToEdge": [
    "https://myapp.com/assets/screen0-edgetoedge.png"
  ],
  "ipad": [
    "https://myapp.com/assets/screen0-ipad.png"
  ]
},
```

This will allow you to specify the size of the images you are adding so that AltStore will display the correct screenshot sizes for the appropriate device. This will likely become the new standard as AltStore continues to expand to more devices and fully supports the iPad layout.

### App categorization

```json
"primaryCategory": "games",
"secondaryCategory": "lifestyle",
"primarySubcategories": [
  "action",
  "platformer"
],
"secondarySubcategories": [],
```

The primaryCategory and primarySubcategories will allow you to specify which category fits your app best and what other subcategories are appropriate as well (the same applies to the secondaryCategory). The full list of categories that Apple uses for its App Store can be [found here.](https://docs.fastlane.tools/actions/deliver/#reference) Ultimately, the goal is to allow users to filter apps by what categories interest them.

### Per App Age Rating / Content Warnings

```json
"age_rating": "seventeenPlus",
"contentWarnings": [
  "violenceCartoonOrFantasy",
  "sexualContentOrNudity",
  "substanceUse"
]
```
These can be useful for safe-guarding certain apps from users under the suggested age rating by filtering these apps according to the settings contained within AltStore.

## That's all there is!

If you want to see the full JSON example file that was used throughout this tutorial, [here it is.](https://github.com/noah978/AltStore-Docs/blob/master/apps.json)

Here are some good existing AltStore Sources: The [primary AltStore Source](https://apps.altstore.io), any of the Sources at [Quark Sources](https://quarksources.github.io), or the [DolphiniOS Source](https://altstore.oatmealdome.me/). I would highly recommend using this [AltStore Source Browser](https://altsource.by.lao.sb/browse/) to get a visual display of your Source outside of AltStore.

