// Helper: Returns object, array, or undefined
const myTypeOf = function(collection) {
    let collectionType = undefined
    if(typeof(collection) === 'object') {
        collectionType = 'object'
        if(Array.isArray(collection)) {
            collectionType = 'array'
        }
    }
    return collectionType
}

// Helper: Create new array out of original collection
const collectionToArray = function(collection) {
    let collectionType = myTypeOf(collection)
    let newArray = []

    if(collectionType === 'object') {
        newArray = Object.values(collection)
    } else if(collectionType === 'array') {
        newArray = [...collection]
    } else {
        return undefined
    }

    return newArray
}

const myEach = function(collection, cb) {
    let newArray = collectionToArray(collection)
    if(newArray === undefined) {return undefined}

    // Iterate over newArray and pass items to the callback
    for(const item of newArray) {
        cb(item)
    }

    return collection

}

const myMap = function(collection, cb) {
    let newArray = collectionToArray(collection)
    if(newArray === undefined) {return undefined}

    // Iterate over newArray and update the values based on callback funciton
    for(let i = 0; i < newArray.length; i++) {
        newArray[i] = cb(newArray[i])
    }

    return newArray
}

const myReduce = function(collection, cb, acc = 0) {
    let newArray = collectionToArray(collection)
    if(newArray === undefined) {return undefined}

    // Iterate over newArray and update acc based on callback function
    for(const item of newArray) {
        acc = cb(acc, item)
    }

    return acc
}

const myFind = function(collection, predicate) {
    let newArray = collectionToArray(collection)
    if(newArray === undefined) {return undefined}

    // Iterate over newArray and stop based on callback function
    for(const item of newArray) {
        if(predicate(item) === true) {return item}
    }

    return undefined
}

const myFilter = function(collection, predicate) {
    let newArray = collectionToArray(collection)
    if(newArray === undefined) {return undefined}
    let filteredArray = []

    // Iterate over newArray and push values if they match the callback function
    for(const item of newArray) {
        if(predicate(item) === true) {
            filteredArray.push(item)
        }
    }

    return filteredArray
}

const mySize = function(collection) {
    let newArray = collectionToArray(collection)
    if(newArray === undefined) {return undefined}
    let size = 0

    // Iterate over newArray and count the size
    for(const item of newArray) {
        size++
    }

    return size
}

const myFirst = function(array, n = 0) {
    let newArray = []

    if (n === 0) {return array[0]}

    // Iterate over array n-times and push items to newArray
    for(let i = 0; i < n; i++) {
        if(array[i] === undefined) {break}
        newArray.push(array[i])
    }

    return newArray
}

const myLast = function(array, n = 0) {
    let newArray = []
    let arrayIndex = array.length - 1
    if (n === 0) {return array[arrayIndex]}
    
    // Iterate over array n-times and unshift items to newArray
    for(let i = 0; i < n ; i++) {
        if(array[arrayIndex] === undefined) {break}
        newArray.unshift(array[arrayIndex])
        arrayIndex--
    }

    return newArray
}

const myKeys = function(object) {
    let newArray = []
    
    // Iterate over object pushes key names to newArray
    for(const key in object) {
        newArray.push(key)
    }

    return newArray
}

const myValues = function(object) {
    let newArray = []
    
    // Iterate over object pushes values to newArray
    for(const key in object) {
        newArray.push(object[key])
    }

    return newArray
}