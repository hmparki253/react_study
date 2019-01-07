import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getRandomColor() {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb',
        '#1c7cd6',
        '#1098ad',
        '#0ca678',
        '#37b24d',
        '#74b816',
        '#f59f00',
        '#f76707'
    ];

    const random = Math.floor(Math.random() * 13);

    return colors[random];
}

// 스토어 안의 state값을 props로 연결
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});

// 액션 생성, 해당 액션을 디스패치하는 함수로 만들고 props로 연결
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶어주는 역할을 한다.
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;