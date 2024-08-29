import React from "react";
import WarningBig from "@/asset/WarningBig";

const Alert = () => {
  return (
    <div className="w-full h-[64px] bg-alert flex items-center  px-4">
      <div className=" inline-flex font-medium  ml-7"></div>
      <WarningBig /><p className="text-[17px] text-incident ml-3 mb-1.5 flex content-end">Travaux sur la ligne [ligne] : l'arrêt [station] n'est pas desservi</p>
    </div>



  );
};

export default Alert;