import React from 'react';

//App 컴포넌트 안에 Potato 컴포넌트 만들 수 있음
//-> Movie() -> Food() 로 변경
function Food(props){
    return <h1>I love {props.fav}</h1>; //JSX 
}
/*
//구조 분해 할당 방식(ES6)
function Food({fav}){
    return <h1>I like {fav}</h1>;
}*/
//App 이라는 component 정의
function App(){
    return (
        <div>
            <h1>gahui</h1>
            <Food fav="kimchi" />
            <Food fav="ramyeon" />
            <Food fav="samgyeopsal" />
            <Food fav="zzuggumi" />
        </div>
    );
}

export default App;