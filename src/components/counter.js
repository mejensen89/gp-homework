import React, { Component } from 'react';

class Counter extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		let count = this.props.count;
		return(
			<div className="text-align-center">
				<p>{this.props.formatCount(count)}</p>
			</div>
		)
	}
}

export default Counter;