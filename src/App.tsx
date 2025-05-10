import { useEffect, useState } from "react";
import Card from "./components/Card";
import { dataTable } from "./components/data";
import Utilisateur from "./components/ApiCard";

function App() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setDatas(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête avec dégradé */}
      <div className="w-full md:h-48 h-28 bg-gradient-to-r from-violet-500 to-fuchsia-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section des données locales */}
        <div className="relative -mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dataTable.map((data, index) => (
              <Card
                key={`local-${index}`}
                image={data.image}
                username={data.username}
                projects={data.projects}
                prototypes={data.prototypes}
              />
            ))}
          </div>
        </div>

        {/* Section des données API */}
        <div className="mt-10">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <p className="text-gray-500">Chargement des données...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {datas.map((data) => (
                <Utilisateur key={`api-${data.id}`} utilisateur={data} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
