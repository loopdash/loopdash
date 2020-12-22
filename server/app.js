require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cors = require('cors')
const MAILGUN_KEY = process.env.MAILGUN_KEY
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN

var corsOptions = {
  origin: 'localhost',
  optionsSuccessStatus: 200
}
app.use(cors())
app.set('API_PORT', process.env.API_PORT || 8080)
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.post('/api/send_email', cors(corsOptions), (req, res) => {
  const { email } = req.body
  const mailgun = require('mailgun-js')({ MAILGUN_KEY, MAILGUN_DOMAIN })

  if (!email) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing required fields: title or author'
    })
  }

  const data = {
    from: 'Loopdash lead form <admin@loopdash.com>',
    to: 'gary@garybunofsky.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!'
  }

  mailgun.messages().send(data, function(error, body) {
    if (error) {
      return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
      })
    } else {
      return res.status(500).json({
        status: 'success',
        body: body
      })
    }
  })

  return res.json()
})

app.listen(process.env.API_PORT, () => {
  console.log(`App is running on ${process.env.API_PORT}`)
})
