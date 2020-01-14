const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Jeroen'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Den Haag',
        weather: 'It is snowing'
    })
})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(3000, () => {
    console.log('server is up')
})