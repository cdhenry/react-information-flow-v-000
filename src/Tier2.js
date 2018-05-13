import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'

export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      childColor: getReducedColor(nextProps.color)
    })
  }

  updateChildColors = event => {
    event.stopPropagation()
    this.setState({
      childColor: getRandomColor()
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.props.handleChildClick} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.updateChildColors} />
        <Tier3 color={this.state.childColor} handleChildClick={this.updateChildColors} />
      </div>
    )
  }
}
