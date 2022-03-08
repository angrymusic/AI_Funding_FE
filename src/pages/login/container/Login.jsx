import styled from 'styled-components';
import KakaoLoginButton from '../presentational/KakaoLoginButton';
import GoogleLoginButton from '../presentational/GoogleLoginButton';
import Logo from '../presentational/Logo';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../modules/login';

export default function Login() {
  const dispatch = useDispatch();

  return (
    <LoginPageLayout>
      <Logo></Logo>
      <LayoutedKakao href="http://ec2-13-209-73-79.ap-northeast-2.compute.amazonaws.com:8080/auth/KAKAO" />
      <LayoutedGoogle href="http://ec2-13-209-73-79.ap-northeast-2.compute.amazonaws.com:8080/auth/GOOGLE"/>
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

const LayoutedGoogle = styled(GoogleLoginButton)`
  margin-top: 7%;
`;
