const express = require("express")
const csv = require("csv-parser")
const colleges = require("./data.json")
const cors = require("cors")
const fs = require("fs")
const { Index, Document } = require("flexsearch")
const app = new express()
app.use(cors())

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
colleges.forEach((college) => {
 index.add(college.id, college.college)
 mapping.set(college.id, college)
})

app.get("/", (req, res) => res.send("Hello from desi collges!"))
app.get("/ping", (req, res) => {
 return res.send("pongggggg")
})
app.get("/search", (req, res) => {
 var keyword = req.query.q
 const r = index.search(keyword, 5)
 const result = r.map((x) => mapping.get(x))
 return res.json(result)
})

app.listen(process.env.PORT || 3000)
