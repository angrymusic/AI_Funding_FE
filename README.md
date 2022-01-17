## 깃헙페이지 접속시 주의할 점!!

해당 페이지는 serviceworker(pwa 관련 api)때문에 자동으로 리소스를 캐시에 저장합니다.

문제는 이 캐시가 일반적인 캐시가 아니라서 브라우저에서 쉽게 지우기 힘듭니다.

따라서 접속하실때 시크릿 창으로 접속해주시면 serviceworker가 동작을 안하기 때문에 최신 페이지를 확인하실 수 있습니다.

## 현재 이슈

- 접속시 홈 컴포넌트가 뜨지 않음 -> react router dom설정 문제...

## GithubPages 관리 브랜치

github pages 관리 브랜치입니다.

'gh-pages'브랜치는 직접적으로 수정하시면 안되고 이 브랜치를 통해서 관리하는것이 좋습니다.

'gh-pages'브랜치에 업데이트 사항을 적용하려면 develop브랜치에서 pull을 한 다음 build를 수행해야 합니다.

build후 'GithubPage-관리-브랜치'에 모든 변경사항을 push 한 다음 git subtree 명령어로 gh-pages에 build 폴더 만을 push해줍니다.

```
git subtree push --prefix build/ origin gh-pages
```

## TODO

react-router 사용 시 App을 감싸는 라우터 컴포넌트에 baseurl속성을 설정해야 합니다.

## build시 주의할 점

build 명령 수행 시 package.json에 빌드가 끝난후 실행되는 코드에 'copy build/index.html build/404.html'이라는 명령어가 있습니다. 이 명령어는 윈도우 환경(cmd)에서만 동작하는 명령어로 다른 os에서 build하시는 분들은 직접 build폴더 내에 index.html과 내용이 똑같은 404.html파일을 만들어주시면 됩니다.

404.html파일을 만드는 이유는 github pages가 존재하지 않는 url을 참조할 시 자동으로 404.html로 redirect해줍니다. 하지만 저희 앱은 Single page application이기 때문에 url이 바뀌어도 화면은 그대로여야 합니다. 따라서 index.html과 같은 내용의 404.html을 만들어줘야 합니다.
