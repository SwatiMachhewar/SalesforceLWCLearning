// String Interpolation
//example 1:
var name = "Sales"
var name1 = "force"
console.log(name+name1)

//example 2:
var firstname = "Swati"
var lastname = "Machhewar"
var age = 26
var myinfo = "My Name is: " + firstname + " " + lastname + " " + "and my age is: " + age
console.log(myinfo)

//example 3:
// in below case, it sould print a + b = 5 but its print 23. So this is the problem with 
// normal concatination using "+", hence we are using "String interpolation" to avoid this problem

var a = 2
var b = 3
var Result = "Sum of " + a + " and " + b + " is: " + a + b
console.log(Result)

//example 4 using "String interpolation":
var Name = "Swati"
var DOB = "7th Dec 1998"
var A = 100
var B = 200
console.log(`My name is: ${Name} and my Date of Birth is: ${DOB}. Addition of ${A} + ${B} = ${A+B}`)

// example 5 using "String interpolation":
var recordID = 992233441290
console.log(`https://salesforce.com/${recordID}`)