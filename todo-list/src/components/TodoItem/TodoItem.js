import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.done !== nextProps.done;
    }

    render() {
        // 비구조화 할당으로 this.props 안에 있는
        // done, children, onToggle, onRemove 레퍼런스를 만들어준다
        // props를 사용할 때마다 this.props.onToggle -> onToggle 처럼 사용할 수 있다.
        const { done, children, onToggle, onRemove } = this.props;

        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly />
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={(e) => {
                    onRemove();
                    e.stopPropagation();
                }}>[지우기]</div>
            </div>
        );
    }
}

export default TodoItem;