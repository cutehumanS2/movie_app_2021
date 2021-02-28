/*~~영화 상세 정보 기능 만들기~~

<route props>
1. 라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props
    ~> 기본으로(자동으로) 넘어가는 props로, 이를 이용해
    영화 데이터를 상세 정보 컴포넌트에 전달할 수 있음

2. Route 컴포넌트가 그려줄 컴포넌트에는 항상 이 props가 전달됨,
    이 props에 우리 마음대로 데이터 담아 보낼 수 있음

3. route props에 데이터 담아 보내기
- Navigation 컴포넌트의 Link 컴포넌트의 to props 구조를 바꿔야 함
- <Link to={{ pathname: '/about', state: {fromNavigation: true }}}>
: pathname ~URL, state ~route props에 보내줄 데이터
- 나중에 다 지움

4. Movie 컴포넌트에 Link 컴포넌트 추가하기
- Detils 컴포넌트 생성, App.js에서 Route 컴포넌트 추가해주기
- <Route path="/movie-detail" component={Detail} />

<리다이렉트 기능>
1. URL에 /movie-detail을 입력해서 바로 이동하면 
    Detail 컴포넌트로 영화 데이터 넘어오지x
2. ~> 사용자를 강제로 Home으로 돌려보내야 함(카드를 눌러서 이동하도록)

3. route props의 history 키를 활용할 것
- history 키에는 push, go, goBack, goForward키가 있는데,
    그 키에는 URL을 변경해주는 함수가 들어 있음
- 이러한 함수들을 이용해 리다이렉트 기능 구현

4. history 키
- push(): 지정한 URL로 보내줌 
- Detail 컴포넌트를 class 컴포넌트로 변경 
    : componentDidMount() 생명주기 함수를 사용해 Detail 컴포넌트가
    마운트될 때 push() 함수를 사용하기 위함

- 사용자가 URL을 직접 입력해서 /movie-detail로 이동하면,
    location 키의 state 키가 비어 있음 (undefined)
    ~> 이 경우에만 history 키의 push() 함수 사용할 것

- Movie 컴포넌트로부터 전달받은 영화 데이터 ~> location.state

5. 영화 제목 출력 후 /movie-detail로 바로 이동하면 오류 발생
∵ componentDidMount() 생명주기 함수에 작성한 리다이렉트 기능 동작x
: Detail 컴포넌트가 render() ~>componentDidMount() 순으로 함수 실행해서
- render() 함수 내에서 location.state.title 사용하려 하는데,
location.state가 undefined이기 때문
∴ render()에도 리다이렉트 코드 추가해야 함


*/