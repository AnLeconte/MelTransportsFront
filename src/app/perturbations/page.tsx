"use client";

import React from "react";
import { useIncidentData } from "../hook/useIncidentData";

const AlertIncidentPage = () => {
  const { dataIncident } = useIncidentData();

  return (
    <div className="min-h-screen flex justify-center items-start p-4 mt-10">
      <div className="text-center">
        <h1 className="font-extrabold text-red-600 text-2xl uppercase mb-4">
          Infos Perturbations
        </h1>
        <div className="w-[500px] h-[250px] flex items-center justify-center bg-whiteIsh shadow-md">
          <div>
            {dataIncident.map((incident) => (
              <ul
                key={incident.id}
                className="mb-4 p-2 rounded text-center text-red-600"
              >
                <li className="font-bold underline">{incident.intitule}</li>
                <br />
                <li>{incident.details}</li>
                <li>
                  Les stations : {incident.stations} sont impactées. Veuillez
                  nous excuser pour ce désagrément
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertIncidentPage;