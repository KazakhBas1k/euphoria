import LanguageSelect from '../LanguageSelect/LanguageSelect';
import Search from '../Arms/Search/Search';
import Button from '../Arms/Button/Button';
import Logo from '../Logo/Logo'
import './style.scss'

export default function AuthHeader() {
    return(
        <header>
            <nav>
                <a href="#asd"><Logo></Logo></a>
                <Search></Search>
                <LanguageSelect></LanguageSelect>
                <div className='header_buttons'>
                    <Button name="Login"></Button>
                    <Button name="Sign Up"></Button>
                </div>
            </nav>
        </header>
    );
}