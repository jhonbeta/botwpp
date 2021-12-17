
const { application, Router } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
    res.send('Whatsapp api');
})


const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando puerto ${port}...`));