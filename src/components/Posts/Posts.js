import axios from "axios";
import {useEffect, useState} from "react";

const Posts =() => {
    const [posts, setPosts]= useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(()=>{
        getData();
    }, [])

    async function getData (){
        try {
            setLoading(true);
           const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
           
            setPosts(response.data);
            console.log ('response:' , response)
        }
        catch(e){
            console.log(e)
           

        } finally{setLoading(false)}
    }

    if (loading)

     
  return (
      <div> Loading...</div>
  )
     return(
         <div>
             {posts.map ((item)=> (<div>{item.title}</div>))
             }
         </div>
     );
  
    

};

 export default Posts;