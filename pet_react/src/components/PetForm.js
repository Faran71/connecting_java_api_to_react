import { useState } from "react";
import Pet from "./Pet"
import "./PetList.css"

const PetForm = ({postPet}) => {

    const [statePet, setStatePet] = useState(
        {
            name:"",
            age:"",
            type:"",
            breed:""
        }
    )

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let clonnedPets = {...statePet};
        clonnedPets[propertyName] = event.target.value;
        setStatePet(clonnedPets);

    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postPet(statePet);
        setStatePet(
            {
                name:"",
                age:"",
                type:"",
                breed:""
            }
        )
    }

    return(
        <div className="pet-form">
            <h2>Add New Pet</h2>
            <form className="inputs" onSubmit={handleFormSubmit}>
                <div className="each-input">
                <label>Name</label>
                <input 
                    id="pet-name"
                    name="name"
                    type="text"
                    placeholder="Enter Pet Name"
                    onChange={handleChange}
                    value={statePet.name}
                />
                </div>

                <div className="each-input">
                <label>Age</label>
                <input 
                    id="pet-age"
                    name="age"
                    type="number"
                    min={1}
                    placeholder="Enter Pet Age"
                    onChange={handleChange}
                    value={statePet.age}
                />
                </div>

                <div className="each-input">
                <label>Breed</label>
                <input 
                    id="pet-breed"
                    name="breed"
                    type="text"
                    placeholder="Enter Pet Breed"
                    onChange={handleChange}
                    value={statePet.breed}
                />
                </div>

                <div className="each-input">
                <label>type</label>
                <input 
                    id="pet-type"
                    name="type"
                    type="text"
                    placeholder="Enter Pet Type"
                    onChange={handleChange}
                    value={statePet.type}
                />
                </div>
                <input type="submit" value="Add Pet"/>
            </form>
        </div>
    )

}

export default PetForm;