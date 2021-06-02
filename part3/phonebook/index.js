const { request, response } = require('express')
const express = require('express')
const app = express()

let personsData = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
]
app.get('/', (request, response) => {
    response.send('<h1>Hello</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(personsData)
})

app.get('/api/persons/:id', (request, response) => {
    const id = +request.params.id
    const person = personsData.find(person => person.id === id)
    person ? response.json(person) : response.status(404).end()
})

app.get('/info', (request, response) => {
    const personsNumber = personsData.length
    const date = new Date
    response.send(`<p>Phonebook has info for ${personsNumber} people<p/> 
   <p> ${date}</p> `)
})

const PORT = 3001
app.listen((PORT), () => {
    console.log('server running on ', PORT)
})

