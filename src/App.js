import React from 'react';

// function Potato(){
//   return <h1>I like potato2 </h1>
// }

// function Food({props}){
//   //F12를 눌러서 로그르 확인할 수 있다. 
//   console.log(props.fav);
//   return <h1>I like potato2 </h1>;
// }

// props.fav = {fav}
function Food({name,picture}){
  //F12를 눌러서 로그르 확인할 수 있다. 
return <div>
<h1>I like {name} </h1>
<img src={picture} alt={name}/>
</div>
}

// function renderFood(dish){ //매개변수 이름은 아무거나여도 상관없음 
//   return <Food name={dish.name} picture={dish.image}/>
// }

const foodILike = [ 
  {
    //리액트는 모든 element들이 다르게 보일 필요가 있다. 
    id:1,
    name : "aaaa", 
    image:"https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
  },
  {
    id:2,
    name : "aaaa", 
    image:"https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
  },
]



//ReactDOM.render(<App />, document.getElementById('root'));
//<App>에 있는 html
//컴포넌트는 대문자로 시작해야함. 
// App(){}이 뿌리라고 할 수 있음 
function App() {
  return <div>
    {/* <h1>Hello!!</h1> */}
    <Food fav ="kimchi" />
    {/* 자바스크립트 문법을 쓰고 싶다면 {}부터 시작하기  */}
    {/* dish는 아무런 이름을 써도 가능, fllodILike의 배열 하나씩을 자동적으로 출현  */}
    {/* 컴포넌트 호출은 <컴포넌트이름 매개변수=어쩌구> */}
    {foodILike.map(dish => (
      //key props는 food로 전달되지 않음, 이걸 사용하지 않기 때문임. 
          <Food key={dish.id} name={dish.name} picture={dish.image}/> ))}

    {/* 다른 .js파일을 쓰는 방법  or 같은 함수에서  함수를 만들어서 소환  */}
    {/* <Potato/> */}

{/* kimchi를 props로 전달  */}
{/* fav가 props고 이를 받는 곳이 args */}
    <Food fav="kimchi"   
          // something={true} 
          // papapa={["hello",1,2,3,4,true]}
          />

      {/* 맵 하나에  */}
      {/* {
    name : "aaaa", 
    image:"https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
  }, 을 제공하고 있는 형태임. ---> 이게 dish임  */}
      {/* {foodILike.map(renderFood)} */}

    </div>
}

export default App;
     