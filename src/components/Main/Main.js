import React, { Component } from 'react'
import './main.css'
import List from '../List/List'
import Form from '../Form/Form'
import Action from '../Action/Action'
class Main extends Component {
  state={
    filter:'',
    words:[
      {id:1,
      word:'hello1',
      complete:false
      },
      {id:2,
      word:'hello2',
      complete:false
      }
    ]
  }
  addform=(val)=>{
    const words=this.state.words
    this.setState({
      words:[...words,{id:words.length+1,word:val,complete:false}]
    })
  }
  completed=(id)=>{
    const {words}=this.state
    let newWords=words.map(t=>{
      if(t.id===id){
        return {...t,complete:true}
      }
      return t
    })
    this.setState({
      words:newWords
    })
  }
  filter=(str)=>{
    console.log(str)
    if(str==='all'){
      this.setState({
        filter:''
      })
    }
    if(str==='complete'){
      this.setState({
        filter:'complete'
      })
    }
  }
  render(){
    const {words,filter} =this.state
    let newWords =words
    if(filter){
        newWords =words.filter(t=>{
        return t.complete===true
      })
    }
    return(
      <div className="main">
        <div className="header">
          <h1>Hello world</h1>
        </div>
        <List words={newWords} completed={this.completed}/>
      <Form
        addform={this.addform}
      />
        <Action filter={this.filter}/>
      </div>
    )
  }
}

export default Main
