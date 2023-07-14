const express = require('express')

require('./drivers/connect-db')

const app = express()

app.set('PORT',process.env.PORT || 3000)

app.use(express.json())

app.use('/authors', require('./routes/authors'))



app.listen(app.get('PORT'), ()=>console.log(`Server listen to port ${app.get('PORT')}`))



