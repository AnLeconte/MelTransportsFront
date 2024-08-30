import ArrowDown from "@/asset/ArrowDown";
import Arrow from "@/asset/Arrows";
import React from "react";

const SearchItineraireForm = () => {
  return (
    <div className="bg-whiteIsh h-[64vh] w-[37vw] mr-7 mt-24 pt-7 space-y-3 flex flex-col items-center">
      <h3 className="text-blackIsh font-medium uppercase text-xl/[2rem]">
        Rechercher un itinéraire
      </h3>

      <div className="flex flex-col space-y-2">
        <div className="flex items-center w-[24vw]">
          <input
            className="bg-white pl-2 h-[6vh] w-full border-solid border border-blueGrey placeholder-blueGrey"
            placeholder="Départ"
          ></input>
        </div>
        <div className="flex items-center w-[24vw]">
          <input
            className="bg-white pl-2 h-[6vh] w-full border-solid border border-blueGrey placeholder-blueGrey"
            placeholder="Arrivée"
          ></input>
        </div>
      </div>

      <button className="relative -top-[11vh] ml-[30vw]">
        <Arrow />
      </button>

      <div className="inline-flex">
        <div dir="ltr" className="-mt-[7vh]">
          <button
            className="bg-bouton1 rounded-s-lg h-[6vh] w-[12vw] text-white bg-bouton1"
          >
            Départ à
          </button>
        </div>
        <div className="-mt-[7vh]" dir="rtl">
          <button
            className="bg-bouton2 rounded-s-lg h-[6vh] w-[12vw] text-white bg-bouton2"
          >
            Arrivé à
          </button>
        </div>
      </div>
      <div className="flex inline-flex items-start">
        <input
          className="bg-white ml-4 h-[5vh] w-[15vh] border-solid border border-blueGrey"
        >
        </input>
        <input
          className="bg-white ml-4 h-[5vh] w-[15vh] border-solid border border-blueGrey"
        ></input>
        <div className="underline text-accent ml-7 mt-1">
          <a href="">Partir maintenant</a>
        </div>
      </div>
      <div className="inline-flex">
        <a className="inline-flex underline text-accent mt-2 mr-5" href="">Plus d'options<ArrowDown/></a>
        <button
          className="bg-accent rounded h-[6vh] w-[12vw] text-white"
        >
          Rechercher
        </button>





      </div>
    </div>

  );
};

export default SearchItineraireForm;