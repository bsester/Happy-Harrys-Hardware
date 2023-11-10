const Customer = require("../models/customer");
exports.getCustomers = ( req, res, next ) =>
{
    Customer.fetchAll()
        .then((rows, fieldData) =>
        {
           console.log("Rows = ");
           console.log(rows);
           let result = rows[0];
           res.status(200).json({
                result
                                })

        })
}