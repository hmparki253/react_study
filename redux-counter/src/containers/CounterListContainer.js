import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';

import getRandomColor from '../lib/getRandomColor';

// store.getState()의 결과값인 state를 파라미터로 받아 컴포넌트의 props로 사용할 객체를 반환한다.
const mapStateToProps = (state) => ({counters: state.counters});

// dispatch를 파라미터로 받아 액션을 디스패치하는 함수들을 객체 안에 넣어서 반환한다.
const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        const color = getRandomColor();
        dispatch(actions.setColor({index, color}));
    }
})

const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterListContainer;