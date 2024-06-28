import { useEffect, useState } from "react";
import "./App.css";
import { PetApi } from "./api/path-to-generated-client";

function App() {
  const [count, setCount] = useState("");

  useEffect(() => {
    console.log("chamada da api");
    const api = new PetApi();
    api
      .getPetById({ petId: 1 })
      .then((response) => {
        console.log("teste", response);
        setCount(response.name || "");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <>{count}</>;
}

export default App;
