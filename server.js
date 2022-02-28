const exp = require('constants')
const express = require('express')
const app = express()
const path = require('path')
app.get("/",(req, res) => {
    app.use(express.static('build'))
    console.log("get /")
    
    res.sendFile(path.join(__dirname, 'build','index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})