
function Profile(props)
{
    function HandleName()
    {
        alert(props.user)
    }
    return(<div style={{alignItems:"center",justifyContent:"center"}}>
       <h1 >My name is {props.FullName}</h1>
       <p>
      {props.bio}<br/>
      I work as a {props.profession}</p>
      <a onClick={HandleName}>click me</a>
      </div>
    )
}
export default Profile