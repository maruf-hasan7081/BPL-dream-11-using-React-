import React from 'react';
import { use } from 'react';

const Player = ({playerpromise}) => {
    // console.log(playerpromise);
    const data = use(playerpromise);
    console.log(data);
    return (
        <div className='w-[90%] mx-auto mt-10 '>
            <h1>Available Players :{data.length}</h1>

            <div>

                <img src="{data.img}" alt="" />
                <h1>{data.name}</h1>

            </div>
            
        </div>
    );
};

export default Player;