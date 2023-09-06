import Pet from "./Pet";
import "./PetList.css";

const PetList = ({pets, deletePet}) => {

    const petComponents = pets.map((pet) => {
        return <Pet key={pet.id} pet={pet} className="pet" deletePet={deletePet}/>
    })

    return(
        <div className="pet-list">
           {petComponents} 
        </div>
    )

}

export default PetList;