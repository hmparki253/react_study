import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// DUCKS 구조를 따르는 리덕스 모듈
// 액션 타입 정의
const SET_INPUT = 'input/SET_INPUT'; // 문자열 앞부분에 리듀서이름 적어주기 ex) 리듀서이름/액션타입 -> 서로 다른 리듀서끼리 중복을 막기위함
// 액션 생성함수로 액션 생성
export const setInput = createAction(SET_INPUT);

// 리듀서 초기상태 정의
const initialState = Map({
    value: ''
});

// 리듀서 함수 생성   *) 잊지말자 리듀서 함수는 '순수함수'여야만 한다.
// * 순수함수란? : 입력 데이터를 변경하지 않고 외부상태에 의존하지 않는 함수
export default handleActions({
    [SET_INPUT]: (state, action) => {
        return state.set('value', action.payload)
    }
}, initialState);



