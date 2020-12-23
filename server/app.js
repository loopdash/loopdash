require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.set('API_PORT', process.env.API_PORT || 8080)

app.post('/api/send_email', (req, res) => {
  const { email } = req.body
  const MAILGUN_KEY = process.env.MAILGUN_KEY
  const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN
  const mailgun = require('mailgun-js')({ apiKey: MAILGUN_KEY, domain: MAILGUN_DOMAIN })

  console.log(email)
  if (!email) {
    return res.status(400).json({
      status: 'error',
      body: 'Missing required fields: title or author'
    })
  }

  const data = {
    from: 'Loopdash lead form <admin@loopdash.com>',
    to: 'gary@garybunofsky.com',
    subject: 'New lead',
    text: `A potential customer has filled out the form: ${email}`
  }

  mailgun.messages().send(data, function(error, body) {
    console.log(body)
  })

  return res.status(200).json({
    status: 'success',
    body: `Queued email to ${email}`
  })
})

app.listen(process.env.API_PORT, () => {
  console.log(`App is running on ${process.env.API_PORT}`)
})
