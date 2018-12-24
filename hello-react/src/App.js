import React, { Component } from 'react'; // node에서 설치된 모듈을 js파일에서 불러와 사용할 수 있다.
// 이 문법은 ES6문법임, 마치 타 언어의 import가 떠오르는데 이는 사실 번들링 도구(webpack)가 해당되는 파일을 한데 묶어준 것이나 다름 없다. 
// import logo from './hots-logo.png';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <MyComponent name="현민" age={3}/>
    );
  }
}

export default App;
