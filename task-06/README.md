## OPEN DOCS:
The open source project I used for this task is 'Spicetify-themes'.
This repo is a part of the entire 'spicetify' project whose documentation will be given below with the 'spicetify-themes'.

I have been using spicetify since a long time and documenting this was a very super task for me as I personally know how amazing this project is.

## SPICETIFY DOCUMENTATION:

## Overview
Spicetify is a multiplatform command-line tool to customize the official Spotify client.

Linux and MacOS
Shell (pre-built binary)
Spicetify CLI

curl -fsSL https://raw.githubusercontent.com/spicetify/cli/main/install.sh | sh

Spicetify Marketplace

curl -fsSL https://raw.githubusercontent.com/spicetify/marketplace/main/resources/install.sh | sh


## Basic Usage
After installing Spicetify and Spicetify's Marketplace, you can use it to customize your Spotify client using all the available extensions and themes found in the Marketplace.

Updating
Spotify, every now and then, updates its client. Since we have no power over this process, you will likely need to re-apply Spicetify.

However, the update might have major changes to the client, which means you will need to run spicetify update (spicetify upgrade in Spicetify versions below 2.27.0) every time you update Spotify. If no update for Spicetify is available, it means that it either still works by simply running spicetify backup apply, or that we are still working on updating Spicetify to work on the new version.

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


## Installation
Linux and MacOS
Shell (pre-built binary) - Recommended
curl -fsSL https://raw.githubusercontent.com/spicetify/cli/main/install.sh | sh


Spotify installed from AUR
Before applying Spicetify, you need to gain write permission on Spotify files, by running command:

sudo chmod a+wr /opt/spotify
sudo chmod a+wr /opt/spotify/Apps -R

Note: Your Spotify client location might be different.

Spotify installed via spotify-launcher package (Arch Linux)
If Spotify is installed through the spotify-launcher package, then Spotify won't install to /opt/spotify and is instead in this folder: $HOME/.local/share/spotify-launcher/install/usr/share/spotify/

This directory will need to be added to the spotify-path section of the config (and you won't need to change any permissions like the AUR method).

Note: spotify-path must be an abslolute path. Do not use ~ to reference the home folder.

Spotify installed from Snap
Apps installed from Snap cannot be modified so you need to follow these steps to get Spicetify working:

Uninstall Spotify in Snap or run command snap remove spotify
Install Spotify using apt:
curl -sS https://download.spotify.com/debian/pubkey_6224F9941A8AA6D1.gpg | sudo gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/spotify.gpg
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt-get update && sudo apt-get install spotify-client


After Spotify is installed successfully, you need to gain read write permissions on Spotify files, by running commands:
sudo chmod a+wr /usr/share/spotify
sudo chmod a+wr /usr/share/spotify/Apps -R

Note: Your Spotify client location might be different.


Command Line Interface (CLI)
Run with no command once to generate config file

spicetify

If you just want to use Custom Apps and Extensions head over to each specific sections, if you want to create you own theme, keep reading below.

Make sure config file is created successfully and there is no error, then run:

spicetify backup apply enable-devtools

From now, after changing colors in color.ini or CSS in user.css, you just need to run:

spicetify update

to update your theme.

In Spotify, hit Ctrl Shift R / Command Shift R to reload and receive visual update of your theme.

For other commands and additional flags information, please run:

spicetify --help




Themes
One of the most popular features in Spicetify is theming. You can customize your Spotify to your heart's desire! However, this is a very cumbersome task.

For this reason, the theming heroes of the Spicetify community have created a huge library of themes which can be found in the following repositories:

spicetify/spicetify-themes - The official Spicetify themes repository. Feel free to contribute with more themes!


extensions and custom apps later.








 





