function UserInfo (props){
return(
  <div>
    <h2>{props.data.name}</h2>
    <p>{props.data.email}</p>
    <a href={props.data.website}>{props.data.website}</a>
  </div>
)
}

export default UserInfo 