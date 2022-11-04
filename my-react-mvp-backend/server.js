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

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});


