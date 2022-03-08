import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../../modules/login';
import { setItem } from '../../../utils/cookies';

export default function GoogleAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const code = new URLSearchParams(window.location.search).get('code');
      if (code === null) {
        throw Error('query parameter:code is not exist.');
      }
      // fetch auth code to back: use axios.post()
      axios
        .post('http://ec2-13-209-73-79.ap-northeast-2.compute.amazonaws.com:8080/auth/callback', {
          code,
          loginType: 'GOOGLE',
        })
        .then((response) => {
          console.log(response);
          setItem('loginHistory', 'true'); // set cookie
          dispatch(signIn());
          console.log('login success!');
          navigate('/', { replace: true });
        })
        .catch((error) => {
          // network communication error
          console.log(error);
          console.log('post error!');
          navigate('/', { replace: true });
        });
    } catch (error) {
      console.log(error);
      console.log('login error!');
      navigate('/', { replace: true });
    }
  }, [dispatch, navigate]);
  return <div style={{ margin: '50%', color: 'white' }}>{'로그인 중입니다...'}</div>;
}