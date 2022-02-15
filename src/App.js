import { Route, Routes } from 'react-router-dom';
import BackgroundLayout from './common/BackgroundLayout';
import MenuNav from './common/MenuNav';
import Home from './pages/home/presentational/Home';
import Login from './pages/login/container/Login';
import KakaoAuth from './pages/login/container/KakaoAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import useCookie from './hooks/useCookie';
import { autoSignIn } from './modules/login';
import AiPages from './pages/AI-pages/presentation/AiPages';
import AccountPage from './pages/Accountpage/presentational/AccountPage';

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [hasRefreshCookie] = useCookie('hasRefresh', '');

  useEffect(() => {
    console.log('are you logged in?');
    if (hasRefreshCookie === 'true') {
      console.log('I have Refresh Token!');
      try {
        // const response = await axios.get('localhost:8080/api/login/auto');
        // dispatch(autoSignIn('fakeToken'));
      } catch (error) {
        // case1. refresh token is expired
        if (error.msg === 'expired') {
          console.log('토큰이 만료되었습니다. 로그인을 다시 해주세요.');
        }
        // case2. other error
      }
    }
  }, []);

  return (
    <BackgroundLayout className="App">
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/second" element={<AiPages />} />
            <Route path="/third" element={<AccountPage />} />
            <Route path="/fourth" element={'Community page'} />
            <Route path="/fifth" element={'Settings page'} />
            <Route path="*" element={'404'} />
          </>
        ) : (
          <>
            <Route path="/oauth/*" element={<KakaoAuth />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
      {isLoggedIn && <MenuNav />}
    </BackgroundLayout>
  );
}
