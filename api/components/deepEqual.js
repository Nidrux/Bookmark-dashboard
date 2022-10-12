// I wrote this once, sounds usefull. time to use it!

const checkObject = (objectOne, objectTwo) => {
    let keysOfValueOne = Object.keys(objectOne);
    let keysOfValueTwo = Object.keys(objectTwo);
    if(keysOfValueOne.length !== keysOfValueTwo.length) return false;
    for(let i = 0; i < keysOfValueOne.length; i++) {
        if(keysOfValueOne[i] !== keysOfValueTwo[i]) return false;
        if(typeof objectOne[keysOfValueOne[i]] !== typeof objectTwo[keysOfValueTwo[i]]) return false;
        if(typeof objectOne[keysOfValueOne[i]] === "object" && typeof objectTwo[keysOfValueTwo[i]] === "object") return checkObject(objectOne[keysOfValueOne[i]], objectTwo[keysOfValueTwo[i]])
    }
    return true;
}
const deepEquals = (valueOne, valueTwo) => {
    if(typeof valueOne !== typeof valueTwo) return false;
    if(typeof valueOne !== "object" && typeof valueTwo !== "object") {
        let valueOneIsNaN = isNaN(valueOne) && typeof valueOne === "number";
        let valueTwoIsNaN = isNaN(valueTwo) && typeof valueTwo === "number";
        if(valueOneIsNaN && valueTwoIsNaN) return true;
    }
    if(Array.isArray(valueOne) && Array.isArray(valueTwo)) {
        if(valueOne.length !== valueTwo.length) return false;
        for(let i = 0; i < valueOne.length; i++) {
            if(typeof valueOne[i] !== typeof valueTwo[i]) return false;
        }
        return true;
    }
    if(typeof valueOne === "object" && typeof valueTwo === "object") {
        let keysOfValueOne = Object.keys(valueOne);
        let keysOfValueTwo = Object.keys(valueTwo);
        if(keysOfValueOne.length !== keysOfValueTwo.length) return false;
        for(let i = 0; i < keysOfValueOne.length; i++) {
            if(keysOfValueOne[i] !== keysOfValueTwo[i]) return false;
            if(typeof valueOne[keysOfValueOne[i]] !== typeof valueTwo[keysOfValueTwo[i]]) return false;
            if(typeof valueOne[keysOfValueOne[i]] === "object" && typeof valueTwo[keysOfValueTwo[i]] === "object") return checkObject(valueOne[keysOfValueOne[i]], valueTwo[keysOfValueTwo[i]])
        }
        return true;
    }

    return valueOne === valueTwo;
}
module.exports.deepEquals = deepEquals;