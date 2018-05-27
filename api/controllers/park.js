'use strict';

const database = require('../helpers/database');

module.exports = {
    lotation,
    checkin,
    checkout,
};

function lotation(req, res) {
    
    database.get()
        .then((data) => res.json(JSON.stringify(data)))
        .catch((message) => res.status(500).json(JSON.stringify({ message })));

}

function checkin(req, res) {
    
    database.get()
        .then((data) => {
            data.vehicles += 1;
            database.set(data.vehicles);
            return data;
        })
        .then((data) => res.json(JSON.stringify(data)))
        .catch((error) => res.status(500).json(JSON.stringify({ message: error.message })));

}

function checkout(req, res) {
    
    database.get()
        .then((data) => {
            if (data.vehicles <= 0) {
                throw Error('There arent any vehicles at the park');
            }
            data.vehicles -= 1;
            database.set(data.vehicles);
            return data;
        })
        .then((data) => res.json(JSON.stringify(data)))
        .catch((error) => res.status(500).json(JSON.stringify({ message: error.message })));

}