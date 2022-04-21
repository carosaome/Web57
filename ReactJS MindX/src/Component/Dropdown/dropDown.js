import './dropDown.css'
function Dropdown(props){
    const options = props.options
    return(
        <div className='container__drop-down'>
            Dropdown
            <ul 
                style={{
                    
                }}
                className='drop-down__lists'>
                {options.map((item, index)=>{
                    return <li key={index} className='drop-down__lists__item'> {item} </li>
                })}
            </ul>
        </div>

    )
}
export default Dropdown