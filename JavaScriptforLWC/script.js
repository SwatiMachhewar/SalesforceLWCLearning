// Keywords in JavaScript:
// 1. var Keyword
// 2. let Keyword
// 3. const Keyword

// var Keyword:
// var course = "Zero to Hero in LWC...."
// console.log(course)
// course = "Zero to hero in Salesforce LWC!!!"
// console.log(course)
// var course = "Zero to Hero in LWC to learn Salesforce Development..."
// console.log(course)

// console.log(window)
// console.log(window.course)

// function abc(){
//     var anothercourse = "Hero in LWC"
//     var course = "Demo"
//     console.log(anothercourse)
// }

// abc()
// // console.log(course)
// // console.log(anothercourse)

// if(2==2){
//     var x = 10
// }

// console.log(window.x)

// let Keyword:

// let course = "Zero to Hero"
// course = "Zero to Hero in LWC"
// console.log(course)

// let course = "LWC"
// console.log(course)

// console.log(window)

// function abc(){
//     let x = "Swati"
//     console.log(x)
// }

// abc()
// console.log(x)

// if(2==2){
//     let xyz = "Salesforce LWC"
//     console.log(xyz)
// }

// console.log(xyz)

// const Keyword:
// const course = "Salesforce LWC........"
// console.log(course)

// // course = "LWC..." //It will show error: Assignment to constant variable.
// // console.log(course)

// const course = "Zero to Hero in Salesforce LWC...." //it will show error: Identifier 'course' has already been declared
// console.log(course)

function abc(){
    const x = 7
    console.log(x)
}

abc()
// console.log(x) // ==> throws error 
const x = 10
console.log(x)

if(7==7){
    const a = 20
    console.log(a)
}
// console.log(a)  // ==> throws error 
