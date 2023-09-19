import './style.scss'
interface Button {
    name: string;
}

export default function Button(props: Button) {
    return(
        <button className="button">{props.name}</button>
    );
}