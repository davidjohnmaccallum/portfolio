const morgan = require('morgan')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.render('index', {
    message: 'Hello world!'
  })
})

app.use((req, res, _next) => {
  res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, _next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(process.env.PORT || 3000, err => {
  if (err) return console.error('Startup error', err)
  console.log(`Listening on port ${process.env.PORT || 3000}`)
})
