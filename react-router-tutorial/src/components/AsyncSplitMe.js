import React, { Component } from 'react';

class AsyncSplitMe extends Component {
    state = {
        SplitMe: null
    }

    loadSplitMe = () => {
        // 비동기적으로 코드를 로드, 함수는 Promise를 반환
        import('./SplitMe').then(({ default: SplitMe }) => {
            this.setState({
                SplitMe
            });
        });
    }

    render() {
        const { SplitMe } = this.state;

        return SplitMe ? <SplitMe/> : <button onClick={this.loadSplitMe}>SplitMe 로딩</button>
    }
}

export default AsyncSplitMe;