mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']


const lowerCaseWords = (array) =>{
    const stringArray = array.filter((item) => typeof item === 'string')
    const resultArray = stringArray.map(item => item.toLowerCase());
    return resultArray;
}

console.log(lowerCaseWords(mixedArray));