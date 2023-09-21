import Button from "../../components/Arms/Button/Button";
import "./style.scss";

export default function SignUp() {
  return (
    <div className="auth_container">
      <div className="wrapper">
        <img src="../assets/auth/sign_up_img.png" alt="sign_up_img" />
      </div>
      <div className="form">
        <div className="top">
          <h1>Sign Up</h1>
          <p>Sign up for free to access to in any of our products</p>
        </div>
        <div className="another_auth">
          <Button
            name="Continue With Google"
            type="secondary"
            padding="16px 20px"
            iconSrc="./assets/svg/google.svg"
          />
          <Button
            name="Continue With Twitter"
            type="secondary"
            padding="16px 20px"
            iconSrc="./assets/svg/twitter.svg"
          />
        </div>
        <div className="email_password">
          
        </div>
      </div>
    </div>
  );
}
