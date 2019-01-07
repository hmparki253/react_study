import number from './number';
import color from './color';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    numberData: number,
    colorData: color
});

// // 초기상태
// const initialState = {
//     color: 'black',
//     number: 0
// };

// // 리듀서 함수(state, action)
// function counter(state = initialState, action) {
//     switch(action.type) {
//         case types.INCREMENT:
//             return {
//                 ...state,
//                 number: state.number + 1
//             };
//         case types.DECREMENT:
//             return {
//                 ...state,
//                 number: state.number - 1
//             };
//         case types.SET_COLOR:
//             return {
//                 ...state,
//                 color: action.color
//             };
//         default:
//             return state;
//     }
// };

export default reducers;