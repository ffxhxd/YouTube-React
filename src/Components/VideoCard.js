import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="lg:bg-white p-4 rounded shadow-md lg:w-full md:w-full sm:w-1/2">
      <img
        className="rounded-lg w-full"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2 truncate">{title}</li>
        <li className="font-medium ">{channelTitle}</li>
        <li className="text-stone-600 text-[13px] font-semibold">
          {statistics.viewCount} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
