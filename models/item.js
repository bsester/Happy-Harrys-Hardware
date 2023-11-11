const db = require("../util/database");

module.exports = class Item
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }
    save()
    {
        return db.execute('insert into item (name, price) ' +
            'values (? ?)',
            [this.name, this.price]
        )
    }
    static delete(id)
    {
        return db.execute("delete from item where ItemID = ?", [id]);
    }
    static fetchAll()
    {
        return db.execute("SELECT i.ItemID, i.ItemName, SUM(s.Quantity * i.ItemPrice) AS Total " +
            "FROM sales s " +
            "JOIN item i ON s.ItemID = i.ItemID " +
            "GROUP BY i.ItemID, i.ItemName ");
    }
    static fetchTopItems(num)
    {
        return db.execute("SELECT i.ItemID, i.ItemName, SUM(s.Quantity * i.ItemPrice) AS Total " +
        "FROM sales s " +
        "JOIN item i ON s.ItemID = i.ItemID " +
        "GROUP BY i.ItemID, i.ItemName " +
        "ORDER BY Total DESC " +
        "LIMIT ?", [num]);
    }
    static findById(id)
    {
        return db.execute("select * from item where ItemID = ?", [id]);
    }
}