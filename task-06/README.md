## OPEN DOCS:
The open source project I used for this task is 'Take Notes' and the demo is available at [takenote.dev](https://takenote.dev).

## TAKE NOTES DOCUMENTATION:

## Overview
TakeNote is a note-taking app for the web. It is a static site without a database and does not sync your notes to the cloud. The notes are persisted temporarily in local storage, but we can download all notes in markdown format as a zip.

However, there is a hidden version in the code that integrates with GitHub to store notes in a private GitHub repository. The developer has chosen not to support this version due to:

- Not wanting to maintain the app alongside personal commitments.
- Concerns about requesting private repository permissions from users.
- Server maintenance and handling GitHub API rate limiting issues.
- The inefficiency of storing multiple notes on GitHub due to limitations in the API (can't batch-create many files).
- Instead of backing up to local storage, your notes will back up to a private repository in your account called `takenote-data`. Due to the        following reasons I'm choosing not to deploy or maintain this portion of the application:

**TakeNote was created from these technologies: 
TypeScript, React, Redux, Node, Express, Codemirror, Webpack, Jest, Cypress, Feather Icons, ESLint, and Mousetrap, among other awesome open-source software.


## Features

1. `Minimalist UI:` TakeNote is designed to be distraction-free with a simple and clean user interface.
2. `Static Site with No Database:` The core version of the app runs without a backend or database, making it lightweight and fast. 
3. `Markdown Support:` Notes can be written and formatted using Markdown, allowing for headings, bold, italics, lists, and more.
4. `Organized Note Management:` Users can organize their notes by creating folders.
5. `Fast Search:` The app includes an instant search feature, which allows users to quickly find notes based on keywords or tags.
6. `Keyboard Shortcuts:` TakeNote supports a range of keyboard shortcuts for quicker navigation and note management.
7. `Offline Access:` Since the core app is a static site, it can be used offline. 
9. `Hidden GitHub Integration (Optional):` In a more advanced version of the app, users can back up their notes to a private GitHub repository using OAuth.This version is for users who prefer syncing notes via GitHub rather than local storage.
10. `No User Tracking or Analytics:` TakeNote respects user privacy and does not track or collect personal data. There are no analytics or tracking systems embedded in the app.
11. `Dark Mode:` A dark mode option is available to reduce eye strain during late-night note-taking sessions.
12. `Cross-Platform Compatibility:` Being a web app, TakeNote works on any platform with a modern browser, including Windows, macOS, and Linux.

## SETUP:

Demo Development
Steps to Clone and Install:
Clone the repository:

```bash
Copy code
git clone git@github.com:taniarascia/takenote
```
Navigate into the project directory:
After cloning, you need to enter the project folder where the code resides.

 ``` bash
Copy code
cd takenote
```

Install project dependencies:
Installing dependencies is essential because the app relies on external libraries. This command installs everything listed in the package.json file (React, Redux, Express, etc.).

```bash
Copy code
npm install
```

Running the Development Server:
Run the client (React frontend):
This starts a local server that runs the React frontend of the app. The development server hot-reloads, meaning it automatically updates the app when you make changes.

```bash
Copy code
npm run client
```

Full Application Development (self-hosted)
Pre-Installation:

Setting Up GitHub OAuth:

Before you can use the app locally with GitHub OAuth for user authentication (allowing users to log in via GitHub and save their notes to private repositories), you need to configure an OAuth application.

Go to GitHub Developer Settings:

On GitHub, navigate to Settings > Developer Settings > OAuth Apps.
Create a New OAuth Application:

When creating a new OAuth app:
Application name: This will be displayed to users (e.g., "TakeNote Development").
Homepage URL: http://localhost:3000 (this is where the app will run locally).
Authorization callback URL: http://localhost:3000/api/auth/callback (this URL is used after successful authentication).
Create a .env file:

Create a .env file in the root of the project (to store environment variables like your GitHub credentials).
Add your OAuth credentials:
env
Copy code
CLIENT_ID=xxx
CLIENT_SECRET=xxxx
DEMO=true
The DEMO=true variable means the app is in demo mode (using local storage). Removing this will enable GitHub integration.

Installation and Development Mode:
Clone and Install:

```bash
Copy code
git clone git@github.com:taniarascia/takenote
cd takenote
npm install
```

Run the Development Servers:

In development mode, you need to run two servers:

Express backend (runs on port 5000).
React frontend (runs on port 3000).
Command to start both servers at once:

```bash
Copy code
npm run dev
```
After this, the app will be accessible at http://localhost:3000.

Note: The frontend and backend are separate processes, and any API requests from the frontend will be proxied to the backend on port 5000.

Production Mode
In production, the React frontend is built into static files that are served by the Express server.

Build the app and run the server:
Build: Compiles the React app for production.

Start: Launches the Express server to serve the compiled files on port 5000.


```bash
Copy code
npm run build && npm run start
```

After this, the app will be accessible at http://localhost:5000.

Run in Docker
Docker is an alternative method to run the app in a containerized environment. This is useful for ensuring that the app runs in a consistent environment across different machines.

Build Docker Image:

This command builds a Docker image for the app.
Replace xxx with your GitHub OAuth credentials.

```bash
Copy code
docker build --build-arg CLIENT_ID=xxx -t takenote:mytag .
```
Run Docker Container:

After building the image, run it as a Docker container. Set the environment variables for the GitHub OAuth credentials.

```bash
Copy code
docker run \
-e CLIENT_ID=xxx \
-e CLIENT_SECRET=xxxx \
-e NODE_ENV=development \
-p 5000:5000 \
takenote:mytag
```

Access the app:

Go to http://localhost:5000 to view the app.

Seed Data
If you want to populate the app with some test data (notes), you can use the seed.js file:

Open your browser console and paste the contents of seed.js into it. This will populate the app with some initial notes for testing.
Testing
Unit and Component/Integration Testing:
Jest is used for unit and component testing. To run the tests:

bash
Copy code
npm run test
Jest Runner in VSCode:

To run tests directly within Visual Studio Code using Jest Runner, add this configuration to your settings.json:
json
Copy code
"jestrunner.configPath": "config/jest.config.js"
End-to-End Testing with Cypress:
Cypress is used for end-to-end testing to simulate user interactions.
Run the app in one terminal:

bash
Copy code
npm run client
Run Cypress tests in another terminal:

bash
Copy code
npm run test:e2e:open

