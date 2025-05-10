import { useEffect, useState } from "react";
import Card from "./components/Card";
import { dataTable } from "./components/data";
import Utilisateur from "./components/ApiCard";

function App() {
  const [datas, setDatas] = useState([]);

  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setDatas(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-auto  w-full">
      <div className="md:h-48 h-28 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
      <div className="grid max-w-7xl mx-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {dataTable.map((data) => (
          <Card
            image={data.image}
            username={data.username}
            projects={data.projects}
            prototypes={data.prototypes}
          />
        ))}
      </div>
      <div className="grid max-w-7xl mx-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {datas.map((data) => (
          <Utilisateur utilisateur={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
