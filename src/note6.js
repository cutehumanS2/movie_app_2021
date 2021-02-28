/*
<router>
1. 화면 이동을시켜주는 장치
2. react-router-dom 패키지 이용
    :npm install react-router-dom
3. 라우터는 사용자가 입력한 URL을 통해 특정 컴포넌트 불러줌
4. react-router-dom은 여러 종류의 라우터를 제공
: 이 중 HashRouter와 Route 컴포넌트 사용할 것

5. HashRouter 사용 ~> 앱이 실행되는 주소에 #/ 붙을 것

6. Route에는 2가지 props 전달 가능
- URL을 위한 path props
- URL에 맞는 컴포넌트를 불러주기 위한 component props
=> path, component props를 통해 사용자가 접속한 URL을 보고,
    그에 맞는 component를 화면에 그림

- <Route path="/" component={Home} /> 
:"/" ~localhost:3000에 접속하면 기본으로 보여줄 컴포넌트이기 때문에

7. 라우터가 URL을 찾는 방식
- 사용자가 /home/introduction에 접속하면, 
    /, /home, /home/introduction 순서로 path props가 있는지 찾음
- path props에는 /home과 /home/introduction이 모두 있으므로,
    /home/introduction으로 접속한 경우, 
    Home, introduction 컴포넌트 모두 그려짐


- 사용자가 /about에 접속하면,
    /, /about 순서로 path props가 있는지 찾음
- 따라서 Home, About 컴포넌트 모두 그려짐

8. Home, About 컴포넌트 모두 그려지는 현상 해결하려면...
- Route 컴포넌트에 exact props 추가하면 됨
- exact props: Route 컴포넌트가 path props와 정확하게 일치하는 
            URL에만 반응하도록 만들어 줌

9. <a>의 특징
- <a>의 href 속성은 페이지 전체를 다시 그림(화면 전체 새로고침)
- 해결 법: react-router-dom의 Link 컴포넌트 사용
- Navigation.js에 import {Link} from 'react-router-dom';
- <a href>를 <Link to>로 변경


- (*) Link, Router 컴포넌트는 HashRouter안에 포함되어 있어야 함
: Navigation 컴포넌트에서 Link 컴포넌트를 반환하므로
*/