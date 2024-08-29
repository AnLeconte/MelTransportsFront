import Warning from "@/asset/Warning";


const IncidentsAlert = () => {
  return (
    <div className="w-full h-[50vh] bg-whiteIsh px-7 mt-40"> 
    <h3 className="font-medium text-2xl/[5rem] text-blueOcean">Perturbation en cours sur le réseau</h3>
    {/* Données incidents */}
    <div className="flex inline-flex font-medium text-[17px] text-incident ml-7">
       <Warning/> <p className="ml-2">Travaux sur la ligne [ligne] : l'arrêt [station] n'est pas desservi</p>
    </div>
    <p className="ml-7">En raison de travaux de maintenance, votre ligne est déviée:
    <p className="ml-2">► Dans les deux directions, les arrêts Victoire, Lambersart Hôtel de Ville et La Carnoy ne sont pas desservis.</p>
    </p>
    </div>
    

  );
};

export default IncidentsAlert;