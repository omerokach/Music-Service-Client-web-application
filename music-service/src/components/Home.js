import React, { useState } from 'react';
import fs from 'fs';

function Home(props) {
    const [musicLibray, setMusicLibrary] = useState([]);
    return (
        <div>
            <div id="top-artist"></div>
            <div id="top-albums"></div>
            <div id="top-songs"></div>
            <div id="top-playlist"></div>
        </div>
    );
}

export default Home;