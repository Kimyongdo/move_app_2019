import React from 'react';

class Detail extends React.Component{

    componentDidMount(){
        console.log(this.props);
        // props에서 전달받은거기 때문에 여기에 안보여도 쓸 수 있음 
        //history는 url 이동관련임
        const {location, history} = this.props; //rotuer에서 기본으로 제공되는 props
        console.log(location.state); 

        //수동으로 movie-detail을 치면 undefined가 나오는데
        //이를 방지하기 위해서 undefined인 경우 처음으로 되돌가도록 설정
        //이를 리다이렉트라고 한다. (다시설정한다.)
        if(location.state === undefined){
            history.push("/");
        }

    }

 render(){
    //  location이라고 쓴 이유는 console의 location에 정보가 있기 때문임. 
        const {location} = this.props; //=가 거의 from처럼 사용됨.

        //if로 나눠주는 이유는 redirect시에 undefined가 될텐데 그떄
        //location.state의 정보가 null이기 때문임. 
    if(location.state){
        return <span>{location.state.title}</span> 
    }else{
        return null;
    }
        
}
}

export default Detail;
