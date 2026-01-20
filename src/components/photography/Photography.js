import React, { useState } from "react";
import "../../App.css";
import "../../animation.css";
import "./photography.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTimes } from "@fortawesome/free-solid-svg-icons";

function Photography() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      id: 1,
      src: "/photos/amalfi.jpg",
      location: "Amalfi Coast, Italy",
    },
    {
      id: 2,
      src: "/photos/lake_como.jpg",
      location: "Lake Como, Italy",
    },
    {
      id: 3,
      src: "/photos/zurich.jpg",
      location: "Zurich, Switzerland",
    },
    {
      id: 4,
      src: "/photos/madinah.jpg",
      location: "Madinah, Saudi Arabia",
    },
    {
      id: 5,
      src: "/photos/san_fran.jpg",
      location: "San Francisco, USA",
    },
    {
      id: 6,
      src: "/photos/sf.jpg",
      location: "San Francisco, USA",
    },
  ];

  const openLightbox = (photo) => {
    setSelectedImage(photo);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="mx-auto max-w-4xl p-10 items-center justify-center">
        <h2 className="fade-in-header page-title" style={{ marginTop: "0" }}>
          TRAVELS
        </h2>

        <p className="about fade-in-body text-center" style={{ marginBottom: "2rem" }}>
          A collection of moments from my travels around the world.
        </p>

        <div className="photo-gallery fade-in-about">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="photo-item"
              onClick={() => openLightbox(photo)}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <img
                src={photo.src}
                alt={photo.location}
                className="gallery-image"
              />
              <div className="photo-overlay">
                <span className="photo-location">{photo.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.location}
                className="lightbox-image"
              />
              <div className="lightbox-info">
                <h3>{selectedImage.location}</h3>
              </div>
            </div>
          </div>
        )}

        <div className="mx-auto p-10"></div>

        <Link to="/">
          <div className="mx-auto">
            <h4>
              <div className="section">
                <FontAwesomeIcon icon={faHome} size="lg" />
              </div>
            </h4>
          </div>
        </Link>
        <br />
        <Footer />
      </div>
    </>
  );
}

export default Photography;
