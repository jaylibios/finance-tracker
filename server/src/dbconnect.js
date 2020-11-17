const { Pool } = require("pg");

const pool = new Pool({
    user: "doadmin",
    password: "lsqr8n7xwx20ta5i",
    host: "db-postgresql-nyc1-83577-do-user-4690071-0.b.db.ondigitalocean.com",
    port: 25060,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: false
    }
});

pool.query("SELECT NOW()", (err, res) => {
    console.log(err);
});

module.exports = pool;