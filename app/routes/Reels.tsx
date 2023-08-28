import React, { useState } from 'react';

interface ReelsFeatureProps {
  videoUrls: string[]; // Array of video URLs
}

const videoUrls = [
  'video_url_1.mp4',
  'video_url_2.mp4',
  'video_url_3.mp4',
  // Add more video URLs
];
const Reels: React.FC<ReelsFeatureProps> = ({ videoUrls }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {videoUrls.map((videoUrl, index) => (
        <div
          key={index}
          className="relative cursor-pointer"
          onClick={() => openVideoModal(videoUrl)}
        >
          <img
            src={`${videoUrl}?w=400`} // Thumbnail image URL
            alt={`Reel ${index}`}
            className="w-full h-auto rounded-md"
          />
        </div>
      ))}

      {selectedVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeVideoModal}
        >
          <video
            src={selectedVideo}
            controls
            className="w-full h-auto max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default Reels;
