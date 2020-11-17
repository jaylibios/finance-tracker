// Node packages
const express = require("express");
const router = express.Router();
const bp = require("body-parser");
const cors = require("cors");

// PostgreSQL connection
const pool = require("./dbconnect");

const app = express();

// Middleware
app.use(bp.json());
app.use(cors({
    'allowedHeaders': ['Content-Type'],
    'origin': '*',
    'preflightContinue': true
}));

const port = 3080;

app.get("/", (req, res) => {
    res.send("HOME");
});

// app.get("/", async(req, res) => {
//     try {

//         const all = await pool.query("SELECT * FROM test_table WHERE first_name = 'Johnn'");
//         res.json(all.rows);

//     } catch (err) {
//         console.log(err.message);
//     }
// });

// Router import
const expenseRouter = require("./routes/expenses");
app.use("/expenses", expenseRouter);

const registerRouter = require("./routes/register");
app.use("/register", registerRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});