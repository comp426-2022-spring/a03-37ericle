const express = require('express');
const app = express()

var port = 5000
const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))
})

app.get('/app/', (req, res) => {
    // Respond with status 200
        res.status(200).end('OK')
        res.type('text/plain')
    // Respond with status message "OK"
        // res.statusMessage = 'OK';
        // res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
        // res.end(res.statusCode+ ' ' +res.statusMessage)
    });

app.get('app/flip', (req, res) => {
    res.type('text/json')
    function coinFlip() {
        return (Math.floor(Math.random() * 2) == 0) ? "heads" : "tails";
      }
    res.send(coinFlip())
})

app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
    res.type('text/plain')
});