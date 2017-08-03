import React, {Component} from 'react'

export default class Page3 extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <p>I am page 3. You asked for id : {this.props.match.params.id}</p>
        )
    }
}
