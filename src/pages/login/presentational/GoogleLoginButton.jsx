import styled from 'styled-components';
import google_img from '../../../image/google_login.png';

export default function GoogleLoginButton({ className, href }) {
  return <GoogleButton href={href} className={className}></GoogleButton>;
}

const GoogleButton = styled.a`
  background-image: url(${google_img});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;

  width: 216px;
  height: 53px;
  border-radius: 12px;

  // reset user agent
  padding: 0;
  border: none;
`;
