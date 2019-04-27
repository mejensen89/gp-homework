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

	componentDidUpdate(prevState, prevProps){
		if(prevState !== this.state){
			console.log('List item updated - state')
		} else if (prevProps !== this.props){
			console.log('List item updated - props')
		}
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
					"finishedStyle"
					):(
					"notFinishedStyle"
				)}
			>
				<p> Title: {this.props.title} </p>
				<button
					onClick={(e)=>this.toggleFinished()}
				>{this.state.finished?
					("Mark as Incomplete")
					:("Mark as Complete")
				}</button>
				<button
					onClick={(e)=>this.removeItem(e)}
				> Delete </button>
			</div>
		)
	}
}

List.protoTypes={
	removeItem: PropTypes.func
}



export default List;