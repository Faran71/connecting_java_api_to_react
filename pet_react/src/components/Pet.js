import "./PetList.css";

const Pet = ({pet, deletePet}) => {

    const handleDeleteClick = (id) => {
        deletePet(pet.id)
    }

    return(
        <div className="pet">
            <h3>{pet.name}</h3>
            <hr></hr>
            <p>Age: {pet.age}</p>
            <p>Breed: {pet.breed}</p>
            <p>Type: {pet.type}</p>
            <button onClick={handleDeleteClick}>DELETE</button>
        </div>
    )

}

export default Pet;