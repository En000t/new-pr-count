import React from 'react';
import Count from "./components/count/Count";
import Buttons from "./components/buttons/Buttons";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        console.log('props');
        this.state = {
            count: 0,
            data: null,
            value: 0
        };
    }

        haChange =(x)=> {
                this.setState({value: parseInt(x.target.value)});
        };
        haSubmit =(x)=> {
            const {count,value} = this.state;
            if (count + value >=0){
                this.setState({count: this.state.value + count})
            }
                x.preventDefault();
        };



    handler = (ii) => {
            const {count} = this.state;
            if(ii === 'reset'){
                this.setState({count: 0})
            }else if(ii+count>=0){
                this.setState({
                    count: this.state.count + ii
                })
            }
        };

    render() {
        const {msg} = this.props;
        const {count,value} = this.state;
        this.props.func();
        console.log('render');
        return (
            <div className="App">
                <h1>{msg}</h1>
                <Count count={count}/>
                <Buttons myFunc={this.handler} hacha={this.haChange} hasub={this.haSubmit} value={value}/>
            </div>
        );
    }
}

export default App;
