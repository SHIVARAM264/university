const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'dsu_university';

let db = null;
let client = null;

async function connectDB() {
    try {
        client = new MongoClient(uri);
        await client.connect();
        db = client.db(dbName);
        
        // Create collection if it doesn't exist
        await db.createCollection('applications');
        
        console.log('Connected to MongoDB');
        console.log('Database created:', dbName);
        return db;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

function getDB() {
    return db;
}

module.exports = { connectDB, getDB };