# Homelab Guides Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/af61205e-b1be-4748-b139-0329de3cf9eb/deploy-status)](https://app.netlify.com/sites/home-lab-guides/deploys)

A website of guides, how-to's, and knowledgebase information.

Managed and maintained by the Homelab community.

[Website Link](https://guide.labbers.uk).

## Build Information

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
