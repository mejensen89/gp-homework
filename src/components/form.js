import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Form extends Component{
	constructor(props){
		super(props);

	}

	//value={this.props.title}

	render(){
		
		return(
			<form
				onSubmit={(e)=>{this.props.createItem(e)} }
			>
				<div className="form-group"> 
					<input 
						ref="title" 
						type="text"
						name="title"	
						placeholder="Enter a To Do"									
						onChange={this.props.handleInput}
					/>
				<input
					className="btn btn-light btn-outline-primary"
					type="submit"
					value="+"
				/>
				</div>
			</form>
		)
	}
}

Form.protoTypes = {
	handleInput: PropTypes.string,
	
}

export default Form;