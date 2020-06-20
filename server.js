const express = require('express');
const path = require('path');
const {Person, Place, Thing, seed} = require('./server/db/db.js');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
});

app.get('/api/people', async (req, res) => {
    const people = await Person.findAll();

    res.send({
        people,
    });
});

// // app.get('/api/thing', (req, res) => {
    
// // })

// // app.get('/api/place', (req, res) => {
    
// // })



seed()
.then(() => app.listen(PORT, () => console.log('server running now')))
.then(() => {
    console.log(chalk.greenBright('Application started successfully.'));
})
.catch((e) => {
    console.log(chalk.red('Failed to start application.'));

    throw e;
});