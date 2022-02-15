import styled from 'styled-components';
import kakao_img from '../../../image/kakao_login_large_narrow.png';

export default function KakaoLoginButton({ className, login }) {
  return (
    <KakaoButton
      className={className}
      onClick={
        login ||
        (() => {
          alert('로그인 함수를 넣어주세요.');
        })
      }
    ></KakaoButton>
  );
}

const KakaoButton = styled.button`
  background-image: url(${kakao_img});
  background-size: contain;

  width: 216px;
  height: 53px;
  border-radius: 12px;

  // reset user agent
  padding: 0;
  border: none;
`;
