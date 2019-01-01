import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>            
            안녕하세요 korean heroes, 
            나는 <span className="something">알란다비리이다!</span>
            {/* 여기에서 something은 global 처리를 했기 때문에 이렇게 접근하여 사용할 수 있다.*/}
        </div>
    );
};

export default CSSModule;