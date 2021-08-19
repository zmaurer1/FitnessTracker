const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express()

app.use(logger("dev"))
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(express.static("public"))


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker_db", {
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useCreateIndex:true
})


app.use(require("./routes/api.js"))
app.use(require("./routes/view.js"))

app.listen(PORT,() => {
    console.log(`app running on port ${PORT}`)
})