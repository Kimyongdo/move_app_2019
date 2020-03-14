import React from 'react';
//import PropTypes from 'prop-types';  npm i prop-types  import 필수
import axios from "axios"; //fecth역할하는 기능
import Movie from '../components/Movie'; // return <Movie/>
import "./Home.css" 

class Home extends React.Component {

    //변경할 데이터를 여기다가 넣는다.
    state = {
        isLoading: true,
        movies: [] //배열생성 - json이 배열로 받기 때문에.
    };

    getMovies = async () => {
        // axios는 마치 fecth위에 있는 작은 layer api받아오는 정보는 느릴 수 있기 때문에 async await을 붙여준다.
        // async await : 야 너는 이걸 기다리고 다음을 진행해야해 const {data:{data:{movies}}} ES6문법
        // console로 보면 data-data-movies로 이루어짐(그냥 주소로 들어갔을때랑 다름. ) beautfiy 컨트롤 쉬프트 비를 같이
        // 누름
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        // this.setState({movies:movies}) 앞의 movies는 state꺼, 뒤의 movies를 의미함. 하나의
        // setState에서 두개의 state의 변수를 조절함. 정보를 다 가져온 후 에 isLoading을 false로 변경 -> 삼항연산자에서
        // false값을 호출하게 됨.
        this.setState({movies, isLoading: false}) //앞 뒤의 이름이 같다면 하나로 줄일 수 있음.
    }

    //render이후 자동으로 발생되는 함수(생명주기)
    componentDidMount() {
        // setTimeout( () => { delay function, 3초후에 변경   setState = { }을 위한 함수 모음은 없는 듯.
        // this.setState({isLoading:false});   },3000);
        this.getMovies(); //마운트 된 후에 이 함수를 호출하자.
    }

    render() {
        // state에 있는 변수 쓸 때마다 this.state.isLoading을 쓰면 길어지기 때문에 const {원하는 변수명} =
        // this.state을 쓴다.
        const {isLoading, movies} = this.state;
        
        return <section className="container">{
                isLoading //true면 "Loading"
                    ? (
                      //jsx문법 => <section>{javaScript}</section>이기 때문에
                      // class -> className으로 바꿔주어야한다. 
                        <div className="loader">
                            <span className="loader__text">Loading..</span>
                        </div>
                    )
                    : ( //삼항연산자 ? ()   () 안에 <div>가 들어가고 <div>{자바스크립트 문법 } <div>에서 
                        <div className="movies">
                            {
                                movies.map(movie => (
                                    <Movie key={movie.id}
                                        //맵에서 필수 
                                        id={movie.id} 
                                        year={movie.year}
                                         title={movie.title} 
                                         summary={movie.summary} 
                                         poster={movie.medium_cover_image}
                                         genres={movie.genres}
                                         
                                         /> //import필수
                                ))
                            }
                        </div>
                    )

            }</section>
    }
}

export default Home;
