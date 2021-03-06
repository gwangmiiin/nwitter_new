import React, { Component } from 'react'

export default class Gugudan extends Component {
  state ={
    first : Math.ceil(Math.random()*9),
    second : Math.ceil(Math.random()*9),
    value : '',
    result : '',
    result_value : ''
  }
  onChange = (e) => {
    this.setState({
      value : e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    if(this.state.value == this.state.first * this.state.second){
      this.setState({
        result : '정답!' ,
        first : Math.ceil(Math.random()*9),
        second : Math.ceil(Math.random()*9),
        value : '',
        result_value : this.state.first * this.state.second
      })
    } else{
      this.setState({
        result : '땡!',
        value : '',
        result_value : this.state.first * this.state.second
      })
    }
  }
  render() {
    return (
      <>
        <div>{this.state.first} 곱하기 {this.state.second} 은(는)?</div>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.value} onChange = {this.onChange}/> <button>입력</button>
          <div>{this.state.result} : {this.state.result_value}</div>
        </form>
      </>
    )
  }
}
