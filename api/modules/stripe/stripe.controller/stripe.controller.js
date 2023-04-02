const stripe = require("stripe")(process.env.STRIPE_KEY)




const Payment = async (req, res) => {
    try {
        stripe.charges.create(
            {
                source: req.body.tokenId,
                amount: req.body.amount,
                currency: "usd",
            },
            (stripeErr, stripeRes) => {
                if (stripeErr) {
                    res.status(500).json({ message: "stripeErr", stripeErr });
                } else {
                    res.status(500).json({ message: "stripeRes", stripeRes });
                }
            }
        )

    } catch (error) {
        res.json({ message: "Error Payment", error });
    }
};

module.exports = { Payment }