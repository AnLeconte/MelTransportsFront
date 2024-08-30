import Search from "@/asset/Search";
import Warning from "@/asset/Warning";


const SearchDiv = () => {
  return (

    <div className="inline-flex">
      <div className="bg-searchDiv  w-[35vw] h-[20.5vh] ml-7 mr-56 mt-14 pt-7 space-y-4 flex flex-col items-center">
        <h3 className="font-medium text-blackIsh uppercase text-xl/[2rem]">
          Prochains passages
        </h3>
        <div className="flex items-center w-[26vw]">
          <input
            className="bg-white  pl-2 h-[6vh] w-full border-solid border-2 border-accent placeholder-blueGrey"
            placeholder="Rechercher un arrêt..."
          ></input>

          <div className="inline-flex">

            <div dir="rtl">
              <button className="bg-accent rounded-s-lg h-[6vh] w-[4.5vw] text-white">
                <span className="flex mr-5"><Search /></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-searchDiv  w-[35vw] h-[20.5vh] ml-7 mr-56 mt-14 pt-7 space-y-4 flex flex-col items-center">
        <h3 className="font-medium text-blackIsh uppercase text-xl/[2rem]">
          Rechercher une ligne
        </h3>
        <div className="flex items-center w-[26vw]">
          <input
            className="bg-white pl-2 h-[6vh] w-full border-solid border-2 border-accent placeholder-blueGrey"
            placeholder="Rechercher une ligne..."
          ></input>

          <div className="inline-flex">

            <div dir="rtl">
            <button className="bg-accent rounded-s-lg h-[6vh] w-[4.5vw] text-white">
                <span className="flex mr-5"><Search /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SearchDiv;