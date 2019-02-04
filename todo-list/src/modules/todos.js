import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 타입 정의
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성함수 생성 
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

// 리듀서 초기상태 정의
const initialState = List([
    Map({
        id: 0,
        text: '리액트 공부하기',
        done: true
    })
    // }),
    // Map({
    //     id: 1,
    //     text: '컴포넌트 스타일링 해보기',
    //     done: false
    // })
]);

// 리듀서 함수
export default handleActions({
    // 새로운 값 입력 
    [INSERT]: (state, action) => {
        // 어떤 데이터를 처리하는지 쉽게 볼 수 있도록 레퍼런스 만들기 
        const { id, text, done } = action.payload;

        return state.push(Map({
            id,
            text,
            done
        }));
    },
    // 완료상태를 토글
    [TOGGLE]: (state, action) => {
        const { payload: id } = action.payload;
        const index = state.findIndex(todo => todo.get('id') === id);

        // updateIn을 이용 해당 index의 반대 값으로 세팅 
        return state.updateIn([index, 'done'], done => !done);
    },
    [REMOVE]: (state, action) => {
        const { payload: id } = action;
        const index = state.findIndex(todo => todo.get('id') === id);
        return state.delete(index);
    }
}, initialState);