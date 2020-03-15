import React from 'react';
import {HashRouter, Route} from 'react-router-dom'; //import
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./Navigation";

function App(){
    return (
        <HashRouter>
            {/* 직접만든 컴포넌트  */}
            <Navigation/>

            {/* /자체가 이름임  */}
            {/* exact={true}를 쓰면 오직 / 이것만 랜더링을 한다
                그렇지 않으면 /와 관련된 모드 페이지를 랜더링하게 됨. 
            */}

            {/* 라우터에서 path와 compoent을 정의하면 다른 곳에서 path만 써도 다른 .js으로 이동할 수 있음.  */}
            <Route path="/" exact={true} component={Home}/>
            {/* about .js로 이동해서 about을 보여줌  */}
            <Route path="/about" component={About}/>
            <Route path="/movie/:id" component={Detail}/>
            {/* id가 변수가 된다.  */}
            {/* path-name은 인터넷 주소창에 쓰여질 이름 */}
        </HashRouter>
    );
}

export default App; 
