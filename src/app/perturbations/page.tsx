"use client";

import React from "react";
import { useIncidentData } from "../hook/useIncidentData"



const AlertIncidentPage = () => {
  const { dataIncident } = useIncidentData() 



  return (
    <div className="min-h-screen p-4">
      <h1 className="text-center font-extrabold text-red-600 text-2xl">Infos Perturbations</h1>
      {dataIncident.map((incident) => (
        <ul key={incident.id} className="mb-4 border p-2 rounded text-center  text-red-600">
          <li className="font-bold">{incident.intitule}</li>
          <li>{incident.details}</li>
          <li>Les station: {incident.stations} sont impactés veuillez nous excuser pour ce désagrément </li>
        </ul>
      ))}
    </div>
  );
};

export default AlertIncidentPage;