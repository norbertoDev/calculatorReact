import React from 'react';
import '../css/index.css';
import Result from './Result';
import KeyPad from './keyPad';
// Components
class CalculatorApp extends React.Component {

    render() {
        return (
            <fieldset>
                <Result arrayExpression = {this.props.arrayExpression} 
                inputExpression={this.props.inputExpression}
                />
                <KeyPad onClick={this.props.onClick}
                    onSubmit={() => { this.props.onSubmit(); }} />
            </fieldset>
        );
    }
}

export default CalculatorApp;