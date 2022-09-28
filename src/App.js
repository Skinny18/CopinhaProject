import { useState, useCallback, useEffect } from 'react';

import './App.css';
import Selecao from './components/Selecao';
import Sorteio from './components/Sorteio';
import copa from './copa.jpeg'

import Grupos from './pages/Grupos';


function App() {
  const playerList = ["Hudson", "Edson", "Barriga", "Valdercley", "Matheus Cabeça", "Ayrton", "João Messi", "Kauã"]
  const playerList2 = ["Rian", "Leonardo", "Bryan", "João Vitor", "Lucas Matheus", "Biel", "Fellipe", "Thiago Silva"]
  const selecaoList = ["Brasil", "Argentina", "Alemanha", "França", "Inglaterra", "Nigéria", "Costa Rica", "Croácia"] 


  const[group, setGroup] = useState([])
  const[group2, setGroup2] = useState([])
  const[group3, setGroup3] = useState([])
  const[group4, setGroup4] = useState([])
  const[group5, setGroup5] = useState([])
  const[group6, setGroup6] = useState([])
  const[group7, setGroup7] = useState([])
  const[group8, setGroup8] = useState([])

  const[time, setTime] = useState("")
  const[time2, setTime2] = useState("")
  const[time3, setTime3] = useState("")
  const[time4, setTime4] = useState("")
  const[time5, setTime5] = useState("")
  const[time6, setTime6] = useState("")
  const[time7, setTime7] = useState("")
  const[time8, setTime8] = useState("")


  const[show, setShow] = useState(true)
  const[count, setCount] = useState(0)

  const [words] = useState(playerList)
  
  const [words2] = useState(playerList2)

  const [words3] = useState(selecaoList)

  const [pickedPlayer1, setPickedPlayer] = useState("")
  const [pickedPlayer2, setPickedPlayer2] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")

  const pickPlayerAndTime = useCallback(() => {
    //Sorteio de Jogador 01
    const jogador1 = playerList[Math.floor(Math.random() * playerList.length)]
    //Sorteio de Jogador 02
    const jogador2 = playerList2[Math.floor(Math.random() * playerList2.length)]

    const player01 = jogador1
    const player02 = jogador2
    

    const time = selecaoList[Math.floor(Math.random() * selecaoList.length)]

    const times = time


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
  
  const countChange = (e) => {
    e.preventDefault()
    setCount(0)
    setShow(true)

  }
useEffect(() => {
  if(count === 1){
    setGroup([pickedPlayer1, pickedPlayer2])
    setTime(pickedCategory)
  }

  if(count === 2){
    setGroup2([pickedPlayer1, pickedPlayer2])
    setTime2(pickedCategory)

  }

  if(count === 3){
    setGroup3([pickedPlayer1, pickedPlayer2])
    setTime3(pickedCategory)
  }

  if(count === 4){
    setGroup4([pickedPlayer1, pickedPlayer2])
    setTime4(pickedCategory)
  }
  if(count === 5){
    setGroup5([pickedPlayer1, pickedPlayer2])
    setTime5(pickedCategory)
  }
  if(count === 6){
    setGroup6([pickedPlayer1, pickedPlayer2])
    setTime6(pickedCategory)
  }

  if(count === 7){
    setGroup7([pickedPlayer1, pickedPlayer2])
    setTime7(pickedCategory)
  }

  if(count === 8 ){
    setGroup8([pickedPlayer1, pickedPlayer2])
    setTime8(pickedCategory)
  }
}, [count]
)
useEffect(() => { 
  if(count === 8 ){
    setShow(false)
  }
})
  return (
    <div className="App">
      
      <nav className='nav'>
        <img src={copa} />
      </nav>
      {count != 8 && <form onSubmit={handleChange}>
        <input type="submit" value="Sortear"  />
      </form>}
      {show === false && <form onSubmit={countChange}>
          <input type="submit" value="Resetar"/>
        </form> }
        {count === 8 && <Grupos group={group}
                                group2={group2}
                                group3={group3}
                                group4={group4}
                                group5={group5}
                                group6={group6}
                                group7={group7}
                                group8={group8}
                                time={time}
                                time2={time2}
                                time3={time3}
                                time4={time4}
                                time5={time5}
                                time6={time6}
                                time7={time7}
                                time8={time8}
        />}
          {show ? <Sorteio
            pickedPlayer1={pickedPlayer1}
            pickedPlayer2={pickedPlayer2}
          /> : null}
          {show ? <Selecao
            pickedCategory={pickedCategory}
          /> : null }
    </div>
  );
}

export default App;
