// CalculatorContainer is the container class for <CalculatorApp />
// that passes the props value to <CalculatorApp /> required for 
// presentational components <FinalResult /> and <KeyPad />
import { connect } from 'react-redux';
import { getDisplayAction, getEvaluateAction } from '../actions/index';
import CalculatorApp from '../components/CalculatorApp';
import { isSuffixAnOperator, validateInput } from '../helper/validatorHelper';



let storeState = '';

const arrayToInput = (array) => {
    let result = '';
    if(array.length > 0){
       result += array.toString()
        return result;
    }else{
       return result = '0';
    }
    
}

const evaluateExpression = (dispatch) => {
    if (!isSuffixAnOperator(storeState.text.toString())) {
        dispatch(getEvaluateAction(storeState.array,storeState.text)); // 
        console.log("storeState despues de evaluate");
        console.log(storeState);
    }
}

const mapStateToProps = (state) => {
    storeState = state;
    let newArrayExpression = arrayToInput(state.array);
    return {
        arrayExpression: newArrayExpression.toString(),
        inputExpression: state.text
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (text) => {
            let input = storeState.text.toString();
            let array = storeState.array;

            let store = validateInput(array,input,text);
            console.log("STORE");
            console.log(store);
            dispatch(getDisplayAction(store.array,store.input));
        },
        onSubmit: () => {
            evaluateExpression(dispatch);
        }
    };
};


export const CalculatorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculatorApp);