import React from 'react'
import Player from './Player'
import Players from '../Players'
import NavB from './NavB'

const PlayerList = () => {
  return (
    <div>
      <NavB />
      
        {Players.map(joueur => <Player  joueur={joueur} key={joueur.id} />)}
    </div>
  )
}

export default PlayerList