import React from 'react';

class App extends React.Component {
    
    constructor(props){ //Mount
        super(props);
        console.log('Hello');
    }

    //state 정의
    state = {
        count: 0,
    };

    add = () => {
        this.setState( current => ({
            count: current.count+=1,
        }));
    };

    minus = () => {
        this.setState( current => ({
            count: current.count-=1,
        }));
    };

    componentDidMount(){//Mount
        console.log('component rendered');
    }

    componentDidUpdate(){ //Update
        console.log('I just updated');
    }

    componentWillUnmount(){ //Unmount
        console.log('Goodbye~');
    }

    render(){
        console.log('I am rendering');
        return (
            <div> 
                <h1>The num is {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;