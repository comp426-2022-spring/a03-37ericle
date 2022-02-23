const express = require('express');
const app = express()

var port = 5000
const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))
})

app.get('/app/', (req, res) => {
        res.status(200).end('OK')
        res.type('text/plain')
    });

app.get('/app/echo/:number', (req, res) => {
    res.status(200).json({'message': req.params.number})
})

app.get('/app/flip', (req, res) => {
    res.type('text/plain')
    function coinFlip() {
        return (Math.floor(Math.random() * 2) == 0) ? "heads" : "tails";
      }
    res.send(coinFlip())
})

app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
    res.type('text/plain')
});