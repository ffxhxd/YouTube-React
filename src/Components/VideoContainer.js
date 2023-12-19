import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constans";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      console.log(json);
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return videos.length === 0 ? (
    <h1>loading..........</h1>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
