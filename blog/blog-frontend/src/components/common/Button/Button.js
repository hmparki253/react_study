import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

// ...rest가 나머지 값들을 알아서 넣어주는 역할을 해준다.
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({children, to, onClick, disabled, theme = 'default'}) => {
  const Element = (to && !disabled) ? Link : Div;

  return (
    <Element
      to={to}
      className={cx('button', theme, {disabled})}
      onClick={disabled ? () => null : onClick}>
      {children}  
    </Element>
  )
};

export default Button;