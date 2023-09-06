import { useEffect, useState } from "react";
import PetList from "../components/PetList";

const PetsContainer = () => {

    const[pets, setPets] = useState([]);

    const fetchPets = async () => {
        const response = await fetch("http://localhost:8080/pets")
        const data = await response.json();
        setPets(data);
    }

    useEffect(() => {
        fetchPets();
    })

    return(
        <div>
            <h1>Pets</h1>
            <PetList pets={pets}/>

        </div>
    )

}

export default PetsContainer;