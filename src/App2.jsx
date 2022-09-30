import { useEffect, useState } from "react";
import { playerList, playerList2, selecaoList } from "./database/playersData";
import './App.css';
import copa from './copa.jpeg'
import { Link } from "react-router-dom";


const App2 = () => {

    const goodPlayers = [...playerList];
    const badPlayers = [...playerList2];
    const selecao = [...selecaoList]

    const [teams, setTeams] = useState([]);
    const [groupa, setGroupa] = useState([])
    const [groupb, setGroupb] = useState([])
    const [count, setCount] = useState(0)

    const randomizeTeams = () => {
        setCount(count + 1)
        const newTeams = [];

        for(let i = 0; i < 8; i++) {
            const gpIndex = Math.floor(Math.random() * goodPlayers.length);
            const bpIndex = Math.floor(Math.random() * goodPlayers.length);
            const slIndex = Math.floor(Math.random() * goodPlayers.length);

            const newTeam = {
                gp: goodPlayers[gpIndex],
                bp: badPlayers[bpIndex],
                sl: selecao[slIndex]
            }

            newTeams.push(newTeam);

            goodPlayers.splice(gpIndex, 1);
            badPlayers.splice(bpIndex, 1);
            selecao.splice(slIndex, 1);
        }
        setTeams([...newTeams]);
        //var a = newTeams.push(newTeams.splice(4))
        //setGroupa([...a])

         //const B = []
           //B.push(newTeams.splice(0))
         //setGroupb([...B])


         //var times = newTeams.push(newTeams.splice(3))
        
         //let grupoA = {
           // gpA: times
        // }
         //setGroupa([grupoA])
         var ga = newTeams.splice(4)
         let timesA = ga
         setGroupa([...timesA])

         var gb = newTeams.splice(0)
         let timesB = gb
         setGroupb([...timesB])
        
    }     
        
    
    var A = groupa.slice(3)

    var B = groupb.slice(-1)

    console.log(A)
    console.log(B)

    useEffect(() => {
        console.log(teams);
        console.log(groupa)
        console.log(groupb)
    }, [teams, groupa, groupb])

      

    return (
        <div className="App">
         <nav className='nav'>
             <img src={copa} />
        </nav>
            <button
                onClick={() => randomizeTeams()}
            >Sortear</button>
            
            <div className="player">
            {count === 0 &&  <div>
                <h1>Bem Vindo ao sorteio da maior Copinha de TODOS OS TEMPOS!!</h1>
                
                <ul> 
                     <h1>Integrantes:</h1>
                
                    <details>
                        {playerList.map((player, i) => (
                            <li key={i} >
                                <h2>{player}</h2>
                                </li>
                        ))}
                        {playerList2.map((player2, i) => (
                            <li key={i}>
                                <h2>{player2}</h2>
                            </li>
                        ))}
                         </details> 
                       <h1>Seleções:</h1>
                       <details>

                       {selecaoList.map((time, i) => (
                           <li key={i}>
                               <h2>{time}</h2>
                           </li>
                       ))} 
                    </details>   
                </ul>
                </div>
            }
        
                {
                    teams.map((team, i) => (
                        <p key={i}>
                            <h1>Grupo {i+1}</h1>
                            <p>{team.gp}</p>
                            <p>{team.bp}</p>
                            <h3>{team.sl}</h3>
                        </p>
                    ))
                }
                <h1>Grupo A:</h1>
                <details>
                {
                    groupa.map((grupo, i ) => (
                        <p key={i}>
                            <h1>{grupo.gp}</h1>
                            <h1>{grupo.bp}</h1>
                            <h2>{grupo.sl}</h2>
                        </p>
                    ))
                }
                </details>
                <h1>Grupo B:</h1>
                <details>
                    {
                        groupb.map((grupo, i ) => (
                            <p key={i}>
                                <h1>{grupo.gp}</h1>
                                <h1>{grupo.bp}</h1>
                                <h2>{grupo.sl}</h2>
                            </p>
                        ))
                    }    
                </details>   
                <h1>Primeiro Jogo</h1>
                <details>
                    {
                        A.map((jg, i) => (
                            <p key={i}>
                                <h1>Jogo {count}</h1>
                                <h3>{jg.gp}</h3>
                                <h3>{jg.bp}</h3>
                                <h3>{jg.sl}</h3>
                            </p>
                        ))
                    }X
                    {
                        B.map((jg, i) => (
                            <p key={i}>
                                <h3>{jg.gp}</h3>
                                <h3>{jg.bp}</h3>
                                <h3>{jg.sl}</h3>
                            </p>
                        ))
                    }
                </details>
            </div>
        </div>
    );
}

export default App2;