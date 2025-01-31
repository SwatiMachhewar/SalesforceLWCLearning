// Array Methods:
let arr = [2,3,5,7,9,10]

// Below is the Syntax which is similar for all methods:
// arr.methodName(function(currentItem, index, actualArray){

// })

// 1.map(): map() method is used to transform an array. ==>

// interview question: map loop always returns an array.
console.log(`1. map() Method:`)
let newArray = arr.map(function(currentItem, index, array){
    console.log(`currentItem is: ${currentItem} index is: ${index} array is: ${array}`)
    return currentItem*2 
})
console.log(arr) //Old Array
console.log(newArray) //New Array

// OR

// let newArray = arr.map(function(currentItem, index, array){
//     console.log(`currentItem is: ${currentItem} index is: ${index} array is: ${array}`)
//     let CT = currentItem*2
//     console.log('New Array:')
//     console.log(`currentItem is: ${CT} index is: ${index}`)
//     console.log('\n')
//     return currentItem*2 
// })
// console.log(newArray)

// 2.filter(): for example, in "arr" array, I want the value which is greater than 5 ==>
console.log(`\n`)
console.log(`2. filter() Method:`)
let filteredValues = arr.filter(function(currentItem, index, array){
    return currentItem > 5
})
console.log(`Vaalues which are greater than 5 are: ${filteredValues}`)

// 3.every(): The every() method checks if all elements in an array pass a test (provided as a function). 
// It returns true if the function returns true for all elements; otherwise, it returns false.
// it checks if every element in the array are passing the condition or not ==>
// Check all the members which are greater than 18 age or not, which are available in the array.
// in below example every() method returns false because not all members are older than 18. 
console.log(`\n`)
console.log(`3. every() Method:`)
let age = [32,33,18,40]
let isAllAdult = age.every(function(currentItem, index, array){
    return currentItem > 18
})
console.log(`is all are adults: ${isAllAdult}`)

// 4.some(): The some() method checks if at least one element in an array passes a 
// test (provided as a function). It returns true if it finds an element for which 
// the provided function returns true; otherwise, it returns false.
// In this below example, some() checks if there is any even number in the numbers array. 
// Since 2 and 4 are even, it returns true.
console.log(`\n`)
console.log(`4. some() Method:`)
let numbers = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers.some(function(currentItem, index, array){
    return currentItem % 2 === 0
})
console.log(hasEvenNumber) // Output: true

// 5.sort: sort() methods sorts the values in ascending order and descending order.
// sorting of Strings:
console.log(`\n`)
console.log(`5. sort() Method:`)
var names = ["Swati","Ritikesh","Lata","Shankar"]
console.log(names.sort())
// sorting of Numbers in ascending order:
var points = [10,23,44,35,65,78]
let sortedValues = points.sort(function(a,b){
    return a-b
})
console.log(sortedValues) //O/P: [10, 23, 35, 44, 65, 78]
// Note: 
// points.sort(function(a, b) { return a - b; }): This sorts the points array in ascending order.
// function(a, b): This is a comparison function used by the sort() method.
// return a - b: This tells the sort method to sort the array in ascending order.
// If a is less than b, a - b will be negative, so a comes before b.
// If a is greater than b, a - b will be positive, so a comes after b.
// If a is equal to b, a - b will be zero, so their order remains unchanged.

// sorting of Numbers in descending order:
var points = [10,23,44,35,65,78]
let sortedValues1 = points.sort(function(a,b){
    return b-a
})
console.log(sortedValues1) //O/P: [78, 65, 44, 35, 23, 10]

// 6. reduce(): thid method reduce the array to a single value. 
// Note:to use this method first we always have to intialize the value i.e., at the end of the function 
// we have to add ",0" and also we have to add one more parameter for accumulation (for calculation, 
// to make array to single value). in our example we used parameter named "total".
console.log(`\n`)
console.log(`6. reduce() Method:`)
let num = [12,8,10]
let sum = num.reduce(function(total, currentItem, index, array){
    return total+currentItem
},0)
console.log(sum) //OP: 30

// 7. forEach(): its like for loop
console.log(`\n`)
console.log(`7. forEach() Method:`)
let num1 = [12,3,4,5]
num1.forEach(function(currentItem, index, array){
    console.log(currentItem) 
})
// O/P:
// 12
// 3
// 4
// 5