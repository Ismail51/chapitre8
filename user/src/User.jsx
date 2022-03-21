import {useState, useEffect} from 'react' 
import Axios from 'axios'
import axios from 'axios';
import UserInfo from './UserInfo';

function User() {
  var [users, setUsers] = useState([]);
  useEffect (()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(result=>{
      // console.log(result.data);
      setUsers(result.data)
    })
    // console.log("salut");
  },[])
  return (
    <div>
      {
        users.map(user=><UserInfo data={user}></UserInfo>)
      }
    </div>
  );
}

export default User;