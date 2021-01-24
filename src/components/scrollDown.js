import React from 'react'
import scrollDown from '../img/scroll-down.png'
import scrollDown2 from '../img/scroll-down-2.png'

const ScrollDown = props => {
  return (
    <div className="scrollDown">
      <span className="scrollDown-title">
        {props.type === 'intro'
        ? 'scroll down to see more' 
        : 'keep scrolling, there is still more to come.'}
      </span>
      <img src={props.type === 'intro' ? scrollDown : scrollDown2} alt="scrollDown" />
    </div>
  )
}

export default ScrollDown