## OPEN DOCS:
The open source project I used for this task is 'Spicetify-themes'.
This repo is a part of the entire 'spicetify' project whose documentation will be given below with the 'spicetify-themes'.

I have been using spicetify since a long time and documenting this was a very fun task for me as I personally know how amazing this project is.

## SPICETIFY DOCUMENTATION:

## Overview

Spicetify is a multiplatform command-line tool to customize the official Spotify client. Spicetify is a powerful customization tool designed to modify the user interface and functionality of the Spotify desktop client. It allows users to apply custom themes, install extensions, and tweak various aspects of Spotify's look and feel. Below is a breakdown of Spicetify’s key features and usage instructions.

## Advanced Usage
A guide about advanced usage of Spicetify and venturing outside of the Spicetify Marketplace.

📄️ Installation
⚡ An advanced view on how to install Spicetify.

📄️ Uninstallation
🗑 How to remove Spicetify.

📄️ Command Line Interface (CLI)
👾 Using Spicetify from the command line.

📄️ Themes
✨ Themes for Spicetify.

📄️ Extensions
🧩 Manually installing Extensions.

📄️ Custom Apps
💥 Manually installing Custom Apps.


## Features: 

```1. Custom Themes:``` Spicetify allows users to install and apply custom themes that modify the visual design of Spotify's interface. Themes can change colors, layout, typography, icons, and more.
Predefined Themes are also available such as "Dribbblish," "Sleek," and "Nord Dark," each offering a unique style. They can also modify css files according their preference and also download from community from github.

```3. Extensions:``` Spicetify supports custom JavaScript extensions that add extra functionality to the Spotify client. Extensions can be used to modify behavior, add new buttons, or change how content is displayed. Some extensions allow advanced filtering, automatic playlist creation, or media controls that improve user experience. Spicetify allows multiple extensions to run at the same time, offering extensive customizations.

```4. Sidebar Customization:``` Spicetify provides options to hide, move, or customize elements on Spotify's sidebar and customise icons based on your theme.

```5. Color Schemes:``` Spicetify allows you to easily change Spotify’s color scheme. You can customize the background, highlight colors, button colors, and more.

```6. Backup and Restore:``` Before applying changes, Spicetify automatically backs up the original Spotify client files, so you can restore them at any time if users want to revert to Spotify’s default look and feel.

```7. User Script Injection:``` Spicetify allows users to inject custom JavaScript into Spotify, enabling modifications of client-side behavior.

```8. Auto Apply Changes:``` Spicetify can automatically apply changes when files are modified, making it easy to iterate on theme development.

## PRE-REQUISITES:

-These themes require that you have the latest version of Spotify and Spicetify.
-To install Dribbblish and Turntable themes, follow the instructions in their READMEs.
-Spotify ad-blocked version is not supported.


Linux (for spicetify-cli)

Spicetify CLI

``` bash
curl -fsSL https://raw.githubusercontent.com/spicetify/cli/main/install.sh | sh
```

Spicetify Marketplace ( additional )
``` bash
curl -fsSL https://raw.githubusercontent.com/spicetify/marketplace/main/resources/install.sh | sh
```

After installing Spicetify, run the following commands to configure Spotify:
```bash
spicetify backup apply
```

## Basic Usage
After installing Spicetify and Spicetify's Marketplace, you can use it to customize your Spotify client using all the available extensions and themes found in the Marketplace.

## Updating
Spotify, every now and then, updates its client, hence you will likely need to re-apply Spicetify.

However, the update might have major changes to the client, which means you will need to run spicetify update (spicetify upgrade in Spicetify versions below 2.27.0) every time you update Spotify. If no update for Spicetify is available, it means that it either still works by simply running spicetify backup apply, or that we are still working on updating Spicetify to work on the new version.


## Spotify Installation:

Spotify can be installed in the below given ways:
1. Flatpak (not used)
2. Spotify installed from AUR (not used)
3. Spotify installed via spotify-launcher package (Arch Linux).(not used)
4. Spotify installed from Snap ( instructions below )

## SPOTIFY INSTALLED BY SNAP:

Apps installed from Snap cannot be modified so you need to follow these steps to get Spicetify working:

Install Spotify using apt:
``` bash
curl -sS https://download.spotify.com/debian/pubkey_6224F9941A8AA6D1.gpg | sudo gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/spotify.gpg
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt-get update && sudo apt-get install spotify-client
```

After Spotify is installed successfully, you need to gain read write permissions on Spotify files, by running commands:
```bash
sudo chmod a+wr /usr/share/spotify
sudo chmod a+wr /usr/share/spotify/Apps -R
```

Note: 
1. Your Spotify client location might be different.
2. Command Line Interface (CLI): To know more about this, check the spicetify-cli documentation.
   

## NOW THAT WE HAVE INSTALLED SPOTIFY AND SPICETIFY. WE FOLLOW THESE INSTRUCTIONS:

1. Clone this repository. Make sure git is installed and run:
```bash
git clone --depth=1 https://github.com/spicetify/spicetify-themes.git
```
 
2. Copy the files into the Spicetify Themes folder. Run:

Linux
```bash
cd spicetify-themes
cp -r * ~/.config/spicetify/Themes
```

3. Choose which theme to apply just by running:
```bash
spicetify config current_theme THEME_NAME
```

Extra
The _Extra folder contains additional resources for tweaking the look of Spotify. More info in its README.

4. If you want to remove all customizations and return to the original Spotify interface, run:
```bash
spicetify restore
```

## Example: Applying a Popular Theme
For example, to install and apply the "Dribbblish" theme:

Download the theme:

```bash
Copy code
git clone https://github.com/spicetify/spicetify-themes
```

Copy the theme to the Spicetify themes directory:
```bash
cp -r spicetify-themes/Dribbblish ~/.config/spicetify/Themes
Set and apply the theme:
```

```bash
spicetify config current_theme Dribbblish
spicetify apply
```
Customize the theme by editing the CSS file if necessary.



## Contribution Guidelies

Reporting Issues: Please report any issues or bugs using the GitHub Issues tab.
Submitting Pull Requests: Fork the repository, make your changes, and submit a pull request with a description of your changes.
*For proper guidelines, check spicetify-themes CONTRIBUTING.MD file.


 





