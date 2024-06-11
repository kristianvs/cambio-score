
import  { useState} from 'react';
import { PlayerForm } from '../components/PlayerForm';
import { Player, Score } from '../types';
import {ScoreTable} from '../components/ScoreTable';
import { ScoreInput } from '../components/ScoreInput';

//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'



function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [scores, setScores] = useState<Score[]>([]);
  
  const addPlayer = (name:string)=> {
    const newPlayer : Player = {id: name, name};
    setPlayers([...players, newPlayer])
    console.log(name);
  }

  const resetGame= () => {
    setScores([]);
  }

  const newGame= ()=> {
    resetGame();
    setPlayers([]);
  }

  const addScore= (round: number, newScores: {[key: string]:number}) => {
    const newScore: Score = {round, scores: newScores};
    setScores([...scores,newScore]);
  }

  return (
    <>
      <div >
    
        <PlayerForm addPlayer = {addPlayer}/>
      
        {players.length > 0 && (
          <>
            <ScoreInput players = {players} addScore = {addScore}/> 
            <button className="m-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={resetGame}> Restart </button>
            <button className="m-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={newGame}> New Game </button>:
          </>
        )}
    
        {players.length > 0 && <ScoreTable scores = {scores} players = {players}/>}
      </div>
    </>
  );
}

export default App
