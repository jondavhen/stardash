# StardashApp

This is a little Angular dashboard app to demo GraphQL queries over WebSocket. 
The app makes use of a backend Astrograph server to access the Stellar ledger via GraphQL:
https://github.com/astroband/astrograph

## Development server
The development server proxies GraphQL requests to https://astrograph.evilmartians.io

To run a local astrograph server (recommended!):
* Checkout out the astrograph source and run in Docker. 
* Replace the content of proxy configuration file "./src/proxy.conf.json", with the content of the local config file "./src/proxy.conf.local.json"

The app will then proxy GraphQL connections to the astrograph server at localhost:4000.



Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
