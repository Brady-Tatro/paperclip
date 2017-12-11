import React, { Component } from 'react'
import App from '../App'

class Download extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      byte: 0,
      currentUpgrade: 'bit'
    }
    this.downloadInfo = this.downloadInfo.bind(this);
    this.upgradeDownload = this.upgradeDownload.bind(this);
    this.makeBit = this.makeBit.bind(this);
    this.makeByte = this.makeByte.bind(this);
  }

  downloadInfo(){
    if(this.state.currentUpgrade == 'bit'){
      this.makeBit();
    } else if(this.state.currentUpgrade == 'byte'){
      this.makeByte();
    }
  }

  makeBit(){
    this.setState({ number: this.state.number + 1 })
    if(((this.state.number + 1) % 8) === 0){
      this.setState({byte: this.state.byte + 1, number: 0})
    }
  }

  makeByte(){
    this.setState({byte: this.state.byte + 1})
  }
  
  upgradeDownload(){
    this.setState({currentUpgrade: 'byte'})
  }

  render(){

    let byteUpdgrade;
    if(this.state.byte >= 2 && this.state.currentUpgrade == 'bit'){
      byteUpdgrade = <button onClick={this.upgradeDownload}> Dank </button>
    }

    return(
      <div>
        Bits: {this.state.number}
        <div>
          Bytes: {this.state.byte}
        </div>
        <div>
          <button onClick={this.downloadInfo}>
            Download
          </button>
        </div>
        {byteUpdgrade}
      </div>
    )
  }
}
export default Download;
