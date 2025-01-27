// Object/JSON Operations in JavaScript ==>

let obj = {
    Name: "Swati",
    Age: 26,
    DOB: "7/12/1998",
    role: "Salesforce Developer"
}
console.log(obj) //O/P: {Name: 'Swati', Age: 26, DOB: '7/12/1998', role: 'Salesforce Developer'}

// 1. Object.keys():
console.log(Object.keys(obj)) //O/P: (4) ['Name', 'Age', 'DOB', 'role']

// 2. Object.values():
console.log(Object.values(obj)) //O/P: (4) ['Swati', 26, '7/12/1998', 'Salesforce Developer']

// 3. JSON.stringify(): 
// So in above we have one object with name "obj".
// so now if we want to convert this object to String we will use "JSON.stringify()"
console.log(JSON.stringify(obj)) //O/P: {"Name":"Swati","Age":26,"DOB":"7/12/1998","role":"Salesforce Developer"}

// 4. JSON.parse():
// if we want to convert this String to Object we will use "JSON.parse()"
let str = JSON.stringify(obj)
console.log(JSON.parse(str)) //O/P: {Name: 'Swati', Age: 26, DOB: '7/12/1998', role: 'Salesforce Developer'}