# 🏎 SideJIT

AltJIT allows apps sideloaded with AltStore to enable just-in-time compilation, more commonly known as JIT. JIT allows some apps to run significantly faster — or even at all — but iOS does not normally allow apps to use JIT for security reasons. AltJIT is an AltStore-specific workaround that allows you to enable JIT for any sideloaded app whenever you're on the same WiFi as AltServer.

### Enable JIT

#### **AltStore**

1. Open the "My Apps" tab then long-press the app you want to use JIT.
2. Press "Enable JIT" to launch the app, and within a few seconds you should see an AltStore notification saying JIT has been enabled.

#### **AltServer**

1. First, make sure that the app you want to use JIT with is running in the foreground of your device.
2. Go to “Enable JIT” > \[Your Device], then choose an app you want to use with JIT.

{% hint style="info" %}
Once enabled, an app can continue using JIT until it is force-quit from the app switcher or purged from memory while suspended in the background.
{% endhint %}

If you're experiencing issues getting AltJIT to work, be sure to check out our troubleshooting guide.
