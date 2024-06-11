import React, { useState } from 'react';
import { ScoreInputProps } from '../types';

export const ScoreInput : React.FC<ScoreInputProps> = ({players, addScore}) => {
    const [scores, setScores] = useState<{[key: string]:number}>({});
    const [round, setRound] = useState(1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, player:string) => {
        setScores({...scores, [player]:parseInt(e.target.value,10)});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addScore(round,scores);
        setScores({});
        setRound(round + 1);
    };



    return (
        
            <form onSubmit={handleSubmit}
            className="">
            <div className="mt-20 flex justify-center">
            {players.map((player) => (
                <div key={player.id}>
                    <label className="text-xl flex justify-center capitalize font-bold  text-sky-200">{player.name}</label>
                    <input
                        className="bg-gray-300 m-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        type="number" 
                        placeholder='Enter score' required
                        value={scores[player.id] || ''}
                        onChange={(e) => handleChange(e,player.id)}
                    />
                     
                </div>
            ))}
            </div >
            <div className="flex justify-center">
                <button className="flex justify-center items-center m-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit"> Submit Scores </button>
            </div>
            
            </form>
      
    )

}
