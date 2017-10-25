# uclacec-mobileapp
UCLA CEC Mobile App. 

## Set-up your working environment (Mac)
1. Clone the this repository to your local machine
```git clone https://github.com/uclacec/uclacec-mobileapp.git ```
2. Install homebrew if you don't already have it
```/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```
3. Install node and watchman
```brew install node```
```brew install watchman```
4. Install React Native CLI
```npm install -g react-native-cli```
5. Install Xcode and install Command line tools
Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.
6. Navigate to uclacec-mobileapp
7. Initialize your react project
```react-native init UCLACECApp```
8. Run your project
```cd UCLACECApp```
```react-native run-ios``` or ```react-native run-android```
9. You should see your emulator pop up and display the app. You'll first see a screen that says UCLACECApp, but when it's done loading it should say "Welcome to React Native!"

~Daniel's instructions~

Cuz I was lazy, you need to do the following to run the app (assuming you've set up your mobile development environment):
 - Navigate to to UCLACECApp folder in terminal
 - If Android: 
   - Connect Android device to laptop/desktop or run Android emulator
   - run ```react-native run-android```
 - If iOS:
   - run ```react-native run-ios```

## Android Set-up
1. **Download and Install Android: https://developer.android.com/studio/index.html. Make sure the following are installed:**
   - Android SDK
   - Android SDK Platform
   - Performance (Intel ® HAXM)
   - Android Virtual Device
   - Java 
2. **Install the Android SDK** 

    Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 6.0 (Marshmallow) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

    The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".
    
    Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 6.0 (Marshmallow) entry, then make sure the following items are all checked:

    - Google APIs
    - Android SDK Platform 23
    - Intel x86 Atom_64 System Image
    - Google APIs Intel x86 Atom_64 System Image
    
    Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 23.0.1 is selected.
    
    Finally, click "Apply" to download and install the Android SDK and related build tools.
3. **Configure the ANDROID_HOME environment variable**
   
   The React Native tools require some environment variables to be set up in order to build apps with native code.

   Add the following lines to your $HOME/.bash_profile config file:

   - > export ANDROID_HOME=$HOME/Library/Android/sdk
   - > export PATH=$PATH:$ANDROID_HOME/tools
   - > export PATH=$PATH:$ANDROID_HOME/platform-tools
   .bash_profile is specific to bash. If you're using another shell, you will need to edit the appropriate shell-specific config file.
   
   Type source $HOME/.bash_profile to load the config into your current shell. Verify that ANDROID_HOME has been added to your path by running echo $PATH.

   > Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

## iOS Setup
1. **Install XCode (if you don't have this...smh.) **
2. **Command Line Tools **

   You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.
