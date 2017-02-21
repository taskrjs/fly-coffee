<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

# fly-coffee [![][travis-badge]][travis-link]

> [CoffeeScript](http://coffeescript.org/) plugin for Fly.


## Install

```a
npm install --save-dev fly-coffee
```

## Usage

Check out the [documentation](http://coffeescript.org/#usage) to see the available options.

```js
exports.coffee = function * (fly) {
  yield fly.source("src/**/*.coffee").coffee({
    sourceMap: true
  }).target("dist/js")
}
```

## License

MIT © [FlyJS](https://www.github.com/flyjs/fly)

[travis-link]:  https://travis-ci.org/flyjs/fly-coffee
[travis-badge]: http://img.shields.io/travis/flyjs/fly-coffee.svg?style=flat-square
