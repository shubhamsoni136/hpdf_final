# Stripe - Charge-Card

This demo features a sample charge card using Stripe API. This app is currently running on test mode
### Features:

1. App basically provides a window to enter card details and amount at the client side.
2. Carrying out the transaction and displays the response 

This app is built on top of the folllowing API
* https://stripe.com/docs/api
* Server endpoint : https://app.backpedal70.hasura-app.io/charge 

## Backend
Find the back end code at [https://github.com/kmajeshkrishnan/Stripe-Demo](https://github.com/kmajeshkrishnan/Stripe-Demo)

#### Payment Flow


<p align="center">
  <img width="280" height="500" src="https://github.com/MurariTiwari/hpdf-groupTask/blob/master/StripeDemo/src/1.jpg">
  <img width="280" height="500" src="https://github.com/MurariTiwari/hpdf-groupTask/blob/master/StripeDemo/src/2.jpg">
  <img width="280" height="500" src="https://github.com/MurariTiwari/hpdf-groupTask/blob/master/StripeDemo/src/3.jpg">
</p>

#### For testing give card number 4242424242424242
### Requirements

- [Node](https://nodejs.org) 4.x or better
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development (optional)
- [Android SDK](https://developer.android.com/sdk/) for Android development (optional)
- Stripe account to accept payments ([sign up](https://dashboard.stripe.com/register) for free).

### Installation

#### Download Expo for your device
Download [Expo for Android on the Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) or for [iOS on the App Store](https://itunes.apple.com/app/apple-store/id982107779?mt=8).

#### scan the qrcode to run the app live on your device
![QR-Code](https://github.com/MurariTiwari/hpdf-groupTask/blob/master/StripeDemo/src/qr.png)
#### You can also request a link from [here](https://expo.io/@kmajeshkrishnan/StripeDemoExpo)

#  [OR] 

Clone repository:
```sh
https://github.com/MurariTiwari/hpdf-groupTask.git
```
Navigate to react-native directory:
```sh
cd hpdf-groupTask/StripeDemo/
```
After run:
```sh
npm install
```
### Running
Run from terminal after connecting an android device.
For Android,
```sh
react-native run-android
```
For ios,
```sh
react-native run-ios
```
#### or
Open `ios/StripeDemo.xcodeproj` in Xcode, build and run the project (⌘+R).
