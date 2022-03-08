import styled from 'styled-components';
import kakao_img from '../../../image/kakao_login_large_narrow.png';

export default function KakaoLoginButton({ className, href }) {
  return <KakaoButton href={href} className={className} />;
}

const KakaoButton = styled.a`
  background-image: url(${kakao_img});
  background-size: contain;

  width: 216px;
  height: 53px;
  border-radius: 12px;

  // reset user agent
  padding: 0;
  border: none;
`;
