const express = require('express');
const app = express()

var port = 5000
const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))
})

function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? "heads" : "tails";
  }

function coinFlips(flips) {
  var output = [];
  for (let i = 0; i < flips; i++) {
    output.push(coinFlip())
  }
  return output;
}

function countFlips(array) {
    let countArray = [];
    let headsCount = 0;
    let tailsCount = 0;
    var o = new Object();
    array.forEach(function(item) {
      if (item == "heads") {
        headsCount += 1;
      }
      if (item == "tails") {
        tailsCount += 1;
      }
    });
    if (headsCount == 0) {
      o = {tails: tailsCount}
    }
    else if (tailsCount == 0) {
      o = {heads: headsCount}
    }
    else {
      o = {heads: headsCount, tails: tailsCount}
    }
    return o;
  }

function flipACoin(call) {
  let result = "";
  let flip = (Math.floor(Math.random() * 2) == 0) ? "heads" : "tails";
  if (flip == call) {
    result = "win"
  }
  else {
    result = "lose"
  }
  let o = {call: call, flip: flip, result: result}
  return o;
}  

function flipACoin(call) {
    let result = "";
    let flip = (Math.floor(Math.random() * 2) == 0) ? "heads" : "tails";
    if (flip == call) {
      result = "win"
    }
    else {
      result = "lose"
    }
    let o = {call: call, flip: flip, result: result}
    return o;
}

app.get('/app/', (req, res) => {
        res.status(200).end('OK')
        res.type('text/plain')
    });

app.get('/app/flip', (req, res) => {
    res.status(200)
    res.type('text/plain')
    res.json({'flip': coinFlip()})
})

app.get('/app/flips/:number', (req, res) => {
    res.status(200)
    var flipsArray = coinFlips(req.params.number)
    res.json({'raw': flipsArray, 'summary': countFlips(flipsArray)})
})

app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
    res.type('text/plain')
});

app.get('/app/flip/call/heads', (req, res) => {
    res.status(200)
    res.json(flipACoin("heads"))
})