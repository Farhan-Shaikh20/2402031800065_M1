const path = require("path")
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const PORT = 3000
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/contact_app"

// database connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully.")
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message)
  })

// middleware
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "viwes"))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

// routes
app.get("/", (req, res) => {
  res.render("home")
})

app.get("/show-contact", (req, res) => {
  res.render("show-contact")
})

app.get("/add-contact", (req, res) => {
  res.render("add-contact")
})

app.get("/update-contact", (req, res) => {
  res.render("update-contact")
})

app.get("/delete-contact", (req, res) => {
  res.redirect("/")
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}.`)
})
