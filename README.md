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

## Git Convention
Useful tips for how to merge your changes to the repo. You should always be developing on your OWN BRANCH and not your local master branch. Your local master branch should be a copy of the remote master branch and it is good practice to keep it up to date. 

Say you have implemented a feature called coolbutton on your branch bob/coolbutton. It works perfectly on your branch and now you want to incorporate it into the remote master branch. Here are the following steps for a safe merge.
1. ```git checkout master``` //change to your local master branch
2. ```git pull``` //update your local master branch
3. ```git checkout bob/coolbutton``` //change back to your feature branch
4. ```git rebase master``` //copies your local master to your branch, then adds your feature branch changes on top
   Normally (especially if you've made a lot of changes), this step will not work perfectly and will result in merge conflicts. In this case, find all listed merge conflicts and fix them in your project. If there were no merge conflicts, proceed to step 8
5. ```git status``` //you should have new modified files if you fixed merge conflicts.
6. ```git add -A``` //adds all of your changes
7. ```git rebase --continue``` //hopefully, all of your conflicts have been resolved. if not, keep fixing them. RUN THE APP TO MAKE SURE EVERYTHING WORKS AS IT IS SUPPOSED TO!!!!! 
8. ```git push -f``` //by now, your changes should be successfully integrated with the changes on the remote master, and you should have a fully functioning version on your branch (bob/coolbutton). Note that you are still on your branch. WARNING: NEVER DO GIT PUSH -F ON A BRANCH THAT IS NOT YOUR OWN. it will override everything and do a force push.

Now, your remote branch should be up to date with everything you just did. On github, submit a pull request now to merge your changes to the remote master branch.
