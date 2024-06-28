import { useEffect, useState } from "react";
import "./App.css";
import {
  FindPetsByStatusStatusEnum,
  Pet,
  PetApi,
} from "./api/path-to-generated-client";

function App() {
  const [availablePets, setAvailablePets] = useState<Pet[]>([]);

  useEffect(() => {
    console.log("chamada da api");
    const api = new PetApi();
    api
      .findPetsByStatus({ status: [FindPetsByStatusStatusEnum.Available] })
      .then((response) => {
        console.log("teste", response);
        setAvailablePets(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {availablePets.map((pet) => (
        <div key={pet.id}>
          Nome: {pet.name}
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
