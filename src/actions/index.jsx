export const DISPLAY = 'DISPLAY';
export const EVALUATE = 'EVALUATE';


export const getDisplayAction = (array,text) => {
    return {
        type: DISPLAY,
        array: array,
        text: text
    }
};

export const getEvaluateAction = (array,text) => {
    return {
        type: EVALUATE,
        array: array,
        text: text
    }
}