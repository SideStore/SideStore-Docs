---
description: >-
  To distribute your apps with SideStore you need to first create a source,
  which is just a self-hosted JSON file containing basic metadata about your
  apps.
---

# 📑 Make a Source

## Example Source

{% file src="../.gitbook/assets/ExampleSource.json" %}
**We recommend reading the below instructions and editing this file with details for your source.**
{% endfile %}

## Instructions

### <mark style="color:purple;">Source</mark>

```json
{
  "name": "My Example Source",
  "identifier": "com.example.MyApps",
  "subtitle": "A source for all of my apps",
  "description": "Welcome to my source! Here you'll find all of my apps.",
  "iconURL": "https://example.com/source_icon.png",
  "headerURL": "https://example.com/source_header.png",
  "website": "https://example.com",
  "tintColor": "#F54F32",
  "featuredApps": [
    "com.example.myapp",
    "com.example.anotherapp"
  ],
  "apps": [],
  "news": [],
}
```

#### `name` <mark style="color:purple;">(string)</mark>

The name of your source as it will appear in AltStore.

#### `identifier` <mark style="color:purple;">(string)</mark>

A string that identifies your source and **must be unique**. AltStore uses this to distinguish sources from one another. To ensure your identifier is unique, we recommend using a reverse-DNS format (e.g. `com.example.MyApps`)

{% hint style="warning" %}
**You cannot change this identifier once you publish your source.** Doing so will cause the source to break for all existing users.
{% endhint %}

#### `subtitle` <mark style="color:purple;">(string)</mark>

_(optional)_

A short, one-sentence description of your source. This will appear underneath the source's name on its About page.

#### `description` <mark style="color:purple;">(string)</mark>

_(optional)_

A full-length description of your source. This can include any information you believe is relevant for your source, such as information about your apps or additional links.

#### `iconURL` <mark style="color:purple;">(string)</mark>

_(optional)_

A link to an image that will be used to visually identify your source. It will appear as a circle.

{% hint style="info" %}
If not provided, this defaults to the `iconURL` of the first app listed in your source.
{% endhint %}

#### `headerURL` <mark style="color:purple;">(string)</mark>

(optional)

A link to an image that will be displayed as the header of your source's About page. The image will be blurred by default, but can be viewed by swiping the source's info banner.

{% hint style="info" %}
We recommended using a **3:2** **aspect ratio** for best results.
{% endhint %}

{% hint style="info" %}
If not provided, this defaults to your source's `iconURL`.
{% endhint %}

#### `website` <mark style="color:purple;">(string)</mark>

_(optional)_

A link to the primary website for your source. It will be displayed underneath your source's name on its About page.

#### `tintColor` <mark style="color:purple;">(string)</mark>

_(optional)_

A color that will be used to theme your source's About page. We recommend using a color that works well with your source's icon for consistent theming, but you are free to choose any color you want. **Black and white tint colors will be automatically adjusted for legibility.**

