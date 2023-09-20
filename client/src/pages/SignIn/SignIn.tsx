import { useState } from "react";
import Button from "../../components/Arms/Button/Button";
import "./style.scss";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth_container">
      <div className="wrapper">
        <img src="../assets/auth/sign_in_img.png" alt="img" />
      </div>
      <div className="sign_in form">
        <h1>Sign In Page</h1>
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
        <div className="or_line">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>
        <div className="auth_form">
          <div className="login input">
            <label htmlFor="login">User name or email address</label>
            <input type="text" name="login" />
          </div>
          <div className="password input">
            <div className="label">
              <label htmlFor="login">Password</label>
              <button
                className="hide_show"
                onClick={() => {
                  setShowPassword((pre) => !pre);
                }}
              >
                {showPassword ? (
                  <>
                    Show <img src="./assets/svg/show.svg" alt="show" />{" "}
                  </>
                ) : (
                  <>
                    Hide <img src="./assets/svg/hide.svg" alt="hide" />
                  </>
                )}
              </button>
            </div>
            <input type={showPassword ? "text" : "password"} name="login" />
            <a href="reset" className="link">
              Forget your password
            </a>
          </div>
        </div>
        <div className="bottom">
          <Button name="Sign In" type="primary" padding="16px 20px" />
          <p>
            Don’t have an account?{" "}
            <a href="link" className="link">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
