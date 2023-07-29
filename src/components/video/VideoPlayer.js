import React, { useRef, useEffect, useState } from 'react';

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setShowVideo(true);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    if (showVideo) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            // Autoplay started successfully (no user interaction required).
          })
          .catch(error => {
            // Autoplay was prevented or not supported.
            console.error('Video playback error:', error);
          });
      }
    }
  }, [showVideo]);

  return (
    <div className={`${showVideo ? 'block' : 'hidden'}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata" 
      >
        <source src={videoUrl} type="video/mp4" />
        {/* Add additional source elements for other formats if needed */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;