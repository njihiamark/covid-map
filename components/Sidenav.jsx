import { SearchIcon } from "@heroicons/react/solid";

function Sidenav() {
  return (
    <div className="bg-white shadow sm:min-h-screen p-3">
      <div className="border-b-2 border-gray-100">
        <h1 className="font-medium text-lg">Total cases confirmed</h1>
        <p className="text-gray-500 text-sm">Last updated at</p>
        <p className="text-3xl pb-3 pt-4 text-red-700">3M</p>
      </div>
      <div className="grid grid-cols-2 gap-4 pb-4 pt-4">
        <div className="text-yellow-700">Confirmed cases</div>
        <div className="text-gray-500">30</div>
        <div className="text-green-700">Recovered cases</div>
        <div className="text-gray-500">0</div>
        <div className="text-purple-700">Death cases</div>
        <div className="text-gray-500">0</div>
      </div>

      <div className="mt-1 flex rounded-md shadow-sm mb-3">
        <input
          type="text"
          data-testid="filter-element"
          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-2 border-gray-200 p-3"
          placeholder="Filter by location"
        />
        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
          <SearchIcon className="h-5 w-5 text-blue-500" />
        </span>
      </div>
      <div class="divide-y divide-blue-100">
        <div className="p-3 cursor-pointer hover:bg-gray-100">Harris, Texas</div>
        <div className="p-3 cursor-pointer hover:bg-gray-100">Miami-Dade, Florida</div>
        <div className="p-3 cursor-pointer hover:bg-gray-100">Cook, Illinois</div>
      </div>
    </div>
  );
}

export default Sidenav;
