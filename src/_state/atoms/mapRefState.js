import { atom } from 'recoil';

const mapRefState = atom({
    key: 'mapRefState',
    default: {},
    dangerouslyAllowMutability: true
});

export default mapRefState;