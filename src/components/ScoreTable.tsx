import React from 'react';
import {ScoreTableProps} from '../types'

export const ScoreTable: React.FC<ScoreTableProps> = ({scores, players}) => {
    const totals: {[key: string] : number } = scores.reduce((acc, round) => {
        for (const playerId in round.scores) {
            if (!acc[playerId]) acc[playerId] = 0;
            acc[playerId] += round.scores[playerId];
        }
    return acc;
    }, {} as {[key: string]: number});
    

    return(
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th className="px-6 py-3">Player</th>
                    {scores.map((_,i) => (
                        <th className="px-6 py-3" key= {i}>Round {i + 1}</th>
                    ))}
                    <th className="px-6 py-4">Total</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player) => (
                    <tr className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700" key = {player.id}>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">{player.name}</td>
                        {scores.map((round, i) => (
                            <td className="px-6 py-4" key={i}>{round.scores[player.id] || 0 }</td>
                        ))}
                        <td className="px-6 py-4 text-white font-bold">{totals[player.id]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

