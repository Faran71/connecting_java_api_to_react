import { useEffect, useState } from "react";
import PetList from "../components/PetList";
import PetForm from "../components/PetForm";

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

    const postPet = async (newPet) => {
        const response = await fetch("http://localhost:8080/pets",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(newPet)
        })
        const savedPet = await response.json();
        setPets([...pets,savedPet]);
    }

    const deletePet = async (id) => {
        const response = await fetch("http://localhost:8080/pets/"+ id, {
            method:"DELETE",
            headers: {"Content-Type": "application/json"}
        })
        const keptPets = pets.filter((pet) => pet.id !== parseInt(id))
        setPets(keptPets)
    }

    return(
        <div>
            <h1>Pets</h1>
            <PetList pets={pets} deletePet={deletePet}/>
            <PetForm postPet={postPet}/>

        </div>
    )

}

export default PetsContainer;