{% hint style="info" %}
This must be in hexadecimal format (e.g **#F54F32** or **C9B632**)
{% endhint %}

{% hint style="info" %}
If not provided, this defaults to the `tintColor` of the first app listed in your source.
{% endhint %}

#### `featuredApps` <mark style="color:purple;">(array of strings)</mark>

_(optional)_

An ordered list of app `bundleIdentifier`'s you want featured on your source's About page. Currently, only the first five will be displayed.

{% hint style="info" %}
If not provided, this defaults to the first five apps listed in your source.
{% endhint %}

#### `apps` <mark style="color:purple;">(array of Apps)</mark>

An ordered list of the apps in your source.

See Apps section below for more.

#### `news` <mark style="color:purple;">(array of News Item)</mark>

A list of the News items in your source. The ordering does not matter because AltStore will display them in reverse chronological order according to their `date`.

See News Items section below for more.

###

### <mark style="color:purple;">Apps</mark>

```json
"apps": [
    {
        "name": "My Example App",
        "bundleIdentifier": "com.example.myapp",
        "developerName": "Example Developer",
        "subtitle": "An awesome app.",
        "localizedDescription": "This is an awesome app only available on AltStore.",
        "iconURL": "https://example.com/myapp_icon.png",
        "tintColor": "#F54F32",
        "screenshotURLs": [
            "https://example.com/myapp_screenshot1.png",
            "https://example.com/myapp_screenshot2.png",
            "https://example.com/myapp_screenshot3.png"
        ],
        "versions": [],
        "appPermissions": {},
    },
]
```

#### `name` <mark style="color:purple;">(string)</mark>

The name of your app as it will appear on its store page.

#### `bundleIdentifier` <mark style="color:purple;">(string)</mark>

Your app's bundle identifier (`CFBundleIdentifier`). It is **case sensitive** and should match exactly what is in your `Info.plist`.

{% hint style="warning" %}
A source cannot have multiple apps with the same bundle identifier.
{% endhint %}

#### `developerName` _<mark style="color:purple;">(string)</mark>_

The name of the developer or developers as it will appear on the store page.

#### `subtitle` <mark style="color:purple;">(string)</mark>

_(optional)_

A short, one-sentence description of your app that will appear in the Browse tab of AltStore.

#### `localizedDescription` <mark style="color:purple;">(string)</mark>

A full-length description of your app. This can include any information you believe is relevant for your app, such as feature descriptions or additional links.

#### `iconURL` <mark style="color:purple;">(string)</mark>

A link to you app's icon image. It will automatically be masked to an app icon shape.

#### `tintColor` <mark style="color:purple;">(string)</mark>

_(optional)_

The color used to theme your app's store page. We recommend using your app's existing tint color (if it has one), but you are free to choose any color you want.

{% hint style="info" %}
This must be in hexadecimal format (e.g **#F54F32** or **C9B632**)
{% endhint %}

#### `screenshotURLs` <mark style="color:purple;">(string array)</mark>

_(optional)_

Links to screenshots/images of your app. The first two will be displayed under the app listing in the browse tab, and the rest will be visible on the app's page. We recommend using screenshots that show the main features of your app.

{% hint style="info" %}
We recommended using images with **9:16** **aspect ratios** for best results. Other aspect ratios will be stretched to fill.
{% endhint %}

#### `versions` <mark style="color:purple;">(array of App Versions)</mark>

A list of all the published versions of your app.

{% hint style="warning" %}
**The order of versions matters**. AltStore uses the order to determine which version is the "latest" release. For more information, see Updating Apps
{% endhint %}

###

### <mark style="color:purple;">App Versions</mark>

```json
"versions": [
  {
    "version": "1.0",
    "date": "2023-03-30",
    "localizedDescription": "First AltStore release!",
    "downloadURL": "https://myapp.com/myapp-1.0.ipa",
    "size": 79821,
    "minOSVersion": "12.0",
    "maxOSVersion": "16.3"
  },
]
```

For information on how to update your apps once they're published, see Updating Apps.

#### `version` <mark style="color:purple;">(string)</mark>

Your app's version number (`CFBundleShortVersionString)`. It is **case sensitive** and should match exactly what is in your `Info.plist`.

#### `date` <mark style="color:purple;">(string)</mark>

The release date for this version.

{% hint style="info" %}
This should be in **ISO 8601** format (e.g. **2023-2-17** or **2023-02-17T12:00:00-06:00**)
{% endhint %}

#### `localizedDescription` <mark style="color:purple;">(string)</mark>

_(optional)_

A description of what's new in this version. You can use this to tell users about new features, bugs fixes, etc.

#### `downloadURL` <mark style="color:purple;">(string)</mark>

The URL where your `.ipa` is hosted.

#### `minOSVersion` <mark style="color:purple;">(string)</mark>

_(optional)_

The minimum iOS version supported by this release. AltStore will hide any updates that are not supported by the user's device.

#### `maxOSVersion` <mark style="color:purple;">(string)</mark>

_(optional)_

The maximum iOS version supported by this release **(inclusive)**. AltStore will hide any updates that are not supported by the user's device.

###

### <mark style="color:purple;">App Permissions</mark>

```json
"appPermissions": {
  "entitlements": [
    {
      "name": "com.apple.security.application-groups"
    },
    {
      "name": "com.apple.developer.siri"
    }
  ],
  "privacy": [
    {
    "name": "PhotoLibrary",
    "usageDescription": "App saves photos to your Photo Library."
    }
  ]
},
```

For security purposes, AltStore requires that sources list **all** entitlements and privacy permissions for every app. These will be checked against the downloaded .ipa, and AltStore will refuse to install any app whose permissions do not match.

**Entitlements**

A list of **all** entitlements the app has. Each entitlement should have the following keys:

#### `name` <mark style="color:purple;">(string)</mark>

The entitlement key (case-sensitive).

**Privacy**

A list of **all** `UsageDescription` entries in the app's Info.plist. Each permission should have the following keys:

#### `name` <mark style="color:purple;">(string)</mark>

The name of a `UsageDescription` key in the app's Info.plist. Specifically, the **case-sensitive** string between "NS" and "UsageDescription".

{% hint style="info" %}
e.g. For NSPhotoLibraryUsageDescription, use "PhotoLibrary"
{% endhint %}

#### `usageDescription` <mark style="color:purple;">(string)</mark>

An explanation for how or why the app uses this protected resource. We recommend using the same string that's already in your Info.plist.

### <mark style="color:purple;">News Items</mark>

```json
"news": [
  {
    "title": "New Feature Announcement",
    "identifier": "new_feature",
    "caption": "Introducing a new feature in AltStore!",
    "date": "2023-03-15",
    "tintColor": "#F54F32",
    "imageURL": "https://example.com/new_feature_image.png",
    "notify": true,
    "url": "https://example.com/new_feature_details",
    "appID": "com.example.myapp"
  },
]
```

#### `title` <mark style="color:purple;">(string)</mark>

The title of your News item.

#### `identifier` <mark style="color:purple;">(string)</mark>

A unique value to distinguish this News item from others in your source.

{% hint style="warning" %}
A source cannot have multiple News items with the same identifier.
{% endhint %}

#### `caption` <mark style="color:purple;">(string)</mark>

A short, one-sentence description of your News item.

#### `date` <mark style="color:purple;">(string)</mark>

The publishing date for this News item.

{% hint style="info" %}
This should be in **ISO 8601** format (e.g. **2023-2-17** or **2023-02-17T12:00:00-06:00**)
{% endhint %}

#### `tintColor` <mark style="color:purple;">(string)</mark>

_(optional)_

The background color for your News item.

{% hint style="info" %}
This must be in hexadecimal format (e.g **#F54F32** or **F65432**)
{% endhint %}

#### `imageURL` <mark style="color:purple;">(string)</mark>

_(optional)_

A link to the image you want featured with your News item.

{% hint style="info" %}
This will be scaled to fill a **67:40 aspect ratio**.
{% endhint %}

#### `notify` <mark style="color:purple;">(boolean)</mark>

_(optional)_

When `true`, AltStore will send a push notification about this News item when it next checks for updates in the background.

#### `url` <mark style="color:purple;">(string)</mark>

_(optional)_

A link that AltStore should open when the News item is tapped. Links will be opened in an in-app web browser.

#### `appID` <mark style="color:purple;">(string)</mark>

_(optional)_

The bundle identifier of an associated app. This will make the app's info banner appear below the News item, which will open the app's Store page when tapped.
