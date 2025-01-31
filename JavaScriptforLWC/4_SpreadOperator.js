//Spread Operator (Different Approaches with array) ==>
//1. array
var arr = ["a","b","c"]
console.log(arr)

//array index start from zer
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

//to add value to array use "push" operator
arr.push("3")
console.log(arr)

//2. Object:
//object always works in key and value pair
var obj = {
    "full name":"Swati Shankar Machhewar",
    "name":"Swati",
    "age":26
}
console.log(obj["full name"]) //Array Notation
console.log(obj.name) //Dot Notation
console.log(obj.age) //Dot Notation

//to add the value to object
obj.hobbies="Cricket"
console.log(obj)

//modify existing obj
obj.name="Ritikesh"
console.log(obj)

//3. Expanding of String:
let greeting = "Hello Everyone..."
let charList = [...greeting]
console.log(charList)
console.log(charList[0])
console.log(charList[6])

//4. Combining array:
let arr1 = ["Amazon","Google","Salesforce"]
let arr2 = ["Facebook","Instagram"]
let arr3 = [...arr1, ...arr2]
console.log(arr3)

//5. Addding values to an array:
let arr4 = ["a","b","c"]
let arr5 = [...arr4, "Swati"]
console.log(arr5)
//or
let arr6 = ["Ritikesh", ...arr4]
console.log(arr6)

//6. combining objects:
let obj1 = {name:"Swati Machhewar", age: 26}
let obj2 = {name:"Ritikesh Machhewar", age: 24}
let obj3 = {name:"Ritikesh M", age: 24, DOB: "11th May 2000"}
let obj4 = {...obj1, ...obj3}
console.log(obj3)

//7. Shallow copy:
var arr10 = ["x","y","z"]
arr10.push(20)
console.log(arr10)

var arr11 = arr10
arr11.push("Swati")
console.log(arr10)
console.log(arr11)
//So, here when we update the value in arr11, it automatically update the value in arr10 as well
//so, this is the problem, so to avoid this use spreading as below

var arr12 = ["x","y","z"]
var arr13 = [...arr12]
arr13.push("Swati")
console.log(arr12)
console.log(arr13)

//so this time it is not updating arr12 even we used push operator as we used Spreading.

//8. Nested copy
var arrofobjs = [
    {Name: "Swati"},
    {Name: "Ritikesh"}
]

var arrofobjs1 = [...arrofobjs]
console.log(arrofobjs1) //O/P: 0: {Name: 'Lata'} 1: {Name: 'Ritikesh'}
arrofobjs1[0].Name = "Lata"
console.log(arrofobjs) //O/P: 0: {Name: 'Lata'} 1: {Name: 'Ritikesh'}
console.log(arrofobjs1) //O/P: 0: {Name: 'Lata'} 1: {Name: 'Ritikesh'}

//so as we saw, in all above 3 console.log we have same O/P that is 
// 0: {Name: 'Lata'} 1: {Name: 'Ritikesh'}
// So, we understood that nested "Spread operator" will not be used for "nested copy"
// Hence we avoid "Spread operator", because it does not do the nested copy to do the nested copy.
//to do the nested copy, there is a hack

//Hack for Nested copy:
// convert the object to stringify 1st using "JSON.stringify()", in this we pass our nested object.
// then convert this again into object using "JSON.parse()"

var arrofobjs = [
    {Name: "Swati"},
    {Name: "Ritikesh"}
]

var arrofobjs1 = JSON.parse(JSON.stringify(arrofobjs))

console.log(arrofobjs)
console.log(arrofobjs1)

arrofobjs1[0].Name = "Lata"

console.log(arrofobjs)
console.log(arrofobjs1)

//So in above code, we can see that, even we updated arrofobjs1 object, it is not updated arrofobjs 
// i.e., our original object.