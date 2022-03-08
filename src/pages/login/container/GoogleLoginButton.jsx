import styled from 'styled-components';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { useGoogleLogin } from 'react-google-login';
import google_img from '../../../image/google_login.png';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn as signInAction } from '../../../modules/login';

const clientId = '553483572727-gd4ld8e84b825dk38eqjspbiqut6fjrg.apps.googleusercontent.com';

export default function GoogleLoginBtn({ className, onGoogleLogin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSuccess = async (response) => {
    //const { googleId, profileObj : { email, name } } = response;
    console.log(response);
    // dispatch(signInAction());
    // navigate('/');
    /*
      await onGoogleLogin (
          console.log("test")
      );*/
  };

  // useEffect(() => {
  //   try {
  //     console.log('code');
  //     // fetch auth code to back: use axios.post()
  //     dispatch(signIn());
  //     navigate('/');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [navigate, dispatch]);

  const onFailure = (error) => {
    console.log(error);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: 'offline',
    responseType: 'code',
    // prompt: 'consent',
  });

  return <Testbutton className={className} onClick={signIn}></Testbutton>;
  /*
    return(
        <div>

        
          <meta name ="google-signin-client_id" content="553483572727-gd4ld8e84b825dk38eqjspbiqut6fjrg.apps.googleusercontent.com"></meta>
            <GoogleLogin
                //buttonText="TESbT"
                clientId={clientId}
                rander={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>

                    </button>
                )
                }
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
        
    )
    */
}

const Testbutton = styled.button`
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

// styled.button`
//   background-size: contain;
//   background-repeat: no-repeat;
//   width: 216px;
//   height: 53px;
//   border-radius: 12px;

//   // reset user agent
//   padding: 0;
//   border: none;
//   outline: 0;
//   box-shadow: none;
// `;
