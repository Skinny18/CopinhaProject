import { useEffect, useState } from "react";
import { playerList, playerList2, selecaoList } from "./database/playersData";
import './App.css';
import copa from './copa.jpeg'


const App2 = () => {

    const goodPlayers = [...playerList];
    const badPlayers = [...playerList2];
    const selecao = [...selecaoList]

    const [teams, setTeams] = useState([]);
    const [count, setCount] = useState(0)

    const randomizeTeams = () => {
        setCount(1)
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
    }

    useEffect(() => {
        console.log(teams);
    }, [teams])

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
            
            </div>
        </div>
    );
}

export default App2;