import React, {useEffect, useState} from 'react';
import axios from "axios";

const SearchDeparts = () => {
    const [station, setStations] = useState(null);
    const [ligne, setLignes] = useState(null);
    const [searchStation, setSearchStation] = useState("");
    const [loading, setLoading] = useState(true);

    function renderDataLignes () {
        if (loading) {
            return <p>Loading</p>
        }
        const lignes = ligne
            .filter((ligne) => ligne.stations.includes(searchStation) )
            .map((ligne) => (
                <ul key={ligne._id}>
                    <li>{ligne.nom}</li>
                    <li>{ligne.premier_depart}</li>
                    <li>{ligne.dernier_depart}</li>
                </ul>
            ))
        return lignes
    }

    function renderDataStations () {
        if (loading) {
            return <p>Loading</p>
        }
        const stations = station
            .map((station) => (
                <ul key={station._id}>
                    <li onClick={() => setSearchStation(station._id)}>{station.nom}</li>
                </ul>
            ))
        return stations
    }

    useEffect(() => {
        axios
            .get("http://localhost:5000/station")
            .then(data => setStations(data.data.stationData))
            .catch(error => console.log(error));
        axios
            .get("http://localhost:5000/ligne")
            .then(data => setLignes(data.data.ligneData))
            .then(() => setLoading(false))
            .catch(error => console.log(error));
    }, []);

    return (
        <div style={{border : "solid 1px black"}}>
            {renderDataStations()}
            <div>
                <p>Lignes passant par cette station : </p>
                    {renderDataLignes()}
                <p>Hello !</p>
            </div>
        </div>
    );
};

export default SearchDeparts;
