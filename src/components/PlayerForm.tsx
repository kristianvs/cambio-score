import { PlayerFormProps } from '../types.ts'
import React, { useState } from 'react';


export const PlayerForm : React.FC<PlayerFormProps>  = ({addPlayer}) => {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        if(name.trim()){
            addPlayer(name);
            setName('');
        }
    };
    return(
        <div className ="p-4 w-fit bg-blue-700 border rounded-md">
            <form onSubmit = {handleSubmit}>
                <input 
                    className=""
                    type="text"
                    value ={name}
                    onChange={((e) => setName(e.target.value))}
                    placeholder='Enter name'

                />
                <button type = "submit" className="ml-2 rounded-md p-2 bg-blue-500 hover:bg-blue-700"> Add Player</button>
            </form>


        </div>
    );
};