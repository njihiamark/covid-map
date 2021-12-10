import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { SearchIcon } from "@heroicons/react/solid";
import debounce from "lodash.debounce";

import filterLocationState from "../_state/selectors/filterLocationState";

function FilterLocations() {
  const setValue = useSetRecoilState(filterLocationState());
  const searchHandler = (event) => {
    setValue(event.target.value)
  };
  const debouncedEventHandler = useCallback(
    debounce(searchHandler, 300)
  , []);

  
  return (
    <div className="mt-1 flex rounded-md shadow-sm mb-3">
      <input
        type="text"
        data-testid="filter-element"
        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-2 border-gray-200 p-3"
        placeholder="Filter by location"
        onChange={debouncedEventHandler}
      />
      <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
        <SearchIcon className="h-5 w-5 text-blue-500" />
      </span>
    </div>
  );
}

export default FilterLocations;
