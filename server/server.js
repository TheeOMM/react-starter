const path = require('path')
const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT
const publicPath = path.join(`${__dirname}/../public`)

app.use(express.static(publicPath))

app.get('*', (req, res) => res.sendFile(path.join(`${publicPath}/index.html`)))

app.listen(port, () => console.log(`>>Server running on ${port}`))
