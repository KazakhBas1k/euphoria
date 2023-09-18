import LanguageSelect from '../Arms/LanguageSelect/LanguageSelect';
import Search from '../Arms/Search/Search';
import './style.scss'

export default function AuthHeader() {
    return(
        <header>
            <nav>
                <a href="#asd"><img src="./assets/Logo.png" alt="Logo" /></a>
                <Search></Search>
                <LanguageSelect></LanguageSelect>
            </nav>
        </header>
    );
}