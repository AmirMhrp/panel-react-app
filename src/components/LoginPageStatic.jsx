import Logo from "../assets/Logo.svg";
import "./LoginPageStatic.css";
import LoginPage from "./LoginPage";

function LoginPageStatic() {
  return (
    <>
      <div className="login-page">
        <div className="vector-shape">
          <div className="eclipse"></div>
          <img className="logo-page" src={Logo} />
        </div>
        <LoginPage/>
      </div>
    </>
  );
}
export default LoginPageStatic;
