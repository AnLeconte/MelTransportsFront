'use client'

import React from "react";
import WarningBig from "@/asset/WarningBig";
import { useIncidentData } from "../hook/useIncidentData";

const Alert = () => {
  const { dataIncident } = useIncidentData();

  return (
    <div className="w-full h-[64px] bg-alert flex items-center  px-4">
      <div className="inline-flex font-medium ml-7"></div>
      <WarningBig />
      {dataIncident.map((incident) => (
        <>
          <p className="text-[17px] text-incident ml-3 mb-1.5 flex content-end">
            {incident.details}
          </p>
        </>
      ))}
    </div>
  );
};

export default Alert;