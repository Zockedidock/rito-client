/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { NavLink } from 'react-router-dom'
import './gamebutton.css'

interface GamebuttonProps {
  gName?: string,
  gLogo?: string,
  gLink?: string
}

class Gamebutton extends React.Component<GamebuttonProps>
{
  render()
  {
    const { gName, gLogo, gLink } = this.props
    return (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      <NavLink to={gLink!}>
        <div className={`${ gName?.replace(/\s/g, '-') } gamebutton button is-secondary`}>
          <div className="img-container">
            <img src={ gLogo } alt={ gName }/>
          </div>
          <div className="game-name-container">
            <h2 className="game-name">
              { gName }
            </h2>
          </div>
        </div>
      </NavLink>
    )
  }
}

export default Gamebutton
