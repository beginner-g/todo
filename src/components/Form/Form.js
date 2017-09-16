import React, { Component } from 'react'
import './form.css'
import Add from './add.svg'
class Form extends Component {
  state={
    val:''
  }
  handleChange=(e)=>{
    this.setState({
      val:e.target.value
    })
  }
  addsubmit=()=>{
    const {val} =this.state
    this.props.addform(val)
    this.setState({
      val:''
    })
  }
  render(){
    return(
      <div className="form">
        <div className="form-center">
          <input value={this.state.val} onChange={this.handleChange} type="text" placeholder='请输入'/>
        <img className='add' src={Add} alt="add" onClick={this.addsubmit}/>
        </div>
      </div>
    )
  }
}

export default Form
