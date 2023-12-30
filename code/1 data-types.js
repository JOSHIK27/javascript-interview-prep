// we have 2 types on a high level
// primitive and referential

//primitive

const num = 12
const str = "nothing here"
const temp = undefined
const notAnNumber = NaN
const boo = true //false also
const bigint = 234567890123456789012345678901234567890
const nu_ll = null
const sym = Symbol("onvsdnv")

console.log(typeof num)
console.log(typeof str)
console.log(typeof temp)
console.log(typeof notAnNumber)
console.log(typeof boo)
console.log(typeof bigint)
console.log(typeof nu_ll)  // this prints as object
console.log(typeof sym)


// non primitive or referential (ususally store more than one value)

const arr = ['jo', 2019, null]

const obj = {
    name : "value"
}

console.log(typeof arr) // all non prim are object types
console.log(typeof obj)

const copied_obj = obj
copied_obj.name = 5;
console.log(obj) // value is change in both since it copied the reference

const copied_arr = arr;
copied_arr.push("just pushed")

console.log(arr)