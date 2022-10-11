// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    mode: 'Light Mode',
    bgColor: 'color_dark',
    headingColor: 'head_light',
  }

  changeColorMode = () => {
    const {mode} = this.state
    if (mode === 'Light Mode') {
      this.setState({
        mode: 'Dark Mode',
        bgColor: 'color_light',
        headingColor: 'head_dark',
      })
    } else {
      this.setState({
        mode: 'Light Mode',
        bgColor: 'color_dark',
        headingColor: 'head_light',
      })
    }
  }

  render() {
    const {mode, bgColor, headingColor} = this.state
    return (
      <div className="bg_container">
        <div className={`${bgColor} main_container`}>
          <h1 className={headingColor}>Click To Change Mode</h1>
          <button type="button" onClick={this.changeColorMode}>
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
