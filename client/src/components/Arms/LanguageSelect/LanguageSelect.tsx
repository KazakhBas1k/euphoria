import './style.scss'

export default function LanguageSelect() {
    return(
        <div className='lang'>
            <select name="LanguageId" id="Language">
                <option value="EN">English (united States)</option>
                <option value="RU">Русский (Россия)</option>
            </select>
        </div>
    );
}