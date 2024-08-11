# Commander Chess

[Rules]()

But as a multiplayer web game with local pass-and-play!

## Getting started for the first time

First you'll need Node.js. @akpi816218 recommends [NVM](https://github.com/nvm-sh/nvm) for managing Node versions on Unix-like systems (i.e. Mac/Linux). Also see the [interactive installation guide](https://nodejs.org/en/download/package-manager) and [general guide](https://nodejs.org/en/download/package-manager/all#nvm). If you're on Windows, you can use WSL (Windows Subsystem for Linux) to get a Unix-like environment, then follow NVM installation instructions. If you're on Windows and don't want to use WSL, you can use [FNM](https://github.com/Schniz/fnm?tab=readme-ov-file#using-winget-windows).

Once you have Node.js, you'll need to clone the repository. [Set up Git][https://docs.github.com/en/get-started/getting-started-with-git/set-up-git#setting-up-git] if you haven't already. Optionally (recommended), set up the [GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).

Now you can clone the repository and install project dependencies. Open a terminal and run:

```bash
# with GitHub CLI
gh repo clone akpi816218/commanderchess
# with plain old Git
git clone https://github.com/akpi816218/commanderchess.git

# change directory to the repository
cd commanderchess
# install dependencies with NPM, the default Node.js package manager
npm i # short for "npm install"
```

Open the project in your IDE of choice. If you don't have one, @akpi816218 recommends [Visual Studio Code by Microsoft](https://code.visualstudio.com/) and [VSCodium, the no-telemetry alternative](https://vscodium.com/) (free) or [WebStorm by JetBrains](https://www.jetbrains.com/webstorm/) (paid licensing, but free for students).

If the project has progressed to a point where there is something meaningful in the webapp, you can run the development server with:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the webapp. You can make changes to the code and see them reflected in the browser without refreshing the page (usually) thanks to [Next.js Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh). Press Ctrl-C in the terminal to kill the development server.

Before committing changes, run the linter and formatter:

```bash
npm run fmt && npm run lint
```

## Deployment

Deployment service TBD.

```bash
docker pull akpi816218/commanderchess:latest
# include environment variables as needed, one per -e flag
docker run -d [-e <ENV>] akpi816218/commanderchess:latest
```

## Contributing

Things people can help with:

- Art
- UI Design
- System Design
- Game Logic
- Testing

Ask about how you can help!

## Next.js

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
