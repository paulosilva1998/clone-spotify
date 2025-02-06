import React, { useEffect, useRef } from "react";

export default function Player({ currentSong, isPlaying, setIsPlaying, playNextSong }) {
    const audioRef = useRef(null);

    useEffect(() => {
        if (currentSong && isPlaying) {
            audioRef.current.src = currentSong.src;
            audioRef.current.play();
        }
    }, [currentSong, isPlaying]);

    return (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg">
            {currentSong ? (
                <div>
                    <h2 className="text-lg font-bold">Tocando agora:</h2>
                    <p>{currentSong.title} - {currentSong.artist}</p>
                    <audio ref={audioRef} onEnded={playNextSong} controls className="w-full mt-2" />
                </div>
            ) : (
                <p className="text-gray-400">Nenhuma música tocando</p>
            )}
        </div>
    );
}