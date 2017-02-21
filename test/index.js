const join = require("path").join
const test = require("tape")
const Fly = require("fly")

const dir = join(__dirname, "fixtures")
const tmp = join(__dirname, "tmp")

test("fly-coffee", (t) => {
  t.plan(6)

  const fly = new Fly({
    plugins: [
      require("../"),
      require("fly-clear")
    ],
    tasks: {
      *foo(f) {
        t.ok("coffee" in fly.plugins, "attach the `coffee()` plugin to fly")

        yield f.source(`${dir}/foo.coffee`).coffee().target(tmp)

        const want = yield f.$.read(`${dir}/foo.js`, "utf8")
        const sent = yield f.$.read(`${tmp}/foo.js`, "utf8")

        t.ok(sent, "creates a `.js` file")
        t.equal(sent, want, "compile the `.coffee` contents correctly")

        yield f.clear(tmp)
      },
      *bar(f) {
        yield f.source(`${dir}/bar.coffee`).coffee({ sourceMap: true }).target(tmp)

        const map = yield f.$.read(`${tmp}/bar.js.map`)
        t.ok(map, "compiler receives options/config")

        const arr = yield f.$.expand(`${tmp}/*`)
        t.equal(arr.length, 2, "creates a file and external sourcemap")

        const str = yield f.$.read(`${tmp}/bar.js`, "utf8")
        t.ok(/sourceMappingURL/.test(str), "via `sourceMap`; attach `sourceMappingURL` comment")

        yield f.clear(tmp)
      }
    }
  })

  fly.serial(["foo", "bar"])
})
