import Warning from "@/asset/Warning";
import SearchDiv from "../searchDiv/SearchDiv";
import { useIncidentData } from "../hook/useIncidentData";
import Link from "next/link";

const IncidentsAlert = () => {
  const { dataIncident } = useIncidentData();
  return (
    <div className="w-full h-[64vh] bg-whiteIsh px-7 mt-40">
      <h3 className="font-medium text-2xl/[5rem] text-blueOcean">
        Perturbation en cours sur le réseau
      </h3>
      {/* Données incidents */}
      {dataIncident.map((incident) => (
        <>
          <div className="flex inline-flex font-medium text-[17px] text-incident ml-7">
            <Warning />
            <p className="ml-2">{incident.intitule}</p>
          </div>

          <div className="text-blackIsh">
            <p className="ml-7">{incident.details}</p>
            <p className="ml-10">
              ► Veuillez vous rendre{" "}
              <Link href="/perturbations" className="underline">
                <span>ici </span>
              </Link>
              pour plus de détails
            </p>
          </div>
        </>
      ))}
      <SearchDiv />
    </div>
  );
};

export default IncidentsAlert;
