import React, { Component } from 'react'

export default class Mount extends Component {
    state = {
        number : 0 
    }
    constructor(props){
      super(props)
      console.log("constructor")
    }
    componentDidMount() {
      console.log("componentDidMount")
    }
    shouldComponentUpdate(nextProps, nextState){
      console.log("shouldComponentUpdate")
      //nextState.number === 2이면 render/componentWillUpdate / componentDidUpdate 작동
      console.log(nextState.number)
      if (nextState.number === 2){
        return false
      }
      return true
    } 
    componentWillUpdate(nextProps, nextState){
      console.log("componentWillUpdate")
    }
    componentDidUpdate(nextProps, nextState) {
      console.log("componentDidUpdate")
    }
    plus = () => {
      this.setState({
        number : this.state.number + 1
      })
    }
  render() {
    console.log("render")
    return (
      <div>
        <div>카운터값</div>
        <div>{this.state.number}</div>
        <div><button onClick = {this.plus}>누르세요</button></div>
      </div>
    )
  }
}
