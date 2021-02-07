const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/contacts-db', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established')
})

const contactRoute = require('./api/routes/contact')
const userRoute = require('./api/routes/user')

const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.use('/api/contacts', contactRoute)
app.use('/api/users', userRoute)

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`)
})

const contacts = [
    { name: 'Juhan Ahamed', email: 'juhanahamed@gmail.com' },
    { name: 'HM Nayem', email: 'something@gmail.com' },
    { name: 'slavy', email: 'another@gmail.com' }
]