const db = require("../util/database");

module.exports = class Sale
{
    constructor(quantity, salesDate)
    {
        this.quantity = quantity;
        this.salesDate = salesDate;
    }
    save()
    {
        return db.execute('insert into item (salesDate, quantity) ' +
            'values (? ?)',
            [this.salesDate, this.quantity]
        )
    }
    static delete(id)
    {
        return db.execute("delete from sales where SalesID = ?", [id]);
    }
    static fetchAll()
    {
        return db.execute("SELECT i.ItemName, c.CustomerName, s.Quantity, DATE(s.SalesDate) AS Sales_Date, i.ItemPrice, s.Quantity * i.ItemPrice AS Total FROM sales s JOIN item i ON s.ItemID = i.ItemID JOIN customer c ON s.CustomerID = c.CustomerID WHERE MONTH(s.SalesDate) = 11 ORDER BY s.SalesDate");
    }
    static fetchTopMonths(num)
    {
        return db.execute("SELECT i.ItemID, i.ItemID, CONCAT(DATE_FORMAT(s.SalesDate, '%M'), ' ', DATE_FORMAT(s.SalesDate, '%Y')) AS month, SUM(s.Quantity * i.ItemPrice) AS Total FROM sales s JOIN item i ON s.ItemID = i.ItemID GROUP BY i.ItemID, i.ItemID, month ORDER BY `Total` DESC LIMIT ?", [num])
    }
    static findById(id)
    {
        return db.execute("select * from item where SalesID = ?", [id]);
    }
}