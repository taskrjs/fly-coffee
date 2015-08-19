const test = require("tape").test
const coffee = require("../")

test("fly-coffee", (t) => {
  t.plan(3)
  coffee.call({
    filter: function (name, transform) {
      const result = transform("@a")
      t.equal(name, "coffee", "add coffee filter")
      t.ok(/this\.a/.test(result.code), "coffee transform")
      console.log(result)
      t.equal(result.ext, ".js", "extension is .js")
    }
  })
})
