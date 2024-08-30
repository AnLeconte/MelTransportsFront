'use client'

import React, {useEffect, useState} from 'react';
import axios from "axios";

const Page = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modeTransport, setModeTransport] = useState("66d027724076bcff958c62f5")

    useEffect(() => {
        axios
            .get("http://localhost:5000/ligne")
            .then(data => setData(data.data.ligneData))
            .then(() => setLoading(false))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        renderData()
    }, [modeTransport]);
    function handleChangeSelect(value) {
        setModeTransport(value)
    }
    function renderData () {
        if (loading) {
            console.log(data)
            return <p>Loading</p>
        }
        const lignes = data
            .filter((ligne) => ligne.type[0] === modeTransport)
            .map((ligne) => (
                <ul key={ligne._id}>
                    <li>{ligne.nom}</li>
                    <li>{ligne.premier_depart}</li>
                    <li>{ligne.dernier_depart}</li>
                </ul>
            ))
        return lignes
    }
    return (
        <div>
            <select onChange={(e) => handleChangeSelect(e.target.value)}>
                <option value="66d027724076bcff958c62f5">Bus</option>
                <option value="66d0278b4076bcff958c62f7">Tram</option>
                <option value="66d027dc4076bcff958c62ff">Metro</option>
            </select>
            {renderData()}
            <button>Chercher les lignes</button>
        </div>
    );
};

export default Page;
