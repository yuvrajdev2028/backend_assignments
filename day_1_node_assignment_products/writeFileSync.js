const fs = require('fs');
function loadData()
{
    // console.log('we are starting with loadData() method....');
    let products = fs.readFileSync('./backups/backup_products.json', {encoding: 'utf8'}); // array of data comingfrom json file
    return JSON.parse(products.toString())
}

function writeData(id,name,category,price,inStock,rating){
    // console.log('we are starting with writeData() method....');
    let products = loadData();  // array in which we are pulling the recrods from customer.json
    products.push({
        "id": id,
        "name": name,
        "category": category,
        "price": price,
        "inStock": inStock,
        "rating": rating
    });
    fs.writeFileSync('products.json',JSON.stringify(products));
}

module.exports={
    load: loadData,
    writeProduct: writeData
}