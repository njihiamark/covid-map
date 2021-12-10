import { useRecoilValueLoadable } from "recoil";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import millify from "millify";


import locationStatsState from "../_state/selectors/locationStatsState";

function CovidStats() {
  const stats = useRecoilValueLoadable(locationStatsState);
  dayjs.extend(relativeTime);

  switch (stats.state) {
    case "hasValue":
      return (
        <>
          <div className="border-b-2 border-gray-100" data-testid="stat-div-1">
            <h1 className="font-medium text-lg">Total cases confirmed</h1>
            <p className="text-gray-500 text-sm">Last updated {dayjs(`${stats?.contents[0].lastUpdate}`).fromNow()}</p>
            <p className="text-3xl pb-3 pt-4 text-red-700">
              {millify(stats?.contents[0].confirmed.value)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pb-4 pt-4">
            <div className="text-green-700">Recovered cases</div>
            <div className="text-gray-500">
              {millify(stats?.contents[0].recovered.value)}
            </div>
            <div className="text-purple-700">Death cases</div>
            <div className="text-gray-500">
              {millify(stats?.contents[0].deaths.value)}
            </div>
          </div>
        </>
      );
    case "loading":
      return <div data-testid="loading">Loading...</div>;
    case "hasError":
      return <div className="text-red-700">There was an error!</div>;
    default:
      return <div>No data available</div>;
  }
}

export default CovidStats;
