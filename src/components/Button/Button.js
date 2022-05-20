import "./Button.css"

const Button = (props) => {
    return(
        <button onClick={props.onClick} className="button" 
        style={{backgroundColor:props.Color}}>
            {props.content}

        </button>
    );
};

export default Button;