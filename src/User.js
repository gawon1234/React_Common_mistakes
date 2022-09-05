import {React , useEffect,useState } from 'react'
import { useLocation , Link } from 'react-router-dom';

const User = () => {

  const [user, setUser] = useState('');
  let uid = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const ac = new AbortController();
    const signal = ac.signal;

    
    fetch(`https://jsonplaceholder.typicode.com/users/${uid}` , signal )
      .then( res => res.json())
      .then( data => {
        console.log(data);
          setUser(data);
      } ).catch( err => {
        if(err.name === "AbortError")
          console.log('canceleed');
        else
        console.log('else');
      }) ;

      return () => {
        ac.abort();
      }

  }, [uid]);

  return (
    <div>

      <p> Name : {user.name} </p>
      <p> UserName : {user.username} </p>
      <p> Email : {user.email} </p>

      <Link to= 'User/2'>User2</Link> <br />
      <Link to= 'User/3'>User3</Link><br />
      <Link to= 'User/4'>User3</Link><br />
      <Link to= 'User/5'>User3</Link>

    </div>
  )
}

export default User