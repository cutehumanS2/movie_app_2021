/* ~~영화 앱 제작 시작~~

<--영화 데이터 로딩 상태 표시-->
1. state에 isLoading 추가
2. state에 따라 '로딩 중'/'로딩 완료' 화면에 출력
: 구조 분해 할당과 삼항 연산자 활용하기 
: const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
3. componentDidMount()에서 영화 앱 로딩
4. 영화 데이터 로딩하려면 JS의 fetch()또는 Axios 도구 사용(추후 사용)

<--영화 API 사용하기-->
1. axios 도구 설치 : npm install axios
2. json 데이터: 간단하게 JS의 객체와 비슷한 데이터라 이해
3. App.js에 axios import한 다음, 
    componentDidMount()에서 axios로 API 호출
    : axios.get('https://yts-proxy.now.sh/list_movies.json');
    : 컴포넌트가 마운트되면 axios.get()이 영화 데이터 가져옴
4. axios는 네트워크를 사용하므로 느리게 동작함
    - axios.get()이 반환한 영화 데이터 잡으려면 JS에게 시간이 좀 걸린다고 말해야 함
    -> axios.get()의 실행이 분리될 수 있도록 새 함수 생성 : getMovies()
    - getMovies()에서 axios.get()이 실행되도록 만듦
    - axios.get()이 반환한 값은 movies에 저장
5. async, await
- JS에게 getMovies()는 시간이 좀 걸린다고 말하기 위해 사용함


<여기까지 정리>
1. 리액트 앱이 실행되면 최초로 render() 실행
2. 최초의 state: isLoading은 true, moives는 빈 배열
3. 최초의 실행 화면: Loading... 표시
4. App 컴포넌트 마운트되고 componentDidMount() 실행 ~getMovies() 실행
5. getMovies()에는 시간이 많이 걸리는 axios.get()이 포함되어 있으므로
    getMovies()에는 async, axios.get()에는 await 붙임 (비동기로 만들어줌)

(*)컴포넌트를 여러 개 출력할 때 ~ 유일한 값 이용하여 key props 추가해야 함
*/
