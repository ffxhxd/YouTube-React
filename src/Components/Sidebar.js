import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { MdOutlineLiveTv } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { IoMdMusicalNotes } from "react-icons/io";
import { MdSportsCricket } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { MdLocalMovies } from "react-icons/md";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-5 shadow-lg w-48 font-medium">
      <div>
        <ul className="">
          <Link to="/">
            <li className="flex items-center ">
              {" "}
              <GoHomeFill className="mr-2" /> Home
            </li>
          </Link>
          <li className="flex items-center ">
            {" "}
            <BsFillCameraReelsFill className="mr-2" /> Shorts
          </li>
          <li className="flex items-center ">
            {" "}
            <BiSolidVideos className="mr-2" /> Videos
          </li>
          <li className="flex items-center ">
            {" "}
            <MdOutlineLiveTv className="mr-2" /> Live
          </li>
        </ul>
      </div>

      <h1 className="font-bold pt-5">Explore</h1>
      <ul className="">
        <li className="flex items-center ">
          {" "}
          <IoMdMusicalNotes className="mr-2" /> Music
        </li>
        <li className="flex items-center ">
          {" "}
          <MdSportsCricket className="mr-2" /> Sports
        </li>
        <li className="flex items-center ">
          {" "}
          <SiYoutubegaming className="mr-2" /> Gaming
        </li>
        <li className="flex items-center ">
          {" "}
          <MdLocalMovies className="mr-2" /> Movies
        </li>
      </ul>
      <h1 className="font-bold pt-5 mb-4">Subscriptions</h1>
      <ul className="flex flex-col gap-3">
        <li className="flex items-center">
          <img
            className="w-6 h-6 mr-2 rounded-xl"
            alt="logo"
            src="https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo-700x394.png"
          />
          Mr Beast
        </li>
        <li className="flex items-center">
          <img
            className="w-6 h-6 mr-2 rounded-xl"
            alt="logo"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEpnCQi0dAeMTldiIqdN7EvcF1Zjkd1mlxpvhgVqbdNS1-NhM76U95c7I8lzrajlF1_8EwUY8fs2flk92KwPXskBBpFCfMVJr5jfA3bBvOv_tzqxPaEEpBraCpHoxz4V_4SRt4YFIWr70n/s724/IMG_20201026_194220.jpg"
          />
          Lv Babbar
        </li>
        <li className="flex items-center">
          <img
            className="w-6 h-6 mr-2 rounded-xl"
            alt="logo"
            src="https://avatars.githubusercontent.com/u/46283609?s=280&v=4"
          />
          Fireship
        </li>
        <li className="flex items-center">
          <img
            className="w-6 h-6 mr-2 rounded-xl"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpyJtjqVgZ9Z6Z127D0R4wLv6kJ5_4mY1Vo9ojVCPReU5MetF7OJ16T_XVqXOH_sq9lQ&usqp=CAU"
          />
          T-Series
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
