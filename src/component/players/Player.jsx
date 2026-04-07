import React from 'react';
import { use } from 'react';
import { FaUser } from "react-icons/fa";
import { IoIosFlag } from "react-icons/io";

const Player = ({ playerpromise }) => {
    // console.log(playerpromise);
    const data = use(playerpromise);
    console.log(data);
    return (
        <div className='w-[90%] mx-auto mt-10 '>
            <div className='flex justify-between items-center mb-5'>
                <h1>Available Players :{data.length}</h1>

                <div>
                    <button className='btn bg-[#FEE502]'>Available</button>
                    <button className='btn '>Selected<span>0</span></button>
                </div>

            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                {data.map(player => (


                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure >
                            <img
                                src={player.image}
                                alt={player.name}
                                className="w-full h-[250px] object-cover rounded-xl"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title"><FaUser />{player.name}</h2>
                            <div className="flex justify-between items-center">
                                <p className="flex items-center gap-2 text-gray-500">
                                    <IoIosFlag />
                                    {player.country}
                                </p>
                                <button className="btn btn-ghost bg-gray-100 rounded-xl px-4 border-none shadow-none">
                                    {player.role}
                                </button>
                            </div>
                            <hr className="border-gray-100" />
                            <p >Rating: {player.rating}</p>
                            <div  className='flex justify-between items-center gap-20 '>
                                <p>{player.battingStyle}</p>
                                <p >{player.blowingStyle}</p>
                            </div>
                            <div className='flex  justify-between items-center mb-5'>
                                <div>
                                    <p>Price: ${player.price}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn ">Choose Player</button>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Player;