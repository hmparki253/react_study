import React, { Component } from 'react';
import styles from './EditorTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class EditorTemplate extends Component {
  state = {
    leftPercentage: 0.5 // 리사이즈 기능을 위한 separator state
  }

  // separator 클릭 후 마우스를 움직이면 leftPercentage 업데이트
  handleMouseMove = (e) => {
    this.setState({
      leftPercentage: e.clientX / window.innerWidth
    });
  }

  // 마우스를 땠을 때 등록한 이벤트 제거
  handleMouseUp = (e) => {
    document.body.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  // separator 클릭 시
  handleseparatorMouseDown = (e) => {
    document.body.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  render() {
    const { header, editor, preview } = this.props;
    const { leftPercentage } = this.state;
    const { handleseparatorMouseDown } = this;

    const leftStyle = {
      flex: leftPercentage
    };

    const rightStyle = {
      flex: 1 - leftPercentage
    };

    const separatorStyle = {
      left: `${leftPercentage * 100}%`
    };

    return (
      <div className={cx('editor-template')}>
        {header}
        <div className={cx('panes')}>
          <div className={cx('pane', 'editor')} style={leftStyle}>
            {editor}
          </div>
          <div className={cx('pane', 'preview')} style={rightStyle}>
            {preview}
          </div>
          <div 
            className={cx('separator')}
            style={separatorStyle}
            onMouseDown={handleseparatorMouseDown} />
        </div>
      </div>
    );
  }
}

export default EditorTemplate;