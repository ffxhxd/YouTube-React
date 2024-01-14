import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constans";
import { cacheResults } from "../Utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(searchQuery);
    //debouncing here : make an api call on every key press but if the diference is < 200ms decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update chache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-12 p-2 py-5 m-1 shadow-lg">
      {/* Left Section */}
      <div className="col-span-2 md:col-span-1 flex items-center">
        <div className="">
          <GiHamburgerMenu
            size={25}
            className="cursor-pointer"
            onClick={() => toggleMenuHandler()}
          />
        </div>
        <div className="mr-2">
          <img
            alt="logo"
            src="https://cdn.pixabay.com/photo/2020/12/14/12/38/youtube-5830725_1280.png"
            className="h-8 mx-2 "
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="col-span-8 md:col-span-10 flex flex-col ">
        <div className="w-full flex items-center">
          <input
            type="text"
            className="w-full md:w-1/2 border-2 p-1 mx-2 rounded-lg "
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="md:ml-2">
            <FaSearch size={25} />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed absolute p-2 mt-9 ml-2 w-[55%] bg-white rounded-lg">
            <ul className="">
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-1 flex items-center rounded-lg shadow-md font-[400] cursor-pointer hover:bg-gray-200 "
                >
                  <FaSearch className="mx-2" /> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="col-span-2 md:col-span-1 flex items-center justify-end">
        <FaUserCircle size={35} className="md:ml-2" />
      </div>
    </div>
  );
};

export default Header;
