import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../userService.js"
import Customer from "../models/customer.js"

console.log("User Component Yüklendi.")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Tuncer", "Rüstemoğlu", "Helsingborg")
let user2 = new User(2, "Muazes", "Rüstemoğlu", "Helsingborg")

userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))

//serService.getById()
//userService.list()

let customer = { id: 1 , firstName: "Engin"}

// Prototyping --> jS ' e sonradan böyle bir değer ekleyebiliyoruz. Bu yapının ismi budur..
customer.lastName = "Demiroğ"

console.log(customer.lastName)

console.log("-------------------------------------")
userService.load()


let customerToAdd = new Customer(1,"Serdar","Terzi","Ankara",25);
customerToAdd = "customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())