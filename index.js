module.exports = function () {
  this.coffee = function (opts) {
    return this
      .filter((data) => {
        try {
          return require("coffee-script").compile(data, opts)
        } catch (e) {
          this.notify("plugin_error", {
            plugin: "coffee",
            error: e
          })
        }
      }).notify("plugin_run", { plugin: "coffee" })
  }
}
