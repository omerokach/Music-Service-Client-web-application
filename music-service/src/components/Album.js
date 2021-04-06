import React from 'react';

function Album(props) {
    const album = props.location.aboutProps.album
    return (
        <div>
            {console.log(props.location.aboutProps.album)}
            <img src={album.thumbnail} alt='album img'></img>
        </div>
    );
}

export default Album;