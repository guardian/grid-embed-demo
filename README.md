# Grid Embed Demo

An example of how to embed [Grid](https://github.com/guardian/grid) into an application for image selection.

The example shown here is written without any frameworks and in standard ES5, demonstrating the basic technique.

## Demo

![demo](demo.gif)

## How it works

Grid uses [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to talk to the parent page when it has been iframed.
It sends a message when a crop is [created or selected](https://github.com/guardian/grid/blob/master/kahuna/public/js/main.js#L264-L296).
The message data represents a [crop](https://github.com/guardian/grid/blob/master/common-lib/src/main/scala/com/gu/mediaservice/model/Crop.scala#L11-L40).

In this demo, we:
- add Grid in an iframe to the DOM when the `Pick image` button is clicked
- add an event handler for the `message` event on the `window` object
- in the event handler, we extract the url to the master crop and add it in an `img` to the DOM

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
