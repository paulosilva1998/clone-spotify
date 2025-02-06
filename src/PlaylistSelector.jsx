import React from "react";

export default function PlaylistSelector({ playlists, setSelectedPlaylist }) {
    return (
        <div className="mb-4">
            <h2 className="text-xl font-bold">Escolha uma Playlist</h2>
            <select
                onChange={(e) => setSelectedPlaylist(e.target.value)}
                className="p-2 bg-gray-800 text-white rounded-lg mt-2"
            >
                {playlists.map((playlist, index) => (
                    <option key={index} value={playlist}>{playlist}</option>
                ))}
            </select>
        </div>
    );
}