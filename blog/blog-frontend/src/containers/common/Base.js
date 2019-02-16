import React, { Component } from 'react';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class Base extends Component {
  initialize = async () => {
    const { BaseActions } = this.props;
    if(localStorage.logged === "true") {
      BaseActions.tempLogin();
    }
    BaseActions.checkLogin();
  }

  componentDidMount() {
    this.initialize();
  }

  render() {
    return (
      <div>
        <LoginModalContainer />
        {/* 전역으로 사용하는 컴포넌트들을 여기서 렌더링 */}
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(Base);