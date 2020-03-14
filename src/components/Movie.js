import React from "react"; //가장 먼저해야할것
import ProTypes from 'prop-types';
import "./Movie.css"; //js와 같은 이름의 css를 만들어서 설정해줄 거 
import {Link} from 'react-router-dom';


//component가 state가 필요 없는 경우 class component가 될 필요는 없음
// state가 필요없다 -> 정보를 보여주기만 한다. 바뀌지 않는다.
//필요없다면 class -> function으로 변경

//인자로 받을떄도 {}를 써주어야하는구나.. 
function Movie({id, year, title, summary, poster,genres}){
  //  return <h1>{title}</h1> //매개변수의 값을 쓰려면 {}안에 쓴다. 그냥 title쓰면 글자로 나오니까.
   return (
     <Link to={{
      //  ` 를 사용해서 스트링 사이에 변수값을 넣도록 할 수 있다. 
       pathname:`/movie/${id}`,
       state:{ //클릭시 detail로 이동하고 state정보를 모두 넘겨준다.
         year,//원래라면 year:year이지만 같은 이름이라면 하나로 묶는다.
         title,
         summary,
         poster,
         genres,
       }
     }}>
    <div className="movie">
       {/* img의 title은 마우스 올려놓았을떄 이름이 나오도록 설정  */}
        <img src={poster} alt={title} title={title} /> 
       <div className="movie_data">
       <h3 className="movie__title">{title}</h3>
       <h5 className="movie__year">{year}</h5>
         {/* ul안에서 li를 쓰는데 이걸 여러개 쓰기 위해서 map을 사용한다.  */}
         <ul className="genres">  
            {genres.map((genre, index) => (
          <li key={index} className="genres__genre">
              {genre}
              </li> 
       ))}
       </ul>
       {/* javascript 문법slice으로 글을 자름.  */}
       <p className="movie__summary">{summary.slice(0,140)}...</p>
       </div>
   </div>
   </Link>
);
} 

//json에서 받아올 정보 (필요한 정보만 가져온다.)
//여기서 확인을 하고 function Movie()의 인자로 전달한다. 
Movie.prototype = {
    id : ProTypes.number.isRequired,
    year : ProTypes.number.isRequired,
    title : ProTypes.string.isRequired,
    summary : ProTypes.string.isRequired,
    poster : ProTypes.string.isRequired, //image는 string으로 
    geners : ProTypes.arrayOf(ProTypes.string).isRequired//배열로 된 json가져오기

}


//다른 곳에서 import을 위해서 꼭 쓰자 
export default Movie;
