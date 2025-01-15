import React from "react";
import "./Gallery.css";

// Importing images
import Sunset from "../pages/Images/IMG_2529 - Copy.jpg";
import Child from "../pages/Images/IMG_2644.jpg";
import LadyBird from "../pages/Images/KPOA2798.JPG";
import Fishing from "../pages/Images/IMG_2674.jpg";
import Ant from "../pages/Images/IMG_3700.jpg";
import Cat from "../pages/Images/IMG_E0610.JPG";
import Ant1 from "../pages/Images/IMG_E0835.JPG";
import Flower from "../pages/Images/IMG_E0850.JPG";


const photos = [
  { id: 1, src: Sunset, title: "Sunset" },
  { id: 2, src: Child, title: "Mountain" },
  { id: 3, src: LadyBird, title: "Ocean" },
  { id: 4, src: Fishing, title: "Fishing" },
  { id: 5, src: Ant, title: "Ant" },
  { id: 6, src: Cat, title: "Cat" },
  { id: 7, src: Ant1, title: "Ant1" },
  { id: 8, src: Flower, title: "Flower" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo">
            <img src={photo.src} alt={photo.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;