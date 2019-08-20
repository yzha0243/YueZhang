var express = require('express');
var router = express.Router();
var db = [];
var allColumn = "ID, Name, quantity, price, cost <br><br>";
//route parameters, push number into db
router.get('/newItem/:name/:quantity/:price', (req, res) => {
    var item = {
        newname: req.params.name,
        newID: Math.round(Math.random() * 1000),
        newquantity: req.params.quantity,
        newprice: req.params.price,
    };
    db.push(item);
    res.send("add successfully");
})
// list item
router.get('/listAllItem', function (req, res) {
    
    res.send(generateList(allColumn));
})
//warehouse value
router.get('/totalValue', function (req, res) {
    let total = 0;
    for (let i = 0; i <= db.length; i++) {
        cost = db[i].price * db[i].quantity;
        total += cost;
    }
    res.send("the warehouse value is" + total);
})

//delete item from db, splice
router.get('/deleteItem/:id', function (req, res) {
    let id = req.params.id;

    let index = -1;
    for (let i = 0; i < db.length; i++) {
        if (db[i].newID == id) {
            index = i;
            break;
        }
    }
    //if this id does not exist in the db
    let item = db[index];
    db.splice(index, 1);
    res.send("delete " + item.newID + "sucessfully <br> So,the current db is：" + generateList(allColumn));


})
function generateList(allColumn) {
    let temporary = allColumn;
    for (let i = 0; i < db.length; i++) {
        temporary += db[i].newID
            + "," + db[i].newname
            + "，" + db[i].newquantity
            + db[i].newprice + ","
            + db[i].newprice * db[i].newquantity + "<br>";


    }
    return temporary;
}

module.exports = router