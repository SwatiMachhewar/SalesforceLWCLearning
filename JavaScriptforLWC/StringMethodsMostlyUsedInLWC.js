//Below are the 7 String Methods which are mostly used in LWC:

let str = "Hello Guys I hope you all are doing great!!"

// 1. includes():
// include() method determines whether a string contains the character of specified string or not.
// So in above string "str", I want to check whether "hope" string is present or not
let check = str.includes("hope")
console.log(check) // O/P: true
let verify = str.includes("hopes")
console.log(verify) // O/P: false

// 2. indexOf():
// indexOf() method returns the position of the first occurrence of a specified value in a string.
// So here what we are doing, we are checking whether the "great" is available in "str", if yes
// what is the index of "great"
let index = str.indexOf("great")
console.log(index) //O/P: 36
let index1 = str.indexOf("good")
console.log(index1) //O/P: -1 means this "good" string is not available in the string.
//but the catch here is, it always returns the first occurence. 
// for example as below, in this case "doing" is present at 2 places. but it will take 1st "doing"
// index number always
let str1 = "Hi everyone! I hope all are doing great! and I am also doing good!"
let index2 = str1.indexOf("doing")
console.log(index2) //O/P: 28

// 3. startsWith():
// Determines whether a string starts/begins with the characters of a specified string.
console.log(str1.startsWith("Hi")) //O/P: true
console.log(str.startsWith("Hi")) //O/P: false
console.log(str.startsWith("Hello")) //O/P: true

// 4. Slice():
// This Method extract part of a string and returns the extracted part in a new string.
// i.e., it will extarct some part of string from long string
let newStr = str1.slice(0, 2)
console.log(newStr) // O/P: Hi
let newStr1 = str.slice(0,5)
console.log(newStr1) // O/P: Hello

// 5. toLowerCase():
// Convert string to lower case.
let Name = "MY NaME is SWATi"
console.log(Name.toLowerCase()) //O/P: my name is swati

// 6. toUpperCase():
// Convert string to upper case.
let MyName = "MY NaME is SWATi"
console.log(MyName.toUpperCase()) //O/P: MY NAME IS SWATI

// 7. trim():
// We heavily use this method, when we are doing some search related operation where you have input 
// field and users start typing something gibberish(Meaningless)
// So for example, let's say, user added below value "        Salesforce LWC            " 
// in searchText variable. So in this case it may create an issue in code. So we have to always 
// remove extra spaces from this string. or When we send it to server, we always trim the white 
// spaces. to remove white spaces we use trim() method.
// trim() method used to remove white spaces from both side of string.
let searchText = "        Salesforce LWC            "
console.log(searchText) //O/P: "        Salesforce LWC            "
console.log(searchText.trim()) //O/P: Salesforce LWC

// So these are the 7 types of string methods required in LWC.