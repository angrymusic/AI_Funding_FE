import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useCookie from '../../../hooks/useCookie';
import { signIn } from '../../../modules/login';

export default function KakaoAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, setHasRefresh] = useCookie('hasRefresh', 'false');
  useEffect(() => {
    try {
      const data = new URLSearchParams(window.location.search);
      // fetch auth code to back: use axios.get()
      // axios
      //   .get('localhost:8080/api/login/manual', {
      //     headers: {
      //       Authorization: `Basic ${data.get('code')}`,
      //     },
      //   })
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      setHasRefresh('true');
      dispatch(signIn());
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div style={{ margin: '50%', color: 'white' }}>{'Loading...'}</div>;
}
