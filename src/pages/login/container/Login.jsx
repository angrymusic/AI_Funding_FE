import styled from 'styled-components';
import KakaoLoginButton from '../presentational/KakaoLoginButton';
import GoogleLoginBtn from './GoogleLoginButton';
import Logo from '../presentational/Logo';
import { useDispatch } from 'react-redux';
import { autoSignIn, signIn } from '../../../modules/login';
import { useEffect } from 'react';
import { initializeKakao, authorizeKakao } from './kakao';

export default function Login() {
  const dispatch = useDispatch();

  return (
    <LoginPageLayout>
      <Logo></Logo>
      <LayoutedKakao
        login={() => {
          initializeKakao();
          authorizeKakao();
        }}
      />
      <LayoutedGoogle />
      <button
        onClick={() => {
          // 개발용 로그인 스킵 버튼.
          // set isLoggedIn True
          dispatch(signIn('fakeToken'));
        }}
      >
        Skip
      </button>
    </LoginPageLayout>
  );
}

const LoginPageLayout = styled.div`
  // border: 3px yellow solid;
  flex-grow: 1;

  // layout
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LayoutedKakao = styled(KakaoLoginButton)`
  margin-top: 10%;
`;

const LayoutedGoogle = styled(GoogleLoginBtn)`
  margin-top: 7%;
`;
