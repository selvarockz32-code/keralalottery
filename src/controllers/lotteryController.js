const getLatestResult = (req, res) => {
    res.json({
        success: true,
        lottery: "Bhagyathara",
        message: "Latest lottery result"
    });
};

module.exports = {
    getLatestResult
};