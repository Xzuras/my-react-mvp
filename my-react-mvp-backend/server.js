const express = require('express');
const app = express();
let cors = require('cors');

const config = require('./config')[process.env.NODE_ENV||'dev'];
const PORT = config.port;
const { Pool } = require('pg');
const pool = new Pool ({
    connectionString: config.connectionString
});
pool.connect();
app.use(cors());
app.use(express.json());

app.get('/api/instrument', (req,res) => {
    console.log('GET REQUEST');
    pool.query(`SELECT * FROM instrument;`)
        .then(result => {
            res.send(result.rows)
        })
        .catch(e => console.log(e.stack))
});

app.post ('/api/instrument/create', (req, res) => {

    console.log("POST");
    let createRow = req.body
    console.log(createRow);
    pool.query(`INSERT INTO instrument (kind, family, model) VALUES
    ('${createRow.kind}', '${createRow.family}', '${createRow.model}');`)
    .then (result => {
        res.send(result.rows);
    })
    .catch(e => console.log(e.stack));
});

app.delete('/api/instrument/delete/:id', (req, res) => {
    let instrumentId = req.params.id;
    
    console.log('Deleted ID#:', instrumentId)
    pool.query(`DELETE FROM instrument WHERE id = ${instrumentId};`)
    .then (res.send("DELETED"))
    .catch(e => console.log(e.stack));
});

app.patch ('/api/instrument/update/:id', (req, res) => {
    let instrumentId = req.params.id;
    let patchBody = req.body
    console.log("Updated Id:", instrumentId);
    pool.query(`UPDATE instrument SET kind = '${patchBody.kind}', family = '${patchBody.family}', model = '${patchBody.model}' Where id = ${instrumentId};`)
    .then (result => {
        res.send('UPDATED')
    })
    .catch(e => console.log(e.stack))
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});


