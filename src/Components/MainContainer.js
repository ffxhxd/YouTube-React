import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div style={isMenuOpen ? { width: "89%" } : { width: "100%" }}>
      <div className="overflow-auto">
        <ButtonList />
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
