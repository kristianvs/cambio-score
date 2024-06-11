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
        <div className ="flex justify-center  lg:text-xl md:text-lg sm:text-md mt-4">
            <form className = "flex items-center bg-blue-700 p-4 rounded-3xl shadow-2xl border-2 space-x-2" onSubmit = {handleSubmit}>
                <input 
                    className="rounded-lg"
                    type="text"
                    value ={name}
                    onChange={((e) => setName(e.target.value))}
                    placeholder='Enter name...'

                />
                <button type = "submit" className="ml-2 font-semibold rounded-md p-2 bg-blue-500 hover:bg-green-700 shadow-xl border-2"> Add Player</button>
            </form>


        </div>
    );
};