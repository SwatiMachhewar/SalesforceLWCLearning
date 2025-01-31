// Data types in JS:
//1.number
var x = 10
console.log(typeof x) //O/P: number

var x = 10.67
console.log(typeof x) //O/P: number

//2.bigint
var y = 1034734837488647456n
console.log(typeof y) //O/P: bigint

//3.string
var name = 'Swati'
console.log(typeof name) //O/P: string

//4.boolean
var isMonday = true
console.log(typeof isMonday) //O/P: boolean

//5.undefined
var z
console.log(typeof z) //O/P: undefined

//6.object
var obj = {}
console.log(typeof obj) //O/P: object

var arr = []
console.log(typeof arr) //O/P: object

//7.symbol
var sym = Symbol("id")
console.log(typeof sym) //O/P: symbol

//8.null
var x1 = 10
x1 = null
console.log(typeof x1) //O/P: object

//9.String() Boolean()
console.log(typeof new String("Hey...")) //O/P: object