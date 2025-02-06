import React from "react";

export default function SongList({ songs, setCurrentSong, setQueue }) {
    const addToQueue = (song) => {
        setQueue((prevQueue) => [...prevQueue, song]);
    };

    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold">Músicas</h2>
            {songs.length > 0 ? (
                songs.map((song) => (
                    <div key={song.id} className="p-2 bg-gray-800 rounded-lg mt-2 flex justify-between">
                        <span>{song.title} - {song.artist}</span>
                        <div>
                            <button onClick={() => setCurrentSong(song)} className="p-1 bg-green-500 rounded mr-2">Play</button>
                            <button onClick={() => addToQueue(song)} className="p-1 bg-blue-500 rounded">Add to Queue</button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-400">Nenhuma música disponível</p>
            )}
        </div>
    );
}