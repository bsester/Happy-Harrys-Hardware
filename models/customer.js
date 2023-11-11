const db = require("../util/database");

module.exports = class Customer
{
    constructor(name, email)
    {
        this.name = name;
        this.email = email;
    }
    save()
    {
        return db.execute('insert into customer (name, email) ' +
            'values (? ?)',
            [this.name, this.email]
        )
    }
    static delete(id)
    {
        return db.execute("delete from customer where CustomerID = ?", [id]);
    }
    static fetchAll()
    {
        return db.execute(
            "SELECT s.SalesID, c.CustomerName, c.CustomerEmail, i.ItemName, s.Quantity, i.ItemPrice * s.Quantity AS Total " +
            "FROM sales s JOIN customer c ON s.CustomerID = c.CustomerID " +
            "JOIN item i ON s.ItemID = i.ItemID ");
    }
    static fetchTopCustomers(num)
    {
        return db.execute(
            "SELECT s.SalesID, c.CustomerName, i.ItemName, s.Quantity, i.ItemPrice * s.Quantity AS Total " +
            "FROM sales s JOIN customer c ON s.CustomerID = c.CustomerID " +
            "JOIN item i ON s.ItemID = i.ItemID " +
            "ORDER BY `Total` DESC " +
            "LIMIT ?", [num]);
    }
    static findById(id)
    {
        return db.execute("select * from customer where CustomerID = ?", [id]);
    }
}