module.exports = function () {
  return this.filter("coffee", (src, opts) => {
    try { return require("coffee-script").compile(src, opts) }
    catch (e) { throw e }
  })
}
