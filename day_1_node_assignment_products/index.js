const readline = require('readline');
const wf = require('./writeFileSync');

const fs = require('fs')

const reader = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


function readProducts(){
    return wf.load()
}

function writeProducts(newProduct){
    let products = readProducts();
    products.push(newProduct);
    wf.writeProduct(newProduct.id,newProduct.name,newProduct.category,newProduct.price,newProduct.instock,newProduct.rating)
    createBackup();
}



function createBackup(){
    const data = fs.readFileSync('products.json','utf-8',(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            return JSON.parse(data);
        }
    })
    fs.writeFileSync('./backups/backup_products.json',data,(err)=>{
        console.log(err);
    })
}

function questionAsync(query) {
  return new Promise(resolve => {
    reader.question(query, answer => {
      resolve(answer);
    });
  });
}

async function getProductInput() {
    const newProduct={};
    newProduct.id = await questionAsync('Enter id: ');
    newProduct.name = await questionAsync('Enter name: ');
    newProduct.category = await questionAsync('Enter category: ');
    newProduct.price = await questionAsync('Enter price: ');
    const inStockInput = await questionAsync('Enter whether it is in stock (yes/no): ');
    newProduct.instock = inStockInput.trim().toLowerCase() === 'yes';
    newProduct.rating = await questionAsync('Enter rating: ');

    reader.close();

    writeProducts(newProduct);

  
}

// createBackup();
// getProductInput();
// console.log('New product:', newProduct);

const user1 = () =>{
    console.log("Synchronous read of user 1...")
    console.log(fs.readFileSync('./backups/backup_products.json',{encoding:'utf-8'}));
}

const user2 = () =>{
    console.log("Asynchronous read of user 2...")
    fs.readFile('./backups/backup_products.json',{encoding:'utf-8'},(err,data)=>{
        if(err) console.log(err)
        else console.log(data)
    });
}

const user3 = () =>{
    console.log("Asynchronous read of user 3...")
    fs.readFile('./backups/backup_products.json',{encoding:'utf-8'},(err,data)=>{
        if(err) console.log(err)
        else console.log(data)
    });
}

user1()
user2()
user3()
