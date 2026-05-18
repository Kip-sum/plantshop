import { useEffect, useState } from "react";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import NewPlantForm from "./components/NewPlantForm";
import Search from "./components/Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // fetch plants
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // add plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // sold out
  function handleSoldOut(id) {
    const updatedPlants = plants.map((plant) =>
      plant.id === id
        ? { ...plant, inStock: false }
        : plant
    );

    setPlants(updatedPlants);
  }

  // search filter
  const filteredPlants = plants.filter((plant) =>
    plant.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search
  searchTerm={search}
  onSearchChange={setSearch}

      />

      <PlantList
        plants={filteredPlants}
        onSoldOut={handleSoldOut}
      />
    </div>
  );
}

export default App;