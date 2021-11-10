function addToCart(quantity, productName="Elma") {
    console.log("Sepete eklendi : ürün : " + productName  + " adet : " + quantity)
}

//addToCard("Elma")
addToCart(10)
//addToCard(15)

let sayHello = () => {
    console.log("Hello World.")   
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2!")
}
sayHello2()

function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)


let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : " + product.productName + " : Adet : " + product.quantity + " Tane :" + " Fiyat : " + product.unitPrice +" TL") 
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Armut", unitPrice:20, quantity:10}

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

// Product diye birşey tanılmlanmış olsa o seçilirdi fakat öyle birşey olmadığı için x producstan gelen değeri
// sonuç olarak üzerine alır..!
function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]
addToCart4(products)


function add(bisey,...numbers) { // "REST" Bu 3 nokta kullanılarak yapılan işlemin İsmi..
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total) // Toplamını yazdırdık.
    console.log(bisey)
}
add(20, 30)
//add(20, 30, 40)
//add(20, 30, 40, 50)

let numbers =  [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers)) // En büyük olanı verir.

 
let [icAnadolu,marmara,karadeniz, [icAnadoluSehirleri, marmaraSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)


let newProductName,newUnitPrice,newQuantity
({productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity} 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)


let populations = {
    x: 100,
    y: 200,
    z: 300
} 

let newX , newY, newZ
({x:newX, y:newY, z:newZ} = populations)
console.log(newY) 

