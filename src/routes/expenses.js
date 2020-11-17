// Expenses Route
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("EXPENSES HOME");
});

module.exports = router;