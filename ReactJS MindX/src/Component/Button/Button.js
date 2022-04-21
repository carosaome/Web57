
import './Button.css';
function Button(props){
    let transformValue;

    if(props.size === "small"){
        transformValue = "scale(0.5)";
    }
    else if(props.size === "medium"){
        transformValue = "scale(1)";
    }
    else if(props.size === "large"){
        transformValue = "scale(1.5)";
    }

    return(
        <button style={{backgroundColor: props.primary ? '#6969e4' : props.backgroundColor||'',
            width:props.size,
            height:props.size,
            margin: props.size =='28px' ?'0 5px' : 'null',
            transform: transformValue
        }
                    
}
                className='button' 
                onClick={props.onClick} >
                {props.label||''}
                </button>
    )
}
export default Button