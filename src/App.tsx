/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable global-require */
import React from 'react';
import { MemoryRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.global.css';
import Sidebar from './Sidebar/sidebar';
import Gamewindow from './GameWindow/gamewindow'
import Titlebar from './TitleBar/titlebar';
import Settings from './Settings/settings';

export default function App()
{
  return (
    <>
    <Titlebar />
    <Settings />
    <div className="app">
      <MemoryRouter>
        <Sidebar />
        <Switch>
          <Route path="/league">
            <Gamewindow
              name="League of Legends"
              gName="league_of_legends"
              gEXE="C:/Riot Games/Riot Client/RiotClientServices.exe"
              gARG1="--launch-product=league_of_legends"
              gARG2="--launch-patchline=live"
              gLogo="https://static.wikia.nocookie.net/leagueoflegends/images/7/77/League_of_Legends_logo.png/revision/latest?cb=20191018222219"
              gBackground="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg"
            />
          </Route>
          <Route path="/valorant">
            <Gamewindow
              name="Valorant"
              gName="valorant"
              gEXE="C:/Riot Games/Riot Client/RiotClientServices.exe"
              gARG1="--launch-product=valorant"
              gARG2="--launch-patchline=live"
              gLogo="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/fbad057973f18db4d1045d3538e69c50.png"
              gBackground="https://i.computer-bild.de/imgs/1/2/6/7/4/5/8/3/Valorant-2048x1152-663c69fcff6c032b.jpg"
            />
          </Route>
          <Route path="/runeterra">
            <Gamewindow
              name="Legends of Runeterra"
              gName="bacon"
              gEXE="C:/Riot Games/Riot Client/RiotClientServices.exe"
              gARG1="--launch-product=bacon"
              gARG2="--launch-patchline=live"
              gLogo="https://upload.wikimedia.org/wikipedia/en/b/b0/Legends_of_Runeterra_logo.png"
              gBackground="https://dd.b.pvp.net/latest/set1/en_us/img/cards/01IO015-full.png"
            />
          </Route>
        </Switch>
      </MemoryRouter>
    </div>
    </>
  );
}
