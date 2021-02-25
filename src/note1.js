/*
<--리액트 동작 원리--> 
-리액트는 우리가 작성한 프로젝트 폴더에 있는 코드를 JS를 이용하여 해석
-해석한 결과물을 index.html로 끼워 넣음

-ReactDOM.render(<App />,document.getElementById('root'));
: App.js의 코드를 index.html에서 id가 root인 element에 넣어줌

-리액트는 화면에 표시될 모든 HTML을 처음부터 그리지 않고,
-이후 엘리먼트를 추가하거나 제거하는 방식으로 화면 그림 => 빠름

<--Component-->
1. import App from './App'; 
: index.js에서 App 컴포넌트를 사용하기 위한 import
2. ReactDOM.render(<App />,document.getElementById('root'));
: index.html 중 id가 root인 자리에 App 컴포넌트의 return 값 rendering 함
3. 리액트는 컴포넌트와 함께 동작, 리액트 앱은 모두 컴포넌트로 구성
4. 컴포넌트의 이름은 대문자로 시작해야 함
5. 컴포넌트 재사용 예시 
:  <Food fav="kimchi" />
   <Food fav="ramyeon" />
   <Food fav="samgyeopsal" />
   <Food fav="zzuggumi" />
    ~Food 컴포넌트를 재사용 하여 4개 만듦

<--JSX-->
1. 컴포넌트는 JS와 HTML을 조합한 JSX 문법을 사용하여 만듦
2. return <h3>I love potato</h3>;
: JSX 문법 사용 => Potato() 함수는 JSX 리턴
+) export default Potato; 
: 다른 파일에서 Potato 컴포넌트 사용 가능

3. 인접한 JSX 요소는 반드시 하나의 태그로 감싸야 함
- ReactDOM.render(<App /><Potato />   ~>불가능
- Potato를 App 컴포넌트 안에 넣어야 함   
- App.js에 import Potato from './Potato'; 추가
+) ./ : 현재 파일 있는 폴더
+) ../ : 현재 파일 있는 상위 폴더
- function App(){
    return (
        <div>
            <h1>gahui</h1>
            <Potato/>
        </div>
    );
}

4. App 컴포넌트 안에 Potato 컴포넌트 만들 수 있음
: Potato 컴포넌트 코드 길이 짧을 경우

<--props-->
1. 컴포넌트에서 컴포넌트로 전달하는 데이터(컴포넌트 재사용)
2. props이용하여 Food 컴포넌트에 데이터 보낼 것 
: Potato ~> Food로 변경
3. <Food fav="kimchi" />
- fav라는 props에 "kimchi"라는 값을 담아 Food 컴포넌트에 데이터 보냄
- props에 있는 데이터는 문자열인 경우 제외하고 {}로 감싸야 함
4. props에 있는 데이터는 객체로 변환되어 전달됨
-props.fav 방식으로 사용해야 함

(*) 5. 구조 분해 할당으로 props 사용하기 : ES6
- 점 연산자 사용 안 해도 됨
- function Food({ fav }){
    return <h1>I like {fav}</h1>;}
- props에 포함된 데이터 개수 많아질 때 편리
- 객체에 있는 키값을 편하게 추출할 수 있게 해줌
- 리액트에서의 객체는 { fav } : 양쪽 공백 채우기
- JSX의 JS는 {fav} : 공백x

<--정리-->
1. JSX는 HTML + JS
: 사실 JSX에서 HTML의 class라는 속성 이름은 className으로 적어야 함
2. JSX를 이용하여 컴포넌트를 작성할 수 있음. 이름은 대문자로 시작
3. 컴포넌트에 데이터를 전달할 때는 props 이용함.
: 컴포넌트에 props를 전달하면, props에 있는 데이터가 하나의 객체로
  변환되어 컴포넌트(함수)의 인자로 전달되고, 이를 받아 컴포넌트에서
  사용 가능함.
4. ES6의 구조 분해 할당을 사용하면 props를 좀 더 편리하게 사용 가능함
*/