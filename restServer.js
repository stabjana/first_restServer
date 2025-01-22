'use strict';

const express = require('express');
const app = express();

const cors = require('cors');

const { port, host } = require('./config.json');

const Datastorage = require('./storageLayer/dataStorageLayer');
const storage = new Datastorage();

app.use(cors());
app.use(express.json()); // need to get json data to server

app.get('/api', (req, res) => res.json(storage.RESOURCE)); // server based on the resource

app.get(`/api/${storage.RESOURCE}`, (req, res) =>
    storage.getAll().then(result => res.json(result))
);

app.all('*', (req, res) => res.json('not supported')); // if you put some other route

app.listen(port, host, () => console.log(`Restserver ${host}:${port} serving`));