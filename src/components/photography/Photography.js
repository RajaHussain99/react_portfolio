import React, { useState } from "react";
import "../../App.css";
import "../../animation.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";

function Photography() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { id: 1, src: "/photos/amalfi.jpg", location: "Amalfi Coast, Italy" },
    { id: 2, src: "/photos/lake_como.jpg", location: "Lake Como, Italy" },
    { id: 3, src: "/photos/zurich.jpg", location: "Zurich, Switzerland" },
    { id: 4, src: "/photos/madinah.jpg", location: "Madinah, Saudi Arabia" },
    { id: 5, src: "/photos/doha.jpg", location: "Doha, Qatar" },
    { id: 6, src: "/photos/sahel.jpg", location: "Sahel, Egypt" },
    { id: 7, src: "/photos/london.jpeg", location: "London, UK" },
    { id: 8, src: "/photos/antigua.JPG", location: "Antigua, Guatemala" },
    { id: 9, src: "/photos/montenegro.JPG", location: "Bay of Kotor, Montenegro" },
    { id: 10, src: "/photos/milan.jpg", location: "Milan, Italy" },
    { id: 11, src: "/photos/golden_gate.jpg", location: "San Francisco, USA" },
    { id: 12, src: "/photos/san_fran.jpg", location: "San Francisco, USA" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-16">
        {/* Back Link */}
        <Link to="/" className="fade-in-header inline-flex items-center gap-2 mb-12 nav-link">
          <FontAwesomeIcon icon={faArrowLeft} size="sm" />
          <span>Back</span>
        </Link>

        {/* Header */}
        <div className="fade-in-header section-header">
          <h2 className="section-title">Travels</h2>
          <p className="section-subtitle">
            around the world on 35mm.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="fade-in-body grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-gray-100"
              onClick={() => setSelectedImage(photo)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={photo.src}
                alt={photo.location}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-sm font-medium tracking-wide">
                    {photo.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FontAwesomeIcon icon={faTimes} size="xl" />
            </button>
            <div
              className="max-w-5xl max-h-[85vh] fade-in-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.location}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <p className="text-white/80 text-center mt-4 text-sm tracking-wide">
                {selectedImage.location}
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="fade-in-footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Photography;
