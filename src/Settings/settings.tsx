/* eslint-disable no-return-assign */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import AddGame from './addGame';
import General from './general';

interface SettingsProps {
  someDefaultValue?: string
}

interface SettingsStates {
  tab?: number
}

export default
class Settings extends React.Component<SettingsProps, SettingsStates>
{
  location = 'General'

  constructor(props: any) {
    super(props)
    this.state = {
      tab: 0
    }
  }

  render() {
    const { tab } = this.state

    return (
      <div className="notclick">
        <div className="settings">
          <div className="topbar">
            <h3 className="button">
              <p>RITO / </p>&nbsp; { this.location }
            </h3>
            <button type="button" className="button is-secondary is-tiny">
              Restore Defaults
            </button>
          </div>
          <div className="divider" />
          <div className="middle">
            <div className="sidebar">
              <button
                type="button"
                onClick={ () => {
                  this.setState({ tab: 0 })
                  this.location = 'General'
                }}
              >
                General
              </button>
              <button
                type="button"
                onClick={ () => {
                  this.setState({ tab: 1 })
                  this.location = 'Add Game'
                }}
              >
                Add Game
              </button>
            </div>
            <div className="options">
              { tab === 0 ? <General />: null }
              { tab === 1 ? <AddGame />: null }
            </div>
          </div>
          <div className="save-button">
            <div className="arrow-button">
              <button type="button" className="circle">
                <svg viewBox="0 0 35.5 35.5" width="10" height="10">
                  <path className="cls-1" fill="currentColor" d="M23.41,17.75,34.33,6.83a4,4,0,1,0-5.66-5.66L17.75,12.09,6.83,1.17A4,4,0,0,0,1.17,6.83L12.09,17.75,1.17,28.67a4,4,0,0,0,5.66,5.66L17.75,23.41,28.67,34.33a4,4,0,0,0,5.66-5.66Z"/>
                </svg>
              </button>
              <button type="button" className="main" onClick={()=>{
                const s = document.getElementsByClassName("notclick")[0] as HTMLDivElement
                s.style.display = "none"
              }}>Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
