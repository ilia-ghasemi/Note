{
        Name = "JS Note"
        CreateBy = "Ilia-Ghasemi"
        GitHub = "https://github.com/ilia-ghasemi"
}
// Variable & String
const constExample = 'This is some : Const'
var varExample = "This is some : Var"
let letExample = `This is some : Let`
console.log(constExample)
console.log(varExample)
console.log(letExample)
// Number 255
let numberExample1 = 255
let numberExample2 = 255.0
let numberExample3 = 0xff
let numberExample4 = 0b11111111
let numberExample5 = 0.255e3
console.log(numberExample1)
console.log(numberExample2)
console.log(numberExample3)
console.log(numberExample4)
console.log(numberExample5)
// Null
let nullExample = null
console.log(nullExample)
// BigInt
let bigIntExample = 100n
console.log(bigIntExample)
// BigInt -> Number & Number -> BigInt
let parseToNumberExample = Number(bigIntExample)
let parseToBigIntExample = BigInt(numberExample1)
console.log(parseToNumberExample)
console.log(parseToBigIntExample)
// Boolean
let booleanExample1 = false
let booleanExample2 = true
console.log(booleanExample1)
console.log(booleanExample2)
// Symbol 
let symbolExample = Symbol("unique")
console.log(symbolExample)
// typeof
console.log(typeof(symbolExample))
// Object
class WritingTool{
        constructor(color){
                this.color = color
        }
}
class Pen extends WritingTool{
        constructor(color,material){
                super(color)
                this.material = material
        }
        greet(){
               console.log(`This pen :{${this.color} | ${this.material}}`)  
        }
}
let objectExample = new Pen("red","blastic")
objectExample.greet()
console.log(objectExample)
// Map
let mapExample = new Map()
mapExample.set("a",1)
mapExample.set("b",2)
mapExample.set("c",3)
console.log(mapExample.get("a"))
mapExample.set("a",19)
console.log(mapExample.get("a"))
mapExample.delete("b")
console.log(mapExample.size)
// WeakMap
let weakMapExample = new WeakMap()
weakMapExample.set(mapExample , "Weakmap value")
console.log(weakMapExample.get(mapExample))
console.log(weakMapExample.has(mapExample))
weakMapExample.delete(mapExample)
console.log(weakMapExample.has(mapExample))
// Set
let setExample = new Set()
setExample.add(1)
setExample.add(2)
console.log(setExample)
setExample.add(2)
console.log(setExample)
console.log(setExample.size)
console.log(setExample.has(1))
console.log(setExample.has(4))
setExample.delete(2)
console.log(setExample.size)
// WeakSet
let weakSetExample = new WeakSet()
weakSetExample.add(setExample)
weakSetExample.add(weakMapExample)
console.log(weakSetExample.has(weakMapExample))
weakSetExample.delete(weakMapExample)
console.log(weakSetExample.has(weakMapExample))
// Array
let arrayExample1 = [1,2,2,3]
console.log(arrayExample1)
arrayExample1.push(4)
console.log(arrayExample1)
arrayExample1.unshift(0)
console.log(arrayExample1)
arrayExample1.pop()
console.log(arrayExample1)
arrayExample1.shift()
console.log(arrayExample1)
let arrayExample2 = arrayExample1.map((x) => x * 2)
console.log(arrayExample2)
let arrayExample3 = arrayExample1.filter((x) => x == 2)
console.log(arrayExample3)
console.log(arrayExample1.reverse())
console.log(arrayExample1.at(2))
console.log(arrayExample1.slice(2))
// Search Array method !
// Size Array
let sizeArrayExample1 = new Int8Array([-128,127]) // -128 ~ 127
let sizeArrayExample2 = new Uint8Array([0,255]) // 0 ~ 255
let sizeArrayExample3 = new Uint8ClampedArray([0,255]) // 0 ~ 255
let sizeArrayExample4 = new Int16Array([-32768 , 32767]) // -32768 ~ 32767
let sizeArrayExample5 = new Uint16Array([0 , 65535]) // 0 ~ 65535
let sizeArrayExample6 = new Int32Array([-2147483648 , 2147483647]) // -2147483648 ~ 2147483647
let sizeArrayExample7 = new Uint32Array([0 , 4294967295]) // 0 ~ 4294967295
let sizeArrayExample8 = new Float32Array([-3.4e38 , 3.4e38]) // -3.4e38 ~ 3.4e38
let sizeArrayExample9 = new Float64Array([-1.8e308 , 1.8e308]) // -1.8e308 ~ 1.8e308
let sizeArrayExample10 = new BigInt64Array() // -9223372036854775808n ~ 9223372036854775807n
// Equal
console.log("1" == 1)
console.log("1" == 2)
console.log(Object.is("12",'15'))
console.log(Object.is("12",15))
console.log("1" === "1")
console.log("1" === 1)
// Loop
// For Loop
for (var i = 0;i<5 ;i++){
        console.log(i)
}
// While Loop
let whileExample = 5
while (whileExample > 0){
        console.log(whileExample)
        whileExample--
}
// Do While Loop
let doWhileExample = ""
let doWhileCounter = 0
do {
        doWhileExample += doWhileCounter
        doWhileCounter++
}while(doWhileCounter < 5)
console.log(doWhileExample)
// Continue
let continueExample = ""
for (var i = 0; i <= 10;i++){
        if (i % 3 === 0){
                continue
        }
        continueExample += i
}
console.log(continueExample)
// Break
let breakExample = 0
while (true){
        if (breakExample === 5){
                break
        }
        console.log(breakExample)
        breakExample++
}
// For Of Loop
let forOfExample = ['a','b','c']
for (const i of forOfExample){
        console.log(i)
}
// For In Loop
let forInExample = {a:1,b:2,c:3}
for (let i in forInExample){
        console.log(`{${i} : ${forInExample[i]}}`)
}
// If & Else
let ifExample = parseInt(Math.random() * 100) // Create random Intiger from 0 to 100
if (ifExample % 3 === 0){
        console.log(`${ifExample} => 3 | ifExample`)
}
else if (ifExample % 3 === 1){
        console.log(`${ifExample} => 3 | ifExample - 1`)
}
else{
        console.log(`${ifExample} => 3 | ifExample + 1`)
}
// Switch
let switchExample = parseInt(Math.random() * 100) // Create random Intiger from 0 to 100
let switchExpression = switchExample % 4
switch (switchExpression){
        
        case 0:
                console.log(`${switchExample} => 4 | switchExample`)
                break
        case 1:
                console.log(`${switchExample} => 4 | switchExample - 1`)
                break
        case 2:
                console.log(`${switchExample} => 4 | switchExample - 2`)
                break
        case 3:
                console.log(`${switchExample} => 4 | switchExample - 3`)
                break
        default:
                console.log(`${switchExample} is Not Intiger`)
                break
}
console.log(switchExpression)
// Exception (throw , try ,catch , finally)
let exceptionExample = parseInt(Math.random() * 100) // Create random Intiger from 0 to 100

