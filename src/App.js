import { Route, Routes } from 'react-router-dom';
import BackgroundLayout from './common/BackgroundLayout';
import MenuNav from './common/MenuNav';
import Home from './pages/home/presentational/Home';
import Login from './pages/login/container/Login';
import KakaoAuth from './pages/login/container/KakaoAuth';
import GoogleAuth from './pages/login/container/GoogleAuth'
import { useSelector } from 'react-redux';
import AiPages from './pages/AI-pages/presentation/AiPages';
import AccountPage from './pages/Accountpage/presentational/AccountPage';

export default function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return (
    <BackgroundLayout className="App">
      <Routes>
        {isLoggedIn ? (
          // route after login
          <>
            <Route path="/" element={<Home />} />
            <Route path="/second" element={<AiPages />} />
            <Route path="/third" element={<AccountPage/>} />
            <Route path="/fourth" element={'Community page'} />
            <Route path="/fifth" element={'Settings page'} />
            <Route path="*" element={'404'} />
          </>
        ) : (
          // route before login
          <>
            <Route path="/oauth/kakao" element={<KakaoAuth />} />
            <Route path="/oauth/google" element={<GoogleAuth />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
      {isLoggedIn && <MenuNav />}
    </BackgroundLayout>
  );
}
