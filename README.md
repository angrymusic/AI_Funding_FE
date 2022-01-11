## GithubPages 관리 브랜치

github pages 관리 브랜치입니다.

'gh-pages'브랜치는 직접적으로 수정하시면 안되고 이 브랜치를 통해서 관리하는것이 좋습니다.

'gh-pages'브랜치에 업데이트 사항을 적용하려면 develop브랜치에서 pull을 한 다음 build를 수행해야 합니다.

build후 'GithubPage-관리-브랜치'에 모든 변경사항을 push 한 다음 git subtree 명령어로 gh-pages에 build 폴더 만을 push해줍니다.

```
git subtree push --prefix build/ origin gh-pages
```

## build시 주의할 점

build 명령 수행 시 package.json에 빌드가 끝난후 실행되는 코드에 'copy build/index.html build/404.html'이라는 명령어가 있습니다. 이 명령어는 윈도우 환경(cmd)에서만 동작하는 명령어로 다른 os에서 build하시는 분들은 직접 build폴더 내에 index.html과 내용이 똑같은 404.html파일을 만들어주시면 됩니다.

404.html파일을 만드는 이유는 github pages가 존재하지 않는 url을 참조할 시 자동으로 404.html로 redirect해줍니다. 하지만 저희 앱은 Single page application이기 때문에 url이 바뀌어도 화면은 그대로여야 합니다. 따라서 index.html과 같은 내용의 404.html을 만들어줘야 합니다.
