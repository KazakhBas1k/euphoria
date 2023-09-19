import './style.scss'

export default function Search() {
    return(
    <div className="search">
        <img src="./assets/svg/search.svg" alt="Search" />
        <input type="text" placeholder='Search'/>
    </div>);
}