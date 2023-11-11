const Customer = require("../models/customer");
const Sale = require("../models/sale");
const Item = require("../models/item");
exports.getCustomers = ( req, res, next ) =>
{
    Customer.fetchAll()
        .then((rows, fieldData) =>
        {
           let result = rows[0];
           res.status(200).json({
                result
                                })

        })
}
exports.getTopCustomers = ( req, res, next ) =>
{
    Customer.fetchTopCustomers(5)
        .then((rows, fieldData) =>
        {
            let result = rows[0];
            res.status(200).json({
                result
            })

        })
}
exports.getItems = ( req, res, next ) =>
{
    Item.fetchAll()
        .then((rows, fieldData) =>
        {
            let result = rows[0];
            res.status(200).json({
                result
            })

        })
}
exports.getTopItems = ( req, res, next ) =>
{
    Item.fetchTopItems(5)
        .then((rows, fieldData) =>
        {
            let result = rows[0];
            res.status(200).json({
                result
            })

        })
}
exports.getSales = ( req, res, next ) =>
{
    Sale.fetchAll()
        .then((rows, fieldData) =>
        {
            console.log(rows);
            let result = rows[0];
            res.status(200).json({
                result
            })

        })
}
exports.getTopMonths = ( req, res, next ) =>
{
    Sale.fetchTopMonths(5)
        .then((rows, fieldData) =>
        {
            let result = rows[0];
            res.status(200).json({
                result
            })

        })
}