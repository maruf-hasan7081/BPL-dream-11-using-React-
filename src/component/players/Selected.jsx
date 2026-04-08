import { FaTrash } from "react-icons/fa";

const Selected = ({ data, handleDeletePlayer }) => {
    return (
        <div className="flex flex-col gap-4">
            {data.map(player => (
                <div
                    key={player.id}
                    className="w-full border border-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm bg-white"
                >
                    <div className="flex items-center gap-4">
                        <img
                            src={player.image}
                            alt={player.name}
                            className="w-16 h-16 rounded-lg object-cover"
                        />

                        <div>
                            <h2 className="text-lg font-semibold">{player.name}</h2>
                            <p className="text-gray-500 text-sm">{player.role}</p>
                        </div>
                    </div>

                    <button
                        onClick={() => handleDeletePlayer(player.id)}
                        className="text-red-500 hover:text-red-700 text-lg"
                    >
                        <FaTrash />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Selected;