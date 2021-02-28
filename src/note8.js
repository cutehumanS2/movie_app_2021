/* 깃허브에 배포하기

1. package.json 파일 수정
- "homepage": "https://cutehumanS2.github.io/movie_app_2021" 추가
- scripts 키값으로 명령어 추가
: "predeploy": "npm run build",
  "deploy": "gh-pages -d build"

2. 최종 코드 깃허브에 업로드하기 

3. gh-pages 설치하기
: 깃허브에서 제공하는 GitHub Pages 서비스 
- npm install gh-pages

4. 깃허브 저장소 다시 확인하기
: git remote -v
origin  https://github.com/cutehumanS2/movie_app_2021.git (fetch)
origin  https://github.com/cutehumanS2/movie_app_2021.git (push)

5. 영화 앱 깃허브에 배포하기
: npm run deploy
*/
