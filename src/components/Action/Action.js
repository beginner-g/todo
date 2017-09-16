import React, { Component } from 'react'
import './action.css'
import List from './list.svg'
import completed from './completed.svg'
class Action extends Component {
  handleList=(str)=>{
    this.props.filter(str)
  }
  render(){
    return(
      <div className="action">
        <div className="list1">
          <img onClick={()=>this.handleList('all')} src={List} alt="1"/>
        </div>
        <div className="completed">
          <img onClick={()=>this.handleList('complete')} src={completed} alt="1"/>
        </div>
      </div>
    )
  }
}

export default Action
