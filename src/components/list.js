import React, { Component } from 'react';
import PropTypes from 'prop-types';


class List extends Component{
	constructor(props){
		super(props);
		this.state = {
			finished: false
		}
		this.key = this.props.key;
		// this.handleRemove = this.handleRemove.bind(this);
	}

	componentDidMount(){
		this.setState({finished: this.props.finished })
	}

	componentDidUpdate(){
	}


	toggleFinished(){
	    let change = !this.state.finished
	    this.setState({finished: change}); 
	    let updateThis = this.props.firebase.database().ref('List/'+this.props.itemKey);
	    updateThis.ref.update({ finished: change});
	    console.log("Finished set to "+ change);	      
	  }

	removeItem(item){
		let itemKey = this.props.itemKey;
		console.log(itemKey +" removed");
      this.props.ListRef.child(itemKey).remove()
  	}

	render(){
		return(
			<div 
				key={this.props.itemKey} 
				className={this.state.finished?(
					"finishedStyle border border-danger bg-dark rounded serif"
					):(
					"notFinishedStyle border border-primary bg-light rounded serif"
				)}
			>
				<p>{this.props.title} </p>
				<button
					className={this.state.finished?(
							"btn btn-dark btn-outline-danger serif"
						):(
							"btn btn-light btn-outline-primary serif"
					)}
					
					onClick={(e)=>this.toggleFinished()}
				>{this.state.finished?
					("Uncross it ")
					:("Cross it off")
				}</button>
				<button
					className={this.state.finished?(
							"btn btn-dark btn-outline-danger serif"
						):(
							"btn btn-light btn-outline-primary serif"
					)}
					onClick={(e)=>this.removeItem(e)}
				> Delete </button>
			</div>
		)
	}
}


export default List;