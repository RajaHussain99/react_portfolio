import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playPromise = videoRef.current.play();

    if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started successfully (no user interaction required).
          })
          .catch(error => {
            // Autoplay was prevented or not supported
            console.error('Video playback error:', error);
          });
      }
    }, []);

  return (
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        preload="metadata"
        style={{ pointerEvents: 'none' }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  );
};

export default VideoPlayer;