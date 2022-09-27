import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Selecao from './components/Selecao';
import Sorteio from './components/Sorteio';
import copa from './copa.jpeg'

import { playerList, playerList2, selecaoList} from './db';
import Grupos from './pages/Grupos';


function App() {

  const[group, setGroup] = useState([])
  const[group2, setGroup2] = useState([])
  const[group3, setGroup3] = useState([])
  const[group4, setGroup4] = useState([])
  const[group5, setGroup5] = useState([])
  const[group6, setGroup6] = useState([])
  const[group7, setGroup7] = useState([])
  const[group8, setGroup8] = useState([])


  const[count, setCount] = useState(0)

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
    if(count === 8 ){
      console.log("Acabou a Rodada")
    }
  },[startRandom, count])

  const handleChange = (e) => {
    e.preventDefault()
    setCount(count + 1)
    startRandom()
  }
  console.log(count)
  
  const countChange = (e) => {
    e.preventDefault()
    setCount(0)

  }
useEffect(() => {
  if(count === 1){
    setGroup([pickedPlayer1, pickedPlayer2])
  }

  if(count === 2){
    setGroup2([pickedPlayer1, pickedPlayer2])
  }

  if(count === 3){
    setGroup3([pickedPlayer1, pickedPlayer2])
  }

  console.log(group)
  console.log(group2)
}
)
  return (
    <div className="App">
      
      <nav className='nav'>
        <img src={copa} />
      </nav>
      {count != 8 && <form onSubmit={handleChange}>
        <input type="submit" value="Sortear"  />
      </form>}
      {count === 8 && <form onSubmit={countChange}>
          <input type="submit" value="Resetar"/>
        </form>}
        {count === 8 && <Grupos group={group}/>}
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
