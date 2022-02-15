import styled from 'styled-components';
import google_img from '../../../image/google_login.png';

export default function GoogleLoginButton({ className, login }) {
  return <GoogleButton className={className}></GoogleButton>;
}

const GoogleButton = styled.button`
  background-size: contain;

  width: 216px;
  height: 53px;
  border-radius: 12px;

  // reset user agent
  padding: 0;
  border: none;
`;
