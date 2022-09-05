import {React, useState , useEffect } from 'react'


const Posts = () => {
    const [post, setPost] = useState([]);


    useEffect( () => {
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const data = await response.json();
        let subscribed = true;

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json() )
            .then((data) => {
                if(subscribed){
                    alert('alert');
                    setPost(data);
                    console.log(data);
                }
            });

        return () => {
            subscribed = false;
        }
        // setPost(data);

    }, []);


  return (
    <div>
        aaaa
        {
            post.map((ele) => {
                return <p key={ele.id}> {ele.title} </p>
            })
        }

    </div>
  )
}

export default Posts;