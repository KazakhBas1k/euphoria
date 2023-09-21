import LanguageSelect from "../Arms/LanguageSelect/LanguageSelect";
import Search from "../Arms/Search/Search";
import Button from "../Arms/Button/Button";
import Logo from "../Arms/Logo/Logo";
import "./style.scss";

export default function AuthHeader() {
  return (
    <header>
      <nav>
        <a href="Home">
          <Logo></Logo>
        </a>
        <Search></Search>
        <LanguageSelect></LanguageSelect>
        <div className="header_buttons">
          <Button name="Login" type="primary" padding="12px 48px"></Button>
          <Button name="Sign Up" type="secondary" padding="12px 48px"></Button>
        </div>
      </nav>
    </header>
  );
}
