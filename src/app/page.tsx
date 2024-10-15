
'use client'

import axios from "axios";
import SearchItineraireForm from "./searchItineraireForm/SearchItineraireForm";
import IncidentsAlert from "./incidentsAlert/IncidentsAlert";
import {useEffect, useState} from "react";

export default function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if(data != null)
            console.log(data)
    }, [isFetching]);
    const fetchData = async () => {
        const responseApi = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BACK}station`
        ).then(() => {setData(responseApi.data), setIsFetching(true)});
        console.log(responseApi);

        //setData(response.data);

    };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow relative items-center">
        <img
          src="/assets/backgroundImage.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
          style={{ objectPosition: "center 10%" }}
        />
        <div className="relative z-10 p-4 flex justify-end items-center">
          <SearchItineraireForm />
        </div>
        <div className="relative z-10">
          <IncidentsAlert/>
        </div>

        
      </div>
    </div>
  );

}

