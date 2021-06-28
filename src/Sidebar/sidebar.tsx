/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Gamebutton from './Gamebutton/gamebutton'
import './sidebar.css'

class Sidebar extends React.Component
{
  render()
  {
    return (
      <div id="sidebar">
        <Gamebutton
          gName="League of Legends"
          gLogo="https://preview.redd.it/itq8rpld8va51.png?width=256&format=png&auto=webp&s=9701ba6228c29bf2d7e3dfffd45b9a3562507289"
          gLink="/league"
        />
        <Gamebutton
          gName="Valorant"
          gLogo="https://static.wikia.nocookie.net/valorant_esports_gamepedia_en/images/d/d9/Logo_square.png/revision/latest?cb=20200404214157"
          gLink="/valorant"
        />
        <Gamebutton
          gName="Legends of Runeterra"
          gLogo="https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/blt45c95258caa346ca/5e93c4d6baf2bd3cc4754805/Legends_Of_Runeterra_Monogram.png"
          gLink="/runeterra"
        />
      </div>
    )
  }
}

export default Sidebar
