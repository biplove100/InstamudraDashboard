// Import necessary modules
const express = require("express");
const router = express.Router();
const TransactionModel = require("../TransactionSchema.js");
const { isLoggedIn } = require("../middleware.js");

// Verify Transaction Route
// This route allows a logged-in user to verify a transaction.
// When the user clicks 'Verify Now', their username will be stored in the 'verifiedBy' field.
router.post("/transactions/:id/verify", isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let transaction = await TransactionModel.findById(id);
        if (!transaction) {
            req.flash("failure", "Transaction not found.");
            return res.redirect("/transactions");
        }
        
        // Update the transaction to store the current user's username in 'verifiedBy'
        transaction.verifiedBy = req.user.username;
        await transaction.save();
        
        req.flash("success", "Transaction verified successfully.");
        res.redirect("/transactions");
    } catch (error) {
        console.error(error);
        req.flash("failure", "Error verifying transaction.");
        res.redirect("/transactions");
    }
});

module.exports = router;