import { useState } from "react";

const SKILLS = ["engineering", "contracts", "innovation", "finance"];

const SearchTalent = () => {
  // original const, not mutable
  // const skill = "Developer";
  // adding mutation with state via uesState("default value/state")
  const [department, setDepartment] = useState("");
  const [skill, setSkill] = useState("");
  const [specialization, setSpecialization] = useState("");
  const specializations = [];
  // const [talent, setTalent] = useState([]);

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
            <label htmlFor="department">
              Enter a Department
              <input
                id="department"
                value={department}
                placeholder="department"
                className="border-2  focus:ring-indigo-500 focus:border-indigo-500  my-6 block pl-2 pr-24 sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => setDepartment(e.target.value)}
              />
            </label>
            <div className="w-100">
              <label htmlFor="skill">
                Choose Skill
                <select
                  id="skill"
                  value={skill}
                  onChange={(e) => {
                    setSkill(e.target.value);
                    setSpecialization("");
                  }}
                  onBlur={(e) => {
                    setSkill(e.target.value);
                    setSpecialization("");
                  }}
                >
                  <option />
                  {SKILLS.map((skill) => (
                    <option key={skill} value={skill}>
                      {skill}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="w-100">
              <label htmlFor="specialization">
                Choose Specialization
                <select
                  id="specialization"
                  value={specialization}
                  onChange={(e) => {
                    setSpecialization(e.target.value);
                  }}
                  onBlur={(e) => {
                    setSpecialization(e.target.value);
                  }}
                >
                  <option />
                  {specializations.map((allSpecializtion) => (
                    <option key={allSpecializtion} value={allSpecializtion}>
                      {allSpecializtion}
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
          ToDo
        </div>
      </div>
    </div>
  );
};

export default SearchTalent;
