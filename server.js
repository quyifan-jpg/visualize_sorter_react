const exp = require('constants')
const express = require('express')
const path = require('path')


const app = express()

// app.get("*",(req, res) => {
//     app.use(express.static("build"))
//     console.log("get /")
    
//     res.sendFile(path.join(__dherirname, 'build','index.html'))
// })

const root = require('path').join(__dirname, 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})