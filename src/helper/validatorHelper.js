const operators = ["+", "-", "*", "/"];

const returnArray = (array) => { 
    let newArray = array;
    let firstElement = newArray.shift();
    newArray.push(firstElement);
    return newArray;
}

export const isSuffixAnOperator = (str) => {
    return operators.some((operator) => (str.endsWith(operator)));
};


const isSuffixZero = (input) => {
    return input.charAt(input.length - 1) === '0';
};


const replaceCharacter = (inputString, newCharacter) => {
    return inputString.slice(0, inputString.length - 1) + newCharacter;
};

export const validateInput = (array,input, text) => {

    if (input === 'Infinity' || (input.length === 1 &&
        (input.charAt(0) === '0' || isSuffixAnOperator(input.charAt(0))))) {
        input = '';
    }
    switch (text) {
        case "return":
            array = returnArray(array); 
            input = array[0].toString();
            break;
        case "clear":
            let nArray = [];
            array = nArray;
            input = '0';
            break;
        default:

            if (isSuffixAnOperator(input)) {
                if (isSuffixAnOperator(text)) {
                    return replaceCharacter(input, text);
                }
            } else if (isSuffixZero(input)) {

                if (isSuffixAnOperator(input.charAt(input.length - 2))) {
                    return replaceCharacter(input, text);
                }
            }

            input += text;
    }
    return {
        array: array,
        input: input
    }
};