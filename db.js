// db.js
import pkg from 'pg';
const { Pool } = pkg;



const pool = new Pool({
    user: 'postgres',
    host: 'localhost',         // or your remote DB host
    database: 'aksanti_db',
    password: '2747',
    port: 5432,                // default PostgreSQL port
});

module.exports = pool;


export default pool;
