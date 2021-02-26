/*
<--state-->
1. 동적 데이터 다룰 때 사용 : props는 정적데이터만 o
2. class component 안에서 사용 가능  
3. state는 객체 형태의 데이터

<--class component--> _ state를 사용하기 위함
1. App 클래스가 React.Component 클래스를 상속받아야 함
    : class App extends React.Component 
    => 리액트가 제공하는 Component 클래스를 상속받아야 함
2. App 컴포넌트가 JSX를 반환해야 함 ~> render() 사용
    - function component는 return문으로 JSX 반환
    - class component는 render()로 JSX 반환
    - 리액트는 render() 자동 실행
    - render()를 구현하지 않아도 사용할 수 있는 이유
    : App 컴포넌트가 React.Component를 상속받았기 때문

<--setState()-->
1. 리액트에서는 this.state.count = 1(or -= 1)과 같이 하면
    - Do not mutate state directly. Use setState()  
    react/no-direct-mutation-state 경고 발생, 버튼 동작x
    - 리액트는 state를 직접 변경하지 못하기 때문
    - 원래 리액트는 state가 변경되면 render()를 다시 호출하여
    변경된 state를 화면에 출력
    - △, state를 직접 변경하는 경우에는 render() 재호출x
    ==> 리액트에서는 setState()를 사용하여 state를 간접적으로 변경

2. 사용법
    - this.setState({ count:1 });
    - 내가 원하는 새로운 state를 인자로 넘겨줌
    - setState()는 이전 state와 비교해서 바뀐 state의 데이터만 변경

3. 동작
    : setState() 호출 -> state 업데이트 -> render() 자동 호출 
    -> 화면 업데이트

4. 숫자 증감 시키기
    - this.setState({ count: this.state.count+1 });
    : 성능상 좋은 방법은x ~> 인자로 함수를 전달하면 성능⬆
    - this.setState( current => ({count: current.count+=1,}));

<--Class Component의 생명주기-->
1) Mount
    1. constructor()
    - 생명주기 함수는x
    - class component가 생성될 때 호출됨: 첫 번째로 호출됨

    2. render()

    3. componentDidMount()
    - 컴포넌트가 처음 화면에 그려질 때 실행
    - render() 실행한 뒤 실행됨

2) Update: componentDidUpdate()
    - 화면이 업데이트되면 실행
    - <Add> 또는 <Minus> 버튼 누르면(setState()) render() 호출 뒤에 호출됨
    : I am rendering 후에 I just updated 출력
    => setState() ~ render() ~ componentDidUpdate() 순 호출

3) Unmount: componentWillUnmount()
    - 컴포넌트가 죽을 때 (컴포넌트가 화면에서 떠날 때) 실행
    - 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 사용
*/