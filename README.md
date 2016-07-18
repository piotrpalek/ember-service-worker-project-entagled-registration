# ember-service-worker-project-entangled-registration

This addon is to be used along with [ember-service-worker](https://github.com/DockYard/ember-service-worker) to
ensure that the service worker being used is paired properly to the project.

This is done by generating a hash of the `package.json` and all levels of dependencies, and utilize that hash so that
if the service workers internal version does not match the version being registered the service worker will be
unregistered.

## Installation

```
npm install --save-dev ember-service-worker-project-entangled-registration
```

## Usage

As long as `ember-service-worker` is also present, there is no additonal steps needed to use this addon.

## Contributing

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember serve`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
