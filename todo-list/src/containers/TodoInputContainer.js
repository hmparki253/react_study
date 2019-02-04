import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends Component {
    id = 1
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        const { value } = e.target;
        const { InputActions } = this.props;
        InputActions.setInput(value);
    }

    handleInsert = () => {
        const { InputActions, TodosActions, value } = this.props;
        const todo = {
            id: this.getId(),
            text: value,
            done: false
        };
        TodosActions.insert(todo);
        InputActions.setInput('');
    }


    render() {
        const { value } = this.props;
        const { handleChange, handleInsert } = this;
        return (
            <TodoInput 
                onChange={handleChange}
                onInsert={handleInsert}
                value={value}
            />
        );
    };
}

export default connect(
    // 첫 번째 파라미터: 액션 생성함수들이 들어있는 객체
    (state) => ({
        value: state.input.get('value')
    }),
    // 두 번째 파라미터: 디스패치
    (dispatch) => ({
        // bindActionCreators를 이용하면 액션 생성함수 여러 개를 손쉽게 설정할 수 있다.
        InputActions: bindActionCreators(inputActions, dispatch),
        TodosActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoInputContainer);