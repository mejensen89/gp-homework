import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Form extends Component{
	constructor(props){
		super(props);

	}

	//value={this.props.title}

	render(){
		
		return(
			<form onSubmit={(e)=>{this.props.createItem(e)} }>
				<label> Enter your todo </label>
				<input  
					type="text"
					name="title"										
					onChange={this.props.handleInput}
				/>
				<input
					type="submit"
				/>
			</form>
		)
	}
}

Form.protoTypes = {
	handleInput: PropTypes.string,
	
}

export default Form;