try {
        if (exceptionExample % 2){
                throw new Error("Its odd")
        }
        
}catch(e){
        console.log(e)
}finally{
      console.log(exceptionExample)  
}
// Error 
let errorExample1 = new Error("Some text")
let errorExample2 = new SyntaxError("Some text")
let errorExample3 = new AggregateError("Some text")
let errorExample4 = new ReferenceError("Some text")
let errorExample5 = new EvalError("Some text")
let errorExample6 = new TypeError("Some text")
let errorExample7 = new URIError("Some text")
let errorExample8 = new RangeError("Some text")
// Operators
// Short if
let shortIfExample = parseInt(Math.random() * 100) 
console.log(`${shortIfExample % 2 ? "Odd" : "Evan"} | ${shortIfExample}`)
// Comma 
let commaExample = 1
commaExample = (commaExample++ , commaExample)
console.log(commaExample)
// Unary
// Delete
let deleteExample1 = {
        firstName : "Ilia",
        lastName : "Ghasemi"
}
console.log(deleteExample1.firstName)
delete deleteExample1.firstName
console.log(deleteExample1.firstName)
// Void
let voidExample = void 1
console.log(voidExample)
void (function voidFunctionExample1() {
        console.log("Void Function Example 1")
}())
void function voidFunctionExample2() {
  console.log("Void Function Example 2");
};
try{
        voidFunctionExample2()
}catch(e){
        console.log("Void Function Example 2 Not Defined")
}
// Type Of
console.log(typeof 32)
console.log(typeof "Some Text")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof objectExample)
// Plus
console.log(+1)
console.log(+(-1))
console.log(+"")
console.log(+false)
console.log(+true)
console.log(+null)
console.log(+undefined)
// Minus
console.log(-(5))
console.log(-"5")
// Bitwise Not
let bitwiseExample1 = 5 // 00000000000000000000000000000101
let bitwiseExample2 = -3 // 11111111111111111111111111111101
console.log(~bitwiseExample1) // ~bitwiseExample1 = 11111111111111111111111111111010
console.log(~bitwiseExample2) // ~bitwiseExample2 = 11111111111111111111111111111101
// Logical NOT
console.log(`Not true : ${!true}`)
console.log(`Not false : ${!false}`)
// Await 
function Sleep(x,y){
        return new Promise((resolve) => {
                setTimeout(() => {
                        resolve(y);
                }, x * 1000);
})}
async function awaitExampleFunction() {
        let awaitExample = await Sleep(0,"Some Text")
        console.log(awaitExample)
}
awaitExampleFunction()
// Assignment
function addOne(){
        return 1
}
let assignmentExample = addOne()
console.log(assignmentExample)
assignmentExample += addOne()
console.log(assignmentExample)
assignmentExample -= addOne()
console.log(assignmentExample) 
// And Other Assignment Operators
// Comparison
console.log("2" == 2)
console.log(2 > 3)
console.log(2 < 3)
console.log(2 <= 3)
console.log(2 >= 3)
console.log(2 === "2")
console.log(2 !== "2")
console.log(2 != "2")
// Arithmetic
let arithmeticExample = 10
console.log(`{ 10 + 2 = ${10 + 2}}`)
console.log(`{ 10 - 2 = ${10 - 2}}`)
console.log(`{ 10 * 2 = ${10 * 2}}`)
console.log(`{ 10 ** 2 = ${10 ** 2}}`)
console.log(`{ 10 / 2 = ${10 / 2}}`)
console.log(`{ 10 % 2 = ${10 % 2}}`)
console.log(`{ arithmeticExample = ${arithmeticExample}}`)
arithmeticExample++
console.log(`{ arithmeticExample ++ = ${arithmeticExample}}`)
arithmeticExample--
console.log(`{ arithmeticExample -- = ${arithmeticExample}}`)
// Bitwise
console.log(true & true)
console.log(true & false)
console.log(true | true)
console.log(false | false)
console.log(true ^ true)
console.log(false ^ false)
console.log(true ^ false)
console.log(~true)
console.log(~false)
console.log(1 << 5)
console.log(1000 >> 5)
console.log(10000 >>> 5)
// Logical
console.log(true || true)
console.log(true || false)
console.log(true && true )
console.log(true && false)
console.log(!true)
console.log(!false)
console.log(0 ?? 42)
console.log(1 ?? 42)
// String
let stringExample = ""
for (var i = 0; i < 5 ; i++){
        stringExample += i
}
console.log(stringExample)
console.log("Some Text" + "Some Other Text " + stringExample)
// Function
// Normall Function
function functionExample1(arg1,arg2){
        return arg1 * arg2
}
console.log(functionExample1(2,5))
function functionExample2(...Arg){
        let ans = ""
        for (const i of Arg){
                ans += i
        }
        return ans
}
console.log(functionExample2("H","e" ,"l" ,"l","o"))
// Arrow Function
let arrowFunction = (x,y) => {return x*y}
console.log(arrowFunction(100 , 20));
(async() => {
        const l = 9
        const u = 1
        console.log(`x + y : ${l+u}`);
})();
let functionExample3 = (x,y) => {return x * y}
console.log(functionExample3(4,5))
// Functional Programming
function functionExample4(){
        var x = "function Example 4"
        function functionExample5(){
                console.log(x)
        }
        return functionExample5()
}
functionExample4()
let functionExample6 = (function (x,y,z){
        var vFE1 = x
        var vFE2 = y
        var vFE3 = z 
        function add(){
                return vFE1 + vFE2 + vFE3
        }
        function multi(){
                return vFE1 * vFE2 * vFE3
        }
        return {
                add : add(),
                multi : multi()
        }
})
console.log(functionExample6(2,3,4))
// DOM
