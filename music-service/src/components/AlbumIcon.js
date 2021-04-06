import React from "react";
import { Link } from 'react-router-dom';

function AlbumIcon(props) {
  return (
    <Link to={{pathname:`/album/${props.album.album.id}`, aboutProps:{album: props.album.album}}}>
      <img
        src={props.album.album.thumbnail}
        style={{ width: "15rem", height: "10rem" }}
        alt='album img'
      ></img>
    </Link>
  );
}

export default AlbumIcon;
