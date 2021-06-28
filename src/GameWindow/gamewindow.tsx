/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'

interface GamewindowProps {
  name?:  string,
  gName?: string,
  gLogo?: string,
  gEXE?: string,
  gARG1?: string,
  gARG2?: string,
  gBackground?: string
}
// eslint-disable-next-line prefer-destructuring
const spawn = require('child_process').spawn

class Gamewindow extends React.Component<GamewindowProps>
{
  launch(
    gEXE: string | undefined,
    gARG1: string | undefined,
    gARG2: string | undefined,
  ) {
    const bat = spawn('cmd.exe', [
      '/c', // Argument for cmd.exe to carry out the specified script
      // 'C:/Riot Games/Riot Client/RiotClientServices.exe',  Path to your file
      gEXE,
      gARG1,
      gARG2,
      // `--launch-product=${gName}`,  First argument
      // `--launch-patchline=live`  n-th argument
    ])
    bat.stdout.on('data', (data: any) => {
      // Handle data...
      console.log(`data: ${data}`)
    })

    bat.stderr.on('data', (err: any) => {
      // Handle error...
      console.log(`err: ${err}`);
    });

    bat.on('exit', (code: any) => {
      // Handle exit
      console.log(`code: ${code}`);
    });
  }

  render()
  {
    const { name, gName, gEXE, gARG1, gARG2, gLogo, gBackground } = this.props

    return (
      <div
        className="game-window"
        style={{
          backgroundImage: `url(${ gBackground })`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className={`${ gName?.replace(/\s/g, '-') }-child child`}>
          <div className={`${ gName?.replace(/\s/g, '-') }-img window-img`}>
            <img src={ gLogo } alt={ gName }/>
          </div>
          <div className={`${ gName?.replace(/\s/g, '-') }-launch launch-game`}>
            <button type="button" className="button is-primary" onClick={() => this.launch(gEXE, gARG1, gARG2)}>
              Launch { name }
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Gamewindow
