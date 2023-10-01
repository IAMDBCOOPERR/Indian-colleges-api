const express = require("express")
const csv = require("csv-parser")
const fs = require("fs")
const { Index, Document } = require("flexsearch")
const app = new express()

const mapping = new Map()
const index = new Index({
 tokenize: "full",
 preset: "match",
 document: {
  id: "id",
  index: ["college"],
  store: ["college", "state", "district"],
 },
})
const colleges = []
fs
 .createReadStream("data.csv")
 .pipe(csv())
 .on("data", (data) => colleges.push(data))
 .on("end", () => {
  colleges.forEach((college) => {
   index.add(college.id, college.college)
   mapping.set(college.id, college)
  })
 })

app.get("/", (req, res) => res.send("Hello Hono!"))
app.get("/search", (req, res) => {
 var keyword = req.query.q
 const r = index.search(keyword, 5)
 const result = r.map((x) => mapping.get(x))
 return res.json(result)
})

app.listen(process.env.PORT || 3000)
