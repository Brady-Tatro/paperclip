import React, { Component } from 'react'
import App from '../App'

class Download extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      byte: 0
    }
    this.makeBit = this.makeBit.bind(this);
  }

  makeBit(){
    this.setState({ number: this.state.number + 1 })
    if(((this.state.number + 1) % 8) === 0){
      this.setState({byte: this.state.byte + 1, number: 0})
    }
  }

  render(){
    return(
      <div>
        Bits: {this.state.number}
        <div>
          Bytes: {this.state.byte}
        </div>
        <div>
          <button onClick={this.makeBit}>
          download bit
          </button>
        </div>
      </div>
    )
  }
}
export default Download;
