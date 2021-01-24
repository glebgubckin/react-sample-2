import React from 'react'
import Header from './components/header'
import ScrollDown from './components/scrollDown'

const App = () => {
  return (
    <div>
      <div className="intro">
        <Header />
        <ScrollDown type={'intro'} />
      </div>
      <div className="about">
        <Header />
        <div className="about__wrapper">
          <div className="image__container">
          </div>
          <div className="about__info">
            <h1 className="about__info-title">About me</h1>
            <p className="about__info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip 
              ex ea commodo consequat. 
              <span className="second-paragraph"> <br /> <br />
              Duis aute irure dolor in reprehenderit in voluptate 
              velit esse cillum dolore eu fugiat nulla pariatur. 
              </span>
            </p>
            <span className="about__info-name">Jason Wood</span>
          </div>
        </div>
        <ScrollDown />
      </div>
    </div>
  )
}

export default App;
