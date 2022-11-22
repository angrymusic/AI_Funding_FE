# 💰 AI_Funding_FE

> 해당 프로젝트는 모바일 디바이스에 최적화 되어있습니다.

[모두의 투자 비서 바로가기](https://motobi.shop:6024/)

AI투자 어플, '투비'의 프론트엔드 팀입니다.

<div>
<img src="https://i.imgur.com/IARYlv2.png" width="200" />
<img src="https://i.imgur.com/0XBy6sA.png" width="200" />
<img src="https://i.imgur.com/ZgUcGZa.png" width="200" />
<div />

## 🧰 기술 스택

| 분류       | 이름        | 버전   |
| ---------- | ----------- | ------ |
| 개발환경   | Node.js     | 16.xx  |
| 프레임워크 | React.js    | 17.0.2 |
| 버전 관리  | git, github |        |

## 📚 모듈

| 이름               | 버전   | 설명                                             |
| ------------------ | ------ | ------------------------------------------------ |
| react-router-dom   | 6.2.1  | 리액트 컴포넌트 전환을 돕는 패키지               |
| redux              | 4.1.2  | 상태값을 하나의 store에서 관리하도록 하는 패키지 |
| react-redux        | 7.2.6  | redux의 react최적화 버전                         |
| styled-components  | 5.3.3  | 컴포넌트단위의 스타일링을 돕는 패키지            |
| workbox            | 5.1.4  | pwa관리를 도와주는 패키지                        |
| axios              | 0.25.0 | http통신을 도와주는 패키지                       |
| fortawesome        | 0.1.16 | fontawesome 아이콘 패키지                        |
| react-google-login | 5.2.2  | 구글 로그인 패키지                               |
| swiper             | 8.0.3  | 화면 슬라이드 구현                               |
| chart.js           | 3.7.0  | 차트 구현                                        |

## 🌏 환경 설정

https://nodejs.org/en/  
위 링크에서 node.js 16.xx버전으로 설치.

git clone후 폴더 내에서 npm install 실행

```bash
git clone https://github.com/AI-Funding/AI_Funding_FE.git
```

```bash
cd AI_Funding_FE && npm install
```

npm install시 나타나는 vulnerabilities 경고는 무시해도 됩니다.  
[해당 이슈에 대한 글](https://github.com/facebook/create-react-app/issues/11174)

## 🚧 리액트 설계 디자인

https://velog.io/@blackb0x/리액트-디자인패턴  
https://www.stevy.dev/react-design-guide

## 📝 UX/UI Writing

리디북스  
https://ridi.design/writings/

강남언니  
https://blog.gangnamunni.com/post/ui-text-guideline/

신한카드(pdf)
https://drive.google.com/file/d/1Ku6Q9uw2ZUwgizBf3nnj2ZyvP2nYc9QZ/view?usp=sharing

## PWA 테스트를 하는 경우

https://create-react-app.dev/docs/making-a-progressive-web-app/

현재 프로젝트 설정은 build 버전의 경우에만 service worker가 작동하도록 되어있습니다.
만약 PWA테스트를 하시는 경우 build 명령어를 실행 후 build 서버를 이용해 테스트해 주시면 됩니다.

```
npm run build
serve -s build
```

service worker는 https에서만 작동하지만 예외적으로 localhost에서도 동작합니다.  
또한 캐시 기능 때문에 시크릿창에서 테스트를 하셔야 편리합니다.
만약 스마트폰에서 동작을 확인하고 싶으면 ngrok을 이용해 임시 https주소를 만들면 편리합니다.  
현재 pwa기능은 캐싱 기능 밖에 없기 때문에 push알람과 업데이트 같은 기능은 직접 구현해야 합니다.
