export interface Player{
    id: string;
    name: string;
}

export interface Score{
    round: number;
    // here playerId is used as a key
    scores: { [playerId: string] : number};
}

export interface PlayerFormProps{
    // The form should contain a function that takes a playerName, and should return nothing
    addPlayer: (name: string) => void;
}

export interface ScoreInputProps{
    players: Player[];
    addScore: (round: number, scores: { [playerId: string] : number }) => void;
}

export interface ScoreTableProps {
    // The score table should contain `Score[]` - this is used to dispay round number, aswell as score for each player individually which is found by the key which is their playerId
    scores: Score[];
    // It must also contain all the players who is playing in the current session.
    players: Player[];
}