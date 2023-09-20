import './style.scss'

interface ButtonInt {
    name: string;
    type: 'primary' | 'secondary' | 'text' | 'elevated';
    padding: string;
    iconSrc?: string;
}

export default function Button(props: ButtonInt) {

    return(
        <button 
            className={`button ${props.type}`} 
            style={{padding: props.padding}}
        >
            {props.iconSrc ? <img src={props.iconSrc} alt='icon'/> : <></>}
            {props.name}
        </button>
    );
}