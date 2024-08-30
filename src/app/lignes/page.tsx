'use client'

import React, {useEffect, useState} from 'react';
import axios from "axios";

const Page = () => {
    const bus = "https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2024/01/18/node_1420482/57412998/public/2024/01/18/10903550.jpeg?itok=SLC5IBP41705607798";
    const tram ="https://live.staticflickr.com/65535/53561952843_1fbfd8544b_b.jpg";
    const metro = "https://live.staticflickr.com/4027/4359907204_ec7e43e4af_b.jpg";
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
        renderData();
        renderPhoto();
    }, [modeTransport]);

    function handleChangeSelect(value) {
        setModeTransport(value)
    }

    function renderPhoto() {
        if (modeTransport === "66d027724076bcff958c62f5") {
            return <img className="max-h-96 max-w-96  rounded-lg" src={bus} alt="bus"/>
        }
        else if (modeTransport === "66d0278b4076bcff958c62f7") {
            return <img className="max-h-96 max-w-96 rounded-lg" src={tram} alt="tram"/>
        }
        else if (modeTransport === "66d027dc4076bcff958c62ff") {
            return <img className="max-h-64 max-w-96 rounded-lg" src={metro} alt="metro"/>
        }
    }
    function renderData () {
        if (loading) {
            // console.log(data)
            return <p>Loading</p>
        }
        const lignes = data
            .filter((ligne) => ligne.type[0] === modeTransport)
            .map((ligne) => (
                <ul key={ligne._id} className="flex flex-row justify-around width w-full">
                    <li className="mx-10 mt-4">{ligne.nom}</li>
                    <li className="mx-10 mt-4">{new Date(ligne.premier_depart).toLocaleString()}</li><br />
                    <li className="mx-10 mt-4">{new Date(ligne.dernier_depart).toLocaleString()}</li>
                </ul>
            ))
        return lignes
    }
    return (
        <div className="h-screen">
            <h1 className="my-10 text-center text-4xl">Lignes de la métropole Lilloise</h1>
            <div className="my-20">
                <form className="max-w-sm mx-auto">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choisissez un type de transport :</label>
                    <select onChange={(e) => handleChangeSelect(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="66d027724076bcff958c62f5">Bus</option>
                        <option value="66d0278b4076bcff958c62f7">Tram</option>
                        <option value="66d027dc4076bcff958c62ff">Metro</option>
                    </select>
                </form>
            </div>
            <div className="flex justify-around">
                {renderPhoto()}
                <div className="flex flex-col">
                    <ul className="flex flex-row justify-around width w-full">
                        <li className="mx-10 mt-4">Nom</li>
                        <li className="mx-10 mt-4">Premier départ</li><br />
                        <li className="mx-10 mt-4">Dernier départ</li>
                    </ul>
                    {renderData()}
                </div>
            </div>
        </div>
    );
};

export default Page;
