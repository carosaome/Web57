import './Tag.css'
function Tag(props){

    return(
        <div onClick={props.onClick} className="container__tag__item">
            {props.text}
        </div>

    )
}
export default Tag