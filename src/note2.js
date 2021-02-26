/*
<--비슷한 컴포넌트 여러 개 만들기-->
: 서버에서 넘어온 데이터 저장할 빈 배열 할당
: const foodILike = [];

<--map()-->
: foodILike에 있는 데이터로 컴포넌트 여러 개 만들려면 map()이용
- 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고,
  그 함수가 반환한 결과를 배열로 반환
- 인자로 전달한 함수는 배열의 원소를 대상으로 실행
- 이 함수가 반환한 값을 배열로 만들고, 이는 map()의 반환값이 됨
+) 함수가 값을 바로 반환하면 return 생략 가능
- {foodILike.map(dish => (<Food name={dish.name}/>))}
: dish는 객체 형태일 것이므로 점연산자 사용
: map()는 Food 컴포넌트 원소 5개를 가진 배열 반환할 것

<--map() 함수의 인자로 함수 전달하기-->
: map() 함수가 실제로 무엇을 반환하는지 알아보기 위한 과정
1. {foodILike.map(renderFood)}로 수정 : renerFood는 함수 이름
: renderFood()는 기존의 화살표 함수를 일반함수로 작성한 것
2.  console.log(foodILike.map(renderFood));
: map()의 반환값 그대로 출력
: 전달된 props 값 볼 수 있음

<--map() 함수로 만든 컴포넌트에 key props 추가-->
==> Warning: Each child in a list should have a unique "key" prop.
: 리스트의 각 원소는 유일한 key prop을 가져야 함
- 리액트의 원소들은 유일해야 하는데 리액트 원소가 리스트에 포함되면서
  유일성이 없어짐 ~ 리액트는 Food 컴포넌트가 서로 다르다는 것을 알 방법이 없음
- 이를 해결하기 위해서 ~ foodILike 배열 원소에 id 값 추가할 것(id값은 각각 유일해야 함)
- 다만, key props는 리액트 내부에서 사용되는 특수한 props이므로 
  Food 컴포넌트에 직접 전달x

<--prop-types-->
1. 컴포넌트가 전달받은 props가 정말 내가 원하는 값인지 확인
2. foodILike배열의 각 요소에 rating 추가
3. prop-types 도구 설치 
- props의 자료형 검사할 수 있도록
- npm install prop-types
4. package.json 파일 열어서 dependencis 중 prop-types 존재 확인
 +) package.json은 create-react-app이 자동생성한 파일 ~ 건들지 말 것
5. props의 이름도 검사해 줌
6. isRequired 사용은 필수는 아님
 : ex_아직 평점이 등록되지 않은 영화일 수 도 있음
*/