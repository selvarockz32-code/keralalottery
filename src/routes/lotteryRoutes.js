const express = require("express");
const router = express.Router();

const {
    getLatestResult
} = require("../controllers/lotteryController");

router.get("/latest", getLatestResult);

module.exports = router;