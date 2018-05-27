'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  get,
  set,
};

const databasePath = path.join(__dirname, '../assets/database.json');

async function get() {
    
    try {
        const json = await fs.readFileSync(databasePath, 'utf8');
        let data;
        try {
            data = await JSON.parse(json);            
        } catch (error) {
            await set(0);
            data = {
                vehicles: 0
            }
        }
        return data;
    } catch (error) {
        throw Error('Error while reading the database');
    }

}

async function set(number) {
    
    try {
        const json = JSON.stringify({
            vehicles: number
        });
        let dataWritten = false;
        await fs.writeFile(databasePath, json, 'utf8', () => dataWritten = true);
        return dataWritten;
    } catch (error) {
        throw Error('Error while writing on the database');
    }

}