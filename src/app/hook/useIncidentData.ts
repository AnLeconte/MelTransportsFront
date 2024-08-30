'use client'

import { useEffect, useState } from "react";
import axios from "axios";

interface Incident {
  details: string,
  intitule: string,
  id: string,
  stations: string[],
  lignes: string[],
}

export const useIncidentData = () => {
  const [dataIncident, setDataIncident] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/incident")
      .then((response) => {
        setDataIncident(response.data.incidentData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des infos perturbation",
          error
        );
        setError(true);
        setLoading(false);
      });
  }, []);

  return { dataIncident, loading, error };
};