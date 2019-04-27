import React, { Component } from 'react';
import Form from '../components/form';
import firebase from 'firebase';


class FormContainer extends Component{
	constructor(props){
		super(props);
		this.state={
			title: '',
			isValid: false
		}
		this.createItem = this.createItem.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.ListRef = firebase.database().ref('List');

	}
	
	createItem(e){

		if(this.state.title){
			this.ListRef.push({
		        title: this.state.title.trim(),
		        finished: false,         
		      }).catch(err=>{
		        console.log(err)
		    })
		} else (
			alert("Please enter a To Do before submitting")
		)	    
	  }

	handleInput(e){
	    this.setState({[e.target.name]: e.target.value});
	  }

	render(){
		return(
			<Form 
				createItem = {this.createItem}
				title = {this.state.title}
				handleInput= {this.handleInput}
			/>
		)
	}
}

export default FormContainer;