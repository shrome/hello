import React from 'react';
import { connect } from "react-redux"
import {Card} from './card.component'
import {mapStateToProps,mapDispatch} from "./../react-redux/react-redux.component"

class Input extends React.Component{
  constructor(props){
    super(props)
    this.state={
      input:""
    }
  }

  onChangeInput(e){
    e.preventDefault()
    this.setState({
      input:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault()
    this.props.addNewMessage(this.state.input)
    this.setState({
      input:''
    })
  }

  render() {
    return (
      <section>
        <div>
          <input type="text" value={this.state.input} onChange={this.onChangeInput.bind(this)} />
          <input type="submit" value="Add" onClick={this.onSubmit.bind(this)} />
        </div>
        <ul>
          {
          this.props.list.map((obj,idx) =>{
            return (<li key={idx} >{obj}</li>)
          })
          }
          
        </ul>
      </section>
    );
  }
}

class NewInput extends React.Component{
    render() {
        return (
            <ul>
              <Card/>
            </ul>
        );
    }
}
export const Appy = connect(mapStateToProps,mapDispatch)(Input)
export const Newinput = connect(mapStateToProps)(NewInput)
