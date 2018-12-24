import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    // 디폴트 prop를 지정하는 방법 2
    static defaultProps = {
        name: '기본이름'
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }

    // constructor(props) {
    //     super(props);
    //     // state값을 정의하는 첫 번째 방법
    //     this.state = {
    //         number: 0
    //     }
    // }

    // state 값을 정의하는 두 번째 방법
    state = {
        number: 0
    }

    render() {
        return (
            <div>
                <p>안녕하세요 제 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age}살 입니다.</p>
                <p>숫자: {this.state.number}</p>
                <button onClick={()=> {
                        this.setState({
                            number: this.state.number + 1
                        })
                    }
                }> 더하기 </button>
            </div>
        )
    }
}

// 디폴트 prop를 지정하는 방법 1
// MyComponent.defaultProps = {
//     name: '디폴트 이름'
// }

// propType을 지정하는 방법 2
// MyComponent.propTypes = {
//     name: PropTypes.string
// }

export default MyComponent;