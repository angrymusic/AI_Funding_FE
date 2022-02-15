import styled from 'styled-components';
import GoogleLoginButton from './GoogleLoginButton';
import KakaoLoginButton from './KakaoLoginButton';
import GoogleLoginBtn from '../container/google-login';
import Logo from './Logo';

export default function Login() {
  return (
    <LoginPageLayout>
      <Logo></Logo>
      <LayoutedKakao></LayoutedKakao>
      <LayoutedGoogle></LayoutedGoogle>
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
