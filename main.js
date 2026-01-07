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
let parseToNumberExample = Number(l8)
let parseToBigIntExample = BigInt(l2)
console.log(l9)
console.log(l10)
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
// Search Array method 
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
// 