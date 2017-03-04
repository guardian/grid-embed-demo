# Grid Embed Demo

An example of how to embed [Grid](https://github.com/guardian/grid) into an application for image selection.

The example shown here is written without any frameworks and in standard ES5, demonstrating the basic technique.

## Demo

![demo](demo.gif)

## Requirements

- node
- npm
- nginx
- [dev-nginx](https://github.com/guardian/dev-nginx)

## Setup

- Checkout [dev-nginx](https://github.com/guardian/dev-nginx)
- Setup nginx [nginx-mappings](./nginx/nginx-mappings.yml)

```shell
/path/to/dev-nginx/setup-app.rb /path/to//grid-embed-demo/nginx/nginx-mappings.yml
```

- Install node modules:

```shell
npm install
```

## Usage

Once all setup steps are complete, run `npm start` to start a http server.
You can now go to [https://grid-embed-demo.local.dev-gutools.co.uk](https://grid-embed-demo.local.dev-gutools.co.uk).
