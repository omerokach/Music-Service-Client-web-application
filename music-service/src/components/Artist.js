import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { Link } from "react-router-dom";

// <div className='artist-component'>
//     <img id='artist-img-component' src= {artist.thumbnail.url} alt='artist img'></img>
//     {console.log(artist)}
// </div>
function Artist(props) {
  const artist = props.location.aboutProps.artist;
  const { albumArray } = artist;
  return (
    <Accordion>
      {albumArray.map((album) => (
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>{album.title}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {album.songs.map((song) => (
              <Link to={{pathname:`/song/:id`, aboutProps:{song}}} >{song.songName}</Link>
            ))}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
  //   return (
  //     <Accordion>
  //       <AccordionItem>
  //         <AccordionItemHeading>
  //           <AccordionItemButton>
  //             What harsh truths do you prefer to ignore?
  //           </AccordionItemButton>
  //         </AccordionItemHeading>
  //         <AccordionItemPanel>
  //           <p>
  //             Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
  //             occaecat ut occaecat consequat est minim minim esse tempor laborum
  //             consequat esse adipisicing eu reprehenderit enim.
  //           </p>
  //         </AccordionItemPanel>
  //       </AccordionItem>
  //       <AccordionItem>
  //         <AccordionItemHeading>
  //           <AccordionItemButton>
  //             Is free will real or just an illusion?
  //           </AccordionItemButton>
  //         </AccordionItemHeading>
  //         <AccordionItemPanel>
  //           <p>
  //             In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
  //             nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
  //             duis nulla non.
  //           </p>
  //         </AccordionItemPanel>
  //       </AccordionItem>
  //     </Accordion>
  //   );
}

export default Artist;
