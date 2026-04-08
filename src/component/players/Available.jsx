import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { IoIosFlag } from "react-icons/io";

const Available = ({ data, setCoins, coins }) => {

    const [isSelected, setisSelected] = useState(false);

    const onClickhandler = (player) => {

        if (Number(coins) >= Number(player.price)) {
            setCoins(Number(coins) - Number(player.price));
            alert(`${player.name} has been selected!`);
            setisSelected(true);
        } else {
            alert("You don't have enough coins to select this player.");
            return;
        }
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {data.map(player => {
                    return (
                        <div key={player.id} className="card bg-base-100 w-96 shadow-sm">

                            <figure>
                                <img
                                    src={player.image}
                                    alt={player.name}
                                    className="w-full h-[250px] object-cover rounded-xl"
                                />
                            </figure>

                            <div className="card-body">

                                <h2 className="card-title flex items-center gap-2">
                                    <FaUser />
                                    {player.name}
                                </h2>

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

                                <p>Rating: {player.rating}</p>

                                <div className='flex justify-between items-center gap-20'>
                                    <p>{player.battingStyle}</p>
                                    <p>{player.bowlingStyle}</p>
                                </div>

                                <div className='flex justify-between items-center mb-5'>
                                    <div>
                                        <p>Price: ${player.price}</p>
                                    </div>

                                    <div className="card-actions justify-end">
                                        <button
                                            className={"btn"}
                                            onClick={() => onClickhandler(player)}
                                            disabled={isSelected ? true : false}
                                        >
                                            {isSelected ? "Selected" : "Choose Player"}
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Available;