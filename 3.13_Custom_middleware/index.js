const express = require('express'),
    app = express();

    // Custom middleware
app.use((req, res, next) => {
    req.user = 'Derrick Strong'
    next()
})

app.get('/', (req, res) => {
    const user = req.user
    console.log(user)
    res.send(user)
}).listen(3000)