# Documentation for Spicetify Themes

## Overview
Spicetify provides a robust and flexible way to personalize your Spotify experience with custom themes, extensions, and scripts. Its features allow users to control the look and feel of Spotify in detail, ensuring a completely unique interface. Whether you prefer minimalism, vibrant colors, or additional functionality, Spicetify empowers you to shape Spotify to match your tastes and is backed by an open-source community where users actively contribute new themes, extensions, and features.

The Spicetify customization process involves modifying Spotify’s UI elements through CSS and color configuration. By creating a custom color.ini and CSS file, users can redefine the look and feel of the Spotify desktop app. Below is a breakdown of how the theme's features and elements work:

(Check all the themes preview in THEMES.MD file)

Every theme should contain:

-color.ini: store colors value that later will be converted to CSS variables
-user.css: set of custom CSS rules to manipulate, hide, move UI elements.


## EXAMPLE THEME: BURNT SIENNA

Theme Components
1. Color Palette
The color.ini file defines the colors used across various UI components, ensuring consistency throughout the theme.

```ini

[Base]
button        = ef8450    # Defines the button color, a vibrant shade of orange
sidebar       = 242629    # Dark gray background for the sidebar
player        = 242629    # Dark gray for the player background
main          = 303336    # Main content area in a slightly lighter dark gray
button-active = ef8450    # Active button color, matching the default button color

```

2. Font Styling
The imported Google Font Montserrat is used across the entire interface to provide a clean, modern appearance.

``` css

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;900&display=swap');
* {
    font-family: Montserrat;
}
```

## UI Customizations
Headers

```css
h1 {
    font-weight: 700 !important;
}
```
Purpose: Ensures all page titles are bold to enhance visibility.

Player Song and Artist Info
```css
`.main-nowPlayingWidget-nowPlaying .main-trackInfo-name {
    font-size: 20px !important;
}
.main-nowPlayingWidget-nowPlaying .main-trackInfo-artists {
    font-size: 15px;
}
```

Icons and Controls
```css

.main-trackList-rowPlayPauseIcon {
    transform: scale(1.3);
}
.main-playPauseButton-button svg {
    height: 28px;
    width: 28px;
}
```
Play/Pause Icon: Scaled up for better interactivity.
Player Controls: Larger buttons ensure easier control handling.


Progress Bar
```css

.progress-bar {
    --fg-color: var(--spice-button);
}
.progress-bar-wrapper {
    margin-left: 5px;
    margin-right: 5px;
}
```
Foreground Color: Custom color matching the theme's button shade.
Adjusted Margins: Provides a more balanced look.


## Advanced Customizations
Background and Shadows
```css

.main-entityHeader-backgroundColor {
    background-color: unset !important;
}
.main-entityHeader-shadow {
    box-shadow: 0 4px 20px rgba(var(--spice-rgb-shadow), 0.5);
}
```
Background Color: Removed gradients for a flat, clean aesthetic.
Shadow Effect: A soft shadow adds depth to the cover area.

Scrollbars
css
```
.os-scrollbar-handle {
    background: var(--spice-button) !important;
    border-radius: 8px;
}
```
Scrollbar: Styled to match the theme, with rounded edges for smoother visual flow.

Menu Text and Font
```css

.ellipsis-one-line {
    font-family: Montserrat;
    font-size: 14px;
}
```
Unified Font: Ensures a consistent font style across dropdowns and menus.

Customization Features
-Dynamic Font Adjustments: Text elements across the app are easier to read with larger font sizes for key components.
-Minimalist Design: Removal of background gradients keeps the design sleek and professional.
-Custom Controls: Enhanced buttons, icons, and sliders ensure that users can interact with the interface effortlessly.
-This setup offers a modern, elegant Spotify UI, with easily customizable elements for further personalization.

Usage
Step 1: Place the color.ini in the Spicetify themes directory (~/.config/spicetify/Themes).
Step 2: Save the CSS modifications in a corresponding .css file in the same folder.
Step 3: Run spicetify apply to apply the theme.
Step 4: Restart Spotify for the changes to take effect.



![screenshot](https://github.com/user-attachments/assets/69d6d7d3-c567-482f-9483-5c436b56f954)

...
