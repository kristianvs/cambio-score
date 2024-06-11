
import  { useState} from 'react';
import { PlayerForm } from './components/PlayerForm';
import { Player, Score } from './types';
import {ScoreTable} from './components/ScoreTable';
import { ScoreInput } from './components/ScoreInput';



function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [scores, setScores] = useState<Score[]>([]);

  const addPlayer = (name:string)=> {
    const newPlayer : Player = {id: name, name};
    setPlayers([...players, newPlayer])
    console.log(name);
  }

  const addScore= (round: number, newScores: {[key: string]:number}) => {
    const newScore: Score = {round, scores: newScores};
    setScores([...scores,newScore]);
  }

  return (
    <>

    
    <PlayerForm addPlayer = {addPlayer}/>
    <h2 className="text-white mt-4">Players: </h2>
    <ul>
      {players.map((player) => (
        <li className = "ml-10"key = {player.id}>{player.name}</li>
      ))}
    </ul>
    {players.length > 0 && (
      <ScoreInput players = {players} addScore = {addScore}/> 
    )}
    {scores.length > 0 && <ScoreTable scores = {scores} players = {players}/>}
    </>
  );
}

export default App
