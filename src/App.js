/**************Imports**************/

  import React, { Component } from 'react';
  import firebase from 'firebase';
  import FormContainer from './containers/formContainer';
  import Counter from './components/counter';
  import List from './components/list';
  import fire from './utils/config';

/**************Constructor**************/
  class App extends Component{
   
     constructor(props){
      super(props);
      this.state={
        newList: [],
        title: ''
      }
      this.ListRef = firebase.database().ref('List');
      this.formatCount = this.formatCount.bind(this);  

    }

/**************Lifecycle Methods**************/

  componentDidMount(){
      this.ListRef.on('child_added', snapshot =>{
        const item = snapshot.val();
        item.key = snapshot.key
        this.setState({ newList: this.state.newList.concat(item)});
        
      });
      this.ListRef.on('child_removed', snapshot =>{
        this.setState({newList: this.state.newList.filter(item => item.key !== snapshot.key)})
      });
    } 

  componentDidUpdate(prevState){
    if(prevState.newList !== this.state.newList){
      console.log("App STATE updated")
    }
  } 

/**************Count Methods**************/
  formatCount(number){
    if(number ===0 ){
      return("There are 0 items in your to do list. Time to set a goal");
    } else if (number ===1){
      return("There is 1 item in your to do list. Almost done!");
    } else if (number >1){
      return("There are " + number+ " items in your to do list. Time to work");
    } else {
      return("Something is not right");
    }
  }


/**************Render Function**************/

  render(){
    return(
        <div className="container-fluid text-center">
          <h2> Genius Plaza To Do List </h2>
          <div className="flex-sm-column d-flex"> 
            <FormContainer
            />
               
          </div>
          {this.state.newList.length === 0?(
            <span></span>
            ):(
            <div>
              <h2>Your Current To Do List</h2>
              <Counter 
                count = {this.state.newList.length}
                formatCount = {this.formatCount}
                newList = {this.state.newList}
              />
            </div> 
          )}
          
          <div className="row">
            <div className="col-sm-4">
            </div>         
            <div className="col-sm-4 justify-content-center">
              
              {this.state.newList.map((item, index)=>
                <List 
                  indexKey={index}
                  itemKey={item.key}
                  finished={item.finished}
                  title ={item.title}
                  removeItem ={this.removeItem}
                  firebase = {firebase}
                  ListRef = {this.ListRef}
                />
              )}
            </div>
          </div>
        </div>
      )
  }
}

export default App;
