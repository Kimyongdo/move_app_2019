import React from 'react';
import {Link} from 'react-router-dom';



// 라우터 밖에서 네비게이션 link to는 쓸 수 없다. 
function Navigation(){
    return(
        <div>
            {/* a href 를 쓰지 말고 Link to를 써야 리액트가 안죽는다. */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
    );
}

export default Navigation;

