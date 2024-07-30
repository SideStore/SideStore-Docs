# SideStore Documentation

This is the official GitHub repository for SideStore's documentation hosted at <https://docs.sidestore.io/>.

This project is licensed under the [GNU Affero General Public License](LICENSE).

## Installation

```shell
yarn
```

### Local Development

```shell
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The documentation uses GitHub Pages as hosting. To deploy to GitHub Pages, run one of the following commands based on how you cloned this repo.

Using SSH:

```shell
USE_SSH=true yarn deploy
```

Not using SSH:

```shell
GIT_USER=<Your GitHub username> yarn deploy
```

## Status

![Alt](https://repobeats.axiom.co/api/embed/7fd3c052892e88d60945586ce1a82feeb709bd8a.svg "Repobeats analytics image")
