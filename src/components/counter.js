import React, { Component } from 'react';

class Counter extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		let count = this.props.count;
		return(
			<p>{this.props.formatCount(count)}</p>
		)
	}
}

export default Counter;