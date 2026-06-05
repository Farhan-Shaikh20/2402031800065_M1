const path = require("path")
const fs = require("fs/promises")
const crypto = require("crypto")
const express = require("express")
const mongoose = require("mongoose")
const Contact = require("./models/Contact")

const app = express()
const PORT = 3000
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/contact_app"
const DATA_DIR = path.join(__dirname, "data")
const DATA_FILE = path.join(DATA_DIR, "contacts.json")
let isMongoConnected = false

async function readLocalContacts() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf8")
    return JSON.parse(data)
  } catch (error) {
    if (error.code === "ENOENT") {
      return []
    }

    throw error
  }
}

async function writeLocalContacts(contacts) {
  await fs.mkdir(DATA_DIR, { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(contacts, null, 2))
}

async function getContacts() {
  if (isMongoConnected) {
    return Contact.find().sort({ createdAt: -1 })
  }

  const contacts = await readLocalContacts()
  return contacts.sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt))
}

async function getContactById(id) {
  if (isMongoConnected) {
    return Contact.findById(id)
  }

  const contacts = await readLocalContacts()
  return contacts.find((contact) => contact._id === id)
}

async function createContact(contactData) {
  if (isMongoConnected) {
    return Contact.create(contactData)
  }

  const contacts = await readLocalContacts()
  const now = new Date().toISOString()

  contacts.unshift({
    _id: crypto.randomUUID(),
    first_name: contactData.first_name.trim(),
    last_name: contactData.last_name.trim(),
    email: contactData.email.trim().toLowerCase(),
    phone: contactData.phone.trim(),
    address: contactData.address ? contactData.address.trim() : "",
    createdAt: now,
    updatedAt: now,
  })

  await writeLocalContacts(contacts)
}

async function updateContact(id, contactData) {
  if (isMongoConnected) {
    return Contact.findByIdAndUpdate(id, contactData, {
      runValidators: true,
    })
  }

  const contacts = await readLocalContacts()
  const contactIndex = contacts.findIndex((contact) => contact._id === id)

  if (contactIndex === -1) {
    return null
  }

  contacts[contactIndex] = {
    ...contacts[contactIndex],
    first_name: contactData.first_name.trim(),
    last_name: contactData.last_name.trim(),
    email: contactData.email.trim().toLowerCase(),
    phone: contactData.phone.trim(),
    address: contactData.address ? contactData.address.trim() : "",
    updatedAt: new Date().toISOString(),
  }

  await writeLocalContacts(contacts)
  return contacts[contactIndex]
}

async function deleteContact(id) {
  if (isMongoConnected) {
    return Contact.findByIdAndDelete(id)
  }

  const contacts = await readLocalContacts()
  await writeLocalContacts(contacts.filter((contact) => contact._id !== id))
}

// database connection
async function connectDatabase() {
  try {
    await mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 })
    isMongoConnected = true
    console.log("MongoDB connected successfully.")
  } catch (error) {
    isMongoConnected = false
    console.error("MongoDB connection failed:", error.message)
    console.log("Using local JSON database instead.")
  }
}

mongoose.connection.on("disconnected", () => {
  isMongoConnected = false
  console.error("MongoDB disconnected, using local JSON storage.")
})

// middleware
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "viwes"))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

// routes
app.get("/", async (req, res) => {
  try {
    const contacts = await getContacts()
    res.render("home", { contacts })
  } catch (error) {
    res.status(500).send(`Failed to load contacts: ${error.message}`)
  }
})

app.get("/show-contact/:id", async (req, res) => {
  try {
    const contact = await getContactById(req.params.id)

    if (!contact) {
      return res.status(404).send("Contact not found.")
    }

    res.render("show-contact", { contact })
  } catch (error) {
    res.status(500).send("Failed to load contact.")
  }
})

app.get("/add-contact", (req, res) => {
  res.render("add-contact")
})

app.post("/add-contact", async (req, res) => {
  try {
    await createContact(req.body)
    res.redirect("/")
  } catch (error) {
    res.status(400).send("Failed to add contact. Please check all fields.")
  }
})

app.get("/update-contact/:id", async (req, res) => {
  try {
    const contact = await getContactById(req.params.id)

    if (!contact) {
      return res.status(404).send("Contact not found.")
    }

    res.render("update-contact", { contact })
  } catch (error) {
    res.status(500).send("Failed to load contact.")
  }
})

app.post("/update-contact/:id", async (req, res) => {
  try {
    await updateContact(req.params.id, req.body)
    res.redirect("/")
  } catch (error) {
    res.status(400).send("Failed to update contact. Please check all fields.")
  }
})

app.post("/delete-contact/:id", async (req, res) => {
  try {
    await deleteContact(req.params.id)
    res.redirect("/")
  } catch (error) {
    res.status(500).send("Failed to delete contact.")
  }
})

async function startServer() {
  await connectDatabase()
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}.`)
  })
}

startServer()
