import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//  <App />를 컴포넌트라고 부른다 
// 컴포넌트는 html을 반환하는 함수 
// <App/>를 jsx라고 부른다 (html+javascript)
// 여기서는 오직 하나만 -> <App/>만 사용이 가능하다. 
ReactDOM.render(<App />, document.getElementById('root'));
