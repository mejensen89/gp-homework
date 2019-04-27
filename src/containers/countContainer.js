import React, { Component } from 'react';
import Counter from '../components/counter';

class CountContainer extends Component{
	constructor(props){
		super(props);
		this.formatter = this.formatter.bind(this);
	}

	formatter(){
		let number = this.props.count
		if(number === 1){
			return ("There is "+ number + "item in your to do list");
		} else if (number === 0){
			return("There aren't any items in your to do list. Try adding some now")
		} else if (number >1){
			return("there are "+number+" items in your to do list.")
		}
	}

	render(){
		return(
			<Counter 
				count= {this.props.count}
				formatter= {this.formatter}
			/>
		)
	}
}

export default CountContainer;