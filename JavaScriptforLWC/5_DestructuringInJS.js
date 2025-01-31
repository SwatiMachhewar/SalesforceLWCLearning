// Destructuring ==>

// 1. Array Destructuring:
let arr = ["Amazon", "Salesforce"]

// let company1 = arr[0]
// let company2 = arr[1]

// console.log(company1)
// console.log(company2)

// but what Destructuring say's, instead of writing this long code, we can make it shorthand as belwo
// So we can write same above in shorhand notation

let [company1, company2] = arr
console.log(company1)
console.log(company2)


// 2. Object Destructuring:
let options = {
    title: "Zero to Hero",
    age: 23,
    type: "CRM"
}

// var title = options.title
// var age = options.age
// var type = options.type

// console.log(title)
// console.log(age)
// console.log(type)

//but instead of doing this long code we can use below object destructuring.

let{title, age, type} = options

console.log(title)
console.log(age)
console.log(type)

// so this is shothand notation for object Destructuring.