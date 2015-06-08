import React from 'react';

export default class extends React.Component {

    constructor(props, state){
        super(props, state);

        if(!props.parent){
            throw new Error('No parent provided to a SubComponent');
        }

        this.state = props.parent.state;
    }

    setState(data, callback) {
        this.props.parent.setState(data, callback);
    }

    componentWillReceiveProps(){
        super.setState(this.props.parent.state);
    }
}