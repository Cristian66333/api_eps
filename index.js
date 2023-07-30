const express = require('express')

require('./drivers/connect-db')

const app = express()

app.set('PORT',process.env.PORT || 3000)

app.use(express.json())

app.use('/doctors', require('./routes/doctors'))
app.use('/offices', require('./routes/offices'))
app.use('/assigments', require('./routes/assigments'))
app.use('/specialities', require('./routes/specialities'))



app.listen(app.get('PORT'), ()=>console.log(`Server listen to port ${app.get('PORT')}`))



