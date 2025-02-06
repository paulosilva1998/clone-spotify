import React from "react";

export default function Queue({ queue, setQueue }) {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold">Fila de Reprodução</h2>
            {queue.length > 0 ? (
                queue.map((song, index) => (
                    <div key={index} className="p-2 bg-gray-800 rounded-lg mt-2">
                        {song.title} - {song.artist}
                    </div>
                ))
            ) : (
                <p className="text-gray-400">Fila vazia</p>
            )}
        </div>
    );
}