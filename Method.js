const array1 =['fleich' , "fisch", "hanschen", "Ei", ]
const array2 =["ridoy", "sakib", "maruf"]

// Lenght
console.log(array1.length)

// tostring
const data = array1.toString()
console.log(data)

// Array.at 

console.log(array1.at(2))

// Array. join 

console.log(array1.join(" <=> "))

//  Array.push
array1.push('nudeln')
console.log(array1)

// Array.pop
array1.pop()
console.log(array1)

// Array.unshift 
array1.unshift('brotschen')
console.log(array1)

// Array.shift
array1.shift()
console.log(array1)

// Arrays.isArray
const value = Array.isArray(array1)
const value2 = Array.isArray(array2)
console.log(value)
console.log(value2)

// Array.delete 

const deleteindex = delete array2[2]
console.log(array2)