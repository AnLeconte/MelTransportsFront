import React from "react";
import WarningBig from "@/asset/WarningBig";

const Alert = () => {
    return (
        <div className="w-full h-[64px] bg-alert flex items-center  px-4">
           <div className=" inline-flex font-medium text-[17px] text-incident ml-7">
        <p className="inline-flex"><WarningBig /> <span className="ml-3 mb-1.5 flex content-end">Travaux sur la ligne [ligne] : l'arrêt [station] n'est pas desservi</span></p>
      </div>


        </div>
    );
};

export default Alert;