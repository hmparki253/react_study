import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render() {
        return(
            <div>
                <TodoItem done>히오스 빠대 10판하기</TodoItem>
                <TodoItem done>리액트 공부하기</TodoItem>
                <TodoItem>컴포넌트 스타일링 해보기</TodoItem>
            </div>
        );
    };
}

export default TodoList;