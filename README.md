<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [CoffeeScript](http://coffeescript.org/) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation](http://coffeescript.org/documentation/docs/command.html#section-5) to see the available options.

### Install

```a
npm install -D fly-coffee
```

### Example

```js
export build = function* () {
  yield this
    .source("src/**/*.coffee")
    .coffee()
    .target("dist/")
}
```

# License

[MIT][mit] © [Jorge Bucaran][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://about.bucaran.me
[contributors]: https://github.com/bucaran/fly-coffee/graphs/contributors
[releases]:     https://github.com/bucaran/fly-coffee/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-coffee
[npm-ver-link]: https://img.shields.io/npm/v/fly-coffee.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-coffee.svg?style=flat-square
[travis-link]:  https://travis-ci.org/bucaran/fly-coffee
[travis-badge]: http://img.shields.io/travis/bucaran/fly-coffee.svg?style=flat-square
