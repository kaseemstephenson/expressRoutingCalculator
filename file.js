const express = require('express')
const app = express()
const port = 3400

app.get('/', (req, res) => {
  res.json({'name':'Kaseem','age':23})
})

//adding
app.get('/add', (req, res) => {
  const c = req.params['id'];
  res.send("Please enter numbers to be added in the following way: add/number1/number2")
})
app.get('/add/:num1/:num2', (req, res) => {
  const num1 = req.params['num1']
  const num2 = req.params['num2']
  const ans = parseInt(num1) + parseInt(num2)

  res.send(num1+ " + "+num2+ " = "+ans)
})
//endAdding

//subtracting
app.get('/subtract', (req, res) => {
  const c = req.params['id'];
  res.send("Please enter numbers to be subtracted in the following way: subtract/number1/number2")
})
app.get('/subtract/:num1/:num2', (req, res) => {
  const num1 = req.params['num1']
  const num2 = req.params['num2']
  const ans = parseInt(num1) - parseInt(num2)

  res.send(num1+ " - "+num2+ " = "+ans)
})
//endSubstracting

//multiplying
app.get('/multiply', (req, res) => {
  const c = req.params['id'];
  res.send("Please enter numbers to be multiplied in the following way: multiply/number1/number2")
})
app.get('/multiply/:num1/:num2', (req, res) => {
  const num1 = req.params['num1']
  const num2 = req.params['num2']
  const ans = parseInt(num1) * parseInt(num2)

  res.send(num1+ " * "+num2+ " = "+ans)
})
//endMultiplying

//dividing
app.get('/divide', (req, res) => {
  const c = req.params['id'];
  res.send("Please enter numbers to be divided in the following way: divide/number1/number2")
})
app.get('/divide/:num1/:num2', (req, res) => {
  const num1 = req.params['num1']
  const num2 = req.params['num2']
  const ans = parseInt(num1) / parseInt(num2)

  res.send(num1+ " / "+num2+ " = "+ans)
})
//endDividing

//mod
app.get('/mod', (req, res) => {
  const c = req.params['id'];
  res.send("Please enter numbers to be modded in the following way: mod/number1/number2")
})
app.get('/mod/:num1/:num2', (req, res) => {
  const num1 = req.params['num1']
  const num2 = req.params['num2']
  const ans = parseInt(num1) % parseInt(num2)

  res.send(num1+ " % "+num2+ " = "+ans)
})
//endMod

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})