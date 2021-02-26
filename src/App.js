import React from 'react';
import PropTypes from 'prop-types';

//App 컴포넌트 안에 Potato 컴포넌트 만들 수 있음
//-> Movie() -> Food() 로 변경
/*
function Food(props){
    return <h1>I love {props.fav}</h1>; //JSX 
}*/
//구조 분해 할당 방식(ES6)
function Food({ name, picture, rating }){
    return (
    <div>
        <h2>I like {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name}/>
    </div>
    );
}

//서버에서 넘어온 데이터 저장할 빈 배열 할당
//아래에서는 서버에서 데이터가 넘어왔다고 가정하여 배열에 값 넣어줌
const foodILike = [
{
    id:1,
    name: "Kimchi",
    image:
        "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    rating:5
},
{
    id:2,
    name: "Samgyeopsal",
    image:
        "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IZOXUQBP4QVT4ONUPAIDA6347M.jpg",
    rating:4.9
},
{
    id:3,
    name: "Bibimbap",
    image:
        "https://lh3.googleusercontent.com/proxy/NQvgrdMYjk_Ob6y8183p8efOZaZpsD4riPUYYIfHn-HHnZYBOJk9yGps8FvmjHQeee9aAGUm0VAUU945K6Pk3LhVSGSfbmVZWrE",
    rating:4.8
},
{
    id:4,
    name: "Dongaseu",
    image:
        "http://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/038/961/medium/IMG_7060.jpeg?2019",
    rating:5.5
},
{
    id:5,
    name: "Kimbap",
    image: 
        "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating:4.7
}];

//기존의 화살표 함수를 일반함수로 작성하는 법
/*function renderFood(dish){
    return <Food name={dish.name} picture={dish.image}/>;
}*/

//화살표 함수로 정의하는 법
//const rederFood = dish => <Food name={dish.name} picture={dish.image}/>;

//App 이라는 component 정의
function App(){
    //console.log(foodILike.map(renderFood));
    return (
        <div>
           {foodILike.map(dish => (
               <Food 
               key={dish.id} 
               name={dish.name} 
               picture={dish.image}
               rating={dish.rating}/>
           ))}
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
};

export default App;