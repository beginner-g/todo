import React, { Component } from 'react'
import './list.css'
class List extends Component {
  handlecomplete=(id)=>{
    this.props.completed(id)
  }
  render(){
    const {words}=this.props
    const list =words.map(t=>(
      <div key={t.id} onClick={()=>this.handlecomplete(t.id)} className={`li ${t.complete&&'complete1'}`}>{t.word}</div>
    ))
    return(
      <div className="List">
        <div className="content">
            {list}
        </div>
      </div>
    )
  }
}

export default List
