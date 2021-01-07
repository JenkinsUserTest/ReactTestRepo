import React from 'react';
class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    click=()=>{
       this.setState({counter:this.state.counter+1})
    }
    render(){
        return(
            <div>
            <p>{this.state.counter}</p>
            <button onClick={this.click}>Click</button>
            </div>
        );
    }
}
export default Counter;