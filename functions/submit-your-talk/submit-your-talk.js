const serverless = require('serverless-http')
const helmet = require('helmet')
const axios = require('axios')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(helmet())

app.post(
  '/.netlify/functions/submit-your-talk',
  bodyParser.json(),
  async (req, res, next) => {
    try {
      const {
        email = '',
        name = '',
        title = '',
        organization = '',
        proposedTitle = '',
      } = req.body

      console.log(
        'creating talk propose in slack',
        JSON.stringify({
          email,
        }),
      )

      let text = `New Talk submission:
Email: ${email}
Name: ${name}
Title: ${title}
Organization: ${organization}
Proposed Title: ${proposedTitle}
`

      console.log({ text })

      await axios.post(process.env.SLACK_HOOK_ENDPOINT, {
        text,
      })

      console.log('talk created in slack')

      return res.status(201).send({
        success: true,
      })
    } catch (err) {
      console.log('error creating talk submission in slack')
      console.error(err)
      res.status(500).send({
        message: err.message || err,
      })
    }
  },
)

module.exports.handler = serverless(app)
