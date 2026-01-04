import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    const [length, setLength] = useState([4]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    } ,[])
    return (
        <div className='container mx-auto mb-12'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-3xl font-bold'>Recent Blogs</h1>
                <Link to='/blogs'><p>See all</p></Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    blogs.slice(0, length).map((blog) =><Blog blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;