/*
<class 와 className>
: html의 class와 JS의 class 혼동하지 않게 구분해서 작성

+) 비슷한 경우 : for
: html의 label 엘리먼트에 for 속성 추가할 때, JS의 for문과 이름이 겹침
    ~> JSX에서는 <label htmlFor="name">으로 작성해 줌 

<제공할 마땅한 key가 없을 때>
- 장르는 API에서 id와 같은 값 x ~> li 엘리먼트에 제공할 key가 x
    => map()에 전달할 함수에 두 번째 인자 전달해주면 됨
    : genres.map((genre, index) => { ... });
    : genre에는 genres의 배열 원소가, index에는 몇 번째인지 숫자 전달됨
    
<문자열 180자로 제한하기> : slice() 사용
    : [문자열].slice(시작,끝)
    : "hereisstring".slice(0,10) //0~9까지 자름 => hereisstri
    => <p className="movie_summary">{summary.slice(0,180)}...</p>
                                        (...은 생략 표시로 추가함)

<영화 앱 제목 바꾸기>
- public 폴더 ~ index.html에서 <title></title>
- 아이콘 바꾸기: public ~ favicon.ico 수정

*/