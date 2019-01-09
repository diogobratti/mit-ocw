const express = require('express')
const app = express()

app.use(express.static('public'));

app.set('view engine', 'ejs')


app.use(require('./routes'));

app.listen(process.env.PORT || 3333, function () {
  console.log('App listening on port 3333!')
})