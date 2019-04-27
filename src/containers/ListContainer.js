import React, { Component } from 'react';
import List from '../components/list';
import firebase from 'firebase';
import 'firebase/database';


class ListContainer extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	    this.removeItem = this.removeItem.bind(this);
	    this.ListRef = firebase.database().ref('List');



	}

	removeItem(item){
	    this.ListRef.child(item.key).remove()
	}

	toggleFinished(item, index){
	    let change = !firebase.database().ref('List/'+item.key)
	    let updateThis = firebase.database().ref('List/'+item.key);
	    updateThis.ref.update({ finished: change});
	    console.log("Finished set to "+ change)   
	  }


	render(){
		return(
			<div className = "itemList">
				{thi}
			</div>
		)
	}
}

export default ListContainer;