import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const photos = [
    { id: 1, src: "/IMG_2530.jpg", title: "Sunset" },
    { id: 2, src: "/photo2.jpg", title: "Mountains" },
    { id: 3, src: "/photo3.jpg", title: "Ocean" },
  ];

  return (
    <section className="gallery">
      <h2>My Gallery</h2>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo">
            <img src={photo.src} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
