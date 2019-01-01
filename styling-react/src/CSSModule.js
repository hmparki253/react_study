import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

const cx = classNames.bind(styles);

const CSSModule = () => {
    return (
        <div className={cx('wrapper', 'inverted')}>
            안녕하세요 korean heroes, 
            나는 <span className="something">알란다비리이다!</span>
            {/* 여기에서 something은 global 처리를 했기 때문에 이렇게 접근하여 사용할 수 있다.*/}
        </div>
    );
};

export default CSSModule;