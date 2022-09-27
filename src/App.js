import { useState, useCallback, useEffect } from 'react';
import './App.css';
import Selecao from './components/Selecao';
import Sorteio from './components/Sorteio';
import copa from './copa.jpeg'

import { playerList, playerList2, selecaoList} from './db';


function App() {

  const [words] = useState(playerList)
  
  const [words2] = useState(playerList2)

  const [words3] = useState(selecaoList)

  const [pickedPlayer1, setPickedPlayer] = useState("")
  const [pickedPlayer2, setPickedPlayer2] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")

  const pickPlayerAndTime = useCallback(() => {
    //Sorteio de Jogador 01
    const player1 = Object.keys(words)
    const jogador1 = player1[Math.floor(Math.random() * Object.keys(player1).length)]
    //Sorteio de Jogador 02
    const player2 = Object.keys(words2)
    const jogador2 = player2[Math.floor(Math.random() * Object.keys(player2).length)]

    const player01 = words[jogador1][Math.floor(Math.random() * words[jogador1].length)]
    const player02 = words2[jogador2][Math.floor(Math.random() * words2[jogador2].length)]
    

    const selecao = Object.keys(words3)
    const time = selecao[Math.floor(Math.random() * Object.keys(selecao).length)]

    const times = words3[time][Math.floor(Math.random() * words3[time].length)]

    return{jogador1, player01, player02, jogador2, times}
  }, [words, words2, words3])

  const startRandom = useCallback(() => {

    const {player01, player02, times} = pickPlayerAndTime()

    setPickedPlayer(player01)
    setPickedPlayer2(player02)
    setPickedCategory(times)

  }, [pickPlayerAndTime])

  useEffect(() => {
    startRandom()
  },[startRandom])

  return (
    <div className="App">
      <nav className='nav'>
        <img src={copa} />
      </nav>
          <Sorteio
            pickedPlayer1={pickedPlayer1}
            pickedPlayer2={pickedPlayer2}
          />
          <Selecao
            pickedCategory={pickedCategory}
          />
      
    </div>
  );
}

export default App;
