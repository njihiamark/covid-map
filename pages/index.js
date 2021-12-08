import Head from "next/head";

import Header from "../components/Header";
import Map from "../components/Map";
import Sidenav from "../components/Sidenav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Covid cases</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
