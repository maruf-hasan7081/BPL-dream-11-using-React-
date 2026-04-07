import React from 'react';
import { useState } from 'react';
import { use } from 'react';
import { FaUser } from "react-icons/fa";
import { IoIosFlag } from "react-icons/io";
import Available from './Available';
import Selected from './Selected';

const Player = ({ playerpromise }) => {
    // console.log(playerpromise);
    const data = use(playerpromise);
    console.log(data);

    const [selectedPlayers, setSelectedPlayers] = useState("available");

    
    return (
        <div className='w-[90%] mx-auto mt-10 '>
            <div className='flex justify-between items-center mb-5'>
                {selectedPlayers=== "available"? <h1>Available Players :{data.length}</h1> : <h1>Selected Players :{data.length}/{data.length}</h1>}

                <div className='flex gap-5'>
                    <button className={`btn  ${selectedPlayers === "available" ? "bg-[#FEE502]" : ""}` } onClick={() => setSelectedPlayers("available")}>
                        Available
                    </button>
                    <button className={`btn ${selectedPlayers === "selected" ? "bg-[#FEE502]" : ""}`} onClick={() => setSelectedPlayers("selected")}>
                        Selected<span>0</span>
                    </button>
                </div>

            </div>

            {selectedPlayers === "available" ? <Available data={data} /> : <Selected />}




            

            

        </div>
    );
};

export default Player;