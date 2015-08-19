module.exports = function () {
  return this.filter("coffee", (data, options) => {
    const result = require("coffee-script").compile(data.toString(), options)
    return { code: result.js || result, map: result.v3SourceMap, ext: ".js" }
  })
}
