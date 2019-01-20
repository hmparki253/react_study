import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;
        // 전달받은 todos를 map을 이용하여
        // todoItem들로 구성된 todoList를 만들어준다.
        const todoList = todos.map(
            todo => (
                <TodoItem
                    key={todo.id}
                    done={todo.done}
                    onToggle={()=>onToggle(todo.id)}
                    onRemove={()=>onRemove(todo.id)}>
                    {todo.text}    
                </TodoItem>
            )
        );
        // 위에서 만들어준 todoList를 렌더링
        return(
            <div>
                {todoList}
            </div>
        );
    };
}

export default TodoList;