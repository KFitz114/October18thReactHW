//import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './Form.css';
class Form extends Component  {
    constructor(props)  {
        super(props);
        this.state = {
            value: ''
        };
        // this.userInput = this.userInput.bind(this);
        // this.userInput2 = this.userInput2.bind(this);
        // this.inputSubmit = this.inputSubmit.bind(this);
        
    }
    userInput = (event) =>  {
        this.setState({value: event.target.value});
    }
    userInput2 = (event) =>   {
        this.setState({value2: event.target.value});
    }
    inputSubmit = (event) =>  {
        event.preventDefault();
        console.log('Name: ' + this.state.value + ' | ID: ' + this.state.value2)
        }
    render() {
        return(
            <div id="Form">
                <form onSubmit={this.inputSubmit}>
                    <label> Name: </label>
                    <input type="text" value={this.state.value} onChange={this.userInput} />
                    <label> ID: </label>
                    <input type="text" value2={this.state.value2} onChange={this.userInput2} />
                    <input type="submit" value ="submit" />
                </form>
            </div>
        )
    }
}
export default Form;