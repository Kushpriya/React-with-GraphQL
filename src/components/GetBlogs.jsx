import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {GET_BLOGS} from '../graphql/Queries'
import '../css/getblogs.css'

export default function GetBlogs(){
    const { error, loading , data } = useQuery(GET_BLOGS);
    // console.log({error,data,loading})
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        if (data) {
        setBlogs(data.characters.results);
        }
        // console.log(data);
    }, [data]);

if (loading) return <p>Loading...</p>;
if (error) return <p>Something went Wrong!!</p>;
    
      return (
        <div className='GetBlogs'>
        {blogs.map( (blog) => (
            <div key={blog.id}>
                <img src={blog.image} />
                <h1>{blog.name}</h1>

            </div>
        ))}

        </div>
      )
}