import React, { useState } from "react";
import PlaylistSelector from "./PlaylistSelector";
import SongList from "./SongList";
import Player from "./Player";
import Queue from "./Queue";
import "./styles.css";

const playlists = {
  "Rock": [
    { id: 1, title: "Song 1", artist: "Artist 1", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 2, title: "Song 2", artist: "Artist 2", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  ],
  "Pop": [
    { id: 3, title: "Song 3", artist: "Artist 3", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { id: 4, title: "Song 4", artist: "Artist 4", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  ]
};

export default function App() {
  const [selectedPlaylist, setSelectedPlaylist] = useState("Rock");
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState([]);

  const playNextSong = () => {
    if (queue.length > 0) {
      setCurrentSong(queue[0]);
      setQueue(queue.slice(1));
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <h1 className="title">Spotify Clone</h1>
        <PlaylistSelector playlists={Object.keys(playlists)} setSelectedPlaylist={setSelectedPlaylist} />
        <SongList songs={playlists[selectedPlaylist]} setCurrentSong={setCurrentSong} setQueue={setQueue} />
        <Queue queue={queue} setQueue={setQueue} />
        <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} playNextSong={playNextSong} />
      </div>
    </div>
  );
}