import FindTalent from "./SearchAndFilter";

const SearchTalent = () => {
  // original const, not mutable
  // adding mutation with state via uesState("default value/state")

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-4 lg:px-4">
          <h1 className="text-3xl font-bold text-gray-900"> Search</h1>
        </div>
      </header>

      <div className="flex flex-row">
        <div className="basis-1/2 mt-2 mx-6 py-2 px-2  relative rounded-md shadow-lg border-2  text-xl text-gray-500">
          <FindTalent />
        </div>

        <div className="basis-1/2 mt-2 mx-6 py-2 px-2  relative rounded-md shadow-lg border-2  text-xl text-gray-500">
          ToDo:
        </div>
      </div>
    </div>
  );
};

export default SearchTalent;
