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