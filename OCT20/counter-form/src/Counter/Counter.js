//import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './Counter.css';
class Counter extends Component{
    constructor(props)  {
        super(props);
        this.state = {
            count: 0
        }
        //this.count = this.counter.bind(this);
    }
    counter=() =>   {
        this.setState({
            count:this.state.count +1
        });
    }

    componentDidMount()   {
        console.log('Mounted!');
    }
    componentDidUpdate()  {
        console.log('Updated!');
    }
    render()    {
        let {count}=this.state
        return(
            <div id="counter">
                <button onClick={this.counter}> Add</button>
                <h1> {count}</h1>
            </div>
        )
    }
}
export default Counter;