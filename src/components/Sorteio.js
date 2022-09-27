import React from 'react'
import "./Sorteio.css"


const Sorteio = ({pickedPlayer1, pickedPlayer2}) => {
  return (
    <div className='player'>
      <h1>Jogador 1</h1>
        <h2>{pickedPlayer1}</h2>
       <h1>Jogador 2</h1> 
        <h2>{pickedPlayer2}</h2>
    </div>
  )
}

export default Sorteio