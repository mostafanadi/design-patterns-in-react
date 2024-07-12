const w = { name: "mostafa", age: 1000 };
const m = new WeakMap()
const s = new Set()
s.add({ name: "Rasool" })
s.add({ name: "gooz" })
const a = ["shahs", "band"]
m.set({ name: "mostafaa" }, "mostafa")
m.set({ age: 1000 }, 1000)
for (let key of s) {
    console.log(key)
}