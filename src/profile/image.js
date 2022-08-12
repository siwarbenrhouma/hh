function Image(props)
{
    return (<img src={props.children} style={{width:" 400px", 
        height: "auto"}} /> )
}
export default Image 