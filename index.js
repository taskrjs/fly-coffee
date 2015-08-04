module.exports = function () {
  return this.filter("coffee", function (source, options) {
    try { return require("coffee-script").compile(source, options) }
    catch (e) { throw e }
  }, { ext: ".js" })
}
