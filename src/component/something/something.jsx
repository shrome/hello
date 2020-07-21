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
  render() {
    return (
      <section>
        <Card/>
        <Card/>
      </section>
    );
  }
}

class NewInput extends React.Component{
    render() {
        return (
            <div>
              <Card/>
            </div>
        );
    }
}
export const Appy = connect(mapStateToProps,mapDispatch)(Input)
export const Newinput = connect(mapStateToProps)(NewInput)
