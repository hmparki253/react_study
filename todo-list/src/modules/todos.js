import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// Ducks 구조를 이용한다
// 리듀서 파일 안에 액션타입, 액션생성자 함수를 함께 넣어서 관리하고,
// 이를 '모듈'이라 한다.

// 액션 타입
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성함수
// 만약 이 액션생성함수인 createAction을 사용하지 않을경우
// 맨 위의 라인은
/*  
    const insert = () => ({
        type: INSERT
    });
*/
// 와 같이 객체를 만들어줬어야 했을 것이다.
// 다만 이런식으로하면 파라미터의 값이 무엇이 될지 잘 알기 힘들다.
// 그렇기 때문에 전달받은 값을 액션의 payload값으로 설정해준다.


// 액션 생성자도 export를 이용해서 내보내준다.
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

// 리듀서 기본 상태 정의 
const initialState = List([
    Map({
        id: 0,
        text: '리액트 공부하기',
        done: true
    }),
    Map({
        id: 1,
        text: '컴포넌트 스타일링 해보기',
        done: false
    })
]);

// 리듀서 함수
// 리듀서는 export default로 내보내주어야 한다.
// switch문 대신 handleActions(액션에 따라 실행할 함수, 상태의 기본 값)를 이용하자 
export default handleActions({

    // 리듀서는 (현재상태, 액션객체)가 필요하다.
    [INSERT]: (state, action) => {
        const { id, text, done } = action.payload;

        return state.push(Map({
            id,
            text,
            done
        }));
    },
    [TOGGLE]: (state, action) => {
        const { payload: id } = action.payload;

        const index = state.findIndex(todo => todo.get('id') === id);

        return state.updateIn([index, 'done'], done => !done);
    },
    [REMOVE]: (state, action) => {
        const { payload: id } = action;
        const index = state.findIndex(todo => todo.get('id') === id);
        return state.delete(index);
    }
}, initialState);