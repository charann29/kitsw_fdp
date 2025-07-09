// VideoCard.js
import React from 'react';
import './VideoCard.css';

function VideoCard({ thumbnail, title, channel, views, date }) {
  return (
    <div className="video-card">
      <img src={thumbnail} alt="thumbnail" className="thumbnail" />
      <div className="video-info">
        <h4 className="title">{title}</h4>
        <p className="channel">{channel}</p>
        <p className="details">{views} • {date}</p>
      </div>
    </div>
  );
}

export default VideoCard;
