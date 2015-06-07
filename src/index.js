import React from 'react';

export default class extends React.Component {

    constructor(props, state){
        super(props, state);

        if(!props.parent){
            throw new Error('No parent provided to a SubComponent');
        }

        this.state = this.props.parent.state;
    }

    setState(data) {
        this.props.parent.setState(data);
    }

    componentWillReceiveProps(){
        super.setState(this.props.parent.state);
    }
}