import { useEffect, useState } from "react";
import Skill from "./Skill";


const ANIMALS = ["engineering", "contracts", "innovation", "finance"];

const SearchTalent = () => {
  // original const, not mutable
  // adding mutation with state via uesState("default value/state")

  const [ location, updateLocation] = useState("");
  const [ animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds =[]



  useEffect(() => {
    requestSkills()
  }, []); 

  
  async function requestSkills() {
    const res = await fetch (
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed${breed}`
    )
    const json = await res.json()

    setPets(json.pets)

  }


  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-4 lg:px-4">
          <h1 className="text-3xl font-bold text-gray-900">Talent Search</h1>
        </div>
      </header>

      <div className="flex flex-row">
        <div className="basis-1/2 mt-2 mx-6 py-2 px-2  relative rounded-md shadow-lg border-2  text-xl text-gray-500">
          <form>
            <label htmlFor="location">
              Enter a Location
              <input
                id="location"
                value={location}
                placeholder="location"
                className="border-2  focus:ring-indigo-500 focus:border-indigo-500  my-6 block pl-2 pr-24 sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => updateLocation(e.target.value)}
              />
            </label>
            <div className="w-100">
              <label htmlFor="animal">
                Choose Animal
                <select
                  id="animal"
                  value={animal}
                  onChange={(e) => {
                    updateAnimal(e.target.value);
                    updateBreed("");
                  }}
                  onBlur={(e) => {
                    updateAnimal(e.target.value);
                    updateBreed("");
                  }}
                >
                  <option />
                  {ANIMALS.map((animal) => (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="w-100">
              <label htmlFor="breed">
                Choose Breed
                <select
                disabled={!breeds.length}
                  id="breed"
                  value={breed}
                  onChange={(e) => {
                    updateBreed(e.target.value);
                  }}
                  onBlur={(e) => {
                    updateBreed(e.target.value);
                  }}
                >
                  <option />
                  {breeds.map((breed) => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <button
              type="button"
              className="w-full my-2 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-500  text-base font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="basis-1/2 mt-2 mx-6 py-2 px-2  relative rounded-md shadow-lg border-2  text-xl text-gray-500">
          Results: 
          { pets.map(pet => (
            <Skill name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default SearchTalent;
