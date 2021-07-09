  
const initialState = {
    array:[],
    text: '0'
}

export const evaluateResult = (state = initialState, action) => {
    let newState = action.text;
    switch (action.type) {
        case 'EVALUATE':
            const newArray = [...state.array];
            newArray.splice(state.array.length,0,eval(newState).toString());
            return {
                ...state,
                array: newArray,
                text:  eval(newState).toString()
            }
            

        case 'DISPLAY':
            return {
               ...state,
               text:newState
            }
        default:
            return state;
    }
};