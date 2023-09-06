import Pet from "./Pet";

const PetList = ({pets}) => {

    const petComponents = pets.map((pet) => {
        return <Pet key={pet.id} pet={pet}/>
    })

    return(
        <div>
           {petComponents} 
        </div>
    )

}

export default PetList;