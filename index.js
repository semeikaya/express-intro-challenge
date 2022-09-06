const express = require('express')
const app = express()
const port = 3005

app.get('/us', (req, res) => {
    res.send('Hello ghbvtdfgfgkljdkfg')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})