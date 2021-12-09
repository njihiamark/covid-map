import Map from "./components/Map";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex text-gray-600">
        <div className="hidden md:w-1/3 md:block lg:w-1/6">
          <Sidenav />
        </div>
        <div className="w-full md:w-2/3 lg:w-5/6 h-screen">
          <Header />
          <Map />
        </div>
      </div>
    </>
  );
}

export default App;
