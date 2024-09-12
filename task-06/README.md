## OPEN DOCS:
The open source project I used for this task is 'Spicetify-themes'.
This repo is a part of the entire 'spicetify' project whose documentation will be given below with the 'spicetify-themes'.

I have been using spicetify since a long time and documenting this was a very super task for me as I personally know how amazing this project is.

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
1. Custom Themes
Apply Themes: Spicetify allows users to install and apply custom themes that modify the visual design of Spotify's interface. Themes can change colors, layout, typography, icons, and more.
Predefined Themes: Many themes are available, such as "Dribbblish," "Sleek," and "Nord Dark," each offering a unique style.
Custom CSS: Advanced users can further customize themes by modifying CSS files to fine-tune the UI according to their preferences.
Community Themes: Users can download themes shared by the community from GitHub or create and share their own.
2. Extensions
Add Extensions: Spicetify supports custom JavaScript extensions that add extra functionality to the Spotify client. Extensions can be used to modify behavior, add new buttons, or change how content is displayed.
Popular Extensions: Some extensions allow advanced filtering, automatic playlist creation, or media controls that improve user experience.
Multiple Extension Support: Spicetify allows multiple extensions to run at the same time, offering extensive customizations.
3. Sidebar Customization
Remove/Add Elements: Spicetify provides options to hide, move, or customize elements on Spotify's sidebar. Users can remove features they don't use or adjust the order of icons to suit their workflow.
Custom Icons: You can also change the icons of elements on the sidebar to align with your chosen theme.
4. Color Schemes
Modify Colors: Spicetify allows you to easily change Spotify’s color scheme. You can customize the background, highlight colors, button colors, and more.
Color Palettes: Some themes offer multiple color palettes, allowing users to switch between different variations.
5. Backup and Restore
Backup: Before applying changes, Spicetify automatically backs up the original Spotify client files, so you can restore them at any time.
Restore Defaults: If users want to revert to Spotify’s default look and feel, Spicetify offers a restore function that resets the UI to its original form.
6. User Script Injection
Run Custom Scripts: Spicetify allows users to inject custom JavaScript into Spotify, enabling modifications of client-side behavior, such as automating repetitive tasks or adding new functionalities.



Linux and MacOS:

Spicetify CLI

``` bash
curl -fsSL https://raw.githubusercontent.com/spicetify/cli/main/install.sh | sh
```
Spicetify Marketplace

curl -fsSL https://raw.githubusercontent.com/spicetify/marketplace/main/resources/install.sh | sh


## Basic Usage
After installing Spicetify and Spicetify's Marketplace, you can use it to customize your Spotify client using all the available extensions and themes found in the Marketplace.

Updating
Spotify, every now and then, updates its client. Since we have no power over this process, you will likely need to re-apply Spicetify.

However, the update might have major changes to the client, which means you will need to run spicetify update (spicetify upgrade in Spicetify versions below 2.27.0) every time you update Spotify. If no update for Spicetify is available, it means that it either still works by simply running spicetify backup apply, or that we are still working on updating Spicetify to work on the new version.




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






How to Use Spicetify
Installation
Install Spicetify CLI: Spicetify CLI is required to manage themes and extensions.

For macOS/Linux:
bash
Copy code
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.sh | sh
For Windows: Download and install from the Spicetify GitHub page.
Configure Spotify:

After installing Spicetify, run the following commands to configure Spotify:
bash
Copy code
spicetify backup apply
Applying Themes
Download a Theme:

Download a theme from the Spicetify Themes Repository or another source.
Move the theme files into the Spicetify theme directory (usually ~/.config/spicetify/Themes).
Apply a Theme:

Set the theme you want to apply using the following command:
bash
Copy code
spicetify config current_theme THEME_NAME
spicetify apply
Customizing Sidebar and Icons
Hide Sidebar Items:

You can hide certain sidebar elements with the following command:
bash
Copy code
spicetify config extensions themeName.js hide_sidebar_elements
spicetify apply
Change Sidebar Icons:

To modify the sidebar icons, go into the theme’s config files and update the appropriate values for icons or buttons.
Installing and Running Extensions
Download Extensions:

Extensions can be found in the Spicetify Extensions GitHub Repository or developed independently.
Place the JavaScript extension files in the ~/.config/spicetify/Extensions folder.
Enable Extensions:

Enable and apply an extension by running the following:
bash
Copy code
spicetify config extensions extensionName.js
spicetify apply
Reset to Default Settings
Restore Spotify:
If you want to remove all customizations and return to the original Spotify interface, run:
bash
Copy code
spicetify restore
Example: Applying a Popular Theme
For example, to install and apply the "Dribbblish" theme:

Download the theme:

bash
Copy code
git clone https://github.com/spicetify/spicetify-themes
Copy the theme to the Spicetify themes directory:

bash
Copy code
cp -r spicetify-themes/Dribbblish ~/.config/spicetify/Themes
Set and apply the theme:

bash
Copy code
spicetify config current_theme Dribbblish
spicetify apply
Customize the theme by editing the CSS file if necessary.

Additional Features
Auto Apply Changes: Spicetify can automatically apply changes when files are modified, making it easy to iterate on theme development.
Spotify Playback Bar Customization: Themes can also change the appearance of the playback bar, making it more minimal or decorative.
Open Source Community: Spicetify is backed by an open-source community where users actively contribute new themes, extensions, and features.






## Contribution Guidelies

    Reporting Issues: Please report any issues or bugs using the GitHub Issues tab.
    Submitting Pull Requests: Fork the repository, make your changes, and submit a pull request with a description of your changes.




Spicetify provides a robust and flexible way to personalize your Spotify experience with custom themes, extensions, and scripts. Its features allow users to control the look and feel of Spotify in detail, ensuring a completely unique interface. Whether you prefer minimalism, vibrant colors, or additional functionality, Spicetify empowers you to shape Spotify to match your tastes.

 





