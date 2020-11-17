// Register route
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("REGISTER HOME");
});

module.exports = router;