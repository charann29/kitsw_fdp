// VideoGrid.js
import React from 'react';
import './VideoGrid.css';
import VideoCard from './VideoCard';

function VideoGrid() {
  return (
    <div className="video-grid">
      <VideoCard
        thumbnail="https://i.ytimg.com/vi/xyz/default.jpg"
        title="Best way to Master System Design"
        channel="Piyush Garg"
        views="17K views"
        date="6 days ago"
      />
      <VideoCard
        thumbnail="https://i.ytimg.com/vi/abc/default.jpg"
        title="భగవద్గీత అధ్యాయం - 1"
        channel="Telugu Now"
        views="29K views"
        date="14 hours ago"
      />
    </div>
  );
}

export default VideoGrid;
