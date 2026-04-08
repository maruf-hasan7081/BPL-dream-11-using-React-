import React from 'react';
import { useState } from 'react';
import { use } from 'react';
import Available from './Available';
import Selected from './Selected';
import { toast } from 'react-toastify';

const Player = ({ playerpromise, setCoins, coins }) => {
    const data = use(playerpromise);

    const [tab, setTab] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleSelectPlayer = (player) => {
        const alreadySelected = selectedPlayers.find(p => p.id === player.id);

        if (alreadySelected) {
            return;
        }

        if (Number(coins) >= Number(player.price)) {
            setCoins(Number(coins) - Number(player.price));
            setSelectedPlayers([...selectedPlayers, player]);
            toast(`${player.name} has been selected!`);
        } else {
            toast("You don't have enough coins to select this player.");
        }
    };

    const handleDeletePlayer = (id) => {
        const deletedPlayer = selectedPlayers.find(player => player.id === id);

        if (deletedPlayer) {
            setCoins(Number(coins) + Number(deletedPlayer.price));
        }

        const remainingPlayers = selectedPlayers.filter(player => player.id !== id);
        setSelectedPlayers(remainingPlayers);
    };

    return (
        <div className='w-[90%] mx-auto mt-10 '>
            <div className='flex justify-between items-center mb-5'>
                {tab === "available" ? (
                    <h1>Available Players : {data.length}</h1>
                ) : (
                    <h1>Selected Players : {selectedPlayers.length}</h1>
                )}

                <div className='flex gap-5'>
                    <button
                        className={`btn ${tab === "available" ? "bg-[#FEE502]" : ""}`}
                        onClick={() => setTab("available")}
                    >
                        Available
                    </button>

                    <button
                        className={`btn ${tab === "selected" ? "bg-[#FEE502]" : ""}`}
                        onClick={() => setTab("selected")}
                    >
                        Selected <span>{selectedPlayers.length}</span>
                    </button>
                </div>
            </div>

            {tab === "available" ? (
                <Available
                    data={data}
                    coins={coins}
                    selectedPlayers={selectedPlayers}
                    handleSelectPlayer={handleSelectPlayer}
                />
            ) : (
                <Selected
                    data={selectedPlayers}
                    handleDeletePlayer={handleDeletePlayer}
                />
            )}
        </div>
    );
};

export default Player;