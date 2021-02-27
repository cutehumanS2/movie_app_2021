import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
    
    state = {
        isLoading: true,
        movies: [],
    };

    //JS에게 getMovies()는 시간이 필요하고
    getMovies = async () => {
        /*//axios.get()의 실행을 기다려 달라고 말함
        //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        //console.log(movies.data.data.movies); //좋은 방법은x */
        
        //ES6 구조분해할당 사용
        const {data: {data: {movies},},} 
            = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        //console.log(movies);
        /*
        //-movie state에 영화 데이터 저장
        //this.setState({ movies: movies, isLoading:false });
        //-{state의 moives:구조분해할당으로 얻은 영화데이터 있는 변수}
        //-state가 변경~render()이 재호출되는 효과 위해 state에 영화 데이터 저장*/

        //ES6에서는 객체의 키==대입할 변수 이름 ~> 코드 축약 O
        this.setState({ movies, isLoading:false });
    };

    componentDidMount(){ // 영화 앱 로딩
        this.getMovies();
    }

    render(){
        //구조 분해 할당 ~항상 this.state 입력할 필요 없어짐
        const { isLoading, movies } = this.state;
        return <div>
                {isLoading ? 'Loading...' : movies.map((movie) => {
                    //console.log(movie);
                    return (
                        <Movie
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                    />); //.isRequired 설정한 props는 모두 전달해야함
                })}
            </div>;
    }
}

export default App;