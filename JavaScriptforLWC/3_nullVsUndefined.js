//null vs undefined example
var x = 100
var y = 100

//normal comparision:
console.log(x==y) //O/P: true
console.log("swati" == "swati") //O/P: true
console.log("swati" == "Swati") //O/P: false
console.log(3 == "3") //O/P: true

//strict comparision:
console.log(3 === "3") //O/P: false
console.log(x===y) //O/P: true as both value and data type is same
// console.log(swati === "swati")

//null vs undefined
var s
console.log(s) //undefined

var t = null
console.log(t) //null

console.log(s==t) //true
console.log(s===t) //false