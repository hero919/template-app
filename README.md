# TemplateApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

# Local Dev Set Up
In order to run it locally on dev, commented following in server.js
`app.use(express.static(__dirname + "/dist/template-app"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/template-app/index.html"));
});`

And running command `ng serve --proxy-config proxy.conf.json` Under this folder
What this to do is to make sure http request from angular will routing to the correct port instead of default 4200
In prod, we don't need to set it up since express has already routed for us


## Development server

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
