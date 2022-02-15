const JAVASCRIPT_KEY = process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY;
const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_KEY;

export const authorizeKakao = () => {
  window.Kakao.Auth.authorize({
    redirectUri: REDIRECT_URI,
  });
};

export const initializeKakao = () => {
  // Kakao.Auth, Kakao.API등을 사용하기 위해 실행해야 하는 함수
  // 페이지가 리다이렉트 된 경우 다시 실행해야 한다.
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(JAVASCRIPT_KEY);
  }
};
