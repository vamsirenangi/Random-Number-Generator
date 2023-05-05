// Write your code here

import {Component} from 'react'

import './index.css'

class Random extends Component {
  state = {
    num: 0,
  }

  onGenerateNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    console.log(randomNumber)
    this.setState({
      num: randomNumber,
    })
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Random Number</h1>
          <p>generate a random number betweeen 0 to 100</p>
          <button onClick={this.onGenerateNumber} type="button">
            generate
          </button>
          <h1 className="number">{num}</h1>
        </div>
      </div>
    )
  }
}

export default Random
