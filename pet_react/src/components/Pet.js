const Pet = ({pet}) => {

    return(
        <>
            <h3>{pet.name}</h3>
            <p>Age: {pet.age}</p>
            <p>Breed: {pet.breed}</p>
            <p>Type: {pet.type}</p>
        </>
    )

}

export default Pet;