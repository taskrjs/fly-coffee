const test = require("tape").test
const coffee = require("../")

test("fly-coffee", (t) => {
  t.plan(3)
  coffee.call({
    filter: function (name, transform, options) {
      t.equal(name, "coffee", "add coffee filter")
      t.ok(/this.a/.test(transform("@a")), "coffee transform")
      t.equal(options.ext, ".js", "extension is .js")
    }
  })
})
