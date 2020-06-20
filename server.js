const express = require('express');
const path = require('path');
const {Person, Place, Thing, seed} = require('./server/index.js');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
});


app.get('/api/places', async(req,res) => {
    const places = await Place.findAll()
    res.send({
        places
    })
})

app.get('/api/things', async(req,res) => {
    const things = await Thing.findAll()
    res.send({
        things
    })
})

app.get('/api/people', async(req,res) => {
    const people = await Person.findAll()
    res.send({
        people
    })
})



app.post('/api/people', async (req, res) => {
    const {name} = req.body;
    
    const createdPerson = await Person.create({
        name
    })

    res.status(201).send({
        person: createdPerson,
        message: `Person ${name} was created succesfully!`
    })
})

app.post('/api/place', async (req, res) => {
    const {name} = req.body;
    
    const createdPlace = await Place.create({
        name
    })

    res.status(201).send({
        place: createdPlace,
        message: `Place ${name} was created succesfully!`
    })
})

app.post('/api/thing', async (req, res) => {
    const {name} = req.body;
    
    const createdThing = await Thing.create({
        name
    })

    res.status(201).send({
        thing: createdThing,
        message: `Thing ${name} was created succesfully!`
    })
})



return seed()
.then(() => app.listen(PORT, () => console.log('server running now')))
.then(() => {
    console.log('Application started successfully.');
})
.catch((e) => {
    console.log('Failed to start application.');
    throw e;
});