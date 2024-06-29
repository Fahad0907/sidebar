import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hmm from "./components/hmm/Hmm";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

function App() {
  return (
    <div>
      {/* <LoginSocialGoogle
        client_id={
          "968486674367-olhprlcfrv1gruokf9iappa2c5spv4e2.apps.googleusercontent.com"
        }
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log({ provider, data });
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle> */}
      <Hmm />
    </div>
  );
}

export default App;
