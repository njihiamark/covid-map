import React from "react";
import CovidStats from "./CovidStats";
import FilterLocations from "./FilterLocations";
import Locations from "./Locations";

function Sidenav() {
  return (
    <div className="bg-white shadow sm:max-h-screen relative overflow-auto">
      <div className="sticky top-0 bg-white p-3">
        <CovidStats />
        <FilterLocations />
      </div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Locations />
      </React.Suspense>
    </div>
  );
}

export default Sidenav;
