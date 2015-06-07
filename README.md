# react-subcomponent
A stateless react component


# Usage

Parent that holds state:
```javascript
import React from 'react';
import Child from './child.js';

class Parent extends React.Component {

    constructor(props){
        super();

        this.state = {
            // some state
        }
    }
    render() {
        return (
            <Child parent={this}/>
        );
    }
}
```

Child that has no state but can access and set its parents state:
```javascript
import React from 'react';
import SubComponent from 'react-subcomponent';

class Child extends SubComponent {

    handleClick(){
        this.setState({}) // sets parents state
    }

    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>
                {this.state} // gets parents state
            </div>
        );
    }
}
```