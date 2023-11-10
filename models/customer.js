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
        return db.execute("select * from customer");
    }
    static findById(id)
    {
        return db.execute("select * from customer where CustomerID = ?", [id]);
    }
}