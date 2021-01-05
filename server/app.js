require('dotenv').config()

const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
const _ = require('lodash')

const MAILGUN_KEY = process.env.MAILGUN_KEY
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN
const UPTIME_ROBOT_KEY = process.env.UPTIME_ROBOT_KEY
const mailgun = require('mailgun-js')({
  apiKey: MAILGUN_KEY,
  domain: MAILGUN_DOMAIN
})

app.use(cors())
app.use(bodyParser.json())

app.set('API_PORT', process.env.API_PORT || 8080)

app.post('/api/send_email', (req, res) => {
  const { email } = req.body

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

  mailgun.messages().send(data, (error, body) => {
    console.log(body)
  })

  return res.status(200).json({
    status: 'success',
    body: `Queued email to ${email}`
  })
})

app.get('/api/get-server-status', (req, res) => {
  axios
    .post('https://api.uptimerobot.com/v2/getMonitors', {
      api_key: `${UPTIME_ROBOT_KEY}`,
      all_time_uptime_ratio: 1
    })
    .then(response =>
      res.status(200).json({
        status: 'success',
        data: {
          averageUptime: _.meanBy(response.data.monitors, m =>
            parseInt(m.all_time_uptime_ratio)
          ),
          isDown: _.some(response.data.monitors, { status: 9 })
        }
      })
    )
    .catch(error =>
      res.status(500).json({
        status: 'failed',
        data: error
      })
    )
})

app.listen(process.env.API_PORT, () => {
  console.log(`App is running on ${process.env.API_PORT}`)
})
