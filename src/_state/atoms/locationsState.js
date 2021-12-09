import { atom } from 'recoil';

import fetchLocationsState from "../selectors/fetchLocationsState";

const locationsState = atom({
    key: 'locationsState',
    default: fetchLocationsState
});

export default locationsState;