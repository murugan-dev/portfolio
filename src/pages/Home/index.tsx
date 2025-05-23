// import React from 'react'

import Profile from "../../assets/profile.jpeg";
import ConConnectionMedia from "../ConnectionMedia/index";

const Home = () => {
  return (
    <>
    <div className="h-[70dvh]  flex lg:flex-row flex-col items-center justify-around text-white px-40">
      <div className="flex flex-col items-start justify-center gap-5 ">
        <p className="font-bold text-2xl">Hi, I am</p>
        <h1 className="text-3xl w-50 lg:text-4xl xl:text-6xl lg:w-full font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          MURUGAN K
        </h1>
        <p className="text-lg xl:text-2xl font-semibold">SOFTWARE ENGINEER </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded font-semibold cursor-pointer">
          <a
            href="../../assets/Murugan_CV_MERN_Stack.pdf"
            download="MuruganK_Resume.pdf"
          >
            Resume
          </a>
        </button>
      </div>
      <div className="bg-violet-500 h-50 w-50 rounded-full flex items-center justify-center">
        <img
          src={Profile}
          alt="profile"
          className="h-46 w-46 rounded-full mr-2"
        />
      </div>
    </div>
    <div className="h-[10dvh] flex gap-6 lg:gap-12 justify-center items-center mt-4 text-white ">

    <ConConnectionMedia/>
    </div>

    </>
  );
};

export default Home;
