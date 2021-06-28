/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */
import React from 'react'
import { ipcRenderer } from 'electron'

const ipc = ipcRenderer

// eslint-disable-next-line react/prefer-stateless-function
export default class Titlebar extends React.Component {
  render() {
    return (
      <div className="title-bar">
        <div className="controls">
          <div className="button minimize" onClick={() => {
            console.log("test")
            ipc.send('minApp')
          }}>-</div>
          <div className="button maximize" onClick={() => {
            document.getElementsByClassName("notclick")[0].style.display = "block"

          }}>O</div>
          <div className="button close" onClick={() => {
            ipc.send('closeApp')
          }}>X</div>
        </div>
      </div>
    );
  }
}
