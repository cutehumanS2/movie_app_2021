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
*/